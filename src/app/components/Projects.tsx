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
    <section id="projects" ref={ref} className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Projetos em Destaque</h2>
            <p className="mt-3 text-base leading-6 text-white/65 md:text-sm">
              Alguns projetos recentes com foco em UX, performance e entrega.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projetos.map((projeto, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-glass group overflow-hidden rounded-3xl transition hover:border-white/15"
              >
                <div className="relative">
                  <Image
                    src={projeto.imagem}
                    alt={projeto.titulo}
                    width={500}
                    height={300}
                    className="h-48 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white">{projeto.titulo}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/65">{projeto.descricao}</p>
                  <a
                    href={projeto.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex h-11 items-center justify-center rounded-full bg-blue-600 px-5 text-sm font-semibold text-white shadow-[0_16px_50px_rgba(37,99,235,0.25)] transition hover:bg-blue-500"
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
