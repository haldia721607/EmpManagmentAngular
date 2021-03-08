import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cities } from 'src/app/models/cities';
import { Countries } from 'src/app/models/countries';
import { States } from 'src/app/models/states';
import { UserService } from 'src/app/services/admin/user.service';
import { CustomValidatorsServiceService } from 'src/app/services/custom-validators-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  countries: Countries[];
  states: States[];
  cities: Cities[];
  bState: boolean = false;
  bCity: boolean = false;
  //Reactive Forms
  userForm: FormGroup;
  //Autofocus TextBoxes
  @ViewChild("userNameTextBox") userNameTextBox: ElementRef;
  constructor(public userservice: UserService, private formBuilder: FormBuilder, private router: Router, private customValidatorsService: CustomValidatorsServiceService) { }

  ngOnInit(): void {
    this.userservice.getCountries().subscribe(
      (response: Countries[]) => {
        this.countries = response;
      }
    );

    //Create newForm
    this.userForm = this.formBuilder.group({
      name: this.formBuilder.control(null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      email: this.formBuilder.control(null, [Validators.required, Validators.email, Validators.minLength(3), Validators.maxLength(50)], [this.customValidatorsService.DuplicateEmailValidator()]),
      password: this.formBuilder.control(null, [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      confirmPassword: this.formBuilder.control(null, [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      countryId: this.formBuilder.control(null, [Validators.required]),
      stateId: this.formBuilder.control(null, [Validators.required]),
      cityId: this.formBuilder.control(null, [Validators.required]),
      termsAndPolicy: this.formBuilder.control(false, [Validators.required])
    }
      , {
        validators: [
          this.customValidatorsService.compareValidator("confirmPassword", "password")
        ]
      }
    );
    this.userForm.reset();
    setTimeout(() => {
      //Focus the ClientLocation textbox in newForm
      this.userNameTextBox.nativeElement.focus();
    }, 100);
  }
  onSaveClick() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    }
  }

  onChangeCountry(countryId: string) {

    if (countryId != "null") {
      this.userservice.getStates(countryId).subscribe((response: States[]) => {
        this.states = response;
        this.bState = true;
      });
    } else {
      this.bState = false;
      this.states = null;
      this.cities = null;
    }
  }

  onChangeState(stateId: string) {

    if (stateId != "null") {
      this.userservice.getCities(stateId).subscribe((response: Cities[]) => {
        this.cities = response;
        this.bCity = true;
      });
    } else {
      this.bCity = false;
      this.cities = null;
    }
  }
}
