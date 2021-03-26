import { Container,Row,Col,Grid,Card,CardDeck} from 'react-bootstrap';
const TrendingDisplay = (props) =>{
    const renderVideos = ({tvideos})=>{
        if(tvideos){
            return (
                tvideos.items.map((data)=>{
                    return(
                        <div style={{display: 'inline-block', margin:"10px"}}>
                    
                    <Card  style={{ width: '18rem',height:'14rem', overflow:'hidden'}}>
                        
                        <Card.Body>
                            <Card.Link style={{margin:'0px'}}>
                                <iframe width="245" height="150" src={`https://www.youtube.com/embed/${data.id.videoId}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </Card.Link>
                            <Card.Text>{data.snippet.title}</Card.Text>
                        </Card.Body>
                    </Card>
                   
                    <br></br>
                    </div>
                       
                    )
                }) 
            )
        }
    }
    return(
        <div>
            <p>
                Trending Videos
            </p>
            <br></br>
            {renderVideos(props)}
        </div>
    )
}
export default TrendingDisplay