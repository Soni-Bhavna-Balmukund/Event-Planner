import { Outlet } from "react-router"
import Header from "../component/Header"
import Footer from "../component/Footer"

const EnduserLayout = () => {
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}
export default EnduserLayout