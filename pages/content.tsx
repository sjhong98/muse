import { resType } from "@/types/type";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface contentProps {
    res:resType[]
}

export default function Content(props:contentProps) {
    const modalRef = useRef<HTMLDivElement>(null);
    const outsideRef = useRef<HTMLDivElement>(null);
    const [selected, setSelected] = useState<number>(-1);
    const res = props.res;

    useEffect(() => {
        const handleClickOutside = (event:MouseEvent) => {
            // modalRef.current : 현재 모달이 마운트되어 있을 때에만 동작
            // !modalRef.current.contains(event.target as Node)) : 클릭된 영역이 모달 영역이 아닐 경우에만 동작
            if(modalRef.current && !modalRef.current.contains(event.target as Node)) {
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
            { res?.length !== 0 && res?.map((item:resType, index:number) => {
            return (
                item.primaryImageSmall !== "" ?
                    selected === index ?
                        <div 
                            key={index} 
                            ref={modalRef} 
                            className="absolute flex-row"
                        >
                            <ImageClicked
                                key={index}
                                className="shadow-2xl"
                                src={item.primaryImageSmall} 
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
                            className='image'
                            onClick={() => setSelected(index)}
                            src={item.primaryImageSmall} 
                            alt="..."
                            width={200}
                            height={200}
                        />
                :
                <></>
            )
          }) }
        </ContentComponent>
    )
}

const ContentComponent = styled.div`
    width: 70%;
    margin-top: 30vh;
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-row-gap: 5vh;
    grid-column-gap: 3vw;
`

const C1 = styled.p`
    font-size: 2rem;
    font-family: 'lemon';
`

const C2 = styled.p`
    font-size: 1.2rem;
    font-family: 'lemon';
`

const CS = styled.div`
    height: 2vh;
    font-family: 'lemon';
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
