import styled from "styled-components";


export const Menu = styled.header`
height: 70px ;
display: flex ;
align-items: center;
color: var(--text-gray);
background: var(--color-black);

@media (max-width: 480px) {

    height: 55px;
    
}


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
    width: 85px;
}

@media (max-width: 480px) {

img
{
    width: 75px;
}

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

        &.active
        {
            color: #15cdfc;
            
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
    background-color:rgba(25, 31, 30, 0.95);
    width: 100% ;
    height: 100%;
    position: fixed;
    z-index: 2;
    padding: 0;
    
   
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
        height: 100vh;
        animation: Opacity 0.7s ;
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
                transition: all .3s;
            }
            a:hover{
                color: var(--color-white);
            }
        }
    }
}

`
