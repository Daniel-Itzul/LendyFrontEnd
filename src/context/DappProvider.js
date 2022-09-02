import React, { useState, useEffect} from "react"
import detectEthereumProvider from "../utilities/detect-provider";
import { getChainId } from "../utilities/manage_chains";
import { getAccounts } from "../utilities/manage_accounts";
import { useMoralis } from "react-moralis";

const DappContext = React.createContext();

const DappProvider = ({children}) => {
  const { Moralis } = useMoralis();
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
    detectProvider();
    const getCurrentChain = async () => {
      const chain = await getChainId();
      setChainId(chain);
    }
    getCurrentChain();
    const getCurrentAccount = async() => {
      const accounts = await getAccounts();
      setWalletAddress(accounts[0]);
    }
    getCurrentAccount();
  },[chainId, walletAddress, hasProvider]);

  useEffect(() => {
    const initializeWeb3 = async () => {
      try {
        await Moralis.enableWeb3();
      }
      catch(error){
        console.log("Web3 Instance already created")
      }
    }
    initializeWeb3();
  },[Moralis])
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
      <DappContext.Provider value={{ contractAddress, hasProvider, walletAddress, chainId, nativeBalance, setNativeBalance }}>
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