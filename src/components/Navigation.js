import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation(){
    return( <div>
        <Link to="/"><button className="navi-button"><span class="line">HOME</span></button></Link>
        <Link to="/about"><button className="navi-button"><span>ABOUT</span></button></Link>
    </div>
    );
}

export default Navigation;