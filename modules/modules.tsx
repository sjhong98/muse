'use client';

import axios from 'axios';
import { useEffect } from "react"
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

export const FirstActive = (res : InferGetServerSidePropsType<GetServerSideProps>) => {

    // const func1 = async () => {
    //     const res = await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=1');
    //     const data = res.data.objectIDs;
    //     let start = 0;
    //     let end = 10;
    //     let item;
    //     let resArr = [];

    //     for(let i=start; i<end; i++) {
    //         item = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${data[i]}`)
    //         resArr.push(item.data);
    //     }

    //     console.log(resArr);
    // }

    // useEffect(() => {
    //     func1();
    // }, [])

}