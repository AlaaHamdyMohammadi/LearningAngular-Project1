import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string){
    if(!value) return null;
    let positions =[
      'of',
      'the',
    ]
    let words = value.split(' ');
    for(let i = 0; i < words.length; i++){
      if (i > 0 && positions.includes(words[i].toLowerCase())) {
        words[i] = words[i].toLowerCase();
      } else {
        words[i] =
          words[i].substring(0, 1).toUpperCase() +
          words[i].substring(1).toLowerCase();
      }
    }
    return words.join(' ');
  }

}
