'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const projetos = [
  {
    titulo: 'e-commerce(demo)',
    descricao: 'Plataforma em Next.js para vendas de produtos que simula a venda quanto acúmlo e troca de pontos por meio de serviços mais produtos.',
    imagem: '/Captura de tela 2025-02-27 115456.png',
    link: 'https://mvp-ecommerce-beryl.vercel.app',
  },
  {
    titulo: 'Plataforma de gerenciamento de vendas',
    descricao: 'Painel de análise para gestão de vendas e lucros dos vendedores, proporcionando dados atualizados para otimizar a performance e decisões estratégicas.',
    imagem: '/projetc2.png',
    link: 'https://visor-ai.vercel.app',
  },
  {
    titulo: 'Feedtalk, rede social para sua empresa',
    descricao: 'Feedtalk é a rede social corporativa que facilita o feedback interno, promovendo comunicação e engajamento entre os colaboradores.',
    imagem: '/project3.png',
    link: 'https://feedtalk-3mxp.vercel.app',
  },
  {
    titulo: 'Foodtech, melhore seu restaurante',
    descricao: 'Foodtech é a novo saas para o ramo alimentício, lucro totalmente seu e ajude total no seu negócio, promovendo otimização e usuabilidade.',
    imagem: '/Capturar.PNG',
    link: 'https://foodtech-sage.vercel.app',
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
