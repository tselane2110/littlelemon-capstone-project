import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BookingPage from "./components/Pages/booking-page/BookingPage";
import ConfirmedBooking from "./components/Pages/confirmed-booking/ConfirmedBooking";
import OrderOnline from "./components/Pages/OrderOnline/OrderOnline";
import Login from "./components/Pages/Login/Login";
import AboutPage from "./components/Pages/about/AboutPage";
import Menu from "./components/Pages/menu/Menu";
import Cart from "./components/Pages/cart/Cart";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/bookingPage",
    element: <BookingPage/>
  },
  {
    path: "/confirmedBooking",
    element: <ConfirmedBooking/>
  },
  {
    path: "/orderOnline",
    element: <OrderOnline/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/about",
    element: <AboutPage/>
  },
  {
    path: "/menu",
    element: <Menu/>
  },
  {
    path: "/cart",
    element: <Cart/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
