import React from 'react'
import ResumeItem from './ResumeItem';


type Props = {
  children: React.ReactNode;
  expense: number;
  income: number;
  balance: number;

}
const Resume = ({income,expense,balance} : Props) => {
  
  const balanceStyle =  balance < 0 ? 'text-red-500' : 'text-green-500' ;

  return (
    <div className=' flex justify-between text-black w-full p-8 shadow-md bg-white rounded-lg '>

        <ResumeItem title="Entrada" value={income}/>
        <ResumeItem title="saída" value={expense}/>
        <ResumeItem title="Total" value={balance} color={balanceStyle} />

    </div>
  )
}

export default Resume
