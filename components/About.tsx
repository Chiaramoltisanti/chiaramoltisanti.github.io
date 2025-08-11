'use client'

export default function About() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '393123456789'
  const whatsappMessage = encodeURIComponent(
    'Salve Dott.ssa Moltisanti, ho visto il suo sito e vorrei prenotare una consulenza psicologica. Potrebbe darmi informazioni sui suoi servizi?'
  )
  return (
    <>
      <div id="about_checkpoint">
        <br /><br /><br /><br /><br /><br /><br /><br />
      </div>
      <div className="doctor-message" id="about">
        <div className="inner-lay">
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-sm-12 doc-img">
                <img src="/assets/images/dott3.png" alt="Propic psicologa ragusa" style={{ width: '100%', height: 'auto' }} />
              </div>
              <div className="col-md-7 col-sm-12 doc-det">
                <span><h3><i>Chi sono</i></h3></span>
                <h1>Dott.ssa Chiara Moltisanti</h1>
                <span><h5>Psicologa a Ragusa e Online</h5></span>

                <p>
                  Sono Chiara Moltisanti, Psicologa con formazione in Psicologia Perinatale, Tecniche di Rilassamento,
                  Mindfulness, Terapia a Seduta Singola e Disturbi Specifici dell&apos;Apprendimento. <br />
                  Ricevo Online e a Ragusa. <br /><br />
                  Contattami se vuoi ritrovare il tuo benessere psicologico!
                </p>

                <div className="cta-section mt-4">
                  <style jsx>{`
                    .whatsapp-cta {
                      border-radius: 25px;
                      padding: 12px 30px;
                      font-weight: 600;
                      text-decoration: none;
                      box-shadow: 0 4px 15px rgba(40, 167, 69, 0.3);
                      transition: all 0.3s ease;
                      display: inline-block;
                    }
                    .whatsapp-cta:hover {
                      transform: translateY(-2px);
                      box-shadow: 0 6px 20px rgba(40, 167, 69, 0.4);
                      text-decoration: none;
                    }
                  `}</style>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success btn-lg whatsapp-cta"
                  >
                    <i className="fab fa-whatsapp me-2"></i>
                    Prenota su WhatsApp
                  </a>
                  <p className="mt-2 text-muted" style={{ fontSize: '0.9rem' }}>
                    <i className="fas fa-clock me-1"></i>
                    Risposta entro 24 ore
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}