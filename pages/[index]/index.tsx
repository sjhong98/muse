import axios from 'axios';
import { View, Skeletons } from '@/components/components';
import Header from '../components/header';
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { resType } from '@/types/type';
import { useRouter } from 'next/router';
import Content from '../content';
import { Axios } from '@/axios';
import _ from 'lodash';


export const getStaticPaths = async () => {
  let temp = [];
  for(let i=1; i<=21; i++)
    if(i !== 2 && i !== 20)
      temp.push({params:{index: `${i}`}});
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

  for(let i=0; i<40; i++) {
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
        repository: item.data.repository,
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
  const [res, setRes] = useState<resType[]>(initialData);
  const [fetchIndex, setFetchIndex] = useState<number>(40);
  const [target, setTarget] = useState<any>();
  const router = useRouter();
  let flag = false;
  const options = {
    root: null,   // 타겟요소가 어디에 들어왔을 때 동작할 것인지 설정. null일경우 viewport에 target이 들어올 경우 동작. document.querySelector('')로 특정요소 지정 가능
    threshold: 1  // 타겟요소가 root에 얼마나 진입했을 때 동작할 것인지 설정. 1일 경우 전체가 진입해야 함. 
  }

  useEffect(() => {
    setRes(initialData);
  }, [router.query, initialData])

  useEffect(() => {
    const handleLoading = ([entry]:any, observer:any) => {
      if(entry.isIntersecting && flag) {
        observer.unobserve(entry.target);
        // observe 해체
        Axios(fetchIndex, JSON.parse(router.query.index as string)).then((_res) => {
          setRes((prev)=>[...prev, ..._res]);
          observer.observe(entry.target);
          // observer 재시작
        });
      }
      flag = true;
      setFetchIndex((prev)=>prev+20);
    }

    let observer:any;
    if(target) {
      observer = new IntersectionObserver(handleLoading, options);
      observer.observe(target);
    }
    return () => {
      if(observer)
      observer.disconnect();
    };
  }, [target, router.query.index]);

  return (
    <View>
      <Header />
      <Content res={res} />
      <div ref={setTarget} style={{height:'1vh', width:'100vw'}} />
      <Skeletons />
    </View>
  )
}

