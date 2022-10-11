import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grados'
})
export class GradosPipe implements PipeTransform {

  transform(value: number, ...args: string[]): string {

    let escala = args[0];
    if(escala === 'C'){
      let farenheit = (value * 1.8) + 32;
      return farenheit + "ºF"
    }else if(escala === 'F'){
      let celsius = (value - 32) * 5/9;
      return celsius + "ºC"
    } else {
      return 'No se recibio un parametro adecuado'
    }
  }

}
