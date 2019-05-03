import React, {Component} from 'react';
import vid1 from '../static/vid3.mp4';
class Video extends Component {
  constructor(){
      super();
      this.VideoCss={
        position: 'fixed',
        top:'50%', 
        left: '50%',
        width: '100%',
        height: '100%',
        zIndex: '-200',
        transform: 'translate(-50%, -50%)',
        opacity:'60%',
        background:'white',
        
      };
  }
    render () {     
        return (
            <div className="Video" style={this.VideoCss}>
            <video id="background-video" loop autoPlay style={{ opacity:"60%",position:'absolute', top:'0', left:'0'
        , objectFit:'fill' ,width:'100vw',height: "100vh"}}>
                <source src={vid1} type="video/mp4" />
                <source src={vid1} type="video/ogg" />
            </video>
            <div className="body" style={{paddingLeft:'5%'}} >
     <h1 style={{paddingTop:'10%', fontSize:'90px', fontFamily:'Courier', fontWeight:'bolder', position:'relative',left:'-30%',top:'30%'}}>Hello </h1>
     <h2 style={{ fontSize:'50px',paddingBottom:'2%', fontFamily:'Courier',fontWeight:'bold', position:'relative', left:'-25%',top:'50%'}}>Welcome</h2>  
     <h3 style={{ fontSize:'30px',fontWeight:'', fontFamily:'Courier',position:'relative', left:'-8%',top:'50%'}}> Make Yourself Right at Home.</h3>

    </div>
           
            </div>
        )
    }
};

export default Video;