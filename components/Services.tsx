import Link from 'next/link'

export default function Services() {
  return (
    <>
      <div id="servizi_checkpoint" style={{backgroundColor: '#fff'}}>
        <br />
      </div>
      <section className="our-blog container-fluid" id="servizi">
        <div className="container">
          <div className="session-title row">
            <h2>I miei servizi</h2>
            <p>
              I servizi che offro, finalizzati al raggiungimento
              del tuo benessere psicologico, sono:
            </p>
          </div>
          <div className="col-sm-12 blog-cont">
            <div className="row no-margin">
              
              <div className="col-lg-4 col-md-6 blog-smk">
                <div className="blog-single">
                  <img className="service_image1" src="/assets/images/pages/tts.jpg" alt="tts psicologa ragusa" />
                  <div className="blog-single-det">
                    <h6>Terapia a Seduta Singola</h6>
                    <p>
                      Permette di trarre la massima efficacia da ogni singolo incontro.
                      L&apos;obiettivo è sostenerti nel riconoscimento e nella riappropriazione delle tue risorse
                      facilitando in <b>tempi brevi</b> la risoluzione
                      del problema.
                    </p>
                    <Link href="/tss">
                      <button className="btn btn-success btn-sm">Scopri di più</button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 blog-smk">
                <div className="blog-single">
                  <img className="service_image2" src="/assets/images/pages/support.jpg" alt="sostegno psicologa ragusa" />
                  <div className="blog-single-det">
                    <h6>Sostegno Psicologico</h6>
                    <p>Lo scopo del sostegno è quello di sostenerti, motivarti all&apos;interno della tua rete affettiva e relazionale e al fine di 
                      esplorare le tue difficoltà rinforzando le tue capacità di scelta e cambiamento, al fine di raggiungere un miglioramento.
                    </p>
                    <Link href="/sostegno">
                      <button className="btn btn-success btn-sm">Scopri di più</button>
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-4 col-md-6 blog-smk">
                <div className="blog-single">
                  <img className="service_image1" src="/assets/images/pages/online2.jpg" alt="online psicologa ragusa" />
                  <div className="blog-single-det">
                    <h6>Sostegno Online</h6>
                    <p>
                      Se non hai la possibilità di raggiungere il mio studio, se vivi molto lontano o sei un expat, puoi contattarmi
                      e prenotare una consulenza psicologica online, da effettuare nella comodità di casa tua, tramite videochiamata.
                    </p>
                    <Link href="/online">
                      <button className="btn btn-success btn-sm">Scopri di più</button>
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-4 col-md-6 blog-smk">
                <div className="blog-single">
                  <img className="service_image2" src="/assets/images/pages/metodo.jpg" alt="benessere psicologa ragusa" />
                  <div className="blog-single-det">
                    <h6>Benessere</h6>
                    <p>
                      Insieme capiremo di cosa hai bisogno e definiremo gli obiettivi da raggiungere. 
                      Una volta definiti gli obiettivi ti seguirò passo dopo passo per risolvere quei 
                      comportamenti o pensieri disfunzionali che ti portano malessere. 
                    </p>
                    <Link href="/studio">
                      <button className="btn btn-success btn-sm">Scopri di più</button>
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-4 col-md-6 blog-smk">
                <div className="blog-single">
                  <img className="service_image1" src="/assets/images/pages/mindful.jpg" alt="mindfulness psicologa ragusa" />
                  <div className="blog-single-det">
                    <h6>Mindfulness</h6>
                    <p>
                      Mindfulness significa essere consapevoli, nel momento presente e senza giudizio, 
                      di ciò che accade nella nostra mente, nel nostro corpo e intorno a noi. 
                      Significa riprendere il controllo della propria vita e saper dirigerla nella 
                      giusta direzione.
                    </p>
                    <Link href="/mindfulness">
                      <button className="btn btn-success btn-sm">Scopri di più</button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 blog-smk">
                <div className="blog-single">
                  <img className="service_image2" src="/assets/images/pages/relax.jpg" alt="rilassamento psicologa ragusa" />
                  <div className="blog-single-det">
                    <h6>Rilassamento</h6>
                    <p>
                      Lo stress tra lavoro, famiglia e studio può portarti a conseguenze importanti sia 
                      fisiche che mentali, che rischiano di rallentarti, farti vivere male e di farti perdere 
                      il contatto con te stesso. Ti aiuterò a ritrovare il tuo benessere.
                    </p>
                    <Link href="/rilassamento">
                      <button className="btn btn-success btn-sm">Scopri di più</button>
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>  			
        </div>
      </section>
    </>
  )
}