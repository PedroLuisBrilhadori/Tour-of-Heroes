import { Injectable } from '@angular/core';
import { InMemoryDataService } from './in-memory-data.service';
import { Hero } from './hero';
import { resourceUsage } from 'process';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDataService {
  createdb() {
    const heroes = [
      { id: 11, name: 'Dr Nilce' },
      { id: 12, name: 'Perigoso' },
      { id: 13, name: 'Delegado Nikio' },
      { id: 14, name: 'UoUo' },
      { id: 15, name: 'Marcia da Feira' },
      { id: 16, name: 'Michelan' },
      { id: 17, name: 'Adriano' },
      { id: 18, name: 'Maia' },
      { id: 19, name: 'Dilsu' },
      { id: 20, name: 'Fabin' }
    ];
    return heroes;
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

}
