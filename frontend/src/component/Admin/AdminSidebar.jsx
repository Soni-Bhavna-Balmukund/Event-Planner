import { Offcanvas } from "react-bootstrap"
import {useDispatch,useSelector} from 'react-redux'
import { setSidebar } from "../../store/slice/AdminSlice"

const AdminSidebar = () =>{
        const show = useSelector((state)=>state.admin.sidebar)
        console.log(show,'show')
        const dispatch = useDispatch()
      
    return(
        <>
        <Offcanvas show={show} onHide={()=>dispatch(setSidebar())} responsive="lg" style={{width:'270px'}}>
            <Offcanvas.Header closeButton>nffe</Offcanvas.Header>
            <Offcanvas.Body>
        <div>uhwquodhq</div>
        <div>Sidebar</div>
            </Offcanvas.Body>
        </Offcanvas>
        </>
    )
}
export default AdminSidebar