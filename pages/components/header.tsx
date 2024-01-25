
import React, {Dispatch, useEffect, useRef, useState } from "react";
import Logo from '@/assets/logo.jpeg';
import ImageNext from "next/image";
import { useRouter } from "next/router";
import { categries, categoryType } from "@/types/type";

export default function Header() {
    const router = useRouter();
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
    }, [handleScroll])

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
    }

    const handleCategoryChange = (index:number) => {
        console.log(index);
        router.push(`/${index}`);
    };

    return (
        <div ref={headerRef} className="flex flex-row header-open fixed z-[9998] bg-white w-[100vw]" >
            <ImageNext alt="..." src={Logo} className="w-80 mt-5 ml-[10vw]" />
            <div onClick={handleMenuClick} className="absolute rounded-full w-[7vh] h-[7vh] bg-red-500 mt-[10vh] right-[5vw] cursor-pointer"  >
                <div ref={menuRef} className="absolute right-[-33vw] top-[0vh] bg-red-500 rounded-lg w-[36vw] h-[80vh] z-[9999] flex flex-col justify-between pt-6 pb-12 pl-6 cursor-default" style={{boxShadow:'0px 0px 100px 10px rgba(0, 0, 0, 0.2)'}} >
                    <div className="rounded-full w-[3vh] h-[3vh] bg-white mb-3 cursor-pointer flex justify-center items-center">
                    </div>
                { categries.map((item:categoryType, index:number) => { 
                    return (
                        <p key={index} onClick={()=>handleCategoryChange(item.category)} className="text-xl cursor-pointer lemon">
                        {item.id}
                        </p>
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
