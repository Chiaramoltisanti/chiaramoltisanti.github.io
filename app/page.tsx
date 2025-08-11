import Header from '@/components/Header'
import About from '@/components/About'
import Mission from '@/components/Mission'
import Services from '@/components/Services'
import Sessions from '@/components/Sessions'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Mission />
        <Services />
        <Sessions />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}