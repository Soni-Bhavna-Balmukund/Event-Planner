import { Outlet } from "react-router"
import AdminHeader from "../component/Admin/AdminHeader"
import AdminFooter from "../component/Admin/AdminFooter"
import AdminSidebar from "../component/Admin/AdminSidebar"
import { Row, Col, Container } from 'react-bootstrap'
import { useSelector } from "react-redux"

const AdminLayout = () => {
    const show = useSelector((state) => state.admin.sidebar)
    return (
        <>
            <Container fluid className="px-0">
                <AdminHeader />
                <Row className="m-0 heightbody" >
                    <Col className={!show ? ('d-md-block col-3 boxShadow    col-lg-2 d-none') : ('d-none')} style={{ backgroundColor: 'var(--secondary-bg)' }}>
                        <AdminSidebar />
                    </Col>
                    <Col className={!show ? 'col-md-9 col-lg-10  position-relative   py-5 px-4' : 'col-sm-12 mt-5 position-relative'}>

                        <Outlet />

                        <div className="position-absolute bottom-0 start-0 w-100 bg-danger ">
                            <AdminFooter />
                        </div>
                    </Col>
                </Row>
                {/* </div> */}
            </Container>
        </>
    )
}
export default AdminLayout