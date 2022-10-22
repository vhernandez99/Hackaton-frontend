import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Index from "../components/Index";
import Nav from "../components/Nav";
import Team from "../components/Team";
import Welcome from "../components/Welcome";

const index = () => {
  return ( 
    <>
    <Nav/>
    <Index/>
    <Welcome/>
    <Banner/>
    <Team/>
    <Footer/>
    </>
   );
}
 
export default index;