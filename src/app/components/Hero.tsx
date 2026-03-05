'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <section
      className="relative flex min-h-[calc(100dvh-4rem)] flex-col items-center justify-center overflow-hidden py-16"
      style={{ paddingTop: '5rem' }} 
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/40 to-black/40"></div>
        <div className="absolute inset-0 bg-forge" />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center px-4 text-center sm:px-8">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-balance text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          Desenvolvedor <span className="text-metal">Web</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-5 max-w-2xl text-pretty text-base leading-7 text-white/70 sm:text-lg md:text-xl"
        >
          Desenvolvendo projetos com inovação e qualidade
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-col flex-wrap justify-center gap-3 sm:flex-row sm:items-center"
        >
          <a
            href="#about"
            className="inline-flex h-12 items-center justify-center rounded-full bg-blue-600 px-6 text-sm font-semibold text-white shadow-[0_16px_50px_rgba(37,99,235,0.35)] transition hover:bg-blue-500"
          >
            Sobre mim
          </a>
          <a
           href="/Erick-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
          >
            Ver currículo
          </a>
        </motion.div>
      </div>

      {/* Profile Picture */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="relative z-10 mt-10 sm:mt-12"
      >
        <div className="ring-accent rounded-full">
          <Image
            src="/foto.jpeg"
            alt="Developer profile picture"
            width={150}
            height={150}
            className="rounded-full border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.55)]"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
