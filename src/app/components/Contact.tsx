'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { PhoneIcon } from '@heroicons/react/24/outline'

const Contato = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    return (
        <section id="contact" ref={ref} className="py-20 bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <h2 className="text-3xl font-bold text-white mb-8">Entre em Contato</h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato comigo via WhatsApp para uma conversa rápida ou para discutir suas ideias de projeto.
                    </p>
                    <a
                        href="https://wa.me/27988080038"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        <PhoneIcon className="h-6 w-6 mr-2" />
                        Contato via WhatsApp
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default Contato
