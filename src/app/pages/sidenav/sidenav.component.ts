import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { navbarData } from './nav-data';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();

  collapsed = true;
  screenWidth = 0;
  navData = navbarData;
  
  constructor() { }

  ngOnInit() {
  }

  toggleCollapsed(){
    this.collapsed = !this.collapsed;
    this,this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

}
