import { useState } from "react";
import SignupModal from "./SignupModal";
import LoginModals from "./LoginModals";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { showtoast } from "../../store/slice/toastify";
import { setSelectedRole } from "../../store/slice/usertype";

const initialdata = {
  firstname: "", 
  lastname: "",
  middlename: "",
  country: "",
  email: "",
  password: "",
  locationName: "",
  eventdate: "",
  phonenumber: "",
  businessname: "",
  guestcount: "",
  username:"",
  businessgroup:'',
  businesscategory:'',
};

const initialLoginData = {
  email: "",
  password: "",
};

const Signup = () => {
  const [formdata, setformdata] = useState(initialdata);
  const [logindata,setlogindata] = useState(initialLoginData)
  const dispatch = useDispatch()
  const custtype = useSelector((state)=>state.usertype.custtype)


  const handleChange = (e) => {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
    if (name === 'usertype') {
      // Find selected role string
      const selectedType = custtype.find(item => item._id === value)?.userrole.toLowerCase();
      // Update Redux
      dispatch(setSelectedRole(selectedType));
    }
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setlogindata({ ...logindata, [name]: value });
  };


  const handleClick = async() => {
    console.log(formdata);
    try{
      const res = await axios.post("http://localhost:5000/users/",formdata)
      dispatch(showtoast({message:res.data.data.message,type:"success"}))
    }
    catch(error){
      dispatch(showtoast({message:error.response.data.message,type:"error"}))
      console.log(error.response)
    }
  };

  const handleLoginClick = () => {
    console.log(logindata);
  };
  
  return (
    <>
    <SignupModal
      formdata={formdata} 
      handleChange={handleChange}
      handleClick={handleClick}
    ></SignupModal>
    <LoginModals
     logindata={logindata}
     handleLoginChange={handleLoginChange}
     handleLoginClick={handleLoginClick}
    ></LoginModals>
    </>
  );
};
export default Signup;