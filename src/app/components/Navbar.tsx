'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-blue-500 text-2xl font-bold">Portfolio de Érick Prado</a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="text-gray-300 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Início</a>
              <a href="#about" className="text-gray-300 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Sobre</a>
              <a href="#projects" className="text-gray-300 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Projetos</a>
              <a href="#contact" className="text-gray-300 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Contato</a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-gray-300 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium">Início</a>
            <a href="#about" className="text-gray-300 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium">Sobre</a>
            <a href="#projects" className="text-gray-300 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium">Projetos</a>
            <a href="#contact" className="text-gray-300 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium">Contato</a>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar