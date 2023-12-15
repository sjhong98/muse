'use client';

import { useEffect, useState } from "react";
import styled from "styled-components";

export const View = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    const handleScroll = () => {
        if(window.scrollY >= 50)
            setScrolled(true);
        else
            setScrolled(false);
    }

    return (
        <HeaderComponent>
            { scrolled ?
                <></>
                :
                <Header>
                    <Font4>The Metropolitan Museum</Font4>
                </Header>

            }
        </HeaderComponent>
    )
}

const HeaderComponent = styled.div`
    position: fixed;
    height: 15vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #fff;
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