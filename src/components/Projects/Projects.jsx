import React from "react";

import projects from "../../data/Projects";
import { StyledProjects, Cards, BtnProjects, Techs, ProjectCard } from "./projectsStyled";

const Projects = () => {

    return(

        <StyledProjects>
            <div className="container">
                <h2 className="title">Projetos</h2>
                <Cards>
                    {projects.map((project) => (
                        <ProjectCard key={project.deploylink}>
                            <img src={project.image} alt="Imagem do site" />
                            <Techs>{project.technologies}</Techs>
                            <p>{project.description}</p>
                            <BtnProjects className="btn-links">
                                <a href={project.githublink} target="_blank" rel="noreferrer">GitHub</a>
                                <a href={project.deploylink} target="_blank" rel="noreferrer">Site</a>
                            </BtnProjects>
                        </ProjectCard>
                    ))}
                </Cards>
            </div>
        </StyledProjects>

    )

}

export default Projects