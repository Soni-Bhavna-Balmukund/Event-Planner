import { useDispatch } from "react-redux";
import { useState } from "react";
import { Form, Modal ,Button} from 'react-bootstrap'
import { showtoast } from "../../../../store/slice/toastify";
import { closeAdminModal, setStatedata } from "../../../../store/slice/AdminSlice";
import axios from 'axios';
const DeleteStates = ({data,modelopen}) => {
        
        const [del, setDel] = useState('')
        
          const handleDel = (e) => {
            setDel(e.target.value)
          }
            const dispatch = useDispatch();

          const handleAdd = async() =>{
 if (modelopen === 'deleteStates') {
        // console.log(stateData.sname, data.sname, del, 'jk')
        if (del === data.sname) {
          const res = await axios.delete(`http://localhost:5000/States/deleteState/${data._id}`)
          console.log(res)
          dispatch(showtoast({ message: res.data.data.message, type: 'success' }))
          dispatch(closeAdminModal());
                const updatedList = await axios.get("http://localhost:5000/States/readState");
                dispatch(setStatedata(updatedList.data.data.data));
        }
      }
          }
       
  return (
    <Modal show={true} onHide={() => dispatch(closeAdminModal())}>
        <Modal.Header closeButton>
            <Modal.Title>Delete State</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
<div className='d-flex justify-content-between' style={{ color: 'var(--color-text-on-secondary)' }}><p>State Name :- {data.sname}</p><p>Country Name :- {data.countryid.countryname}</p></div>
              <Form.Group>
                <Form.Label className='fw-semibold'>Type "{data.sname}" for complete the action</Form.Label>
                <Form.Control autoFocus value={del} name='del' onChange={handleDel} placeholder='Enter Category Name shown ablove' />
              </Form.Group>

                     <button type="submit" style={{ display: 'none' }}></button>

            </Form>
        </Modal.Body>
        <Modal.Footer>
        
          <Button className="me-4 bg-danger" onClick={handleAdd} type='submit' disabled={data.sname !== del}>Delete</Button>
        
        <Button onClick={() => dispatch(closeAdminModal())}>cancle</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default DeleteStates