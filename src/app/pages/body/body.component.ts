import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from "../dashboard/dashboard.component";

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DashboardComponent],
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  @Input() collapsed = false;
  @Input() screenWidth = 0;


  constructor() { }

  ngOnInit() {
    this.screenWidth = window.innerWidth;
  }

  onComponentClick(event: MouseEvent){
    console.log(this.collapsed);
    console.log(this.screenWidth);

    if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0){
      this.collapsed = false;
    }
  }
  
  getBodyClass(): string{
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768){
      styleClass = 'body-trimmed';
    }else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0){
      styleClass = 'body-md-screen';
    }
    return styleClass;
  }
}
