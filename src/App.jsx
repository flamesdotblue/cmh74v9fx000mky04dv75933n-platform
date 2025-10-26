import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-neutral-950 text-neutral-100 min-h-screen antialiased">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-neutral-800/80 py-8 text-center text-sm text-neutral-400">
        <div className="container mx-auto px-6">
          © {new Date().getFullYear()} • Built with React, Tailwind, and a playful Spline scene.
        </div>
      </footer>
    </div>
  );
}

export default App;
