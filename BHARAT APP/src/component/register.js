import React, { Component} from 'react';
import {Link} from "react-router-dom"
import { Button,Form ,Card} from 'react-bootstrap';

//import Link from '@material-ui/core/Link';
import "./register.css"
const burl="http://localhost:7000/user/addUser";


class Register extends Component{
    constructor(){
        super()

        this.state={
            first_name:"",
            last_name:"",
            email:"",
            password:"",
            phone:"",
            company_name:"",
            address:"",
            pincode:"",
            city:"",
            state:"",
            type_user:""
        }
    }
   handleChangeFName = (event) => {
        this.setState({first_name:event.target.value})
        console.log(event.target.value)
        console.log(this.state.first_name)
    }
   handleChangeLName = (event) => {
        this.setState({last_name:event.target.value})
        console.log(event.target.value)
        console.log(this.state.last_name)
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
    handleChangePhone = (event) => {
        this.setState({phone:event.target.value})
        console.log(event.target.value)
        console.log(this.state.phone)
    }
    handleChangeCName = (event) => {
        this.setState({company_name:event.target.value})
        console.log(event.target.value)
        console.log(this.state.company_name)
    }
    handleChangeAdd = (event) => {
        this.setState({address:event.target.value})
        console.log(event.target.value)
        console.log(this.state.address)
    }
    handleChangePin = (event) => {
        this.setState({pincode:event.target.value})
        console.log(event.target.value)
        console.log(this.state.pincode)
    }
    handleChangeCity = (event) => {
        this.setState({city:event.target.value})
        console.log(event.target.value)
        console.log(this.state.city)
    }
    handleChangeState = (event) => {
        this.setState({state:event.target.value})
        console.log(event.target.value)
        console.log(this.state.state)
    }
    handleChangeTUser  = (event) => {
        this.setState({type_user:event.target.value})
        console.log(event.target.value)
        console.log(this.state.type_user)
    }


    handlesubmit = (event) => {
        console.log(event)
        console.log(this.state)
        event.preventDefault();
        fetch("http://localhost:7000/user/addUser",{
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
        if (Object.keys(result)[0]=== "errors"){alert(`invalid ${Object.keys(result.errors)[0]}`);}
        else if (Object.keys(result)[0]=== "driver"){alert(` ${Object.keys(result.keyValue)[0]} already registered`);}
        else {this.props.history.push('/login') ;alert('Register Successfully');}
        })
    }

    render(){
  return (
    <div className="set">
        <div className="regis">
        <h1>Register</h1>
        <p style={{marginTop:"5vh"}}>Please fill in the form below to register. All fields marked with * are mandatory.</p>
        </div>
        <div>
        <h5 style={{position:"relative",left:"11vw",top:"15vh",color:"#485a64"}}>Personal detail</h5>
        <Card className="card-cont" >
        <Form style={{margin:"1cm"}} onSubmit={this.handlesubmit} >
            <Form.Group controlId="formBasicPassword">
                <Form.Label >First Name:<span>*</span></Form.Label>
                <Form.Control  className="labelf" type="text" onChange={this.handleChangeFName} required/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Last name:<span>*</span></Form.Label>
                <Form.Control className="labelf"  type="text" onChange={this.handleChangeLName} required/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Email address:<span>*</span></Form.Label>
                <Form.Control className="labelf"  type="email" onChange={this.handleChangeEmail} required/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Choose a password:<span>*</span></Form.Label>
                <Form.Control className="labelf"  type="password" onChange={this.handleChangePass} required/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Phone number:<span>*</span> </Form.Label>
                <Form.Control autoComplete="off" className="labelf"  type="number" onChange={this.handleChangePhone} required/>
            </Form.Group>
            <Form.Group controlId="formBasicEmail" required>
                <Form.Label>Company name:<span>*</span></Form.Label>
                <Form.Control className="labelf"   type="text" onChange={this.handleChangeCName} required/>
                <Form.Text className="text-muted" >
                Mention your Enterprise name Here.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Address:<span>*</span></Form.Label>
                <Form.Control className="labelf"  type="text" onChange={this.handleChangeAdd} required/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Pincode:<span>*</span></Form.Label>
                <Form.Control className="labelf"  type="number" onChange={this.handleChangePin} required/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>City:<span>*</span></Form.Label>
                <Form.Control className="labelf"  type="text" onChange={this.handleChangeCity} required/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>State:<span>*</span></Form.Label>
                <Form.Control className="labelf"  type="text" onChange={this.handleChangeState} required/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Type of user:<span>*</span> </Form.Label>
                <Form.Control className="labelf"  type="text" onChange={this.handleChangeTUser} required/>
            </Form.Group>   
            
            <Button variant="success" type="submit" style={{marginTop:"3vh",marginLeft:"32.2vw"}}>
                REGISTER USER
            </Button>
         </Form>
        </Card>
        </div>
    </div>
  );
}}
export default Register;

// import React,{Component} from 'react';
// import { Link } from 'react-router-dom'

// const burl="http://localhost:700/adduser";
// const durl="http://localhost:700/deleteUser";
// class Admin extends Component{
//     constructor(){
//         super()

//         this.state={
//                 name:'',
//                 city:"",
//                 phone:'',
//                 email:'',
//                 url:''
//         }
//     }
//     handleChangeName = (event) => {
//         this.setState({name:event.target.value})
//     }
//     handleChangeCity = (event) => {
//         this.setState({city:event.target.value})
//     }
//     handleChangePhone = (event) => {
//         this.setState({phone:event.target.value})
//     }
//     handleChangeEmail = (event) => {
//         this.setState({email:event.target.value})
//         console.log(this.props)
//     }
//     handleChangeurl  = (event) => {
//         this.setState({url:event.target.value})
//         console.log(this.props)
//     }


//     handlesubmit = (event) => {
//         console.log(event)
//         event.preventDefault();
//         fetch(burl,{
//             method:'POST',
//             headers:{
//                 'Accept':'application/json',
//                 'Content-Type':'application/json'
//             },
//             body:JSON.stringify(this.state)
//         })
//         .then(this.props.history.push('/'))
       
//     }

//     render(){
//         return(
//     <div>
//         <div class="container">
//             <br></br>
//             <nav class="navbar navbar-inverse">
//             <div class="container-fluid">
//                     <div class="navbar-header">
//                         <Link class="navbar-brand" to="#">Pro Developer</Link>
//                     </div>
//                     <ul class="nav navbar-nav">
//                         <li class="active"><Link to="/" >Home</Link></li>
//                         <li class="active"><Link to="/admin" >Add New</Link></li>              
//                     </ul>
//                     </div>
//                 </nav>
//             <h3>Add new Data</h3>
//                 <form onSubmit={this.handlesubmit}>
//                     <div class="form-group">
//                     <label for="name">Name:</label>
//                     <input type="text" className="form-control" id="name" placeholder="Enter Name" name="name"  onChange={this.handleChangeName} required/>
//                     </div>
//                     <div className="form-group">
//                     <label for="city">City:</label>
//                     <input type="text" className="form-control" id="city" placeholder="Enter City" name="city"  onChange={this.handleChangeCity} required/>
//                     </div>
//                     <div className="form-group">
//                     <label for="phone">Phone:</label>
//                     <input type="text" className="form-control" id="phone" placeholder="Enter Phone" name="phone"   onChange={this.handleChangePhone} required/>
//                     </div>
//                     <div className="form-group">
//                         <label for="phone">Email:</label>
//                         <input type="email" className="form-control" id="email" placeholder="Enter Email" name="email"  onChange={this.handleChangeEmail} required />
//                     </div>
//                     <div className="form-group">
//                         <label for="phone">url:</label>
//                         <input type="text" className="form-control" id="url" placeholder="Enter Email" name="url"  onChange={this.handleChangeurl} required />
//                     </div>
//                     <button type="submit" className="btn btn-primary" >Add</button>
//                     {"\xa0"}
//                     <a href="/" className="btn btn-success" role="button">cancel</a>     
//                 </form>
//         </div>
//     </div>
//         )
//     }
    
// }

// export default Admin;
