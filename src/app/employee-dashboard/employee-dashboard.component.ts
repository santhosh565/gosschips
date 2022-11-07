import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { EmployeeModel } from './employe-dashboard.model';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  formValue!: FormGroup;
  employeeModelObj: EmployeeModel = new EmployeeModel();
  dataGet!:any;
  constructor( private formbuilder: FormBuilder, private api: ApiService ) { }

  ngOnInit() {

    this.formValue = this.formbuilder.group({
      firstName:[''],
      lastName:[''],
      email:[''],
      mobile:[''],
      salary:['']

    })
    this.showdata();
  }
  postEmployeeDetails(){
    this.employeeModelObj.firstName = this.formValue.value.firstName;
    this.employeeModelObj.lastName = this.formValue.value.lastName;
    this.employeeModelObj.email = this.formValue.value.email;
    this.employeeModelObj.mobile = this.formValue.value.mobile;
    this.employeeModelObj.salary = this.formValue.value.salary;

    this.api.postEmploye(this.employeeModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Employee added Successfully");
      this.formValue.reset();
    },
    err=>{
      alert("something wrong");
    })
  }
  showdata(){
    this.api.getEmployee()
    .subscribe(res=>{
      this.dataGet=res;
    })
  }

  onedit(row:any){

    this.employeeModelObj=row.id;
    console.log(row.id)

  }

}
