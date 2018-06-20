import { Toastr } from './../common/toastr.service';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component, OnInit, Inject } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TOASTR_TOKEN } from '../common/toastr.service';

@Component({
  templateUrl:'./profile.component.html',
  styles:[`
    em {float:right; color:#E05C65;padding-left:10px}
    .error input {background-color: #E3C3C5;}
    .error ::-webkit-input-placeholder {color: #999;}
  `]
})
export class ProfileComponent implements OnInit{
  profileForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;

  constructor(private authService: AuthService,
     private router: Router,
      @Inject (TOASTR_TOKEN) private toastr:Toastr){

  }
  ngOnInit(){
    this.firstName = new FormControl(this.authService.currentUser.firstName,[Validators.required,Validators.pattern('[a-zA-Z].*') ]);
    this.lastName = new FormControl(this.authService.currentUser.lastName,Validators.required);

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }
  
  cancel(){
    this.router.navigate(['events']);
  }
  saveProfile(formValues){
    if (this.profileForm.valid) {
      
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.toastr.success('Profile saved');
      //this.router.navigate(['events']);
    }
  }

  validateLastName(){
    return this.lastName.valid || this.lastName.untouched
  }
  validateFirstName(){
    return this.firstName.valid || this.firstName.untouched
  }
}