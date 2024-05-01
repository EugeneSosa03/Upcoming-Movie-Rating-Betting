import {createGlobalStyle} from "styled-components";
import {Limelight} from 'next/font/google';



const limelight = Limelight({weight:'400' , subsets: ['latin']})

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  font-family: ${limelight.style.fontFamily};
 
}
`

export default function App({ Component, pageProps }) {
  return(

<>
<GlobalStyle />

<Component {...pageProps} />



</>

  );
}
