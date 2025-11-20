import Hero from './components/Hero'
import Features from './components/Features'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'

function App() {
  const [showTop, setShowTop] = useState(false)
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-emerald-500/30">
      {/* global bg layers */}
      <div className="fixed inset-0 -z-0 bg-[conic-gradient(at_30%_10%,#0f172a,25%,#020617_50%,#0f172a_75%,#020617)]" />
      <div className="fixed inset-0 -z-0 opacity-[0.15] grain" />

      {/* Top nav */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-slate-900/40 border-b border-emerald-500/10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_24px_6px_rgba(16,185,129,0.6)]" />
            <span className="text-sm tracking-widest text-emerald-200/90">ELITE AI STUDIO</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-emerald-200/80">
            <a href="#hero" className="hover:text-emerald-100 transition">Home</a>
            <a href="#features" className="hover:text-emerald-100 transition">Capabilities</a>
            <a href="#contact" className="hover:text-emerald-100 transition">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <div id="features"><Features /></div>
        <Contact />
      </main>

      <Footer />

      {/* Floating contact button */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 neon-fab"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M20.52 3.48A11.94 11.94 0 0012.06 0 12 12 0 000 12a11.94 11.94 0 003.48 8.52A11.94 11.94 0 0012 24a12 12 0 0012-12 11.94 11.94 0 00-3.48-8.52zM12 22a9.94 9.94 0 01-5.09-1.42l-.36-.21-3.78 1 1-3.68-.23-.37A9.94 9.94 0 012 12a10 10 0 1110 10zm5.39-6.4c-.3-.15-1.77-.87-2.05-.98s-.47-.15-.66.15-.76.98-.93 1.18-.34.22-.63.07a8.13 8.13 0 01-2.4-1.49 9 9 0 01-1.66-2.06c-.17-.3 0-.46.13-.61s.3-.34.45-.52a2 2 0 00.3-.49.54.54 0 00-.02-.5c-.06-.15-.66-1.59-.9-2.18s-.48-.5-.66-.51h-.57a1.1 1.1 0 00-.79.37 3.33 3.33 0 00-1 2.47 5.78 5.78 0 001.21 3.07 13.21 13.21 0 004.93 4.69 16.77 16.77 0 002.01.74 4.84 4.84 0 002.22.14 3.66 3.66 0 002.39-1.69 3 3 0 00.21-1.69c-.1-.14-.27-.22-.57-.37z"/></svg>
      </a>

      {/* Scroll to top */}
      {showTop && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-20 z-40 glass-btn px-3 py-2 text-xs">
          Top
        </button>
      )}
    </div>
  )
}

export default App
