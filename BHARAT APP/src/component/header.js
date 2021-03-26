// import React, { useState,useEffect } from 'react';
// import {Link} from "react-router-dom"

// import { createStyles, makeStyles} from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// //import Link from '@material-ui/core/Link';
// import "./header.css"
// import ProductD from "./productDisplay"

// const useStyles = makeStyles((theme) =>
//   createStyles({
//     root: {
//       flexGrow: 1, 
//     },

//     round : {
//       background: 'transparent',
//       boxShadow: 'none'
//     },

//     menuButton: {
//       marginRight: theme.spacing(-1),
    
//     },
//     title: {
//       flexGrow: 1,

//     },
//     name: {
//       marginRight: theme.spacing(5),
//      // marginTop: theme.spacing(2),
//     }
//   }),
// );

// export default function ButtonAppBar() {
//   const classes = useStyles();

//   const [mode, setmode] = useState("0%");
//   // const [mode1, setmode1] = useState("0%");
//   const [mode2, setmode2] = useState("0%");
//   const [mode3, setmode3] = useState("0%");
//   const [mode4, setmode4] = useState("0%");
//   const [isLoggedIn, setmode5] = useState(false);
//   const [mode6, setmode6] = useState(0);
//   var dd = sessionStorage.getItem("_ltk")
  
 
//   useEffect(()=>{
//       if (dd){
//         setmode5(true)
//       }
//       if (sessionStorage.getItem("_ltk") === null){
//         setmode6(1)
//       }
   
//   })
//   // const changehandleron1 =(e)=>{
//   //   e.preventDefault()
//   //   setmode1("20%")
//   //   setmode2("0%")
//   //   setmode3("0%")
//   //   setmode4("0%")

//   //   } 
//     const changehandleron2 =(e)=>{
//       e.preventDefault()
//       setmode2("20%")
//       // setmode1("0%")
//         setmode3("0%")
//         setmode4("0%")
//       }
//       const changehandleron3 =(e)=>{
//         e.preventDefault()
//         setmode3("20%")
//         // setmode1("0%")
//         setmode2("0%")
//         setmode4("0%")
//         }
//         const changehandleron4 =(e)=>{
//           e.preventDefault()
//           setmode4("20%")
//           // setmode1("0%")
//         setmode2("0%")
//         setmode3("0%")
//           }

//   const changehandleron =(e)=>{
//         e.preventDefault()
//         setmode("19%")
//   } 

//   const changehandleroff =(e)=>{
//         e.preventDefault()
//         setmode("0%")
//         // setmode1("0%")
//         setmode2("0%")
//         setmode3("0%")
//         setmode4("0%")
      
//   }



//   return (
//     <div>
//     <div className={classes.root} >
//       <AppBar position="fixed" color="primary" style={{backgroundColor: "rgba(0,0,0, 0.3)"}}>
//         <Toolbar>
//         <Typography variant="h6" className={classes.name} >
//             BHARAT
          
//           </Typography>
          
    
//          <Link href="#" className={classes.title} onClick={(e) => { changehandleron(e) }} > 
//           <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
//            <MenuIcon style={{fontSize:"1.385vw"}}/>
//           </IconButton >
//           <Typography variant="h8" style={{fontSize:"0.923vw"}} >
//             MENU
//           </Typography>
//           </Link>
//           {
            
//             isLoggedIn
//             ? <Link to="/profile" color="inherit" >profile</Link>
//             :  <Link to="/login" color="inherit" >Login</Link>
              
//             }
          
//         </Toolbar>
//       </AppBar>
//     </div>
//     <div  style={{width:mode}}  class="overlay">
//         <a href="javascript:void(0)" class="closebtn" onClick={(e) => { changehandleroff(e) }}>&times;</a>
//         <div className="overlay-content">
//          <div>
//             <Link to="/" >Home</Link>
//             <hr></hr>
//               {/* <div className="overlay1" style={{width:mode1}}>
//                 <a href="#">about</a>
//                 <hr></hr>
//                 <a href="#">about</a>
//                 <hr></hr>
//                 <a href="#">about</a>
//                 <hr></hr>
//                 <a href="#">about</a>
          
//               </div> */}
//             {/* <div className="vl"></div> */}
//          </div>
//          <div>
//           <a href="#" onClick={(e) => { changehandleron2(e) }}>Products</a>
//           <hr></hr>
//           <div className="overlay1" style={{width:mode2}}>
//                 <ProductD />
//               </div>
//           {/* <div className="vl"></div> */}
//          </div>
//          <div>
//           <a href="#" onClick={(e) => { changehandleron3(e) }}>Support</a>
//           <hr></hr>
//             <div className="overlay1" style={{width:mode3}}>
//                 <Link to="/Blocation">BHARAT location</Link>
//                 <hr></hr>
//                 <Link to="/distributor"  >Find a distributor</Link>
//                 <hr></hr>
//                 <Link to="/contact">Contact us</Link>
               
          
//               </div>
//           {/* <div className="vl"></div> */}
//          </div>
//          <div>
//           <a href="#" onClick={(e) => { changehandleron4(e) }}>Industries</a>
//           <hr></hr>
//             <div className="overlay1" style={{width:mode4}}>
//                 <a href="#">industries</a>
//                 <hr></hr>
//                 <a href="#">industries</a>
//                 <hr></hr>
//                 <a href="#">industries</a>
//                 <hr></hr>
//                 <a href="#">industries</a>
          
//               </div>
//           {/* <div className="vl"></div> */}
//          </div>
//          <div>
//           <Link to="/career">Career</Link>
//           <hr></hr>
//           {/* <div className="vl"></div> */}
//          </div>
//          <div>
//           <a href="#">ContactUs</a>
//           <hr></hr>
//           {/* <div className="vl"></div> */}
//          </div>
//         </div>
//       </div>
     
//     </div>
//   );
// }

// // import React from "react"; 

// // class App extends React.Component { 
// // constructor(props) { 
// // 	super(props); 
// // 	this.state = { change: true }; 
// // } 
// // render() { 
// // 	return ( 
// // 	<div> 
// // 		<button 
// // 		onClick={() => { 
// // 			this.setState({ change: !this.state.change }); 
// // 		}} 
// // 		> 
// // 		Click Here! 
// // 		</button> 
// // 		{this.state.change ? ( 
// // 		<h1>Welcome to GeeksforGeeks</h1> 
// // 		) : ( 
// // 		<h1>A Computer Science Portal for Geeks</h1> 
// // 		)} 
// // 	</div> 
// // 	); 
// // } 
// // } 

// // export default App;
