import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-10 top-10 h-52 w-52 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      </div>
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Let’s build something thoughtful</h2>
          <p className="mt-3 text-neutral-300 max-w-xl">
            I’m open to freelance work, internships, and collaborations. If you’re building something impactful for Nepal or beyond, I’d love to chat.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:hello@sujal.dev"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white text-neutral-900 font-medium hover:opacity-95 transition"
            >
              <Mail size={18} /> Email me
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-neutral-800 text-neutral-200 hover:bg-neutral-900/60 transition"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-neutral-800 text-neutral-200 hover:bg-neutral-900/60 transition"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-neutral-800/70 bg-neutral-900/40 p-6">
          <form action="mailto:hello@sujal.dev" method="post" encType="text/plain" className="grid gap-4">
            <div className="grid gap-1.5">
              <label htmlFor="name" className="text-sm text-neutral-300">Name</label>
              <input id="name" name="name" className="px-3 py-2 rounded-md bg-neutral-950 border border-neutral-800 outline-none focus:border-neutral-600" placeholder="Your name" />
            </div>
            <div className="grid gap-1.5">
              <label htmlFor="email" className="text-sm text-neutral-300">Email</label>
              <input id="email" name="email" type="email" className="px-3 py-2 rounded-md bg-neutral-950 border border-neutral-800 outline-none focus:border-neutral-600" placeholder="you@example.com" />
            </div>
            <div className="grid gap-1.5">
              <label htmlFor="message" className="text-sm text-neutral-300">Message</label>
              <textarea id="message" name="message" rows={4} className="px-3 py-2 rounded-md bg-neutral-950 border border-neutral-800 outline-none focus:border-neutral-600" placeholder="Tell me about your project" />
            </div>
            <button type="submit" className="mt-2 inline-flex items-center justify-center px-4 py-2 rounded-md bg-white text-neutral-900 font-medium hover:opacity-95 transition">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
