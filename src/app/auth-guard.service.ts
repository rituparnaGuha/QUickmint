import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  static goTo: string = localStorage.getItem('userData') == "driver" ? "home-delivery" : "charge";
  userType = localStorage.getItem('userType')
  constructor(
    // public navCtrl: NavController, 
    public router: Router
  ) { }

  canActivate():boolean {
    return this.isAuthenticated()
  }

  isAuthenticated():boolean {
    let token = localStorage.getItem('token');
    let userData = localStorage.getItem('userData');
    if (this.userType == '' || this.userType == null || this.userType == undefined || userData == '' || userData == null || userData == undefined) {
      this.router.navigate(['login'])
      return false
    }
    else return true
  }
}
