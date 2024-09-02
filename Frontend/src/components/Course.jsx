import React from 'react'

import list from "../../public/list.json"
import Cards from './Cards'
import { Link } from 'react-router-dom'

export default function Course() {
  return (
   <>
    <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4">
        <div className='mt-28 items-center justify-center text-center'>
            <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className='text-pink-500'>Here! :)</span></h1>
            <Link to="/">
            <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-900 duration-300 mt-6'>Back</button>
            </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
            {
                list.map(item=> (
                    <Cards key={item.id} item={item} />
                ))
            }
        </div>
    </div>
   </>
  )
}
