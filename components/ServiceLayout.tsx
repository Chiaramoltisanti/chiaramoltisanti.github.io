import Link from 'next/link'

interface ServiceLayoutProps {
  children: React.ReactNode
}

export default function ServiceLayout({ children }: ServiceLayoutProps) {
  return (
    <>
      <header id="menu-jk">
        <nav className="">
          <div className="container">
            <div className="row nav-row">
              <div className="col-lg-3 col-md-4 col-sm-12">
                <Link href="/">
                  <img src="/assets/images/logo3.jpg" alt="" />
                </Link>
              </div>

              <div id="menu" className="col-lg-7 col-md-8 d-none d-md-block no-padding">
              </div>

              <div className="col-sm-2 d-none d-lg-block">
                <div className="btn-group" role="group" aria-label="Basic example">
                  <a target="_blank" href="https://www.instagram.com/psicologamoltisantichiara/?hl=en">
                    <button type="button" className="btn btn-social">
                      <i className="fab fa-instagram"></i>
                    </button>
                  </a>
                  <a target="_blank" href="https://www.facebook.com/chiara.moltisanti.96">
                    <button type="button" className="btn btn-social">
                      <i className="fab fa-facebook"></i>
                    </button>
                  </a>
                  <a target="_blank" href="https://www.google.com/maps/dir//Via+degli+Aceri,+29,+97100+Ragusa,+RG/@36.9248549,14.7095821,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x131199a953d98ba1:0x65c052f8a3177955!2m2!1d14.7117708!2d36.9248506">
                    <button type="button" className="btn btn-social">
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {children}
      </main>

      <div className="copy">
        <div className="container text-center">
          <a href="https://paolorabbito.github.io" target="_blank">
            2022 &copy; Made with <i className="fas fa-heart fa-xs"></i> by Paolo Rabbito
          </a>
        </div>
      </div>
    </>
  )
}