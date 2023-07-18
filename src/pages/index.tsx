import { useState,useEffect } from "react";

import {Item} from "../types/Item";
import {Category} from "../types/Category";
import {itens} from "../data/itens";
import {categories} from "../data/categories";
import {getCurrentMonth} from"../helpers/dateFilter";
import{filterListByMonth} from "../helpers/dateFilter";

import Layout from "../components/Layout";
import TableArea from "../components/TableArea";
import Resume from "@/components/Resume";





export default function Home() {

  const [list, setList] = useState(itens);
  //filtra a lista de acordo com o mês atual
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  //vai monitorar e verificar se a lista ou o mês atual mudou
  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));

  }, [list, currentMonth]);
  return <Layout title="Home Page">
    <div className="flex justify-center flex-col items-center mt-5">
      <Resume></Resume>

    
      <TableArea list={filteredList}/>
    </div>
      
  </Layout>;
}
