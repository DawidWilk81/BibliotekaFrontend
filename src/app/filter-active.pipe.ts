import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterActive'
})
export class FilterActivePipe implements PipeTransform {
  transform(value: any, sName:string): any {
    if(sName === ""){
      return value;
    }
    const booksArray:any[]=[];
    for(let i=0; i<value.length; i++){
      let userName:string = value[i].uzytkownik;
      let isActive:number = value[i].is_active;
      if(userName.startsWith(sName) && isActive === 0){
        booksArray.push(value[i])
      }
    }
    return booksArray;
  }
}


