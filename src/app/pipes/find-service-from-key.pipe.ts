import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'findServiceFromKey'
})
export class FindServiceFromKeyPipe implements PipeTransform {
  private service: { [key: number]: { name: string } } = {
    20: { name: 'Corte - 20 min' },
    30: { name: 'Corte Navalhado - 30 min' },
    50: { name: 'Corte Pigmentado - 50 min' },
    60: { name: 'Corte + Alisamento - 1 hora' },
    61: { name: 'Corte + Luzes - 1,01 hora' },
    31: { name: 'Corte + Barba - 31 min' },
    62: { name: 'Alisamento - 1,02 hora' },
    63: { name: 'Luzes - 1,03 hora' },
    21: { name: 'Desenho - 21 min' },
    11: { name: 'Barba -11 min' },
    64: { name: 'Barba Pigmentada - 1,04 hora' },
    7: { name: 'Sombrancelhas - 7 min' },
    12: { name: 'Barba - 12 min' },
  };

  transform(s: number): string {
    return this.service[s].name;
  }
}
