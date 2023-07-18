import { Item } from '../types/Item'

import React from 'react'
import TableItem from './TableItem'

type Props = {
    list: Item[],
}
 

const TableArea = ({list} : Props) => {
  
  return (
    <div>
      <table className=" table-fixed text-black w-full p-5 shadow-md bg-white rounded-lg mt-6">
        <thead className='table-row-group text-left  text-black '>
            <tr>
            <th className='p-5 w-5'>Data</th>
            <th className='w-24'>Categoria</th>
            <th className='w-24'>Título</th>
            <th className='w-10'>Valor</th> 
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
