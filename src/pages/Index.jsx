import React from 'react'
import './Index.scss'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AskMira from '../components/AskMira'
import HeroImage from '../assets/hero.jpg'
import SearchIcon from '../assets/Search.svg'
// import DealerCard from '../components/DealerCard'
import BannerImage from '../assets/banner.jpg'
import PlayStore from '../assets/googleplay.png'
import AppStore from '../assets/appstore.png'


export default function Index() {
    return (
        <>
            <Navbar />

            <main className='main-container'>
                <section className='hero-container'>
                    <img src={HeroImage} alt="hero" />
                </section>

                <section className='dealer-search-container'>
                    <div className='dealer-search-left'>
                        <h2>FIND DEALER</h2>
                        <p>Discover the nearest in your area</p>

                        <div className='select-container'>
                            <div className='icon-container'>
                                <img src={SearchIcon} alt="search" />
                            </div>

                            <select>
                                <option value="">Pilih Lokasi Terdekat</option>
                            </select>
                        </div>
                    </div>
                    <div className='dealer-search-right'>
                        Cari dan kunjungi dealer resmi Mitsubishi terdekat di kota Anda untuk mendapatkan pelayanan terbaik terkait dengan kendaraan dari Mitsubishi Motors Indonesia.
                    </div>
                </section>

                <section className='dealers-container'>

                </section>


                <section className='banner-container'>
                    <div className='banner'>
                        <div className='banner-background' />
                        <img className='banner-image' src={BannerImage} alt="banner" />
                        <div className='banner-content'>
                            <div className='banner-header'>Live simple with MY Mitsubishi</div>
                            <div className='banner-detail'>
                                Nikmati semua fasilitas berkendara Mitsubishi, <br />
                                dari book test drive hingga service berkala <br />
                                langsung dari tangan Anda dengan My Mitsubishi ID.

                                <br /><br />

                                Download aplikasinya sekarang di App Store dan Play Store.
                            </div>
                            <div className='mobile-apps'>
                                <img src={AppStore} alt="appstore" style={{ width: "153px" }} />
                                <img src={PlayStore} alt="playstore" style={{ width: "153px" }} />
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />

            <AskMira />
        </>
    )
}