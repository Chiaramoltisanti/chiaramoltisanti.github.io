'use client'

import { useEffect } from 'react'

export default function Header() {
  const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://www.instagram.com/psicologamoltisantichiara/?hl=en'
  const facebookUrl = process.env.NEXT_PUBLIC_FACEBOOK_URL || 'https://www.facebook.com/chiara.moltisanti.96'
  const googleMapsUrl = process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL || 'https://www.google.com/maps/dir//Via+degli+Aceri,+29,+97100+Ragusa,+RG/@36.9248549,14.7095821,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x131199a953d98ba1:0x65c052f8a3177955!2m2!1d14.7117708!2d36.9248506'
  useEffect(() => {
    // Bootstrap JS functionality
    if (typeof window !== 'undefined') {
      require('bootstrap/dist/js/bootstrap.bundle.min.js')
    }
  }, [])

  return (
    <header id="menu-jk">
      <nav className="">
        <div className="container">
          <div className="row nav-ro">
            <div className="col-lg-3 col-md-4 col-sm-12 d-none d-lg-block">
              <img src="/assets/images/logo3.jpg" alt="Logo psicologa ragusa" />
              <a data-bs-toggle="collapse" data-bs-target="#menu" href="#menu">
                <i className="fas d-block d-md-none small-menu fa-bars"></i>
              </a>
            </div>
            <div className="col-md-2 d-block d-lg-none">
              <img src="/assets/images/fav.jpg" height="60px" alt="Logo psicologa ragusa" />
              <a data-bs-toggle="collapse" data-bs-target="#menu" href="#menu" id="menuCollapse">
                <i className="fas d-block d-md-none small-menu fa-bars"></i>
              </a>
            </div>
            
            <div id="menu" className="col-lg-7 col-md-10 d-none d-md-block no-padding">
              <ul>
                <li><a className="element" href="#about_checkpoint">Su di me</a></li>
                <li><a className="element" href="#mission_checkpoint">Cosa tratto</a></li>
                <li><a className="element" href="#servizi_checkpoint">Servizi</a></li>
                <li><a className="element" href="#sessioni_checkpoint">A chi mi rivolgo</a></li>
                <li><a className="element" href="#faq_checkpoint">Faq</a></li>
              </ul>
            </div>
            
            <div className="col-sm-2 d-none d-lg-block">
              <div className="btn-group" role="group" aria-label="Basic example">
                <a target="_blank" href={instagramUrl} rel="noopener noreferrer">
                  <button type="button" className="btn btn-social">
                    <i className="fab fa-instagram"></i>
                  </button>
                </a>
                <a target="_blank" href={facebookUrl} rel="noopener noreferrer">
                  <button type="button" className="btn btn-social">
                    <i className="fab fa-facebook"></i>
                  </button>
                </a>
                <a target="_blank" href={googleMapsUrl} rel="noopener noreferrer">
                  <button type="button" className="btn btn-social">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}