import { Outlet } from "react-router"
import AdminHeader from "../component/Admin/AdminHeader"
import AdminFooter from "../component/Admin/AdminFooter"
import AdminSidebar from "../component/Admin/AdminSidebar"
import {Row,Col,Container} from 'react-bootstrap'
import { useSelector } from "react-redux"

const AdminLayout = () =>{
        const show = useSelector((state)=>state.admin.sidebar)
    return(
        <>
        <Container fluid className="px-0">
                    <AdminHeader/>
            <Row className="m-0 heightbody" >
                <Col className={!show ?('d-lg-block col-2 bg-black d-none'):('d-none')}>
                     <AdminSidebar/>
                </Col>
                <Col className={!show?'col-lg-10 bg-primary position-relative   ':'col-sm-12 position-relative bg-secondary'} >
                    
                    <Outlet />
                    
                    <div className="position-absolute bottom-0 start-0 w-100 bg-danger ">
                    <AdminFooter/>
                    </div>
                </Col>
            </Row>
            {/* </div> */}
        </Container>
        </>
    )
}
export default AdminLayout