import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EditUsersInRoleViewModel } from 'src/app/models/edit-users-in-role-view-model';
import { RollService } from 'src/app/services/admin/roll.service';

@Component({
  selector: 'app-edit-users-in-role',
  templateUrl: './edit-users-in-role.component.html',
  styleUrls: ['./edit-users-in-role.component.css']
})
export class EditUsersInRoleComponent implements OnInit {
  editUsersInRoles: EditUsersInRoleViewModel[] = null;
  rollid: string = null;
  message: string = null;
  //Reactive Forms
  editUsersInRoleForm: FormGroup;
  bSucceed: boolean = false;
  constructor(private rollService: RollService, private route: ActivatedRoute, private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit(): void {
    //Get query string rollID
    this.route.params.subscribe(params => {
      this.rollid = params.roleid;
    });

    //Create newForm
    this.editUsersInRoleForm = this.formBuilder.group({
      userId: this.formBuilder.control(null),
      userName: this.formBuilder.control(null),
      isSelected: this.formBuilder.control(false)
    });
    //Reset the editForm
    this.editUsersInRoleForm.reset();
    this.getAllUsersInRoll(this.rollid);
  }

  getAllUsersInRoll(rollid: string) {
    //Get data from database
    this.rollService.getUsersInRoll(rollid).subscribe(
      (roll: EditUsersInRoleViewModel[]) => {
        this.editUsersInRoles = roll;
      });
  }

  onUpdateUsersInRollClick() {
    this.rollService.postUsersInRoll(this.editUsersInRoleForm.value,this.rollid).subscribe((response) => {
      if (response) {
        this.bSucceed=true;
        this.message = "New roll added succesfully.";
        setTimeout(()=>{
          this.router.navigate(["/admin","roll","editroll",this.rollid]);
        },1200);
      }
    }), (error) => {
      console.log(error);
    }
    console.log(this.editUsersInRoleForm.value);
  }
}
