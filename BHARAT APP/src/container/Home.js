import React,{Component} from 'react';
import {connect} from 'react-redux';
import HomeDisplay from '../component/HomeDisplay';
import {IndiaLatestVideo} from '../actions/actionfile'

class Home extends Component{
    componentDidMount(){
        this.props.dispatch(IndiaLatestVideo())
    }

    render(){
        
        // const {pro} = this.props.product.detailProduct
        return(
            this.props.IvideosList.indaitrendingVideo.map((item)=>{
                return(
                    <div>
                        <h>{item.name}</h>
                    </div>
                )
            })
        
        )
    }
}

function mapStateToProps(state){
    return{
        IvideosList:state.videos
    }
}


export default connect(mapStateToProps)(Home);