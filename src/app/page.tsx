import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticlesBackground from './components/ParticlesBackground'

export default function Home() {
  return (
    <div className="bg-forge bg-forge-animated min-h-screen">
      <ParticlesBackground />
      <main>
        <Navbar />
        <Hero />
        <AboutMe />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}