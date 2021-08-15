import { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import Default from "../img/cards.jpg";
import api from "../api";

import "../styles/LocationPage.css";

class LocationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            edit: false,
            location: [],
        };

        this.toEdit = this.toEdit.bind(this);
    }

    toEdit = () => {
        const { history } = this.props;
        history.push(`/locations/${this.state.location._id}/edit`);
    };

    componentDidMount = async () => {
        const id = this.props.match.params.id;

        await api.getLocationById(id).then((res) => {
            this.setState({
                loading: false,
                location: res.data.data,
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
                                <img src={this.state.location.image} alt=""/>
                            ) : (
                                <img src={Default} alt=""/>
                            )}
                        </div>
                        <div className="LocationPage-loaded-content-info-text">
                            <p>{this.state.location.location}</p>
                            <p>phone</p>
                            <p>website</p>
                        </div>
                    </div>
                    <div className="LocationPage-loaded-content-text">
                        <p>Description: </p>
                        <p>{this.state.location.description}</p>
                        <p>Rating</p>
                        <div className="LocationPage-loaded-content-text-reviews">
                            <p>Reviews: </p>
                            <ul>
                                <li>
                                    <p>Sample review</p>
                                </li>
                                <li>
                                    <p>Sample review</p>
                                </li>
                                <li>
                                    <p>Sample review</p>
                                </li>
                                <li>
                                    <p>Sample review</p>
                                </li>
                                <li>
                                    <p>Sample review</p>
                                </li>
                                <li>
                                    <p>Sample review</p>
                                </li>
                                <li>
                                    <p>Sample review</p>
                                </li>
                                <li>
                                    <p>Sample review</p>
                                </li>
                                <li>
                                    <p>Sample review</p>
                                </li>
                                <li>
                                    <p>Sample review</p>
                                </li>
                                <li>
                                    <p>Sample review</p>
                                </li>
                                <li>
                                    <p>Sample review</p>
                                </li>
                                <li>
                                    <p>Sample review</p>
                                </li>
                                <li>
                                    <p>Sample review</p>
                                </li>
                                <li>
                                    <p>Sample review</p>
                                </li>
                                <li>
                                    <p>Sample review</p>
                                </li>
                                <li>
                                    <p>Sample review</p>
                                </li>
                                <li>
                                    <p>Sample review</p>
                                </li>
                                <li>
                                    <p>Sample review</p>
                                </li>
                                <li>
                                    <p>Sample review</p>
                                </li>
                                <li>
                                    <p>Sample review</p>
                                </li>
                                <li>
                                    <p>Sample review</p>
                                </li>
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
