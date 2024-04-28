import { CookiesProvider } from 'next-client-cookies/server'
import React, { ReactNode } from 'react'

function Wrapper({children}: {children:ReactNode}) {
  return (
    <CookiesProvider>{children}</CookiesProvider>
  )
}

export {Wrapper}