import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RollService } from 'src/app/services/admin/roll.service';

@Component({
  selector: 'app-addroll',
  templateUrl: './addroll.component.html',
  styleUrls: ['./addroll.component.css']
})
export class AddrollComponent implements OnInit {
  message: string = null;
  bSucceed:boolean=false;
  //Reactive Forms
  newForm: FormGroup;
  //Autofocus TextBoxes
  @ViewChild("defaultTextBox_New") defaultTextBox_New: ElementRef;
  constructor(private formBuilder: FormBuilder, private rollService: RollService,private router: Router) { }

  ngOnInit(): void {
    //Create newForm
    this.newForm = this.formBuilder.group({
      id: this.formBuilder.control(null),
      rollName: this.formBuilder.control(null, [Validators.required,Validators.minLength(3),Validators.maxLength(30)])
    });

    this.newForm.reset();
    setTimeout(() => {
      //Focus the ClientLocation textbox in newForm
      this.defaultTextBox_New.nativeElement.focus();
    }, 100);
  }
  onSaveClick() {
    if (this.newForm.valid) {
      this.rollService.newRoll(this.newForm.value).subscribe((response) => {
        if (response) {
          this.bSucceed=true;
          this.message = "New roll added succesfully.";
          setTimeout(()=>{
            this.router.navigate(["/admin","roll"]);
          },1200);
        }
      }), (error) => {
        console.log(error);
      }
    }
  }
}
