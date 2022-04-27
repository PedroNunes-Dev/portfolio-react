import styled from "styled-components";

export const StyledTecnologies = styled.section`

    background: linear-gradient(155deg, var(--color-blue-light) 30%, var(--color-blue));
    display: flex;
    align-items: center;
    padding: 15px 0;
    
    .title
    {
        color: #fff;
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
        color: #fff;
    }

    .icon
    {
        font-size: 5rem;
        color: #fff;
    }
`
