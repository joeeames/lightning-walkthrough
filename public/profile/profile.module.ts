import { NgModule }      from '@angular/core';
import { CommonModule }      from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UpgradeModule } from '@angular/upgrade/static';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      { path: 'profile2', component: ProfileComponent }
    ])
  ],
  declarations: [
    ProfileComponent
  ],
  entryComponents: [
    ProfileComponent
  ],
  providers: [
    
  ],
})
export class ProfileModule {
}
