import BBVALOGO from "../assets/images/BBVA.png";
import AWSLOGO from "../assets/images/AWS.png";
import Image from "next/image";

const Info = () => {
    return ( 
        <div>
            <div className="text-center mb-8 text-4xl mt-16">
                <h1>Informacion Para Nuevos Usuarios</h1>
            </div>
            <div className="mx-[20%] flex space-x-2 h-[35vh] lgmax:mx-[5%] lgmax:flex-col lgmax:space-x-0 lgmax:space-y-2 lgmax:h-full">
                <div className="w-1/3 px-4 border border-blue-600 flex flex-col justify-center items-center rounded-lg lgmax:w-full lgmax:h-[35vh]">
                    <div className="h-[70%] flex justify-center items-center">
                        <p className="text-3xl text-center">Cuales Son Los Beneficios?</p>
                    </div>
                    <div className="h-[5%]">
                        <a className="bg-blue-600 text-white rounded-lg py-2 px-8">Leer Mas...</a>
                    </div>
                </div>
                <div className="w-1/3 px-4 border border-blue-600 flex flex-col justify-center items-center rounded-lg lgmax:w-full lgmax:h-[35vh]">
                    <div className="h-[70%] flex justify-center items-center">
                        <p className="text-3xl text-center">Cuales Son Los Beneficios?</p>
                    </div>
                    <div className="h-[5%]">
                        <a className="bg-blue-600 text-white rounded-lg py-2 px-8">Leer Mas...</a>
                    </div>
                </div>
                <div className="w-1/3 px-4 border border-blue-600 flex flex-col justify-center items-center rounded-lg lgmax:w-full lgmax:h-[35vh]">
                    <div className="h-[70%] flex justify-center items-center">
                        <p className="text-3xl text-center">Cuales Son Los Beneficios?</p>
                    </div>
                    <div className="h-[5%]">
                        <a className="bg-blue-600 text-white rounded-lg py-2 px-8">Leer Mas...</a>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Info;