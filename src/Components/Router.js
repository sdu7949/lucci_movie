import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "Routes/Home";
import Movie from "Routes/Movie";
import Notice from "Routes/Notice";
import Header from "Components/Header";

export default () => (
    <Router>
        <>
        <Header />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/movie" exact component={Movie} />
            <Route path="/movie/popular" render={() => <h1>Popular</h1>} />
            <Route path="/movie/now" render={() => <h1>Now</h1>} />
            <Route path="/notice" exact component={Notice} />
            <Route path="/slide" exact component={Home} />
            <Redirect from="*" to="/" />

        </Switch>
        </>

    </Router>
)