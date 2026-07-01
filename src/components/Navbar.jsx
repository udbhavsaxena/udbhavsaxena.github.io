import { useState, useEffect } from 'react'
import { meta } from '../data/content'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { label: 'About',      href: '#about'      },
  { label: 'Experience', href: '#experience'  },
  { label: 'Projects',   href: '#projects'    },
  { label: 'Skills',     href: '#skills'      },
  { label: 'Education',  href: '#education'   },
  { label: 'Contact',    href: '#contact'     },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#hero" className={styles.logo} onClick={handleLinkClick}>
          US
        </a>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`} aria-label="Main navigation">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={styles.link}
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}
          <a
            href={meta.resume}
            className={styles.resumeBtn}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  )
}
