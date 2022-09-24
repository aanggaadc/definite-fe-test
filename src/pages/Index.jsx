import React, { useState, useEffect } from "react";
import "./Index.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DealerSearch from "../components/DealerSearch";
import Widget from "../components/Widget";
import HeroImage from "../assets/hero.jpg";
import DealerCard from "../components/DealerCard";
import DealerModal from "../components/DealerModal";
import BannerImage from "../assets/banner.jpg";
import Axios from "axios";
const initialDealer = {
  company: "",
  services: [],
  address: "",
  phone: "",
  distance_km: "",
  bengkel_operational_hours: [],
  showroom_operational_hours: [],
  latitude: "",
  longitude: "",
};

export default function Index() {
  const [limitPage, setLimitPage] = useState(9);
  const [totalDealer, setTotalDealer] = useState(0);
  const [dealers, setDealers] = useState([]);
  const [province, setProvince] = useState("");
  const [location, setLocation] = useState("");
  const [dealer, setDealer] = useState(initialDealer);
  const [modalBackground, setModalBackground] = useState(false);
  const [modalContainer, setModalContainer] = useState(false);

  const getDealer = (item) => {
    setDealer({
      company: item.company,
      services: item.services,
      address: item.address,
      phone: item.phone,
      distance_km: item.distance_km,
      bengkel_operational_hours: item.bengkel_operational_hours,
      showroom_operational_hours: item.showroom_operational_hours,
      latitude: item.latitude,
      longitude: item.longitude,
    });
  };

  const showModal = (item) => {
    getDealer(item);
    document.body.style.overflow = "hidden";
    setModalBackground(true);
    setModalContainer(true);
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLocation(`${position.coords.latitude},${position.coords.longitude}`);
    });
  };
  useEffect(() => {
    const getDelers = async () => {
      try {
        const response = await Axios.get(
          `search-dealers?limit=${limitPage}&latlong=${
            province ? "" : location
          }&keyword=${province} `
        );
        getLocation();
        const dealerList = response?.data?.data;
        const totalDealer = response?.data?.total;
        setDealers(dealerList);
        setTotalDealer(totalDealer);
      } catch (error) {
        console.log(error);
      }
    };

    getDelers();
  }, [province, location, limitPage]);
  return (
    <>
      <Navbar />

      <main className="main-container">
        <section className="hero-container">
          <img src={HeroImage} alt="hero" />
        </section>

        <DealerSearch
          setProvince={setProvince}
          setLocation={setLocation}
          setLimitPage={setLimitPage}
        />

        <section className="dealers">
          <div className="dealers-container">
            {dealers.map((item, index) => {
              return (
                <div key={index} onClick={() => showModal(item)}>
                  <DealerCard
                    name={item.company}
                    address={item.address}
                    service={item.services}
                  />
                </div>
              );
            })}
          </div>

          <div className="btn-container">
            {totalDealer > limitPage && (
              <button
                className="btn-loadmore"
                onClick={() => setLimitPage(limitPage + 9)}
              >
                Load More
              </button>
            )}
          </div>
        </section>

        <section className="banner-container">
          <img src={BannerImage} alt="banner" />
        </section>
      </main>

      <Footer />

      <Widget />

      <DealerModal
        modalBackground={modalBackground}
        setModalBackground={setModalBackground}
        modalContainer={modalContainer}
        setModalContainer={setModalContainer}
        dealer={dealer}
        setDealer={setDealer}
        initialDealer={initialDealer}
      />
    </>
  );
}
