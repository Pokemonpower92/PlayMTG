import { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import Default from "../img/cards.jpg";
import { locationAPI, reviewAPI } from "../api/index";

import "../styles/LocationPage.css";

class LocationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            edit: false,
            review: "",
            location: [],
            reviews: [],
        };

        this.toEdit = this.toEdit.bind(this);
        this.handleReviewChange = this.handleReviewChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount = async () => {
        const id = this.props.match.params.id;

        await locationAPI.getLocationById(id).then((res) => {
            this.setState({
                loading: false,
                location: res.data.data,
                review: "",
                reviews: res.data.data.reviews,
            });
        });
    };

    toEdit = () => {
        const { history } = this.props;
        history.push(`/locations/${this.state.location._id}/edit`);
    };

    handleReviewChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
        });
    };

    handleSubmit = async () => {
        alert("I submitted the review!");
        const review = {
            author: "McButt",
            body: this.state.review,
            rating: 5,
            location: this.state.location,
        };

        await reviewAPI.createReview(this.state.location._id, review);

        await locationAPI
            .getLocationById(this.state.location._id)
            .then((res) => {
                this.setState({
                    loading: false,
                    location: res.data.data,
                    review: "",
                });
            });
    };

    render() {
        // Render a loading screen if necessary.
        const loading = (
            <div className="LocationPage-loading">
                <h1>Loading</h1>
            </div>
        );
        // Render location components eventually.
        // For now render links.
        const loaded = (
            <div className="LocationPage-loaded">
                <div className="LocationPage-loaded-header">
                    <h1>{this.state.location.name}</h1>
                    <Button variant="secondary" onClick={this.toEdit}>
                        Edit
                    </Button>
                </div>
                <div className="LocationPage-loaded-content">
                    <div className="LocationPage-loaded-content-info">
                        <div className="LocationPage-loaded-content-info-image">
                            {this.state.location.image ? (
                                <img src={this.state.location.image} alt="" />
                            ) : (
                                <img src={Default} alt="" />
                            )}
                        </div>
                        <div className="LocationPage-loaded-content-info-text">
                            <p>Location: {this.state.location.location}</p>
                            <p>Phone: {this.state.location.phone}</p>
                            <p>Website: {this.state.location.website}</p>
                        </div>
                    </div>
                    <div className="LocationPage-loaded-content-text">
                        <h2>Description</h2>
                        <p>{this.state.location.description}</p>
                        <hr></hr>
                        <h2>Rating</h2>
                        <hr></hr>
                        <div className="LocationPage-loaded-content-text-reviews">
                            <h2>Reviews</h2>
                            <ul>
                                {this.state.reviews.map((r) => (
                                    <li>{r.body}</li>
                                ))}
                            </ul>
                            <hr></hr>
                        </div>
                        <div classname="LocationPage-loaded-content-text-reviewform">
                            <h2>Leave a review</h2>
                            <textarea
                                name="review"
                                value={this.state.review}
                                onChange={this.handleReviewChange}
                                className="LocationPage-loaded-content-text-reviewform-form"
                            ></textarea>
                            <Button
                                variant="secondary"
                                onClick={this.handleSubmit}
                            >
                                Submit
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );

        return (
            <div className="LocationPage">
                {this.state.loading ? loading : loaded}
            </div>
        );
    }
}

export default withRouter(LocationPage);
