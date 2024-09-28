'use client'

import React, { CSSProperties, PropsWithChildren } from 'react'
import { MotionProps } from 'framer-motion'
import { useMotionComp } from './motion.hook'

export type MotionVariant = MotionProps['variants']
export type MotionInit = MotionProps['initial']
export type MotionAnimate = MotionProps['animate']
export type MotionTransition = MotionProps['transition']
export type MotionWhileInView = MotionProps['whileInView']
export type MotionWhileHover = MotionProps['whileHover']

type NormalMotionProps = {
  style?: CSSProperties
  variants?: MotionVariant
  initial?: MotionInit
  animate?: MotionAnimate
  transition?: MotionTransition
  whileInView?: MotionWhileInView
  whileHover?: MotionWhileHover
  type?: keyof HTMLElementTagNameMap
} & PropsWithChildren

const NormalMotion = ({
  type,
  variants,
  children,
  initial,
  animate,
  transition,
  whileInView,
  whileHover,
  ...props
}: NormalMotionProps) => {
  const Motion = useMotionComp(type || 'div')
  return (
    <Motion
      variants={variants}
      initial={initial}
      animate={animate}
      whileInView={whileInView}
      whileHover={whileHover}
      transition={transition}
      viewport={{ once: true }}
      {...props}
    >
      {children}
    </Motion>
  )
}

export default NormalMotion
