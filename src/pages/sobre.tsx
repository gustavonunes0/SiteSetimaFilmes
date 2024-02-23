import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import * as S from '../styles/sobre';
import NavBar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { relative } from 'path';
import Image from "next/image";
import IntroProjetos from '@/components/IntroProjetos';
import Carousel from '@/components/Carousel';


const Sobre = () => {

    return (
        <>
            <Head>
                <title>Setima</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
                <link rel="icon" href="/Ativo 162.png"/>
            </Head>
            <NavBar/>
            <S.Main>   
                <S.ContainerPrincipal>
                    <S.SpanPrincipal>SOBRE</S.SpanPrincipal>
                    <S.ContainerSobre>
                        <S.PrimeiroSobre>
                            <S.SpanSobre1>LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.</S.SpanSobre1>
                            <S.SpanSobre2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Aliquam ac sem neque usce fermentum odio vitae
erosultrices fermentum. Nulla vel venenatis sapien.</S.SpanSobre2>
                        </S.PrimeiroSobre>
                        <S.SegundoSobre>
                            <S.MiniContainerSegundoSobre>
                                <S.SpanSobre3>ESTRATÉGIA</S.SpanSobre3>
                                <S.SpanSobre2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Aliquam ac sem neque usce fermentum odio vitae
erosultrices fermentum. Nulla vel venenatis sapien.</S.SpanSobre2>
                            </S.MiniContainerSegundoSobre>
                            <S.MiniContainerSegundoSobre>
                                <S.SpanSobre3>CRIAÇÃO</S.SpanSobre3>
                                <S.SpanSobre2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Aliquam ac sem neque usce fermentum odio vitae
erosultrices fermentum. Nulla vel venenatis sapien.</S.SpanSobre2>
                            </S.MiniContainerSegundoSobre>
                            <S.MiniContainerSegundoSobre>
                                <S.SpanSobre3>VEICULAÇÃO</S.SpanSobre3>
                                <S.SpanSobre2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Aliquam ac sem neque usce fermentum odio vitae
erosultrices fermentum. Nulla vel venenatis sapien.</S.SpanSobre2>
                            </S.MiniContainerSegundoSobre>
                        </S.SegundoSobre>
                    </S.ContainerSobre>
                    <br/>
                    <S.BotaoConheca><a href='/' style={{textDecoration: 'none', color: '#dedede'}}>CONHEÇA NOSSOS DIFERENCIAIS</a></S.BotaoConheca>
                </S.ContainerPrincipal>
                <S.ContainerFundadores>
                    <S.SpanPrincipal>FUNDADORES</S.SpanPrincipal>
                    <S.Fundadores>
                        <S.Fundador></S.Fundador>
                        <S.Fundador></S.Fundador>
                        <S.Fundador></S.Fundador>
                        <S.SpanSobre3>ANDRÉ</S.SpanSobre3>
                        <S.SpanSobre3>RICARDO</S.SpanSobre3>
                        <S.SpanSobre3>LUCAS</S.SpanSobre3>
                    </S.Fundadores>
                </S.ContainerFundadores>     
            </S.Main>
            <Footer/>
        </>
    );
}

export default Sobre;

