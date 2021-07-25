import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'allBooks'
})
export class AllBooksPipe implements PipeTransform {

  transform(value: any): any {
    const booksArray:any[]=[];
    for(let i=0; i<value.length; i++){
      let isActive:number = value[i].is_active;
      if(isActive === 1){
        booksArray.push(value[i])
      }
    }
    return booksArray;
  }

}
