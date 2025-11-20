import Spline from '@splinetool/react-spline'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, 150])
  const opacity = useTransform(scrollY, [0, 400], [1, 0.6])

  return (
    <section className="relative min-h-[90vh] pt-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_70%_-10%,rgba(168,85,247,0.25),transparent),radial-gradient(1000px_500px_at_20%_20%,rgba(59,130,246,0.18),transparent)]" />

      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6">
          <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-5xl md:text-6xl font-bold tracking-tight text-white">
            Building immersive, performant digital experiences
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-6 text-lg md:text-xl text-white/70">
            Computer Science engineer specializing in full‑stack development, creative coding, and interactive systems.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }} className="mt-10 flex items-center gap-4">
            <a href="#work" className="px-5 py-3 rounded-xl bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition border border-white/20">View Work</a>
            <a href="#contact" className="px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/30">Get in Touch</a>
          </motion.div>
        </div>

        <div className="lg:col-span-6">
          <div className="relative h-[420px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_200px_at_20%_10%,rgba(255,255,255,0.08),transparent)]" />
            <div className="absolute -inset-24 opacity-30 bg-[conic-gradient(from_180deg_at_50%_50%,#6EE7F9_0deg,#A78BFA_120deg,#60A5FA_240deg,#6EE7F9_360deg)] blur-3xl pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(80%_60%_at_50%_0%,black,transparent)] bg-[url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"2\"/></filter><rect width=\"100%\" height=\"100%\" filter=\"url(%23n)\" opacity=\"0.04\"/></svg>')]" />
    </section>
  )
}
