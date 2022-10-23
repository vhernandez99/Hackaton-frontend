import Image from 'next/image'
import Logo from '../assets/images/TICKERS1X1-01.png'
const Main = () => {
    return (
        <div className='flex items-center'>
            <div className='w-1/2 pl-20 '>
                <div className='text-[4rem]'>
                    <h1>
                        Descrubre Las <br />
                        Las Mejores <br />
                        Recompenzas De Nft
                    </h1>
                </div>
                <div className='w-[65%] mt-8'>
                    <p className='mb-6'>
                        Aute anim laborum veniam labore cillum eu aliqua labore incididunt sunt
                        cillum.Aute anim laborum veniam labore cillum eu aliqua labore incididunt
                        sunt cillum.
                    </p>
                    <a className='bg-[#222222] text-white py-2 px-12 rounded-lg'>Descrubre</a>
                </div>
            </div>
            <div className='w-1/2 py-4 px-16'>
                <Image src={Logo} />
            </div>
        </div>
    )
}

export default Main
