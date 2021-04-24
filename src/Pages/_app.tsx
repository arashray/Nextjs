import { ThemeProvider } from "styled-components";
import GlobalStyle from "../Styles/global";
import {theme} from '../Styles/theme/theme'

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
