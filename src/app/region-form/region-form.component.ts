import { Component, OnInit } from '@angular/core';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {RegionService} from '../../services/region.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-region-form',
  templateUrl: './region-form.component.html',
  styleUrls: ['./region-form.component.scss']
})
export class RegionFormComponent implements OnInit {

  regionForm: FormGroup;
  public faPlusCircle = faPlusCircle;

  constructor(public regionService: RegionService) { }

  ngOnInit(): void {
    this.regionForm = new FormGroup(
      {
        name: new FormControl(
          '', [
            Validators.required,
          ]
        ),
        code: new FormControl(
          '', [
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
    this.regionService.addRegion(this.regionForm.value);
  }
}
