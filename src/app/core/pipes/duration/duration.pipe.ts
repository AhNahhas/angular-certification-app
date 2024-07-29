import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value? : string | null): string {

    if(!value)
      return '';

    let parsed = Number(value);
    if(isNaN(parsed))
      return '';
    
    let hours = Math.floor(parsed / 60);
    let minutes = (parsed - 60*hours) % 60;

    return `${hours}h ${minutes}m`;

  }

}
