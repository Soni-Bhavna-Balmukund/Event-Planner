import { Outlet } from "react-router"
import Header from "../component/Header"
import Footer from "../component/Footer"
import Slider from '../component/Slider/Slider'
const EnduserLayout = () => {
    return(
        <>
        <Header/>
        <div className="outletheight">
        <Outlet/>
            <Slider/>
        </div>
        <Footer/>
        </>
    )
}
export default EnduserLayout