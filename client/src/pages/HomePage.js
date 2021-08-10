import { Component } from "react";
import "../styles/HomePage.css";

class HomePage extends Component {
    render() {
        return (
            <div className="HomePage">
                <div className="HomePage-text">
                    <h1>PlayMTG</h1>
                    <p>Find and share places to play Magic: the Gathering!</p>
                </div>
            </div>
        );
    }
}

export default HomePage;
