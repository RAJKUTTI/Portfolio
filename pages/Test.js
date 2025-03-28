// // pages/live-coder.js
// import { useState } from 'react';
// import styles from '../styles/LiveCoder.module.css';

// const LiveCoder = () => {
//   const [html, setHtml] = useState('');
//   const [css, setCss] = useState('');
//   const [js, setJs] = useState('');

//   const updateOutput = () => {
//     const iframe = document.getElementById('output');
//     const output = `
//       <html>
//         <head>
//           <style>${css}</style>
//         </head>
//         <body>
//           ${html}
//           <script>${js}</script>
//         </body>
//       </html>
//     `;
//     iframe.srcdoc = output;
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.editor}>
//         <h2>HTML</h2>
//         <textarea value={html} onChange={(e) => setHtml(e.target.value)} />
//         <h2>CSS</h2>
//         <textarea value={css} onChange={(e) => setCss(e.target.value)} />
//         <h2>JavaScript</h2>
//         <textarea value={js} onChange={(e) => setJs(e.target.value)} />
//         <button onClick={updateOutput}>Run</button>
//       </div>
//       <div className={styles.preview}>
//         <iframe id="output" />
//       </div>
//     </div>
//   );
// };

// export default LiveCoder;



// Twitter icon



// import React from 'react';
// import styled from 'styled-components';

// const Button = () => {
//   return (
//     <StyledWrapper>
//       <button className="button">
//         <div className="bloom-container">
//           <div className="button-container-main">
//             <div className="button-inner">
//               <div className="back" />
//               <div className="front">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="svg" viewBox="0 0 512 512">
//                   <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
//                 </svg>
//               </div>
//             </div>
//             <div className="button-glass">
//               <div className="back" />
//               <div className="front" />
//             </div>
//           </div>
//           <div className="bloom bloom1" />
//           <div className="bloom bloom2" />
//         </div>
//       </button>
//     </StyledWrapper>
//   );
// }

// const StyledWrapper = styled.div`
//   .button {
//     background: none;
//     border: none;
//     cursor: pointer;
//   }

//   .button .bloom-container {
//     position: relative;
//     transition: all 0.2s ease-in-out;
//     border: none;
//     background: none;
//   }

//   .button .bloom-container .button-container-main {
//     width: 80px; /* Reduced from 110px */
//     aspect-ratio: 1;
//     border-radius: 50%;
//     overflow: hidden;
//     position: relative;
//     display: grid;
//     place-content: center;
//     border-right: 3px solid white;
//     border-left: 3px solid rgba(128, 128, 128, 0.147);
//     transform: rotate(-45deg);
//     transition: all 0.5s ease-in-out;
//   }

//   .button .bloom-container .button-container-main .button-inner {
//     height: 45px; /* Reduced from 60px */
//     aspect-ratio: 1;
//     border-radius: 50%;
//     position: relative;
//     box-shadow: rgba(100, 100, 111, 0.5) -6px 3px 6px 0px;
//     transition: all 0.5s ease-in-out;
//   }

//   .button .bloom-container .button-container-main .button-inner .front {
//     position: absolute;
//     inset: 4px;
//     border-radius: 50%;
//     background: linear-gradient(
//       60deg,
//       rgb(0, 103, 140) 0%,
//       rgb(58, 209, 233) 100%
//     );
//     display: grid;
//     place-content: center;
//   }

//   .button .bloom-container .button-container-main .button-inner .front .svg {
//     fill: #ffffff;
//     opacity: 0.5;
//     width: 22px; /* Reduced from 30px */
//     aspect-ratio: 1;
//     transform: rotate(45deg);
//     transition: all 0.2s ease-in;
//   }

//   .button .bloom-container .button-container-main .button-glass {
//     position: absolute;
//     inset: 0;
//     background: linear-gradient(
//       90deg,
//       rgba(255, 255, 255, 0) 0%,
//       rgba(255, 255, 255, 0.888) 100%
//     );
//     transform: translate(0%, -50%) rotate(0deg);
//     transform-origin: bottom center;
//     transition: all 0.5s ease-in-out;
//   }

//   .button .bloom-container:hover {
//     transform: scale(1.05);
//   }

//   .button .bloom-container:hover .button-container-main .button-glass {
//     transform: translate(0%, -35%);
//   }

//   .button
//     .bloom-container:hover
//     .button-container-main
//     .button-inner
//     .front
//     .svg {
//     opacity: 1;
//     filter: drop-shadow(0 0 6px white);
//   }

//   .button .bloom-container:active {
//     transform: scale(0.7);
//   }

//   .button .bloom-container:active .button-container-main .button-inner {
//     transform: scale(1.1);
//   }
// `;

// export default Button;

import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <button className="button">
        <span className="button_lg">
          <span className="button_sl" />
          <span className="button_text">Resume</span>
        </span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    border: none;
    background: none;
    color: #0f1923;
    cursor: pointer;
    position: relative;
    padding: 8px;
    margin-bottom: 20px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;
    transition: all .15s ease;
  }

  .button::before,
  .button::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    left: 0;
    height: calc(50% - 5px);
    border: 1px solid #7D8082;
    transition: all .15s ease;
  }

  .button::before {
    top: 0;
    border-bottom-width: 0;
  }

  .button::after {
    bottom: 0;
    border-top-width: 0;
  }

  .button:active,
  .button:focus {
    outline: none;
  }

  .button:active::before,
  .button:active::after {
    right: 3px;
    left: 3px;
  }

  .button:active::before {
    top: 3px;
  }

  .button:active::after {
    bottom: 3px;
  }

  .button_lg {
    position: relative;
    display: block;
    padding: 10px 20px;
    color: #fff;
    background-color: #0f1923;
    overflow: hidden;
    box-shadow: inset 0px 0px 0px 1px transparent;
  }

  .button_lg::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 2px;
    background-color: #0f1923;
  }

  .button_lg::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 4px;
    height: 4px;
    background-color: #0f1923;
    transition: all .2s ease;
  }

  .button_sl {
    display: block;
    position: absolute;
    top: 0;
    bottom: -1px;
    left: -8px;
    width: 0;
    background-image: linear-gradient(to bottom right, #00c6ff,
  #0072ff);
    transform: skew(-15deg);
    transition: all .2s ease;
  }

  .button_text {
    position: relative;
  }

  .button:hover {
    color: #0f1923;
  }

  .button:hover .button_sl {
    width: calc(100% + 15px);
  }

  .button:hover .button_lg::after {
    background-color: #fff;
  }`;

export default Button;

