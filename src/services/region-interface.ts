import {GuidRegion, Region} from '../models/region';
import {Guid} from 'guid-typescript';

export interface RegionInterface {
  getRegionsList(): GuidRegion[];
  getRegion(guid: Guid): GuidRegion;
  addRegion(region: Region): void;
  deleteRegion(guid: Guid): GuidRegion[];
  editRegion(guid: Guid, region: Region): GuidRegion;
  getRegionByCode(code: string): GuidRegion;
  getRegionsListAsync(): Promise<GuidRegion[]>;
}
