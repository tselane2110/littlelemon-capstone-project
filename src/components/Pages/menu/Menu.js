import React from "react";
import "./Menu.css";
import Nav from "../../nav/Nav";
import Footer from "../../footer/Footer";

function Menu(){
    return(
        <>
        <Nav/>
        <section className="menuPage">
            <div className="menuPage-size">
                <div className="menuPage-header">
                    <h1>Menu</h1>
                </div>
                <div className="menuPage-body">
                    <div className="menu-category">
                        <div className="menu-category-header">
                            <h1>Appetizers</h1>
                        </div>
                        <div className="menu-category-list">
                            <ul>
                                <li>Hummus Trio</li>
                                <li>Dolma Stuffed Leaves</li>
                                <li>Bruschetta</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="menuPage-body">
                    <div className="menu-category">
                        <div className="menu-category-header">
                            <h1>Salads</h1>
                        </div>
                        <div className="menu-category-list">
                            <ul>
                                <li>Greek Salad</li>
                                <li>Quinoa Salad</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="menuPage-body">
                    <div className="menu-category">
                        <div className="menu-category-header">
                            <h1>Main Course</h1>
                        </div>
                        <div className="menu-category-list">
                            <ul>
                                <li>Chicken Souvlaki</li>
                                <li>Moussaka</li>
                                <li>Grilled Sea Bass</li>
                                <li>Vegetarian Platter</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="menuPage-body">
                    <div className="menu-category">
                        <div className="menu-category-header">
                            <h1>Side Dishes</h1>
                        </div>
                        <div className="menu-category-list">
                            <ul>
                                <li>Roasted Lemon-Garlic Potatoes</li>
                                <li>Couscous with Roasted Vegetables</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="menuPage-body">
                    <div className="menu-category">
                        <div className="menu-category-header">
                            <h1>Deserts</h1>
                        </div>
                        <div className="menu-category-list">
                            <ul>
                                <li>Baklava</li>
                                <li>Orange Blossom Rice Pudding</li>
                                <li>Lemon Desert</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="menuPage-body">
                    <div className="menu-category">
                        <div className="menu-category-header">
                            <h1>Beverages</h1>
                        </div>
                        <div className="menu-category-list">
                            <ul>
                                <li>Minty Lemonade</li>
                                <li>Mediterranean Iced Tea</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    )
}

export default Menu;