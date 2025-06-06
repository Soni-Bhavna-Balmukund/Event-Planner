import { Route, Routes } from "react-router"
import VenderLayout from "../Layout/VenderLayout"
import VenderDashboard from "../component/Vender/VenderDashboard"

const AdminRoutes = () =>{
    return(
        <>
            <Routes>
                <Route path="/vender" element={<VenderLayout/>}>
                <Route index element={<VenderDashboard/>}/>
                </Route>
            </Routes>
        </>
    )
}
export default AdminRoutes