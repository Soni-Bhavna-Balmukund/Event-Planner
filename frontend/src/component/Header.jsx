import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { MdOutlineRateReview } from "react-icons/md";
import { RiMobileDownloadLine } from "react-icons/ri";
import logo from '../assets/images/logo4(4).png'
import { Link } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { loginModal, revieMmodalShow, searchModal, signupModal } from '../store/slice/modalSlice';
import ReviewModal from './Modals/ReviewModal';
import SearchModal from './Modals/SearchModal';
import { FaBarsStaggered } from "react-icons/fa6";
import { MdAppRegistration } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
// import LoginModal from './Modals/loginModal';
import SignupModal from './Modals/SignupModal';
import Signup from './Modals/signup';


const Header = () => {
    const dispatch = useDispatch()

    return (
        <>
            <Container fluid>
                <div className="d-lg-block d-none">
                    <Row className='py-1 align-items-center primary-bg text-white fs-14 px-4' >
                        <Col md={3}>India's Favourite Event Planning Platform</Col>
                        <Col md={2}> <Form.Select name="city" id="" className='py-1 bg-white rounded-1 fw-medium' disabled style={{color:'var(--primary-bg)'}}><option value="city" >All Cities</option></Form.Select></Col>
                        <Col md={7} className='text-end fw-medium'><Button className='bg-transparent border-0' onClick={() => dispatch(revieMmodalShow())}><MdOutlineRateReview className='fs-4' /> Write a Review </Button>
                            <ReviewModal />
                            <span className='ms-4'><RiMobileDownloadLine className='fs-4' /> <Link target='_blank' to='https://play.google.com/store/search?q=event%20planner&c=apps&hl=en_IN' className='fs-6 text-decoration-none text-white'> Download app</Link></span> </Col>
                    </Row>

                    <Row className='secondary-bg px-4 text-white align-items-center'>
                        <Col md={2}><Link to='/'><img src={logo} alt="" className='img-fluid w-100' /></Link></Col>
                        <Col md={6} className='d-flex justify-content-around px-4 fs-5 menu ' style={{fontFamily:'var(--secondary-font)'}}>

                            <Link to='venues' className='d-block text-decoration-none py-2 fw-medium' style={{'color':'var(--color-text-on-secondary)'}}>Venues</Link>
                            <Link to='venders' className='d-block text-decoration-none py-2 fw-medium' style={{'color':'var(--color-text-on-secondary)'}}>Venders</Link>
                            <Link to='photos' className='d-block text-decoration-none py-2 fw-medium' style={{'color':'var(--color-text-on-secondary)'}}>Photos</Link>
                            <Link to='realWeddings' className='d-block text-decoration-none py-2 fw-medium' style={{'color':'var(--color-text-on-secondary)'}}>Real Weddings</Link>
                            <Link to='blogs' className='d-block text-decoration-none py-2 fw-medium' style={{'color':'var(--color-text-on-secondary)'}}>Blogs</Link>
                            <Link to='e_invites' className='d-block text-decoration-none py-2 fw-medium' style={{'color':'var(--color-text-on-secondary)'}}>E-invites</Link>
                        </Col>
                        <Col md={4} className='text-end'>
                            <Button className='bg-transparent border-0' onClick={() => dispatch(searchModal())}><span className='me-4  fs-5 p-2 pt-1  rounded-circle search-btn' style={{background:'var(--accent-bg-color)'}}> <IoSearch /></span></Button><SearchModal />
                            <Button className='bg-transparent border-0 ' onClick={()=>dispatch(signupModal())} ><span className=' py-2 px-4 rounded-pill login-btn' style={{background:'var(--accent-bg-color)'}}>Login/Sign Up</span></Button><Signup/>
                        </Col>
                    </Row></div>

                <div className='d-lg-none d-block'>
                    <Row className='secondary-bg text-white py-2 align-items-center '>
                        <Col sm={1} xs={2}><FaBarsStaggered className='fs-4' style={{color:'var(--color-text-on-secondary)'}}/></Col>
                        <Col sm={5} xs={4} className=''><Link to='/'><img src={logo} alt="" className=' img-fluid' style={{ 'maxWidth': '150px', 'minWidth': '130px', 'width': '100%' }} /></Link></Col>
                        <Col sm={5} xs={4} className='d-flex justify-content-end '>
                            <span className='position-relative'>
                                <Form.Select name="city" id="" className='py-1 bg-white rounded-1 w-100 border-0 bg-transparent ' style={{color:'var(--color-text-on-secondary)'}} disabled><option value="city">All Cities</option></Form.Select><IoMdArrowDropdown className='position-absolute' style={{ 'right': '10px', 'top': '50%', 'transform': 'translateY(-50%)',color:'var(--color-text-on-secondary)' }} />
                            </span>
                        </Col>
                        <Col sm={1} xs={2}> <Button onClick={()=>dispatch(revieMmodalShow())} className='bg-transparent border-0 p-0'> <span className='primary-bg p-2 pt-1 rounded-end rounded-4'><MdAppRegistration className='fs-3' /></span></Button></Col>
                    </Row></div>
            </Container>
        </>
    )
}
export default Header