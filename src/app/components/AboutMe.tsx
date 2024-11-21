'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

const AboutMe = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const satisfactionData = [
    { name: 'Satisfeitos', value: 67 },
    { name: 'Neutros', value: 23 },
  ]

  const clientData = [
    { name: 'Clientes por Indicação', value: 40 },
    { name: 'Clientes Repetidos', value: 33 },
    { name: 'Clientes Novos', value: 27 },
  ]

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28']

  return (
    <section id="about" ref={ref} className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center text-white mb-8">Sobre Mim</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Texto sobre mim */}
            <div>
              <p className="text-gray-300 mb-4">
              Sou desenvolvedor frontend com 2 anos de experiência, apaixonado por tecnologia, aprendizado contínuo e por interações colaborativas. Possuo sólida expertise em React, TypeScript e Next.js, sendo reconhecido por meu raciocínio lógico e por minha participação em diversos projetos de excelência. Minha marca registrada é a versatilidade e a lealdade no trabalho, qualidades que reforçam minha capacidade de agregar valor às equipes e aos projetos. Além disso, possuo uma carta de referência que atesta minhas competências e destaca meu potencial para contribuir de forma significativa com sua empresa.                     </p>
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-white mb-4">Habilidades</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python'].map((skill) => (
                    <span key={skill} className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Gráficos - Mover para a parte inferior com layout horizontal */}
            <div className="md:col-span-2 flex flex-wrap justify-center gap-8 mt-12">
              {/* Gráfico de Satisfação */}
              <div className="w-full sm:w-1/2 lg:w-1/3">
                <h3 className="text-xl font-semibold text-white mb-4">Satisfação dos Projetos(2023)</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={satisfactionData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {satisfactionData.map((entry, index) => (
                        <Cell key={`satisfaction-cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="flex justify-center mt-4">
                  {satisfactionData.map((entry, index) => (
                    <div key={`satisfaction-legend-${index}`} className="flex items-center mr-4">
                      <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                      <span className="text-sm text-gray-300">{entry.name}: {entry.value}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gráfico de Clientes */}
              <div className="w-full sm:w-1/2 lg:w-1/3">
                <h3 className="text-xl font-semibold text-white mb-6">Tipos de clientes(2023)</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={clientData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {clientData.map((entry, index) => (
                        <Cell key={`client-cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="flex justify-center mt-4">
                  {clientData.map((entry, index) => (
                    <div key={`client-legend-${index}`} className="flex items-center mr-4">
                      <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                      <span className="text-sm text-gray-300">{entry.name}: {entry.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutMe
