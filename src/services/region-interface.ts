import {GuidRegion, Region} from '../models/region';
import {Guid} from 'guid-typescript';
import {Observable} from 'rxjs';

export interface RegionInterface {
  getRegionsFromApi(): Observable<Region[]>;
  getRegionsList(): GuidRegion[];
  getRegion(guid: Guid): GuidRegion;
  addRegion(region: Region): void;
  deleteRegion(guid: Guid): GuidRegion[];
  editRegion(guid: Guid, region: Region): GuidRegion;
  getRegionByCode(code: string): GuidRegion;
}
