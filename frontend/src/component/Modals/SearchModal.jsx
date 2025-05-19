import { Modal, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { searchModal } from '../../store/slice/modalSlice';
import smalllogo from '../../assets/images/smalllogo.png'
import { IoMdArrowDropdown } from "react-icons/io";

const SearchModal = () => {
  const search = useSelector((state) => state.modal.searchModal)
  const dispatch = useDispatch()
  return (
    <>
      <Modal show={search} fullscreen onHide={() => dispatch(searchModal())} >
        <Modal.Header closeButton className='border-0 pb-0 p-5 flex-grow-1 '>
          <h3 className='w-100 text-center'>Search From The Wide Range Of Venders ,Venues and so on..</h3></Modal.Header>
        <Modal.Body className='pt-1 ps-5 m-auto'>
          <p className='fs-5 fw-medium'> Make Your Dream Wedding Perfext!</p>

          <span className=' position-relative d-flex w-50 '> <Form.Select name='category' className='text-white' style={{ 'backgroundColor': 'var(--secondary-bg)' }}>
            <option value="category" >All</option>
          </Form.Select><IoMdArrowDropdown className=' text-white fs-5 position-absolute z-1 ' style={{ 'right': '20px', 'top': '50%', 'transform': 'translateY(-50%)' }} /></span>

          <Form.Control />
          <div ><img src={smalllogo} alt="" width={60} />fwhiueef</div></Modal.Body>
      </Modal>
    </>
  )
}

export default SearchModal