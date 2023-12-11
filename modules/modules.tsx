'use client';

import axios from 'axios';
import { useEffect } from "react"
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

export const FirstActive = (res : InferGetServerSidePropsType<GetServerSideProps>) => {

    useEffect(() => {
        axios.post('http://www.museum.go.kr/site/main/openapi/relic?pageSize=10')
        .then((res) => {
            console.log("res : ", res);
        })
        .catch(err => {
            console.log(err);
        }) 
        // console.log(res)
    }, [])

}