import * as S from "./styles";
import Link from "next/link";

interface IntroProjetosProps {
  nome: string;
}

const IntroProjetos: React.FC<IntroProjetosProps> = ({ nome }) => {
  const nomeEmMaiusculas = nome.toUpperCase();

  return (
      <S.Container>
        {/* <S.DivHeader>
          <S.SpanNome>{nomeEmMaiusculas}</S.SpanNome>
          <S.divLinhaAzul></S.divLinhaAzul>
        </S.DivHeader> */}
        <S.ContainerProjetos>
          <S.Projeto>
            <S.Titulo>{nomeEmMaiusculas}</S.Titulo>
          </S.Projeto>
        </S.ContainerProjetos>
      </S.Container>
  );
};

export default IntroProjetos;
