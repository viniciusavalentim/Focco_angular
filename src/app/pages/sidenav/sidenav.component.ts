import { Component, OnInit, Output, EventEmitter, HostListener, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { navbarData } from './nav-data';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterLink, CommonModule, RouterLinkActive],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  @Input() cancelSideNav!: boolean;

  collapsed = false;
  screenWidth = 0;
  navData = navbarData;

  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
    }
  }

  ngOnInit() {
    this.screenWidth = window.innerWidth;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['cancelSideNav'] && changes['cancelSideNav'].currentValue !== null) {
      if (this.screenWidth <= 768 && this.collapsed == true) {
        this.collapsed = !this.collapsed;
        this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
      }
    }
  }

  toggleCollapsed() {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }

  closeSidenav() {
    this.collapsed = false;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });

  }

}
