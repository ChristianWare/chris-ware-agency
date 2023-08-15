import Image from 'next/image'
import styles from './page.module.css'
import { Mandali } from 'next/font/google'
import Hero from './components/Hero/Hero'

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  )
}
