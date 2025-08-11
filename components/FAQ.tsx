'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id)
  }

  return (
    <section className="sesion-type" id="faq_checkpoint">
      <div className="container col-8">
        <div className="session-title row">
          <h2>FAQ</h2>
        </div>
        <div id="accordion">
          
          <div className="card collapsable-border border-0 m-1">
            <div className="card-header collapsable-border p-0 border-0" id="headingOne">
              <h5 className="mb-0">
                <button 
                  className="btn btn-success col-12 text-left border-0" 
                  onClick={() => toggleAccordion('collapseOne')}
                  aria-expanded={openAccordion === 'collapseOne'}
                >
                  <span>{openAccordion === 'collapseOne' ? '− ' : '+ '}</span>
                  Quanto dura una seduta?
                </button>
              </h5>
            </div>
            <div className={`collapse ${openAccordion === 'collapseOne' ? 'show' : ''}`}>
              <div className="card-body">
                La prima seduta ha una durata di 60 minuti, essendo anche la seduta più importante. 
                Le successive sedute hanno una durata di 45 minuti. 
              </div>
            </div>
          </div>

          <div className="card collapsable-border border-0 m-1">
            <div className="card-header collapsable-border p-0 border-0" id="heading4">
              <h5 className="mb-0">
                <button 
                  className="btn btn-success col-12 text-left" 
                  onClick={() => toggleAccordion('collapse4')}
                  aria-expanded={openAccordion === 'collapse4'}
                >
                  <span>{openAccordion === 'collapse4' ? '− ' : '+ '}</span>
                  Quanto dura il percorso?
                </button>
              </h5>
            </div>
            <div className={`collapse ${openAccordion === 'collapse4' ? 'show' : ''}`}>
              <div className="card-body">
                Non vi è una durata prestabilita. 
                Dipende dal problema e dalle esigenze della persona. 
              </div>
            </div>
          </div>

          <div className="card collapsable-border border-0 m-1">
            <div className="card-header collapsable-border p-0 border-0" id="headingTwo">
              <h5 className="mb-0">
                <button 
                  className="btn btn-success col-12 text-left" 
                  onClick={() => toggleAccordion('collapseTwo')}
                  aria-expanded={openAccordion === 'collapseTwo'}
                >
                  <span>{openAccordion === 'collapseTwo' ? '− ' : '+ '}</span>
                  Posso scaricare la fattura?
                </button>
              </h5>
            </div>
            <div className={`collapse ${openAccordion === 'collapseTwo' ? 'show' : ''}`}>
              <div className="card-body">
                Sì, trattandosi di una prestazione sanitaria potrai detrarre, o scaricare con il 730, il 19% della spesa sostenuta. 
              </div>
            </div>
          </div>
          
          <div className="card collapsable-border border-0 m-1">
            <div className="card-header collapsable-border p-0 border-0" id="heading6">
              <h5 className="mb-0">
                <button 
                  className="btn btn-success col-12 text-left" 
                  onClick={() => toggleAccordion('collapse6')}
                  aria-expanded={openAccordion === 'collapse6'}
                >
                  <span>{openAccordion === 'collapse6' ? '− ' : '+ '}</span>
                  Come avviene il pagamento?
                </button>
              </h5>
            </div>
            <div className={`collapse ${openAccordion === 'collapse6' ? 'show' : ''}`}>
              <div className="card-body">
                La fattura per poter essere scaricata deve essere saldata tramite pagamento tracciato. 
                Il pagamento può essere effettuato tramite bonifico. 
                Nel caso in cui non si volesse scaricare la spesa, si può pagare anche in contanti 
              </div>
            </div>
          </div>  

          <div className="card collapsable-border border-0 m-1">
            <div className="card-header collapsable-border p-0 border-0" id="heading5">
              <h5 className="mb-0">
                <button 
                  className="btn btn-success col-12 text-left" 
                  onClick={() => toggleAccordion('collapse5')}
                  aria-expanded={openAccordion === 'collapse5'}
                >
                  <span>{openAccordion === 'collapse5' ? '− ' : '+ '}</span>
                  Ogni quanto viene fatta la seduta?
                </button>
              </h5>
            </div>
            <div className={`collapse ${openAccordion === 'collapse5' ? 'show' : ''}`}>
              <div className="card-body">
                Le sedute hanno generalmente una cadenza settimanale o bisettimanale. 
                Viene concordato insieme alla persona in relazione al problema portato e alle sue necessità. 
              </div>
            </div>
          </div>

          <div className="card collapsable-border border-0 m-1">
            <div className="card-header collapsable-border p-0 border-0" id="heading3">
              <h5 className="mb-0">
                <button 
                  className="btn btn-success col-12 text-left" 
                  onClick={() => toggleAccordion('collapse3')}
                  aria-expanded={openAccordion === 'collapse3'}
                >
                  <span>{openAccordion === 'collapse3' ? '− ' : '+ '}</span>
                  Si può fare una prima seduta conoscitiva?
                </button>
              </h5>
            </div>
            <div className={`collapse ${openAccordion === 'collapse3' ? 'show' : ''}`}>
              <div className="card-body">
                Un primo momento conoscitivo viene effettuato nel primo contatto telefonico prima della prima seduta per capire se posso 
                prendere in carico la persona. Avendo un approccio molto pratico, la prima seduta è già di intervento. 
              </div>
            </div>
          </div> 
        </div>
      </div>
    </section>
  )
}