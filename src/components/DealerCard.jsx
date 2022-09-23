import React from "react";
import PinLogo from "../assets/Pin.svg";
import "./DealerCard.scss";

export default function DealerCard({ name, address, service }) {
  return (
    <div className="card-container">
      <div className="pin-container">
        <img src={PinLogo} alt="pin" />
      </div>

      <div className="card-content">
        <div className="dealer-name">{name}</div>
        <div className="dealer-address">{address}</div>
        <ul>
          {service.map((item, index) => {
            return (
              <li key={index} className="dealer-service">
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
