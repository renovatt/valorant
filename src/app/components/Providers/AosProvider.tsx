'use client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Fragment, useEffect } from 'react'
import { AOSProviderProps } from '@/@types'

export const AosProvider = ({ children }: AOSProviderProps) => {
  useEffect(() => {
    AOS.init()
  }, [])

  return <Fragment>{children}</Fragment>
}
