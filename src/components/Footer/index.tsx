import * as S from "./styles";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
    return (
        <S.Footer>
            <S.FooterSubmenuTitle>NOSSAS REDES</S.FooterSubmenuTitle>
            <S.FooterSubmenu>
                <a href="https://www.instagram.com/aquarelacomunicacao/" target="_blank">
                    <S.FooterSubmenuSocialMedia src={"/instagramIcon.svg"}/>
                </a>
                <a href="https://www.facebook.com/aquarelacomunicacao" target="_blank">
                    <S.FooterSubmenuSocialMedia src={"/linkedinIcon.svg"}/>
                </a>
                <a href="https://www.linkedin.com/company/aquarelacomunicacao" target="_blank">
                    <S.FooterSubmenuSocialMedia src={"/facebookIcon.svg"}/>
                </a>
            </S.FooterSubmenu>
        </S.Footer>
    );
};

export default Footer;
