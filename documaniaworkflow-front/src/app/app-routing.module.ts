import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { StartComponent } from './components/start/start.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { UploadComponent } from './components/upload/upload.component';


const routes: Routes = [
  { path: "", redirectTo: '/login', pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  {
    path: "home", component: HomeComponent, children: [
      { path: "upload", component: UploadComponent },
      { path: "start", component: StartComponent },
      { path: "tasks", component: TasksComponent }



    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
