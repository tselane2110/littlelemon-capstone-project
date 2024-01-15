import React from "react";
import ReviewBox from "./Rating";
import r1 from "../icons_assets/r1.png";

function TestimonialCard(props){
    return(
        <div className="testimonial-card">
            <ReviewBox rating={props.rating}/>
            <div className="reviewer-info">
                <img src={r1} alt="SamSmith-img"></img>
                <h3>Sam Smith</h3>
            </div>
            <div className="review">
                <p>{props.review}</p>
            </div>
        </div>
    )
}

export default TestimonialCard;