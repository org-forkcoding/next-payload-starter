'use client'

import { motion } from 'framer-motion'

export const useMotionComp = (type: keyof HTMLElementTagNameMap) => {
  switch (type) {
    case 'h1':
      return motion.h1
    case 'h2':
      return motion.h2
    case 'h3':
      return motion.h3
    case 'h4':
      return motion.h4
    case 'h5':
      return motion.h5
    case 'p':
      return motion.p
    case 'div':
      return motion.div
    case 'a':
      return motion.a
    case 'button':
      return motion.button
    case 'section':
      return motion.section
    case 'img':
      return motion.img
    default:
      return motion.div
  }
}
