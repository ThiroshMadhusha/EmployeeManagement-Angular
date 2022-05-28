import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  empDetail!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.empDetail = this.formBuilder.group({
      name: [''],
      email: [''],
      address: [''],
      phone: [''],
      designation: [''],
      salary: [''],
    });
  }

  addEmployee() {
    console.log(this.empDetail);
  }
}
