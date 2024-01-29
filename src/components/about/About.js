import React from "react";
import "./About.css";
import chefs1 from '../../icons_assets/Mario and Adrian A.jpg';
import chefs2 from "../../icons_assets/Mario and Adrian b.jpg";

function About(){
    return(
        <section className="about-little-lemon">
            <div className="about-ll-size">
                <div className="info">
                    <div className="header">
                        <h1>Little Lemon</h1>
                        <h3>Chicago</h3>
                    </div>
                    <div className="about">
                        <p>Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.</p>
                    </div>
                </div>
                <div className="Mario-Adrian">
                    <div className="img1">
                        <img src={chefs1} alt="Mario And Adrian" ></img>
                    </div>
                    <div className="img2">
                        <img src={chefs2} alt="Adrian And Mario" ></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;