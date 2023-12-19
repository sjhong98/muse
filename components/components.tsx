'use client';

import React, { useEffect, useRef, useState } from "react";
import styled, {keyframes} from "styled-components";
import Skeleton from '@mui/material/Skeleton';
import Logo from '../assets/logo.jpeg';
import ImageNext from "next/image";

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
                <ImageNext alt="..." src={Logo} className="w-80 mt-5" />
            </HeaderDisappear>
            :
            <HeaderAppear>
                <ImageNext alt="..." src={Logo} className="w-80 mt-5" />
            </HeaderAppear>
    )
}

// 함수와 변수의 선언만 호이스팅 적용 대상 -> keyframes는 아무것도 아니므로 호이스팅 적용대상 X

const headerDisappearAnim = keyframes`
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-35vh);
    }
`

const headerAppearAnim = keyframes`
    0% {
        transform: translateY(-35vh);
    }
    100% {
        transform: translateY(0);
    }
`

const HeaderInterface = styled.div`
    position: fixed;
    height: 25vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    z-index: 9997;
`

const HeaderAppear = styled(HeaderInterface)`
    animation: ${headerAppearAnim} 0.6s ease;
    animation-fill-mode: forwards;
`

const HeaderDisappear = styled(HeaderInterface)`
    animation: ${headerDisappearAnim} 0.6s ease;
    animation-fill-mode: forwards;
`

export const ContentComponent = styled.div`
    width: 70%;
    margin-top: 30vh;
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-row-gap: 5vh;
    grid-column-gap: 3vw;
`

interface contentProps {
    res:resType[]
}

export function Content(props:contentProps) {
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

const C1 = styled.p`
    font-size: 2rem;
`

const C2 = styled.p`
    font-size: 1.2rem;
`

const CS = styled.div`
    height: 2vh;
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


