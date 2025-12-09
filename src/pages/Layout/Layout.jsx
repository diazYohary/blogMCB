import { Outlet } from "react-router-dom"
import Header from "../../assets/components/Header/Header"
import Footer from "../../assets/components/Footer/Footer"

const Layout=()=>{
    return(
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}
export default Layout