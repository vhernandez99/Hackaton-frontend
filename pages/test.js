import React from "react";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
export default function test() {
  const [currentAccount, setCurrentAccount] = useState();
  const [chainId, setChainId] = useState();
  const [chainname, setChainName] = useState();
  useEffect(() => {
    if (!currentAccount || !ethers.utils.isAddress(currentAccount)) return;
    //client side code
    if (!window.ethereum) return;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    provider.getBalance(currentAccount).then((result) => {
      setBalance(ethers.utils.formatEther(result));
    });
    provider.getNetwork().then((result) => {
      setChainId(result.chainId);
      setChainName(result.name);
    });
  }, [currentAccount]);
  const onClickConnect = () => {
    //client side code
    if (!window.ethereum) {
      console.log("please install MetaMask");
      return;
    }
    //we can do it using ethers.js
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // MetaMask requires requesting permission to connect users accounts
    provider
      .send("eth_requestAccounts", [])
      .then((accounts) => {
        if (accounts.length > 0) setCurrentAccount(accounts[0]);
      })
      .catch((e) => console.log(e));
  };
  const onClickDisconnect = () => {
    console.log("onClickDisConnect");
    setBalance(undefined);
    setCurrentAccount(undefined);
  };
  return (
    <div>
      <div></div>
    </div>
  );
}
