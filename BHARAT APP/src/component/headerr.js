import React, { Component } from 'react';
import {Link} from "react-router-dom"


import { createStyles, makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
//import Link from '@material-ui/core/Link';
import "./headerr.css"
import ProductD from "./productDisplay"






class Headerr extends Component{
    constructor(){
        super()

        this.state={
            mode:"0%",
            mode2:"0%",
            mode3:"0%",
            mode4:"0%",
            // isloggedIn:false
        }
    }

   


    changehandleron2 =(e)=>{
    e.preventDefault()
    this.setState({mode2:"20%"})
    this.setState({mode3:"0%"})
    this.setState({mode4:"0%"})
    // setmode2("20%")
    // // setmode1("0%")
    //   setmode3("0%")
    //   setmode4("0%")
    }
   changehandleron3 =(e)=>{
      e.preventDefault()
      this.setState({mode2:"0%"})
      this.setState({mode3:"20%"})
      this.setState({mode4:"0%"})
    //   setmode3("20%")
    //   // setmode1("0%")
    //   setmode2("0%")
    //   setmode4("0%")
      }

      changehandleron4 =(e)=>{
        e.preventDefault()
        this.setState({mode2:"0%"})
        this.setState({mode3:"0%"})
        this.setState({mode4:"20%"})
    //     setmode4("20%")
    //     // setmode1("0%")
    //   setmode2("0%")
    //   setmode3("0%")
        }

    changehandleron =(e)=>{
      e.preventDefault()
      this.setState({mode:"19%"})
    //   setmode("19%")
} 

    changehandleroff =(e)=>{
      e.preventDefault()
      this.setState({mode:"0%"})
      this.setState({mode2:"0%"})
      this.setState({mode3:"0%"})
      this.setState({mode4:"0%"})
    //   setmode("0%")
    //   // setmode1("0%")
    //   setmode2("0%")
    //   setmode3("0%")
    //   setmode4("0%")    
}
  
handleLogout=(e) => {
    e.preventDefault()
    sessionStorage.removeItem('_ltk');
    sessionStorage.removeItem('name');
     this.props.history.push('/')
}
  



    render(){
        console.log(this.state.pdata)
        console.log(this.state.just)
        return (
            <div>
            <div  id="stand">
              <AppBar  position="fixed" color="primary" style={{backgroundColor: "rgba(0,0,0, 0.3)"}}>
                <Toolbar >
                <div>
                <Typography variant="h6" >
                    BHARAT
                  
                  </Typography>
                  </div>
                 <div style={{marginTop:"1vh"}}>   
                  <Typography variant="h8" style={{fontSize:"0.923vw"}} >
                 <Link href="#"  onClick={(e) => { this.changehandleron(e) }} > 
                  <IconButton edge="start"  color="inherit" aria-label="menu">
                   <MenuIcon style={{fontSize:"1.385vw",marginBottom:".7vh"}}/>
                  </IconButton >
                  <span style={{marginLeft:"-.7vw"}}>
                    MENU
                    </span>
                  </Link>
                  </Typography>
                  </div>
                  <div>
                  <Typography>
                  {
                    sessionStorage.getItem("_ltk")
                    ? <div class="dropdown">
                        <button class="dropbtn">{sessionStorage.getItem("name")}</button>
                        <div class="dropdown-content">
                        <Link to="/profile">MyProfile</Link>
                        <Link onClick={this.handleLogout}>Logout</Link>
                       
                        </div>
                    </div>
                     : <Link to="/login" color="inherit" >Login</Link>                      
                    }
                    </Typography>
                    </div>
                </Toolbar>
              </AppBar>
            </div>
            <div  style={{width:this.state.mode}}  class="overlay">
                <a href="javascript:void(0)" class="closebtn" onClick={(e) => { this.changehandleroff(e) }}>&times;</a>
                <div className="overlay-content">
                 <div>
                    <Link to="/" >Home</Link>
                    <hr></hr>
                      {/* <div className="overlay1" style={{width:mode1}}>
                        <a href="#">about</a>
                        <hr></hr>
                        <a href="#">about</a>
                        <hr></hr>
                        <a href="#">about</a>
                        <hr></hr>
                        <a href="#">about</a>
                  
                      </div> */}
                    {/* <div className="vl"></div> */}
                 </div>
                 <div>
                  <a href="#" onClick={(e) => { this.changehandleron2(e) }}>Products</a>
                  <hr></hr>
                  <div className="overlay1" style={{width:this.state.mode2}}>
                        <ProductD />
                      </div>
                  {/* <div className="vl"></div> */}
                 </div>
                 <div>
                  <a href="#" onClick={(e) => { this.changehandleron3(e) }}>Support</a>
                  <hr></hr>
                    <div className="overlay1" style={{width:this.state.mode3}}>
                        <Link to="/Blocation">BHARAT location</Link>
                        <hr></hr>
                        <Link to="/distributor"  >Find a distributor</Link>
                        <hr></hr>
                        <Link to="/contact">Contact us</Link>
                       
                  
                      </div>
                  {/* <div className="vl"></div> */}
                 </div>
                 <div>
                  <a href="#" onClick={(e) => { this.changehandleron4(e) }}>Industries</a>
                  <hr></hr>
                    <div className="overlay1" style={{width:this.state.mode4}}>
                        <a href="#">industries</a>
                        <hr></hr>
                        <a href="#">industries</a>
                        <hr></hr>
                        <a href="#">industries</a>
                        <hr></hr>
                        <a href="#">industries</a>
                  
                      </div>
                  {/* <div className="vl"></div> */}
                 </div>
                 <div>
                  <Link to="/career">Career</Link>
                  <hr></hr>
                  {/* <div className="vl"></div> */}
                 </div>
                 <div>
                  <a href="#">ContactUs</a>
                  <hr></hr>
                  {/* <div className="vl"></div> */}
                 </div>
                </div>
              </div>
             
            </div>
          );
}

}

export default Headerr;



// componentDidMount(){
//     if(sessionStorage.getItem("_ltk")){
//       this.setState({isloggedIn:true})
     
//   }
//   }
//   isloggedIn:false
//   this.state.isloggedIn