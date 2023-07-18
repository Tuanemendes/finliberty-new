import { Item } from '@/types/Item'
import React from 'react'
import {categories} from '../data/categories'
import {
    FaAngleDown,
    FaAngleUp,
  
} from 'react-icons/fa'



type Props = {
    item: Item,
}
const TableItem = ({item}: Props) => {
    const category = categories[item.category];
    const categoryExpense =  category.expense ? <FaAngleDown color="red" />  : <FaAngleUp color="green" />;
    const categoryStyle = {
        backgroundColor: category.color,
        color: 'black',
        borderRadius: '0.25rem',
        padding: '0.25rem 0.5rem',
        display: 'inline-block',
    };

  return (
     <tr>
        <td className='p-3'>{item.date.toLocaleDateString()}</td>
        <td>
        <div style={categoryStyle}>{category.title}</div>
        </td>
        <td>{item.title}</td>
        <td>
            <div className='flex justify-start items-center'>
            {categoryExpense}
            R$ {item.value.toFixed(2)}
            </div>
        </td>
    </tr>
  )
}

export default TableItem
