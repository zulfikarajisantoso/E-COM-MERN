import React from 'react'
import {datacategory} from '../data/data.js'
import {Link} from 'react-router-dom'

const Category = () => {
  return (
    <div className=' flex justify-center bg-pink-200'> 

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-center p-4 "  >
            {datacategory.map((item) => {
                return (
                   <div key={item.id} className="relative">
                        <Link to={`/products/${item.cat}`} >
                       <img src={item.img} className="w-full h-full object-cover" />
                        <div className='absolute top-0 left-0 flex justify-center flex-col items-center w-full h-full'>
                            <h1 className='font-bold text-slate-200  text-4xl'>{item.title}</h1>
                            <button className='border-3 text-slate-500 text-xl w-32 font-semibold bg-green-100 p-1 mt-4' >BELANJA</button>
                        </div>
                        </Link>
                   </div>
                )
            })}
        </div>
    
    </div>
  )
}

export default Category