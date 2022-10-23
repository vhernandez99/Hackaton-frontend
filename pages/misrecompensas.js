import BBVALOGO from "../assets/images/BBVA.png";
import AWSLOGO from "../assets/images/AWS.png";
import Image from "next/image";
import { ethers } from "ethers";
import abi from "../abi/contractsAbi";
import { Button } from "@chakra-ui/react";
import {
  BBVAAddress,
  BBVATokenAddress,
  BBVANFTRewards,
} from "../utils/ContractAddress";
import { useEffect, useState } from "react";

const MisRecompensas = () => {
  const [expiration, setExpiration] = useState();
  const [cost, setCost] = useState();
  const [toAddress, setToAddress] = useState();
  const [rewardId, setRewardId] = useState();
  const [tokensToApprove, setTokensToApprove] = useState();
  const [allowedTokensToSpend, setAllowedTokensToSpend] = useState();
  const getMyRewards = async () => {
    const response = await fetch(
      "https://eth-goerli.g.alchemy.com/nft/v2/DaVXPztsrU8prbCt56HOAeQWsELaL7_P/getNFTsForCollection?contractAddress=0xb26ffe7818018f68B516558d500901A74DE152a0&withMetadata=false"
    );
      const rewards =await response.json()
      console.log(rewards)
  };
  useEffect(() => {
    getMyRewards()
  }, []);
  return (
    <div className="bg-black text-white h-[700px]">
      <div className="mx-[20%] h-full">
        <div className="flex justify-center mt-16">
          <div className="w-2/2 space-y-16">
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
        <div className="flex flex-col items-center">
          <div>Lista de mis recompensas</div>
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
    </div>
  );
};

export default MisRecompensas;
