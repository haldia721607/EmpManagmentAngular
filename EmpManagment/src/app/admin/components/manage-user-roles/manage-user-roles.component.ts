import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserRolesViewModel } from 'src/app/models/user-roles-view-model';
import { UserService } from 'src/app/services/admin/user.service';

@Component({
  selector: 'app-manage-user-roles',
  templateUrl: './manage-user-roles.component.html',
  styleUrls: ['./manage-user-roles.component.css']
})
export class ManageUserRolesComponent implements OnInit {
  mnageUserRoles: UserRolesViewModel[] = null;
  userId: string = null;
  //Reactive Forms
  manageUserRolesForm: FormGroup;
  constructor(private route: ActivatedRoute,private formBuilder: FormBuilder,private userService:UserService) { }

  ngOnInit(): void {
     //Get query string rollID
     this.route.params.subscribe(params => {
      this.userId = params.userId;
    });

        //Create newForm
        this.manageUserRolesForm = this.formBuilder.group({
          roleId: this.formBuilder.control(null),
          roleName: this.formBuilder.control(null),
          isSelected: this.formBuilder.control(false)
        });
        //Reset the editForm
        this.manageUserRolesForm.reset();
        this.getAllUsersInRoll(this.userId);
  }
  getAllUsersInRoll(userId: string) {
    //Get data from database
    this.userService.getmanageUserRolesByUserId(userId).subscribe(
      (roll: UserRolesViewModel[]) => {
        debugger;
        this.mnageUserRoles = roll;
      });
  }
  onUpdateManageUsersClick(){
    console.log(this.manageUserRolesForm.value,this.userId);
  }
}
