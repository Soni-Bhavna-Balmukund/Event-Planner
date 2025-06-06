import { Modal, Form, Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { closeAdminModal } from "../../../../store/slice/AdminSlice"
import axios from "axios"
import { useState } from "react"
import { grouptypes } from "../../../../store/slice/usertype"
import { showtoast } from "../../../../store/slice/toastify"

const EditBusinessGroup = ({ data }) => {

    const [editGroup, setEditGroup] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target
        setEditGroup({ ...editGroup, [name]: value })
    }
    const handleSubmit = async () => {
        try {
            const res = await axios.put(`http://localhost:5000/businessgroup/updateGroup/${data._id}`, editGroup)
            dispatch(showtoast({ message: res.data.data.message, type: 'success' }))
            console.log(res.data.data.message)
            dispatch(closeAdminModal())
            const updatedList = await axios.get("http://localhost:5000/businessgroup/allgroup")
            dispatch(grouptypes(updatedList.data.data.data))
        }
        catch (error) {
            console.log(error)
            dispatch(showtoast({ message: error.response.data.data.message, type: 'error' }))
        }
    }
    const dispatch = useDispatch()
    return (
        <Modal show={true} onHide={() => dispatch(closeAdminModal())} >
            <Modal.Header closeButton className="border-0">
                <Modal.Title>Edit Business Group</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}>
                    <Form.Group>
                        <Form.Label>Group Name : {data.gname}</Form.Label>
                        <Form.Control onChange={handleChange} placeholder={`Edit Group ${data.gname}`} value={editGroup.gname || ""} name="gname" autoFocus />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Group Remark : {data.remark}</Form.Label>
                        <Form.Control onChange={handleChange} placeholder={`Edit Group ${data.remark}`} value={editGroup.remark || ""} name="remark" />
                    </Form.Group>
                    <button type="submit" style={{ display: 'none' }}></button>
                </Form>
            </Modal.Body>
            <Modal.Footer className="border-0 ">
                <Button type="submit" className="me-4" onClick={handleSubmit}>Save</Button>
                <Button onClick={() => dispatch(closeAdminModal())}>cancle</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default EditBusinessGroup