import React, { Component } from "react";
import fatalencounters from "./images/fatalencounters.gif";
import savvysapian from "./images/savvysapian.gif";
import maddash from "./images/maddash.gif";
import skillLogos from "./images/skillLogos.png";

class MyApps extends Component {
	render() {
		return (
            <div className="myApps">
                <div>
                <img src={skillLogos} className="skillLogos" alt="skillLogos" width="30%"/>
                </div>
                <br />

                <div className="appImages">
                    <div class="overlaySavvy">
                    <div class="text">HTML, CSS, JavaScript, Express.js, and React.js. API integrations include Artsy's API (JSON), Artbeat's API
                    (XML), and Google Maps API.</div>
                    </div>

                    <a href={`https://github.com/jesababon/savvysapian`} target="_blank" rel="noopener noreferrer">
                        <img src={savvysapian} className="savvyImg" alt="savvysapian" />
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