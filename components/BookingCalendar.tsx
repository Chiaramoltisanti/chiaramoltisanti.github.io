'use client'

import { useEffect } from 'react'
import styles from './BookingCalendar.module.css'

export default function BookingCalendar() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '393123456789'
  const email = process.env.NEXT_PUBLIC_EMAIL || 'psicologamoltisantichiara@gmail.com'
  
  const whatsappMessage = encodeURIComponent(
    'Salve Dott.ssa Moltisanti, vorrei prenotare un appuntamento'
  )
  
  const emailSubject = encodeURIComponent('Richiesta appuntamento')
  const emailBody = encodeURIComponent(
    `Salve Dott.ssa Moltisanti,

Vorrei prenotare un appuntamento.

Preferenza orario:
Modalità (studio/online):

Grazie`
  )

  useEffect(() => {
    // Carica lo script di Google Calendar se non è già presente
    if (!document.querySelector('script[src*="calendar.google.com"]')) {
      const script = document.createElement('script')
      script.src = 'https://calendar.google.com/calendar/scheduling-button-script.js'
      script.async = true
      document.head.appendChild(script)
    }
  }, [])

  return (
    <div className={`${styles.bookingSection} booking-section`} id="booking">
      <div className="container">
        <div className="session-title row">
          <h2>Prenota un appuntamento</h2>
          <p>
            Seleziona il giorno e l&apos;orario che preferisci per il tuo incontro. 
            Riceverai una conferma via email con tutti i dettagli.
          </p>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10 col-sm-12">
            <div className={`${styles.calendarContainer} calendar-container`}>
              {/* Placeholder per Google Calendar - sostituire con il tuo link di prenotazione */}
              <div className={styles.calendarPlaceholder}>
                <div className={styles.calendarInfo}>
                  <h4>📅 Prenota la tua consulenza</h4>
                  <p>
                    <strong>Prima seduta:</strong> 60 minuti<br />
                    <strong>Sedute successive:</strong> 45 minuti<br />
                    <strong>Modalità:</strong> In studio a Ragusa o Online
                  </p>
                  
                  {/* Bottoni di contatto con variabili d'ambiente */}
                  <div className={styles.bookingButtons}>
                    <a 
                      href={`mailto:${email}?subject=${emailSubject}&body=${emailBody}`}
                      className="btn btn-success btn-lg me-3 mb-2"
                    >
                      <i className="fas fa-envelope"></i> Contattami via Email
                    </a>
                    
                    <a 
                      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-success btn-lg mb-2"
                    >
                      <i className="fab fa-whatsapp"></i> WhatsApp
                    </a>
                  </div>
                  
                  {/* Qui andrà il widget di Google Calendar */}
                  <div className={`${styles.googleCalendarWidget} mt-4`}>
                    <p className="text-muted">
                      <small>
                        <i className="fas fa-info-circle"></i> 
                        Per attivare la prenotazione online automatica, 
                        configura Google Calendar Appointment Scheduling
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}