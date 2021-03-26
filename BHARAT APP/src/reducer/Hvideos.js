export default function(state={},action){
    switch(action.type){
        case 'INDIA_TRENDING_VIDEOS':
            return{...state, indaitrendingVideo:action.payload}
        default:
            return state;
    }
}

//excess