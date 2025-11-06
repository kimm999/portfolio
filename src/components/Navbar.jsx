import { useState, useEffect, useRef } from 'react'

const Navbar = ({ scrolled }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const containerRef = useRef(null)
  const filterRef = useRef(null)
  const textRef = useRef(null)
  const navItemsRef = useRef([])

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      const scrollY = window.pageYOffset

      sections.forEach((section, index) => {
        const sectionHeight = section.offsetHeight
        const sectionTop = section.offsetTop - 100
        const sectionId = section.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          const navIndex = navItems.findIndex(item => item.href === `#${sectionId}`)
          if (navIndex !== -1 && navIndex !== activeIndex) {
            setActiveIndex(navIndex)
            updateEffectPosition(navItemsRef.current[navIndex])
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeIndex])

  useEffect(() => {
    if (navItemsRef.current[activeIndex]) {
      updateEffectPosition(navItemsRef.current[activeIndex])
    }
  }, [activeIndex])

  const updateEffectPosition = (element) => {
    if (!containerRef.current || !filterRef.current || !textRef.current || !element) return

    const containerRect = containerRef.current.getBoundingClientRect()
    const pos = element.getBoundingClientRect()

    const styles = {
      left: `${pos.x - containerRect.x}px`,
      top: `${pos.y - containerRect.y}px`,
      width: `${pos.width}px`,
      height: `${pos.height}px`
    }

    Object.assign(filterRef.current.style, styles)
    Object.assign(textRef.current.style, styles)
    if (textRef.current) {
      textRef.current.innerText = element.innerText
    }
  }

  const handleNavClick = (e, index, href) => {
    e.preventDefault()
    setIsMenuOpen(false)
    setActiveIndex(index)
    
    if (href.startsWith('#')) {
      const target = document.querySelector(href)
      if (target) {
        const offsetTop = target.offsetTop - 80
        window.scrollTo({
          top: Math.max(0, offsetTop),
          behavior: 'smooth'
        })
      }
    }
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-wrapper">
          <div className="logo">
            <a href="#home">Portfolio</a>
          </div>
          <div className="gooey-nav-container" ref={containerRef}>
            <nav className="gooey-nav-wrapper">
              <ul className={`nav-menu gooey-nav ${isMenuOpen ? 'active' : ''}`}>
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    className={`nav-item ${activeIndex === index ? 'active' : ''}`}
                    ref={el => navItemsRef.current[index] = el}
                  >
                    <a
                      href={item.href}
                      className="nav-link"
                      onClick={(e) => handleNavClick(e, index, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <span className="effect filter" ref={filterRef}></span>
            <span className={`effect text ${activeIndex !== null ? 'active' : ''}`} ref={textRef}></span>
          </div>
          <div
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

