import { useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      <main>
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-primary text-white py-6 text-center">
        <p className="text-sm">© 2025 Muhammad Hammad ur Rehman. Built with React.</p>
      </footer>
    </div>
  )
}

export default App
