import styled from "styled-components";


export const Menu = styled.header`
height: 70px ;
display: flex ;
align-items: center;
color: var(--text-gray);
background: var(--color-black);


.container
{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

`

export const Logo = styled.a`

img
{
    width: 100px;
}
`
export const NavBar = styled.nav`

@media screen and (max-width: 870px){
       display: none ;
    }
ul{
    margin: 0;
    padding: 0;
    display: flex;
    gap: 20px;
  
    li{
        
        list-style-type: none;
        a{
            color: var(--text-gray) ;
            text-decoration: none;
            font-weight: 500;
            transition: all .2s;
            padding: 8px 10px;
            border-radius: 5px;
        }
        a:hover
        {
            color: var(--color-white);
            background: var(--text-gray);
            border-radius: 5px;
        }
    }
}
`

export const Toggle = styled.nav`

@media screen and (min-width: 871px) {
    display: none ;
}
a{
    font-size: 30px ;
    color: var(--color-white) ;
}
ul{
    right: 0;
    top: 0 ;
    background-color:rgba(25, 31, 30, 0.9);
    width: 100% ;
    height: 100%;
    position: fixed;
    z-index: 2;
   
    .btn-close a{

        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 45px;
        height: 50px;
        border-radius: 5px;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        border: none;
        background: none;
        cursor: pointer;
        gap: 0.5rem;
        cursor: pointer;
        overflow: hidden;

    span
    {
        position: absolute;
        width: 30px;
        height: 3px;
        background: var(--text-gray);
        border-radius: 4px;
        transition: 0.3s;
    }   


    span:nth-child(1)
    {
        transform: translateY(-15px);
        width: 25px;
        left: 6px;
    }

    span:nth-child(1)
    {
        width: 30px;
        transform: translateY(0) rotate(45deg);
        transition-delay: 0.125s;
    }

    span:nth-child(2)
    {
        transform: translateY(15px);
        width: 15px;
        left: 6px;
    }

    span:nth-child(2)
    {
        width: 30px;
        transform: translateY(0) rotate(315deg);
        transition-delay: 0.25s;
    }

    span:nth-child(3)
    {
        transform: translateX(60px);
    }

       
        
    }
    .links{
        animation: Opacity 0.7s ;
        padding-top: 200px ;
        width: 100% ;
        display:flex ;
        flex-direction: column ;
        justify-content: center;
        align-items: center ;
        li{
            margin-bottom: 30px ;
            list-style-type: none;
            a{
                text-decoration:none;
                color: var(--text-gray) ;
                font-size: 30px ;
                font-weight: 800 ;
            }
        }
    }
}

`
    /*box-sizing: border-box;
    height: 80px;
    display: flex;
    background: var(--color-black);

    .container
    {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0;

    }

`
export const NavBar = styled.nav`

ul
    {
    margin: 0;
    padding: 0;
    }

    li
    {
    list-style: none;
    }

    a
    {
    text-decoration: none;
    color: var(--text-gray);
    }

    
    .logo img
    {
    width: 100px;
    }

    .menu
    {
    display: flex;
    gap: 1.4rem;
    }

    .menu a 
    {
    display: block;
    font-size: 1.2rem;
    line-height: 60px;
    transition: 0.2s;
    padding: 0 1rem;
    border-radius: 8px;
    }

    .menu a:hover 
    {
    background: var(--text-gray);
    color: var(--color-white);
    }

    .menu li.active a
    {
        background: var(--details);
        color: var(--color-white);
    }

`

export const Toggle = styled.nav`

    @media screen and (max-width: 870px){
        display: none;
    }

    .menu
    {
        display: block;
        position: absolute;
        width: 100%;
        top: 80px;
        right: 0;
        background: var(--color-black);
        transition: .6s;
        z-index: 10000;
        height: 0;
        visibility: hidden;
        overflow-y: hidden;
    }

    .nav.active .menu
        {
        height: calc(100vh - 70px);
        visibility: visible;
        overflow-y: auto;
        }

    .menu a 
    {
        padding: 1rem 0;
        margin: 0 1rem;
        text-align: center;
    }

    .btn-mobile
    {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 45px;
        height: 50px;
        border-radius: 5px;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        border: none;
        background: none;
        cursor: pointer;
        gap: 0.5rem;
        cursor: pointer;
        overflow: hidden;
    }

    .btn-mobile span
    {
        position: absolute;
        width: 30px;
        height: 3px;
        background: var(--color-white);
        border-radius: 4px;
        transition: 0.3s;
    }

    .btn-mobile span:nth-child(1)
    {
        transform: translateY(-15px);
        width: 25px;
        left: 6px;
    }

    .nav.active span:nth-child(1)
    {
        width: 30px;
        transform: translateY(0) rotate(45deg);
        transition-delay: 0.125s;
    }

    .btn-mobile span:nth-child(2)
    {
        transform: translateY(15px);
        width: 15px;
        left: 6px;
    }

    .nav.active span:nth-child(2)
    {
        width: 30px;
        transform: translateY(0) rotate(315deg);
        transition-delay: 0.25s;
    }

    .nav.active span:nth-child(3)
    {
        transform: translateX(60px);
    }*/

