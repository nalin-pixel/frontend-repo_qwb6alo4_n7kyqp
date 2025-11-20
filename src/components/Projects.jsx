import { motion, useScroll, useTransform } from 'framer-motion'
import { ExternalLink, Code } from 'lucide-react'

const items = [
  {
    title: 'Realtime Collaboration Platform',
    desc: 'WebRTC, CRDT-based sync, low-latency architecture with edge functions.',
    tags: ['TypeScript', 'WebRTC', 'CRDT', 'Edge'],
    link: '#'
  },
  {
    title: 'Interactive Data Storytelling',
    desc: 'GPU-accelerated WebGL visuals with streaming analytics.',
    tags: ['WebGL', 'D3', 'Streams'],
    link: '#'
  },
  {
    title: 'Creative Coding Toolkit',
    desc: 'Modular shader graph and procedural animation library.',
    tags: ['Shaders', 'Three.js', 'Design'],
    link: '#'
  },
]

export default function Projects() {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0.2, 0.6], [0.98, 1])

  return (
    <section id="work" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_20%_20%,rgba(99,102,241,0.12),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.h2 style={{ scale }} className="text-3xl md:text-4xl font-semibold text-white/90">
          Selected Projects
        </motion.h2>
        <p className="text-white/60 mt-3 max-w-2xl">
          A snapshot of technically challenging and design-forward work.
        </p>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 overflow-hidden relative"
            >
              <div className="absolute -inset-24 opacity-20 bg-[conic-gradient(from_180deg_at_50%_50%,#60A5FA_0deg,#A78BFA_120deg,#06B6D4_240deg,#60A5FA_360deg)] blur-3xl transition-opacity group-hover:opacity-30" />
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold text-lg">{p.title}</h3>
                  <ExternalLink className="text-white/60 group-hover:text-white" size={18} />
                </div>
                <p className="text-white/70 mt-2 text-sm">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-white/70">{t}</span>
                  ))}
                </div>
                <div className="mt-5 inline-flex items-center gap-2 text-cyan-300/80">
                  <Code size={16} /> <span className="text-xs">Case Study</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
