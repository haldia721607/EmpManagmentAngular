import { Component, OnInit } from '@angular/core';
import { EmployeeList } from 'src/app/models/employee-list.model';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeList: EmployeeList[] = [];
  currentPageIndex: number = 0;
  pages: any[] = [];
  pageSize: number = 2;

  //Sorting
  sortBy: string = "RollName";
  sortOrder: string = "ASC"; //ASC | DESC
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    debugger;
    this.employeeService.getAllEmployee().subscribe((res) => {
      debugger;
      if (res.length > 0) {
        this.employeeList = res;
        console.log(this.employeeList);
      }
    });
  }

}
