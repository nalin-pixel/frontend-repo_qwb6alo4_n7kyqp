import { motion } from 'framer-motion'
import { Cpu, Layers, Network, Rocket, Shield, Zap } from 'lucide-react'

const skills = [
  { icon: Cpu, label: 'Systems + CS Fundamentals' },
  { icon: Layers, label: 'Full‑Stack Architecture' },
  { icon: Network, label: 'Realtime & Distributed' },
  { icon: Rocket, label: 'Performance Engineering' },
  { icon: Shield, label: 'Security & Reliability' },
  { icon: Zap, label: 'Creative Coding + WebGL' },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_80%_20%,rgba(14,165,233,0.12),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-white/90">Core Skills</h2>
        <p className="text-white/60 mt-3 max-w-2xl">A blend of engineering rigor and design sensibility.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 relative overflow-hidden"
            >
              <div className="absolute -inset-24 opacity-10 bg-[conic-gradient(from_180deg_at_50%_50%,#A78BFA_0deg,#60A5FA_120deg,#06B6D4_240deg,#A78BFA_360deg)] blur-3xl" />
              <div className="relative z-10 flex items-center gap-4">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-500 grid place-items-center text-white">
                  <Icon size={18} />
                </div>
                <span className="text-white/90 font-medium">{label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
