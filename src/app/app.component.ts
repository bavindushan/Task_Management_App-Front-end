import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { LoginComponent } from "./pages/login/login.component";
import { AdminDashbordComponent } from "./pages/admin/admin-dashbord/admin-dashbord.component";
import { UserDashboardComponent } from "./pages/user/user-dashboard/user-dashboard.component";
import { ManageTaskComponent } from "./pages/admin/manage-task/manage-task.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, AdminDashbordComponent, UserDashboardComponent, ManageTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'TaskManager';

  ngOnInit(): void {
    initFlowbite();
  }
}
