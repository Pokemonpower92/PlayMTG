import { Component } from "react";
import { locationAPI } from "../api";
import { Button } from "react-bootstrap";
import "../styles/LocationCreatePage.css";

class LocationCreatePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			image: "",
			desciption: "",
			number: "",
			address: "",
			website: "",
			location: [],
		};

		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleImageChange = this.handleImageChange.bind(this);
		this.handleAddressChange = this.handleAddressChange.bind(this);
		this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
		this.handlePhoneChange = this.handlePhoneChange.bind(this);
		this.handleWebsiteChange = this.handleWebsiteChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleNameChange = (evt) => {
		this.setState({
			[evt.target.name]: evt.target.value,
		});
	};

	handleImageChange = (evt) => {
		this.setState({
			[evt.target.name]: evt.target.value,
		});
	};

	handleDescriptionChange = (evt) => {
		this.setState({
			[evt.target.name]: evt.target.value,
		});
	};

	handlePhoneChange = (evt) => {
		this.setState({
			[evt.target.name]: evt.target.value,
		});
	};

	handleAddressChange = (evt) => {
		this.setState({
			[evt.target.name]: evt.target.value,
		});
	};

	handleWebsiteChange = (evt) => {
		this.setState({
			[evt.target.name]: evt.target.value,
		});
	};

	handleSubmit = async (evt) => {
		const { name, image, description, phone, address, website } =
			this.state;
		const payload = { name, image, description, phone, address, website };

		await locationAPI
			.createLocation(payload)
			.then((res) => {
				window.alert("Store successfully created!");
				window.location.reload(false);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	render() {
		return (
			<div className="LocationEditPage-loaded">
				<div className="LocationEditPage-loaded-title">
					<h1>Add a Great Place to Play!</h1>
				</div>
				<div className="LocationEditPage-loaded-form">
					<form>
						<label>Store Name:</label>
						<input
							type="text"
							name="name"
							value={this.state.name}
							placeholder={this.state.location.name}
							onChange={this.handleNameChange}
							className="LocationEditPage-loaded-form-name"
						></input>

						<label>Image URL:</label>
						<input
							type="text"
							name="image"
							value={this.state.image}
							placeholder={this.state.location.image}
							onChange={this.handleImageChange}
							className="LocationEditPage-loaded-form-name"
						></input>

						<label>Address:</label>
						<input
							type="text"
							name="address"
							value={this.state.address}
							placeholder={this.state.location.location}
							onChange={this.handleAddressChange}
							className="LocationEditPage-loaded-form-location"
						></input>

						<label>Phone Number:</label>
						<input
							type="text"
							name="phone"
							value={this.state.phone}
							placeholder={this.state.location.phone}
							onChange={this.handlePhoneChange}
							className="LocationEditPage-loaded-form-phone"
						></input>

						<label>Website:</label>
						<input
							type="text"
							name="website"
							value={this.state.website}
							placeholder={this.state.location.website}
							onChange={this.handleWebsiteChange}
							className="LocationEditPage-loaded-form-website"
						></input>

						<label>Description:</label>
						<textarea
							name="description"
							value={this.state.description}
							placeholder={this.state.location.description}
							onChange={this.handleDescriptionChange}
							className="LocationEditPage-loaded-form-description"
						></textarea>
						<Button variant="secondary" onClick={this.handleSubmit}>
							Submit
						</Button>
					</form>
				</div>
			</div>
		);
	}
}

export default LocationCreatePage;
