import { Banner, Empresas, Footer, Info, Main, Nav, Team, UserGrid, Welcome } from '../components/'

const index = () => {
    return (
        <>
            <Nav />
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
