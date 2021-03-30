import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Carousel from 'react-bootstrap/Carousel'

import "./carousal.css"

class DemoCarousel extends Component {
    constructor(){
        super()

        this.state={
            }
    }
    render() {
      console.log(this.state)
        return (
          <div >
            <h3 style={{position:"relative",left:"41vw",top:"20vh"}}>Product Range</h3>
            <Carousel >
            <Carousel.Item >
              <div className="call" style={{display:"flex",marginTop:"30vh",height:"60vh",marginLeft:"11.5vw"}}>
                <div>
              <img
              style={{height:"40vh"}}
                className="d-block w-70"
                src="https://www.skf.com/binaries/pub12/Images/0901d1968032b548-Deep-groove-ball-bearing-with-shields-and-steel-cage_cut-away-view_tcm_12-159089.png"
                alt="First slide"
              />
              <h5>Deep groove bearings</h5>
              </div>
              <div>
               <img
             style={{height:"40vh"}} 
                className="d-block w-70"
                src="https://www.skf.com/binaries/pub12/Images/0901d19680381254-E2-Y-bearing-3D-rendering-cut-view-(YAR)_tcm_12-180779.png"
                alt="First slide"
              />
              <h5>Insert bearings</h5>
              </div>
              <div>
               <img
              style={{height:"40vh"}}
                className="d-block w-70"
                src="https://www.skf.com/binaries/pub12/Images/DDThBB_237.333333333333_61.3333333333333_640_464_tcm_12-149141.png"
                alt="First slide"
              />
              <h5>Thrust ball bearings</h5>
              </div>
              </div>
              
            </Carousel.Item>
            <Carousel.Item >
              <div className="call" style={{display:"flex",marginTop:"30vh",height:"60vh",marginLeft:"11.5vw"}}>
                <div>
              <img
              style={{height:"40vh"}}
                className="d-block w-70"
                src="https://www.skf.com/binaries/pub12/Images/0901d19680a7f653-thin_section_bearing_JA040XP0_tcm_12-552926.png"
                alt="sec slide"
              />
              <h5>Thin section bearings</h5>
              </div>
              <div>
               <img
             style={{height:"40vh"}} 
                className="d-block w-70"
                src="https://www.skf.com/binaries/pub12/Images/0901d19680947053-BEA-8003_DWP-cut_tcm_12-507097.png"
                alt="sec slide"
              />
              <h5>Angular bearings</h5>
              </div>
              <div>
               <img
              style={{height:"40vh"}}
                className="d-block w-70"
                src="https://www.skf.com/binaries/pub12/Images/0901d19680139c17-7305-ACM-cut_tcm_12-296598.png"
                alt="sec slide"
              />
              <h5>Single row angular</h5>
              </div>
              </div>
              
            </Carousel.Item>
            <Carousel.Item >
              <div className="call" style={{display:"flex",marginTop:"30vh",height:"60vh",marginLeft:"11.5vw"}}>
                <div>
              <img
              style={{height:"40vh"}}
                className="d-block w-70"
                src="https://www.skf.com/binaries/pub12/Images/0901d1968032b548-Deep-groove-ball-bearing-with-shields-and-steel-cage_cut-away-view_tcm_12-159089.png"
                alt="third slide"
              />
              <h5>Deep groove bearings</h5>
              </div>
              <div>
               <img
             style={{height:"40vh"}} 
                className="d-block w-70"
                src="https://www.skf.com/binaries/pub12/Images/0901d19680381254-E2-Y-bearing-3D-rendering-cut-view-(YAR)_tcm_12-180779.png"
                alt="third slide"
              />
              <h5>Insert bearings</h5>
              </div>
              <div>
               <img
              style={{height:"40vh"}}
                className="d-block w-70"
                src="https://www.skf.com/binaries/pub12/Images/DDThBB_237.333333333333_61.3333333333333_640_464_tcm_12-149141.png"
                alt="third slide"
              />
              <h5>Thrust ball bearings</h5>
              </div>
              </div>
              
            </Carousel.Item>
           
          </Carousel>
          </div>
        );
    }
    
};

export default DemoCarousel;