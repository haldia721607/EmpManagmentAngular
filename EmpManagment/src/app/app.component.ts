import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { fadeAnimation, slideUpAnimation, zoomUpAnimation, zoomLeftAnimation, slideLeftOrRightAnimation, keyFrameAnimation } from "./animations/my-animations";
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation]
})
export class AppComponent {

  constructor(public loginService: LoginService, private router: Router) { }
  ngOnInit() {
    this.loginService.detectIfAlreadyLoggedIn();
  }
  getState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute.snapshot.url[0].path && outlet.activatedRouteData["linkIndex"] : "none";
  }
}
