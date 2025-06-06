import { Offcanvas, Button } from "react-bootstrap"
import { useSelector } from 'react-redux'
import { setSidebar } from "../../store/slice/AdminSlice"
import { Link } from "react-router"


const AdminSidebar = () => {
    const show = useSelector((state) => state.admin.sidebar)
    
    return (
        <>
            <Offcanvas show={show} onHide={() => dispatch(setSidebar())} responsive="md" className='w-255px'>
                <Offcanvas.Header closeButton style={{ backgroundColor: 'var(--secondary-bg)' }}>nffe</Offcanvas.Header>

                <Offcanvas.Body className="d-flex flex-column align-items-start py-4 gap-2" style={{ backgroundColor: 'var(--secondary-bg)' }}>
                    <Button className="p-0 bg-transparent border-0 textSecondary fw-medium" ><Link to='addGroup' style={{color:'var(--text-color-on-secondary)',textDecoration:'none'}}>Business Group</Link></Button>

                    <Button className="p-0 bg-transparent border-0 textSecondary fw-medium" ><Link to='category' style={{color:'var(--text-color-on-secondary)',textDecoration:'none'}}>Business Category </Link></Button>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
export default AdminSidebar