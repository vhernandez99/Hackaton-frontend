import Image from "next/image";
import Logo from  "../assets/images/TICKERS1X1-01.png";
const Index = () => {
    return ( 
        <div className="flex items-center lgmax:flex-col">
            <div className="w-1/2 pl-20 lgmax:w-full lgmax:pl-2 lgmax:pr-3">
                <div className="text-[4rem] lgmax:text-[2rem]">
                    <h1>Descrubre Las</h1>
                    <h1>Las Mejores</h1>
                    <h1>Recompenzas De Nft</h1>
                </div>
                <div className="w-[65%] mt-8 lgmax:w-full">
                    <p className="mb-6">Aute anim laborum veniam labore cillum eu aliqua labore incididunt sunt cillum.Aute anim laborum veniam labore cillum eu aliqua labore incididunt sunt cillum.</p>
                    <a className="bg-[#222222] text-white py-2 px-12 rounded-lg">Descrubre</a>
                </div>
            </div>
            <div className="w-1/2 lgmax:w-full py-4 px-16">
                <Image src={Logo}/>
            </div>
        </div>
     );
}
 
export default Index;