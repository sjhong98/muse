export async function getServerSideProps() {
  const response = await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=12');
  const data = response.data.objectIDs;
  let start: number = 0;
  let end: number = 40;
  let item;
  let _res = [];

  for(let i=start; i<end; i++) {
    item = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${data[i]}`)

    // primaryImage가 없는 경우, 애초에 res에 들어가지 못하도록함
    if(item.data.primaryImage !== "")
        _res.push(item.data);
  }

  return {
    props: { initialData : _res }
  }
}

// "use client";

import axios from 'axios';
import { View, Skeletons } from '@/components/components';
import styled, {keyframes} from "styled-components";
import { Header } from '@/components/header';
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React, { useCallback, useEffect, useRef, useState } from 'react';

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
  repository: string,
  objectID: number,
}

// 객체 리터럴을 통해 변수를 따로 저장함으로써 getServerSideProps의 결과와 독립되어 지기
export default function Home( { initialData } : InferGetServerSidePropsType<GetServerSideProps>) {
  const targetRef = useRef<HTMLDivElement>(null);
  let count:number = 0;
  // const [res, setRes] = useState<resType[]>(initialData);
  const [res, setRes] = useState<resType[]>([]);
  const [index, setIndex] = useState<number>(5);
  const [active, setActive] = useState<boolean>(true);
  const [start, setStart] = useState<number>(0);
  const [end, setEnd] = useState<number>(20);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  let noLoad = false;
  let tempVal:number = 1;

  const options = {
    root: null,   // 타겟요소가 어디에 들어왔을 때 동작할 것인지 설정. null일경우 viewport에 target이 들어올 경우 동작. document.querySelector('')로 특정요소 지정 가능
    threshold: 0.1  // 타겟요소가 root에 얼마나 진입했을 때 동작할 것인지 설정. 1일 경우 전체가 진입해야 함. 
  }

  useEffect(() => {
    if(noLoad)
      setIsLoading(false);
    else  
      setIsLoading(true);
    console.log("noload : ", noLoad);
  }, [noLoad])

  // useEffect(() => {
  //   if(targetRef.current) {
  //     observer.observe(targetRef.current);
  //   }
  //   return () => {
  //     if (observer && targetRef.current) {
  //       observer.unobserve(targetRef.current);
  //     }
  //   };
  // }, [])

  useEffect(() => {
    console.log("res : ", res.length);
  }, [res]);

  // useEffect(() => {
  //   console.log('start, end : ', start, end);
  // }, [start, end]);

  // useEffect(() => {
  //   console.log("isLoading : ", isLoading);
  // }, [isLoading])

  

  // const handleLoading = async () => {
  //   setStart((start) => start + 20);
  //   setEnd((end) => end + 20);
  //   await FetchData(index, true, start, end);
  // };

  const FetchData = async (_index:number, isScroll:boolean, start:number, end:number) => {
    if(!noLoad) {
      noLoad = true;
      
      const response = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${_index}`);
      const data = response.data.objectIDs;
      let item;
      let temp:resType[];
      if(isScroll)
        // temp = [...res] 로 하면 계속 배열 리셋됨. 왜 그럴까?
        temp = res;
      else {
        temp = res;
        // 이렇게 하면 객체가 해제되어 메모리에서 제거됨
        temp.length = 0;
      }
      
      console.log("\n\n\n\n");
      console.log("fetchData 동작 중, isScroll : ", isScroll);
      console.log("index : ", _index);
      console.log("기존배열 : ", temp.length);
        
      for(let i=start; i<end; i++) {
        item = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${data[i]}`)
        if(item.data.primaryImage !== "") {
          temp.push(item.data);
          console.log(temp.length);
        }
      }
      setRes(temp);
      noLoad = false;
      console.log("완료된 배열 : ", temp.length, "\n\n\n\n");
    }
  }

  let observer:IntersectionObserver;

  // closure때매 그럼.
  useEffect(() => {
    
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            handleLoading();
          }
        });
      }, options);
    }

    const handleLoading = async () => {
      setStart((start) => start + 20);
      setEnd((end) => end + 20);
      await FetchData(index, true, start, end);
    };
  
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }
  
    return () => {
      if (observer && targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [index]); 
  
  
  useEffect(() => {
    console.log("index changed");
    const fetchDataAndUpdateState = async () => {
      const newObject: resType[] = [];
      if (active) {
        setRes(newObject);
        setStart((start) => start + 20);
        setEnd((end) => end + 20);
        await FetchData(index, false, start, end);
      } else {
        setActive(true);
      }
      setStart(0);
      setEnd(20);
    };
  
    fetchDataAndUpdateState();
  }, [index]);

  const changeIndex = (newIndex: number) => {
    setIndex((index) => newIndex);
  };

  return (
    <View>
      <Header changeIndex={changeIndex} />
      <Content res={res} />
      { isLoading ?
        <Skeletons />
        :
        <></>
      }
      <div style={{height:'50vh', width:'100vw'}}></div>
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
