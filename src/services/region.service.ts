import {Injectable} from '@angular/core';
import {RegionInterface} from './region-interface';
import {Region} from '../models/region';

@Injectable({
  providedIn: 'root'
})
export class RegionService implements RegionInterface {

  regions: Region[];

  constructor() {
    this.regions = new Array<Region>();
    const auvergne = new Region();
    // équivalent à $this->region.setCode('63')
    auvergne.code = '84';
    auvergne.name = 'Auvergne-Rhône-Alpes';
    const idf = new Region();
    // équivalent à $this->region.setCode('63')
    idf.code = '11';
    idf.name = 'Île-de-France';
    this.regions.push(auvergne);
    this.regions.push(idf);
  }

  addRegion(region: Region): void {
  }

  deleteRegion(code: string): Region[] {
    return [];
  }

  editRegion(code: string): Region {
    return undefined;
  }

  getRegion(code: string): Region {
    return undefined;
  }

  getRegionsList(): Region[] {
    return this.regions;
  }
}
