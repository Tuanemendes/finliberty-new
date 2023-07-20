import React from 'react'
import ResumeItem from './ResumeItem';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { formatCurrentMonth } from '@/helpers/dateFilter';

type Props = {
  children: React.ReactNode;
  expense: number;
  income: number;
  balance: number;
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;

}
const Resume = ({income,expense,balance,currentMonth,onMonthChange} : Props) => {
  
  const balanceStyle =  balance < 0 ? 'text-red-500' : 'text-green-500' ;

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
      <div className="   flex w-full flex-col justify-between text-black p-4 shadow-md bg-white rounded-lg md:flex-row items-center">
        <div className=" md:w-full mb-4 ">
          <ResumeItem title="Entrada" value={income} />
        </div>
        <div className="  md:w-full mb-4 ">
          <ResumeItem title="Saída" value={expense} />
        </div>
        <div className=" md:w-full mb-4">
          <ResumeItem title="Total" value={balance} color={balanceStyle} />
        </div>
        <div className=" flex items-center justify-between text-black p-5 shadow-md bg-white rounded-xl text-md md:w-full m-0">
          <BsFillArrowLeftCircleFill
            onClick={prevMonth}
            className="inline-block mr-2"
          />
          <span className="inline-block">{formatCurrentMonth(currentMonth)}</span>
          <BsFillArrowRightCircleFill
            onClick={nextMonth}
            className="inline-block ml-2"
          />
        </div>
      </div>

    
  )
}

export default Resume
