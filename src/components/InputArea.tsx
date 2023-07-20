
import { categories } from '@/data/categories';
import { Item } from '@/types/Item';
import { title } from 'process';
import React from 'react'

type Props = {  
    onAdd: (item: Item) => void;
}



const InputArea = ({onAdd} : Props) => {

    const [dateField, setDateField] = React.useState('');
    const [categoryField, setCategoryField] = React.useState('');
    const [titleField, setTitleField] = React.useState('');
    const [valueField, setValueField] = React.useState(0);

    const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDateField(e.target.value);   
    }
    const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCategoryField(e.target.value);
      };

    const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitleField(e.target.value);
    }
    const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueField(parseFloat(e.target.value));
    }

    const handleAddEvent = (e: React.FormEvent) => {
        e.preventDefault(); // Evita a atualização da página
        let newItem: Item = {
          date: new Date(dateField),
          category: categoryField,
          title: titleField,
          value: valueField,
        };
        onAdd(newItem);
      };

  return (
    <div className="flex flex-col w-full mt-5  justify-between text-black p-3 shadow-md bg-white rounded-lg lg:flex-row ">
    <div className="  ">
      <input
        type="date"
        value={dateField}
        onChange={handleDate}
        className=" w-full mb-2 p-2 rounded"
      />
    </div>
    <div className=" ">
      <select
        value={categoryField}
        onChange={handleCategory}
        className=" w-full mb-2 p-2 rounded form-select lg:w-60  "
      >
        <option disabled selected value="">
          Categoria
        </option>
        {Object.keys(categories).map((key, index) => (
          <option key={index} value={key}>
            {categories[key].title}
          </option>
        ))}
      </select>
    </div>
    <div className=" ">
      <input
        placeholder="Título"
        type="text"
        value={titleField}
        onChange={handleTitle}
        className="w-full mb-2 p-2 rounded"
      />
    </div>
    <div className="">
      <input
        placeholder="Valor"
        type="number"
        value={valueField}
        onChange={handleValue}
        className="w-full mb-2 p-2 rounded  "
      />
    </div>
    <div className="">
      <button
        className="w-full bg-orange-700 text-white p-3 text-sm font-bold rounded-lg"
        onClick={handleAddEvent}
      >
        Adicionar
      </button>
    </div>
  </div>
  


  )
}

export default InputArea
