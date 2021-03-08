import { Component, OnInit } from '@angular/core';
import { UserListViewModes } from 'src/app/models/user-list-view-modes';
import { UserService } from 'src/app/services/admin/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userListViewModes:  UserListViewModes[];
  constructor(public userservice: UserService) { }

  ngOnInit(): void {
    var currentUser = JSON.parse(sessionStorage.currentUser);
    this.userservice.getUsers(currentUser.id).subscribe(
      (response: UserListViewModes[]) => {
        this.userListViewModes = response;
      }
    );



  }

  onDeleteClick(event, userId: string) {
  }
}
