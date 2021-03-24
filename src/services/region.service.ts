import {Injectable} from '@angular/core';
import {RegionInterface} from './region-interface';
import {GuidRegion, Region} from '../models/region';
import { Guid } from 'guid-typescript';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RegionApi} from '../models/region-api';

@Injectable({
  providedIn: 'root'
})
export class RegionService implements RegionInterface {

  // ce Guid est juste là pour montrer comment ça fonctionne, il n'a aucun intérêt dans la logique ici
  guid: Guid;
  regions: GuidRegion[];
  // GuidRegion = { 'id': Guid, 'region': Region }

  // Url vers l'API
  url = 'https://geo.api.gouv.fr/regions';

  constructor(private http: HttpClient) {
    this.guid = Guid.create();
    this.regions = new Array<GuidRegion>();
    const auvergne = new Region();
    auvergne.code = '84';
    auvergne.name = 'Auvergne-Rhône-Alpes';
    const idf = new Region();
    idf.code = '11';
    idf.name = 'Île-de-France';
    this.regions.push({ id: Guid.create(), region: auvergne });
    this.regions.push({ id: Guid.create(), region: idf });
  }

  getRegionByCode(code: string): GuidRegion {
      const regions = this.regions.filter(gr => gr.region.code === code);
      if (!regions) {
        throw new Error('The code region doesn\'t exist');
      }
      return regions[0];
  }

  addRegion(region: Region): void {
    this.regions.push({ id: Guid.create(), region });
  }

  deleteRegion(guid: Guid): GuidRegion[] {
      this.regions = this.regions.filter(gr => !gr.id.equals(guid));
      return this.regions;
  }

  editRegion(guid: Guid, region: Region): GuidRegion {
    this.regions = this.deleteRegion(guid);
    const newGuidRegion = { id: guid, region };
    this.regions.push(newGuidRegion);
    return newGuidRegion;
  }

  getRegion(guid: Guid): GuidRegion {
    const regions = this.regions.filter(gr => gr.id.equals(guid));
    if (!regions) {
      throw new Error('The code region doesn\'t exist');
    }
    return regions[0];
  }

  getRegionsList(): GuidRegion[] {
    return this.regions;
  }

  getRegionsFromApi(): Observable<RegionApi[]> {
    return this.http.get<RegionApi[]>(this.url);
  }
}
