import React from 'react'

import { BsFillPlusCircleFill,BsDashCircleFill,BsCurrencyDollar } from "react-icons/bs";
import { IconType } from 'react-icons/lib';

type Props = {
    title: string;
    value: number;
    color?: string;
}

type IconMap = {
    [key: string]: IconType;
  };

const ResumeItem = ({title,value,color} : Props) => {
    const iconMap : IconMap = {
        'Entrada': BsFillPlusCircleFill,
        'Saída': BsDashCircleFill,
        'Total': BsCurrencyDollar,
    }
    const Icon = iconMap[title];

  return (
    <div className='flex items-center'>
        <div className='border-2 border-orange-700  p-5 rounded-2xl shadow-xl'> 

            <div className='flex justify-between items-center'>
            {Icon && <Icon className='text-lg m-1'/>}
            {title } 
            </div>
            <div className={`text-xl font-bold ${color}`}>
            R$ {value.toFixed(2)}
            </div>
      
        </div>
    </div>
  )
}

export default ResumeItem
