import { Component } from "react";
import { Route } from "react-router-dom";
import { HomePage, LocationsPage, LocationPage } from "./pages/index";
import MTGNavbar from "./components/MTGNavbar";

class App extends Component {
    render() {
        return (
            <div className="App">
                <MTGNavbar />
                <Route
                    path="/"
                    exact
                    render={(props) => <HomePage {...props} />}
                />
                <Route
                    path="/locations"
                    exact
                    render={(props) => <LocationsPage {...props} />}
                />
                <Route
                    path="/locations/:id"
                    exact
                    render={(props) => <LocationPage {...props} />}
                />
            </div>
        );
    }
}

export default App;
