import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {RegionService} from '../../services/region.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {GuidRegion, Region} from '../../models/region';
import {Guid} from 'guid-typescript';

@Component({
  selector: 'app-region-form',
  templateUrl: './region-form.component.html',
  styleUrls: ['./region-form.component.scss']
})
export class RegionFormComponent implements OnInit, OnChanges {

  @Input()
  guid: Guid;

  @Output()
  refreshList: EventEmitter<boolean>;

  // On doit rajouter la region liée à notre formulaire !
  region: Region;
  regionForm: FormGroup;
  public faPlusCircle = faPlusCircle;

  constructor(public regionService: RegionService) {
    this.refreshList = new EventEmitter<boolean>();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const oldGuid = changes.guid.previousValue;
    const newGuid = changes.guid.currentValue;
    if (oldGuid !== newGuid) {
      this.guid = newGuid;
      this.region = this.regionService.getRegion(this.guid).region;
      this.initializeForm();
    }
  }

  ngOnInit(): void {
    // On doit toujours initialiser notre Region, afin d'avoir un objet sur lequel va se baser notre FormGroup
    this.region = new Region();
    this.guid = Guid.create();
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
    const regionEdit = this.regionService.getRegion(this.guid);
    this.region = this.regionForm.value;
    if (regionEdit !== undefined) {
      this.regionService.editRegion(this.guid, this.region);
      this.refreshList.emit(true);
      this.guid = Guid.create();
    } else {
      this.regionService.addRegion(this.region);
    }
  }
}
