import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Cities } from 'src/app/models/cities';
import { Countries } from 'src/app/models/countries';
import { EditUser } from 'src/app/models/edit-user';
import { States } from 'src/app/models/states';
import { UserService } from 'src/app/services/admin/user.service';
import { CustomValidatorsServiceService } from 'src/app/services/custom-validators-service.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userId: string = null;
  editUser: EditUser;
  countries: Countries[];
  states: States[];
  cities: Cities[];
  bState: boolean = true;
  bCity: boolean = true;
  //Reactive Forms
  editUserForm: FormGroup;
  bSucceed: boolean = false;
  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private userService: UserService, private customValidatorsService: CustomValidatorsServiceService) { }

  ngOnInit(): void {
    //Get query string rollID
    this.route.params.subscribe(params => {
      this.userId = params.userId;
    });
    this.userService.getUserByuserId(this.userId).subscribe((responce: EditUser) => {
      this.editUser = responce;
    });

    //Create newForm
    this.editUserForm = this.formBuilder.group({
      id: this.formBuilder.control(null),
      name: this.formBuilder.control(null || "", [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      email: this.formBuilder.control(null || "", [Validators.required, Validators.email, Validators.minLength(3), Validators.maxLength(50)], [this.customValidatorsService.DuplicateEmailValidator()]),
      password: this.formBuilder.control(null || "", [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      confirmPassword: this.formBuilder.control(null || "", [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      countryId: this.formBuilder.control(null || "", [Validators.required]),
      stateId: this.formBuilder.control(null || "", [Validators.required]),
      cityId: this.formBuilder.control(null || "", [Validators.required]),
      termsAndPolicy: this.formBuilder.control(false, [Validators.required])
    }
      , {
        validators: [
          this.customValidatorsService.compareValidator("confirmPassword", "password")
        ]
      }
    );
    this.editUserForm.reset();
  }
  onChangeCountry(countryId: string) {
    debugger;
    this.editUser.states = null;
    this.editUser.cities = null;
    this.editUser.stateId = null;
    this.editUser.cityId = null;
    if (countryId != "null" && countryId != "") {
      this.userService.getStates(countryId).subscribe((response: States[]) => {
        this.editUser.states = response;
        this.bState = true;
        this.bCity = false;
      });
    } else {
      this.bState = false;
      this.bCity = false;
    }
  }

  onChangeState(stateId: string) {
    this.editUser.cities = null;
    this.editUser.cityId = null;
    if (stateId != "null" && stateId != "") {
      this.userService.getCities(stateId).subscribe((response: Cities[]) => {
        this.editUser.cities = response;
        this.bCity = true;
      });
    } else {
      this.bCity = false;
    }
  }
  onUpdateClick() {
    if (this.editUserForm.valid) {
      console.log(this.editUserForm.value);
    }
  }
}
