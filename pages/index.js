import Banner from "../components/Banner"
import Empresas from "../components/Empresas"
import Footer from "../components/Footer"
import Info from "../components/Info"
import Main from "../components/Main"
import Team from "../components/Team"
import UserGrid from "../components/UserGrid"
import Welcome from "../components/Welcome"

const index = () => {
    return (
        <>
            <Main />
            <Welcome />
            <UserGrid />
            <Empresas />
            <Banner />
            <Info />
            <Team />
            <Footer />
        </>
    )
}

export default index
