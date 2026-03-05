import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="bg-forge min-h-screen">
      <main className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8 min-h-screen">
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