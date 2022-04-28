import React from "react";
import { StyledAbout } from "./aboutStyled";
import Tecnologies from "../Tecnologies/Tecnologies";


const About = () => {

    const dataHoje = new Date()
    const dataInicio = new Date('2020-5-12')
    const diferenca = Math.abs((dataHoje.getTime() - dataInicio.getTime()))
    const ano = Math.ceil(diferenca / (1000*60*60*24*365))
    
    return(
        <React.Fragment>
            <Tecnologies />
            <StyledAbout>
                <div className="container">
                    <div className="about">
                        <h2 className="title">About</h2>
                        <div className="about-txt">
                            <p>Sou <strong>desenvolvedor Front-End</strong> a <strong>{ano} anos</strong>, apaixonado por tecnologias. 
                            O único arrependimento que tenho é não ter começado os meus estudos na 
                            programação antes. Mas nunca é tarde para adquirir novos conhencimentos, 
                            neste sentido estou focado em aprender cada vez mais, disposto a conhecer 
                            novas linguagens de programação, trabalhar em equipes e ajudar o próximo 
                            a evoluir também!</p>
                            <p>Atualmente estou estudando <strong>Back-End com PHP</strong> e aprimorando meus conhecimentos
                            em <strong>banco de dados com Mysql</strong> no SENAI, para me tornar um <strong>dev Full Stack</strong>. Paralelamente, 
                            estou estudando por conta própria <strong>ReactJs e consumo de API's</strong> com os Hooks dessa Biblioteca 
                            para antregar uma aplicação dinâmica e performática.</p>
                        </div>
                    </div>
                </div>
            </StyledAbout>
        </React.Fragment>
        
    )

}

export default About;