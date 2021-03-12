import {Region} from '../models/region';

export interface RegionInterface {
  getRegionsList(): Region[];
  getRegion(code: string): Region;
  addRegion(region: Region): void;
  deleteRegion(code: string): Region[];
  editRegion(code: string): Region;
}
