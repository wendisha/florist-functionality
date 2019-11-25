import React from 'react'
import CardDeck from "react-bootstrap/CardDeck";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const FloristCard = (props) => {
  // console.log(props.florist.image_url);
  return ( 
    <CardDeck className="col-md-5 col-lg-4" style={{ margin: "2em auto" }}>
      <Card className="card">
      {/* <div key={props.florist.id}> */}
      
        {/* <Card.Img variant="top" className="card-img-top" src={props.florist.image_url} alt={`Florist: ${props.florist.name}`}/> */}
        {/* <img src="image.png" onError="this.onerror=null; this.src='/images/noimage.gif';" /> */}
        {/* src='../public/no-photo.jpg' */}
        <Card.Img variant="top" className="card-img-top" src={props.florist.image_url} alt={`Florist: ${props.florist.name}`} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.imgur.com/DtxazjC.jpg"}}/>
                                                                                                                            
        <Card.Body>
          <Card.Title>{props.florist.name}</Card.Title>
          <Card.Text className='cd-text'>{props.florist.location.address1}</Card.Text>
          <Card.Text className='cd-text'>{props.florist.location.city}, {props.florist.location.state}</Card.Text>
          <Card.Text>{props.florist.display_phone}</Card.Text>
          {/* <Card.Link target="_blank" href={props.florist.url}>Learn more about this florist!</Card.Link>
           */}

          <Button className="align-self-end btn-md round btn-block" variant="warning" style={{ margin: "auto" }}>
            <Card.Link target="_blank" href={props.florist.url} style={{ color: '#000' }}>
              Learn More
            </Card.Link>
          </Button>

        </Card.Body>
      </Card>
    </CardDeck>
  )
}

export default FloristCard