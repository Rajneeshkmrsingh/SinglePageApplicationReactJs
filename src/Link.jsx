import React from "react";
import { Switch ,Route, Redirect } from "react-router";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Service from "./Service";
import Navbar from "./Navbar"
import Footer from "./Footer";



const Link = ()=>{
    return (
        <>
        <Navbar />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/service" component={Service}/>
                <Route exact path="/Contact" component={Contact}/>
                <Redirect to="/" />
            </Switch>
        <Footer />
        </>
    )
};
export default Link