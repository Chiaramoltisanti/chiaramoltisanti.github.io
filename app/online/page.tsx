import ServiceLayout from '@/components/ServiceLayout'
import Breadcrumb from '@/components/Breadcrumb'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sostegno Online | Dott.ssa Chiara Moltisanti',
  description: 'Consulenza psicologica online tramite videochiamata. Ideale per chi vive lontano o è un expat. Psicologa a Ragusa e online.',
}

export default function OnlinePage() {
  return (
    <ServiceLayout>
      <Breadcrumb currentPage="Online" />
      
      <div className="about-us">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <img src="/assets/images/pages/online.jpg" alt="" />
            </div>
            <div className="col-md-6 col-sm-12">
              <h2>Sedute online</h2><br />
              <p>
                Se non hai la possibilità di raggiungere il mio studio, se vivi molto lontano o sei un expat, 
                puoi contattarmi e prenotare una consulenza psicologica online tramite videochiamata.<br /><br />
                
                Cerchi una psicologa italiana all&apos;<b>estero</b>?<br />

                Vivere all&apos;estero è una grande avventura, ma non è sempre facile e quando senti
                il bisogno di parlare delle tue emozioni, delle tue paure, del tuo malessere e vivi 
                in un paese straniero, potresti avere delle difficoltà. <br />

                La vita da expat può essere difficile, perché ti renderai conto che sapere una 
                lingua straniera spesso non basta. <br /><br />

                Nella tua esperienza all&apos;estero potresti provare:
                <ul>
                  <li>• stress e ansia</li>
                  <li>• nostalgia di casa</li>
                  <li>• difficoltà di integrazione</li>
                  <li>• isolamento sociale</li>
                  <li>• difficoltà legate ad un cambiamento dello stile di vita</li>
                </ul><br />

                La consulenza psicologica online è perfetta per ritrovare il tuo benessere mentale 
                con una professionista che condivide con te lingua e background culturale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  )
}