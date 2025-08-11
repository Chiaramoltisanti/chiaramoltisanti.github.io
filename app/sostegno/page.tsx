import ServiceLayout from '@/components/ServiceLayout'
import Breadcrumb from '@/components/Breadcrumb'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sostegno Psicologico | Dott.ssa Chiara Moltisanti',
  description: 'Sostegno psicologico per esplorare le difficoltà e rinforzare le capacità di scelta e cambiamento. Psicologa a Ragusa e online.',
}

export default function SostegnoPage() {
  return (
    <ServiceLayout>
      <Breadcrumb currentPage="Sostegno" />

      <div className="about-us">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <img src="/assets/images/pages/support.jpg" alt="" />
            </div>
            <div className="col-md-6 col-sm-12">
              <h2>Consulenza e sostegno psicologico</h2><br />
              <p>
                La consulenza psicologica comprende tutte le attività caratterizzanti la
                professione psicologica, e cioè l&apos;ascolto, la definizione del problema e
                la valutazione, necessari alla formulazione dell&apos;eventuale, successiva, diagnosi.
                Lo scopo è quello di sostenerti, motivarti
                all&apos;interno della tua rete affettiva e relazionale e al fine anche
                di esplorare le tue difficoltà legate a fasi di transizione
                e stati di crisi anche legati ai cicli di vita, rinforzando la tua
                capacità di scelta, di problem solving e di cambiamento.<br /><br />

                Il sostegno psicologico è un intervento il cui obiettivo è il miglioramento
                della tua qualità di vita e degli equilibri adattivi in tutte le
                situazioni (di salute e di malattia), nelle quali ciò si rileva opportuno,
                sviluppando e potenziando i tuoi punti di forza e le tue capacità di
                autodeterminazione.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  )
}