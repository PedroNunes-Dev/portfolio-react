import React from "react";
import { StyledHome, HomeStyled, BtnHome } from "./homeStyled";
import { Link } from "react-router-dom";
import PERFILOF from '../../assets/images/PERFILOF.png'


const Home = () => {

    return(

        <StyledHome>
            <HomeStyled>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="home-txt">
                                <h2><span className="text-danger">P</span>edro <span className="text-danger">N</span>unes</h2>
                                <p>Sou um desenvolvedor Web</p>
                                <BtnHome>
                                    <a href="https://wa.me/qr/OZWPJVZZLJ2WG1" target="_blank">Saber mais</a>
                                    <Link to="/projects">Projetos</Link>
                                </BtnHome>
                                
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="cartoon">
                                <img src={PERFILOF} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </HomeStyled>
        </StyledHome>

    )

}

export default Home;