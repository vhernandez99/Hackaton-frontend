import BBVALOGO from '../../assets/images/BBVA.png'
import AWSLOGO from '../../assets/images/AWS.png'
import Image from 'next/image'
const WelcomeAdmin = () => {
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
                <div className='w-1/2 flex flex-col items-center justify-center space-y-16'>
                    <p className='text-5xl'>Buscar Código</p>
                    <input
                        type='number'
                        className='appearance-none text-center text-blue-600 border-blue-600 border-2 rounded-lg py-2 text-3xl'
                        placeholder='0000000'
                    />
                    <p className='bg-blue-600 text-white py-3 px-16 rounded-lg'>Buscar</p>
                </div>
            </div>
            <div>
                <div>
                    <p>Resultado:</p>
                </div>
                <div className='flex'>
                    <div className='w-[70%]'>
                        <div>
                            <div className='flex'>
                                <div className='w-1/3'>Codigo:</div>
                                <div className='w-1/3'>Asociado a:</div>
                                <div className='w-1/3'>Valido por:</div>
                            </div>
                            <div className='flex'>
                                <div className='w-1/3 border-2 border-blue-600 px-2 py-4'>1</div>
                                <div className='w-1/3 border-2 border-blue-600 px-2 py-4'>1</div>
                                <div className='w-1/3 border-2 border-blue-600 px-2 py-4'>1</div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[30%] flex justify-center items-center'>
                        <p className='text-white bg-blue-600 py-2 px-8 rounded-lg'>Registrar Uso</p>
                    </div>
                </div>
            </div>
            <div className='text-center text-blue-400 border-blue-400 border-2 my-8 py-4 rounded-lg'>
                <p>Registros de usos</p>
            </div>
            <div>
                <div>
                    <div className='flex'>
                        <div className='w-[20%] ml-2'>Codigo:</div>
                        <div className='w-[20%] ml-2'>Asociado a:</div>
                        <div className='w-[20%] ml-2'>Fecha:</div>
                        <div className='w-[40%] ml-2'>Valido por:</div>
                    </div>
                    <div className='flex'>
                        <div className='w-[20%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2'>1</div>
                        <div className='w-[20%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2'>1</div>
                        <div className='w-[20%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2'>1</div>
                        <div className='w-[40%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2'>1</div>
                    </div>
                    <div className='flex'>
                        <div className='w-[20%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2'>1</div>
                        <div className='w-[20%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2'>1</div>
                        <div className='w-[20%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2'>1</div>
                        <div className='w-[40%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2'>1</div>
                    </div>
                    <div className='flex'>
                        <div className='w-[20%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2'>1</div>
                        <div className='w-[20%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2'>1</div>
                        <div className='w-[20%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2'>1</div>
                        <div className='w-[40%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2'>1</div>
                    </div>
                    <div className='flex'>
                        <div className='w-[20%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2'>1</div>
                        <div className='w-[20%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2'>1</div>
                        <div className='w-[20%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2'>1</div>
                        <div className='w-[40%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2'>1</div>
                    </div>
                    <div className='flex'>
                        <div className='w-[20%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2'>1</div>
                        <div className='w-[20%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2'>1</div>
                        <div className='w-[20%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2'>1</div>
                        <div className='w-[40%] border-2 bg-white text-black border-blue-600 px-2 py-4 m-2'>1</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default WelcomeAdmin
