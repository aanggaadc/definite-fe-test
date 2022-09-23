import React, { useState, useEffect } from "react";
import "./Index.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DealerSearch from "../components/DealerSearch";
import AskMira from "../components/AskMira";
import HeroImage from "../assets/hero.jpg";
import DealerCard from "../components/DealerCard";
import BannerImage from "../assets/banner.jpg";
import Axios from "axios";

export default function Index() {
  const [limitPage, setLimitPage] = useState(9);
  const [totalDealer, setTotalDealer] = useState(0);
  const [dealers, setDealers] = useState([]);
  const [dealer, setDealer] = useState("");
  const [location, setLocation] = useState("");
  const locationParams = dealer ? "" : location;

  useEffect(() => {
    const getLocation = () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLocation(`${position.coords.latitude},${position.coords.longitude}`);
      });
    };

    const getDelers = () => {
      Axios.get(
        `search-dealers?limit=${limitPage}&latlong=${locationParams}&keyword=${dealer}`
      )
        .then((response) => {
          setDealers(response.data.data);
          setTotalDealer(response.data.total);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getLocation();
    getDelers();
  }, [dealer, locationParams, limitPage]);
  return (
    <>
      <Navbar />

      <main className="main-container">
        <section className="hero-container">
          <img src={HeroImage} alt="hero" />
        </section>

        <DealerSearch
          setDealer={setDealer}
          setLocation={setLocation}
          setLimitPage={setLimitPage}
        />

        <section className="dealers">
          <div className="dealers-container">
            {dealers.map((item, index) => {
              return (
                <DealerCard
                  key={index}
                  name={item.company}
                  address={item.address}
                  service={item.services}
                />
              );
            })}
          </div>

          <div className="btn-container">
            {totalDealer <= limitPage ? (
              ""
            ) : (
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

      <AskMira />
    </>
  );
}
