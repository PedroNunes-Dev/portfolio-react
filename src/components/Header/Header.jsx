import React, { useState } from "react";
import LogoPn from '../../assets/images/logoPN.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

import * as C from './headerStyled'

const Menu = () => {

    const [visibility, setVisibility] = useState(false)

    return (
        <C.Menu>
            <div className="container">
                <C.Logo>
                    <Link to="/">
                        <img src={LogoPn} alt="" />
                    </Link>
                </C.Logo>
                <C.NavBar>

                    <ul>
                        <li>
                            <Link to="/" activeStyle>Home</Link>
                        </li>
                        <li>
                            <Link to="/projects" activeStyle>Projetos</Link>
                        </li>
                        <li>
                            <Link to="/git" activeStyle>GitHub</Link>
                        </li>
                        <li>
                            <Link to="/about" activeStyle>Sobre</Link>
                        </li>
                        <li>
                            <Link to="#contato" activeStyle>Contato</Link>
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
                                    <Link to="/" onClick={() => setVisibility(false)}>Home</Link>
                                </li>
                                <li>
                                    <Link to="/projects"  onClick={() => setVisibility(false)}>Projetos</Link>
                                </li>
                                <li>
                                    <Link to="/git" onClick={() => setVisibility(false)}>GitHub</Link>
                                </li>
                                <li>
                                    <Link to="/about"  onClick={() => setVisibility(false)}>Sobre</Link>
                                </li>
                                <li>
                                    <Link to="#"  onClick={() => setVisibility(false)}>Contato</Link>
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