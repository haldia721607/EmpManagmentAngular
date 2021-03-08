import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from './admin/user.service';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorsServiceService {

  constructor(private userService:UserService) { }
  public compareValidator(controlToValidate: string, controlToCompare: string): ValidatorFn
  {
    return (formGroup: FormGroup): ValidationErrors | null =>
    {
      if (!formGroup.get(controlToValidate).value)
        return null; //return, if the confirm password is null

      if (formGroup.get(controlToValidate).value == formGroup.get(controlToCompare).value)
        return null; //valid
      else
      {
        formGroup.get(controlToValidate).setErrors( { compareValidator: { valid: false }});
        return { compareValidator: { valid: false } }; //invalid
      }
    };
  }

  public DuplicateEmailValidator(): AsyncValidatorFn
  {
    return (control: AbstractControl): Observable<ValidationErrors | null> =>
    {
      return this.userService.getUserByEmail(control.value).pipe(map((existingUser: any) =>
      {
        if (existingUser != null)
        {
          return { uniqueEmail: { valid: false } }; //invalid
        }
        else
        {
          return null;
        }
      }));
    };
  }
}
