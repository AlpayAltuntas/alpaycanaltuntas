import { ThemeProvider } from './components/ThemeProvider'
import { Nav } from './components/Nav'
import { ScrollProgress } from './components/ScrollProgress'
import { Footer } from './components/Footer'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Impact } from './sections/Impact'
import { Experience } from './sections/Experience'
import { Skills } from './sections/Skills'
import { Passions } from './sections/Passions'
import { Education } from './sections/Education'
import { Contact } from './sections/Contact'

function App() {
  return (
    <ThemeProvider>
      <a
        href="#top"
        className="sr-only-focusable fixed left-4 top-4 z-50 rounded bg-accent px-4 py-2 text-sm font-medium text-accent-ink"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <About />
        <Impact />
        <Experience />
        <Skills />
        <Passions />
        <Education />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default App
