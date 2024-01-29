import React from "react";
import { Link } from "react-router-dom";
import "./Menu-Nav.css"

function MenuNav(props){
    const menu = props.menu;
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };
    return(
        <div className="menu-nav">
            <div className="menu-nav-size">
                <Link to="/orderOnline#appetizers" className="menu-item-link" onClick={() => scrollToSection(menu[0])}>Appetizers</Link>
                <Link to="/orderOnline#salads" className="menu-item-link" onClick={() => scrollToSection(menu[1])}>Salads</Link>
                <Link to="/orderOnline#main-courses" className="menu-item-link" onClick={() => scrollToSection(menu[2])}>Main Course</Link>
                <Link to="/orderOnline#sides" className="menu-item-link" onClick={() => scrollToSection(menu[3])}>Sides</Link>
                <Link to="/orderOnline#deserts" className="menu-item-link" onClick={() => scrollToSection(menu[4])}>Deserts</Link>
                <Link to="/orderOnline#beverages" className="menu-item-link" onClick={() => scrollToSection(menu[5])}>Beverages</Link>
            </div>
        </div>
    )
}

export default MenuNav;