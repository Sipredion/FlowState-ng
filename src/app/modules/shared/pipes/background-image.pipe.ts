import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'backgroundImage'
})
export class BackgroundImagePipe implements PipeTransform {

  transform(url: string): {} {
    return {
      'background': `url("${url}") center/cover no-repeat`
    };
  }

}
