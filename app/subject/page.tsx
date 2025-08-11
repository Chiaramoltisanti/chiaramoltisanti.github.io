import ServicePageLayout from '@/components/ServicePageLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'A chi mi rivolgo | Dott.ssa Chiara Moltisanti',
  description: 'Sedute personalizzate per adulti, coppie e età evolutiva. Ogni percorso è adattato alle specifiche esigenze. Psicologa a Ragusa e online.',
}

const benefits = [
  {
    icon: 'fas fa-user',
    title: 'Adulti',
    text: 'Percorsi personalizzati per ansia, stress, autostima, elaborazione del lutto e crescita personale.'
  },
  {
    icon: 'fas fa-heart',
    title: 'Coppie',
    text: 'Terapia di coppia per migliorare la comunicazione e rafforzare il legame affettivo.'
  },
  {
    icon: 'fas fa-child',
    title: 'Età Evolutiva',
    text: 'Supporto specializzato per bambini e adolescenti con difficoltà scolastiche e relazionali.'
  }
]

export default function SubjectPage() {
  return (
    <ServicePageLayout
      title="A Chi Mi Rivolgo"
      subtitle="Sedute personalizzate e adattate alle specifiche esigenze di ogni persona e situazione"
      breadcrumbTitle="A chi mi rivolgo"
      imageSrc="/assets/images/session/therapy-1.jpg"
      imageAlt="A chi mi rivolgo"
      benefits={benefits}
      ctaTitle="Trova il percorso giusto per te"
      ctaText="Ogni persona è unica, così come il suo percorso di benessere"
    >
      <h2 className="contentTitle">Approccio Personalizzato</h2>
      
      <p>
        Le sedute <strong>non sono mai uguali per tutti</strong>, ed è per questo che sono io 
        ad adattarle alle vostre specifiche esigenze. Ogni persona porta con sé una storia unica, 
        bisogni diversi e obiettivi personali.
      </p>

      <div style={{background: '#f8f9fa', padding: '30px', borderRadius: '15px', margin: '30px 0'}}>
        <div className="row">
          <div className="col-md-4 text-center mb-4">
            <i className="fas fa-user fa-3x" style={{color: '#56aeff', marginBottom: '20px'}}></i>
            <h4 style={{color: '#495057'}}>Adulti</h4>
            <p style={{color: '#6c757d'}}>
              Percorsi personalizzati per adulti che affrontano difficoltà legate ad ansia, stress, 
              problemi di autostima, elaborazione del lutto e crescita personale.
            </p>
          </div>
          
          <div className="col-md-4 text-center mb-4">
            <i className="fas fa-heart fa-3x" style={{color: '#56aeff', marginBottom: '20px'}}></i>
            <h4 style={{color: '#495057'}}>Coppie</h4>
            <p style={{color: '#6c757d'}}>
              Terapia di coppia per migliorare la comunicazione, risolvere conflitti 
              e rafforzare il legame affettivo tra i partner.
            </p>
          </div>
          
          <div className="col-md-4 text-center mb-4">
            <i className="fas fa-child fa-3x" style={{color: '#56aeff', marginBottom: '20px'}}></i>
            <h4 style={{color: '#495057'}}>Età Evolutiva</h4>
            <p style={{color: '#6c757d'}}>
              Supporto specializzato per bambini e adolescenti con difficoltà scolastiche, 
              relazionali e disturbi specifici dell&apos;apprendimento.
            </p>
          </div>
        </div>
      </div>

      <p>
        Il mio approccio si basa sulla <strong>flessibilità</strong> e sulla capacità di adattare 
        metodi e tecniche alle caratteristiche individuali di ogni persona, garantendo un percorso 
        di crescita autentico e efficace.
      </p>
    </ServicePageLayout>
  )
}