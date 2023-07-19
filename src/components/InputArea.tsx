
import { Item } from '@/types/Item';
import React from 'react'

type Props = {  
    onAdd: (item: Item) => void;
}



const InputArea = ({onAdd} : Props) => {

    const hadleAddEvent = () => {
        let newItem : Item = {
            date: new Date(2023,7,1),
            category: 'food',
            title: 'Item de teste',
            value: 250.25
        }
        onAdd(newItem);
    }

  return (


    <div className=' flex items-center ml-2 text-black p-8 shadow-md bg-white rounded-l text-xl '>
       <form  className='' action="">
            <input type="date" className="m-2 rounded text-orange-700" />
            <select  className=" m-2 rounded form-select px-7 py-2 ">
            <option disabled selected value="">Categoria</option>
            </select>
            <input  placeholder="Título"type="text" className=" m-2 rounded text-orange-700" />
            <input placeholder="Valor"type="number" className=" m-2 rounded  text-orange-950" />

            <button className=' bg-orange-700 p-3 text-sm font-bold rounded-lg' onClick={hadleAddEvent}>Adicionar</button>
        </form> 
    </div>
  )
}

export default InputArea
