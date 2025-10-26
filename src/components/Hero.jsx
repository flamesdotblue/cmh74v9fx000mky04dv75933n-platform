import Spline from '@splinetool/react-spline';
import { MapPin, GraduationCap, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 sm:pt-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-72 w-[40rem] rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 text-xs px-2.5 py-1.5 rounded-full bg-neutral-900/70 border border-neutral-800/70">
            <span className="inline-flex h-2 w-2 rounded-full bg-green-400" />
            Available for freelance work
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
            Crafting modern web experiences with a minimal, human touch
          </h1>
          <p className="mt-4 text-neutral-300 leading-relaxed max-w-xl">
            I’m Sujal, a web developer based in Nepal pursuing a Bachelor’s in Information Technology.
            I blend clean aesthetics with performant engineering to build delightful, accessible interfaces.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-neutral-300">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-neutral-900/60 border border-neutral-800/60">
              <MapPin size={16} /> Kathmandu, Nepal
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-neutral-900/60 border border-neutral-800/60">
              <GraduationCap size={16} /> BSc. IT Student
            </span>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="group inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white text-neutral-900 font-medium hover:opacity-95 transition">
              View Projects
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-neutral-800 text-neutral-200 hover:bg-neutral-900/60 transition">
              Contact
            </a>
          </div>
        </div>

        <div className="relative h-[55vh] sm:h-[60vh] md:h-[65vh] lg:h-[70vh]">
          <div className="absolute inset-0 rounded-xl overflow-hidden border border-neutral-800/60 bg-neutral-900/40">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
