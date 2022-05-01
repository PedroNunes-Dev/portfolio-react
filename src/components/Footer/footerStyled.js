import styled from "styled-components";

export const FooterStyled = styled.footer`

display: flex;
align-items: center;
height: 60px;
background: var(--color-black);
color: var(--text-gray);

.container
{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.links-socials
{
    display: flex;
    gap: 20px;
    margin: 0;
    list-style: none;
    font-size: 1.5rem;
    padding: 0;
    
}

.links-socials a
{
    transition: all .3s;
    color: var(--text-gray);
}

.links-socials a:hover
{
    color: #DC3545;
}

@media (max-width: 480px) 
{
    height: auto;
    text-align: center;
    padding: 1.5rem;
    

    .container
    {
        align-items: center;
        flex-direction: column;
        justify-content: center;
        gap: 1rem;
    }

    .links-socials
    {
        align-items: center;;
    }
}

`