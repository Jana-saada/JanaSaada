import React, {Component} from 'react';
import NavBar from './NavBar'
import Typing from 'react-typing-animation';
class About extends Component {
    constructor(){
        super();
    }

    render() {
        return (
            <div className="container" style={{background:'#fe9979',width:'100vw',height:'100vh', overflow:'hidden'}} >
             <NavBar/>
             <div style={{ boxShadow: '13px 13px #918f91', position:'absolute',left:'14%',top:'' ,width:'73%',height:'75%',background:'white',border: '5px solid black',borderRadius:'5px'}}>
               <h2 style={{position:'absolute',left:'10%',top:'5%',fontFamily:'Courier',fontWeight:'500',fontSize:'40px',color:'#ff9d00'}}> About:</h2>
               <p2 style={{position:'absolute',left:'15%',top:'30%',
               fontFamily:'courier',fontSize:'20px',fontWeight:'500',textAlign:'left',maxWidth: 'calc(30em * 1)',lineHeight:'150%',animation: 'type 4s steps(60, end)'}}>
                <Typing><span> Hello, my name is Jana I am a front-end devolper, I'm an enthusiastic individual, love to learn and improve, and I love a good challenge. </span></Typing>  </p2>
             </div>
            </div>
        );
        }
}


export default About; 