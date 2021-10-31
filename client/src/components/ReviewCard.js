import React from "react";
import { Link } from "react-router-dom";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "../styles/ReviewCard.css";
import "../styles/Stars.css"

const ReviewCard = (props) => {
    const { review } = props;

    return (
        <div className="ReviewCard">
            <Card className="ReviewCard-card">
                <div className="ReviewCard-content">
                    <Card.Body>
                        <Card.Title>Temp Author</Card.Title>
                        <Card.Subtitle>
                            <p className="starability-result" data-rating={review.rating}></p>
                        </Card.Subtitle>
                        <Card.Text className="ReviewCard-content-body">
                            {review.body}
                        </Card.Text>
                    </Card.Body>
                </div>
            </Card>
        </div>
    );
};

export default ReviewCard;
