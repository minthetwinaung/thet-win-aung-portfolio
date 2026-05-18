import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Pipeline from '@/components/Pipeline'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Learn from '@/components/Learn'
import Game from '@/components/Game'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Pipeline />
      <Experience />
      <Projects />
      <Skills />
      <Learn />
      <Game />
      <Contact />
    </main>
  )
}
