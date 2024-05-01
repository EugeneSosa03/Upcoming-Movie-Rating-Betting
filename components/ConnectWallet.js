import {ThirdwebProvider, ConnectButton} from "thirdweb/react";
import { createThirdwebClient } from "thirdweb";

  import {createWallet,walletConnect,inAppWallet,} from "thirdweb/wallets";
  
  const client = createThirdwebClient( {
    clientId: "YOUR_CLIENT_ID",
  });
  
  const wallets = [
    createWallet("io.metamask"),
    createWallet("com.coinbase.wallet"),
    walletConnect(),
    inAppWallet({
      auth: {
        options: [
          "email",
          "google",
          "apple",
          "facebook",
          "phone",
        ],
      },
    }),
  ];
  
  export default function ConnectWallet() {
    return (
      <ThirdwebProvider>
        <ConnectButton
          client={client}
          wallets={wallets}
          theme={"dark"}
          
        />
      </ThirdwebProvider>
    );
  }