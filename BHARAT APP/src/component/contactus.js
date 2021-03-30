import React, { Component} from 'react';
import {Link} from "react-router-dom"
import { Button,Form ,Card} from 'react-bootstrap';

//import Link from '@material-ui/core/Link';

const burl="http://localhost:7000/user/addUser";


class ContactUs extends Component{
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
   

    handlesubmit = (event) => {
       alert("message received...!")
    }

    render(){
  return (
    <div className="set">
        <div className="regis">
        <h1>Contact us</h1>
        
        </div>
        <div>
        
        <Card className="card-cont" >
        <Form style={{margin:"1cm"}} onSubmit={this.handlesubmit} >
            <Form.Group controlId="formBasicPassword">
                <Form.Label >I need to get in touch for<span>*</span></Form.Label>
                <Form.Control  className="labelf" type="text" required/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Your message ( Maximum 4000 characters )<span>*</span></Form.Label>
                <textarea rows="4" cols="71" style={{display:"block"}} className="labelf"  type="text" required/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Name:<span>*</span></Form.Label>
                <Form.Control className="labelf"  type="text"  required/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Email address:<span>*</span></Form.Label>
                <Form.Control className="labelf"  type="email"  required/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Phone number:<span>*</span> </Form.Label>
                <Form.Control className="labelf"  type="number"  required/>
            </Form.Group>
            <Form.Group controlId="formBasicEmail" required>
                <Form.Label>Company name:<span>*</span></Form.Label>
                <Form.Control className="labelf"   type="text"  required/>
               
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Address:<span>*</span></Form.Label>
                <Form.Control className="labelf"  type="text"  required/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Pincode:<span>*</span></Form.Label>
                <Form.Control className="labelf"  type="number"  required/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>City:<span>*</span></Form.Label>
                <Form.Control className="labelf"  type="text"  required/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>State:<span>*</span></Form.Label>
                <Form.Control className="labelf"  type="text"  required/>
            </Form.Group>
             
            
            <Button variant="success" type="submit" style={{marginTop:"3vh",marginLeft:"32.2vw"}}>
                SEND
            </Button>
         </Form>
        </Card>
        </div>
    </div>
  );
}}
export default ContactUs;