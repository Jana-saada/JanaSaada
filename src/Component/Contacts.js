
import React, {Component} from 'react';
import NavBar from './NavBar';

    class Contacts extends Component {
        render() {
    return (

    <div className="container" style={{background:'#fe9979',width:'100vw',height:'100vh', overflow:'hidden'}}>
<NavBar/>
     <div style={{ boxShadow: '13px 13px #918f91', position:'absolute',left:'14%',top:'' ,width:'73%',height:'75%',background:'white',border: '5px solid black',borderRadius:'5px'}}>
       <h1 style={{position:'absolute',left:'10%',top:'5%',fontFamily:'Courier',fontWeight:'500',fontSize:'40px',color:'#ff9d00'}}>Contacts:</h1>
        <p1 > Phone number-0535290908 </p1>
        <p2> Email adress-Jana.agbariya7@gmail.com</p2>
        <p3> Github-github.com/Jana-saada</p3>
     
     </div>

    </div>
    );
}
 }

export default Contacts;