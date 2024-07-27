'use client'

import { ThemeProvider } from "next-themes"

const Providers = ({children}) => {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
        <div className="text-slate-800 dark:text-slate-200 dark:bg-slate-800 min-h-screen select-none transition-colors duration-300">
            {children}
        </div>
    </ThemeProvider>
  )
}

export default Providers
