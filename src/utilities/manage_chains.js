
const getChainId = async() => {
    const chainId = await window.ethereum.request({ method: 'eth_chainId' });
    return chainId;
}
/*
handleChainChanged(chainId);

ethereum.on('chainChanged', handleChainChanged);

function handleChainChanged(_chainId) {
  // We recommend reloading the page, unless you must do otherwise
  window.location.reload();
} */

export {getChainId}