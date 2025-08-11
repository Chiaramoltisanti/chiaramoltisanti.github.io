import ServiceLayout from '@/components/ServiceLayout'
import Breadcrumb from '@/components/Breadcrumb'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terapia a Seduta Singola | Dott.ssa Chiara Moltisanti',
  description: 'Terapia a Seduta Singola per massima efficacia in tempi brevi. Riappropriati delle tue risorse con la Dott.ssa Chiara Moltisanti, psicologa a Ragusa e online.',
}

export default function TSSPage() {
  return (
    <ServiceLayout>
      <main>
        <Breadcrumb currentPage="TSS" />
        
        <div className="about-us">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <img src="/assets/images/pages/tts.jpg" alt="" />
              </div>
              <div className="col-md-6 col-sm-12">
                <h2>La terapia a seduta singola</h2><br />
                <p>
                  L&apos;idea alla base di questo metodo è che spesso non sono necessari percorsi lunghi per risolvere un problema, 
                  ma che anche <b>solo un incontro</b> possa essere sufficiente alla <b>risoluzione del problema</b>. <br /><br />

                  <ul>
                    <li>
                      <i>In cosa consiste?</i> <br />
                      • È una forma di terapia breve che permette di ottenere il massimo da ogni singola seduta.
                    </li> <br />

                    <li>
                      <i>È una tecnica valida?</i><br />
                      • Le ricerche hanno confermato quella che ormai è una realtà di fatto: una sola seduta può essere più che sufficiente in una grande quantità di casi.
                    </li> <br />
                    
                    <li>
                      <i>Cosa significa Terapia a Seduta Singola? </i><br />
                      • Terapia a Seduta Singola non significa fare sempre e solo una seduta! 
                      Significa essersi formati in una forma di <b>Terapia Breve</b> che permette di ottenere il massimo da ogni singola (e spesso unica) seduta. 
                    </li> <br />

                    <li>
                      <i>E se un solo incontro non basta? </i><br />
                      • La porta del mio studio è sempre aperta per te e valuteremo insieme se sia il caso di fare un altro incontro! 
                    </li> <br />
                    
                    <li>
                      <i>È adatta a te?</i> <br />
                      • Se pensi che anche un solo incontro possa essere <b>efficace</b>, allora è l&apos;approccio che fa per te.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </ServiceLayout>
  )
}