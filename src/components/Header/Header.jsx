import React, { useState } from "react";
import LogoPn from '../../assets/images/logoPN.png'
import { GiHamburgerMenu } from "react-icons/gi";

import * as C from './headerStyled'

const Menu = () => {

    const [visibility, setVisibility] = useState(false)

    return (
        <C.Menu>
            <div className="container">
                <C.Logo>
                    <a href="" target="_blank">
                        <img src={LogoPn} alt="" />
                    </a>
                </C.Logo>
                <C.NavBar>

                    <ul>
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#sobre">Sobre</a>
                        </li>
                        <li>
                            <a href="#projetos">Projetos</a>
                        </li>
                        <li>
                            <a href="#contato">Contato</a>
                        </li>
                    </ul>

                </C.NavBar>
                <C.Toggle>
                    {!visibility === true &&
                         <a onClick={() => setVisibility(true)}>
                            <GiHamburgerMenu/>
                         </a>

                        // <button onClick={() => setVisibility(true)}>Menu</button>
                    }

                    {visibility === true &&
                        <ul>
                            <div  className="btn-close">
                                <a className="btn-mobile" onClick={() => setVisibility(false)}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </a>
                            </div>
                            <div className="links">
                                <li>
                                    <a href="#home" onClick={() => setVisibility(false)}>Home</a>
                                </li>
                                <li>
                                    <a href="#sobre" onClick={() => setVisibility(false)}>Sobre</a>
                                </li>
                                <li>
                                    <a href="#projetos"  onClick={() => setVisibility(false)}>Projetos</a>
                                </li>
                                <li>
                                    <a href="#contato"  onClick={() => setVisibility(false)}>Contato</a>
                                </li>
                            </div>
                        </ul>
                    }


                </C.Toggle>
            </div>
        </C.Menu>
    )
}

export default Menu

/*const Header = () => {

    return(

        <StyledHeader>
            <div className="container">
                <a href="" className="logo">
                    <img src={LogoPn} alt="" />
                </a>
                <div>
                    <ul className="menu" role="menu">
                        <li><a href="">Home</a></li>
                        <li><a href="">Projetos</a></li>
                        <li><a href="">Contato</a></li>
                    </ul>
                </div>
                <Toggle className="nav">
                    <button className="btn-mobile" aria-label="Abrir Menu" aria-haspopup="true" aria-controls="menu" aria-expanded="false">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    
                </Toggle>
            </div>
        </StyledHeader>

    )

}

export default Header;*/