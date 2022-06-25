import { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import Default from "../img/cards.jpg";
import { locationAPI, reviewAPI } from "../api/";
import ReviewCard from "../components/ReviewCard";

import "../styles/LocationPage.css";
import "../styles/Stars.css";

class LocationPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			edit: false,
			review_body: "",
			review_rating: "0",
			location: [],
			reviews: [],
		};

		this.toEdit = this.toEdit.bind(this);
		this.handleReviewBodyChange = this.handleReviewBodyChange.bind(this);
		this.handleReviewRatingChange =
			this.handleReviewRatingChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount = async () => {
		const id = this.props.match.params.id;

		await locationAPI.getLocationById(id).then((res) => {
			this.setState({
				loading: false,
				location: res.data.data,
				review_body: "",
				review_rating: "0",
				reviews: res.data.data.reviews,
			});
		});
	};

	toEdit = () => {
		const { history } = this.props;
		history.push(`/locations/${this.state.location._id}/edit`);
	};

	handleReviewBodyChange = (evt) => {
		this.setState({
			[evt.target.name]: evt.target.value,
		});
	};

	handleReviewRatingChange = (evt) => {
		this.setState({
			review_rating: evt.target.value,
		});
	};

	handleSubmit = async () => {
		const review = {
			author: "McButt",
			body: this.state.review_body,
			rating: parseInt(this.state.review_rating),
			location: this.state.location,
		};

		await reviewAPI
			.createReview(this.state.location._id, review)
			.then(() => {
				window.alert("Review posted!");
				window.location.reload(false);
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
		// htmlFor now render links.
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
								<img src={Default} alt="" />
							) : (
								<img src={Default} alt="" />
							)}
						</div>
						<div className="LocationPage-loaded-content-info-text">
							<p>Location: {this.state.location.address}</p>
							<p>Phone: {this.state.location.phone}</p>
							<p>Website: {this.state.location.website}</p>
						</div>
					</div>
					<div className="LocationPage-loaded-content-text">
						<h2>Rating</h2>
						<p>{this.state.location.description}</p>
						<hr></hr>
						<div className="LocationPage-loaded-content-text-reviewform">
							<h2>Leave a review</h2>
							<fieldset
								className="starability-basic"
								onChange={this.handleReviewRatingChange}
							>
								<input
									type="radio"
									id="no-rate"
									className="input-no-rate"
									name="rating"
									value="0"
									checked={this.state.review_rating === "0"}
									aria-label="No rating."
								/>
								<input
									type="radio"
									id="first-rate1"
									name="rating"
									value="1"
									checked={this.state.review_rating === "1"}
								/>
								<label htmlFor="first-rate1" title="Terrible">
									1 star
								</label>
								<input
									type="radio"
									id="first-rate2"
									name="rating"
									value="2"
									checked={this.state.review_rating === "2"}
								/>
								<label htmlFor="first-rate2" title="Not good">
									2 stars
								</label>
								<input
									type="radio"
									id="first-rate3"
									name="rating"
									value="3"
									checked={this.state.review_rating === "3"}
								/>
								<label htmlFor="first-rate3" title="Average">
									3 stars
								</label>
								<input
									type="radio"
									id="first-rate4"
									name="rating"
									value="4"
									checked={this.state.review_rating === "4"}
								/>
								<label htmlFor="first-rate4" title="Very good">
									4 stars
								</label>
								<input
									type="radio"
									id="first-rate5"
									name="rating"
									value="5"
									checked={this.state.review_rating === "5"}
								/>
								<label htmlFor="first-rate5" title="Amazing">
									5 stars
								</label>
							</fieldset>
							<textarea
								name="review_body"
								value={this.state.review_body}
								onChange={this.handleReviewBodyChange}
								className="LocationPage-loaded-content-text-reviewform-form"
							></textarea>
							<Button
								variant="secondary"
								onClick={this.handleSubmit}
							>
								Submit
							</Button>
						</div>
						<hr></hr>
						<div className="LocationPage-loaded-content-text-reviews">
							<h2>Reviews</h2>
							<ul>
								{this.state.reviews.map((r) => (
									<ReviewCard
										className="ReviewCard"
										readOnly={true}
										key={r._id}
										review={r}
									/>
								))}
							</ul>
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
