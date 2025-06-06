import {Container,Table,Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import SignupUseEffects from '../Modals/SignupUseEffects'
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { openAdminModal } from "../../store/slice/AdminSlice";
import EditCategory from './Modal/BusinessCategory/EditCategory';
import DeleteCategory from './Modal/BusinessCategory/DeleteCategory';
import AddCategory from './Modal/BusinessCategory/AddCategory';

const BusinessCategory =() =>{
    const {adminModalData,adminModalType} = useSelector((state)=>state.admin)
    const category = useSelector((state)=>state.usertype.categorytype)
    const dispatch = useDispatch()
    return(
        <>
         <div className="text-end py-2 mb-4" style={{background:'var(--accent-bg-color'}}><Button onClick={()=>dispatch(openAdminModal({type:'addCategory'}))} style={{backgroundColor:'var(--secondary-bg)',color:'var(--color-text-on-secondary)',border:'0',marginRight:'15px'}}>Add New Category</Button></div>
        
            <Container>
                <Table responsive striped bordered >
                    <thead>
                        <tr className="text-center">
                            <th style={{ width: '8%' }}>Sr.</th>
                            <th style={{ width: '12%' }}>Icon</th>
                            <th>Business Category</th>
                            <th style={{ width: '20%' }}>Remark</th>
                            <th style={{ width: '20%' }}>Group</th>
                            <th style={{ width: '15%' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {category.map((item, index) => (
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
                                        }}>
                                        {item.cname.charAt(0).toUpperCase()}
                                    </p>
                                </td>
                                <td className="align-middle px-3 text-start">{item.cname}</td>
                                <td className="align-middle px-3 ">{item.remark||"---"}</td>
                                <td className="align-middle px-3 text-start">{item.gid.gname}</td>

                                <td className="align-middle fs-4 " style={{ color: 'var(--color-text-on-secondary)' }}>
                                    <span className="me-3" onClick={() => dispatch(openAdminModal({type:'editCategory',data:item}))}><FaRegEdit /></span>
                                    
                                    <span onClick={() => dispatch(openAdminModal({type:'deleteCategory',data:item}))}><RiDeleteBin6Line /></span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

                {adminModalType === 'editCategory' && <EditCategory data={adminModalData}/>}
                {adminModalType === 'deleteCategory'&& <DeleteCategory data={adminModalData}/>}
                {adminModalType === 'addCategory' && <AddCategory/>}

                <SignupUseEffects />
            </Container>
            </>
    )
}
export default BusinessCategory