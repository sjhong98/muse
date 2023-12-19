'use client';

import React, { useEffect, useRef, useState } from "react";
import styled, {keyframes} from "styled-components";
import Skeleton from '@mui/material/Skeleton';


export const View = styled.div`
    width: 100vw;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: hidden;
`

export const Font4 = styled.p`
    font-size: 6rem;
    color: black;
`

const SkeletonStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-row-gap: 5vh;
    width: 70%;
    justify-content: space-between;
    margin-top: 5vh;
    margin-bottom: 10vh;
`

export function Skeletons() {
    return (
        <SkeletonStyle>
            <Skeleton variant="rectangular" width={250} height={250} />
            <Skeleton variant="rectangular" width={250} height={250} />
            <Skeleton variant="rectangular" width={250} height={250} />
            <Skeleton variant="rectangular" width={250} height={250} />
            <Skeleton variant="rectangular" width={250} height={250} />
            <Skeleton variant="rectangular" width={250} height={250} />
            <Skeleton variant="rectangular" width={250} height={250} />
            <Skeleton variant="rectangular" width={250} height={250} />
        </SkeletonStyle>
    )
}

export const ContentModal = styled.div`
    position: absolute;
    background-color: white;
    width: 50vw;
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    border-radius: 2%;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.1);
`


