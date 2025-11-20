import { motion } from 'framer-motion'
import { Sparkles, Shield, Zap, Film } from 'lucide-react'

const items = [
  { icon: Film, title: 'Cinematic Craft', desc: 'Art-direction and motion with a filmic sensibility.' },
  { icon: Zap, title: 'AI-Accelerated', desc: 'Intelligent pipelines to move from concept to delivery fast.' },
  { icon: Sparkles, title: 'Premium Finish', desc: 'Neon gradients, glass, and micro-interactions polished to perfection.' },
  { icon: Shield, title: 'Reliable Delivery', desc: 'Process-driven collaboration with meticulous quality control.' },
]

function Features() {
  return (
    <section className="relative py-24 md:py-28">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(700px_400px_at_50%_0%,rgba(16,185,129,0.12),transparent)]" />

      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-5xl font-bold gradient-text"
        >
          Designed for ambitious brands
        </motion.h2>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="feature-card"
            >
              <div className="icon-wrap">
                <it.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{it.title}</h3>
              <p className="mt-2 text-emerald-200/80 text-sm">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
