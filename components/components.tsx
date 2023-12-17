'use client';

import React, { useEffect, useState } from "react";
import styled, {keyframes} from "styled-components";
import Skeleton from '@mui/material/Skeleton';

interface resType {
    primaryImage: string,
    title: string,
  }

export const View = styled.div`
    width: 100vw;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    let lastScrollPosition: number;

    // 일부 프레임워크들은 서버에서 코드를 실행하여 초기 렌더링 수행 -> 방어적인 코드 필요
    if(typeof window !== 'undefined') 
        lastScrollPosition = window.scrollY;

    useEffect(() => {
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            }
        
    }, [])

    const handleScroll = () => {
        // 마지막으로 스크롤된 위치와 현재 스크롤 위치를 비교
        if(window.scrollY > lastScrollPosition) // scrolled-up
            setScrolled(true);
        else    // scrolled-down
            setScrolled(false);
        lastScrollPosition = window.scrollY
    }

    return (
        scrolled ?
            <HeaderDisappear>
                <Font4>The Metropolitan Museum</Font4>
            </HeaderDisappear>
            :
            <HeaderAppear>
                <Font4>The Metropolitan Museum</Font4>
            </HeaderAppear>
    )
}

// 함수와 변수의 선언만 호이스팅 적용 대상 -> keyframes는 아무것도 아니므로 호이스팅 적용대상 X

const headerDisappearAnim = keyframes`
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-15vh);
    }
`

const headerAppearAnim = keyframes`
    0% {
        transform: translateY(-15vh);
    }
    100% {
        transform: translateY(0);
    }
`

const HeaderInterface = styled.div`
    position: fixed;
    height: 15vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    z-index: 9999;
`

const HeaderAppear = styled(HeaderInterface)`
    animation: ${headerAppearAnim} 0.6s ease;
    animation-fill-mode: forwards;
`

const HeaderDisappear = styled(HeaderInterface)`
    animation: ${headerDisappearAnim} 0.6s ease;
    animation-fill-mode: forwards;
`

export const Content = styled.div`
    width: 70%;
    margin-top: 20vh;
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-row-gap: 5vh;
    grid-column-gap: 3vw;
    cursor: pointer;
`

export const Font4 = styled.p`
    font-size: 6rem;
    color: black;
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

    &:hover {
        animation: ${selectedAnim} 0.5s ease forwards;
    }

    &:not(:hover) {
    animation: ${unselectedAnim} 0.5s ease forwards;
    animation-fill-mode: forwards;
  }
`

const SkeletonStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-row-gap: 5vh;
    width: 70%;
    justify-content: space-between;
    margin-top: 5vh;
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

interface modalProps {
    open:boolean;
    item:resType;
}

export const ContentModal = styled.div`
    position: absolute;
    background-color: white;
    width: 70vw;
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
`


