import { Item } from '@/types/Item'
import React from 'react'
import {categories} from '../data/categories'


type Props = {
    item: Item,
}
const TableItem = ({item}: Props) => {
    const category = categories[item.category];

  return (
     <tr>
        <td className='p-3'>{item.date.toLocaleDateString()}</td>
        <td>
            <div className={`inline-block 
            py-1 px-2
            rounded text-black bg-${category.color}-300`} >
                {category.title}
            </div>
        </td>
        <td>{item.title}</td>
        <td>R$ {item.value.toFixed(2)}</td>
    </tr>
  )
}

export default TableItem
