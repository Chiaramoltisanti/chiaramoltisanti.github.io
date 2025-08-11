import ServicePageLayout from '@/components/ServicePageLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rilassamento | Dott.ssa Chiara Moltisanti',
  description: 'Tecniche di rilassamento per gestire lo stress di lavoro, famiglia e studio. Ritorna in contatto con te stesso. Psicologa a Ragusa e online.',
}

const benefits = [
  {
    icon: 'fas fa-spa',
    title: 'Riduce lo Stress',
    text: 'Tecniche specifiche per diminuire i livelli di stress e tensione accumulati nella vita quotidiana.'
  },
  {
    icon: 'fas fa-bed',
    title: 'Migliora il Sonno',
    text: 'Il rilassamento favorisce un sonno più profondo e ristoratore, essenziale per il benessere.'
  },
  {
    icon: 'fas fa-heartbeat',
    title: 'Benefici Fisici',
    text: 'Riduce tensioni muscolari, mal di testa e altri sintomi fisici legati allo stress.'
  }
]

export default function RilassamentoPage() {
  return (
    <ServicePageLayout
      title="Tecniche di Rilassamento"
      subtitle="Ritrovare l'equilibrio perduto attraverso tecniche scientifiche di rilassamento muscolare e mentale"
      breadcrumbTitle="Rilassamento"
      imageSrc="/assets/images/pages/relax.jpg"
      imageAlt="Tecniche di rilassamento"
      benefits={benefits}
      ctaTitle="Ritrova il tuo equilibrio"
      ctaText="Impara tecniche efficaci per gestire lo stress quotidiano"
    >
      <h2 className="contentTitle">Obiettivo benessere!</h2>
      
      <p>
        <em>&quot;Quando c&apos;è la salute c&apos;è tutto&quot;</em> - un proverbio che sicuramente conosci.
      </p>

      <p>
        Ma cos&apos;è davvero la salute? L&apos;OMS la definisce <strong>&quot;uno stato di completo 
        benessere fisico, mentale e sociale&quot;</strong> e non semplice assenza di malattia.
      </p>

      <p>
        Se ti senti immerso quotidianamente in una società che ti chiede sempre di più, 
        potresti risentire di un eccessivo carico di ansia e stress, con conseguenze fisiche importanti.
      </p>

      <p>
        Lo stress derivante da:
      </p>

      <ul>
        <li>Pressioni lavorative eccessive</li>
        <li>Responsabilità familiari</li>
        <li>Impegni di studio intensi</li>
        <li>Ritmi di vita frenetici</li>
      </ul>

      <p>
        Può portarti a conseguenze sia fisiche che mentali, rischiando di rallentarti, 
        farti vivere male e farti perdere il contatto con te stesso.
      </p>

      <p>
        <strong>Le tecniche di rilassamento</strong> ti permettono di ritrovare l&apos;equilibrio perduto. 
        Attraverso il <em>Rilassamento Muscolare Progressivo</em> posso aiutarti a 
        &quot;rilassare la mente&quot; attraverso il corpo.
      </p>
    </ServicePageLayout>
  )
}