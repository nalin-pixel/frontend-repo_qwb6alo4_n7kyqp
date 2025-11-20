import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_800px_at_50%_-10%,rgba(99,102,241,0.2),transparent),radial-gradient(800px_500px_at_80%_10%,rgba(6,182,212,0.15),transparent)]" />
      <Navbar />
      <main className="relative z-0">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <footer className="relative z-10 py-10 text-center text-white/50">
        © {new Date().getFullYear()} Your Name — Crafted with care
      </footer>
    </div>
  )
}

export default App
