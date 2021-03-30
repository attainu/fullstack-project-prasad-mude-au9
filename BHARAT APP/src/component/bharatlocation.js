import React from "react"; 
import "./bharatlocation.css"
import {Card} from "react-bootstrap"


class BHARATlocation extends React.Component { 
  constructor() { 
  super(); 
  this.state = { 
    check:"no",
    dis:"none",
    search:"",
    msearch:"india",
    alluser:[{"first_name":"prasad","last_name":"mude","email":"BHARATltd@gmail.com","password":"BHARATltd@123","phone":"1234567890","company_name":"BHARAT India Limited","address":"Darshak Chambers","pincode":492001,"city":"Mumbai","state":"maharashtra","type_user":"distributor"},
    {"first_name":"prasad","last_name":"mude","email":"BHARATsol@gmail.com","password":"BHARAT@123","phone":"1234567890","company_name":"BHARAT Solution Factory","address":"1st Floor, SKCL Design Square","pincode":472001,"city":"Chennai","state":"Tamilnadu","type_user":"distributor"},
    {"first_name":"prasad","last_name":"mude","email":"BHARATtech@gmail.com","password":"BHARAT@123","phone":"1234567890","company_name":"BHARAT Technologies India Pvt Ltd. ","address":"Kasi Kunj ","pincode":4752001,"city":"Jamshedpur","state":"Jharkhand","type_user":"distributor"}
  ]
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
          if(data.msearch.toLowerCase()===item.city.toLowerCase() || data.msearch.toLowerCase()==="india" ){
      
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
          // else if(data.alluser.length === index+1 && this.state.check==="no"){
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
          
         
        return ( 
        <div>
          <div className="local">
              <h1>BHARAT location</h1>
          </div><form className="example">
          <label>LOCATION</label>
            <div style={{display:"flex"}}>
              <div className="newoutline">
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
          {/* <form className="newexample" autoComplete="on">
              <label>LOCATION</label>
            <div style={{display:"flex"}}>
              <div className="newoutline">
              <img src="https://www.skf.com/v2/assets/img/icon-location.svg" style={{height:"20px",width:"20px",marginRight:"10px"}}/>
              <input type="search" id="mySearch" 
              placeholder="Search for city"></input>
              </div>
              <button type="submit"><i class="fa fa-search"></i></button>
            </div>
          </form> */}
         
        </div>
	)
 }
  
         



} 

export default BHARATlocation;