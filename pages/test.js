import React from "react";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import Head from "next/head";
import { Box, Heading, Text, VStack, Button, Input } from "@chakra-ui/react";
import abi from "../abi/contractsAbi";
import Nav from "../components/Nav";
export default function test() {
  const [balance, setBalance] = useState();
  const [currentAccount, setCurrentAccount] = useState();
  const [chainId, setChainId] = useState();
  const [chainname, setChainName] = useState();
  const BBVATokenAddress = "0x0fc1C92A5f660b3B0a97Fd27EdA2A33E63B02468";
  const BBVAAddress = "0x7301c85b6b8b09849667A765bA6471bA927806Ba";
  const BBVANFTRewards = "0x03afA2e1ad5a4A63C05e544741aE056D3991a275";

  useEffect(() => {
    readNetwork();
    connectToMetamask();
  }, [currentAccount]);
  const readNetwork = () => {
    if (!currentAccount || !ethers.utils.isAddress(currentAccount)) return;
    //client side code
    if (!window.ethereum) return;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    provider.getNetwork().then((result) => {
      setChainId(result.chainId);
      setChainName(result.name);
    });
  };
  const connectToMetamask = () => {
    //client side code
    if (!window.ethereum) {
      alert("please install MetaMask");
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
  const getTokensBalance = async () => {
    const { BBVATokenAbi } = abi;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const BBVAToken = new ethers.Contract(
      BBVATokenAddress,
      BBVATokenAbi,
      signer
    );
    const balance = await BBVAToken.balanceOf(currentAccount);
    const tokens = ethers.utils.formatEther(balance.toString());
    setBalance(tokens);
    //called only once
  };
  const getAdmin = async () => {};
  const addAdmin = async (_address) => {
    try {
      const { BBVAAbi } = abi;
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const BBVAContract = new ethers.Contract(BBVAAddress, BBVAAbi, signer);
      await BBVAContract.addAdmin("0x9e31BC05aC358e5Ae4317400871BB2B20cf91997");
    } catch (error) {
      console.log(error);
    }
  };
  const deleteAdmin = async () => {};
  const addPointsToAcount = async (_address, _amount) => {
    try {
      const { BBVAAbi } = abi;
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const BBVAContract = new ethers.Contract(BBVAAddress, BBVAAbi, signer);

      const amount = ethers.utils.parseEther("1");
      await BBVAContract.addPointsToAcount(
        "0x9e31BC05aC358e5Ae4317400871BB2B20cf91997",
        amount.toString()
      );
    } catch (error) {
      console.log(error);
    }
  };
  const addReward = async (_expiration, _cost, _metadataUrl) => {
    try {
      const secondsInAday = 86400;
      const expirationInSeconds = secondsInAday * 1;
      const amount = ethers.utils.parseEther("1");
      const { BBVAAbi } = abi;
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const BBVAContract = new ethers.Contract(BBVAAddress, BBVAAbi, signer);
      BBVAContract.addReward(expirationInSeconds, amount, "ipfs://");
    } catch (error) {
      console.log(error);
    }
  };
  const deleteReward = async (_rewardId) => {
    try {
      const { BBVAAbi } = abi;
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const BBVAContract = new ethers.Contract(BBVAAddress, BBVAAbi, signer);
      BBVAContract.deleteReward(1);
    } catch (error) {
      console.log(error);
    }
  };
  const approveTokens = async (_amountToApprove) => {
    const { BBVATokenAbi } = abi;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const amount = ethers.utils.parseEther("1");
    const signer = provider.getSigner();
    const BBVATokenContract = new ethers.Contract(
      BBVATokenAddress,
      BBVATokenAbi,
      signer
    );
    BBVATokenContract.approve(BBVAAddress, amount);
  };
  const buyReward = async (_account, _rewardId, _amount) => {
    try {
      const { BBVAAbi } = abi;
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const amount = ethers.utils.parseEther("1");
      const signer = provider.getSigner();
      const BBVAContract = new ethers.Contract(BBVAAddress, BBVAAbi, signer);
      BBVAContract.buyReward(
        "0x3A1e43425cD5eE5B07F32899B0d9F69ce43182b1",
        2,
        amount
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Head>
        <title>My DAPP</title>
      </Head>
      <Heading as="h3" my={4}>
        Web3
      </Heading>
      <VStack>
        <Box w="100%" my={4}>
          {currentAccount ? (
            <Button type="button" w="100%" onClick={getTokensBalance}>
              GetTokens:{balance}
            </Button>
          ) : (
            <Button type="button" w="100%" onClick={connectToMetamask}>
              Connect MetaMask
            </Button>
          )}
        </Box>
        <Box mb={0} p={4} w="100%" borderWidth="1px" borderRadius="lg">
          <Heading my={4} fontSize="xl">
            Account info
          </Heading>
          <Text>Account: {currentAccount}</Text>
          <Text>ETH Balance of current account: {balance}</Text>
          <Text>BBVATokens: {balance}</Text>
          <Text>
            Chain Info: ChainId {chainId} name {chainname}
          </Text>
          <Button type="button" w="100%" onClick={addAdmin}>
            Add admin
          </Button>
          <Input placeholder="Admin address" />
          <Button type="button" w="100%" onClick={addPointsToAcount}>
            Add points to address
          </Button>
          <Input placeholder="amount of points" />

          <Button type="button" w="100%" onClick={addReward}>
            Add reward
          </Button>
          <Button type="button" w="100%" onClick={deleteReward}>
            delete reward
          </Button>
          <Button type="button" w="100%" onClick={approveTokens}>
            Approve tokens
          </Button>
          <Button type="button" w="100%" onClick={buyReward}>
            Buy reward
          </Button>
        </Box>
        )
      </VStack>
    </>
  );
}
