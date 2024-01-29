import React from "react";
import "./Timings.css";


function Timings(){
    return(
        <section className="timings">
            <div className="timings-size">
                <div className="timings-header">
                    <h1>Opening Hours</h1>
                </div>
                <div className="timings-body">
                    <table>
                        <tr className="table-header">
                            <th>Days</th>
                            <th>Breakfast</th>
                            <th>Brunch</th>
                            <th>Lunch</th>
                            <th>Dinner</th>
                        </tr>
                        <tr className="table-data">
                            <td>Monday to Thursday</td>
                            <td>7:00AM - 10:30AM</td>
                            <td>-</td>
                            <td>11:30AM - 2:30PM</td>
                            <td>5:30PM - 9:00PM</td>
                        </tr>
                        <tr className="table-data">
                            <td>Friday & Saturday</td>
                            <td>7:00AM - 11:00AM</td>
                            <td>-</td>
                            <td>12:00PM - 3:00PM</td>
                            <td>6:00PM - 10:00PM</td>
                        </tr>
                        <tr className="table-data">
                            <td>Sunday</td>
                            <td>-</td>
                            <td>9:00AM - 2:00PM</td>
                            <td>-</td>
                            <td>4:00PM - 8:00PM</td>
                        </tr>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Timings;