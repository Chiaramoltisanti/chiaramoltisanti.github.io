import ServicePageLayout from '@/components/ServicePageLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sostegno Psicologico | Dott.ssa Chiara Moltisanti',
  description: 'Sostegno psicologico per esplorare le difficoltà e rinforzare le capacità di scelta e cambiamento. Psicologa a Ragusa e online.',
}

const benefits = [
  {
    icon: 'fas fa-hands-helping',
    title: 'Sostegno Personalizzato',
    text: 'Accompagnamento mirato alle tue specifiche difficoltà e fasi di transizione della vita.'
  },
  {
    icon: 'fas fa-puzzle-piece',
    title: 'Problem Solving',
    text: 'Sviluppo delle capacità di risoluzione dei problemi e gestione delle situazioni complesse.'
  },
  {
    icon: 'fas fa-arrow-up',
    title: 'Crescita Personale',
    text: 'Potenziamento dei tuoi punti di forza e delle capacità di autodeterminazione.'
  }
]

export default function SostegnoPage() {
  return (
    <ServicePageLayout
      title="Sostegno Psicologico"
      subtitle="Consulenza professionale per esplorare le difficoltà e rinforzare le capacità di scelta e cambiamento"
      breadcrumbTitle="Sostegno"
      imageSrc="/assets/images/pages/support.jpg"
      imageAlt="Sostegno psicologico"
      benefits={benefits}
      ctaTitle="Inizia il tuo percorso di sostegno"
      ctaText="Insieme esploreremo le tue difficoltà e potenzieremo le tue risorse"
    >
      <h2 className="contentTitle">Consulenza e Sostegno Psicologico</h2>

      <p>
        La <strong>consulenza psicologica</strong> comprende tutte le attività caratterizzanti
        la professione psicologica: l&apos;ascolto, la definizione del problema e la valutazione,
        necessari alla formulazione dell&apos;eventuale, successiva, diagnosi.
      </p>

      <p>
        Lo scopo è quello di <strong>sostenerti e motivarti</strong> all&apos;interno della tua
        rete affettiva e relazionale, esplorando le tue difficoltà legate a:
      </p>

      <ul>
        <li>Fasi di transizione della vita</li>
        <li>Stati di crisi personali</li>
        <li>Cicli di vita e cambiamenti</li>
        <li>Difficoltà relazionali</li>
        <li>Problemi di adattamento</li>
      </ul>

      <p>
        Il processo mira a <strong>rinforzare</strong> la tua capacità di scelta,
        di problem solving e di cambiamento.
      </p>

      <div style={{
        background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)',
        padding: '25px',
        borderRadius: '15px',
        margin: '30px 0',
        borderLeft: '4px solid #56aeff'
      }}>
        <h4 style={{ color: '#495057', marginBottom: '15px' }}>Obiettivi del Sostegno Psicologico</h4>
        <p style={{ margin: 0, color: '#6c757d' }}>
          Il sostegno psicologico è un intervento il cui obiettivo è il <strong>miglioramento
            della tua qualità di vita</strong> e degli equilibri adattivi in tutte le situazioni,
          sviluppando e potenziando i tuoi punti di forza e le tue capacità di autodeterminazione.
        </p>
      </div>
    </ServicePageLayout>
  )
}