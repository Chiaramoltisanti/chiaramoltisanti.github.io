import ServicePageLayout from '@/components/ServicePageLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sostegno Online | Dott.ssa Chiara Moltisanti',
  description: 'Consulenza psicologica online tramite videochiamata. Ideale per chi vive lontano o è un expat. Psicologa a Ragusa e online.',
}

const benefits = [
  {
    icon: 'fas fa-home',
    title: 'Comodità di Casa',
    text: 'Ricevi supporto professionale direttamente da casa tua, senza stress di spostamenti.'
  },
  {
    icon: 'fas fa-globe',
    title: 'Accessibile Ovunque',
    text: 'Perfetto per expat, persone lontane o con difficoltà di mobilità. Basta una connessione internet.'
  },
  {
    icon: 'fas fa-language',
    title: 'Lingua e Cultura',
    text: 'Supporto in italiano con una professionista che comprende il tuo background culturale.'
  }
]

export default function OnlinePage() {
  return (
    <ServicePageLayout
      title="Consulenza Online"
      subtitle="Supporto psicologico professionale tramite videochiamata, ovunque tu sia nel mondo"
      breadcrumbTitle="Online"
      imageSrc="/assets/images/pages/online.jpg"
      imageAlt="Consulenza psicologica online"
      benefits={benefits}
      ctaTitle="Prenota la tua seduta online"
      ctaText="Inizia il tuo percorso di benessere dalla comodità di casa tua"
    >
      <h2 className="contentTitle">Sedute online</h2>
      
      <p>
        Se non hai la possibilità di raggiungere il mio studio, se vivi molto lontano o sei un expat, 
        puoi contattarmi e prenotare una <strong>consulenza psicologica online</strong> tramite videochiamata.
      </p>

      <h3 style={{color: '#56aeff', marginTop: '30px', marginBottom: '20px'}}>
        Cerchi una psicologa italiana all&apos;estero?
      </h3>

      <p>
        Vivere all&apos;estero è una grande avventura, ma non è sempre facile. Quando senti 
        il bisogno di parlare delle tue emozioni, delle tue paure, del tuo malessere e vivi 
        in un paese straniero, potresti avere delle difficoltà.
      </p>

      <p>
        La vita da expat può essere difficile, perché ti renderai conto che sapere una 
        lingua straniera spesso non basta.
      </p>

      <p>
        Nella tua esperienza all&apos;estero potresti provare:
      </p>

      <ul>
        <li>Stress e ansia da adattamento</li>
        <li>Nostalgia di casa e solitudine</li>
        <li>Difficoltà di integrazione sociale</li>
        <li>Isolamento e barriere linguistiche</li>
        <li>Sfide legate al cambiamento di stile di vita</li>
      </ul>

      <p>
        La <strong>consulenza psicologica online</strong> è perfetta per ritrovare il tuo benessere mentale 
        con una professionista che condivide con te lingua e background culturale.
      </p>
    </ServicePageLayout>
  )
}