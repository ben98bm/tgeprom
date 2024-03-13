import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/page/Home";
import Socafi from "../components/page/Home/Socafi";
import Taysir from "../components/page/Home/Taysir";
import Moustapha from "../components/page/Home/Moustapha";
import Savon from "../components/page/Home/Savon";
import Hangar from "../components/page/Home/Hangar";
import Nouhr from "../components/page/Home/Nouhr";
import Tawfekh from "../components/page/Home/Tawfekh";
class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Socafi" exact component={Socafi} />
                    <Route path="/Taysir" exact component={Taysir} />
                    <Route path="/Moustapha&Ibrahima" exact component={Moustapha} />
                    <Route path="/Savon" exact component={Savon} />
                    <Route path="/Hangar" exact component={Hangar} />
                    <Route path="/Nouhr" exact component={Nouhr} />
                    <Route path="/Tawfekh" exact component={Tawfekh} />
                </Switch>
            </Router>
        );
    }
}
export default AppRouter;