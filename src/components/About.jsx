import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(700px_400px_at_50%_20%,rgba(147,51,234,0.12),transparent)]" />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-semibold text-white/90">
          About
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-6 text-white/70 text-lg leading-relaxed">
          I craft software that blends advanced computer science with expressive interfaces. My focus is on performant systems, elegant architectures, and delightful micro‑interactions that make complex ideas feel simple.
        </motion.p>
      </div>
    </section>
  )
}
