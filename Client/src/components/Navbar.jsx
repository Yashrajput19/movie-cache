import React from 'react'

const Navbar = () => {
  return (
    
      <div className='flex justify-center gap-2 text-white p-5'>
        <form action="">
          <input type="text" placeholder='Search for movies' className='bg-black text-white w-96 rounded border-2 h-10 p-5' />
        </form>
        <button className='bg-sky-500 p-2 rounded'>Create Playlist</button>
        <button className='bg-red-600 p-2 rounded' >Log Out</button>
      </div>
    
  )
}

export default Navbar