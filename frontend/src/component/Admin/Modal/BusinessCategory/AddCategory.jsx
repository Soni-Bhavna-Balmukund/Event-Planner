import { Form, Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import SignupUseEffects from "../../../Modals/SignupUseEffects";
import { closeAdminModal } from "../../../../store/slice/AdminSlice";
import axios from "axios";
import { useState } from "react";
import { showtoast } from "../../../../store/slice/toastify";
import { categorytypes } from "../../../../store/slice/usertype";

const AddCategory = () => {
  const group = useSelector((state) => state.usertype.grouptype);
  const dispatch = useDispatch();

  const initialCat = {
    cname: "",
    gid: "",
    remark: "",
  };
  const [catdata, setCatData] = useState(initialCat);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCatData({ ...catdata, [name]: value });
  };
  const handleAdd = async () => {
    try {
      const res = await axios.post( "http://localhost:5000/businesscategory", catdata );
      dispatch(
        showtoast({ message: res.data.data.data.message, type: "success" })
      );
      
      dispatch(closeAdminModal());
      const updatedList = await axios.get( "http://localhost:5000/businesscategory/allBusinessCategory" );
      dispatch(categorytypes(updatedList.data.data.data));
    } catch (error) {
      if (!catdata.gid) {
        dispatch( showtoast({ message: "Place Enter Categry name or Select Group Name", type: "error", }));
        return;
      }
      dispatch( showtoast({ message: error.response.data.data.message, type: "error" }) );
    }
  };
  return (
    <Modal show={true} onHide={() => dispatch(closeAdminModal())}>
      <Modal.Header closeButton>
        <Modal.Title>Add Category</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
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
        </Form>
        <SignupUseEffects />
      </Modal.Body>
      <Modal.Footer>
        <Button className="me-4" onClick={handleAdd} type="submit">
          Save
        </Button>
        <Button onClick={() => dispatch(closeAdminModal())}>cancle</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddCategory;
