import axios from "axios"
import { useEffect } from "react"
import { setCitiesData, setStatedata, setUSerRoles, setUsers, Userrole } from "../../store/slice/AdminSlice";
import { useDispatch } from "react-redux";

const UseEffectsFile = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchUserTypes = async () => {
      try {
        const res = await axios.get('http://localhost:5000/usertype/readUsertypes');
        const types = res.data.data.data;
        dispatch(Userrole(types)); // pass the entire array
        // setcusttype(types); // (optional: for local usage)
      } catch (error) {
        console.log(error);
      }
    }
    fetchUserTypes()
  }, [])

  useEffect(()=>{
     const fetchUserTypes = async () => {
      try {
        const res = await axios.get('http://localhost:5000/usertype/readUsertypes');
        const types = res.data.data.data;
        dispatch(setUSerRoles(types)); 
      } catch (error) {
        console.log(error);
      }
    }
    fetchUserTypes()
  },[])


  useEffect(() => {
    const fetchState = async () => {
      try {
        const res = await axios.get('http://localhost:5000/States/readState')
        const states = res.data.data.data
        dispatch(setStatedata(states))
      } catch (error) {
        console.log(error)
      }
    }
    fetchState()
  }, [])

  useEffect(()=>{
    const fetchCities = async() =>{
      try{
      const res = await axios.get('http://localhost:5000/locations/allLocation')
      const city = res.data.data.data
      dispatch(setCitiesData(city))
      }catch(error){
        console.log(error)
      }
    }
    fetchCities()
  },[])

  useEffect(()=>{
      const fetchUser =async() =>{
      try{
      const res = await axios.get('http://localhost:5000/users/readuser')
      const data = res.data.data.data
      dispatch(setUsers(data))
      }
      catch(error){
        console.log(error)
      }
    }
    fetchUser()
  },[])

  return null
}
export default UseEffectsFile