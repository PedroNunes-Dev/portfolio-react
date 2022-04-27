import styled from "styled-components"

export const StyledAbout = styled.section`

    background: linear-gradient(155deg, var(--color-black-light) 0%, var(--color-black) 90%);
    padding: 15px 0;
    display: flex;
    color: var(--text-gray);

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
        .about-txt
        {
            font-size: 1.1rem;
        }
    }

`