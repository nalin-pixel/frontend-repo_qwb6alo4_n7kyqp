import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(900px_400px_at_30%_30%,rgba(59,130,246,0.12),transparent)]" />
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-10 overflow-hidden">
          <div className="absolute -inset-24 opacity-20 bg-[conic-gradient(from_180deg_at_50%_50%,#60A5FA_0deg,#A78BFA_120deg,#06B6D4_240deg,#60A5FA_360deg)] blur-3xl" />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-semibold text-white/90">Let’s build something exceptional</h3>
            <p className="text-white/70 mt-3">Open to roles, consulting, and collaborations.</p>
            <a href="mailto:you@example.com" className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/30">
              <Mail size={18} />
              you@example.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
