import React from "react"; 
import "./productDisplay.css"
import {Link} from "react-router-dom"

class ProductD extends React.Component { 
        constructor(props) { 
        super(props); 
        this.state = { 
          mode0:"0%",
          mode1:"0%",
          mode2:"0%",
          mode3:"0%",
          mode4:"0%",
          mode5:"0%",
          pdata:[]
        }; 
        } 

       changehandleron =(e)=>{
         var koko = [0,1,2,3,4,5]
         
         var x = e.target.id
        e.preventDefault()
        console.log(e.target.id)
        this.setState({[`mode${x}`]:"20%"})
        koko.map((item)=>{
          if (item != x){
            this.setState({[`mode${item}`]:"0%"})
          }
        })

        } 

      changehandleroff =(e)=>{
        e.preventDefault()
        this.setState({mode1:"0%"})
        this.setState({mode0:"0%"})
        this.setState({mode2:"0%"})
        this.setState({mode3:"0%"})
        this.setState({mode4:"0%"})
        this.setState({mode5:"0%"})
      }



        render() { 
          var {pdata} = this.state
           var soso = [this.state.mode0,this.state.mode1,this.state.mode2,this.state.mode3,this.state.mode4,this.state.mode5] 
          return(
          pdata.map((item,index)=>{
           
            
         
        return ( 
           
        <div>
        <a href="javascript:void(0)" class="closebtn"  onClick={(e) => { this.changehandleroff(e) }}>&times;</a>
       
            <a href="#" id={index} onClick={(e) => { this.changehandleron(e) }}>{item.name}</a>
            <hr></hr>
            <div className="overlay2" style={{width:soso[index]}}>
                {
                  item.sort.map((part)=>{
                   
                    return(
                      <div >
                        
                        <Link to={`/productDetail?${part.name}`}  >
                           {part.name}
                        </Link>
                          <hr></hr>
                      
                    </div>
                    )
                  })
                }
              </div>
              
    
        </div>
	)
 })
  
          )} 

componentDidMount(){
  fetch('http://localhost:7000/product/getProduct',{method:'GET'})
  .then((res) => res.json())
  .then((data) => {
    this.setState({pdata:data})
})
}

} 

export default ProductD;

// export default function ProductD() {

//   const [mode1, setmode1] = useState("0%");


// const changehandleron1 =(e)=>{
//   e.preventDefault()
//   setmode1("20%")
//   } 
// const changehandleroff =(e)=>{
//   e.preventDefault()
//   setmode1("0%")
// }


// return (
//   <div>
//       <a href="javascript:void(0)" class="closebtn" onClick={(e) => { changehandleroff(e) }}>&times;</a>
//       <a href="#" onClick={(e) => { changehandleron1(e) }}>Rolling bearing</a>
//       <hr></hr>
//           <div className="overlay2" style={{width:mode1}}>
//               <a href="#">about</a>
//               <hr></hr>
//               <a href="#">about</a>
//               <hr></hr>
//               <a href="#">about</a>
//               <hr></hr>
//               <a href="#">about</a>
//               <hr></hr>
//               <a href="#">about</a>
//               <hr></hr>
//               <a href="#">about</a>
//               <hr></hr>
//               <a href="#">about</a>
//               <hr></hr>
//               <a href="#" >about</a>
//               <hr></hr>
        
//           </div>
//       <a href="#">Mounting bearing and housing</a>
//       <hr></hr>
//       <a href="#">Super-precision bearing</a>
//       <hr></hr>
//       <a href="#">Plain bearing</a>
//       <hr></hr>
      
//   </div>
// );
// }
