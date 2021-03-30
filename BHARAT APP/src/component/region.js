import React, { Component } from 'react';
import {Link} from "react-router-dom"
import { Button,Form ,Card} from 'react-bootstrap';
import "./region.css"


import "./login.css"


class Region extends Component{
    constructor(){
        super()

        this.state={
           
        }
    }
    render(){
     
  return (
    <div>
    
            <h4 style={{color:"white",position:"relative",left:"39vw",top:"18vh"}}>___ Region Served ___</h4>
            <div className="region">
            <div>
                <img src="https://www.tatasteel.com/media/2868/india_.png" alt="" />
                <h5 style={{color:"white"}}>India</h5>
            </div>
            <div>
                <img src="https://www.tatasteel.com/media/2867/europe_.png" alt="" />
                <h5 style={{color:"white"}}>Europe</h5>
            </div>
            <div>
                <img src="https://www.tatasteel.com/media/2869/sea_.png" alt="" />
                <h5 style={{color:"white",marginLeft:"-1vw"}}>South East Asia</h5>
            </div>
    </div>
    </div>
  );
}

componentDidMount(){
    fetch('http://localhost:7000/user/getinuser',{
        method:'GET',
       
    })
    .then((res) => res.json())
    .then((data) => {
      this.setState({user:data})
  })
  }

}

export default Region;