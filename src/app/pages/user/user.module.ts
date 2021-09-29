import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';


import { UserComponent } from './user.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule,

  ],
  declarations: [UserComponent]
})
export class UserModule {}
