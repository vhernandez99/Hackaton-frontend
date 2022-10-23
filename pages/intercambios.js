import { Header } from "../components/InterSystem";
import Footer from "../components/InterSystem/Footer";
import Intercambios from "../components/InterSystem/Intercambios";

const intercambios = () => {
    return ( 
        <div className='bg-black text-white'>
            <Header/>
            <Intercambios/>
            <Footer/>
        </div>
     );

}
 
export default intercambios;