const getChainId = async() => {
    const chainId = await window.ethereum.request({ method: 'eth_chainId' });
    return chainId;
}
export {getChainId}