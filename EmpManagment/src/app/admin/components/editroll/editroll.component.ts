import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EditRoleViewModel } from 'src/app/models/edit-role-view-model';
import { UsersInRole } from 'src/app/models/users-in-role';
import { RollService } from 'src/app/services/admin/roll.service';

@Component({
  selector: 'app-editroll',
  templateUrl: './editroll.component.html',
  styleUrls: ['./editroll.component.css']
})
export class EditrollComponent implements OnInit {
  editRoleViewModel: EditRoleViewModel = null;
  rollid:string=null;
  //Reactive Forms
  editForm: FormGroup;
  bSucceed: boolean = false;
  usersInRole: UsersInRole = null;
  constructor(private rollService: RollService, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    //Create newForm
    this.editForm = this.formBuilder.group({
      id: this.formBuilder.control(null),
      rollName: this.formBuilder.control(null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      users: this.formBuilder.array([])
    });
    //Get query string rollID
    this.route.params.subscribe(params => {
      this.rollid = params.roleid;
    });

    //Get data from database
    this.rollService.getRollByRollID(this.rollid).subscribe((roll: EditRoleViewModel) => {
      this.editRoleViewModel = roll;
      //Reset the editForm
      this.editForm.reset();
      //Set data into editForm
      this.editForm.patchValue({
        id: this.editRoleViewModel.id,
        rollName: this.editRoleViewModel.roleName
      });
      this.usersInRole = this.editRoleViewModel.users;
    });
  }
  onUpdateClick() { }
  onEditUsersInEoleClick() {
    this.router.navigate(["/admin/roll/editroll/editusersinrole/"+this.editRoleViewModel.id]);
  }


}
