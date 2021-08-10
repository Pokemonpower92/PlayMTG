import React from "react";
import { Link } from "react-router-dom";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "../styles/LocationCard.css";

const LocationCard = (props) => {
    const { location } = props;

    return (
        <div className="LocationCard">
            <Card className="LocationCard-card">
                <div className="LocationCard-image">
                    <Card.Img variant="top" src={location.image} />
                </div>
                <div className="LocationCard-content">
                    <Card.Body>
                        <Card.Title>{location.name}</Card.Title>
                        <Card.Subtitle>{location.location}</Card.Subtitle>
                        <Card.Text>{location.description}</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Rating</ListGroupItem>
                        <ListGroupItem>
                        <Link to={`/locations/${location._id}`}>
                            Shop Page
                        </Link>
                        </ListGroupItem>
                    </ListGroup>
                </div>
            </Card>
        </div>
    );
};

export default LocationCard;
