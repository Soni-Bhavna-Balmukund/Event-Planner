import { Route, Routes } from "react-router"
import AdminLayout from "../Layout/AdminLayout"
import AdminDashboard from "../component/Admin/AdminDashboard"
import AddBusinessGroup from "../component/Admin/AddBusinessGroup"
import BusinessCategory from "../component/Admin/BusinessCategory"

const AdminRoutes = () =>{
    return(
        <>
            <Routes>
                <Route path="/admin" element={<AdminLayout/>}>
                <Route index element={<AdminDashboard/>}/>
                <Route path='addGroup' element={<AddBusinessGroup/>}></Route>
                <Route path='category' element={<BusinessCategory/>}></Route>
                </Route>
            </Routes>
        </>
    )
}
export default AdminRoutes