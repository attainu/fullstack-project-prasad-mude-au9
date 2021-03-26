import React,{Component} from 'react';
import {connect} from 'react-redux';
import ProductDDisplay from '../component/productDDisplay';
import {ProdutD} from '../actions/actionfile'

class ProductDetail extends Component{
    componentDidMount(){
        this.props.dispatch(ProdutD())
    }

    render(){
        return(
            <div>
                <ProductDDisplay  tvideos={this.props.IvideosList}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    
    return{
        IvideosList:state.prodetail.data
    }
}


 export default connect(mapStateToProps)(ProductDetail);


// _____________________________________________________________________________________ 

// import React from "react"; 


// class ProductDetail extends React.Component { 
//         constructor(props) { 
//         super(props); 
//         this.state = { change: true ,
//           mode0:"0%",
//           mode1:"0%",
//           pdata:[]
//         }; 
//         } 

    



//         render() { 
//          return (
//           this.state.pdata.map((item,index)=>{
           
            
         
//         return ( 
           
//         <div>
//             <h1>{item.name}</h1>
    
//         </div>
// 	)
//  }))
//         }

// componentDidMount(){
//   fetch('http://localhost:7000/product/getProduct',{method:'GET'})
//   .then((res) => res.json())
//   .then((data) => {
//     this.setState({pdata:data})
// })
// }

// } 

// export default ProductDetail;
