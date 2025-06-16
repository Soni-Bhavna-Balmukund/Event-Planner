import { Outlet } from "react-router"
import { Row, Col, Container } from 'react-bootstrap'
import { useSelector } from "react-redux"
import VenderHeader from "../component/Vender/VenderHeader"
import AdminSidebar from "../component/Admin/AdminSidebar"
import VenderFooter from "../component/Vender/VenderFooter"
import VenderSidebar from "../component/Vender/VenderSidebar"

const VenderLayout = () => {
    const show = useSelector((state) => state.admin.sidebar)
    return (
        <>
            <Container fluid className="px-0">
                <VenderHeader />
                <Row className="m-0 heightbody" >
                    <Col className={!show ? ('d-md-block col-3 col-lg-2 boxShadow d-none') : ('d-none')} style={{ backgroundColor: 'var(--secondary-bg)' }}>
                        <VenderSidebar />
                    </Col>
                    <Col className={!show ? 'col-md-9 col-lg-10 position-relative   ' : 'col-sm-12 position-relative'} >

                        <Outlet />

                        <div className="position-absolute bottom-0 start-0 w-100 bg-danger ">
                            <VenderFooter />
                        </div>
                    </Col>
                </Row>
                {/* </div> */}
            </Container>
        </>
    )
}
export default VenderLayout