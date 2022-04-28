import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import GitUser from "../components/GitUser/Git";

export default props =>
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/git" element={<GitUser />} />
        <Route path="*" element={<Home />} />
    </Routes>