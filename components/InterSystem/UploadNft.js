import BBVALOGO from "../../assets/images/BBVA.png";
import AWSLOGO from "../../assets/images/AWS.png";
import Image from "next/image";
import { ethers } from "ethers";
import abi from "../../abi/contractsAbi";
import { Button } from "@chakra-ui/react";
import {
  BBVAAddress,
  BBVATokenAddress,
  BBVANFTRewards,
} from "../../utils/ContractAddress";
import { useEffect, useState } from "react";

const UploadNft = () => {
  const [expiration, setExpiration] = useState();
  const [cost, setCost] = useState();
  const [toAddress, setToAddress] = useState();
  const [rewardId, setRewardId] = useState();
  const [tokensToApprove, setTokensToApprove] = useState();
  const [allowedTokensToSpend, setAllowedTokensToSpend] = useState();
  const [allRewards, setAllRewards] = useState();
  const buyReward = async (_account, _rewardId) => {
    try {
      const { BBVAAbi } = abi;
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const amount = ethers.utils.parseEther("1");
      const signer = provider.getSigner();
      const BBVAContract = new ethers.Contract(BBVAAddress, BBVAAbi, signer);
      BBVAContract.buyReward(toAddress, rewardId, amount);
    } catch (error) {
      console.log(error);
    }
  };
  const approveTokens = async () => {
    try {
      const { BBVATokenAbi } = abi;
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const amount = ethers.utils.parseEther(tokensToApprove);
      const signer = provider.getSigner();
      const BBVATokenContract = new ethers.Contract(
        BBVATokenAddress,
        BBVATokenAbi,
        signer
      );
      await BBVATokenContract.approve(BBVAAddress, amount);
      getAllowedTokensToSpend;
    } catch (error) {
      console.log(error);
    }
  };
  const getAllowedTokensToSpend = async () => {
    try {
      const { BBVATokenAbi } = abi;
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const signerAddress = await signer.getAddress();
      const BBVATokenContract = new ethers.Contract(
        BBVATokenAddress,
        BBVATokenAbi,
        signer
      );
      const allowedTokens = await BBVATokenContract.allowance(
        signerAddress,
        BBVAAddress
      );
      const tokens = ethers.utils.formatEther(allowedTokens);
      setAllowedTokensToSpend(Math.round(tokens));
    } catch (error) {
      console.log(error);
    }
  };
  const getAllRewards = async () => {
    try {
      const { BBVAAbi } = abi;
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const BBVAContract = new ethers.Contract(BBVAAddress, BBVAAbi, signer);
      const rewards = await BBVAContract.returnAllRewards();
      setAllRewards(rewards);
      console.log(rewards);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllowedTokensToSpend();
    getAllRewards();
  }, []);
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

  return (
    <div className="mx-[20%]">
      <div className="flex mt-16">
        <div className="w-1/2 space-y-16">
          <div className="flex justify-center">
            <Image
              width={300}
              height={150}
              src={BBVALOGO}
              objectFit="contain"
            />
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center space-y-6">
          {/* <p className='bg-blue-600 text-white py-2 px-16 rounded-lg'>Crear recompensa</p> */}
        </div>
      </div>
      <div className="text-center text-blue-400 border-blue-400 border-2 my-8 py-4 rounded-lg">
        <p>Recompensas</p>
      </div>
      <div className="flex justify-center items-center">
        {allRewards?.map((item, _index) => {
          return (
            <div key={_index} className="">
              <div className="bg-white w-[190px] h-[200px] border-2 border-blue-400 rounded-lg">
                <Image
                  src="https://gateway.pinata.cloud/ipfs/QmXmqHnMmhLUcPKgepVRmBtoj3d5AuuBWwR8x2nCot3uPQ"
                  width={190}
                  height={200}
                />
              </div>
              <div>
                <h1>{`Id: ${item[0]?.toString()}`}</h1>
                <h1>
                  {`Cost: ${Math.round(ethers.utils.formatEther(item[2]?.toString()))}`}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-center text-blue-400 border-blue-400 border-2 my-8 py-4 rounded-lg">
        <p>Aprobar el costo de la recompensa antes de comprar</p>
      </div>
      <div className="flex flex-col items-center">
        <div>
          <div className="flex space-x-4 mb-4">
            <div className="space-y-4 w-full">
              <div>
                <p>Tokens aprobados para comprar recompensas</p>
                <input
                  disabled
                  onChange={(e) => setTokensToApprove(e.target.value)}
                  type="number"
                  value={allowedTokensToSpend}
                  placeholder="Cantidad"
                  className="bg-white text-black border-blue-400 border-2 rounded-lg p-2  w-full"
                ></input>
              </div>
              <div>
                <p>Aprobar tokens para gastar</p>
                <input
                  onChange={(e) => setTokensToApprove(e.target.value)}
                  type="number"
                  placeholder="Cantidad"
                  className="bg-white text-black border-blue-400 border-2 rounded-lg p-2  w-full"
                ></input>
              </div>
            </div>
          </div>
          <div className="space-y-2 justify-center w-full">
            <Button
              onClick={approveTokens}
              className="bg-blue-400 rounded-lg p-2 px-8 text-center w-full"
            >
              Aprobar costo
            </Button>
          </div>
        </div>
      </div>
      <div className="text-center text-blue-400 border-blue-400 border-2 my-8 py-4 rounded-lg">
        <p>Comprar Recompensas</p>
      </div>
      <div className="flex flex-col items-center">
        <div>
          <div className="flex space-x-4 mb-4">
            <div className="space-y-4 w-full">
              <div>
                <p>Cuenta destino:</p>
                <input
                  onChange={(e) => setToAddress(e.target.value)}
                  placeholder="address"
                  className="bg-white text-black border-blue-400 border-2 rounded-lg p-2 w-full"
                ></input>
              </div>
              <div>
                <p>ID de recompensa</p>
                <input
                  onChange={(e) => setRewardId(e.target.value)}
                  type="number"
                  placeholder="Id"
                  className="bg-white text-black border-blue-400 border-2 rounded-lg p-2  w-full"
                ></input>
              </div>
            </div>
          </div>
          <div className="space-y-2 justify-center w-full">
            <Button
              onClick={buyReward}
              className="bg-blue-400 rounded-lg p-2 px-8 text-center w-full"
            >
              Enviar
            </Button>
          </div>
        </div>
      </div>
      {/* <div className="text-center text-blue-400 border-blue-400 border-2 my-8 py-4 rounded-lg">
        <p>Recompensas</p>
      </div>
      <div>
        <div>
          <div className="flex">
            <div className="w-[20%] ml-2">Caducidad:</div>
            <div className="w-[20%] ml-2">Costo:</div>
            <div className="w-[20%] ml-2">URL:</div>
          </div>
          <div className="flex">
            <div className="w-[20%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2">
              1
            </div>
            <div className="w-[20%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2">
              1
            </div>
            <div className="w-[20%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2">
              1
            </div>
            <div className="w-[40%]  px-2 py-4 m-2 flex justify-center space-x-6">
              <Button className="bg-blue-400 text-center py-2 px-4 rounded-lg w-[10rem]">
                Eliminar
              </Button>
            </div>
          </div>
          <div className="flex">
            <div className="w-[20%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2">
              1
            </div>
            <div className="w-[20%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2">
              1
            </div>
            <div className="w-[20%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2">
              1
            </div>
            <div className="w-[40%]  px-2 py-4 m-2 flex justify-center space-x-6">
              <p className="bg-blue-400 text-center py-2 px-4 rounded-lg w-[10rem]">
                Eliminar
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default UploadNft;
