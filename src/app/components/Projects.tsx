'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const projetos = [
  {
    titulo: 'Plataforma Local de Gerenciamento de Documentos Digitais (DEMO)',
    descricao: 'Plataforma Next.js para gerenciar documentos digitais localmente, focada em segurança, produtividade e redução de papel. Entre em contato para receber a versão totalmente funcional instalada em sua máquina.',
    imagem: '/project1.jpg',
    link: 'https://sdd-beta.vercel.app/',
  },
  {
    titulo: 'Painel de Mídias Sociais',
    descricao: 'Painel de análise em tempo real para gestão de mídias sociais.',
    imagem: '/project2.jpg',
    link: 'https://example.com/project2',
  },
  {
    titulo: 'Chatbot com Inteligência Artificial',
    descricao: 'Um chatbot inteligente utilizando processamento de linguagem natural.',
    imagem: '/project3.jpg',
    link: 'https://example.com/project3',
  },
]

const Projetos = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" ref={ref} className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       
