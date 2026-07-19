import { useContent } from '../i18n/LanguageContext'
import { Container } from './Container'

export function Footer() {
  const { person, ui } = useContent()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="font-mono text-xs text-muted">
          © {year} {person.name}. {ui.allRightsReserved}
        </p>
        <p className="max-w-md font-mono text-xs italic text-muted">{person.funFact}</p>
      </Container>
    </footer>
  )
}
