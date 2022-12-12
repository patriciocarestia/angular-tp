import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth-guard.service';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from "./components/login/login.component";

import { ListComponent } from './components/persons/list/list.component';
import { DetailsComponent } from './components/persons/details/details.component';
import { CreateComponent } from './components/persons/create/create.component';
import { EditComponent } from './components/persons/edit/edit.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: 'persons', pathMatch: 'full', redirectTo: 'persons/list' },
  { path: 'persons/list', component: ListComponent, canActivate: [AuthGuard] },
  { path: 'person/details/:personId', component: DetailsComponent, canActivate: [AuthGuard]  },
  { path: 'person/create', component: CreateComponent, canActivate: [AuthGuard]  },
  { path: 'person/edit/:personId', component: EditComponent, canActivate: [AuthGuard]  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
