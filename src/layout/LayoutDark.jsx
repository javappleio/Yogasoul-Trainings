import React from 'react'
import Footer from './Footer'
import NavbarDark from './NavbarDark'

const LayoutDark = ({ children }) => {
  return (
    <>
      <NavbarDark />
      {children}
      <Footer />
    </>
  )
}

export default LayoutDark