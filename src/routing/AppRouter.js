import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/page/Home";
import Projects from "../components/Project";
class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Projet" exact component={Projects} />
                </Switch>
            </Router>
        );
    }
}
export default AppRouter;