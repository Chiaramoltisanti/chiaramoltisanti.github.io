import ServiceLayout from '@/components/ServiceLayout'
import Breadcrumb from '@/components/Breadcrumb'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rilassamento | Dott.ssa Chiara Moltisanti',
  description: 'Tecniche di rilassamento per gestire lo stress di lavoro, famiglia e studio. Ritorna in contatto con te stesso. Psicologa a Ragusa e online.',
}

export default function RilassamentoPage() {
  return (
    <ServiceLayout>
      <Breadcrumb currentPage="Rilassamento" />
      
      <div className="about-us">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <img src="/assets/images/pages/relax.jpg" alt="" />
            </div>
            <div className="col-md-6 col-sm-12">
              <h2>Obiettivo benessere!</h2><br />
              <p>
                &quot;Quando c&apos;è la salute c&apos;è tutto&quot; recita un proverbio che sicuramente conoscerai. <br /><br /> 

                Ma cos&apos;è la salute? <br />
                La salute è una componente fondamentale della nostra vita. <br />
                L&apos;OMS la definisce &quot;uno stato di completo benessere fisico, mentale e sociale e non semplice 
                assenza di malattia&quot;. <br /><br />

                Se ti senti immerso quotidianamente in una società che ti chiede sempre di più, potresti risentire 
                di un eccessivo carico di ansia e stress, causando problemi fisici. <br />

                Lo stress tra lavoro, famiglia e studio può portarti a conseguenze importanti sia fisiche che mentali, 
                che rischiano di rallentarti, farti vivere male e di farti perdere il contatto con te stesso.  <br />

                Le tecniche di rilassamento ti permettono di ritrovare l&apos;equilibrio perduto.
                Attraverso il Rilassamento Muscolare Progressivo posso aiutarti a &quot;rilassare la mente&quot; attraverso il corpo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  )
}