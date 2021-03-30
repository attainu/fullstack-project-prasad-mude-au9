import React, { Component } from 'react';
import {Link} from "react-router-dom"
import { Button,Form ,Card} from 'react-bootstrap';
import "./profile.css"
import Image from "./image"


import "./login.css"


class Profile extends Component{
    constructor(){
        super()

        this.state={
            session:"check",
            aa:"none",
            bb:"none",
            user:""
        }
    }
  
    chnageever=(e)=>{
  
        this.setState({session :e.target.value})
    }

    viewpro=()=>{
        this.setState({aa:"inline"})
        this.setState({bb:"none"})
    }
    editpro=()=>{
        this.setState({bb:"inline"})
        this.setState({aa:"none"})
    }

    renderprofile=(data)=>{
        if (data){
                return (
                    Object.keys(data).map((item,index)=>{
                        console.log(index)
                        return (
                         
                                  <Form.Group controlId="formBasicPassword">
                                     <Form.Label >{item}:<span>*</span></Form.Label>
                                     <Form.Control  className="labelf" type="text" value={data[item]} onChange={this.chnageever}/>
                                     
                                  </Form.Group>
                             
                        )
                    }

                )
                
                )
    }}


    render(){
       const user = this.state.user
        console.log(user)
        // console.log(this.state.userdata)
        if(sessionStorage.getItem('_ltk') == null){
            this.props.history.push('/login')
        }
  return (
        <div className="pro-container">
            <div id="main-pro">
              <div>
                <Image/>  
                </div>  
              
                <div>
                    <h4 style={{marginTop:"5.5vh",marginLeft:"2vw"}}>MyProfile</h4>
                    <h3 style={{marginTop:"-1vh",marginLeft:"2vw"}}>{this.state.user.first_name}</h3>
                </div>
                <h3 style={{marginTop:"9.8vh",marginLeft:"1vw"}}>{this.state.user.type_user}</h3>
                <p style={{marginTop:"9.3vh",marginLeft:"1vw",fontSize:"27px"}}>{this.state.user.city},India</p>
            </div>
            <div className="pro-detail">
                <button onClick={this.viewpro}>View Profile</button>
                <button onClick={this.editpro}>Quick Links</button>
                
            </div>
            {/* <div>
                <h1 style={{display:this.state.aa}}>prasdasd</h1>
                <h1 style={{display:this.state.bb}}>mudeajsnd</h1>
            </div> */}
            <div style={{position:"relative",top:"25vh",display:this.state.aa}}>
            <div className="set">
                    <h5 style={{position:"relative",left:"11vw",top:"15vh",color:"#485a64"}}>Personal detail</h5>
                    <Card className="card-cont1" >
                    <Form style={{margin:"1cm"}} onSubmit={this.handlesubmit} >
                        {this.renderprofile(user)}
                    </Form>
                    </Card>
                </div>
            </div>
        </div>
  );
}

componentDidMount(){
    fetch('http://localhost:7000/user/getinuser',{
        method:'GET',
        headers:{
            'x-access-token':sessionStorage.getItem('_ltk')
        }
    })
    .then((res) => res.json())
    .then((data) => {
      this.setState({user:data})
  })
  }

}

export default Profile;