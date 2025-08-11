import ServiceLayout from '@/components/ServiceLayout'
import Breadcrumb from '@/components/Breadcrumb'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Benessere | Dott.ssa Chiara Moltisanti',
  description: 'Percorso personalizzato per il tuo benessere psicologico. Definiamo insieme gli obiettivi da raggiungere. Psicologa a Ragusa e online.',
}

export default function StudioPage() {
  return (
    <ServiceLayout>
      <Breadcrumb currentPage="Benessere" />
      
      <div className="about-us">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <img src="/assets/images/pages/metodo.jpg" alt="" />
            </div>
            <div className="col-md-6 col-sm-12">
              <h2>Benessere</h2><br />
              <p>
                &quot;PARLARE È UN BISOGNO, ASCOLTARE È UN&apos;ARTE&quot; <br />
                - GOETHE - <br /><br />

                <ul>
                  <li>• Il mio metodo consiste nel lavorare sui pensieri, le emozioni e i comportamenti disfunzionali
                      che possono determinare in te uno stato di disagio, disequilibrio o malessere.</li>

                  <li>• Insieme capiremo di cosa hai bisogno e definiremo gli obiettivi da raggiungere. 
                      Una volta definiti gli obiettivi ti seguirò passo dopo passo per risolvere quei comportamenti 
                      o pensieri disfunzionali che ti portano malessere. </li>

                  <li>• Gli ingredienti del mio lavoro sono pochi ma essenziali: ascolto attivo, empatia, 
                      disponibilità, consapevolezza, formazione continua, obiettivi concreti, tempi brevi. </li>

                  <li>• Il mio lavoro consiste nel sostenerti nei momenti di difficoltà, che siano transitori o 
                      cronici, e nell&apos;aiutarti a scoprire e riscoprire le tue capacità e risorse.</li>

                  <li>• Lavoro su obiettivi realistici e concreti in un tempo definito, limitato e condiviso con te.</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  )
}