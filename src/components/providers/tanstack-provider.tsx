'use client'
import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const client = new QueryClient()

export const TanstackProviders = ({ children }: { children: React.ReactNode }) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
