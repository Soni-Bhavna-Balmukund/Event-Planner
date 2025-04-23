import { useState } from "react";
import SignupModal from "./SignupModal";

const initialdata = {
  firstname: "",
  lastname: "",
  middlename: "",
  contry: "",
  email: "",
  password: "",
  eventlocation: "",
  eventdate: "",
  phonenumber: "",
  businessname: "",
  guestcount: "",
};

const Signup = () => {
  const [formdata, setformdata] = useState(initialdata);
  const [userType, setuserType] = useState("customer");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };

  const handleClick = () => {
    console.log(formdata);
  };
  return (
    <SignupModal
      formdata={formdata}
      handleChange={handleChange}
      handleClick={handleClick}
      userType={userType}
      setuserType={setuserType}
    ></SignupModal>
  );
};
export default Signup;