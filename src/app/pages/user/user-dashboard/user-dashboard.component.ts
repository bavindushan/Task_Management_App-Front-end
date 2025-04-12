import { Component } from '@angular/core';
import { UserNavbarComponent } from "../../../common/user-navbar/user-navbar.component";
import { DetailsBarComponent } from "../../../common/details-bar/details-bar.component";

@Component({
  selector: 'app-user-dashboard',
  imports: [UserNavbarComponent, DetailsBarComponent],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {

}
