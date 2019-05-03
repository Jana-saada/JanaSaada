import React, { Component } from 'react';
import NavBar from './NavBar';
import Flexbox from 'flexbox-react';
class Projects extends Component {
  constructor(){
    super();
    this.projectCss={
      border: '2px solid #ff9d00',
      borderRadius:'5px', 
       margin: '1%',
       marginLeft:'1.7%',
       marginTop:'2%',
       marginBottom:'2%',
       width:'30%',
       textAlign: 'center',
       lineHeight: '75px',
       fontSize: '30px',
       flexFlow:'row wrap'
    };
  }
  
  render() {
   
    return ( 
    <div style={{background:'#fe9979',width:'100vw',height:'100vh', overflow:'hidden'}}> 
      <NavBar/>
    <div style={{ display:'flex' ,flexWrap: 'wrap',boxShadow: '13px 13px #918f91',
    flexDirection:'row',
     alignItems:' stretch  flex-start  flex-end  center  baseline', 
     position:'absolute',left:'10%',top:'13%' ,width:'80%',
     height:'78%',background:'white',border: '5px solid black',borderRadius:'5px'}}>
      
      <p className="projectCss" style={this.projectCss} ></p>
      <p className="projectCss" style={this.projectCss} ></p>
      <p className="projectCss" style={this.projectCss} ></p>
 
      <p className="projectCss" style={this.projectCss} ></p>
      <p className="projectCss" style={this.projectCss} ></p>
      <p className="projectCss" style={this.projectCss} ></p>
    
      </div>
    </div>
    
    )
    }
};

    export default Projects ;