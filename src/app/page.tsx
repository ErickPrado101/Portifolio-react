import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticlesBackground from './components/ParticlesBackground'

export default function Home() {
  return (
    <div className="relative bg-forge bg-forge-animated min-h-screen">
      <ParticlesBackground />
      <main className="relative z-10">
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