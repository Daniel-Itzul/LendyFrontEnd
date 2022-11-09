import React, { useState, useEffect} from "react"
import detectEthereumProvider from "../utilities/detect-provider";
import { getChainId } from "../utilities/manage_chains";
import { getAccounts } from "../utilities/manage_accounts";

const DappContext = React.createContext();

const DappProvider = ({children}) => {
  const [hasProvider, setProvider] = useState(false);
  const [walletAddress, setWalletAddress] = useState();
  const [chainId, setChainId] = useState();
  const [nativeBalance, setNativeBalance] = useState();
  const contractAddress = "0x097cbef8a739a056bbac30dae756a77ed84dc861";

  useEffect(() => {
    const detectProvider = async () => {
      const provider = await detectEthereumProvider();
      setProvider( provider != null);
    };
    const getCurrentChain = async () => {
      const chain = await getChainId();
      setChainId(chain);
    }
    const getCurrentAccount = async() => {
      const accounts = await getAccounts();
      setWalletAddress(accounts[0]);
    }
    detectProvider();
    if (hasProvider){
      getCurrentChain();
      getCurrentAccount();
    }
  },[chainId, walletAddress, hasProvider]);

  const setListeners = () => {
    if (hasProvider){
      window.ethereum.on('chainChanged', (chainId) => {
       window.location.reload();
      });
      window.ethereum.on('accountsChanged', () =>{
        window.location.reload();
      })
    }
    else return;
  }
  setListeners();

  return (
      <DappContext.Provider value={{ contractAddress, hasProvider, walletAddress, chainId, nativeBalance, setNativeBalance, setWalletAddress}}>
        {children}
      </DappContext.Provider>
    );
}

function useDapp() {
    const context = React.useContext(DappContext);
    if (context === undefined) {
      throw new Error("useDapp must be used within a DappProvider");
    }
    return context;
  }
  
export { DappProvider, useDapp };