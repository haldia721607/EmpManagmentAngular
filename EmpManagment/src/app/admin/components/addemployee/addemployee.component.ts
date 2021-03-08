import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cities } from 'src/app/models/cities';
import { Countries } from 'src/app/models/countries';
import { EmployeeViewModel } from 'src/app/models/EmployeeViewModel';
import { Gender } from 'src/app/models/gender';
import { States } from 'src/app/models/states';
import { EmployeeService } from 'src/app/services/employee/employee.service';
const MAX_SIZE: number = 1048576;

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})

export class AddemployeeComponent implements OnInit {
  messages: string[] = [];
  str: string = "hi";
  theFile: any = null;
  addEmployee: FormGroup;
  gender: Gender[] = [];
  countries: Countries[] = [];
  states: States[] = [];
  cities: Cities[] = [];
  constructor(private employeeServices: EmployeeService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.employeeServices.getCountry().subscribe((response) => {
      this.countries = response;
    });

    this.employeeServices.getGender().subscribe((response) => {
      this.gender = response;
    });
    this.addEmployee = this.formBuilder.group({
      name: [null, [Validators.required, Validators.maxLength(100)]],
      address: [null, [Validators.required, Validators.maxLength(100), Validators.pattern("^[0-9]*$")]],
      pinCode: [null, [Validators.required, Validators.maxLength(6), Validators.pattern("^[0-9]*$")]],
      genderId: ["", [Validators.required]],
      countryId: ["", [Validators.required]],
      stateId: ["", [Validators.required]],
      cityId: ["", [Validators.required]],
      fileAsBase64:["",[Validators.required]]


    }
    );
    //For get all values of SignUpForm at the time of filling
    this.addEmployee.valueChanges.subscribe((value) => {
      //console.log(value);
      //this.canLeave = false;
    });

  }
  onSubmitClick() {
    if (this.addEmployee.valid) {
      let emp = new EmployeeViewModel();
      // Set File Information
      emp.name = this.addEmployee.get('name').value;
      emp.address = this.addEmployee.get('address').value;
      emp.pinCode = this.addEmployee.get('pinCode').value;
      emp.genderId = this.addEmployee.get('genderId').value;
      emp.countryId = this.addEmployee.get('countryId').value;
      emp.stateId = this.addEmployee.get('stateId').value;
      emp.cityId = this.addEmployee.get('cityId').value;
      emp.fileName = this.theFile.name;
      emp.contentType = this.theFile.type;
      // Use FileReader() object to get file to upload
      // NOTE: FileReader only works with newer browsers
      let reader = new FileReader();
      // Setup onload event for reader
      reader.onload = () => {
        //   // Store base64 encoded representation of file
        debugger;
        emp.fileAsBase64 = reader.result.toString();
        this.employeeServices.postEmployee(emp).subscribe(resp => {
          if (resp) {
            this.messages.push("Employee added successfully");
            setTimeout(() => {
              this.router.navigate(["/admin", "dashboard"]);
            }, 1200);
          }
        });
      }
      // Read the file
      reader.readAsDataURL(this.theFile);
    }
  }
  onFileChange(event) {
    this.theFile = null;
    if (event.target.files && event.target.files.length > 0) {
      // Don't allow file sizes over 1MB
      if (event.target.files[0].size < MAX_SIZE) {
        // Set theFile property
        this.theFile = event.target.files[0];
      }
      else {
        // Display error message
        this.messages.push("File: " + event.target.files[0].name + " is too large to upload.");
      }
    }
  }

  onChangeCountry(countryId: number) {
    if (countryId) {
      this.employeeServices.getStateById(countryId).subscribe(
        data => {
          this.states = data;
          this.cities = null;
        }
      );
    } else {
      this.states = null;
      this.cities = null;
    }
  }

  onChangeState(stateId: number) {
    if (stateId) {
      this.employeeServices.getCityById(stateId).subscribe(
        data => this.cities = data
      );
    } else {
      this.cities = null;
    }
  }

  omit_special_char(event) {
    var k;
    k = event.charCode;  //         k = event.keyCode;  (Both can be used)
    return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
  }
}
