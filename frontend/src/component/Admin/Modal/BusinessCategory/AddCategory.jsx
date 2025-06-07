import { Form, Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import SignupUseEffects from "../../../Modals/SignupUseEffects";
import { closeAdminModal } from "../../../../store/slice/AdminSlice";
import axios from "axios";
import { useState } from "react";
import { showtoast } from "../../../../store/slice/toastify";
import { categorytypes } from "../../../../store/slice/usertype";

const AddCategory = ({ data, modelopen }) => {
  const group = useSelector((state) => state.usertype.grouptype);
  const dispatch = useDispatch();
  console.log(data, 'kk', modelopen, 'mm')
  const initialCat = {
    cname: "",
    gid: "",
    remark: "",
  };
  const [catdata, setCatData] = useState(initialCat);
  const [edit,setEdit] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCatData({ ...catdata, [name]: value });
    setEdit({...edit,[name]:value})
  };

  const [del, setDel] = useState('')

  const handleDel = (e) => {
    setDel(e.target.value)
  }

  const handleAdd = async () => {
    try {
      if (modelopen === 'addCategory') {
        const res = await axios.post("http://localhost:5000/businesscategory", catdata);
        dispatch(
          showtoast({ message: res.data.data.message, type: "success" })
        );
      }
      else if (modelopen === 'editCategory') {
        const res = await axios.put(`http://localhost:5000/businesscategory/updateCategory/${data._id}`, edit)
        dispatch(showtoast({ message: res.data.data.message, type: 'success' }))
      }
      else if (modelopen === 'deleteCategory') {
        console.log(catdata.cname, data.cname, del, 'jk')
        if (del === data.cname) {
          const res = await axios.delete(`http://localhost:5000/businesscategory/deleteCategory/${data._id}`)
          dispatch(showtoast({ message: res.data.data.message, type: 'success' }))
        }
      }

      dispatch(closeAdminModal());
      const updatedList = await axios.get("http://localhost:5000/businesscategory/allBusinessCategory");
      dispatch(categorytypes(updatedList.data.data.data));

    } catch (error) {
      if(modelopen==='addCategory'){
      if (!catdata.gid || !catdata.cname) {
        dispatch(showtoast({ message: "Place Enter Categry name or Select Group Name", type: "error", }));
        return;
      }}
      dispatch(showtoast({ message: error.response.data.data.message, type: "error" }));
    }
  };
  return (
    <Modal show={true} onHide={() => dispatch(closeAdminModal())}>
      <Modal.Header closeButton>
        <Modal.Title>{(modelopen === 'addCategory') ? 'Add Category' : (modelopen === 'editCategory') ? 'Edit Category' : 'Delete Category'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {
            (modelopen === 'addCategory') ? (<>
              <Form.Group>
                <Form.Label>Enter Business Category Name</Form.Label>
                <Form.Control
                  placeholder="Enter Category Name"
                  onChange={handleChange}
                  name="cname"
                  value={catdata.cname || ""}
                  autoFocus
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Select Group</Form.Label>
                <Form.Select onChange={handleChange} name="gid" value={catdata.gid}>
                  <option value="">Select Group</option>
                  {group.map((item, index) => (
                    <option value={item._id} key={index}>
                      {item.gname}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </>) : (modelopen === 'editCategory') ? (<>
              <Form.Group>
                <Form.Label>Category Name :- {data.cname}</Form.Label>
                <Form.Control value={edit.cname || ""} name='cname' placeholder='Enter Category Name' onChange={handleChange} autoFocus/>
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
            </>) :(<>
              <div className='d-flex justify-content-between' style={{ color: 'var(--color-text-on-secondary)' }}><p>Category Name :- {data.cname}</p><p>Group Name :- {data.gid.gname}</p></div>
              <Form.Group>
                <Form.Label className='fw-semibold'>Type "{data.cname}" for complete the action</Form.Label>
                <Form.Control autoFocus value={del} name='del' onChange={handleDel} placeholder='Enter Category Name shown ablove' />
              </Form.Group>
            </>)
          }
                     <button type="submit" style={{ display: 'none' }}></button>

        </Form>
        <SignupUseEffects />
      </Modal.Body>
      <Modal.Footer>
        {(modelopen === 'addCategory' || modelopen === 'editCategory') ? (

          <Button className="me-4" onClick={handleAdd} type="submit">
            Save
          </Button>
        ) : (
          <Button className="me-4 bg-danger" onClick={handleAdd} type='submit' disabled={data.cname !== del}>Delete</Button>
        )}
        <Button onClick={() => dispatch(closeAdminModal())}>cancle</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddCategory;
