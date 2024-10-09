import { Component } from '@angular/core';
import { FoccoService } from '../../services/focco.service';
import { SidenavComponent } from "../sidenav/sidenav.component";
import { RouterOutlet } from '@angular/router';
import { BodyComponent } from "../body/body.component";

interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidenavComponent, RouterOutlet, BodyComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  constructor(private auth: FoccoService) {
  }

  cancelSideNav = true;
  isSideNavCollapsed = false;
  screenWidth = 0;

  onComponentClick(event: MouseEvent){
    if(this.screenWidth <= 768 && this.isSideNavCollapsed == true){
      this.cancelSideNav = false;
    }else{
      this.cancelSideNav = true;
    }
  }

  onToggleSideNav(data: SideNavToggle){
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  logout() {
    this.auth.logout();
  }
}
