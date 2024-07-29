import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'budget'
})
export class BudgetPipe implements PipeTransform {

  transform(value?: string | null): string {
    
    if(value)
      return `$${value} million`;

    return '';

  }

}
