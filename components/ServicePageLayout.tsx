import ServiceLayout from '@/components/ServiceLayout'
import Breadcrumb from '@/components/Breadcrumb'
import styles from './ServicePage.module.css'

interface ServicePageLayoutProps {
  title: string
  subtitle: string
  breadcrumbTitle: string
  imageSrc: string
  imageAlt: string
  children: React.ReactNode
  ctaTitle?: string
  ctaText?: string
  benefits?: Array<{
    icon: string
    title: string
    text: string
  }>
}

export default function ServicePageLayout({
  title,
  subtitle,
  breadcrumbTitle,
  imageSrc,
  imageAlt,
  children,
  ctaTitle = "Prenota la tua consulenza",
  ctaText = "Contattami per iniziare il tuo percorso di benessere",
  benefits
}: ServicePageLayoutProps) {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '393123456789'
  const whatsappMessage = encodeURIComponent(
    `Salve Dott.ssa Moltisanti, ho visto la pagina "${title}" sul suo sito e vorrei prenotare una consulenza. Potrebbe darmi maggiori informazioni?`
  )

  return (
    <ServiceLayout>
      <Breadcrumb currentPage={breadcrumbTitle} />
      
      {/* Hero Section */}
      <div className={styles.serviceHero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>{title}</h1>
            <p className={styles.heroSubtitle}>{subtitle}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.contentSection}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-sm-12">
              <div className={styles.imageContainer}>
                <img src={imageSrc} alt={imageAlt} />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className={styles.contentText}>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      {benefits && (
        <div className={styles.benefitsSection}>
          <div className="container">
            <div className="text-center">
              <h2 style={{color: '#495057', marginBottom: '20px'}}>Perché Scegliere Questo Servizio</h2>
              <p style={{color: '#6c757d', fontSize: '1.1rem'}}>I vantaggi di un approccio professionale e personalizzato</p>
            </div>
            <div className={styles.benefitsGrid}>
              {benefits.map((benefit, index) => (
                <div key={index} className={styles.benefitCard}>
                  <i className={`${benefit.icon} ${styles.benefitIcon}`}></i>
                  <h4 className={styles.benefitTitle}>{benefit.title}</h4>
                  <p className={styles.benefitText}>{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className={styles.ctaSection}>
        <div className="container">
          <h3 className={styles.ctaTitle}>{ctaTitle}</h3>
          <p className={styles.ctaText}>{ctaText}</p>
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            <i className="fab fa-whatsapp me-2"></i>
            Contattami su WhatsApp
          </a>
        </div>
      </div>
    </ServiceLayout>
  )
}