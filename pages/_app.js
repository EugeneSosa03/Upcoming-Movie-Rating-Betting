import {createGlobalStyle} from "styled-components";
import {Limelight} from 'next/font/google';
import TitleBar from "@/components/TitleBar";

import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
} from "@thirdweb-dev/react";





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
<TitleBar/>
<ThirdwebProvider 
    activeChain="binance-testnet" 
    supportedWallets={[
      metamaskWallet({
        recommended: true,
      }),
      coinbaseWallet(),
      walletConnect(),
    ]}
    clientId= "16945ae10912670eb0cff53135337b35"

>
  <Component {...pageProps} />
</ThirdwebProvider>




</>

  );
}
