import BBVALOGO from '../../assets/images/BBVA.png'
import AWSLOGO from '../../assets/images/AWS.png'
import Image from 'next/image'

const Intercambios = () => {
    return ( 
        <div className='mx-[20%]'>            
        <div className='flex justify-center mt-16'>
            <div className='w-2/2 space-y-16'>
                <div className='text-center'>
                    <h1 className='text-4xl font-extralight	'>Bienvenido@ user_name</h1>
                    <p>DD/MM/AA</p>
                </div>
                <div className='flex justify-center'>
                    <Image width={300} height={150} src={BBVALOGO} objectFit='contain' />
                </div>
            </div>
        </div>
        <div className='text-center text-blue-400 border-blue-400 border-2 my-8 py-4 rounded-lg'>
            <p>Realiza Un Intercambio</p>
        </div>
        <div className='flex flex-col items-center'>
            <div>
            <div className='flex space-x-4 mb-4'>
                <div className='space-y-4 w-52'>
                    <div>
                        <p>Cantidad:</p>
                        <p className='bg-white text-black border-blue-400 border-2 rounded-lg p-2'>
                        0.00
                        </p>
                    </div>
                    <div>
                        <p>Dirreccion</p>
                        <p className='bg-white text-black border-blue-400 border-2 rounded-lg p-2'>
                            xxxx-xxxx-xxxx-xxxx
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <p className='bg-blue-400 rounded-full py-2 px-8 w-32 text-center'>Cargar</p>
            </div>

            </div>
            
            
        </div>
        <div className='text-center text-blue-400 border-blue-400 border-2 my-8 py-4 rounded-lg'>
            <p>Intercambios Realizados</p>
        </div>
        <div>
            <div>
                <div className='flex'>
                    <div className='w-[25%] ml-2'>Fecha:</div>
                    <div className='w-[25%] ml-2'>Valor:</div>
                    <div className='w-[25%] ml-2'>Destino:</div>
                    <div className='w-[25%] ml-2'>Estado:</div>
                </div>
                <div className='flex'>
                    <div className='w-[25%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2'>DD/MM/AA</div>
                    <div className='w-[25%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2'>0.00</div>
                    <div className='w-[25%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2'>xxxx-xxxx-xxxx-xxxx</div>
                    <div className='w-[25%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2'>Realizado</div>
                </div>
                <div className='flex'>
                    <div className='w-[25%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2'>DD/MM/AA</div>
                    <div className='w-[25%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2'>0.00</div>
                    <div className='w-[25%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2'>xxxx-xxxx-xxxx-xxxx</div>
                    <div className='w-[25%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2'>Realizado</div>
                </div>
                <div className='flex'>
                    <div className='w-[25%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2'>DD/MM/AA</div>
                    <div className='w-[25%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2'>0.00</div>
                    <div className='w-[25%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2'>xxxx-xxxx-xxxx-xxxx</div>
                    <div className='w-[25%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2'>Realizado</div>
                </div>
                <div className='flex'>
                    <div className='w-[25%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2'>DD/MM/AA</div>
                    <div className='w-[25%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2'>0.00</div>
                    <div className='w-[25%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2'>xxxx-xxxx-xxxx-xxxx</div>
                    <div className='w-[25%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2'>Realizado</div>
                </div>

            </div>
        </div>
    </div>
     );
}
 
export default Intercambios;