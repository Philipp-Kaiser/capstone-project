import { createGlobalStyle } from "styled-components";

/* Resets and basic setup*/
const GlobalStyle = createGlobalStyle`
:root {
    --primary: white;
    --primary-light: white;
    --secondary: white;
    --secondary-light: white;
    --white: white;
    --black: black;
  
    --ff-sans: sans-serif;
    --ff-serif: serif;
  
    --fs-200: 0.75rem;
    --fs-300: 1rem;
    --fs-400: 1.25rem;
    --fs-500: 1.375rem;
    --fs-600: 1.75rem;
    --fs-900: 2.125rem;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  input,
  textarea,
  button,
  select,
  a {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  
  h1,
  h2,
  h3 {
    line-height: 1.2;
  }
  
  body,
  h1,
  h2,
  h3,
  p {
    margin: 0;
  }
  
  body {
    line-height: 1.5;
    font-size: 1.25rem; /* var(--fs-400) */
  }
  
  ul[class],
  ol[class] {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  ul[class] li,
  ol[class] li {
    list-style: none;
    padding: 0;
  }
  
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
  
  /* Typography */
  
  .text-serif {
    font-family: var(--ff-serif);
    font-weight: 200;
  }
  
  .page-title {
    font-size: var(--fs-900);
  }
  
  .section-title {
    font-size: var(--fs-500);
    color: var(--secondary);
  }
  
  /* general layout */
  
  .container {
    max-width: 40rem;
    padding: 2rem;
    margin: 0 auto;
  }
  `;

export default GlobalStyle;
