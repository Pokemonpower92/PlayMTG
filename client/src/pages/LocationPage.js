import { Component } from "react";
import { withRouter } from "react-router-dom";
import api from "../api";

class LocationPage extends Component {
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
                <h1>{this.state.location.name}</h1>
                <p>{this.state.location.location}</p>
                <p>{this.state.location.description}</p>
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
