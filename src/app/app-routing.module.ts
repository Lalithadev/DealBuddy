import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddItemComponent } from './deal/add-item.component';
import { AllUsersComponent } from './deal/all-users.component';

const routes: Routes = [
  { path: 'AddItem', component: AddItemComponent },
  { path: 'Users', component: AllUsersComponent },
  { path: '',redirectTo:'/AddItem', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
