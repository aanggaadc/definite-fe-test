import React from 'react'
import './Index.scss'
import Navbar from '../components/Navbar'
import HeroImage from '../assets/hero.jpg'
import SearchIcon from '../assets/Search.svg'
import DealerCard from '../components/DealerCard'

export default function Index() {
    return (
        <>
            <Navbar />

            <section id='hero'>
                <div className='hero-container'>
                    <img src={HeroImage} alt="hero" />
                </div>
            </section>

            <section id='dealer-search'>
                <div className='dealer-search-container'>
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
                </div>
            </section>

            <section id='dealers'>
                <div className='dealers-container'>

                </div>
            </section>
        </>
    )
}