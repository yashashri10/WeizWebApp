import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormField } from '@angular/material';

@Component({
  selector: 'app-tour-form',
  templateUrl: './tour-form.component.html',
  styleUrls: ['./tour-form.component.css']
})
export class TourFormComponent implements OnInit {
  constructor(private fb: FormBuilder) { }

  tourForm: FormGroup;

  ngOnInit() {
    this.tourForm = this.fb.group({
      destination: [],
      from_date: '',
      to_date: []
    });
  }

}
