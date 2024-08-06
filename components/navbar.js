import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
   <>
   <nav className='flex justify-around h-[15vh] items-center bg-violet-500 rounded-b-xl'>
    <h2 className='font-bold text-2xl cursor-pointer'>Logo</h2>
    <ul className='flex gap-10'>
    <Link href="/" className='text-white'>Home</Link>
    <Link href="/Features" className='text-white'>Features</Link>
    </ul>
   </nav>
   </>
  )
}

export default Navbar
