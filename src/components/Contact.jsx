import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Calendar, Send, Loader2, Phone } from 'lucide-react'

const initialState = { name: '', email: '', message: '' }

function Contact() {
  const [form, setForm] = useState(initialState)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)

    // Simulate async submit
    await new Promise((r) => setTimeout(r, 1200))

    setLoading(false)
    setSuccess(true)
    setForm(initialState)
    setTimeout(() => setSuccess(false), 4000)
  }

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(800px_400px_at_10%_10%,rgba(16,185,129,0.15),transparent),radial-gradient(800px_400px_at_90%_90%,rgba(16,185,129,0.12),transparent)]" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold gradient-text"
          >
            Collaborate with our studio
          </motion.h2>
          <p className="mt-4 text-emerald-200/80 max-w-md">
            Tell us about your vision. We’ll design a bespoke, impactful experience with cinematic precision.
          </p>

          {/* Socials */}
          <div id="social" className="mt-8 flex flex-wrap gap-3">
            {[
              { label: 'Twitter', href: 'https://twitter.com' },
              { label: 'Instagram', href: 'https://instagram.com' },
              { label: 'Dribbble', href: 'https://dribbble.com' },
              { label: 'LinkedIn', href: 'https://linkedin.com' },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="social-chip">
                <span className="relative z-10">{s.label}</span>
              </a>
            ))}
          </div>

          {/* Email */}
          <div className="mt-8 p-4 glass-card inline-flex items-center gap-3">
            <Mail className="w-5 h-5 text-emerald-300" />
            <a href="mailto:studio@elitelab.ai" className="text-emerald-200 hover:text-emerald-100 transition">studio@elitelab.ai</a>
          </div>

          {/* Optional booking */}
          <div className="mt-6">
            <a
              href="https://cal.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 glass-btn"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a consultation</span>
            </a>
          </div>
        </div>

        {/* Form */}
        <div className="glass-panel p-6 md:p-8">
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={onChange}
                required
                className="input"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                required
                className="input"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label className="label">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                rows={5}
                required
                className="input min-h-[140px]"
                placeholder="Tell us about your project..."
              />
            </div>

            <div className="flex items-center gap-3">
              <button type="submit" disabled={loading} className="neon-btn inline-flex items-center gap-2">
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="glass-btn inline-flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            {success && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="success-banner"
              >
                Message received. We’ll get back within 24 hours.
              </motion.div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
