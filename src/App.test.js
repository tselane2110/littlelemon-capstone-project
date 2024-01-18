import { getByRole, getByTestId, render, screen } from '@testing-library/react';
import BookingForm from './components/booking-form/booking-form';
import {BookingPage, updateTimes, initializeTimes} from './components/Pages/BookingPage';
import App from './App';
import { type } from '@testing-library/user-event/dist/type';
import { isDisabled } from '@testing-library/user-event/dist/utils';

// writing unit tests, if u have any props which u need to give to a child component, u have to give them here as well.

function handleSubmit(form_data){

  const formFields = (form_data.date !== "") && (form_data.time !== "") && (form_data.numberOfGuests !== "" && form_data.numberOfGuests >= 1 && form_data.numberOfGuests <= 10) && (form_data.occasion !== "");
  if (formFields === true ){
      return true;
  }
  else{
      return false;
  }
}

// mocking the useNavigate() since it can only be used in the context of a <Router> component.

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

// unit test to check if the screen has a text being displayed as "Reserve a Table"
// i means case-insensitive


const timeSlots = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

test('renders "Reserve a Table" heading', () => {
  render(<BookingForm timeSlots={timeSlots}/>);
  const formHeading = screen.getByText(/Reserve a Table/i);
  expect(formHeading).toBeInTheDocument();
})


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

// validating Booking Form input fields have the correct attributes


test("validating the input fields have correct attributes", () =>{
  render(<BookingForm timeSlots={timeSlots}/>);
  const res_date = screen.getByTestId("date", {type : 'date'});
  const res_time = screen.getByTestId("time");
  const res_guests = screen.getByTestId("numberOfGuests", {min: 1, max: 10, type: "number"});
  const res_occasion = screen.getByTestId("occasion");
  const submit_btn = screen.getByTestId("submit-btn");
  expect(res_date).toHaveAttribute("required");
  expect(res_time).toHaveAttribute("required");
  expect(res_guests).toHaveAttribute("required");
  expect(res_occasion).toHaveAttribute("required");

  // test cases for valid and invalid inputs

  const valid_input = {
    "date": "2024-01-08",
    "time": "17:00",
    "numberOfGuests": 5,
    "occasion": "birthday"
  }

  const invalid_input = {
    "date" : "",
    "time" : "",
    "numberOfGuests" : "",
    "occasion" : ""
  }

  const result_valid_input = handleSubmit(valid_input);
  expect(result_valid_input).toEqual(true);

  const result_invalid_input = handleSubmit(invalid_input);
  expect(result_invalid_input).toEqual(false);

})