import { Container, Table ,Button} from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import SignupUseEffects from '../Modals/SignupUseEffects'
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { openAdminModal } from "../../store/slice/AdminSlice";
import EditBusinessGroup from "./Modal/BusinessGroup/EditBusinessGroup";
import DeleteBusinessGroup from "./Modal/BusinessGroup/DeleteBusinessGroup";
import AddGroup from "./Modal/BusinessGroup/AddGroup";


const AddBusinessGroup = () => {

    const group = useSelector((state) => state.usertype.grouptype)
    const { adminModalType,adminModalData } = useSelector((state) => state.admin)
    console.log(group)
    const dispatch = useDispatch()
    return (
        <>

            <div className="d-flex justify-content-between px-4" style={{color:'var(--primary-bg)'}}><p>All Business Group</p><p>Total Group:- {group.length}</p></div>

            <div className="text-end py-2 mb-4" style={{background:'var(--accent-bg-color'}}><Button onClick={()=>dispatch(openAdminModal({type:'addGroup'}))} style={{backgroundColor:'var(--secondary-bg)',color:'var(--color-text-on-secondary)',border:'0',marginRight:'15px'}}>Add New Group</Button></div>
            
            <Container>
                <Table responsive striped bordered >
                    <thead>
                        <tr className="text-center">
                            <th style={{ width: '8%' }}>Sr.</th>
                            <th style={{ width: '12%' }}>Icon</th>
                            <th>Business Group</th>
                            <th style={{ width: '20%' }}>Remark</th>
                            <th style={{ width: '15%' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {group.map((item, index) => (
                            <tr key={index} className="text-center hover-table">
                                <td className="align-middle px-2 ">{index + 1}</td>
                                <td className="align-middle px-2 ">
                                    <p
                                        className="rounded-circle m-0 d-inline-block  text-white "
                                        style={{
                                            backgroundColor: 'var(--accent-bg-color)',
                                            minWidth: '30px',
                                            height: '30px',
                                            lineHeight: '28px',
                                        }}
                                    >
                                        {item.gname.charAt(0).toUpperCase()}
                                    </p>
                                </td>
                                <td className="align-middle px-3 text-start">{item.gname}</td>
                                <td className="align-middle px-3 ">{item.remark||"---"}</td>
                                <td className="align-middle fs-4 " style={{ color: 'var(--color-text-on-secondary)' }}>
                                    <span className="me-3" onClick={() => dispatch(openAdminModal({type:'editGroup',data:item}))}><FaRegEdit /></span>
                                    <span onClick={() => dispatch(openAdminModal({type:'deleteGroup',data:item}))}><RiDeleteBin6Line /></span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

                {adminModalType === 'editGroup' && <EditBusinessGroup data={adminModalData}/>}
                {adminModalType === 'deleteGroup'&& <DeleteBusinessGroup data={adminModalData}/>}
                {adminModalType === 'addGroup' && <AddGroup/>}

                <SignupUseEffects />
            </Container>

        </>
    )
}
export default AddBusinessGroup