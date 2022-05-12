import CardHeader from "./CardHeader";
import CardTitle from "./CardTitle";
import "../css/navbar.css";
import wedding_ring from "../images/wedding_ring.png";
import Location from "./Location";
import Hotel from "./Hotel";
import Other from "./Other";
import Church from "./Church";
import { useState } from "react";
import "../css/responsive-display.css";
import "../css/style.css";

function Card() {
  const [active, setActive] = useState("church");

  const churchClick = () => setActive("church");
  const locationClick = () => setActive("location");
  const hotelClick = () => setActive("hotel");
  const otherClick = () => setActive("other");

  return (
    <div className="card-main-div">
      <CardHeader />
      <CardTitle />
      <div className="navbar-div">
        <ul className="navbar-list">
          <li className="list-item church-li" onClick={churchClick}>
            Kirken
          </li>
          <li className="list-item location-li" onClick={locationClick}>
            Lokalet
          </li>
          <li className="list-item-icon">
            <img src={wedding_ring} className="wedding-ring-icon" />
          </li>
          <li className="list-item hotel-li" onClick={hotelClick}>
            Overnatting
          </li>
          <li className="list-item other-li" onClick={otherClick}>
            Annet
          </li>
        </ul>
      </div>

      {active === "church" && <Church />}
      {active === "location" && <Location />}
      {active === "hotel" && <Hotel />}

      {active === "other" && <Other />}
    </div>
  );
}

export default Card;
