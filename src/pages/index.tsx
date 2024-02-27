import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import * as S from '../styles/home';
import NavBar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { relative } from 'path';
import Image from "next/image";
import IntroProjetos from '@/components/IntroProjetos';
import Carousel from '@/components/Carousel';


const Home = () => {

    const images: string[] = [
        '/Imagem1Gustavo.png',
        'ImagemGustavo2.png',
        'imagemtesteSetima.png',
        'fotodeperfil.jfif',
        'Captura de tela 2023-03-08 175016.png',
        'Captura de tela 2023-03-13 142603.png',
        'Captura de tela 2023-04-05 235117.png',
    ]

    const projetos = [
        { nome: 'Baratão Supermercados' },
        { nome: 'Sessão de fotos - cliente' },
        { nome: 'Aquarela Comunicação' },
        { nome: 'Sétima Filmes' },
      ];

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
                    <S.ImagemPrincipal alt="" src="/imagemtesteSetima.png" style={{width: '100%'}} />
                    <S.SpanPrincipal>SUA PRODUTORA AUDIOVISUAL</S.SpanPrincipal>
                </S.ContainerPrincipal>     
                <S.NossosProjetos>
                    <a href='#projetos' style={{textDecoration: 'none'}}><S.SpanNossosTrabalhos>NOSSOS TRABALHOS</S.SpanNossosTrabalhos></a>
                    <S.Triangulo></S.Triangulo>
                </S.NossosProjetos>
                <S.ContainerProjetos id='projetos'>
                    {projetos.map((projeto, index) => (
                    <IntroProjetos key={index} nome={projeto.nome} />
                    ))}
                </S.ContainerProjetos>
                <br/>
                <div style={{height: '5vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <a href='#' style={{textDecoration: 'none'}}><S.SpanVerMais>VER MAIS</S.SpanVerMais></a>
                </div>
                <S.ContainerSetimaFilms>
                    <S.Olho src="/OlhoSetima.svg"/>
                    <br/>
                    <S.SpanSetima>A SÉTIMA FILMS</S.SpanSetima>
                    <S.DescricaoSetima>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac sem neque
usce fermentum odiovitae erosultrices fermentum. Nulla vel venenatis sapien.</S.DescricaoSetima>
                </S.ContainerSetimaFilms>
                <S.ContainerNossosClientes>
                    <S.SpanClientes>NOSSOS CLIENTES</S.SpanClientes>
                    <div>
                        <Carousel images={images}/>
                    </div>
                </S.ContainerNossosClientes>
            </S.Main>
            <Footer/>
        </>
    );
}

export default Home;

