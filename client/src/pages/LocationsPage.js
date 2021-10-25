import { Component } from "react";
import LocationCard from "../components/LocationCard";
import { locationAPI } from "../api/index";
import "../styles/LocationsPage.css";

class LocationsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            locations: [],
        };
    }

    componentDidMount = async () => {
        await locationAPI.getLocations().then((res) => {
            this.setState({
                loading: false,
                locations: [...res.data.data],
            });
        });
    };

    render() {
        // Render a loading screen if necessary.
        const loading = (
            <div className="LocationsPage-loading">
                <h1>Loading</h1>
            </div>
        );

        // Render location components eventually.
        // For now render links.
        const loaded = (
            <div className="LocationsPage-loaded">
                <h1>All Locations</h1>
                <ul>
                    {this.state.locations.map((l) => {
                        return (
                            <li key={l._id}>
                                <LocationCard
                                    className="LocationsPage-card"
                                    location={l}
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>
        );

        return (
            <div className="LocationsPage">
                {this.state.loading ? loading : loaded}
            </div>
        );
    }
}

export default LocationsPage;
