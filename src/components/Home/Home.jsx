import React from "react";
import { StyledHome, HomeStyled, BtnHome } from "./homeStyled";
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
                                    <a href="">Saber mais</a>
                                    <a href="">Projetos</a>
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