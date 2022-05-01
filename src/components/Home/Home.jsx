import React from "react";
import { StyledHome, HomeStyled, BtnHome, StyledTecnologies, StyledAbout } from "./homeStyled";
import { Link } from "react-router-dom";
import PERFILOF from '../../assets/images/PERFILOF.png'
import Typed from "typed.js";
import Techs from '../../data/Techs'


const Home = () => {

    const el = React.useRef(null);
	const typed = React.useRef(null);

    React.useEffect(() => {
        const options = {
            strings: [
            'Olá humano!',
            'Sou um <strong>desenvolvedor Web</strong>.',
            'Estou em constante <strong>evoluçao</strong>.',
            'Pronto para <strong>aprender</strong> e <strong>contribuir</strong>!'
        ],
        typeSpeed: 50,
        backSpeed: 20,
        loop: true,
        };
        
        // elRef refers to the <span> rendered below
        typed.current = new Typed(el.current, options);
        
        return () => {
        // Make sure to destroy Typed instance during cleanup
        // to prevent memory leaks
        typed.current.destroy();
        }
    }, [])

    return(
        <StyledHome>
            <HomeStyled>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="home-txt">
                                <h2><span className="text-danger">P</span>edro <span className="text-danger">N</span>unes</h2>
                                <div className="type-wrap">
                                    <span style={{ whiteSpace: 'pre'}} ref={el} />
                                </div>
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
            <StyledTecnologies>
                <div className="container">
                    <h2 className="title">Tecnologias</h2>
                    <section>
                        {Techs.map((tech) => (
                            <div className="techIcons" key={tech.text}>
                                <div className="icon">{tech.Icon}</div>
                                <p>{tech.text}</p>
                            </div>
                        ))}
                    </section>
                </div>
            </StyledTecnologies>
        </StyledHome>
    )

}

export default Home;