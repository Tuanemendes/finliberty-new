//lista de funções basedo em data  fazer um filtro de data formatar a data 

import { Item } from "@/types/Item";

export const getCurrentMonth = () => {
    //pega a data atual
    let now = new Date();
    //retorna o mês atual +1 pq o mes começa em 0
    return `${now.getFullYear()}-${now.getMonth()+1}`;
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
