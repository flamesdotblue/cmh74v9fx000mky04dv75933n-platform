import { Github, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Himalaya Trails',
    description:
      'A minimalist travel guide to Nepal’s trekking routes with offline-ready PWA support and dynamic maps.',
    stack: ['React', 'Vite', 'Leaflet', 'PWA'],
    link: '#',
    repo: '#',
    accent: 'from-teal-400/20 to-cyan-400/10',
  },
  {
    title: 'Kavya Notes',
    description:
      'A sleek markdown notebook for students. Fast, keyboard-first, and themeable with local-first storage.',
    stack: ['TypeScript', 'Zustand', 'Tailwind'],
    link: '#',
    repo: '#',
    accent: 'from-fuchsia-400/20 to-indigo-400/10',
  },
  {
    title: 'Bazaar Byte',
    description:
      'Headless e-commerce starter focused on performance, accessibility, and Nepal payment gateways.',
    stack: ['Next.js', 'Stripe', 'Prisma'],
    link: '#',
    repo: '#',
    accent: 'from-amber-400/20 to-rose-400/10',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Selected Work</h2>
          <p className="mt-3 text-neutral-300">A few projects that reflect my focus on performance, usability, and clean design.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <article key={i} className="group relative rounded-xl border border-neutral-800/70 bg-neutral-900/40 overflow-hidden">
              <div className={`absolute inset-x-0 top-0 h-28 bg-gradient-to-b ${p.accent} pointer-events-none`} />
              <div className="relative p-6 flex flex-col h-full">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-neutral-300 leading-relaxed">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="text-xs px-2.5 py-1 rounded-md bg-neutral-950 border border-neutral-800 text-neutral-300">{s}</span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <a href={p.link} className="inline-flex items-center gap-1.5 text-sm text-white hover:underline">
                    Live <ArrowRight size={16} />
                  </a>
                  <a href={p.repo} className="inline-flex items-center gap-1.5 text-sm text-neutral-300 hover:text-white transition">
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
