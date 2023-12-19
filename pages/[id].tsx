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

export default function Home() {

    return (
        <p>hello</p>
    )
}