export default function(state={},action){
    switch(action.type){
        case 'TRENDING_VIDEOS':
            return{...state, trendingVideo:action.payload}
            case 'INDIA_TRENDING_VIDEOS':
                return{data:[...state.data,action.payload]}
               
        default:
            return state;
    }
}