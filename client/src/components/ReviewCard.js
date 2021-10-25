import React from "react";
import { Link } from "react-router-dom";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const ReviewCard = (props) => {
    const { review } = props;

    return (
        <div className="ReviewCard">
            <p>{ review.rating }</p>
            <p>{ review.body }</p>
        </div>
    );
};

export default ReviewCard;