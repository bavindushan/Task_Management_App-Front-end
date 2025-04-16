import { Component } from '@angular/core';
import { DetailsBarComponent } from "../../../common/details-bar/details-bar.component";
import { AdminNavbarComponent } from "../../../common/admin-navbar/admin-navbar.component";

@Component({
  selector: 'app-manage-task',
  imports: [DetailsBarComponent, AdminNavbarComponent],
  templateUrl: './manage-task.component.html',
  styleUrl: './manage-task.component.css'
})
export class ManageTaskComponent {

}
