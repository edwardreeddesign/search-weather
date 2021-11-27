import { createGlobalStyle } from "styled-components";
import bgSunny from "../Images/sunny.webp";
import bgCold from "../Images/cold.jpeg";
import bgRain from "../Images/rain.webp";
import bgSnow from "../Images/snow.webp";
import bgClouds from "../Images/cloudy.jpeg";

const GlobalStyle = createGlobalStyle`
    :root {
        --clrLight: #E9E5DF;
        --clrMed: #698193;
        --clrDark: #002C4C;
        --clrAccent: #0966C2;
        

        --fontMain: 'DM Sans', sans-serif;
        --fontTitle: 'Righteous', cursive;

        --boxShadow: 
  2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
  6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
  12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
  22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
  41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
  100px 100px 80px rgba(0, 0, 0, 0.07)
;

    }

    .App {
        background-size: cover;
        background-position: center center;
        transition: all 400ms ease-in-out;
        background-image: url(${bgSunny});

        &.cold {
            background-image: url(${bgCold});
        }

        &.rain {
            background-image: url(${bgRain})
        }

        &.snow {
            background-image: url(${bgSnow})
        }

        &.clouds {
            background-image: url(${bgClouds})
        }
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        background-color: var(--clrWhite);
        font-family: var(--fontMain);
        color: var(--clrLight);
    }
`;

export default GlobalStyle;
