import { Component } from "react";
import api from "../api";

class LocationEditPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            location: [],
        };
    }

    componentDidMount = async () => {
        const id = this.props.match.params.id;

        await api.getLocationById(id).then((res) => {
            this.setState({
                loading: false,
                location: res.data.data,
            });
        });
    };

    render () {
        // Render a loading screen if necessary.
        const loading = (
            <div className="LocationEditPage-loading">
                <h1>Loading</h1>
            </div>
        );

        const loaded = (
            <div className="LocationEditPage-loaded">
                <p>Edit Page for {this.state.location.name}</p>
            </div>
        );
        return (
            <div className="LocationEditPage">
                { this.state.loading ? loading : loaded }
            </div>
        );
    }
}

export default LocationEditPage;