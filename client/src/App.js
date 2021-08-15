import { Component } from "react";
import { Route } from "react-router-dom";
import { HomePage, LocationsPage, LocationPage, LocationEditPage } from "./pages/index";
import MTGNavbar from "./components/MTGNavbar";
import MTGFooter from "./components/MTGFooter";
import './styles/App.css'

class App extends Component {
    render() {
        return (
            <div className="App">
                <MTGNavbar />
                <div className="App-homepage">
                    <Route
                        path="/"
                        exact
                        render={(props) => <HomePage {...props} />}
                    />
                </div>
                <div className="App-main-content">
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
                    <Route
                        path="/locations/:id/edit"
                        exact
                        render={(props) => <LocationEditPage {...props} />}
                    />
                </div>
                <MTGFooter />
            </div>
        );
    }
}

export default App;
