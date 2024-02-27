import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  background-color: #000;
`;

export const ContainerPrincipal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 80vh;
  background-color: #fff;
  background-image: linear-gradient(to top, black, gray, transparent);
`;

export const SpanPrincipal = styled.span`
  color: #dedede;
  font-size: 3.5rem;
  font-weight: 700;
  z-index: 2;
  letter-spacing: 0.2rem;
`;

export const ImagemPrincipal = styled.img`
  width: 100%;
  position: absolute;
  height: 100%;
  object-fit: cover;
  -webkit-mask-image: linear-gradient(to top, transparent 25%, black 100%);
`;

export const Olho = styled.img`
  width: 10%;
`;

export const ContainerProjetos = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 50% 50%;
  gap: 0rem;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const ContainerNossosClientes = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 5rem 0rem;
  gap: 2rem;

  @media screen and (max-width: 600px) {
  }
`;

export const divSpan = styled.div`
  width: 80%;
  height: 100%;
  left: 19rem;
  display: flex;
  position: absolute;
  justify-content: left;

  @media screen and (max-width: 850px) {
    left: 0;
  }
`;

export const NossosProjetos = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  gap: 0.4rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 850px) {
  }
`;

export const ContainerSetimaFilms = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #000;

  @media screen and (max-width: 850px) {
  }
`;

export const Triangulo = styled.div`
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 10px solid #e5283a;

  @media screen and (max-width: 850px) {
  }
`;

export const SpanClientes = styled.span`
  color: #000;
  font-size: 2.85rem;
  word-spacing: 0.2rem;
  letter-spacing: 0.4rem;
  font-weight: 700;

  @media screen and (max-width: 850px) {
  }
`;

export const SpanNossosTrabalhos = styled.span`
  color: #dedede;
  font-size: 0.85rem;
  word-spacing: 0.2rem;
  letter-spacing: 0.1rem;
  font-weight: 600;

  &:hover {
    border-bottom: 2px solid #81151f;
  }

  @media screen and (max-width: 850px) {
  }
`;

export const SpanVerMais = styled.span`
  color: #dedede;
  font-size: 1.15rem;
  word-spacing: 0rem;
  letter-spacing: 0.1rem;
  font-weight: 600;
  border-bottom: 2px solid #fff;

  &:hover {
    border-bottom: 0px solid #fff;
  }

  @media screen and (max-width: 850px) {
  }
`;

export const SpanSetima = styled.span`
  color: #fff;
  font-size: 2.85rem;
  word-spacing: 0.2rem;
  letter-spacing: 0.3rem;
  font-weight: 600;

  @media screen and (max-width: 850px) {
  }
`;

export const DescricaoSetima = styled.span`
  color: #fff;
  text-align: center;
  font-size: 0.65rem;
  word-spacing: 0.2rem;
  font-weight: 400;
  width: 30%;

  @media screen and (max-width: 850px) {
  }
`;
