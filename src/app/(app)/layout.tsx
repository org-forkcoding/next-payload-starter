import { Metadata } from 'next'
import '@/globals.css'
import { TanstackProviders } from '@/components/providers/tanstack-provider'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { ModeToggle } from '@/components/theme-toggle'

export const metadata: Metadata = {
  title: 'Advanced Payload',
  description: 'Payload Advanced Practice',
}

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <TanstackProviders>
      <html suppressHydrationWarning>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ModeToggle />
            {children}
          </ThemeProvider>
          <Toaster />
        </body>
      </html>
    </TanstackProviders>
  )
}
export default RootLayout
