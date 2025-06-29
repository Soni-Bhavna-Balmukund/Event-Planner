import { Outlet } from "react-router"
import Header from "../component/Header"
import Footer from "../component/Footer"
import Slider from '../component/Slider/Slider'
import HeplUs_WhyUs from "../component/HeplUs_WhyUs"
const EnduserLayout = () => {
    return (
        <>
            <div className="d-flex flex-column min-vh-100">
            <Header />
            <div className="flex-grow-1">
                <Outlet />
                <Slider />
                {/* why eventplanner and help us section */}
                <HeplUs_WhyUs/>
            </div>
            <Footer />
            </div>
        </>
    )
}
export default EnduserLayout