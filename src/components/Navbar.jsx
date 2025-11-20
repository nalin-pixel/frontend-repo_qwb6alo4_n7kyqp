import { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={classNames(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled ? 'backdrop-blur-xl bg-white/5 border-b border-white/10 shadow-[0_10px_40px_-10px_rgba(59,130,246,0.25)]' : 'bg-transparent'
    )}>
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-500 shadow-inner shadow-indigo-500/20" />
          <span className="text-white/90 font-semibold tracking-tight text-lg">Your Name</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {[
            ['Work', '#work'],
            ['Skills', '#skills'],
            ['About', '#about'],
            ['Contact', '#contact'],
          ].map(([label, href]) => (
            <a key={label} href={href} className="text-white/70 hover:text-white transition-colors">{label}</a>
          ))}
          <div className="h-6 w-px bg-white/10" />
          <div className="flex items-center gap-4">
            <a href="#" aria-label="GitHub" className="text-white/70 hover:text-white"><Github size={18} /></a>
            <a href="#" aria-label="LinkedIn" className="text-white/70 hover:text-white"><Linkedin size={18} /></a>
            <a href="#contact" aria-label="Email" className="text-white/70 hover:text-white"><Mail size={18} /></a>
          </div>
        </div>

        <button className="md:hidden text-white/80" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden px-6 pb-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 space-y-2">
            {[
              ['Work', '#work'],
              ['Skills', '#skills'],
              ['About', '#about'],
              ['Contact', '#contact'],
            ].map(([label, href]) => (
              <a key={label} href={href} onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/5">
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
