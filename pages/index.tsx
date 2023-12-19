export async function getServerSideProps() {
  const response = await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=1');
  const data = response.data.objectIDs;
  let start: number = 0;
  let end: number = 40;
  let item;
  let res = [];

  for(let i=start; i<end; i++) {
    item = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${data[i]}`)

    // primaryImage가 없는 경우, 애초에 res에 들어가지 못하도록함
    if(item.data.primaryImage !== "")
        res.push(item.data);
  }

  return {
    props: { res }
  }
}

import axios from 'axios';
import { View, Skeletons } from '@/components/components';
import styled, {keyframes} from "styled-components";
import { Header } from '@/components/header';
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React, { useEffect, useRef, useState } from 'react';

interface resType {
  primaryImage: string,
  title: string,
  city: string,
  artistDisplayBio: string,
  artistDisplayName: string,
  country: string,
  dimensions: string,
  medium: string,
  objectName: string,
  objectURL: string,
  repository: string
}

export default function Home(response : InferGetServerSidePropsType<GetServerSideProps>) {
  const targetRef = useRef<HTMLDivElement>(null);
  let count:number = 0;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [res, setRes] = useState<resType[]>(response.res);
  const [index, setIndex] = useState<number>(3);

  const options = {
    root: null,   // 타겟요소가 어디에 들어왔을 때 동작할 것인지 설정. null일경우 viewport에 target이 들어올 경우 동작. document.querySelector('')로 특정요소 지정 가능
    threshold: 0.1  // 타겟요소가 root에 얼마나 진입했을 때 동작할 것인지 설정. 1일 경우 전체가 진입해야 함. 
  }

  const handleLoading = () => {
    if(count !== 0 && !isLoading) {
      FetchData(3, true);
      setIsLoading(true);
    } else {
      count++;
    }
  }

  const FetchData = async (_index:number, isScroll:boolean) => {
    const response = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${_index}`);
    const data = response.data.objectIDs;
    let start: number = 0;
    let end: number = 20;
    let item;
    let temp:resType[];
    if(isScroll)
      temp = [...res];
    else
      temp = [];

    for(let i=start; i<end; i++) {
      item = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${data[i]}`)
      if(item.data.primaryImage !== "")
        temp.push(item.data);
    }

    setRes(temp);
    setIsLoading(false);
  }

  let observer:IntersectionObserver;
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    observer = new IntersectionObserver(handleLoading, options);
  }
      
  useEffect(() => {
    console.log("res : ", res);

    if(targetRef.current) {
      observer.observe(targetRef.current);
    }
    return () => {
      if (observer && targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
    
  }, [])

  useEffect(() => {
    setRes([]);
    FetchData(index, false);
  }, [index])

  return (
    <View>
      <Header setIndex={setIndex} />
      <Content res={res} />
      { isLoading ?
        <Skeletons />
        :
        <></>
      }
      <div ref={targetRef} style={{height:'10vh', width:'100vw'}} />
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

    useEffect(() => {
        const handleClickOutside = (event:MouseEvent) => {
            // modalRef.current : 현재 모달이 마운트되어 있을 때에만 동작
            // !modalRef.current.contains(event.target as Node)) : 클릭된 영역이 모달 영역이 아닐 경우에만 동작
            if(modalRef.current && !modalRef.current.contains(event.target as Node)) {
                console.log('modal ends');
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
                item.primaryImage !== "" ?
                    selected === index ?
                        <div 
                            key={index} 
                            ref={modalRef} 
                            className="absolute flex-row"
                        >
                            <ImageClicked
                                key={index}
                                className="shadow-2xl"
                                src={item.primaryImage} 
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
                            onClick={() => setSelected(index)}
                            src={item.primaryImage} 
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

const selectedAnim = keyframes`
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(1.1);
    }
`

const unselectedAnim = keyframes`
    0% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
`

export const Image = styled.img`
    width: 100%;
    object-fit: cover;   
    cursor: pointer;

    &:hover {
        animation: ${selectedAnim} 0.5s ease forwards;
    }

    &:not(:hover) {
        animation: ${unselectedAnim} 0.5s ease forwards;
    }
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