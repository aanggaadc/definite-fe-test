import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./DealerSearch.scss";

export default function DealerSearch({ setProvince, setLimitPage }) {
  const [provinces, setProvinces] = useState([]);
  useEffect(() => {
    const getProvince = async () => {
      try {
        const response = await Axios.get("get-provinces");
        const provinceList = response?.data;
        setProvinces(provinceList);
      } catch (error) {
        console.log(error);
      }
    };

    getProvince();
  }, []);
  return (
    <section className="dealer-search-container">
      <div className="dealer-search-left">
        <h2>FIND DEALER</h2>
        <p>Discover the nearest in your area</p>

        <div className="select-container">
          <div className="icon-container">
            <svg
              width="22"
              height="23"
              viewBox="0 0 22 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.75">
                <path
                  d="M14.2083 13.0833H13.4842L13.2275 12.8358C14.1258 11.7908 14.6667 10.4342 14.6667 8.95833C14.6667 5.6675 11.9992 3 8.70833 3C5.4175 3 2.75 5.6675 2.75 8.95833C2.75 12.2492 5.4175 14.9167 8.70833 14.9167C10.1842 14.9167 11.5408 14.3758 12.5858 13.4775L12.8333 13.7342V14.4583L17.4167 19.0325L18.7825 17.6667L14.2083 13.0833ZM8.70833 13.0833C6.42583 13.0833 4.58333 11.2408 4.58333 8.95833C4.58333 6.67583 6.42583 4.83333 8.70833 4.83333C10.9908 4.83333 12.8333 6.67583 12.8333 8.95833C12.8333 11.2408 10.9908 13.0833 8.70833 13.0833Z"
                  fill="#9B9B9B"
                />
              </g>
            </svg>
          </div>

          <select
            onChange={(e) => {
              setProvince(e.target.value);
              setLimitPage(9);
            }}
          >
            <option value="">Pilih Lokasi Terdekat</option>
            {provinces.map((item, index) => {
              return (
                <option key={index} value={item.name}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="dealer-search-right">
        Cari dan kunjungi dealer resmi Mitsubishi terdekat di kota Anda untuk
        mendapatkan pelayanan terbaik terkait dengan kendaraan dari Mitsubishi
        Motors Indonesia.
      </div>
    </section>
  );
}
