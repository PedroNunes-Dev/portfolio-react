import styled from "styled-components"
import estrelas from '../../assets/images/estrelas.png'

export const StyledAbout = styled.section`

    background-image: url(${estrelas}), linear-gradient(155deg, var(--color-black-light) 0%, var(--color-black) 90%);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 15px 0;
    display: flex;
    color: var(--text-gray);
    height: calc(100vh - 130px);
    align-items: center;

    .about-txt
    {
        font-size: 1.5rem;
        text-align: justify;
    }

    strong
    {
        color: var(--color-white);
    }

   
    @media(max-width: 480px)
    {
        height: auto;
        
        .about-txt
        {
            font-size: 1.1rem;
        }
    }

`