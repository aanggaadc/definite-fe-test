import React from "react";
import "./DealerModal.scss";

export default function DelerModal({ dealer, setDealer, initialDealer }) {
  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="modal-header">
          <ul>
            {dealer?.services.map((item, index) => {
              return (
                <li key={index} className="dealer-service">
                  {item}
                </li>
              );
            })}
          </ul>
          <button onClick={() => setDealer(initialDealer)} className="btn-icon">
            <svg
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2_1606)">
                <path
                  d="M24.7436 9.90956L22.9857 8.15164L16.0163 15.121L9.04698 8.15164L7.28906 9.90956L14.2584 16.8789L7.28906 23.8483L9.04698 25.6062L16.0163 18.6368L22.9857 25.6062L24.7436 23.8483L17.7743 16.8789L24.7436 9.90956Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_2_1606">
                  <rect
                    width="32"
                    height="32"
                    fill="white"
                    transform="translate(0.0163574 0.878906)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>

        <div className="dealer-name">{dealer.company}</div>
        <div className="dealer-address" style={{ marginBottom: "8px" }}>
          {dealer?.address}{" "}
          <span
            style={{
              marginLeft: "100px",
              fontWeight: 400,
              fontSize: "16px",
              color: "#9B9B9B",
            }}
          >
            {dealer?.distance_km} km
          </span>
        </div>
        <a className="dealer-direction" href="/">
          <svg
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.6278 2.45547L11.5406 2.47181L8.63331 3.59881L5.36664 2.45547L2.29598 3.48992C2.18164 3.52803 2.09998 3.62603 2.09998 3.75125V11.9833C2.09998 12.1357 2.21975 12.2555 2.3722 12.2555L2.45931 12.2391L5.36664 11.1121L8.63331 12.2555L11.704 11.221C11.8183 11.1829 11.9 11.0849 11.9 10.9597V2.7277C11.9 2.57525 11.7802 2.45547 11.6278 2.45547ZM8.63331 11.1666L5.36664 10.0178V3.54436L8.63331 4.69314V11.1666Z"
              fill="black"
            />
          </svg>
          VIEW DIRECTION
        </a>
        <div className="button-container">
          <button className="test-drive">REQEUST TEST DRIVE</button>
          <button className="book-service">BOOK SERVICE</button>
        </div>

        <div
          style={{
            width: "100%",
            height: "1px",
            background: "#9B9B9B",
            marginBottom: "30px",
          }}
        />

        <div className="operational-container">
          <div className="operational-detail">
            <h2 className="operational-detail-header">Shoroom</h2>
            <ul>
              {dealer?.showroom_operational_hours.map((item, index) => {
                return (
                  <li className="operational-list" key={index}>
                    <div className="days"> {item.days}</div>
                    <div className="hourse"> {item.hours}</div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="operational-detail">
            <h2 className="operational-detail-header">Bengkel</h2>
            <ul>
              {dealer?.bengkel_operational_hours.map((item, index) => {
                return (
                  <li className="operational-list" key={index}>
                    <div className="days"> {item.days}</div>
                    <div className="hourse"> {item.hours}</div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="contact-container">
          <h2 className="contact-header">Contact</h2>
          <div className="phone">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.41333 11.5488C9.37333 13.4355 10.92 14.9755 12.8067 15.9421L14.2733 14.4755C14.4533 14.2955 14.72 14.2355 14.9533 14.3155C15.7 14.5621 16.5067 14.6955 17.3333 14.6955C17.7 14.6955 18 14.9955 18 15.3621V17.6888C18 18.0555 17.7 18.3555 17.3333 18.3555C11.0733 18.3555 6 13.2821 6 7.02214C6 6.65547 6.3 6.35547 6.66667 6.35547H9C9.36667 6.35547 9.66667 6.65547 9.66667 7.02214C9.66667 7.85547 9.8 8.65547 10.0467 9.40214C10.12 9.63547 10.0667 9.89547 9.88 10.0821L8.41333 11.5488Z"
                fill="black"
              />
            </svg>

            <div className="phone-list">{dealer.phone}</div>
          </div>
          <div className="email">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.76 6.35547H6.24005C5.44805 6.35547 4.80725 7.00347 4.80725 7.79547L4.80005 16.4355C4.80005 17.2275 5.44805 17.8755 6.24005 17.8755H17.76C18.552 17.8755 19.2 17.2275 19.2 16.4355V7.79547C19.2 7.00347 18.552 6.35547 17.76 6.35547ZM17.76 16.4355H6.24005V9.23547L12 12.8355L17.76 9.23547V16.4355ZM12 11.3955L6.24005 7.79547H17.76L12 11.3955Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
