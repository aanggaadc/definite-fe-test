import React from "react";
import "./Widget.scss";
import Mira from "../assets/MIRA.png";

export default function Widget() {
  return (
    <div className="ask-mira">
      <div className="ask-mira-container">
        <div className="chatbot">
          <button className="btn-icon">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.75" clipPath="url(#clip0_888_930)">
                <path
                  d="M17 6.20857L15.7914 5L11 9.79143L6.20857 5L5 6.20857L9.79143 11L5 15.7914L6.20857 17L11 12.2086L15.7914 17L17 15.7914L12.2086 11L17 6.20857Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_888_930">
                  <rect width="22" height="22" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
          <h2>Ask Mira</h2>
          <img src={Mira} alt="mira" />
        </div>

        <div className="nav-mira">
          <ul className="nav-mira-list">
            <li className="nav-mira-item">
              <div className="list-icon">
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.5">
                    <path
                      d="M10.0835 9.99862C9.16687 9.99862 8.41687 9.24862 8.41687 8.33195C8.41687 7.41528 9.16687 6.66528 10.0835 6.66528C11.0002 6.66528 11.7502 7.41528 11.7502 8.33195C11.7502 9.24862 11.0002 9.99862 10.0835 9.99862ZM15.0835 8.49862C15.0835 5.47362 12.8752 3.33195 10.0835 3.33195C7.29187 3.33195 5.08354 5.47362 5.08354 8.49862C5.08354 10.4486 6.70854 13.032 10.0835 16.1153C13.4585 13.032 15.0835 10.4486 15.0835 8.49862ZM10.0835 1.66528C13.5835 1.66528 16.7502 4.34862 16.7502 8.49862C16.7502 11.2653 14.5252 14.5403 10.0835 18.332C5.64187 14.5403 3.41687 11.2653 3.41687 8.49862C3.41687 4.34862 6.58354 1.66528 10.0835 1.66528Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </div>

              <div className="list-title">FIND DEALER</div>
            </li>

            <li className="nav-mira-item">
              <div className="list-icon">
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.5">
                    <path
                      d="M9.24967 4.16626V8.82459H6.33301L10.083 12.5746L13.833 8.82459H10.9163V4.16626H9.24967ZM5.08301 11.6663C5.08301 14.4246 7.32467 16.6663 10.083 16.6663C12.8413 16.6663 15.083 14.4246 15.083 11.6663H13.4163C13.4163 13.5079 11.9247 14.9996 10.083 14.9996C8.24134 14.9996 6.74967 13.5079 6.74967 11.6663H5.08301Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </div>

              <div className="list-title">BROCHURE DOWNLOAD</div>
            </li>

            <li className="nav-mira-item">
              <div className="list-icon">
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.5">
                    <path
                      d="M15.8497 5.00793C15.683 4.51626 15.2163 4.16626 14.6663 4.16626H5.49967C4.94967 4.16626 4.49134 4.51626 4.31634 5.00793L2.58301 9.99959V16.6663C2.58301 17.1246 2.95801 17.4996 3.41634 17.4996H4.24967C4.70801 17.4996 5.08301 17.1246 5.08301 16.6663V15.8329H15.083V16.6663C15.083 17.1246 15.458 17.4996 15.9163 17.4996H16.7497C17.208 17.4996 17.583 17.1246 17.583 16.6663V9.99959L15.8497 5.00793ZM5.79134 5.83293H14.3663L15.2663 8.42459H4.89134L5.79134 5.83293ZM15.9163 14.1663H4.24967V9.99959H15.9163V14.1663Z"
                      fill="white"
                    />
                    <path
                      d="M6.33301 13.3337C7.02336 13.3337 7.58301 12.7741 7.58301 12.0837C7.58301 11.3934 7.02336 10.8337 6.33301 10.8337C5.64265 10.8337 5.08301 11.3934 5.08301 12.0837C5.08301 12.7741 5.64265 13.3337 6.33301 13.3337Z"
                      fill="white"
                    />
                    <path
                      d="M13.833 13.3337C14.5234 13.3337 15.083 12.7741 15.083 12.0837C15.083 11.3934 14.5234 10.8337 13.833 10.8337C13.1427 10.8337 12.583 11.3934 12.583 12.0837C12.583 12.7741 13.1427 13.3337 13.833 13.3337Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </div>

              <div className="list-title">TEST DRIVE</div>
            </li>

            <li className="nav-mira-item">
              <div className="list-icon">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.9163 0.5H2.24967C1.33301 0.5 0.583008 1.25 0.583008 2.16667V13.8333C0.583008 14.75 1.33301 15.5 2.24967 15.5H13.9163C14.833 15.5 15.583 14.75 15.583 13.8333V2.16667C15.583 1.25 14.833 0.5 13.9163 0.5ZM13.9163 13.8333H2.24967V2.16667H13.9163V13.8333Z"
                    fill="white"
                  />
                  <path
                    d="M7.45801 4.43335H3.29134V5.68335H7.45801V4.43335Z"
                    fill="white"
                  />
                  <path
                    d="M13.083 11.125H8.91634V12.375H13.083V11.125Z"
                    fill="white"
                  />
                  <path
                    d="M13.083 9.04163H8.91634V10.2916H13.083V9.04163Z"
                    fill="white"
                  />
                  <path
                    d="M4.74967 13H5.99967V11.3333H7.66634V10.0833H5.99967V8.41663H4.74967V10.0833H3.08301V11.3333H4.74967V13Z"
                    fill="white"
                  />
                  <path
                    d="M9.82467 7.125L10.9997 5.95L12.1747 7.125L13.058 6.24167L11.883 5.05833L13.058 3.88333L12.1747 3L10.9997 4.175L9.82467 3L8.94134 3.88333L10.1163 5.05833L8.94134 6.24167L9.82467 7.125Z"
                    fill="white"
                  />
                </svg>
              </div>

              <div className="list-title">CREDIT SIMULATION</div>
            </li>

            <li className="nav-mira-item">
              <div className="list-icon">
                <svg
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.5">
                    <path
                      d="M3.83301 3.75H5.33301V6H12.833V3.75H14.333V7.5H15.833V3.75C15.833 2.925 15.158 2.25 14.333 2.25H11.198C10.883 1.38 10.058 0.75 9.08301 0.75C8.10801 0.75 7.28301 1.38 6.96801 2.25H3.83301C3.00801 2.25 2.33301 2.925 2.33301 3.75V14.25C2.33301 15.075 3.00801 15.75 3.83301 15.75H8.33301V14.25H3.83301V3.75ZM9.08301 2.25C9.49551 2.25 9.83301 2.5875 9.83301 3C9.83301 3.4125 9.49551 3.75 9.08301 3.75C8.67051 3.75 8.33301 3.4125 8.33301 3C8.33301 2.5875 8.67051 2.25 9.08301 2.25Z"
                      fill="white"
                    />
                    <path
                      d="M15.833 8.625L11.7155 12.75L9.45801 10.5L8.33301 11.625L11.7155 15L16.958 9.75L15.833 8.625Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </div>

              <div className="list-title">PURCHASE CONSULTATION</div>
            </li>
          </ul>

          <div className="close-panel">
            <button className="btn-close">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.4546 1.64411L10.3559 0.54541L6.00002 4.90125L1.64417 0.54541L0.545471 1.64411L4.90132 5.99996L0.545471 10.3558L1.64417 11.4545L6.00002 7.09866L10.3559 11.4545L11.4546 10.3558L7.09872 5.99996L11.4546 1.64411Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
