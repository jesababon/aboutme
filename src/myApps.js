import React, { Component } from "react";
import fatalencounters from "./images/fatalencounters.gif";
import savvysapian from "./images/savvysapian.gif";
import maddash from "./images/maddash.gif";

class MyApps extends Component {
	render() {
		return (
            <div className="myApps">
            <div><h2>Check Out My Apps</h2></div>
            <br />
            <div className="appImages">

            <a href={`https://github.com/jesababon/savvysapian`} target="_blank" rel="noopener noreferrer">
                <img src={savvysapian} className="appImg" alt="savvysapian" />
            </a>

            <a href={`https://github.com/jesababon/fea`} target="_blank" rel="noopener noreferrer">
                <img src={fatalencounters} className="appImg" alt="fatalencounters" />
            </a>
                
            
            <a href={`https://github.com/jesababon/maddash`} target="_blank" rel="noopener noreferrer">
                <img src={maddash} className="appImg" alt="madDash" />
            </a>    
            </div>
        
        </div>
		);
	}
}

export default MyApps;