import { useState, useEffect } from 'react'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // useEffect: Runs side effects (like adding event listeners) after component renders
  // The empty array [] means this effect runs only once when component mounts
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    
    // Cleanup function: removes event listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <nav className="container mx-auto px-6 flex justify-between items-center">
        <h1 className={`text-2xl font-bold ${scrolled ? 'text-primary' : 'text-primary'}`}>
          MH
        </h1>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {['About', 'Education', 'Skills', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-secondary transition-colors font-medium"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu - Conditional Rendering based on state */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col space-y-4 px-6 py-4">
            {['About', 'Education', 'Skills', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-secondary transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header
