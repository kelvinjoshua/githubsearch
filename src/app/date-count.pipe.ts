import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {
  today: number = Date.now();
  transform(value: unknown, ...args: unknown[]): unknown {
    
    return null;
  }

}
