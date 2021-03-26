import React, { Component } from 'react';
import {Link} from "react-router-dom"


import "./login.css"


class Login extends Component{
    constructor(){
        super()

        this.state={
            
            email:"",
            password:""
        }
    }
  
    handleChangeEmail = (event) => {
        this.setState({email:event.target.value})
        console.log(event.target.value)
        console.log(this.state.email)
    }
    handleChangePass = (event) => {
        this.setState({password:event.target.value})
        console.log(event.target.value)
        console.log(this.state.password)
    }
    

    handlesubmit = (event) => {
        console.log(event)
        console.log(this.state)
        event.preventDefault();
        fetch("http://localhost:7000/user/login",{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then((Response) => Response.json())
    .then((result) => {
        console.log(result)
        if (result.auth === false){alert(result.message);}
       
        else { sessionStorage.setItem('_ltk',result.token);
        sessionStorage.setItem('name',result.name);
        this.props.history.push('/')}
        })
    }

    render(){
  return (
        <div id="main">
            <div style={{boxSizing:"border-box",width:"25vw",height:"4vh",margin:"5vw",marginTop:"0"}}>
                <h4 style={{marginBottom:"10vh"}}>BHARAT Login</h4>
                <p style={{fontSize:"14px",fontWeight:"100"}}>Login to access interactive engineering tools, signup for regular updates from BHARAT and review your profile settings.</p>
                <p style={{fontSize:"14px",fontWeight:"100"}}>For BHARAT authorized distributors: log in to access BHARAT Distributor Hub, where you'll find sales and marketing support. </p>
                
                    <form style={{marginTop:"2vh"}} onSubmit={this.handlesubmit}>
                        <div class="form-gro">  
                            <label style={{marginRight:"2.0vw"}}for="email" className="label">Email</label>
                            <input  id="username" onChange={this.handleChangeEmail} class="form-control" name="email"  type="email" autofocus="" autocomplete="off" required />
                        </div>

                        <div class="form-gro">  
                            <label for="password" class="control-label">Password</label>
                            <input  id="password" onChange={this.handleChangePass} class="form-control" name="password" type="password" autocomplete="off" required />   
                        </div>

                        <div className="form-gro">
                                <div style={{marginLeft:"12.8vw"}} >
                                    <label>
                                    <input id="rememberMe" name="rememberMe" type="checkbox" /> Keep me logged in
                                    </label>
                                    <span style={{fontSize:"15px",display:"block"}}><Link to="#">Forgot password?</Link></span>
                                </div>
                                <input  class="sbtn" name="login" type="submit" value="Log in"/>
                        </div>
                    </form>

                
                    <div style={{fontSize:"14px"}}>
                            <br></br>For more support, please contact us at <label class="control-label">BHARATweb@BHARAT.com</label>
                    </div>
            </div>

            <div className="vl"></div>

            <div className="new-register"><span>New user? <Link to="/register">Register</Link></span></div>
       
    </div>
  );
}
}

export default Login;