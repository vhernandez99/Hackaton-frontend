import { Header, WelcomeAdmin } from '../components/InterSystem/'
import { Nav } from '../components'
import Footer from '../components/InterSystem/Footer'

const admin = () => {
    return (
        <div className='bg-black text-white'>
            <Header />
            <WelcomeAdmin />
            <Footer/>
        </div>
    )
}

export default admin
