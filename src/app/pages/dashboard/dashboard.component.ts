import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FoccoService } from '../../services/focco.service';
import $ from 'jquery';
import 'select2';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, NgxSpinnerModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  dropdown: HTMLElement | null = null;
  currentMonth!: number;
  currentBalance?: string;
  currentIncome?: string;
  currentEx?: string;
  currentInvest?: string;
  getUser?: string;

  constructor(private focco: FoccoService, private spinner: NgxSpinnerService ,private cdr: ChangeDetectorRef) {
    this.currentMonth = new Date().getMonth() + 1;
  }

  ngOnInit(): void {

    this.dropdown = document.querySelector('.dropdown');

    if (this.dropdown) {
      this.dropdown.addEventListener('click', () => {
        this.dropdown?.classList.toggle('active');
      });
    }
    this.spinner.hide();

    this.focco.getUser().subscribe((data) =>{
      console.log(data);
      this.getUser = data;
    })

    this.focco.getCurrentBalance(this.formatAmericanDate(2024, this.currentMonth, 1)).subscribe((data) => {
      const dados = this.formatToBRL(data.data);
      this.currentBalance = dados;
    });

    this.focco.getCashFLow(1, this.formatAmericanDate(2024, this.currentMonth, 1)).subscribe((data) => {
      const dados = this.formatToBRL(data.data);
      this.currentIncome = dados;
    });

    this.focco.getCashFLow(2, this.formatAmericanDate(2024, this.currentMonth, 1)).subscribe((data) => {
      const dados = this.formatToBRL(data.data);
      this.currentEx = dados;
    });

    this.focco.getCashFLow(3, this.formatAmericanDate(2024, this.currentMonth, 1)).subscribe((data) => {
      const dados = this.formatToBRL(data.data);
      this.currentInvest = dados;
    });


  }

  


  getAllTransactionsAgain() {
    console.log(this.currentMonth);
    this.focco.getCurrentBalance(this.formatAmericanDate(2024, this.currentMonth, 1)).subscribe((data) => {
      const dados = this.formatToBRL(data.data);
      this.currentBalance = dados;
      this.cdr.detectChanges();
    });

    this.focco.getCashFLow(1, this.formatAmericanDate(2024, this.currentMonth, 1)).subscribe((data) => {
      const dados = this.formatToBRL(data.data);
      this.currentIncome = dados;
    });

    this.focco.getCashFLow(2, this.formatAmericanDate(2024, this.currentMonth, 1)).subscribe((data) => {
      const dados = this.formatToBRL(data.data);
      this.currentEx = dados;
    });

    this.focco.getCashFLow(3, this.formatAmericanDate(2024, this.currentMonth, 1)).subscribe((data) => {
      const dados = this.formatToBRL(data.data);
      this.currentInvest = dados;
    });
  }

  formatAmericanDate(year: number, month: number, day: number): string {
    const date = new Date(year, month - 1, day);

    const yearStr = date.getFullYear().toString();
    const monthStr = (date.getMonth() + 1).toString().padStart(2, '0');
    const dayStr = date.getDate().toString().padStart(2, '0');

    return `${yearStr}-${monthStr}-${dayStr}`;
  }

  formatToBRL(value: number): string {
    return value.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }


}
