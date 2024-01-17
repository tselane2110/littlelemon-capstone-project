import React from "react";
import BookingForm from "./booking-form";
import NavBar from "./Nav";
import Footer from "./Footer";
import { useReducer } from 'react';
import { fetchAPI } from "../BookingsAPI";

/*export const updateTimes = (state, action) =>{
    return fetchAPI(state);
  }*/

export const updateTimes = (state, action) => {
    return fetchAPI(state);
}

export const  initializeTimes = fetchAPI(new Date());

/*
export const initializeTimes = () => {
    fetchAPI(new Date());
}
*/

function BookingPage(){

    // const [state, dispatch] = useReducer(updateTimes, initializeTimes());
    const [state, dispatch] = useReducer(updateTimes, initializeTimes);

    return(
        <div>
            <NavBar/>
            <BookingForm timeSlots = {state} dispatch = {dispatch}/>
            <Footer/>
        </div>
    )

}

export default BookingPage;