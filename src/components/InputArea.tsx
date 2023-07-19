
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


    <div className=' flex items-center ml-2 mt-6 text-black p-8 shadow-md bg-white rounded-l text-xl '>
       <form action="">
       <button onClick={hadleAddEvent}>Adicionar</button>
        </form> 
        
    </div>
  )
}

export default InputArea
