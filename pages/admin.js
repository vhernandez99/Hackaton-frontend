import { Header, WelcomeAdmin } from '../components/InterSystem/'
import { Nav } from '../components'

const admin = () => {
    return (
        <div className='bg-black text-white'>
            <Header />
            <WelcomeAdmin />
        </div>
    )
}

export default admin
