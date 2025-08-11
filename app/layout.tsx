import type { Metadata } from 'next'
import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'

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
      </head>
      <body>{children}</body>
    </html>
  )
}