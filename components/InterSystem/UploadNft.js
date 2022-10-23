import BBVALOGO from '../../assets/images/BBVA.png'
import AWSLOGO from '../../assets/images/AWS.png'
import Image from 'next/image'

const UploadNft = () => {
    return ( 
        <div className='mx-[20%]'>            
            <div className='flex mt-16'>
                <div className='w-1/2 space-y-16'>
                    <div className='text-center'>
                        <h1 className='text-4xl font-extralight	'>Bienvenido@ user_name</h1>
                        <p>DD/MM/AA</p>
                    </div>
                    <div className='flex justify-center'>
                        <Image width={300} height={150} src={BBVALOGO} objectFit='contain' />
                    </div>
                </div>
                <div className='w-1/2 flex flex-col items-center justify-center space-y-6'>
                    <p className='bg-blue-600 text-white py-2 px-16 rounded-lg'>Crear Nft</p>
                    <p className='bg-blue-600 text-white py-2 px-16 rounded-lg'>NFT Publico</p>
                </div>
            </div>
            <div className='text-center text-blue-400 border-blue-400 border-2 my-8 py-4 rounded-lg'>
                <p>Crear nuevo NFT de utlidad</p>
            </div>
            <div className='flex flex-col items-center'>
                <div>
                <div className='flex space-x-4 mb-4'>
                    <div className='bg-white w-[190px] h-[200px] border-2 border-blue-400 rounded-lg'>
                        {/*Imagen aqui*/}
                    </div>
                    <div className='space-y-4 w-52'>
                        <div>
                            <p>Fecha De Vencimiento:</p>
                            <p className='bg-white text-black border-blue-400 border-2 rounded-lg p-2'>
                                DD/MM/AA
                            </p>
                        </div>
                        <div>
                            <p>Valor (Puntos:)</p>
                            <p className='bg-white text-black border-blue-400 border-2 rounded-lg p-2'>
                                0000
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='bg-blue-400 rounded-full py-2 px-8 w-32 text-center'>Cargar</p>
                </div>
                    <div className='w-full space-y-3 mt-8'>
                        <p>Descripcion (Valido por:)</p>
                        <p className='bg-white text-black border-blue-400 rounded-lg border-2 p-2'>Lorem lorem lorem</p>
                        <p className='bg-blue-400 rounded-full py-2 px-8 w-32 text-center'>CREAR</p>
                    </div>
                </div>
                
                
            </div>
            <div className='text-center text-blue-400 border-blue-400 border-2 my-8 py-4 rounded-lg'>
                <p>NFT Publicados</p>
            </div>
            <div>
                <div>
                    <div className='flex'>
                        <div className='w-[20%] ml-2'>Fecha:</div>
                        <div className='w-[20%] ml-2'>Valor:</div>
                        <div className='w-[20%] ml-2'>Descripcion:</div>
                    </div>
                    <div className='flex'>
                        <div className='w-[20%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2'>1</div>
                        <div className='w-[20%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2'>1</div>
                        <div className='w-[20%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2'>1</div>
                        <div className='w-[40%]  px-2 py-4 m-2 flex justify-center space-x-6'>
                            <p className='bg-blue-400 text-center py-2 px-4 rounded-full w-[10rem]'>Editar</p>
                            <p className='bg-blue-400 text-center py-2 px-4 rounded-full w-[10rem]'>Eliminar</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='w-[20%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2'>1</div>
                        <div className='w-[20%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2'>1</div>
                        <div className='w-[20%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2'>1</div>
                        <div className='w-[40%]  px-2 py-4 m-2 flex justify-center space-x-6'>
                            <p className='bg-blue-400 text-center py-2 px-4 rounded-full w-[10rem]'>Editar</p>
                            <p className='bg-blue-400 text-center py-2 px-4 rounded-full w-[10rem]'>Eliminar</p>
                        </div>
                    </div>
                    

                </div>
            </div>
        </div>
     );
}
 
export default UploadNft;