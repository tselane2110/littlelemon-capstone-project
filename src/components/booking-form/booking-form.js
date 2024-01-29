import React from "react";
import "./booking-form.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { submitAPI } from "../../BookingsAPI";

// get current date
/*
const getCurrentDate = () => {
    const today = new Date();
    const day = today.getDate().toString().padStart(2, '0');
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed
    const year = today.getFullYear();

    return `${day}-${month}-${year}`;
};*/

function BookingForm(props){
    const availableTimeSlots = props.timeSlots;
    const navigate = useNavigate();
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [numberOfGuests, setNumberOfGuests] = useState("0");
    const[occasion, setOccasion] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);

    const formData = {
        "Date" : date,
        "Time" : time,
        "Number of Guests" : numberOfGuests,
        "Occasion" : occasion
    }

    // useEffect will invoke the handleSubmit function, everytime either of the values in the dependency array changes
    useEffect(handleSubmit, [date, time, numberOfGuests, occasion]);

    function handleSubmit(){
        const formFields = (date !== "") && (time !== "") && (numberOfGuests !== "" && numberOfGuests >= 1 && numberOfGuests <= 10) && (occasion !== "");
        if (formFields === true ){
            setIsDisabled(false);
        }
        else{
            setIsDisabled(true);
        }
    }

    function formSubmission(e){
        e.preventDefault();
        // using submitAPI to validate form data or to validate successful booking
        if (submitAPI(formData) === true){
            navigate("/confirmedBooking");
        }
        else{
            alert("Please submit the form fields correctly!");
        }
    }
    return(

        <div className="booking-form">
            <div className="booking-form-size">
                <h1 className="heading-booking-form">Reserve a Table</h1>
                <form onSubmit={formSubmission}>
                    <div className="form-size">
                        <div className="input">
                            <div className="input-header">
                                <label htmlFor="res-date">Choose date</label>
                            </div>
                            <div className="input-value">
                                <input type="date" id="res-date" name="date" data-testid = "date" required
                                onChange={(e)=>{
                                    setDate(e.target.value);
                                    props.dispatch(date);
                                    handleSubmit();
                                }}
                                />
                            </div>
                        </div>
                        <div className="input">
                            <div className="input-header">
                                <label htmlFor="res-time">Available Time Slots </label>
                            </div>
                            <div className="input-value">
                                <select id="res-time " name="time" placeholder="Select Time" data-testid = "time" required onChange={(e)=>{
                                        setTime(e.target.value);
                                        handleSubmit();
                                    }}>
                                        <option value="">Select an option</option>
                                        {availableTimeSlots.map((timeSlot, index) => (
                                            <option key={index} value={timeSlot}>
                                                {timeSlot}
                                            </option>
                                        ))}
                                </select>
                            </div>
                        </div>
                        <div className="input">
                            <div className="input-header">
                                <label htmlFor="guests">Number of guests</label>
                            </div>
                            <div className="input-value">
                                <input id="numberOfGuests" type="number" name="numberOfGuests" data-testid = "numberOfGuests" value={numberOfGuests} min="1" max="10"
                                required
                                onChange={(e)=>{
                                    setNumberOfGuests(e.target.value);
                                    handleSubmit();
                                }}
                                />
                            </div>
                        </div>
                        <div className="input">
                            <div className="input-header">
                                <label htmlFor="occasion">Occasion</label>
                            </div>
                            <div className="input-value">
                                <select id="occasion" name="occasion" data-testid = "occasion" placeholder="Select Occasion" onChange={(e)=>{
                                        setOccasion(e.target.value);
                                        handleSubmit();
                                    }} required>
                                        <option value="">Select an option</option>
                                        <option>Birthday</option>
                                        <option>Anniversary</option>
                                        <option>Graduation</option>
                                        <option>Meetup</option>
                                </select>
                            </div>
                        </div>
                        <div className="submit-button">
                            <button aria-label="submit button" data-testid = "submit-btn" type="submit" value="Make Your reservation" name="submit" disabled={isDisabled}>Make Your reservation</button>
                        </div>
                        </div>
                </form>
        </div>
        </div>
    )
}

export default BookingForm;