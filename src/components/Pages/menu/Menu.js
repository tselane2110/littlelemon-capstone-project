import React from "react";
import "./Menu.css";
import Nav from "../../nav/Nav";
import Footer from "../../footer/Footer";
import MenuNav from "../../nav/Menu-Nav";
import Card from "../../card/Card";

function Menu(){
    return(
        <section className="Menu">
            <div className="Menu-size">
                <Nav/>
                <MenuNav menu={["#appetizers, #salads, #maincourse, #sides, #deserts, #beverages"]}/>
                <Footer/>
            </div>
        </section>
    )
}

export default Menu;