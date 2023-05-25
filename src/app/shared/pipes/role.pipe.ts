import { Pipe, PipeTransform } from '@angular/core';
import { Roles } from 'src/app/enums/roles.enum';

@Pipe({
  name: 'role'
})
export class RolePipe implements PipeTransform {

  transform (value: number): string {
    if (value === Roles.admin) {
      return '👑';
    }
    else if (value === Roles.modo) {
      return '🚨';
    }
    else {
      return '👤';
    }
  }

}
