'use client'

import { useEffect } from 'react'

export default function Header() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '393123456789'
  const whatsappMessage = encodeURIComponent(
    'Salve Dott.ssa Moltisanti, ho visto il suo sito e vorrei avere informazioni sui suoi servizi.'
  )
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
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success"
                style={{
                  borderRadius: '25px',
                  padding: '10px 20px',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  textDecoration: 'none'
                }}
              >
                <i className="fab fa-whatsapp me-2"></i>
                Contattami
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}