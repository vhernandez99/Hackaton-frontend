import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";
import Logo from  "../assets/images/logo.png";
const Nav = () => {

    const [Swipe,SetSwipe]=useState(false)

    return ( 
        <div>
            <div className="bg-[#222] z-50 flex items-center lgmax:justify-between px-[5%]">
                <div className="w-[30%] lg:hidden">
                    <FontAwesomeIcon onClick={()=>{SetSwipe(!Swipe)}} className="text-white" icon={faBars}/>
                </div>
                <div className="w-[10%] lgmax:w-[30%]">
                    <Image width={200} height={100} objectFit="contain" src={Logo}/>
                </div>
                <header className="w-[80%] pl-[10%] lgmax:hidden">
                    <nav>
                        <ul className="flex items-center text-white space-x-10 text-xl">
                            <li>Incio</li>
                            <li>Bienvenidos</li>
                            <li>Empresas</li>
                            <li>Informacion</li>
                            <li>Equipo</li>
                        </ul>
                    </nav>
                </header>
                <div className="w-[10%] lgmax:w-[30%]">
                    <p className="bg-blue-600 text-center text-white py-3 rounded-full lgmax:text-xs">NFT Del Dia</p>
                </div>
            </div>
            <div className={
                Swipe?
                "bg-[#222] lg:hidden z-10 absolute w-full h-80 -translate-x-[0rem] transition-all duration-1000"
                :
                "bg-[#222] lg:hidden z-10 absolute w-full h-80 -translate-x-[50rem] transition-all duration-1000"
            }>
                    <nav>
                        <ul className="flex flex-col items-center text-white text-xl space-y-8 pt-7">
                            <li>Incio</li>
                            <li>Bienvenidos</li>
                            <li>Empresas</li>
                            <li>Informacion</li>
                            <li>Equipo</li>
                        </ul>
                    </nav>
            </div>
        </div>
     );
}
 
export default Nav;