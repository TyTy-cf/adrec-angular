import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {RegionService} from '../../services/region.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Region} from '../../models/region';

@Component({
  selector: 'app-region-form',
  templateUrl: './region-form.component.html',
  styleUrls: ['./region-form.component.scss']
})
export class RegionFormComponent implements OnInit, OnChanges {

  @Input()
  region: Region;

  @Output()
  refreshList: EventEmitter<boolean>;

  regionForm: FormGroup;
  public faPlusCircle = faPlusCircle;

  constructor(public regionService: RegionService) {
    this.refreshList = new EventEmitter<boolean>();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const oldRegion = changes.region.previousValue;
    const newRegion = changes.region.currentValue;
    if (oldRegion !== newRegion) {
      this.region = newRegion;
      this.initializeForm();
    }
  }

  ngOnInit(): void {
    this.region = new Region();
    this.initializeForm();
  }

  private initializeForm(): void {
    this.regionForm = new FormGroup(
      {
        name: new FormControl(
          this.region.name, [
            Validators.required,
          ]
        ),
        code: new FormControl(
          this.region.code, [
            Validators.required,
            Validators.pattern('^[0-9]{2}$')
          ]
        )
      }
    );
  }

  get name(): any {
    return this.regionForm.get('name');
  }

  get code(): any {
    return this.regionForm.get('code');
  }

  addRegion(): void {
    let regionAddOrEdit = this.regionService.getRegion(this.regionForm.value.code);
    let onRefresh = false;
    if (regionAddOrEdit !== undefined) {
      this.regionService.deleteRegion(regionAddOrEdit);
      onRefresh = true;
    }
    regionAddOrEdit = this.regionForm.value;
    this.regionService.addRegion(regionAddOrEdit);
    if (onRefresh) {
      this.emitRefreshList(true);
    }
  }

  emitRefreshList(hasToRefresh: boolean): void {
    this.refreshList.emit(hasToRefresh);
  }
}
