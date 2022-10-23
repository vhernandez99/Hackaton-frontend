import { Header } from "../components/InterSystem";
import Footer from "../components/InterSystem/Footer";
import UploadNft from "../components/InterSystem/UploadNft";

const upload = () => {
    return ( 
        <div className='bg-black text-white'>
        <UploadNft/>
        <Footer/>
        </div>
     );
}
 
export default upload;