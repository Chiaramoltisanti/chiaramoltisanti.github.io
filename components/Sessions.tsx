import Link from 'next/link'

export default function Sessions() {
  return (
    <section className="sesion-type" id="sessioni">
      <div id="sessioni_checkpoint">
        <br /><br /><br />
      </div>
      <div className="container">
        <div className="session-title row">
          <h2>A chi mi rivolgo</h2>
          <p>
            Le sedute non sono mai uguali per tutti, ed è per questo che sono io ad adattarle alle vostre esigenze, per saperne di più{' '}
            <Link href="/subject" style={{color: '#56aeff'}}>clicca qui.</Link>
          </p>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="single-sess">
              <img src="/assets/images/session/therapy-1.jpg" alt="terapia adulti psicologa ragusa" />
              <p>Adulti</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="single-sess">
              <img src="/assets/images/session/therapy-2.jpg" alt="terapia coppie psicologa ragusa" />
              <p>Coppie</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="single-sess">
              <img src="/assets/images/session/therapy-3.jpg" alt="terapia bambini psicologa ragusa" />
              <p>Età evolutiva</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}