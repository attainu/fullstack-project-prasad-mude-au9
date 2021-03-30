import { Container,Row,Col,Grid,Card,CardDeck} from 'react-bootstrap';
import {Link} from "react-router-dom"
import "./productDDisplay.css"
import Tabel from './tabel';

const ProductDDisplay = (props) =>{
        var x= window.location.search
        var res = x.split("%20");
        console.log(res)
        var z=""
        res.map((item)=>{
             (
               z = z + item + " "
            )
        })
        console.log(z.slice(1))
        const zz = z.slice(1,z.length-1)
    const renderVideos = ({tvideos})=>{
      
        // console.log(typeof(zz))
       
        if(tvideos){
            return tvideos.map((item) =>{
                return(
                    item.sort.map((part)=>{
                        
                        if (zz === part.name){
                            return(
                                <div>
                                <h1 style={{fontFamily:"initial"}}>{part.name}</h1>
                                <div style={{display:"inline-flex",fontSize:"15px",marginRight:"14.615vw",marginTop:"1cm"}}>
                                    <div style={{display:"inline-block",marginRight:"7vw"}}>
                                    <p>
                                        <em>{part.text} </em>are the most widely used bearing type and are particularly versatile. They have low friction and are optimized for low noise and low vibration which enables high rotational speeds. They accommodate radial and axial loads in both directions, are easy to mount, and require less maintenance than other bearing types.
                                     </p>
                                    <p>
                                    The BHARAT bearing catalogue lists a large range of designs, variants and sizes of deep groove ball bearings. Beyond our catalogue offering, the SKF Explorer deep groove ball bearings are customizable to offer advantages for applications with specific performance needs.
                                    </p>
                                    </div>
    
                                    <img style={{width:"7cm",height:"7cm"}} alt="img" src={part.img}/>
                                </div>
                                <h4 style={{marginTop:"13vh"}}>Dimensions Available in Metric</h4>
                                <div style={{position:"relative",top:"5vh",right:"0vw"}}>
                                <Tabel />
                                </div>
                            
                          </div>
                            )
                     }
                    })
                   
                )
            })
        }
        
    }
    return(
        <div >
        <div className="main">
            <div className="submain">
           
            {renderVideos(props)}
            </div>
        </div>
        </div>
    )
}
export default ProductDDisplay;


// ____________________________________________________________________________


// import {Link} from "react-router-dom"
// import "./productDDisplay.css"

// import React from "react"; 


// class ProductDDisplay extends React.Component { 
//   constructor(props) { 
//     super(props); 
//     this.state = { 
//         pro:''
//   } 
//   }
   
//  handler=(tvideos)=>{
     
        
//     console.log(tvideos.data)
//         return (
//         //    tvideos.map((item)=>{
//         //        return(
//         //            <h1>{item.name}</h1>
//         //        )
//         //    })
//                 <h1>prasad</h1>
//                 )
                    
//         }
            
        
 


//   render() { 
    
//   return (

//     <div >
//       <h1>sad</h1>
//       {this.handler(this.props)}
//     </div>
//   );
// }




// }
// export default ProductDDisplay;
