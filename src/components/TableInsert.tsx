import { formatCurrentMonth } from '@/helpers/dateFilter';
import React from 'react'

import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";

type Props = {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
}

const TableInsert = ({currentMonth,onMonthChange}: Props) => {
    const prevMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() - 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
        
    }
    const nextMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() + 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    }

  return (
    <div className='mt-6 text-black w-full p-8 shadow-md bg-white rounded-l text-xl '>
        <BsFillArrowLeftCircleFill onClick={prevMonth} className='inline-block mr-2'/>
            <span className='inline-block'>{formatCurrentMonth(currentMonth)}</span>
        <BsFillArrowRightCircleFill onClick={nextMonth} className='inline-block ml-2'/>
    </div>
  )
}

export default TableInsert
