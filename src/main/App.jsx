import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from "react-router-dom";

import Menu from "../components/Header/Header";
import Routes from "./Routes";

export default props =>
    <BrowserRouter>
        <Menu/>
        <Routes />
    </BrowserRouter>