import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncDescription'
})
export class TruncDescriptionPipe implements PipeTransform {
  transform(value: string, length: number ): string {
    return value.substr(0, length);
  }
}
