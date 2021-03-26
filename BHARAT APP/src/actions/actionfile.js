
const url = 'http://localhost:7000/product/getProduct'

export function ProdutD(){
    const output = fetch("http://localhost:7000/product/getProduct",{method:'GET'})
    .then ((data)=>data.json())
    return {
        type:'DETAIL_PRODUCT',
        payload:output
    }   
}


export function IndiaLatestVideo(){
    const output = fetch("http://localhost:7000/product/getProduct",{method:'GET'})
    .then ((data)=>data.json())
    return {
        type:'INDIA_TRENDING_VIDEOS',
        payload:output
    }
}
