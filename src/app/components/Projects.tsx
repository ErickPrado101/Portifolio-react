'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const projetos = [
  {
    titulo: 'Plataforma Local de Gerenciamento de Documentos Digitais',
    descricao: 'Feito com Next.js, essa é uma plataforma de gerenciamento de documentos digitais (EDM). É um sistema baseado no armazenamento e performance da sua máquina (quando instalado, pois a demo não funciona on-line para poupar recursos) que permite armazenar, organizar, acessar e compartilhar documentos eletrônicos de forma segura e eficiente. Essa solução é amplamente utilizada por empresas e organizações para reduzir o uso de papel, melhorar a produtividade e garantir conformidade regulatória.',
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
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center text-white mb-12">Projetos em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projetos.map((projeto, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <Image
                  src={projeto.imagem}
                  alt={projeto.titulo}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{projeto.titulo}</h3>
                  <p className="text-gray-400 mb-4">{projeto.descricao}</p>
                  <a
                    href={projeto.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                  >
                    Ver Projeto
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projetos
