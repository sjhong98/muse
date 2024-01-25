import axios from 'axios';
import { View, Skeletons } from '@/components/components';
import styled from "styled-components";
import Header from '../components/header';
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { resType } from '@/types/type';
import { useRouter } from 'next/router';

export const getStaticPaths = async () => {
  let temp = [];
  for(let i=1; i<=1; i++)
    if(i !== 2 && i !== 20)
      temp.push({params:{index: `${i}`}});
  console.log("\nGetStaticPaths : ", temp);
  return {
      paths: temp, 
      fallback: false
  }
}

export async function getStaticProps(context:any) {
  console.log("\nStaticProps : ", context.params.index);
  const index:string = context.params.index;
  const response = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${index}`);
  const data = response.data.objectIDs;
  let item;
  let _res = [];

  for(let i=0; i<20; i++) {
    item = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${data[i]}`)
    if(item.data.primaryImageSmall !== ""){
      let temp = {
        primaryImageSmall: item.data.primaryImageSmall,
        title: item.data.title,
        city: item.data.city,
        artistDisplayBio: item.data.artistDisplayBio,
        artistDisplayName: item.data.artistDisplayName,
        country: item.data.country,
        dimensions: item.data.dimensions,
        medium: item.data.medium,
        objectName: item.data.objectName,
        objectURL: item.data.objectURL,
        repostory: item.data.repository,
        objectID: item.data.objectID
      }
      _res.push(temp);
      
    }
  }

  return {
    props: { initialData : _res }
  }
}

// 객체 리터럴을 통해 변수를 따로 저장함으로써 getServerSideProps의 결과와 독립되어 지기
export default function Home( { initialData } : InferGetStaticPropsType<GetStaticProps>) {
  const targetRef = useRef<HTMLDivElement>(null);
  const [res, setRes] = useState<resType[]>([]);
  const router = useRouter();
  const options = {
    root: null,   // 타겟요소가 어디에 들어왔을 때 동작할 것인지 설정. null일경우 viewport에 target이 들어올 경우 동작. document.querySelector('')로 특정요소 지정 가능
    threshold: 0.2  // 타겟요소가 root에 얼마나 진입했을 때 동작할 것인지 설정. 1일 경우 전체가 진입해야 함. 
  }

  useEffect(() => {
    console.log("query changed", initialData);
    setRes(initialData);
  }, [router.query, initialData])


  let observer:IntersectionObserver;

  return (
    <View>
      <Header />
      <Content res={res} />
      {/* { isLoading ?
        <Skeletons />
        :
        <></>
      } */}
      <div ref={targetRef} style={{height:'1vh', width:'100vw'}} />
      <Skeletons />
      {/* <div style={{height:'10vh', width:'100vw'}}></div>
      <div ref={targetRef} style={{height:'10vh', width:'100vw'}} /> */}
    </View>
  )
}

interface contentProps {
    res:resType[]
}

function Content(props:contentProps) {
    const modalRef = useRef<HTMLDivElement>(null);
    const outsideRef = useRef<HTMLDivElement>(null);
    const [selected, setSelected] = useState<number>(-1);
    const res = props.res;
    const router = useRouter();

    useEffect(() => {
        const handleClickOutside = (event:MouseEvent) => {
            // modalRef.current : 현재 모달이 마운트되어 있을 때에만 동작
            // !modalRef.current.contains(event.target as Node)) : 클릭된 영역이 모달 영역이 아닐 경우에만 동작
            if(modalRef.current && !modalRef.current.contains(event.target as Node)) {
                event.preventDefault();
                setSelected(-1);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [])

    return (
        <ContentComponent ref={outsideRef}>        
            { res.length !== 0 && res.map((item:resType, index:number) => {
            return (
                item.primaryImageSmall !== "" ?
                    selected === index ?
                        <div 
                            key={index} 
                            ref={modalRef} 
                            className="absolute flex-row"
                        >
                            <ImageClicked
                                key={index}
                                className="shadow-2xl"
                                src={item.primaryImageSmall} 
                            />
                            <Caption>
                                <C1>{item.title}</C1>
                                <CS /><CS />
                                <C2>{item.artistDisplayName}</C2>
                                <C2>{item.artistDisplayBio}</C2>
                                <CS />
                                <C2>{item.country}</C2>
                                <C2>{item.city}</C2>
                                <CS />
                                <C2>{item.medium}</C2>
                                <CS />
                                <C2>{item.objectName}</C2>
                                <C2>{item.dimensions}</C2>
                                <CS />
                                <C2>{item.repository}</C2>
                            </Caption>
                            <div 
                                className="fixed w-screen h-screen bg-black opacity-70 z-[9998] left-[0vw] top-[0vh] cursor-pointer" 
                                onClick={()=>setSelected(-1)}
                            />
                        </div>
                        :
                        <Image
                            key={index}
                            className='image'
                            onClick={() => setSelected(index)}
                            src={item.primaryImageSmall} 
                            alt="..."
                            width={200}
                            height={200}
                        />
                :
                <></>
            )
          }) }
        </ContentComponent>
    )
}

const ContentComponent = styled.div`
    width: 70%;
    margin-top: 30vh;
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-row-gap: 5vh;
    grid-column-gap: 3vw;
`

const C1 = styled.p`
    font-size: 2rem;
    font-family: 'lemon';
`

const C2 = styled.p`
    font-size: 1.2rem;
    font-family: 'lemon';
`

const CS = styled.div`
    height: 2vh;
    font-family: 'lemon';
`

export const ImageClicked = styled.img`
    position: fixed;
    width: 25%;
    object-fit: cover;  
    z-index: 9999;
    scale: 1.2;
    left: 20vw;
    top: 20vh;
`

export const Caption = styled.div`
    position: fixed;
    width: 35vw;
    height: 60vh;
    left: 55vw;
    top: 15vh;
    z-index: 9999;
`
