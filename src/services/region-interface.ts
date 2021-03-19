import {Region} from '../models/region';

export interface RegionInterface {
  getRegionsList(): Region[];
  getRegion(code: string): Region;
  addRegion(region: Region): void;
  deleteRegion(region: Region): Region[];
  editRegion(code: string): Region;
}
