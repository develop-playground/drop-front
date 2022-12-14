import { createGlobalStyle } from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const GlobalStyle = createGlobalStyle`
  *, :after, :before {box-sizing:border-box}
  * {margin:0}
  body, html {height:100%}
  body {-webkit-font-smoothing:antialiased;}
  canvas, img, picture, svg, video {display:block;max-width:100%}
  button, input, select, textarea {font:inherit}
  h1, h2, h3, h4, h5, h6, p {overflow-wrap:break-word}
  #__next, #root {isolation:isolate}
`;
