import { useState,useEffect } from "react";

import {Item} from "../types/Item";
import {itens} from "../data/itens";
import {categories} from "../data/categories";
import {getCurrentMonth} from"../helpers/dateFilter";
import{filterListByMonth} from "../helpers/dateFilter";

import Layout from "../components/Layout";
import TableArea from "../components/TableArea";
import Resume from "@/components/Resume";
import InputArea from "@/components/InputArea";

export default function Home() {

  const [list, setList] = useState(itens);
  //filtra a lista de acordo com o mês atual
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [balance, setBalance] = useState(0);

  //vai monitorar e verificar se a lista ou o mês atual mudou
  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));

  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;
    
    for(let i in filteredList){

      if(categories[filteredList[i].category].expense){
        expenseCount += filteredList[i].value;
      }else{
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);
    setBalance(incomeCount - expenseCount);


  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  };

  return <Layout title="Home Page">
    <div className="flex justify-center flex-col items-center mt-5">
      
      <Resume income={income} expense={expense} balance={balance}
       currentMonth={currentMonth}
       onMonthChange={handleMonthChange} 
      >
      </Resume>
     
    
    <InputArea onAdd={handleAddItem}/>

    
    <div className="flex-wrap">
    <TableArea list={filteredList}/>
    </div>
     
      
    </div>
  </Layout>;
}
