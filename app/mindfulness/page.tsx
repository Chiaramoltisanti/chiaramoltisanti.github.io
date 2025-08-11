import ServiceLayout from '@/components/ServiceLayout'
import Breadcrumb from '@/components/Breadcrumb'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mindfulness | Dott.ssa Chiara Moltisanti',
  description: 'Mindfulness per essere consapevoli nel momento presente. Riprendi il controllo della tua vita con la Dott.ssa Chiara Moltisanti.',
}

export default function MindfulnessPage() {
  return (
    <ServiceLayout>
      <Breadcrumb currentPage="Mindfulness" />
      
      <div className="about-us">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <img src="/assets/images/pages/mindful.jpg" alt="" />
            </div>
            <div className="col-md-6 col-sm-12">
              <h2>Cos&apos;è la mindfulness?</h2><br />
              <p>
                La maggior parte di noi, non vive il presente. <br /> Tendi a preoccuparti troppo per il futuro, 
                arrivando a immaginare scenari catastrofici? <br /> Oppure rimugini in continuazione sul passato, 
                rivivendo ossessivamente esperienze negative che ti hanno causato dolore? <br /><br />

                Mindfulness significa essere consapevoli, nel momento presente e senza giudizio, di ciò che 
                accade nella nostra mente, nel nostro corpo e intorno a noi. Significa riprendere il controllo 
                della propria vita e saper dirigerla nella giusta direzione. <br /><br />

                Allenare la consapevolezza ti aiuta a smettere di rimuginare, a uscire dagli automatismi che 
                ti intrappolano e non ti fanno vivere una vita piena ed appagante, abbandonando i giudizi, 
                l&apos;ansia e lo stress. <br /><br />

                Al contrario, non essere consapevoli, perdersi con la mente tra passato e futuro, scambiare 
                i nostri pensieri per la realtà, mettere in atto automatismi e schemi mentali nocivi, può significare: <br />

                Sprecare la vita che stiamo vivendo.
                Soffrire maggiormente di ansia, stress e depressione con tutte le conseguenze 
                fisiche negative che possono derivarne.
                Perdere occasioni e opportunità importanti.
                Vivere incomprensioni nei rapporti con gli altri.
                Sentirsi più infelici o insoddisfatti.
                La meditazione della mindfulness rappresenta uno strumento potente, scientificamente riconosciuto, 
                applicato anche in ambito clinico, che può essere integrato nella tua pratica lavorativa o 
                nella vita quotidiana, in maniera semplice e immediata, attraverso la pratica formale e informale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  )
}