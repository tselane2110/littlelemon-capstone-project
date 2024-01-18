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

        <>
        <h1 className="heading-booking-form">Reserve a Table</h1>
        <form onSubmit={formSubmission}>
            <label htmlFor="res-date">Choose date
                <input type="date" id="res-date" name="date" required
                onChange={(e)=>{
                    setDate(e.target.value);
                    props.dispatch(date);
                    handleSubmit();
                }}
                />
            </label>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time " name="time" placeholder="Select Time" required onChange={(e)=>{
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
            <label htmlFor="guests">Number of guests
                <input type="number" name="numberOfGuests" value={numberOfGuests} min="1" max="10" id="guests"
                required
                onChange={(e)=>{
                    setNumberOfGuests(e.target.value);
                    handleSubmit();
                }}
                />
            </label>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" name="occasion" placeholder="Select Occasion" onChange={(e)=>{
                    setOccasion(e.target.value);
                    handleSubmit();
                }} required>
                    <option value="">Select an option</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Graduation</option>
                    <option>Meetup</option>
            </select>
            <button type="submit" value="Make Your reservation" name="submit" disabled={isDisabled}>Make Your reservation</button>
            `Date: {date}, time: {time}, numberofGuests: {numberOfGuests}, occasion: {occasion}`
        </form>
        </>
    )
}

export default BookingForm;