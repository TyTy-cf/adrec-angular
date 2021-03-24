import {Injectable} from '@angular/core';
import {RegionInterface} from './region-interface';
import {Region} from '../models/region';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionService implements RegionInterface {

  regions: Region[];
  url = 'https://geo.api.gouv.fr/regions';

  constructor(private http: HttpClient) {
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
    this.regions.push(region);
  }

  deleteRegion(region: Region): Region[] {
    this.regions = this.regions.filter(r => r.code !== region.code || r.name !== region.name);
    return this.regions;
  }

  editRegion(code: string): Region {
    return undefined;
  }

  getRegion(code: string): Region {
    const regions =  this.regions.filter(r => r.code === code);
    if (!regions) {
      throw new Error('The code region doesn\'t exist');
    }
    return regions[0];
  }

  getRegionsListObservable(): Observable<Region[]> {
    return this.http.get<Region[]>(this.url);
  }

  getRegionsList(): Region[] {
    return this.regions;
  }
}
