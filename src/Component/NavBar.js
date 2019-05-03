import React, { Component  } from 'react';
import { Layout, Header, Navigation,Content } from 'react-mdl';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Icon from '../static/Logo7.svg';

class NavBar extends Component {
    constructor(){
        super();
 this.NavBarCss={
    display:'inline-block',
    width: '162px',
    height: '30px',
    paddingTop:'10px',
       marginTop:'10px',
       backgroundSize: 'auto 43px',
   backgroundImage:'url(./logo)',
   backgroundRepeat: 'no-repeat'

 };
}  

  render() {
  
    return (
    <div> 
    
    <div style={{height:'100px', position: 'relative'}}>
    
    <Layout >
        <Header transparent className="logo"   style={{color: 'white', fontFamily:'Courier'}}>
            <Navigation className="navObjects" style={{fontWheight:"bold",color: 'white', fontFamily:'Courier',
             position:"absolute",left:'68%', fontSize:"50px"}}>

                <Link to="/">Home</Link>
                <Link to="/about/"> About</Link>
                <Link to="/Projects/">Projects</Link>
                <Link to="/Contacts/">Contacts</Link>

               
            </Navigation>
        </Header>
        <Content />
    </Layout>
    <img src={Icon} width="10%" alt="Logo" style={{ position:"absolute", left:'-2%'}}/>
    
    
</div>

   </div>
    );
}
}

export default NavBar;
