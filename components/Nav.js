import Image from "next/image";
import Logo from  "../assets/images/logo.png";
const Nav = () => {
    return ( 
        <div className="bg-[#222] flex items-center px-[5%]">
            <div className="w-[10%]">
                <Image width={200} height={100} objectFit="contain" src={Logo}/>
            </div>
            <header className="w-[80%] pl-[10%]">
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
            <div className="w-[10%]">
                <p className="bg-blue-600 text-center text-white py-3 rounded-full">NFT Del Dia</p>
            </div>
        </div>
     );
}
 
export default Nav;