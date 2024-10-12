import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FoccoService } from '../../services/focco.service';
import $ from 'jquery';
import 'select2';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { Transactions } from '../../models/transaction';

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
  transactions: Transactions[] = [
    { id: 1, name: "Compra de Café", description: "Compra de café na cafeteria local", value: this.formatToBRL(1115.50), createat: "Out 2024 20:00", cashflow: 3},
    { id: 2, name: "Almoço de Negócios", description: "Almoço com cliente no restaurante", value: this.formatToBRL(120.00), createat: "Out 2024 15:00", cashflow: 2 },
    { id: 3, name: "Compra de Material", description: "Compra de materiais para escritório", value: this.formatToBRL(45.75), createat: "Out 2024 20:00", cashflow: 1 },
    { id: 4, name: "Transporte", description: "Gastos com transporte de táxi", value: this.formatToBRL(30.00), createat: "Out 2024 20:00", cashflow: 2 },
    { id: 5, name: "Serviços de Internet", description: "Pagamento mensal do serviço de internet", value: this.formatToBRL(99.90), createat: "Out 2024 20:00", cashflow: 1 }
  ];

  qauntityTransactions:number = this.transactions.length;

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

  formatDate(dateString: string): string {
    const date = new Date(dateString);

    const months = [
        "Jan", "Fev", "Mar", "Abr", "Mai", "Jun", 
        "Jul", "Ago", "Set", "Out", "Nov", "Dez"
    ];

    const month = months[date.getMonth()]; 
    const year = date.getFullYear();       
    const hours = date.getHours().toString().padStart(2, '0'); 
    const minutes = date.getMinutes().toString().padStart(2, '0'); 

    // Retorna a string formatada
    return `${month} ${year} ${hours}:${minutes}`;
}


}
