import { Component, Inject } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'profile',
  templateUrl: 'profile.component.html'
})
export class ProfileComponent {
  profile: any;

  constructor(
    @Inject('location') private $location: any, 
    @Inject('toastr') private toastr: any, 
    @Inject('currentIdentity') private currentIdentity: any
    ) {
    console.log('here')
    this.profile = Object.assign({}, currentIdentity.currentUser);
  }
      
  save() {
    this.currentIdentity.updateUser(this.profile);
    toastr.success('Profile Saved!');
  }
    
  cancel() {
    this.$location.path('/home');
  }
  
}