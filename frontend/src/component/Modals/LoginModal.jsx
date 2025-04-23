import { Modal } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { loginModal } from "../../store/slice/modalSlice"

const LoginModal= () =>{
    const dispatch = useDispatch()
    const show = useSelector((state)=>state.modal.loginModal)
    console.log(show,'login')
 return(
    <>
        <Modal show={show} onHide={()=>dispatch(loginModal())}>
            <Modal.Body>
                <div>jhvyjhwd</div>
            </Modal.Body>
        </Modal>
    </>
 )
}
export default LoginModal