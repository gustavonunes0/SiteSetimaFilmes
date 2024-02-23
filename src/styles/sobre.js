import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  background-color: #000;
  padding-bottom: 10vh;
`;

export const ContainerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 3rem 0;
  gap: 2rem;
`;

export const ContainerFundadores = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 3rem 0;
  gap: 2rem;
`;

export const ContainerSobre = styled.div`
  display: grid;
  grid-template-columns: 30% 30%;
  justify-content: start;
  place-content: center;
  align-items: start;
  height: 40vh;
`;

export const PrimeiroSobre = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 100%;
  gap: .5rem;
  height: 100%;
`;

export const SegundoSobre = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 100%;
  gap: 1.2rem;
  height: 100%;
`;

export const MiniContainerSegundoSobre = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100%;
  gap: .1rem;
`;

export const Fundadores = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
  grid-template-columns: 20% 20% 20%;
  gap: 2rem;
  place-items: center;
  width: 100%;
`;

export const Fundador = styled.div`
  background-color: #E5283A;
  width: 100%;
  height: 70vh;
`;

export const SpanPrincipal = styled.span`
  color: #fff;
  font-size: 3.5rem;
  font-weight: 700;
  z-index: 2;
  letter-spacing: 0.5rem;
`;

export const SpanSobre1 = styled.span`
  color: #fff;
  font-size: 2.6rem;
  font-weight: 700;
  z-index: 2;
`;

export const SpanSobre2 = styled.span`
  color: #fff;
  width: 80%;
  font-size: .7rem;
  font-weight: 400;
  z-index: 2;
`;

export const SpanSobre3 = styled.span`
  color: #fff;
  width: 80%;
  font-size: 1.3rem;
  letter-spacing: .25rem;
  font-weight: 600;
  z-index: 2;
`;

export const BotaoConheca = styled.button`
  color: #dedede;
  padding: 1rem 3rem;
  border-radius: .3rem;
  font-size: 1.2rem;
  letter-spacing: .25rem;
  font-weight: 600;
  z-index: 2;
  border: 1px solid #dedede;
  background-color: transparent;
  cursor: pointer;

  &:hover{
    border: 1px solid #000;
    transition: all .2s ease-in;
  }
`;
