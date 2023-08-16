import styles from './page.module.css'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import About from './components/About/About'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
    </main>
  )
}
