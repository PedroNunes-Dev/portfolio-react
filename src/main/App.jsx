import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from "../components/Home/Home"
import GitUser from "../components/GitUser/Git";
import Projects from "../components/Projects/Projects";
import Tecnologies from "../components/Tecnologies/Tecnologies";
import About from "../components/About/About";
import Menu from "../components/Header/Header";

export default props =>
    <div>
        <Menu/>
        <Home />
        <About />
        <Tecnologies />
        <Projects />
        <GitUser />
    </div>