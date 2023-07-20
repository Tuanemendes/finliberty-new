import { Item } from '../types/Item'

import React from 'react'
import TableItem from './TableItem'

type Props = {
    list: Item[],
}
 

const TableArea = ({list} : Props) => {
  
  return (
    <div className=''>
      <table className=" table-fixed text-black min-w-full p-5 shadow-md bg-white rounded-lg mt-6  sm:w-full">
        <thead className='table-row-group text-left  text-black '>
            <tr>
            <th className='p-5 w-5 sm:w-20 items-center'>Data</th>
            <th className=' w-23 sm:w-20 items-center'>Categoria</th>
            <th className='w-24 sm:w-20 items-center'>Título</th>
            <th className='w-11 sm:w-20 items-center'>Valor</th> 
            </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <TableItem key={index} item={item}/>
          ))}
        </tbody>
        </table>
    </div>
  )
}

export default TableArea
