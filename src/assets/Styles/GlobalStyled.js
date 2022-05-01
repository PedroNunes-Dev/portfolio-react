import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    :root
    {
        --text-gray: #8d8d8d;
        --text-black: #181818;
        --color-black-ligth: #434750;
        --color-white: #fff;
        --color-black: #181818;
        --color-black-light: #454545;
        --color-green: #145858;
        --color-green-light: #cbe0ca;
        --color-green-light-opacity: #cbe0ca60; 
        --color-blue: #0b4454;
        --color-blue-light: #166374;
        --shadow: 0 2px 23px 0 rgba(0, 0, 0, 0.1), 0 2px 49px 0 rgba(0, 0, 0, 0.06);
    }

    *
    {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    }

    html
    {
        scroll-behavior: smooth;
    }

    body
    {
        font-family: 'Inter', sans-serif;
        color: var(--text-black);
    }

    .title
    {
        text-align: center;
        margin: 30px 0;
        color: var(--text-gray);
        font-weight: 700;
        font-size: 2.8em;
    }

`
// Breakpoints for responsive design
/*
breakpoints: {
    xsm: 'screen and (min-width: 320px)',
    sm: 'screen and (min-width: 640px)',
    md: 'screen and (min-width: 768px)',
    lg: 'screen and (min-width: 1024px)',
    xl: 'screen and (min-width: 1280px)'
  }
  */