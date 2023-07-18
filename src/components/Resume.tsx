import React from 'react'

import {
    CiCirclePlus,
    CiCircleMinus,
    CiDollar
} from "react-icons/ci";


const Resume = () => {
  return (
    <div className=' text-black w-full p-8 shadow-md bg-white rounded-lg '>
        <div className='flex justify-around items-center'>
            <div className=' border-2 border-orange-700 py-6 px-20 rounded-2xl shadow-xl'  > <CiCirclePlus/><p>Entrada</p></div>
            <div className='py-6 px-20'> <CiCircleMinus/>Saida</div>
            <div className='py-6 px-20'><CiDollar/>Total</div>
        </div>
        
    </div>
  )
}

export default Resume
