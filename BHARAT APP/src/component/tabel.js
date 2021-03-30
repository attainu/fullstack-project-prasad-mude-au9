import React, { Component } from 'react';
// import {Link} from "react-router-dom"
// import { Button,Form ,Card} from 'react-bootstrap';
import "./profile.css"

import "./tabel.css"
import "./login.css"


class Tabel extends Component{
    constructor(){
        super()

        this.state={
            session:"check",
            aa:"none",
            bb:"none",
            user:""
        }
    }
  
    

    render(){
  return (
      <div>
        <table style={{width:"60vw"}}>
         <thead  >
             <tr  class="table-head" >
                 <th style={{ backgroundColor:"#485a64",color:"whitesmoke",fontWeight:"500"}}>Principal dimensions</th>
                 <th><div>Basic load ratings</div></th>
                 <th><div>Speed ratings</div></th>
                  <th><div>Designations</div></th>
            </tr>
            <tr  class="table-row">
                <th  style={{backgroundColor:'#485a64'}}></th>
                <th >
                    <span style={{display:"flex"}}>
                    <div >dynamic</div>
                    <div >static</div>
                    </span>
                 
                </th>
                <th >
                    <span style={{display:"flex"}}>
                    <div >Reference</div>
                    <div >Limiting speed</div>
                    </span>
                </th>
                <th  >
                    <span style={{display:"flex"}}>
                    <div >Bearing</div>
                    <div >Snap ring</div>   
                    </span>
                </th>
               
            </tr>
            <tr className="enough">
                <th  >
                     
                           <span style={{display:"flex"}}>
                            <div ><div >d[mm]</div></div> 
                            <div ><div >D[mm]</div></div>
                            <div ><div >B[mm]</div></div>
                            </span>
                    
                </th>
                <th   >
                    <div>  
                            <span style={{display:"flex"}}>
                            <div ><div >C[kN]</div></div> 
                            <div ><div >C0[kN]</div></div> 
                            </span>
                           
                    </div>
                </th>
                <th   >
                    <div>  
                            <span style={{display:"flex"}}>
                            <div ><div >[r/min]</div></div> 
                            <div ><div >[r/min]</div></div> 
                            </span>
                    </div>
                </th>
                <th   >
                    <div>  
                             <span style={{display:"flex"}}>
                            <div ><div ></div></div> 
                            <div ><div ></div></div> 
                            </span>
                    </div>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td >
                    <span style={{display:"flex"}}  >
                    <div ><div >0.6</div></div> 
                    <div ><div >2.5</div></div>
                    <div ><div >1</div></div> 
                    </span>
                </td>
                <td>
                    <span style={{display:"flex"}}>
                    <div ><div >0.034</div></div>
                    <div ><div >0.007</div></div>
                    </span>
                </td>
                <td>
                    <span style={{display:"flex"}}>
                    <div ><div >260000</div></div>
                    <div ><div >160000</div></div>
                    </span>
                </td>
                <td>
                <span style={{display:"flex"}}>
                    <div ><div >W 618/0.6</div></div>
                    <div ><div ></div></div>
                    </span>
                </td>
            </tr>
            <tr>
                <td>
                    <span style={{display:"flex"}}>
                    <div ><div >1</div></div> 
                    <div ><div >3</div></div>
                    <div ><div >1.6</div></div> 
                    </span>
                </td>
                <td>
                <span style={{display:"flex"}}>
                    <div ><div >0.079</div></div>
                    <div ><div >0.017</div></div>
                    </span>
                </td>
                <td>
                    <span style={{display:"flex"}}>
                    <div ><div >220000</div></div>
                    <div ><div >140000</div></div>
                    </span>
                </td>
                <td>
                    <span style={{display:"flex"}}>
                    <div ><div >D/W R09 R</div></div>
                    <div ><div ></div></div>
                    </span>
                </td>
                
            </tr>
            <tr>
                <td>
                    <span style={{display:"flex"}}>
                    <div ><div >1.016</div></div> 
                    <div ><div >3.175</div></div>
                    <div ><div >1.191</div></div> 
                    </span>
                </td>
                <td>
                    <span style={{display:"flex"}}>
                    <div ><div >0.057</div></div>
                    <div ><div >0.014</div></div>
                    </span>
                </td>
                <td>
                    <span style={{display:"flex"}}>
                    <div ><div >210000</div></div>
                    <div ><div >110000</div></div>
                    </span>
                </td>
                <td>
                    <span style={{display:"flex"}}>
                    <div ><div >D/W R09</div></div>
                    <div ><div ></div></div>
                    </span>
                </td>
                
            </tr>
            <tr>
                <td>
                    <span style={{display:"flex"}}>
                    <div ><div >1.397</div></div> 
                    <div ><div >4.762</div></div>
                    <div ><div >1.984</div></div> 
                    </span>
                </td>
                <td>
                    <span style={{display:"flex"}}>
                    <div ><div >0.134</div></div>
                    <div ><div >0.034</div></div>
                    </span>
                </td>
                <td>
                    <span style={{display:"flex"}}>
                    <div ><div >200000</div></div>
                    <div ><div >130000</div></div>
                    </span>
                </td>
                <td>
                    <span style={{display:"flex"}}>
                    <div ><div >W 638/1</div></div>
                    <div ><div ></div></div>
                    </span>
                </td>
                
            </tr>
            <tr>
                <td>
                    <span style={{display:"flex"}}>
                    <div ><div >1.421</div></div> 
                    <div ><div >4.762</div></div>
                    <div ><div >2.779</div></div> 
                    </span>
                </td>
                <td>
                    <span style={{display:"flex"}}>
                    <div ><div >0.062</div></div>
                    <div ><div >0.016</div></div>
                    </span>
                </td>
                <td>
                    <span style={{display:"flex"}}>
                    <div ><div >180000</div></div>
                    <div ><div >100000</div></div>
                    </span>
                </td>
                <td>
                    <span style={{display:"flex"}}>
                    <div ><div >W 618/1 R</div></div>
                    <div ><div ></div></div>
                    </span>
                </td>
                
            </tr>
            <tr>
                <td>
                    <span style={{display:"flex"}}>
                    <div ><div >1.431</div></div> 
                    <div ><div >4.862</div></div>
                    <div ><div >2.891</div></div> 
                    </span>
                </td>
                <td>
                    <span style={{display:"flex"}}>
                    <div ><div >0.134</div></div>
                    <div ><div >0.048</div></div>
                    </span>
                </td>
                <td>
                    <span style={{display:"flex"}}>
                    <div ><div >170000</div></div>
                    <div ><div >100000</div></div>
                    </span>
                </td>
                <td>
                    <span style={{display:"flex"}}>
                    <div ><div  className="ccccc">W 618/0.6</div></div>
                    <div ><div ></div></div>
                    </span>
                </td>
                
            </tr>
        </tbody>
    </table>
      </div>
  )
}


}

export default Tabel;