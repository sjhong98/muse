export async function getServerSideProps() {
  const response = await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=3');
  const data = response.data.objectIDs;
  let start: number = 0;
  let end: number = 40;
  let item;
  let res = [];

  for(let i=start; i<end; i++) {
    item = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${data[i]}`)
    res.push(item.data);
  }

  return {
    props: { res }
  }
}

import axios from 'axios';
import { View, Header, Content, Image } from '../components/components';
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Skeleton from '@mui/material/Skeleton';
import React, { useEffect, useRef, useState } from 'react';

interface resType {
  primaryImage: string,
}

export default function Home(response : InferGetServerSidePropsType<GetServerSideProps>) {
  // const targetRef = useRef<IntersectionObserver>();
  const targetRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState<number>(0);

  const options = {
    root: null,   // 타겟요소가 어디에 들어왔을 때 동작할 것인지 설정. null일경우 viewport에 target이 들어올 경우 동작. document.querySelector('')로 특정요소 지정 가능
    threshold: 0.1  // 타겟요소가 root에 얼마나 진입했을 때 동작할 것인지 설정. 1일 경우 전체가 진입해야 함. 
  }

  const handleLoading = () => {
    console.log("count : ", count);
    
    if(count !== 0) {
      console.log("catched");
    } else 
      setCount(1);

  }

  let observer:IntersectionObserver;
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    observer = new IntersectionObserver(handleLoading, options);
  }
      
  useEffect(() => {
    
    // if(isLoading) {
      if(targetRef.current) {
        observer.observe(targetRef.current);
      }
      return () => {
        if (observer && targetRef.current) {
          observer.unobserve(targetRef.current);
        }
      };
    // }
    
  }, [])

  const res: resType[] = [];
  for(let i=0; i<response.res.length; i++) {
    res.push(response.res[i]);
  }

  return (
    <View>
      <Header />
      <Content>
      { res.length !== 0 && res.map((item:resType, index:number) => {
          return (
            item.primaryImage ?
            <Image key={index} src={item.primaryImage} />
            :
            <Skeleton variant="rectangular" width={200} height={200} />
          )
        })
      }
      </Content>
      <div ref={targetRef} style={{height:'10vh', width:'100vw', backgroundColor:'red'}} />
    </View>
  )

}