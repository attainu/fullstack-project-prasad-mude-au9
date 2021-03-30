import React, { Component } from 'react'
import "./image.css"

class Image extends Component {
    state={
        image:""
    }

    imgaeclick=(e)=>{
      setTimeout(() => {
        fetch('http://localhost:7000/user/updateuser',{
          method:'PUT',
          headers:{
              'x-access-token':sessionStorage.getItem('_ltk'),
              'Accept':'application/json',
              'Content-Type':'application/json'
          },
          body:JSON.stringify(this.state.image)
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
    })
       console.log(this.state.image)
      }, 10000)
    }

    imageHandler = (e) => {
      console.log(this.state.image)
        this.setState({image: URL.createObjectURL(e.target.files[0])})
        console.log(this.state.image)
      };

    render() {
      if(sessionStorage.getItem('_ltk') == null){
        this.props.history.push('/login')
    }
        const { image} = this.state
      
        return (
            <div className="page">
				<div >
				
					<div className="img-holder">
						<img src={image} alt="" id="img" className="img" />
					</div>
					<input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} 
          onClick={this.imgaeclick}
          />
					<div className="labell1">
          <label className="image-upload" htmlFor="input">
						<i className="material-icons">add_photo_alternate</i>
						Choose your Photo
					</label>
          </div>
				</div>
			</div>
        )
    }

    componentDidMount(){
      fetch('http://localhost:7000/user/getinuser',{
          method:'GET',
          headers:{
              'x-access-token':sessionStorage.getItem('_ltk')
          }
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.image)
        this.setState({image:data.image})
    })
    }
}

export default Image
