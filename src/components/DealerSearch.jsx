import React, { useEffect, useState } from "react";
import Axios from "axios";
import SearchIcon from "../assets/Search.svg";
import "./DealerSearch.scss";

export default function DealerSearch({ setDealer, setLocation, setLimitPage }) {
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
            <img src={SearchIcon} alt="search" />
          </div>

          <select
            onChange={(e) => {
              setDealer(e.target.value);
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
