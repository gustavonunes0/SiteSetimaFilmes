import * as S from "./styles"; // Ensure the correct path to your styles file
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";


const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
      <S.HeaderContainer>
        <S.HeaderBox>
          <S.Menu>
            <S.MenuItem>
              <Image alt="" src="/Ativo 162.png" width={84} height={45} />
            </S.MenuItem>
            <S.MenuToggle onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </S.MenuToggle>
            <S.MenuItems isOpen={isOpen}> 
              <S.MenuItem>
                <Link href={{ pathname: "/" }} style={{textDecoration: "none"}}>
                  <S.StyledLink>HOME</S.StyledLink>
                </Link>
              </S.MenuItem>
              <S.MenuItem>
                <Link href={{ pathname: "/sobre" }} style={{textDecoration: "none"}}>
                  <S.StyledLink>SOBRE</S.StyledLink>
                </Link>
              </S.MenuItem>
              <S.MenuItem>
                <Link href={{ pathname: "/" }} style={{textDecoration: "none"}}>
                  <S.StyledLink>DIFERENCIAIS</S.StyledLink>
                </Link>
              </S.MenuItem>
              <S.MenuItem>
                <Link href={{ pathname: "/" }} style={{textDecoration: "none"}}>
                  <S.StyledLink>CASE</S.StyledLink>
                </Link>
              </S.MenuItem>
            </S.MenuItems>
          </S.Menu>
        </S.HeaderBox>
      </S.HeaderContainer>
    </>
  );
};

export default NavBar;
