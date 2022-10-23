import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect, useState } from "react";
import Logo from "../assets/images/logo.png";
import Link from "next/link";
import { ethers } from "ethers";
import { useRouter } from "next/router";
import { Button, Text } from "@chakra-ui/react";
import {
  BBVAAddress,
  BBVATokenAddress,
  BBVANFTRewards,
} from "../utils/ContractAddress";
import abi from "../abi/contractsAbi";
const Nav = (props) => {
  const router = useRouter();
  const [Swipe, SetSwipe] = useState(false);
  const [currentAccount, setCurrentAccount] = useState();
  const [balance, setBalance] = useState();
  useEffect(() => {
    connectToMetamask();
  }, []);
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
    setBalance(Math.round(tokens));
    //called only once
  };
  return (
    <div>
      <div className="bg-[#222] z-50 flex items-center lgmax:justify-between px-[5%] h-[100px]">
        <div className="w-[30%] lg:hidden">
          <FontAwesomeIcon
            onClick={() => {
              SetSwipe(!Swipe);
            }}
            className="text-white"
            icon={faBars}
          />
        </div>
        <div className="w-[10%] lgmax:w-[30%]">
          <Image width={200} height={100} objectFit="contain" src={Logo} />
        </div>
        <header className="w-[100%]  lgmax:hidden">
          <nav>
            <ul className="flex items-center text-white space-x-10 text-xl">
              <Link href="/" passHref>
                <a>Inicio</a>
              </Link>
              <Link href="/recompensas" passHref>
                <a>Recompensas</a>
              </Link>
              <Link href="/admin" passHref>
                <a>Admin</a>
              </Link>
              <Link href="/transferencias" passHref>
                <a>Transferencias</a>
              </Link>
              <Link href="/misrecompensas" passHref>
                <a>Mis Recompensas</a>
              </Link>
            </ul>
          </nav>
        </header>
        <div className="w-[40%] lgmax:w-[40%] flex gap-x-2">
          {currentAccount ? (
            <>
              {balance ? (
                <Text
                  onClick={getTokensBalance}
                  className="bg-blue-600 cursor-pointer text-center text-white p-2 rounded-lg lgmax:text-xs items-center flex"
                >
                  {`Puntos: ${balance}`}
                </Text>
              ) : (
                <Button
                  onClick={getTokensBalance}
                  className="bg-blue-600 text-center text-white p-2 rounded-lg lgmax:text-xs items-center flex"
                >
                  Obtener balances
                </Button>
              )}
              <Button onClick={connectToMetamask} className="bg-blue-600 text-center text-white p-4 rounded-lg lgmax:text-xs">
                {currentAccount}
              </Button>
            </>
          ) : (
            <Button
              className="bg-blue-600 text-center text-white p-4 rounded-lg lgmax:text-xs"
              onClick={connectToMetamask}
            >
              Conect To Metamask
            </Button>
          )}
        </div>
      </div>
      <div
        className={
          Swipe
            ? "bg-[#222] lg:hidden z-10 absolute w-full h-80 -translate-x-[0rem] transition-all duration-1000"
            : "bg-[#222] lg:hidden z-10 absolute w-full h-80 -translate-x-[50rem] transition-all duration-1000"
        }
      >
        <nav>
          <ul className="flex flex-col items-center text-white text-xl space-y-8 pt-7">
            <Link href="/" passHref>
              <a>Inicio</a>
            </Link>
            <Link href="/recompensas" passHref>
              <a>Recompensas</a>
            </Link>
            <Link href="/admin" passHref>
              <a>Admin</a>
            </Link>
            <Link href="/transferencias" passHref>
              <a>transferencias</a>
            </Link>
            <Link href="/test" passHref>
              <a>test</a>
            </Link>
            <Link href="/misrecompensas" passHref>
              <a>Mis Recompensas</a>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
