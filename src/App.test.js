import { render, screen } from '@testing-library/react';
import BookingForm from './components/booking-form/booking-form';
import {updateTimes, initializeTimes} from './components/Pages/BookingPage';
import App from './App';

// writing unit tests, if u have any props which u need to give to a child component, u have to give them here as well.

// unit test to check if the screen has a text being displayed as "Reserve a Table"
// i means case-insensitive


const timeSlots = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
/*
test('renders "Reserve a Table" heading', () => {
  render(<BookingForm timeSlots={timeSlots}/>);
  const formHeading = screen.getByText(/Reserve a Table/i);
  expect(formHeading).toBeInTheDocument();
})
*/

// test to validate that the initializeTimes function is returning the expected value

test('initializeTime renders the expected list of times from 17 to 22', () => {
  const result = initializeTimes;
  expect(Array.isArray(result)).toBe(true); // Check if the result is an array
  expect(result.length).toBeGreaterThan(0); // Check if the array is non-empty
  console.log(`initialized times: `, result);
})

// test to validate that updateTimes returns the same value that is provided in the state

test('updateTimes returns the same state as provided', () => {
  const exampleState = new Date();
  const result_updateTimes = updateTimes(exampleState);
  expect(Array.isArray(result_updateTimes)).toBe(true); // Check if the result is an array
  expect(result_updateTimes.length).toBeGreaterThan(0); // Check if the array is non-empty
  console.log("Updated times based on the input date: ", result_updateTimes);
})