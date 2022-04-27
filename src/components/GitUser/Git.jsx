import React, { useEffect, useState } from "react";
import { Container, GitPerfil, GitProjects, Project, GitBtnStyles } from "./styles";
import axios from "axios";


export default function GitUser(){

    const [userGit, setUserGit] = useState([])
    const [projects, setProjects] = useState([])
    const [errorMsg, setErrorMsg] = useState("")

    useEffect(() => {
        
        getApiGit()
        getApiRepos()

    }, [])

    function getApiGit(){

        axios.get('https://api.github.com/users/PedroNunes-Dev', {
            
        })
            .then(function (response) {
                
                setUserGit(response.data)
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
                setErrorMsg("GitHub temporariamente fora de serviço!")
            });

    }

    function getApiRepos(){

        axios.get('https://api.github.com/users/PedroNunes-Dev/repos', {
            
        })
            .then(function (response) {
                
                setProjects(response.data)
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
                setErrorMsg("GitHub temporariamente fora de serviço!")
            });

    }

    return(

        <Container className="git-box">
            <div className="container">
                <h2 className="title">GitHub</h2>
                <div className="row">
                    <GitPerfil className="col-md-6">
                        <div>
                            <img src={userGit.avatar_url} alt="Foto do github" />
                            <h3>{userGit.login}</h3>
                            <p>{userGit.bio}</p>
                        </div>
                    </GitPerfil>
                    <GitProjects className="col-md-6">
                        {
                            projects.slice(0, 4).map((project) =>
                                <Project key={project.id}>
                                    <a href={project.html_url} target="_blank" rel="noreferrer">
                                        <h3>{project.name}</h3>
                                    </a>
                                    <p>{project.description}</p>
                                </Project>
                            )
                        }
                        <span>Repositórios: {userGit.public_repos}+</span>
                        <p>{errorMsg}</p>
                        
                        <GitBtnStyles>
                            <a href="https://github.com/PedroNunes-Dev" target="_blank" rel="noreferrer">View all repositories</a>
                        </GitBtnStyles>
                    </GitProjects>
                </div>
            </div>   
        </Container>
        

    )

}