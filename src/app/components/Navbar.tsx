'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-white/[0.06] backdrop-blur supports-[backdrop-filter]:backdrop-blur supports-[backdrop-filter]:backdrop-saturate-150">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-base font-semibold tracking-wide text-white">
              Portfolio de <span className="text-blue-500">Érick Prado</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6 text-sm text-white/80">
              <a href="#" className="transition hover:text-white">Início</a>
              <a href="#about" className="transition hover:text-white">Sobre</a>
              <a href="#projects" className="transition hover:text-white">Projetos</a>
              <a href="#contact" className="transition hover:text-white">Contato</a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-white/70 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/30"
            >
              <span className="sr-only">Abrir menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div 
          className="md:hidden"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mx-4 mb-4 mt-3 rounded-2xl border border-white/10 bg-black/30 p-2 backdrop-blur">
            <a href="#" className="block rounded-xl px-4 py-3 text-sm font-medium text-white/80 transition hover:bg-white/5 hover:text-white">Início</a>
            <a href="#about" className="block rounded-xl px-4 py-3 text-sm font-medium text-white/80 transition hover:bg-white/5 hover:text-white">Sobre</a>
            <a href="#projects" className="block rounded-xl px-4 py-3 text-sm font-medium text-white/80 transition hover:bg-white/5 hover:text-white">Projetos</a>
            <a href="#contact" className="block rounded-xl px-4 py-3 text-sm font-medium text-white/80 transition hover:bg-white/5 hover:text-white">Contato</a>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar