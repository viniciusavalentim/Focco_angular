import { Component } from '@angular/core';
import { FoccoService } from '../../services/focco.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  /**
   *
   */
  constructor(private auth: FoccoService) { 
  }


  logout(){
    this.auth.logout();
  }
}
