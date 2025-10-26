import { useState, useEffect } from 'react';
import { Code2 } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-md bg-neutral-950/70 border-b border-neutral-800/60' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-teal-500 to-cyan-400 text-neutral-900">
            <Code2 size={18} />
          </span>
          <span className="text-neutral-100">Sujal Shrestha</span>
        </a>
        <div className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#projects" className="text-neutral-300 hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="text-neutral-300 hover:text-white transition-colors">Contact</a>
          <a href="/resume.pdf" className="px-3 py-1.5 rounded-md bg-neutral-100 text-neutral-900 hover:bg-white transition-colors">Resume</a>
        </div>
      </nav>
    </header>
  );
}
