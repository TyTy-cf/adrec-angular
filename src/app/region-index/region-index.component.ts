import {Component, OnInit} from '@angular/core';
import {RegionService} from '../../services/region.service';
import {DepartmentService} from '../../services/department.service';
import {faPencilAlt} from '@fortawesome/free-solid-svg-icons';
import {Region} from '../../models/region';

@Component({
  selector: 'app-region-index',
  templateUrl: './region-index.component.html',
  styleUrls: ['./region-index.component.scss']
})
export class RegionIndexComponent implements OnInit {

  public faPencilAlt = faPencilAlt;

  selectedRegion: Region;
  regions: Region[];

  constructor(
    public regionService: RegionService,
    public departmentService: DepartmentService
  ) {
    this.regions = regionService.getRegionsList();
  }

  updateRegionList(hasToRefresh: boolean): void {
    if (hasToRefresh) {
      this.regions = this.regionService.getRegionsList();
    }
  }

  ngOnInit(): void {
  }

  onEditRegion(region: Region): void {
    this.selectedRegion = region;
  }

}
