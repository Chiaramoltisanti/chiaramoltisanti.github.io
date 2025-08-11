import Link from 'next/link'

interface ServiceLayoutProps {
  children: React.ReactNode
}

export default function ServiceLayout({ children }: ServiceLayoutProps) {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '393123456789'
  const whatsappMessage = encodeURIComponent(
    'Salve Dott.ssa Moltisanti, ho visto il suo sito e vorrei avere informazioni sui suoi servizi.'
  )

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
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success"
                  style={{
                    borderRadius: '25px',
                    padding: '10px 20px',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    textDecoration: 'none'
                  }}
                >
                  <i className="fab fa-whatsapp me-2"></i>
                  Contattami
                </a>
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