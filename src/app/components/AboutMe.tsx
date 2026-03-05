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
    <section id="about" ref={ref} className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="card-glass rounded-3xl p-6 md:p-10">
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Sobre Mim</h2>
            <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2">
              <div>
                <p className="text-white/70 leading-7">
                  Sou desenvolvedor frontend com 2 anos de experiência, apaixonado por tecnologia, aprendizado contínuo e por interações colaborativas. Possuo sólida expertise em React, TypeScript e Next.js, sendo reconhecido por meu raciocínio lógico e por minha participação em diversos projetos de excelência. Minha marca registrada é a versatilidade e a lealdade no trabalho, qualidades que reforçam minha capacidade de agregar valor às equipes e aos projetos. Além disso, possuo uma carta de referência que atesta minhas competências e destaca meu potencial para contribuir de forma significativa com sua empresa.
                </p>

                <div className="mt-8">
                  <h3 className="text-base font-semibold tracking-[0.22em] text-white/55 md:text-xs">HABILIDADES</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python'].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-blue-500/10 px-3 py-1 text-sm text-white/85"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* Gráfico de Satisfação */}
                <div className="card-glass w-full rounded-3xl p-6">
                  <h3 className="text-base font-semibold tracking-[0.22em] text-white/55 md:text-xs">SATISFAÇÃO (2023)</h3>
                  <div className="mt-5 h-64 md:h-72">
                    <ResponsiveContainer width="100%" height="100%">
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
                  </div>
                  <div className="mt-4 flex flex-wrap justify-center gap-3">
                    {satisfactionData.map((entry, index) => (
                      <div key={`satisfaction-legend-${index}`} className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                        <span className="text-sm text-white/70">
                          {entry.name}: {entry.value}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gráfico de Clientes */}
                <div className="card-glass w-full rounded-3xl p-6">
                  <h3 className="text-base font-semibold tracking-[0.22em] text-white/55 md:text-xs">CLIENTES (2023)</h3>
                  <div className="mt-5 h-64 md:h-72">
                    <ResponsiveContainer width="100%" height="100%">
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
                  </div>
                  <div className="mt-4 flex flex-wrap justify-center gap-3">
                    {clientData.map((entry, index) => (
                      <div key={`client-legend-${index}`} className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                        <span className="text-sm text-white/70">
                          {entry.name}: {entry.value}%
                        </span>
                      </div>
                    ))}
                  </div>
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
