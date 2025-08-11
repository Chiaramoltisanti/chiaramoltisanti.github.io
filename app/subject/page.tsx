import ServiceLayout from '@/components/ServiceLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'A chi mi rivolgo | Dott.ssa Chiara Moltisanti',
  description: 'Sedute personalizzate per adulti, coppie e età evolutiva. Ogni percorso è adattato alle specifiche esigenze. Psicologa a Ragusa e online.',
}

export default function SubjectPage() {
  return (
    <ServiceLayout>
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-12">
            <h1>A chi mi rivolgo</h1>
            <p className="lead">
              Le sedute non sono mai uguali per tutti, ed è per questo che sono io ad adattarle alle vostre esigenze.
            </p>
            
            <div className="row mt-4">
              <div className="col-md-4">
                <h3>Adulti</h3>
                <p>
                  Percorsi personalizzati per adulti che affrontano difficoltà legate ad ansia, stress, 
                  autostima, elaborazione del lutto e crescita personale.
                </p>
              </div>
              <div className="col-md-4">
                <h3>Coppie</h3>
                <p>
                  Terapia di coppia per migliorare la comunicazione, risolvere conflitti e 
                  rafforzare il legame affettivo.
                </p>
              </div>
              <div className="col-md-4">
                <h3>Età evolutiva</h3>
                <p>
                  Supporto specializzato per bambini e adolescenti con difficoltà scolastiche, 
                  relazionali e disturbi specifici dell&apos;apprendimento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  )
}