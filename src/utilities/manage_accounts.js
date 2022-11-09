const getAccounts = async() => {
    const accounts = await window.ethereum.request({ method: 'eth_accounts' });
    return accounts;
}

export {getAccounts}