'use client';

// server 코드의 경우, 처음 마운트되는 요소와, 이후 client 코드를 통해 마운트되는 코드의 차이가 발생 -> 위치 달라짐

import React, { useEffect, useRef, useState } from "react";
import Logo from '../assets/logo.jpeg';
import ImageNext from "next/image";
import styled, {keyframes} from "styled-components";

interface categoryType {
    id:string,
    category: number
}

const categries = [
    {category:1, id:"American Decorative Arts"},
    {category:3, id:"Ancient Near Eastern Art"},
    {category:4, id:"Arms and Armor"},
    {category:5, id:"Arts of Africa, Oceania, and the Americas"},
    {category:6, id:"Asian Art"},
    {category:7, id:"The Cloisters"},
    {category:8, id:"The Costume Institute"},
    {category:9, id:"Drawings and Prints"},
    {category:10, id:"Egyptian Art"},
    {category:11, id:"European Paintings"},
    {category:12, id:"European Sculpture and Decorative Arts"},
    {category:13, id:"Greek and Roman Art"},
    {category:14, id:"Islamic Art"},
    {category:15, id:"The Robert Lehman Collection"},
    {category:16, id:"The Libraries"},
    {category:17, id:"Medieval Art"},
    {category:18, id:"Musical Instruments"},
    {category:19, id:"Photographs"},
    {category:21, id:"Modern Art"},
]

export function Header() {
    const headerRef = useRef<HTMLDivElement>(null);
    let lastScrollPosition: number;

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const handleMenuClick = () => {
        setIsMenuOpen((isMenuOpen) => !isMenuOpen);
    }

    useEffect(() => {
        if(isMenuOpen) {
            menuRef.current?.classList.add('menu-open');
            menuRef.current?.classList.remove('menu-close');
        } else {
            menuRef.current?.classList.add('menu-close');
            menuRef.current?.classList.remove('menu-open');
        }
    }, [isMenuOpen])

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
        if(window.scrollY > lastScrollPosition) // scrolled-down -> header 올라가야 함
        {
            menuRef.current?.classList.add('menu-close');
            menuRef.current?.classList.remove('menu-open');
            headerRef.current?.classList.add('header-close');
            headerRef.current?.classList.remove('header-open');
            
        } else    // scrolled-up -> header 내려와야함
        {   
            headerRef.current?.classList.add('header-open');
            headerRef.current?.classList.remove('header-close');
        }
        lastScrollPosition = window.scrollY;
        console.log(headerRef.current);
    }

    return (
        <div className="flex flex-row header-open fixed z-[9998] bg-white w-[100vw]" ref={headerRef}>
            <ImageNext alt="..." src={Logo} className="w-80 mt-5 ml-[10vw]" />
            <div className="absolute rounded-full w-[7vh] h-[7vh] bg-red-500 mt-[10vh] right-[5vw] cursor-pointer" onClick={handleMenuClick}>
                <div ref={menuRef} className="absolute right-[-33vw] top-[0vh] bg-red-500 rounded-lg w-[36vw] h-[80vh] z-[9999]" >
                {   categries.map((item:categoryType, index:number) => {
                    return (
                        <p key={index} className="text-2xl">{item.id}</p>
                    )})
                }
                </div>
            </div>
        </div>
    )
}
// function HeaderContent() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const handleMenuClick = () => {
//         setIsMenuOpen((isMenuOpen) => !isMenuOpen);
//     }

//     return (
//         <div className="flex flex-row">
//             <ImageNext alt="..." src={Logo} className="w-80 mt-5" />
//             <div className="absolute rounded-full w-[7vh] h-[7vh] bg-red-500 mt-[10vh] right-[5vw] cursor-pointer" onClick={handleMenuClick}>
//                     <MenuOpen isMenuOpen={isMenuOpen} className="absolute right-[0vh] top-[0vh] bg-red-500 rounded-3xl w-[20vw] h-[70vh]">

//                     </MenuOpen>
               
//             </div>
//         </div>
//     )
// }

// const MenuOpen = styled("div")<{ isMenuOpen:boolean }>`
//     animation: ${(props) => props.isMenuOpen ? css`${menuOpenAnim} 1s ease forwards` : css`${menuCloseAnim} 1s ease forwards`};
// `


// 함수와 변수의 선언만 호이스팅 적용 대상 -> keyframes는 아무것도 아니므로 호이스팅 적용대상 X
