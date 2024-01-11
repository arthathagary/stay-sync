import NavBar from '@/components/NavBar'
import React, { PropsWithChildren } from 'react'

const HomeLayout = ({children}:PropsWithChildren) => {
  return (
    <>
    <NavBar />
    <main>
    {children}
    </main>
    </>
  )
}

export default HomeLayout