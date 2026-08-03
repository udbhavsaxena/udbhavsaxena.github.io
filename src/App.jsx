import { useState, useEffect } from 'react'
import './styles/global.css'
import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import About      from './components/About'
import Experience from './components/Experience'
import Projects   from './components/Projects'
import Skills     from './components/Skills'
import Education  from './components/Education'
import Blog       from './components/Blog'
import Contact    from './components/Contact'
import Footer     from './components/Footer'

function getInitialTheme() {
  try {
    const saved = localStorage.getItem('portfolio-theme')
    if (saved === 'light' || saved === 'dark') return saved
  } catch (_) {}
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try { localStorage.setItem('portfolio-theme', theme) } catch (_) {}
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
