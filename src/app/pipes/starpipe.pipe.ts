import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starpipe'
})
export class StarpipePipe implements PipeTransform {


  transform(score: number, ...args: unknown[]): unknown {
    return null;
  }

}
