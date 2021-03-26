
export default function(state = {},action){
    switch(action.type){
        case 'DETAIL_PRODUCT':
            return{...state,data:action.payload}
           
        default:
            return state;
    }
}


// const initialstate = {
//     data:["prasad","mude"],
// }


// export default function(state = initialstate,action){
   
//     switch(action.type){
//         case "ADD_TODO":
//             return{data:[...state.data,action.payload]}
//         default:
//             return state;
//     }
// }
