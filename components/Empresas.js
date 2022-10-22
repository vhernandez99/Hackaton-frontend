import BBVALOGO from "../assets/images/BBVA.png";
import AWSLOGO from "../assets/images/AWS.png";
import Image from "next/image";

const Empresas = () => {
    return ( 
        <div className="mb-12">
            <div className="text-center mb-8 text-4xl">
                <h1>Empresas Involucradas</h1>
            </div>
            <div className="mx-[20%] flex space-x-2">
                <div className="w-1/3 px-4 border border-blue-600 flex justify-center rounded-lg">
                        <Image src={BBVALOGO} objectFit="contain"/>
                </div>
                <div className="w-1/3 p-4 border border-blue-600 rounded-lg">
                        <Image src={AWSLOGO}/>
                </div>
                <div className="w-1/3 px-4 border border-blue-600 flex justify-center rounded-lg">
                        <Image src={BBVALOGO} objectFit="contain"/>
                </div>
            </div>
        </div>
     );
}
 
export default Empresas;