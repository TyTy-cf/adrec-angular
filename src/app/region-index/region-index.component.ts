import {Component, OnInit} from '@angular/core';
import {RegionService} from '../../services/region.service';
import {DepartmentService} from '../../services/department.service';
import {faPencilAlt} from '@fortawesome/free-solid-svg-icons';
import {Region} from '../../models/region';
import {Observable} from 'rxjs';

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
  ) { }

  updateRegionList(hasToRefresh: boolean): void {
    if (hasToRefresh) {
      this.regionService.getRegionsListObservable()
        .subscribe(regions => this.regions = regions)
      ;
    }
  }

  ngOnInit(): void {
    this.regionService.getRegionsListObservable()
      .subscribe(regions => this.regions = regions)
    ;
  }

  onEditRegion(region: Region): void {
    this.selectedRegion = region;
  }

}
