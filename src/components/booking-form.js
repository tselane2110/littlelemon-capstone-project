import React from "react";
import "./booking-form.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { submitAPI } from "../BookingsAPI";

// get current date

const getCurrentDate = () => {
    const today = new Date();
    const day = today.getDate().toString().padStart(2, '0');
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed
    const year = today.getFullYear();

    return `${day}-${month}-${year}`;
};

function BookingForm(props){
    const availableTimeSlots = props.timeSlots;
    const navigate = useNavigate();
    const [date, setDate] = useState(getCurrentDate());
    const [time, setTime] = useState(availableTimeSlots[0]);
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const[occasion, setOccasion] = useState("Meetup");

    const formData = {
        "Date" : date,
        "Time" : time,
        "Number of Guests" : numberOfGuests,
        "Occasion" : occasion
    }

    function formSubmission(e){
        e.preventDefault();
        console.log(formData);

        // using submitAPI to validate form data or to validate successful booking
        const result = submitAPI(formData);

        if (result===true){
            navigate("/confirmedBooking");
        }
    }
    return(

        <>
        <h1 className="heading-booking-form">Reserve a Table</h1>
        <form onSubmit={formSubmission}>
            <label htmlFor="res-date">Choose date
                <input type="date" id="res-date" name="date"
                onChange={(e)=>{
                    setDate(e.target.value);
                    props.dispatch(date);
                }}
                />
            </label>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time " name="time" onChange={(e)=>{
                    setTime(e.target.value);
                }}>
                    {availableTimeSlots.map((timeSlot, index) => (
                        <option key={index} value={timeSlot}>
                            {timeSlot}
                        </option>
                     ))}

            </select>
            <label htmlFor="guests">Number of guests
                <input type="number" name="numberOfGuests" placeholder="1" min="1" max="10" id="guests"
                onChange={(e)=>{
                    setNumberOfGuests(e.target.value);
                }}
                />
            </label>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" name="occasion" onChange={(e)=>{
                    setOccasion(e.target.value);
                }}>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Graduation</option>
                <option>Meetup</option>
            </select>
            <button type="submit" value="Make Your reservation" name="submit">Make Your reservation</button>
            `Date: {date}, time: {time}, numberofGuests: {numberOfGuests}, occasion: {occasion}`
        </form>
        </>
    )
}

export default BookingForm;