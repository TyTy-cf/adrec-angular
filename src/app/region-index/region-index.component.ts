import {Component, OnInit} from '@angular/core';
import {RegionService} from '../../services/region.service';
import {DepartmentService} from '../../services/department.service';
import {faPencilAlt} from '@fortawesome/free-solid-svg-icons';
import {GuidRegion, Region} from '../../models/region';
import {Guid} from 'guid-typescript';

@Component({
  selector: 'app-region-index',
  templateUrl: './region-index.component.html',
  styleUrls: ['./region-index.component.scss']
})
export class RegionIndexComponent implements OnInit {

  public faPencilAlt = faPencilAlt;

  selectedGuid: Guid;
  regions: GuidRegion[];
  regionsObs: Region[];


  constructor(
    public regionService: RegionService,
    public departmentService: DepartmentService
  ) {
    this.regions = regionService.getRegionsList();
    this.regionsObs = new Array<Region>();
  }

  updateRegionList(hasToRefresh: boolean): void {
    if (hasToRefresh) {
      this.regions = this.regionService.getRegionsList();
      this.selectedGuid = null;
    }
  }

  ngOnInit(): void {
    this.regionService.getRegionObservable().subscribe(regions => this.regionsObs = regions);
    alert(this.regionsObs.length);
  }

  onEditRegion(guid: Guid): void {
    this.selectedGuid = guid;
  }

}
