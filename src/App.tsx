import { ThemeProvider } from './components/ThemeProvider'
import { LanguageProvider } from './i18n/LanguageProvider'
import { useContent } from './i18n/LanguageContext'
import { Nav } from './components/Nav'
import { ScrollProgress } from './components/ScrollProgress'
import { Footer } from './components/Footer'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Impact } from './sections/Impact'
import { Experience } from './sections/Experience'
import { Skills } from './sections/Skills'
import { Passions } from './sections/Passions'
import { Community } from './sections/Community'
import { Education } from './sections/Education'
import { Contact } from './sections/Contact'

function AppContent() {
  const { ui } = useContent()

  return (
    <>
      <a
        href="#top"
        className="sr-only-focusable fixed left-4 top-4 z-50 rounded bg-accent px-4 py-2 text-sm font-medium text-accent-ink"
      >
        {ui.skipToContent}
      </a>
      <div className="grain-overlay pointer-events-none fixed inset-0 z-20" aria-hidden="true" />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <About />
        <Impact />
        <Experience />
        <Skills />
        <Passions />
        <Community />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default App
