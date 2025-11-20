import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] w-full overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient + Grain overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(16,185,129,0.15),transparent_60%),radial-gradient(1200px_circle_at_80%_30%,rgba(16,185,129,0.12),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 grain" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-emerald-300/90 bg-emerald-500/10 ring-1 ring-emerald-400/30 backdrop-blur-sm"
        >
          Premium AI Studio • Futuristic • Minimal
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="mt-6 text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight gradient-text"
        >
          Let’s Create Something Powerful
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-6 max-w-2xl text-base md:text-lg text-emerald-200/80"
        >
          We craft cinematic, luxury-grade AI visuals and digital experiences. Bold. Modern. Meticulously minimal.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <a href="#contact" className="group neon-btn">
            <span>Start a Project</span>
          </a>
          <a href="#social" className="group glass-btn">
            <span>Explore the Studio</span>
          </a>
        </motion.div>
      </div>

      {/* soft vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
    </section>
  )
}

export default Hero
