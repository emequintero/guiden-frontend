import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppertrim'
})
export class UppertrimPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let output:string = value.toUpperCase();
    return output.replace(/ /g, "");
  }

}
