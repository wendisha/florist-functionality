import React from 'react'
import CardDeck from "react-bootstrap/CardDeck";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const FloristCard = (props) => {
  return ( 
    <CardDeck className="col-md-6 col-lg-3" style={{ margin: "2em auto" }}>
      <Card>
      {/* <div key={props.florist.id}> */}
        <Card.Img variant="top" className="card-img-top" src={props.florist.image_url} alt={`Florist: ${props.florist.name}`}/>
        <Card.Body>
          <Card.Title>{props.florist.name}</Card.Title>
          <Card.Text>{props.florist.location.address1}</Card.Text>
          <Card.Text>{props.florist.location.city}, {props.florist.location.state}</Card.Text>
          <Card.Text>{props.florist.display_phone}</Card.Text>
          {/* <Card.Link target="_blank" href={props.florist.url}>Learn more about this florist!</Card.Link>
           */}

          <Button className="align-self-end btn-lg btn-block" variant="light" style={{ margin: "auto" }}>
            <Card.Link target="_blank" href={props.florist.url}>
              Learn more...
            </Card.Link>
          </Button>

        </Card.Body>
      </Card>
    </CardDeck>
  )
}

export default FloristCard