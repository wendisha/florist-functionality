import React from 'react'
import CardDeck from "react-bootstrap/CardDeck";
import Card from 'react-bootstrap/Card';

const FloristCard = (props) => {
  return ( 
    <CardDeck className="col-md-6 col-lg-4">
      <Card>
      {/* <div key={props.florist.id}> */}
        <Card.Img variant="top" src={props.florist.image_url} alt={`Florist: ${props.florist.name}`}/>
        <Card.Body>
          <Card.Title>{props.florist.name}</Card.Title>
          <Card.Text>{props.florist.location.address1}</Card.Text>
          <Card.Text>{props.florist.location.city}, {props.florist.location.state}</Card.Text>
          <Card.Text>{props.florist.display_phone}</Card.Text>
          <Card.Link target="_blank" href={props.florist.url}>Learn more about this florist!</Card.Link>
        </Card.Body>
      </Card>
    </CardDeck>
  )
}

export default FloristCard