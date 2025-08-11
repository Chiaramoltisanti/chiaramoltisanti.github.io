import ServicePageLayout from '@/components/ServicePageLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terapia a Seduta Singola | Dott.ssa Chiara Moltisanti',
  description: 'Terapia a Seduta Singola per massima efficacia in tempi brevi. Riappropriati delle tue risorse con la Dott.ssa Chiara Moltisanti, psicologa a Ragusa e online.',
}

const benefits = [
  {
    icon: 'fas fa-clock',
    title: 'Tempi Brevi',
    text: 'Risultati efficaci in tempi ridotti, spesso anche con un solo incontro mirato.'
  },
  {
    icon: 'fas fa-lightbulb',
    title: 'Massima Efficacia',
    text: 'Ogni seduta è strutturata per ottenere il massimo beneficio e insight possibile.'
  },
  {
    icon: 'fas fa-tools',
    title: 'Strumenti Pratici',
    text: 'Ricevi strumenti concreti e strategie immediatamente applicabili nella vita quotidiana.'
  }
]

export default function TSSPage() {
  return (
    <ServicePageLayout
      title="Terapia a Seduta Singola"
      subtitle="Massima efficacia da ogni singolo incontro per riappropriarti delle tue risorse in tempi brevi"
      breadcrumbTitle="TSS"
      imageSrc="/assets/images/pages/tts.jpg"
      imageAlt="Terapia a seduta singola"
      benefits={benefits}
      ctaTitle="Prova l'efficacia della TSS"
      ctaText="Scopri come un solo incontro può fare la differenza"
    >
      <h2 className="contentTitle">La Terapia a Seduta Singola</h2>
      
      <p>
        L&apos;idea alla base di questo metodo è che spesso <strong>non sono necessari percorsi lunghi</strong> 
        per risolvere un problema, ma che anche <em>solo un incontro</em> possa essere sufficiente 
        alla risoluzione del problema.
      </p>

      <div style={{background: '#f8f9fa', padding: '30px', borderRadius: '10px', margin: '30px 0'}}>
        <h3 style={{color: '#56aeff', marginBottom: '20px'}}>Domande Frequenti sulla TSS</h3>
        
        <div style={{marginBottom: '20px'}}>
          <h4 style={{color: '#495057', fontSize: '1.1rem'}}>In cosa consiste?</h4>
          <p>È una forma di terapia breve che permette di ottenere il massimo da ogni singola seduta.</p>
        </div>

        <div style={{marginBottom: '20px'}}>
          <h4 style={{color: '#495057', fontSize: '1.1rem'}}>È una tecnica valida?</h4>
          <p>Le ricerche hanno confermato che una sola seduta può essere più che sufficiente in una grande quantità di casi.</p>
        </div>

        <div style={{marginBottom: '20px'}}>
          <h4 style={{color: '#495057', fontSize: '1.1rem'}}>Cosa significa Terapia a Seduta Singola?</h4>
          <p>Non significa fare sempre e solo una seduta! Significa essere formati in una <strong>Terapia Breve</strong> che permette di ottenere il massimo da ogni singola (e spesso unica) seduta.</p>
        </div>

        <div style={{marginBottom: '20px'}}>
          <h4 style={{color: '#495057', fontSize: '1.1rem'}}>E se un solo incontro non basta?</h4>
          <p>La porta del mio studio è sempre aperta e valuteremo insieme se sia il caso di fare un altro incontro!</p>
        </div>

        <div>
          <h4 style={{color: '#495057', fontSize: '1.1rem'}}>È adatta a te?</h4>
          <p>Se pensi che anche un solo incontro possa essere <strong>efficace</strong>, allora è l&apos;approccio che fa per te.</p>
        </div>
      </div>
    </ServicePageLayout>
  )
}