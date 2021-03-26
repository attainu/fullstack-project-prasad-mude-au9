import React from "react"; 
import "./distributor.css"


class Distributor extends React.Component { 
        constructor() { 
        super(); 
        this.state = { 
        }; 
        } 

      
        render() { 
          
         
        return ( 
        <div>
          <div className="dist">
              <h1>Find a distributor</h1>
          </div>
          <form className="example">
          <label>LOCATION</label>
            <div style={{display:"flex"}}>
              <div className="outline">
              <img src="https://www.skf.com/v2/assets/img/icon-location.svg" style={{height:"20px",width:"20px",marginRight:"10px"}}/>
              <input type="search" id="mySearch" 
              placeholder="Search for city"></input>
              </div>
              <button type="submit"><i class="fa fa-search"></i></button>
            </div>
          </form>
         
        </div>
	)
 }
  
         

componentDidMount(){
  fetch('http://localhost:7000/product/getProduct',{method:'GET'})
  .then((res) => res.json())
  .then((data) => {
    this.setState({pdata:data})
})
}

} 

export default Distributor;