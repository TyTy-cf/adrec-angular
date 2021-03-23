import {Region} from '../models/region';
import {Observable} from 'rxjs';

export interface RegionInterface {
  getRegionsListObservable(): Observable<Region[]>;
  getRegionsList(): Region[];
  getRegion(code: string): Region;
  addRegion(region: Region): void;
  deleteRegion(region: Region): Region[];
  editRegion(code: string): Region;
}
