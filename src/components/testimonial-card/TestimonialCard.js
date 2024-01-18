import React from "react";
import ReviewBox from "../rating/Rating";
import "./testimonialcard.css";

function TestimonialCard(props){
    return(
        <div className="testimonial-card">
            <div className="review-header">
                <div className="r-img">
                    <img src={props.img} alt="SamSmith-img"></img>
                </div>
                <div className="reviewer-info">
                    <h3>{props.name}</h3>
                    <ReviewBox rating={props.rating}/>
                </div>
            </div>
            <div className="review">
                <p>{props.review}</p>
            </div>
        </div>
    )
}

export default TestimonialCard;