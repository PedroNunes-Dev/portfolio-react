import styled from "styled-components";

import estrelas from '../../assets/images/estrelas.png'

export const StyledHome = styled.main`

    background-image: url(${estrelas}), linear-gradient(175deg, var(--color-black), var(--color-black-ligth), var(--color-black));
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    //background-color: linear-gradient(175deg, var(--color-black), var(--color-black-ligth), var(--color-black));
    overflow: hidden;

    @media(min-width: 1024px){
        height: auto;
    }

    @media(min-width: 1280px){
        height: calc(100vh - 130px);
    }

`

export const HomeStyled = styled.main`

    color: var(--color-white);
    
    display: flex;
    align-items: center;
    padding: 40px;

    .home-txt
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
    }

    .home-txt h2
    {
        font-size: 5rem;
        font-weight: 700;
    }

    .home-txt p
    {
        font-size: 1.5rem;
        font-weight: 500;
    }

    .cartoon
    {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .cartoon img
    {
        width: auto;
    }

    .type-wrap
    {
        
        font-size: 1.5rem;
    }

    @media(max-width: 480px)
    {
        
        .home-txt
        {
            align-items: center;
        }

        .home-txt h2
        {
            font-size: 2.5rem;
        }

        .home-txt p
        {
            font-size: 1rem;
        }

        .cartoon img
        {
            width: 90%;
        }

        .type-wrap
        {
            font-size: 1rem;
        }
        
        
    }

`

export const BtnHome = styled.div`

    display: flex;
    gap: 20px;

    a
    {
        text-decoration: none;
        padding: 12px 22px;
        border-radius: 10px;
        border: 1px solid var(--color-white);
        color: var(--color-white);
        box-shadow: var(--shadow);
        margin: 20px 0;
        transition: all 0.3s;
    }

    a:hover
    {
        background: var(--color-white);
        color: var(--color-black);
    }

    @media(max-width: 480px)
    {

        a
        {
            padding: 10px 15px;
        }
        
        
    }

`

export const StyledTecnologies = styled.section`

    display: flex;
    align-items: center;
    padding: 20px 0;
    
    .title
    {
        color: var(--color-white);
    }

    section
    {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;
    }

    .techIcons
    {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: var(--color-white);
        transition: all .3s;
    }

    .techIcons:hover, .icon:hover
    {
        color: #DC3545;
    }

    .icon
    {
        font-size: 5rem;
        color: var(--color-white);
        transition: all .3s;
    }

    @media(max-width: 480px)
    {
        .title
        {
            font-size: 2.5rem;
        }
        .icon
        {
            font-size: 4.2rem;
        }
        
    }

`