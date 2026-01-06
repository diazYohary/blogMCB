import { useEffect } from "react"
import { useLocation, Outlet } from "react-router-dom"
import Header from "../../assets/components/Header/Header"
import Footer from "../../assets/components/Footer/Footer"

const Layout=()=>{
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
        });
    }, [pathname]);
    
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