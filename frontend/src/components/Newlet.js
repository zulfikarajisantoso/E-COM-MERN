import React from 'react'

import Contactless from '@material-ui/icons/Contactless'


const Newlet = () => {
  return (
    <div className='p-6  bg-pink-200' >
        <div className='h-72 flex flex-col justify-center items-center'>
            <h1 className='text-center font-bold text-4xl'>BLOG KAMI</h1>
            <h5 className='my-5 text-sm md:text-xl'>Dapatkan notifikasi produk terbaru dari kami</h5>
            <div className=' flex w-4/4 md:w-2/4 h-10 bg-white'>
                <input className='p-2 border-none outline-none w-full mr-23' placeholder='Masukkan Email...' /> 
                <button className='flex bg-black h-full  text-white items-center p-2 '> Subscribe <Contactless /> </button>
            </div>
        </div>       

    </div>
  )
}

export default Newlet