import type { Metadata } from 'next'
import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: 'Psicologa Ragusa e Online | Dott.ssa Chiara Moltisanti',
  description: 'Mi chiamo Chiara Moltisanti e sono una psicologa a Ragusa ed online. Mi occupo della gestione di ansia e stress, di rilassamento e mindfulness, di difficoltà scolastiche e relazionali, di perinatalità, terapia di coppia, terapia a seduta singola e disturbi specifici dell\'apprendimento.',
  keywords: 'Psicologa Ragusa, Psiocologo Ragusa, Psicologa a Ragusa, Psicologo a Ragusa, psicologo online, psicologo sicilia, psicologa sicilia, psicologo dsa, psicologa dsa, psicologa tutor bimbi psicologa, psicologo, consulenza psicologica, depressione ragusa, ansia ragusa, stress ragusa',
  openGraph: {
    locale: 'it_IT',
    type: 'website',
    title: 'Psicologa Ragusa e Online | Dott.ssa Chiara Moltisanti',
    description: 'Mi chiamo Chiara Moltisanti e sono una psicologa a Ragusa ed online. Mi occupo della gestione di ansia e stress, di rilassamento e mindfulness, di difficoltà scolastiche e relazionali, di perinatalità, terapia di coppia, terapia a seduta singola e disturbi specifici dell\'apprendimento.',
    url: 'https://www.psicologa-ragusa.it/',
    siteName: 'Psicologa Ragusa',
  },
  verification: {
    google: 'wESj2jiWhmuxeQ-TY05-5ggdiCuMEwb-_zqNhZhB9TI'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <head>
        <link rel="shortcut icon" href="/assets/images/fav.jpg" />
        <link rel="stylesheet" href="/assets/css/fontawsom-all.min.css" />
        <link rel="stylesheet" href="/assets/plugins/slider/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/assets/plugins/slider/css/owl.theme.default.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        
        {/* Schema Markup per SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Psychologist",
              "name": "Dott.ssa Chiara Moltisanti",
              "description": "Psicologa specializzata in ansia, stress, mindfulness, terapia online e disturbi specifici dell'apprendimento",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Via degli Aceri, 29",
                "addressLocality": "Ragusa",
                "postalCode": "97100",
                "addressRegion": "Sicilia",
                "addressCountry": "IT"
              },
              "areaServed": ["Ragusa", "Sicilia", "Italia", "Online"],
              "availableLanguage": "Italian",
              "url": "https://www.psicologa-ragusa.it",
              "sameAs": [
                "https://www.instagram.com/psicologamoltisantichiara",
                "https://www.facebook.com/chiara.moltisanti.96"
              ],
              "serviceType": [
                "Consulenza Psicologica",
                "Sostegno Psicologico", 
                "Mindfulness",
                "Tecniche di Rilassamento",
                "Terapia a Seduta Singola",
                "Terapia Online",
                "Disturbi Specifici dell'Apprendimento"
              ],
              "medicalSpecialty": "Psychology"
            })
          }}
        />
        <SpeedInsights dsn="7TCpAxeNPUQW0yTDjb7NXQcd5YN" />
      </head>
      <body>
        <Analytics />
        {children}
      </body>
    </html>
  )
}