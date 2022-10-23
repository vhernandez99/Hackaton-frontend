import BBVALOGO from "../../assets/images/BBVA.png";
import AWSLOGO from "../../assets/images/AWS.png";
import Image from "next/image";
import { ethers } from "ethers";
import abi from "../../abi/contractsAbi";
import {
  BBVAAddress,
  BBVATokenAddress,
  BBVANFTRewards,
} from "../../utils/ContractAddress";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
const Intercambios = () => {
  const [toAddress, setToAddress] = useState();
  const [toAddress2, setToAddress2] = useState();
  const [amountOfPoints, setAmountOfPoints] = useState();
  const [tokenId, setTokenId] = useState();
  const transferReward = async (_from, _to, _rewardId) => {
    try {
      const { BBVANFTRewardsAbi } = abi;
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const signerAddress = await signer.getAddress();
      const BBVANFTRewardsContract = new ethers.Contract(
        BBVANFTRewards,
        BBVANFTRewardsAbi,
        signer
      );
      BBVANFTRewardsContract.transferFrom(signerAddress, toAddress, tokenId);
    } catch (error) {
      console.log(error);
    }
  };
  const addPointsToAcount = async (_address, _amount) => {
    try {
      const { BBVAAbi } = abi;
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const BBVAContract = new ethers.Contract(BBVAAddress, BBVAAbi, signer);
      const amount = ethers.utils.parseEther(amountOfPoints);
      await BBVAContract.addPointsToAcount(toAddress2, amount.toString());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mx-[20%]">
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
      </div>
      <div className="text-center text-blue-400 border-blue-400 border-2 my-8 py-4 rounded-lg">
        <p>Transferir tu recompensa</p>
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
                <p>Id</p>
                <input
                  onChange={(e) => setTokenId(e.target.value)}
                  type="number"
                  placeholder="Id"
                  className="bg-white text-black border-blue-400 border-2 rounded-lg p-2  w-full"
                ></input>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full">
            <Button
              className="bg-blue-400 rounded-lg p-2 px-8 text-center w-full"
              onClick={transferReward}
            >
              Enviar
            </Button>
          </div>
        </div>
      </div>
      <div className="text-center text-blue-400 border-blue-400 border-2 my-8 py-4 rounded-lg">
        <p>Enviar puntos (Solo admin)</p>
      </div>
      <div className="flex flex-col items-center">
        <div>
          <div className="flex space-x-4 mb-4">
            <div className="space-y-4 w-full">
              <div>
                <p>Cuenta destino:</p>
                <input
                  onChange={(e) => setToAddress2(e.target.value)}
                  placeholder="address"
                  className="bg-white text-black border-blue-400 border-2 rounded-lg p-2 w-full"
                ></input>
              </div>
              <div>
                <p>Cantidad</p>
                <input
                  onChange={(e) => setAmountOfPoints(e.target.value)}
                  type="number"
                  placeholder="Id"
                  className="bg-white text-black border-blue-400 border-2 rounded-lg p-2  w-full"
                ></input>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full">
            <Button
              className="bg-blue-400 rounded-lg p-2 px-8 text-center w-full"
              onClick={addPointsToAcount}
            >
              Enviar
            </Button>
          </div>
        </div>
      </div>
      <div className="text-center text-blue-400 border-blue-400 border-2 my-8 py-4 rounded-lg">
        <p>Intercambios Realizados</p>
      </div>
      <div>
        <div>
          <div className="flex">
            <div className="w-[25%] ml-2">Fecha:</div>
            <div className="w-[25%] ml-2">Valor:</div>
            <div className="w-[25%] ml-2">Destino:</div>
            <div className="w-[25%] ml-2">Estado:</div>
          </div>
          <div className="flex">
            <div className="w-[25%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2">
              DD/MM/AA
            </div>
            <div className="w-[25%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2">
              0.00
            </div>
            <div className="w-[25%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2">
              xxxx-xxxx-xxxx-xxxx
            </div>
            <div className="w-[25%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2">
              Realizado
            </div>
          </div>
          <div className="flex">
            <div className="w-[25%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2">
              DD/MM/AA
            </div>
            <div className="w-[25%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2">
              0.00
            </div>
            <div className="w-[25%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2">
              xxxx-xxxx-xxxx-xxxx
            </div>
            <div className="w-[25%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2">
              Realizado
            </div>
          </div>
          <div className="flex">
            <div className="w-[25%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2">
              DD/MM/AA
            </div>
            <div className="w-[25%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2">
              0.00
            </div>
            <div className="w-[25%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2">
              xxxx-xxxx-xxxx-xxxx
            </div>
            <div className="w-[25%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2">
              Realizado
            </div>
          </div>
          <div className="flex">
            <div className="w-[25%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2">
              DD/MM/AA
            </div>
            <div className="w-[25%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2">
              0.00
            </div>
            <div className="w-[25%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2">
              xxxx-xxxx-xxxx-xxxx
            </div>
            <div className="w-[25%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2">
              Realizado
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intercambios;
