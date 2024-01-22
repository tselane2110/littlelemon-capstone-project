import React from "react";
import { Link } from "react-router-dom";
import "./Menu-Nav.css"

function MenuNav(props){
    return(
        <div className="menu-nav">
            <div className="menu-nav-size">
                <Link to={props.menu[0]} className="menu-item-link">Appetizers</Link>
                <Link to={props.menu[1]} className="menu-item-link">Salads</Link>
                <Link to={props.menu[2]} className="menu-item-link">Main Course</Link>
                <Link to={props.menu[3]} className="menu-item-link">Sides</Link>
                <Link to={props.menu[4]} className="menu-item-link">Deserts</Link>
                <Link to={props.menu[5]} className="menu-item-link">Beverages</Link>
            </div>
        </div>
    )
}

export default MenuNav;