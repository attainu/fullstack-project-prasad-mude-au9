import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Carousel from 'react-bootstrap/Carousel'
const bse = ["RELIANCE"];
const surl = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol"

class DemoCarousel extends Component {
    constructor(){
        super()

        this.state={
            }
    }
    render() {
      console.log(this.state)
        return (
            <Carousel style={{width:"300px",height:"300px"}}>
            <Carousel.Item>
                
              <img
                className="d-block w-100"
                src="https://bit.ly/354hgfZ"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://bit.ly/354hgfZ"
                alt="Third slide"
              />
          
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://bit.ly/354hgfZ"
                alt="Third slide"
              />
          
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        );
    }
    componentDidMount(){
        bse.map((item)=>{
            
        fetch(`${surl}=${item}.BSE&apikey=2USS6PIBXMW1WHLB`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({ [item]:data[`Global Quote`]})
           
            
        })
    })
    }
    
};

export default DemoCarousel;