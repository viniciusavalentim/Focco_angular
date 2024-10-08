import { Component } from '@angular/core';
import { FoccoService } from '../../services/focco.service';
import { SidenavComponent } from "../sidenav/sidenav.component";
import { RouterOutlet } from '@angular/router';

interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidenavComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private auth: FoccoService) {
  }

  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle){
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  logout() {
    this.auth.logout();
  }
}
