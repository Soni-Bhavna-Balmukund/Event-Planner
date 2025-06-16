import ReactApexChart from 'react-apexcharts';
import { useSelector } from 'react-redux';
import SignupUseEffects from '../Modals/SignupUseEffects';
import UseEffectsFile from './UseEffectsFile';


const AdminChart = () => {
    const users = useSelector((state)=>state.admin.users)
    const groups = useSelector(state => state.usertype.grouptype);
  const categories = useSelector(state => state.usertype.categorytype);
  const countries = useSelector(state => state.usertype.country);
  const states = useSelector((state)=>state.admin.statesdata)
  const cities = useSelector((state)=>state.admin.citiesdata)
  
  const totalVender = users.filter((u)=>u.usertype?.userrole  === 'vendor').length || 0;
  const totalCustomer = users.filter((u)=>u.usertype?.userrole === 'customer').length || 0;
  const userRoles = useSelector((state)=>state.admin.totalUserRoles)
// console.log(userRoles,'fd')
//   console.log(categories.length,countries.length,states.length,cities,length,userRoles.length,users.length)
  const series = [totalVender,totalCustomer,groups.length,categories.length,countries.length,states.length,cities.length,userRoles.length,users.length]
  const labels = ['Vender','Customer','Groups','Categories','Countries','States','Cities','Userroles','Users']
//  const series = [totalVender,totalCustomer,categories.length,countries.length,states.length,cities.length,users.length]
//   const labels = ['Vender','Customer','Categories','Countries','States','Cities','Users']
console.log('Series:', series);
  const options = {
    chart: {
      type: 'polarArea',
    },
    labels: labels,
    stroke: {
      colors: ['#fff']
    },
    fill: {
      opacity: 0.8
    },
     dataLabels: {
        enabled: true,
      },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 300
        },
        legend: {
          position: 'bottom'
        }
      }
    }],


  };
  return (
     <div>
      <ReactApexChart options={options} series={series} type="polarArea" height={500} width={800}/>
      <SignupUseEffects/>
      <UseEffectsFile/>
    </div>
  )
}

export default AdminChart