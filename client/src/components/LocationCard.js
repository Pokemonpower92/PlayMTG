import React from "react";
import { Link } from "react-router-dom";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "../styles/LocationCard.css";
import Default from '../img/cards.jpg'; 

const LocationCard = (props) => {
    const { location } = props;
    {console.log(location.image)}

    return (
        <div className="LocationCard">
            <Card className="LocationCard-card">
                <div className="LocationCard-image">
                    <Card.Img 
                        variant="top" 
                        src={location.image ? location.image : Default} 
                    />
                </div>
                <div className="LocationCard-content">
                    <Card.Body>
                        <Card.Title>{location.name}</Card.Title>
                        <Card.Subtitle>{location.location}</Card.Subtitle>
                        <Card.Text>{location.description}</Card.Text>
                    </Card.Body>
                    <ListGroup className="LocationCard-listgroup" variant="flush">
                        <div className="LocationCard-rating">
                            <ListGroupItem className="LocationCard-listitem">Rating</ListGroupItem>
                        </div>
                        <Link to={`/locations/${location._id}`} className="LocationCard-listitem-link">
                        <ListGroupItem className="LocationCard-listitem">
                                Shop Page
                        </ListGroupItem>
                        </Link>
                    </ListGroup>
                </div>
            </Card>
        </div>
    );
};

export default LocationCard;
