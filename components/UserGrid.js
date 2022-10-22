import Image from "next/image";
import Nft1 from "../assets/images/TICKERS1X1-01.png";
import Nft2 from "../assets/images/TICKETS-02.png";
import NftWhite1 from "../assets/images/TICKERS1X1-01-WHITE.png";
import NftWhite2 from "../assets/images/TICKERS1X1-02-WHITE.png";

const UserGrid = () => {
    return ( 
        <div className="mx-[20%] mb-16">
            <div className="flex flex-col items-center space-y-2 mb-16">
                <h1 className="text-5xl font-extralight	">Bienvenido@ user_name</h1>
                <p>DD/MM/AA</p>
            </div>
            <div className="text-center text-blue-600 border border-blue-600 py-3 rounded-lg">
                <p>Mi coleccion</p>
            </div>
            <div className="text-center mt-8 mb-2">
                <h3>Libres</h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div className="border border-black p-4 rounded-lg">
                    <div>
                        <Image src={NftWhite1}/>
                    </div>
                    <div className="text-center space-y-3">
                        <h1 className="text-4xl font-light">Entrada 2x1</h1>
                        <p className="text-xs">Valido hasta: DD/MM/AA</p>
                    </div>
                </div>
                <div className="border border-black p-4 rounded-lg">
                    <div>
                        <Image src={NftWhite1}/>
                    </div>
                    <div className="text-center space-y-3">
                        <h1 className="text-4xl font-light">Entrada 2x1</h1>
                        <p className="text-xs">Valido hasta: DD/MM/AA</p>
                    </div>
                </div>
                <div className="border border-black p-4 rounded-lg">
                    <div>
                        <Image src={NftWhite1}/>
                    </div>
                    <div className="text-center space-y-3">
                        <h1 className="text-4xl font-light">Entrada 2x1</h1>
                        <p className="text-xs">Valido hasta: DD/MM/AA</p>
                    </div>
                </div>
            </div>
            <div className="text-center mt-8 mb-2">
                <h3>Canjeados</h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div className="border border-black p-4 rounded-lg">
                    <div>
                        <Image src={NftWhite2}/>
                    </div>
                    <div className="text-center space-y-3">
                        <h1 className="text-4xl font-light">Entrada 2x1</h1>
                        <p className="text-xs">Valido hasta: DD/MM/AA</p>
                    </div>
                </div>
                <div className="border border-black p-4 rounded-lg">
                    <div>
                        <Image src={NftWhite2}/>
                    </div>
                    <div className="text-center space-y-3">
                        <h1 className="text-4xl font-light">Entrada 2x1</h1>
                        <p className="text-xs">Valido hasta: DD/MM/AA</p>
                    </div>
                </div>
                <div className="border border-black p-4 rounded-lg">
                    <div>
                        <Image src={NftWhite2}/>
                    </div>
                    <div className="text-center space-y-3">
                        <h1 className="text-4xl font-light">Entrada 2x1</h1>
                        <p className="text-xs">Valido hasta: DD/MM/AA</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default UserGrid;