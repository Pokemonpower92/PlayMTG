import { Component } from "react";
import api from "../api";
import { Button } from "react-bootstrap";
import "../styles/LocationEditPage.css";

class LocationEditPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            name: "",
            image: "",
            desciption: "",
            number: "",
            address: "",
            website: "",
            location: [],
        };
    }

    componentDidMount = async () => {
        const id = this.props.match.params.id;

        await api.getLocationById(id).then((res) => {
            let location = res.data.data;

            this.setState({
                loading: false,
                name: location.name,
                image: location.image,
                location: location,
                description: location.description,
                phone: location.phone,
                address: location.location,
                website: location.website,
            });
        });

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleWebsiteChange = this.handleWebsiteChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

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
        evt.preventDefault();
        const { name, image, description, phone, address, website } = this.state;
        const payload = { name, image, description, phone, address, website };

        await api.updateLocation(this.state.location._id, payload).then( res => {
            window.alert("Location Sucessfully Edited");
        })

    };

    render() {
        // Render a loading screen if necessary.
        const loading = (
            <div className="LocationEditPage-loading">
                <h1>Loading</h1>
            </div>
        );

        const loaded = (
            <div className="LocationEditPage-loaded">
                <div className="LocationEditPage-loaded-title">
                    <h1>Edit {this.state.name}</h1>
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
                        <Button onClick={this.handleSubmit}>Edit</Button>
                    </form>
                </div>
            </div>
        );
        return (
            <div className="LocationEditPage">
                {this.state.loading ? loading : loaded}
            </div>
        );
    }
}

export default LocationEditPage;
