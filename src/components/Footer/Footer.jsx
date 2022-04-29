import React from "react";
import { FooterStyled } from "./footerStyled";
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {

    const year = new Date().getFullYear()

    return(

        <FooterStyled>
            <div className="container">
                <div>
                    &copy; Copyright {year} - Pedro Nunes. Todos os direitos reservados.
                </div>  

                <div >
                    <ul className="links-socials">
                        <li><a href="https://www.linkedin.com/in/pedro-filipe-3311b51b4/" target="_blank"><FaLinkedinIn/></a></li>
                        <li><a href="https://www.instagram.com/pedronunesdev/" target="_blank"><FaInstagram/></a></li>
                        <li><a href="https://wa.me/qr/OZWPJVZZLJ2WG1" target="_blank"><FaWhatsapp/></a></li>
                    </ul>
                </div>
            </div>
        </FooterStyled>

    )

}

export default Footer;