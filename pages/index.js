import Banner from "../components/Banner";
import Empresas from "../components/Empresas";
import Footer from "../components/Footer";
import Index from "../components/Index";
import Info from "../components/Info";
import Nav from "../components/Nav";
import Team from "../components/Team";
import UserGrid from "../components/UserGrid";
import Welcome from "../components/Welcome";

const index = () => {
  return ( 
    <>
    <Nav/>
    <Index/>
    <Welcome/>
    <UserGrid/>
    <Empresas/>
    <Banner/>
    <Info/>
    <Team/>
    <Footer/>
    </>
   );
}
 
export default index;