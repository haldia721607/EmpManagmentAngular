import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-leftsidemenu',
  templateUrl: './leftsidemenu.component.html',
  styleUrls: ['./leftsidemenu.component.css']
})
export class LeftsidemenuComponent implements OnInit {

  constructor(public loginService: LoginService,  private router: Router) { }

  ngOnInit(): void {
  }

}
