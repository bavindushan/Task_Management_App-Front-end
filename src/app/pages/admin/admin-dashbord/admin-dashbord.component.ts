import { Component } from '@angular/core';
import { AdminNavbarComponent } from "../../../common/admin-navbar/admin-navbar.component";
import { DetailsBarComponent } from "../../../common/details-bar/details-bar.component";

@Component({
  selector: 'app-admin-dashbord',
  imports: [AdminNavbarComponent, DetailsBarComponent],
  templateUrl: './admin-dashbord.component.html',
  styleUrl: './admin-dashbord.component.css'
})
export class AdminDashbordComponent {

}
