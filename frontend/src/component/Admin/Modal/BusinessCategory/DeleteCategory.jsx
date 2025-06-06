import { Form, Modal, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import SignupUseEffects from '../../../Modals/SignupUseEffects'
import { closeAdminModal } from '../../../../store/slice/AdminSlice'
import axios from 'axios'
import { showtoast } from '../../../../store/slice/toastify'
import { categorytypes } from '../../../../store/slice/usertype'
import { useState } from 'react'

const DeleteCategory = ({ data }) => {
  const dispatch = useDispatch()

  const [del, setDel] = useState('')

  const handleDel = (e) => {
    setDel(e.target.value)
  }

  const handleDelete = async () => {
    try {
      if (del === data.cname) {
        const res = await axios.delete(`http://localhost:5000/businesscategory/deleteCategory/${data._id}`)
        dispatch(showtoast({ message: res.data.data.message, type: 'success' }))
        dispatch(closeAdminModal())
        console.log(res.data.data.message, 'd')
        const updatedList = await axios.get('http://localhost:5000/businesscategory/allBusinessCategory')
        dispatch(categorytypes(updatedList.data.data.data))
      }
    } catch (error) {
      console.log(error, 'e')
      dispatch(showtoast({ message: error.response.data.data.message, type: 'error' }))
    }
  }
  return (
    <Modal show={true} onHide={() => dispatch(closeAdminModal())}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Category</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <div className='d-flex justify-content-between' style={{ color: 'var(--color-text-on-secondary)' }}><p>Category Name :- {data.cname}</p><p>Group Name :- {data.gid.gname}</p></div>
        <Form onSubmit={(e) => { e.preventDefault(); handleDelete() }}>
          <Form.Group>
            <Form.Label className='fw-semibold'>Type "{data.cname}" for complete the action</Form.Label>
            <Form.Control value={del} name='del' onChange={handleDel} placeholder='Enter Category Name shown ablove' />
          </Form.Group>
          <button type='submit' style={{ display: 'none' }}></button>
        </Form>
        <SignupUseEffects />
      </Modal.Body>
      <Modal.Footer>
        <Button className="me-4 bg-danger" onClick={handleDelete} type='submit' disabled={data.cname !== del}>Delete</Button>
        <Button onClick={() => dispatch(closeAdminModal())}>cancle</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default DeleteCategory