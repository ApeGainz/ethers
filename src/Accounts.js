import {ethers} from 'ethers';
import {useEffect, useState} from 'react';

const Accounts = () => {
  
  const [walletBalance, setBalance] = useState(null)
  const [walletAddress, setWalletAddress] = useState("");

  // const apiKey = fyPRHA4xLNeZ3Ck39MsiOtdL27YaXJQG;

  const provider = new ethers.providers.JsonRpcProvider('https://eth-mainnet.g.alchemy.com/v2/fyPRHA4xLNeZ3Ck39MsiOtdL27YaXJQG');

  useEffect(() => {
    async function fetchData() {
      const balance = await provider.getBalance("apegainz.eth")
      setBalance(balance)
    }
    fetchData();
  }, []); 

  if (walletBalance !== null){
    console.log(walletBalance.toString())
  }

  console.log(provider)

  async function requestAccount(){
    if(window.ethereum){
      console.log('detected')

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        console.log(accounts)
        setWalletAddress(accounts)
        
      } catch (error) {
        console.log(error)
      }

    }
    else{
      console.log('metamask not detected')
    }
  }

  return (
    <div className="">
      <header className="">
      <button
        class="button is-large is-info"
        onClick={requestAccount}
      >
        Connect wallet!
      </button>
      <h1> 
        Wallet Address: {walletAddress}
      </h1>
      </header>
    </div>
  );

};

export default Accounts ;



