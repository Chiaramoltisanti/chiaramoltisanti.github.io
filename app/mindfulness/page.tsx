import ServicePageLayout from '@/components/ServicePageLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mindfulness | Dott.ssa Chiara Moltisanti',
  description: 'Mindfulness per essere consapevoli nel momento presente. Riprendi il controllo della tua vita con la Dott.ssa Chiara Moltisanti.',
}

const benefits = [
  {
    icon: 'fas fa-brain',
    title: 'Riduce Stress e Ansia',
    text: 'Tecniche scientificamente provate per gestire lo stress quotidiano e ridurre i livelli di ansia.'
  },
  {
    icon: 'fas fa-heart',
    title: 'Migliora il Benessere',
    text: 'Aumenta la consapevolezza emotiva e promuove uno stato di calma e serenità interiore.'
  },
  {
    icon: 'fas fa-focus',
    title: 'Aumenta la Concentrazione',
    text: 'Sviluppa la capacità di rimanere presenti e concentrati nel momento attuale.'
  }
]

export default function MindfulnessPage() {
  return (
    <ServicePageLayout
      title="Mindfulness"
      subtitle="Essere consapevoli nel momento presente, senza giudizio, per riprendere il controllo della propria vita"
      breadcrumbTitle="Mindfulness"
      imageSrc="/assets/images/pages/mindful.jpg"
      imageAlt="Mindfulness e meditazione"
      benefits={benefits}
      ctaTitle="Inizia il tuo percorso di consapevolezza"
      ctaText="Scopri come la mindfulness può trasformare la tua vita quotidiana"
    >
      <h2 className="contentTitle">Cos&apos;è la mindfulness?</h2>
      
      <p>
        La maggior parte di noi non vive il presente. Tendi a preoccuparti troppo per il futuro, 
        arrivando a immaginare scenari catastrofici? Oppure rimugini in continuazione sul passato, 
        rivivendo ossessivamente esperienze negative?
      </p>

      <p>
        <strong>Mindfulness significa essere consapevoli</strong>, nel momento presente e senza giudizio, 
        di ciò che accade nella nostra mente, nel nostro corpo e intorno a noi. Significa riprendere 
        il controllo della propria vita e saper dirigerla nella giusta direzione.
      </p>

      <p>
        Allenare la consapevolezza ti aiuta a:
      </p>

      <ul>
        <li>Smettere di rimuginare continuamente</li>
        <li>Uscire dagli automatismi che ti intrappolano</li>
        <li>Vivere una vita più piena e appagante</li>
        <li>Abbandonare giudizi, ansia e stress</li>
        <li>Cogliere opportunità importanti</li>
        <li>Migliorare i rapporti con gli altri</li>
      </ul>

      <p>
        La meditazione mindfulness è uno <strong>strumento scientificamente riconosciuto</strong>, 
        applicato anche in ambito clinico, che può essere integrato nella tua vita quotidiana 
        in maniera semplice e immediata.
      </p>
    </ServicePageLayout>
  )
}