import { Modal, Button ,Form } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { closeAdminModal } from "../../../../store/slice/AdminSlice"
import axios from "axios"
import { grouptypes } from "../../../../store/slice/usertype"
import { showtoast } from "../../../../store/slice/toastify"
import { useState } from "react"


const DeleteBusinessGroup = ({ data }) => {
  const dispatch = useDispatch()

  const [del,setDel] = useState('')
console.log(del,'del',data.gname)
  const delChange = (e) =>{
    setDel(e.target.value)
  }
  const handleDelete = async () => {
    try {

      if(del===data.gname){   

      const res = await axios.delete(`http://localhost:5000/businessgroup/deleteGroup/${data._id}`)
      console.log('first')
      dispatch(showtoast({ message: res.data.data.message, type: 'success' }))

      dispatch(closeAdminModal())
      const updatedList = await axios.get("http://localhost:5000/businessgroup/allgroup")
      dispatch(grouptypes(updatedList.data.data.data))
    }else{
      console.log('dsds')
    } }
    catch (error) {
      console.log(error)
      dispatch(showtoast({ message: error.response.data.data.message, type: 'error' }))
    }

  }
  return (
    <Modal show={true} onHide={() => dispatch(closeAdminModal())}>
      <Modal.Header className="border-0" closeButton>
        <Modal.Title>Doy You Want To Delete the Group</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div><p style={{ color: 'var(--color-text-on-secondary)', margin: '0' }}> Group Name :- {data.gname}</p></div>
        <div><p style={{ color: 'var(--color-text-on-secondary)', margin: '0' }}> Remark :- {data.remark}</p></div>

      <Form onSubmit={(e)=>{ e.preventDefault(); handleDelete()}}>
      <Form.Label className='fw-semibold'>Type "{data.gname}" to complete the Action</Form.Label>
      <Form.Control name="del" value={del} onChange={delChange} placeholder="Enter the name Shown above" autoFocus/>
   </Form>

      </Modal.Body>
      <Modal.Footer className="border-0 ">
        
        <Button className="me-4 bg-danger " type="submit" onClick={handleDelete} disabled={del !== data.gname}>Delete</Button>
        <Button onClick={() => dispatch(closeAdminModal())}>cancle</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default DeleteBusinessGroup