const i_url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyDhLhLYMzNlhmdWLn_5B-Z8foLLDShmvx0&maxResults=10&q=indiatrending'

export function IndiaLatestVideo(){
    const output = fetch(i_url,{method:'GET'})
    .then ((data)=>data.json())
    return {
        type:'INDIA_TRENDING_VIDEOS',
        payload:output
    }
}