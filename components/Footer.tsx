'use client'

import styles from './Footer.module.css'

export default function Footer() {
  const email = process.env.NEXT_PUBLIC_EMAIL || 'psicologamoltisantichiara@gmail.com'
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '393123456789'
  const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://www.instagram.com/psicologamoltisantichiara/?hl=en'
  const facebookUrl = process.env.NEXT_PUBLIC_FACEBOOK_URL || 'https://www.facebook.com/chiara.moltisanti.96'
  const studioAddress = process.env.NEXT_PUBLIC_STUDIO_ADDRESS || 'Via degli Aceri, 29, 97100 Ragusa, RG'
  const googleMapsEmbed = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED || 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093747!2d14.709582115315!3d36.92485497993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x131199a953d98ba1%3A0x65c052f8a3177955!2sVia%20degli%20Aceri%2C%2029%2C%2097100%20Ragusa%20RG%2C%20Italy!5e0!3m2!1sen!2sit!4v1699000000000!5m2!1sen!2sit'

  return (
    <>
      <footer className={`${styles.footer} footer`} id="contatti">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <h2>Dott.ssa Chiara Moltisanti</h2><br />
              <p style={{ textAlign: 'left' }}>
                Psicologa <br />
                P.IVA: 01756380885 <br />
                Consulenza e sostegno psicologico<br />
                Contattami per ritrovare il tuo benessere psicologico
              </p>
            </div>

            <div className="col-md-4 col-sm-12">
              <h4>Contatti</h4>
              <div className={styles.contactItem}>
                <i className="fas fa-envelope"></i>
                <a href={`mailto:${email}`}>{email}</a>
              </div>
              <div className={styles.contactItem}>
                <i className="fab fa-whatsapp"></i>
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                  Scrivimi su WhatsApp
                </a>
              </div>
              <div className={styles.contactItem}>
                <i className="fas fa-map-marker-alt"></i>
                <span>{studioAddress}</span>
              </div>
            </div>

            <div className="col-md-4 col-sm-12">
              <h4>Seguimi</h4>
              <div className={styles.socialLinks}>
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer" title="Seguimi su Instagram">
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
                <a href={facebookUrl} target="_blank" rel="noopener noreferrer" title="Seguimi su Facebook">
                  <i className="fab fa-facebook fa-lg"></i>
                </a>
              </div>
              <div className="info-box" style={{
                background: 'rgba(86, 174, 255, 0.1)',
                padding: '15px',
                borderRadius: '10px',
                border: '1px solid rgba(86, 174, 255, 0.2)'
              }}>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#495057' }}>
                  <i className="fas fa-calendar-check me-2" style={{ color: '#56aeff' }}></i>
                  <strong>Ricevo su appuntamento</strong><br />
                  <i className="fas fa-globe me-2" style={{ color: '#56aeff' }}></i>
                  Online e a Ragusa
                </p>
              </div>
            </div>
          </div>

          {/* Map section */}
          <div className="row mt-5">
            <div className="col-12">
              <div className="text-center">
                <h4 className={styles.mapTitle}>Dove Trovarmi</h4>
              </div>
              <div className={styles.mapContainer}>
                <iframe
                  src={googleMapsEmbed}
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: '10px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Studio Dott.ssa Chiara Moltisanti - Via degli Aceri, 29, Ragusa"
                ></iframe>
                <div className={styles.mapOverlay}>
                  <div className={styles.mapInfo}>
                    <h5>
                      <i className="fas fa-map-marker-alt me-2"></i>
                      Studio Psicologico
                    </h5>
                    <p>
                      <strong>{studioAddress}</strong><br />
                      <small className="text-muted">
                        <i className="fas fa-clock me-1"></i>
                        Su appuntamento
                      </small>
                    </p>
                    <a
                      href={`https://www.google.com/maps/dir//${encodeURIComponent(studioAddress)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-primary"
                    >
                      <i className="fas fa-directions me-1"></i>
                      Ottieni indicazioni
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright section */}
      <div className={styles.copy}>
        <div className="container text-center">
          <a href="https://paolorabbito.github.io" target="_blank" rel="noopener noreferrer">
            2022 &copy; Made with <i className="fas fa-heart fa-xs"></i> by Paolo Rabbito
          </a>
        </div>
      </div>
    </>
  )
}