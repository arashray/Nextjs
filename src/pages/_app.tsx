import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";
import {theme} from '../styles/theme'
import "vazir-font/dist/font-face.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
