import React, { useEffect } from 'react'

export default function ForceThemeProvider({ children }) {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light')
  })

  return <>{children}</>
}
