import { Col, Form, Modal, Container, Row, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { loginModal, signupModal } from "../../store/slice/modalSlice"
import loginimg from '../../assets/images/loginSlider3.gif'
import LoginModal from "./loginModal"
import { getFormObj } from "./signupData"

const SignupModal = ({ formdata, userType, setuserType, handleChange, handleClick }) => {

    const show = useSelector((state) => state.modal.signupModal)
    const dispatch = useDispatch()
    const formobj = formdata ? getFormObj(formdata, handleChange) : {};
    console.log("SignupModal props:", { formdata, userType, setuserType, handleChange, handleClick });


    return (
        <Modal show={show} size="xl" onHide={() => dispatch(signupModal())}>
            <Modal.Header closeButton className="border-0" />
            <Container fluid>
                <Row className=" pb-3">
                    <Col lg={6} xs={12} className="">
                        <img src={loginimg} alt="" className=" img-fluid object-fit-cover" />
                    </Col>

                    <Col lg={6} xs={12}>
                        <Row>
                            {
                                Object.entries(formobj).map(([key, value], index) => (
                                    <Col key={index} md={value.md} className="mb-4">
                                        <Form.Group>
                                            <Form.Label style={{ color: 'var(--color-text-on-secondary)' }}>{value.label}</Form.Label>

                                            {value.type === 'select' ? (
                                                <Form.Select name={key}
                                                    value={value.value}
                                                    onChange={handleChange} className={`border-0 border-bottom rounded-0 `} style={{ backgroundColor: 'transparent', backdropFilter: 'none', borderColor: 'var(--primary-bg)!important' }}>

                                                    {
                                                        Array.isArray(value.options) &&
                                                        value.options.map((opt, i) => (
                                                            <option key={i} value={opt} >{opt}</option>
                                                        ))
                                                    }
                                                </Form.Select>
                                            ) : (
                                                <Form.Control name={key} {...value} placeholder={`Enter Your ${value.label}`} className={`border-0 border-bottom rounded-0 ${value.type}`} style={{ backgroundColor: 'transparent', backdropFilter: 'none', borderColor: 'var(--primary-bg)!important' }} />
                                            )}

                                        </Form.Group>
                                    </Col>
                                ))}
                        </Row>

                        {/* user Type section */}

                        <div className="d-flex flex-wrap gap3 my3">
                            {['customer', 'guest', 'vendor'].map(type => (
                                <Form.Check type="radio" key={type} name='custType' label={type === 'customer' ? 'Planning to Wedding' : type === 'vendor' ? 'Vendor' : 'Guest'} value={type} checked={userType === type} onChange={() => setuserType(type)} />
                            ))}
                        </div>

                        {/* Conditional Fieds */}
                        {(userType === 'vendor' && (
                            <Form.Group>
                                <Form.Label>Business Name</Form.Label>
                                <Form.Control name='businessname' value={formdata.businessname} onChange={handleChange} />
                            </Form.Group>
                        ))}
                        {(userType === 'customer') && (
                            <Form.Group>
                                <Form.Label>Number Of Guest</Form.Label>
                                <Form.Control name='guestcount' value={formdata.guestcount} onChange={handleChange} />
                            </Form.Group>
                        )}

                        <div className="fs-6 my-3"> By clicking 'Sign up' I accept the Terms. </div>

                        <Button onClick={handleClick} className="w-100 mt-3 border-0 fw-medium" style={{ backgroundColor: 'var(--primary-bg)' }}>Sign Up</Button>

                        <div className="text-center mt-2"><Button className="bg-transparent border-0 text-black" onClick={() => dispatch(loginModal())}> Already have account ? <span style={{ color: 'var(--primary-bg)', fontWeight: '500' }}>Log in</span></Button></div><LoginModal />
                    </Col>
                </Row>
            </Container>
        </Modal>
    )
}
export default SignupModal