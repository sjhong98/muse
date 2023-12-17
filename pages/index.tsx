export async function getServerSideProps() {
  const response = await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=1');
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
import { View, Header, Content, Image, Skeletons, ContentModal } from '../components/components';
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Modal from '@mui/material/Modal';
import React, { useEffect, useRef, useState } from 'react';

interface resType {
  primaryImage: string,
  title: string,
}

export default function Home(response : InferGetServerSidePropsType<GetServerSideProps>) {
  const targetRef = useRef<HTMLDivElement>(null);
  let count:number = 0;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [res, setRes] = useState<resType[]>(response.res);
  const [open, setOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<resType>({});

  const options = {
    root: null,   // 타겟요소가 어디에 들어왔을 때 동작할 것인지 설정. null일경우 viewport에 target이 들어올 경우 동작. document.querySelector('')로 특정요소 지정 가능
    threshold: 0.1  // 타겟요소가 root에 얼마나 진입했을 때 동작할 것인지 설정. 1일 경우 전체가 진입해야 함. 
  }

  const handleLoading = () => {
    if(count !== 0 && !isLoading) {
      FetchData();
      setIsLoading(true);
    } else {
      count++;
    }
  }

  const FetchData = async () => {
    const response = await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=3');
    const data = response.data.objectIDs;
    let start: number = 0;
    let end: number = 20;
    let item;
    let temp:resType[] = [...res];

    for(let i=start; i<end; i++) {
      item = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${data[i]}`)
      temp.push(item.data);
    }

    setRes(temp);
    // isLoading = false;
    setIsLoading(false);
  }

  let observer:IntersectionObserver;
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    observer = new IntersectionObserver(handleLoading, options);
  }
      
  useEffect(() => {
    if(targetRef.current) {
      observer.observe(targetRef.current);
    }
    return () => {
      if (observer && targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [])

  const modalOpen = (item:resType) => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <View>
      <Header />
      <Content>
      { res.length !== 0 && res.map((item:resType, index:number) => {
          return (
                item.primaryImage !== "" ?
                <div>
                  <Image 
                    key={index} 
                    src={item.primaryImage} 
                    onClick={() => {modalOpen(item)}}
                  />
                  <Modal 
                      style={{display:'flex', justifyContent:'center', alignItems:'center'}} 
                      open={open} 
                      onClose={handleClose}
                    >
                      <ContentModal>
                        <p style={{color:'black'}}>hello</p>
                      </ContentModal>
                  </Modal>
                </div>
                :
                <></>
          )
        })
      }
      </Content>
      { isLoading ?
        <Skeletons />
        :
        <></>
      }
      <div ref={targetRef} style={{height:'10vh', width:'100vw'}} />
    </View>
  )

}