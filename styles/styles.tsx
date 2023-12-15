'use client';

import { useEffect, useState } from "react";
import styled, {keyframes} from "styled-components";

export const View = styled.div`
    width: 100vw;
    min-height: 200vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    let lastScrollPosition = window.scrollY;

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    const handleScroll = () => {
        console.log('last:', lastScrollPosition, " / cur:", window.scrollY);

        // 마지막으로 스크롤된 위치와 현재 스크롤 위치를 비교
        if(window.scrollY > lastScrollPosition) // scrolled-up
            setScrolled(true);
        else    // scrolled-down
            setScrolled(false);
        lastScrollPosition = window.scrollY
    }

    return (
        scrolled ?
            // <HeaderDisappear>
            //     <Font4>The Metropolitan Museum</Font4>
            // </HeaderDisappear>
            <></>
            :
            <HeaderAppear>
                <Font4>The Metropolitan Museum</Font4>
            </HeaderAppear>
    )
}

const HeaderAppear = styled.div`
    position: fixed;
    height: 15vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    animation: headerAppearAnim 0.6s ease;
    animation-fill-mode: forwards;
`

const HeaderDisappear = styled.div`
    position: fixed;
    height: 15vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    animation: headerDisappearAnim 0.6s ease;
    animation-fill-mode: forwards;
`

const headerDiappearAnim = keyframes`
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

export const Content = styled.div`
    width: 70%;
    margin-top: 20vh;
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-row-gap: 5vh;
    grid-column-gap: 3vw;
`

export const Font4 = styled.p`
    font-size: 6rem;
    color: black;
`

export const Image = styled.img`
    width: 100%;
    object-fit: cover;   
`