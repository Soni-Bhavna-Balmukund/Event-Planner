import { Route, Routes } from "react-router"
import AdminLayout from "../Layout/AdminLayout"
import AdminDashboard from "../component/Admin/AdminDashboard"

const AdminRoutes = () =>{
    return(
        <>
            <Routes>
                <Route path="/admin" element={<AdminLayout/>}>
                <Route index element={<AdminDashboard/>}/>
                </Route>
            </Routes>
        </>
    )
}
export default AdminRoutes