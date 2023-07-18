//lista de funções basedo em data  fazer um filtro de data formatar a data 

import { Item } from "@/types/Item";

export const getCurrentMonth = () => {
    //pega a data atual
    let now = new Date();
    //retorna o mês atual +1 pq o mes começa em 0
    return `${now.getFullYear()}-${now.getMonth()}`;
}


export const filterListByMonth = (list: Item[], date: string): Item[] => {
    
    //gerar uma lista com o mes atual
    let newList: Item[] = [];
   
    
    let [year, month] = date.split('-');

    for(let i in list){
        if(
            list[i].date.getFullYear() === parseInt(year)&&
            list[i].date.getMonth() === parseInt(month)
        ){
            newList.push(list[i]);
        }
    }

    return newList ;
}


export const formatCurrentMonth = (currentMonth: string) : string => {

    let [year, month] = currentMonth.split('-');
    let months = ['Janeiro','Fevereiro','Março', 'Abril','Maio', 'Junho','Julho', 'Agosto', 'Setembro','Outubro', 'Novembro','Dezembro']
    return `${months[parseInt(month)]} de ${year}`;
}