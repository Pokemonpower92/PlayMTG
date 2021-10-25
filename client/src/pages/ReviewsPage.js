import { Component } from "react";
import { reviewAPI } from "../api/index";
import "../styles/LocationsPage.css";

class ReviewsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            reviews: [],
        };
    }

    componentDidMount = async () => {
        const id = this.props.match.params.id;
        await reviewAPI.getReviews(id).then((res) => {
            this.setState({
                loading: false,
                reviews: [...res.data.data],
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
            </div>
        );

        return (
            <div className="LocationsPage">
                {this.state.loading ? loading : loaded}
            </div>
        );
    }
}

export default ReviewsPage;
