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
        <section id="contact" ref={ref} className="py-16 md:py-20">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="glass-surface rounded-3xl p-7 text-center md:p-10"
                >
                    <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Entre em Contato</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-white/70">
                        Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato comigo via WhatsApp para uma conversa rápida ou para discutir suas ideias de projeto.
                    </p>
                    <a
                        href="https://wa.me/27988080038"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-green-600 px-6 text-sm font-semibold text-white shadow-[0_16px_50px_rgba(22,163,74,0.25)] transition hover:bg-green-500"
                    >
                        <PhoneIcon className="h-5 w-5" />
                        Contato via WhatsApp
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default Contato
