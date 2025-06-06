import { Modal, Form, Button } from "react-bootstrap"
import { closeAdminModal } from "../../../../store/slice/AdminSlice"
import { useDispatch } from "react-redux"
import { useState } from "react"
import axios from "axios"
import { grouptypes } from "../../../../store/slice/usertype"
import { showtoast } from "../../../../store/slice/toastify"

const AddGroup = () => {
    const dispatch = useDispatch()

    const groupdata = {
        gname: "",
        remark: ""
    }
    const [groupName, setGroupName] = useState(groupdata)

    const handleAdd = async () => {
        try {
            const res = await axios.post('http://localhost:5000/businessgroup', groupName)
            console.log('group added', res.data.data.message)
            dispatch(showtoast({ message: res.data.data.message, type: 'success' }))
            dispatch(closeAdminModal())
            const updatedList = await axios.get("http://localhost:5000/businessgroup/allgroup")
            dispatch(grouptypes(updatedList.data.data.data))
        }
        catch (error) {
            console.log(error.response.data.data.message)
            dispatch(showtoast({ message: error.response.data.data.message, type: 'error' }))
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setGroupName({ ...groupName, [name]: value })
    }

    return (
        <Modal show={true} onHide={() => dispatch(closeAdminModal())}>
            <Modal.Header closeButton className="border-0">
                <Modal.Title>Add Business Group</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={(e) => { e.preventDefault(); handleAdd(); }}>
                    <Form.Group>
                        <Form.Label>Group Name : </Form.Label>
                        <Form.Control placeholder="Enter Group Name" name="gname" value={groupName.gname || ""} onChange={handleChange} autoFocus />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Group Remark : </Form.Label>
                        <Form.Control placeholder="Enter Group Remark" name="remark" value={groupName.remark || ""} onChange={handleChange} />
                    </Form.Group>
                    <button type="submit" style={{ display: 'none' }}></button>
                </Form>
            </Modal.Body>
            <Modal.Footer className="border-0 ">
                <Button className="me-4" onClick={handleAdd} type='submit'>Save</Button>
                <Button onClick={() => dispatch(closeAdminModal())}>cancle</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddGroup