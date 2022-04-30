import styled from "styled-components";

export const StyledHome = styled.section`

    height: calc(100vh - 130px);
    background: var(--color-black);
    overflow: hidden;
    background: var(--color-black);


`

export const HomeStyled = styled.main`

    color: var(--color-white);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

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
        width: 420px;
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