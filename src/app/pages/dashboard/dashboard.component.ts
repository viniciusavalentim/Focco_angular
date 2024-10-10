import { Component, OnInit } from '@angular/core';
import { FoccoService } from '../../services/focco.service';
import $ from 'jquery';
import 'select2';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  dropdown: HTMLElement | null = null;
  currentMonth!: number;

  constructor() {
    this.currentMonth = new Date().getMonth() + 1; 
  }


  ngOnInit(): void {
    this.dropdown = document.querySelector('.dropdown');

    if (this.dropdown) {
      this.dropdown.addEventListener('click', () => {
        this.dropdown?.classList.toggle('active');
      });
    }


  }


}
