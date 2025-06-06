import {useState} from 'react'
import { Form, Modal ,Button} from 'react-bootstrap'
import { closeAdminModal } from '../../../../store/slice/AdminSlice'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { showtoast } from '../../../../store/slice/toastify'
import { categorytypes } from '../../../../store/slice/usertype'

const EditCategory = ({data}) => {

  const dispatch = useDispatch()
  const group = useSelector((state)=>state.usertype.grouptype)
  const [edit,setEdit] = useState('')
  const handleChange =(e) =>{
    const {value,name} =e.target
    setEdit({...edit,[name]:value})
  }
  const handleEdit = async() =>{
    try{
      const res = await axios.put(`http://localhost:5000/businesscategory/updateCategory/${data._id}`,edit)
      dispatch(showtoast({message:res.data.data.message,type:'success'}))
      console.log(res,res.data.data.message)

       const updatedList = await axios.get('http://localhost:5000/businesscategory/allBusinessCategory')
        dispatch(categorytypes(updatedList.data.data.data))
        dispatch(closeAdminModal())
    }
    catch(error){
       if (!edit.gid) {
              dispatch( showtoast({ message: "Place Enter Categry name or Select Group Name", type: "error", }));
              return;
            }
      dispatch(showtoast({message:error.response.data.data.message,type:'error'}))
    }
  }
  return (
    <Modal show={true} onHide={()=> dispatch(closeAdminModal())}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Category</Modal.Title>
      </Modal.Header>

      <Modal.Body>
          <Form.Group>
            <Form.Label>Category Name :- {data.cname}</Form.Label>
            <Form.Control value={edit.cname||""} name='cname' placeholder='Enter Category Name' onChange={handleChange}/>
          </Form.Group>

           <Form.Group>
                <Form.Label>Select Group</Form.Label>
          <Form.Select onChange={handleChange} name='gid' value={edit.gid}>
            <option value="">Select Group</option>
            {
                group.map((item, index) => (
                  <option value={item._id} key={index} >{item.gname}</option>
                ))
            }
          </Form.Select>
          </Form.Group>
      </Modal.Body>

      <Modal.Footer>
          <Button className="me-4" onClick={handleEdit} type='submit'>Save</Button>
        <Button onClick={() => dispatch(closeAdminModal())}>cancle</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default EditCategory