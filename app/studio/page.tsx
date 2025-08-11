import ServicePageLayout from '@/components/ServicePageLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Benessere | Dott.ssa Chiara Moltisanti',
  description: 'Percorso personalizzato per il tuo benessere psicologico. Definiamo insieme gli obiettivi da raggiungere. Psicologa a Ragusa e online.',
}

const benefits = [
  {
    icon: 'fas fa-bullseye',
    title: 'Obiettivi Concreti',
    text: 'Definiamo insieme obiettivi realistici e raggiungibili in tempi definiti e condivisi.'
  },
  {
    icon: 'fas fa-heart',
    title: 'Approccio Empatico',
    text: 'Ascolto attivo, empatia e disponibilità sono gli ingredienti essenziali del mio metodo.'
  },
  {
    icon: 'fas fa-chart-line',
    title: 'Crescita Personale',
    text: 'Ti aiuto a scoprire e riscoprire le tue capacità e risorse per superare le difficoltà.'
  }
]

export default function StudioPage() {
  return (
    <ServicePageLayout
      title="Percorso di Benessere"
      subtitle="Un metodo personalizzato per lavorare su pensieri, emozioni e comportamenti disfunzionali"
      breadcrumbTitle="Benessere"
      imageSrc="/assets/images/pages/metodo.jpg"
      imageAlt="Percorso di benessere psicologico"
      benefits={benefits}
      ctaTitle="Inizia il tuo percorso di benessere"
      ctaText="Insieme definiremo gli obiettivi per il tuo cambiamento"
    >
      <h2 className="contentTitle">Il Mio Metodo</h2>

      <blockquote style={{
        fontStyle: 'italic',
        fontSize: '1.2rem',
        color: '#56aeff',
        borderLeft: '4px solid #56aeff',
        paddingLeft: '20px',
        margin: '30px 0'
      }}>
        &quot;PARLARE È UN BISOGNO, ASCOLTARE È UN&apos;ARTE&quot;<br />
        <small style={{ color: '#6c757d' }}>- Goethe -</small>
      </blockquote>

      <p>
        Il mio approccio si basa su un metodo strutturato e personalizzato:
      </p>

      <ul>
        <li>
          <strong>Analisi approfondita:</strong> Lavoriamo sui pensieri, le emozioni e i comportamenti
          disfunzionali che possono determinare in te uno stato di disagio o malessere
        </li>

        <li>
          <strong>Obiettivi condivisi:</strong> Insieme capiremo di cosa hai bisogno e definiremo
          gli obiettivi da raggiungere, seguendoti passo dopo passo nel percorso
        </li>

        <li>
          <strong>Ingredienti essenziali:</strong> Ascolto attivo, empatia, disponibilità,
          consapevolezza, formazione continua, obiettivi concreti e tempi brevi
        </li>

        <li>
          <strong>Sostegno costante:</strong> Ti supporto nei momenti di difficoltà, che siano
          transitori o cronici, aiutandoti a scoprire le tue capacità e risorse
        </li>

        <li>
          <strong>Approccio realistico:</strong> Lavoriamo su obiettivi concreti e raggiungibili
          in un tempo definito, limitato e condiviso con te
        </li>
      </ul>
    </ServicePageLayout>
  )
}