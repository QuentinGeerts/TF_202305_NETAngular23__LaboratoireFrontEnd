import { Pipe, PipeTransform } from '@angular/core';
import { Role } from '../../enums/role.enum';

@Pipe({
  name: 'role'
})
export class RolePipe implements PipeTransform {

  transform (value: number): string {
    if (value === Role.admin) {
      return '👑';
    }
    else if (value === Role.modo) {
      return '🚨';
    }
    else {
      return '👤';
    }
  }

}
