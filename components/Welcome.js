import Image from "next/image";
import img from "../assets/images/nftgrid.jpg";

const Welcome = () => {
    return ( 
        <div id="About" className="xl:mx-principal nanomax:mx-0 lg:mx-principal2 lgmax:px-5  flex lgmax:flex-col mt-16 mb-12 bg-blackcontainer rounded-lg p-4">
            <div data-aos="fade-down" className="w-1/2 lgmax:w-full h-auto lgmax:px-3 lgmax:pt-5 px-12 flex flex-col justify-center items-center">
                <h1 className="font-semibold text-4xl leading-normal text-white">
                Welcome to the Women Of Power
                </h1>
                <p className="text-justify text-gray-600 leading-loose text-xl mt-3 mb-5">
                Women of Power is a project focused on promoting the crypto, nfts, digital assets, and metaverse industry. This nfts project will direct its profits towards funding women-made projects focused on crypto, defi, nfts, and the metaverse. 
                </p>
                <p className="text-justify text-gray-600 leading-loose text-xl">
                
                </p>
            </div>
            <div className="w-1/2 lgmax:w-full lgmax:mt-10 lgmax:pb-5 grid grid-cols-2 gap-5">
                <Image data-aos="fade-up-left" className="rounded-xl" width={350} height={350} objectFit="cover" src={img}/>
                <Image data-aos="fade-up-right" className="rounded-xl" width={350} height={350} objectFit="cover" src={img}/>
                <Image data-aos="fade-down-left" className="rounded-xl" width={350} height={350} objectFit="cover" src={img}/>
                <Image data-aos="fade-down-right" className="rounded-xl" width={350} height={350} objectFit="cover" src={img}/>
            </div>
        </div>
     );
}
 
export default Welcome;