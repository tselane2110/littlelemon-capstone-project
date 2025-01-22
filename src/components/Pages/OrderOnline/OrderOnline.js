import React from "react";
import "./OrderOnline.css";
import Nav from "../../nav/Nav";
import Footer from "../../footer/Footer";
import MenuNav from "../../nav/Menu-Nav";
import Card from "../../card/Card";
import GreekSalad from '../../../icons_assets/greek salad.jpg';
import HummusTrio from "../../../icons_assets/hummus-trio.jpg"
import Bruchetta from "../../../icons_assets/bruchetta.svg";
import QuinoaSalad from "../../../icons_assets/quinoa-salad.jpg";
import ChickenSouvlaki from "../../../icons_assets/Chicken-souvlaki.jpg";
import Moussaka from "../../../icons_assets/moussaka.jpg";
import GrilledSeaBass from "../../../icons_assets/grilled_seabass.png";
import DolmaStuffedGrapeLeaves from "../../../icons_assets/dolma_stuffed_leaves.png";
import VegeterianPlatter from "../../../icons_assets/falafel-platter.jpg";
import RoastedVegetableCouscous from "../../../icons_assets/roasted-vegetable-couscous.jpg";
import RoastedLemonGarlicPotatoes from "../../../icons_assets/Lemon_Potatoes_Garlic_Oregano.jpg";
import lemonDessert from "../../../icons_assets/lemon dessert.jpg";
import Baklava from "../../../icons_assets/baklava.png";
import OrangeBlossomRicePudding from "../../../icons_assets/rice_puddding.png";
import Lemonade from "../../../icons_assets/minty_lemonade.jpg";
import IcedTea from "../../../icons_assets/iced_tea.png";

function OrderOnline(){
    const sectionIds = ["appetizers", "salads", "maincourse", "sides", "deserts", "beverages"];
    return(
        <section className="Menu">
            <div className="Menu-size">
                <Nav/>
                <MenuNav menu={sectionIds}/>
                <section className="appetizers menu-section" id={sectionIds[0]}>
                    <div className="menu-section-size">
                        <div className="menu-section-header">
                            <h1>Appetizers</h1>
                        </div>
                        <div className="menu-section-body">
                            <Card
                                img = {HummusTrio}
                                title = "Hummus Trio"
                                price = "$10.99"
                                about = "Classic chickpea hummus, Roasted red pepper hummus, Olive tapenade hummus, Served with warm pita bread."
                                link = ""
                                />
                            <Card
                                img = {DolmaStuffedGrapeLeaves}
                                title = "Dolma Stuffed Leaves"
                                price = "$9.99"
                                about = "Grape leaves stuffed with seasoned rice, pine nuts, and fresh herbs. Served with tzatziki sauce"
                                link = ""
                                />
                            <Card
                                img = {Bruchetta}
                                title = "Bruschetta"
                                price = "$8.99"
                                about = "Diced tomatoes, feta cheese, Kalamata olives, and basil on toasted ciabatta. Drizzled with extra virgin olive oil."
                                link = ""
                                />
                        </div>
                    </div>
                </section>

                <section className="salads menu-section" id={sectionIds[1]}>
                    <div className="menu-section-size">
                        <div className="menu-section-header">
                            <h1>Salads</h1>
                        </div>
                        <div className="menu-section-body">
                            <Card
                                img = {GreekSalad}
                                title = "Greek Salad"
                                price = "$12.99"
                                about = "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "
                                link = ""
                                />
                            <Card
                                img = {QuinoaSalad}
                                title = "Quinoa Salad"
                                price = "$13.99"
                                about = "Quinoa, cherry tomatoes, cucumber, red onion, feta, and fresh herbs. Dressed with a lemon-tahini dressing."
                                link = ""
                            />
                        </div>
                    </div>
                </section>

                <section className="main-course menu-section" id={sectionIds[2]}>
                    <div className="menu-section-size">
                        <div className="menu-section-header">
                            <h1>Main Course</h1>
                        </div>
                        <div className="menu-section-body">
                            <Card
                                img = {ChickenSouvlaki}
                                title = "Chicken Souvlaki"
                                price = "$16.99"
                                about = "Grilled marinated chicken skewers. Served with lemon-infused rice and tzatziki sauce."
                                link = ""
                                />
                            <Card
                                img = {Moussaka}
                                title = "Moussaka"
                                price = "$18.99"
                                about = "Layers of eggplant, seasoned ground lamb, and béchamel sauce. Baked to perfection."
                                link = ""
                            />
                            <Card
                                img = {GrilledSeaBass}
                                title = "Grilled Sea Bass"
                                price = "$18.99"
                                about = "Fresh sea bass marinated in herbs and grilled. Served with lemon-caper sauce."
                                link = ""
                            />
                            <Card
                                img = {VegeterianPlatter}
                                title = "Vegetarian Platter"
                                price = "$15.99"
                                about = "Falafel, stuffed grape leaves, hummus, tabbouleh, and tzatziki. Accompanied by warm pita bread."
                                link = ""
                            />
                        </div>
                    </div>
                </section>
                <section className="sides menu-section" id={sectionIds[3]}>
                    <div className="menu-section-size">
                        <div className="menu-section-header">
                            <h1>Side Dishes</h1>
                        </div>
                        <div className="menu-section-body">
                            <Card
                                img = {RoastedLemonGarlicPotatoes}
                                title = "Roasted Lemon-Garlic Potatoes"
                                price = "$5.99"
                                about = "Roasted baby potatoes with lemon, garlic, herbs, extra virgin olive oil, and lots of dry oregano."
                                link = ""
                                />
                            <Card
                                img = {RoastedVegetableCouscous}
                                title = "Couscous with Roasted Vegetables"
                                price = "$7.99"
                                about = "Fluffy couscous with a mix of roasted colorful trio of zucchini, yellow squash and bell peppers."
                                link = ""
                            />
                        </div>
                    </div>
                </section>
                <section className="deserts menu-section" id={sectionIds[4]}>
                    <div className="menu-section-size">
                        <div className="menu-section-header">
                            <h1>Desserts</h1>
                        </div>
                        <div className="menu-section-body">
                            <Card
                                img = {Baklava}
                                title = "Baklava"
                                price = "$5.99"
                                about = "Layers of phyllo dough, walnuts, and honey."
                                link = ""
                                />
                            <Card
                                img = {OrangeBlossomRicePudding}
                                title = "Orange Blossom Rice Pudding"
                                price = "$6.99"
                                about = "Creamy rice pudding infused with orange blossom water."
                                link = ""
                            />
                            <Card
                                img = {lemonDessert}
                                title = "Lemon Dessert"
                                price = "$5.00"
                                about = "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
                                link = ""
                            />
                        </div>
                    </div>
                </section>
                <section className="beverages menu-section" id={sectionIds[5]}>
                    <div className="menu-section-size">
                        <div className="menu-section-header">
                            <h1>Beverages</h1>
                        </div>
                        <div className="menu-section-body">
                            <Card
                                img = {Lemonade}
                                title = "Minty lemonade"
                                price = "$4.99"
                                about = "Freshly squeezed lemonade with a hint of mint."
                                link = ""
                                />
                            <Card
                                img = {IcedTea}
                                title = "Mediterranean Iced Tea"
                                price = "$4.99"
                                about = "Herbal tea infused with citrus and served over ice."
                                link = ""
                            />
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
        </section>
    )
}

export default OrderOnline;
