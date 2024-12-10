import "./App.css";


// wallet adapter imports
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";
import { TokenLaunchpad } from "./components/TokenLaunchpad";

function App() {
  return (
    <ConnectionProvider
      endpoint={
        "https://aged-twilight-wish.solana-devnet.quiknode.pro/f5c0fbe5fac4c69a33548750c9d6620797aae1a6"
      }
    >
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: 20,
            }}
          >
            <WalletMultiButton />
            <WalletDisconnectButton />
          </div>
          <TokenLaunchpad></TokenLaunchpad>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
