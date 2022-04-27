import styled from "styled-components";


export const Container = styled.div`

    display: flex;
    align-items: center;
    padding: 20px 0;
    background: linear-gradient(75deg, #536976, #292e49);

    @media(min-width: 320px)
    {
        height: auto;
    }

    

`

export const GitPerfil = styled.div`

    h3
    {
        color: var(--text-gray);
        font-weight: 700;
        margin: 15px 0;
    }

    img
    {
        border-radius: 0 0 10px 10px;
    }

    @media(min-width: 320px)
    {
        img
        {
            width: 100%;
        }
    }

    @media(min-width: 1024px)
    {
        img 
        {
            width: auto;
        }
    }

`

export const GitProjects = styled.div`

    display: flex;
    justify-content: center;
    flex-direction: column;

    span
    {
        padding: 0 10px;
        color: var(--text-gray);
        font-weight: 600;
    }

`

export const Project = styled.div`

    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 10px;
    padding: 10px;
    margin: 8px;
    box-shadow: var(--shadow);
    
    a
    {
        text-decoration: none;
        color: var(--text-gray);
        transition: all .2s;
    }

    a:hover
    {
        color: var(--text-black);
    }

`
export const GitBtnStyles = styled.button`

    
    background: none;
    border-radius: 10px;
    padding: 8px 0;
    border: 1px solid #8d8d8d60;
    margin: 0 8px;
    transition: all .4s;
    box-shadow: 0 2px 23px 0 rgba(0, 0, 0, 0.1), 0 2px 49px 0 rgba(0, 0, 0, 0.06);

    :hover{
        border: 1px solid transparent;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
    }
    
    a
    {
        color: var(--text-gray);
        text-decoration: none;
        transition: all .2s;
    }

    a:hover
    {
        color: var(--text-black);
    }

    

`