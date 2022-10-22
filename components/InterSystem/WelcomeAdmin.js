import BBVALOGO from "../../assets/images/BBVA.png";
import AWSLOGO from "../../assets/images/AWS.png";
import Image from "next/image";
const WelcomeAdmin = () => {
    return ( 
        <div className="mx-[20%]">
            <div className="flex mt-16">
                <div className="w-1/2 space-y-16">
                    <div className="text-center">
                        <h1 className="text-4xl font-extralight	">Bienvenido@ user_name</h1>
                        <p>DD/MM/AA</p>
                    </div>
                    <div className="flex justify-center">
                        <Image width={300} height={150} src={BBVALOGO} objectFit="contain"/>
                    </div>
                </div>
                <div className="w-1/2 flex flex-col items-center justify-center space-y-16">
                    <p className="text-5xl">Buscar Codigo</p>
                    <input type="number" className="text-center text-blue-600 border-blue-600 border-2 rounded-lg py-2 text-3xl" placeholder="0000000"/>
                    <p className="bg-blue-600 text-white py-3 px-16 rounded-lg">Buscar</p>
                </div>
            </div>
        </div>
     );
}
 
export default WelcomeAdmin;