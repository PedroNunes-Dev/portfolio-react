import styled from "styled-components";

export const StyledProjects = styled.section`

    margin: 0;
    display: flex;
    align-items: center;
    background: linear-gradient(155deg, var(--color-green-light), var(--color-green));

    .title
    {
        color: var(--color-green);
    }

    @media(min-width: 320px)
    {
        height: auto;
        padding-bottom: 20px;
    }

`

export const Cards = styled.div`

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;

    a
    {
        padding: 8px 25px;
        border-radius: 10px;
        color: var(--color-green-light);
        text-decoration: none;
        text-align: center;
        border: 1px solid var(--color-green-light);
        transition: all .3s;
    }

    a:hover
    {
        color: var(--text-black);
        background: none;
        border: 1px solid transparent;
        background: var(--color-green-light);
    }

`

export const ProjectCard = styled.div`

    display: flex;
    flex-direction: column;
    max-width: 400px;
    padding: 8px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: var(--shadow);

    img
    {
        width: 100%;
        border-radius: 10px 10px 0 0;
    }

    p
    {
        display: flex;
        align-items: center;
        margin: 0;
        padding: 15px 0;
        text-align: center;
        height: 100%;
    }

`

export const Techs = styled.div`

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    padding: 10px 0;
    font-size: 2rem;
    color: var(--color-green);
    border-bottom: 1px solid var(--color-green-light-opacity);

`

export const BtnProjects = styled.div`

    display: flex;
    gap: 10px;
    

    a
    {
        background: #cbe0ca;
        padding: 8px 25px;
        width: 50%;
        border-radius: 10px;
        color: var(--text-black);
        text-decoration: none;
        text-align: center;
        border: 1px solid transparent;
        transition: all .2s;
    }

    a:hover
    {
        color: #cbe0ca;
        background: none;
        border: 1px solid #cbe0ca;
    }

`