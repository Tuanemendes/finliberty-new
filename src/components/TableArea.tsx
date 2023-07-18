import React from 'react'

const TableArea = () => {
  return (
    <div>
      <table className=" table-fixed text-black w-full p-5 shadow-md bg-white rounded-lg mt-5">
  <thead className='table-row-group text-left  bg-orange-700 text-white '>
    <tr>
      <th className='p-5 w-5'>Data</th>
      <th className='w-24'>Categoria</th>
      <th className='w-24'>Título</th>
      <th className='w-10'>Valor</th> 
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Sliding </td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
    </tr>
    <tr>
      <td>Witchy Woman</td>
      <td>The Eagles</td>
      <td>1972</td>
    </tr>
    <tr>
      <td>Shining Star</td>
      <td>Earth, Wind, and Fire</td>
      <td>1975</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default TableArea
