
import {Link} from "react-router-dom"
import "./hashnav.css"
import Container from '@material-ui/core/Container';
import SearchBar from "material-ui-search-bar";
import React from "react"; 
import { Card, } from 'react-bootstrap';
import Region from './region';
import DemoCarousel from "./carousal"

class Hashnav extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { value:"",pdata:[],country:[{"name":"india"},{"name":"america"},{"name":"south"},{"name":"africa"},{"name":"argentina"},{"name":"indonesia"}] }; 
  } 

  visitAgain=()=>{
    this.setState({ value:"" })
    
  }



    visit=()=>{
      const{value} = this.state
      // const{country} = this.state.country
     return(
      this.state.pdata.map((item)=>{
        return(
        item.sort.map((part)=>{
          if(value!=="" && part.name.toLowerCase().indexOf(value.toLowerCase())!==-1){
            return(
              <div className="sresult">
              <ul >
               
                  <Link to={`/productDetail?${part.name}`} >
                  {part.name}
                  </Link>
                
              </ul>
              </div>
            )
          } 
          
        }))
        
        
   })

     )
      
       
    }

  render() { 
    
  return (

    <div>
      <section id="spotlight" className="one" ><h2 >Welcome to BHARAT</h2>
      <div>
      <SearchBar placeholder="What are you looking for?"
      style={{width:"28.462vw",height:"5.5vh", position:"relative",left:"39.769vw",top:"37.143vh"}}
         
          onChange={(newValue) => this.setState({ value: newValue })}
          onCancelSearch={this.visitAgain}
         
        />
        <div>
          {this.visit()}
        </div>
        
      </div>
  
      </section>
      <section id="Region" className="two"><Region/></section>
      <section id="product-range" className="three"><DemoCarousel/></section>
      <section id="investors" className="four"><h1>1</h1></section>
      
    <div id="fp-nav" class="right"  style={{zIndex:"1",marginRight:"5px"}}>
      <ul id="container">
        <li><a href="#spotlight" className="active"><span id="cube"></span><p style={{marginLeft:"-18px"}} className="fp-tooltip">{'\xa0'}Spotlight{'\xa0'}</p></a></li>
        <li><a href="#Region" className="active"><span id="cube"></span><p style={{marginLeft:"-10px"}} className="fp-tooltip">{'\xa0'}Region</p></a></li>
        <li><a href="#product-range" className="active"><span id="cube"></span><p style={{marginLeft:"-13px"}} className="fp-tooltip">{'\xa0'}Product{'\xa0'}</p></a></li>
        <li><a href="#investors" className="active"><span id="cube"></span><p style={{marginLeft:"-19px"}} className="fp-tooltip">{'\xa0'}Investors{'\xa0'}</p></a></li>
        <li><a href="#media" className="active"><span id="cube"></span><p style={{marginLeft:"-9px"}} className="fp-tooltip">{'\xa0'}Media{'\xa0'}</p></a></li>
        <li><a href="#stats" className="active"><span id="cube"></span><p style={{marginLeft:"-7px"}} className="fp-tooltip">Statss{'\xa0'}</p></a></li>
    </ul>
    </div>
    </div>
  );
}

componentDidMount(){
  fetch('http://localhost:7000/product/getProduct',{method:'GET'})
  .then((res) => res.json())
  .then((data) => {
    this.setState({pdata:data})
})
}


}
export default Hashnav;



























{/* <div id="fp-nav" class="right" style="margin-top: -70px;"><ul><li><a href="#spotlight" class=""><span></span></a><div class="fp-tooltip right">Spotlight</div></li><li><a href="#sustainabilty" class="active"><span></span></a><div class="fp-tooltip right">Sustainability</div></li><li><a href="#production-sector"><span></span></a><div class="fp-tooltip right">Product &amp; Solutions</div></li><li><a href="#investors"><span></span></a><div class="fp-tooltip right">Investors</div></li><li><a href="#media"><span></span></a><div class="fp-tooltip right">Media</div></li><li><a href="#stats"><span></span></a><div class="fp-tooltip right">Stats</div></li></ul></div> */}