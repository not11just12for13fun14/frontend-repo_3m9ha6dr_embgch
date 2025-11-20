import { Instagram, Twitter, Dribbble, Linkedin } from 'lucide-react'

function Footer() {
  return (
    <footer className="relative mt-16 py-10">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-emerald-200/70 text-sm">© {new Date().getFullYear()} Elite AI Studio. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon"><Twitter className="w-4 h-4" /></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon"><Instagram className="w-4 h-4" /></a>
          <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="social-icon"><Dribbble className="w-4 h-4" /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon"><Linkedin className="w-4 h-4" /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
