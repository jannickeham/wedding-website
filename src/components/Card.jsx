import CardHeader from "./CardHeader";
import CardTitle from "./CardTitle";
import '../css/navbar.css';
import wedding_ring from '../images/wedding_ring.png';
import Location from "./Location";
import Hotel from "./Hotel"
import Other from "./Other";
import Church from "./Church"
import { useState } from "react";







function Card(){
    const [active, setActive] = useState("church");

    const churchClick = () => setActive("church")
    const locationClick = () => setActive("location")
    const hotelClick = () => setActive("hotel")
    const otherClick = () => setActive("other")

    return(
        <> 
        <div style={{
            backgroundColor: "#FCFCFC",
            width: "auto",
            position: "absolute",
            left: "50%",
            top: "0",
            transform: "translate(-50%, 0)",
            height: "auto",
            boxShadow:"2px 3px 6px -1px rgba(135,135,135,0.69)"
            }} >
            <CardHeader/>
            <CardTitle/>
            <div className='navbar-div'>
                <ul className="navbar-list">
                    <li className="list-item" onClick={churchClick}>Kirken</li>
                    <li className="list-item" onClick={locationClick}>Lokalet</li>
                    <li className="list-item-icon"><img src={wedding_ring} className="wedding-ring-icon"/></li>
                    <li className="list-item" onClick={hotelClick}>Overnatting</li>
                    <li className="list-item" onClick={otherClick}>Annet</li>
                </ul>
            </div>

            {active === "church" && (
            
            <Church/>
        
            )}
            {active === "location" && (
            
            <Location/>
        
            )}
            {active === "hotel" && (
            
            <Hotel/>
        
            )}

            {active === "other" && (
            
            <Other/>
        
            )}

            
        </div>
            
        </>
    )
}

export default Card;