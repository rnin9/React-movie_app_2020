import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation(){
    return( <div className="button">
        <Link to="/"><button className="navi-button"><span className="line">HOME</span></button></Link>
        <Link to="/about"><button className="navi-button"><span>ABOUT</span></button></Link>
    </div>
    );
}

export default Navigation;