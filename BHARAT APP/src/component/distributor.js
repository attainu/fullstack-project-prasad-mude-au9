import React from "react"; 
import "./distributor.css"
import {Card} from "react-bootstrap"


class Distributor extends React.Component { 
        constructor() { 
        super(); 
        this.state = { 
          dis:"none",
          search:"",
          msearch:"india",
          alluser:[]
        }; 
        } 

        saveToSearch=(e)=>{
          e.preventDefault()
          console.log(e.target.value)
          this.setState({search:e.target.value})
        }

        searchHandler=(e)=>{
          e.preventDefault()
          this.setState({msearch:this.state.search.trim()})
          this.setState({dis:"inline"})
        }

        show=(data)=>{
          console.log(data)
          return (
              data.alluser.map((item,index)=>{
                if(data.msearch.toLowerCase()===item.city.toLowerCase() || data.msearch.toLowerCase()==="india"){
                  return (
                      <div >
                        <Card style={{ width: '65vw',position:"realative",left:"16vw",top:"-3vh" }}>
                          <Card.Body >
                            <Card.Title className="mt-0">{item.company_name}</Card.Title>
                            <div style={{display:"flex"}}>
                            <Card.Text  className="mb-0 text-muted">Address:</Card.Text>
                            <Card.Text>
                            {item.address},{item.city},{item.state},{item.pincode},IND
                            </Card.Text>
                            </div>
                            <div style={{display:"flex"}}>
                            <Card.Text className="mb-0 text-muted">E-mail:</Card.Text>
                            <Card.Link href="#" className="m-0">{item.email}</Card.Link>
                            </div>
                            <div style={{display:"flex"}}>
                            <Card.Subtitle className="mt-0 text-muted">Phone number:</Card.Subtitle>
                            <Card.Link href="#">{item.phone}</Card.Link>
                            </div>
                          </Card.Body>
                        </Card>
                      </div>
                  )
                }
                // else if(data.alluser.length === index+1){
                //  return(
                //      <div>
                //    <h1>Sorry currently we do not have distributor at your location, please search for nearby LOCATION</h1>
                //   </div>
                //  )
                // }
              })
          )
        }



      
        render() { 
          
         console.log(this.state)
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
              <input type="search"  
              placeholder="Search for city" onChange={this.saveToSearch}></input>
              </div>
              <button  onClick={this.searchHandler}><i class="fa fa-search"></i></button>
            </div>
          </form>
          <div>
            {this.show(this.state)}
          </div>
        </div>
	)
 }
  
         

componentDidMount(){
  fetch('http://localhost:7000/user/getUser',{method:'GET'})
  .then((res) => res.json())
  .then((data) => {
    this.setState({alluser:data})
})
}

} 

export default Distributor;