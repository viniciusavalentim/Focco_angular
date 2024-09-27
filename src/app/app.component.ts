import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { userLogin } from './models/userLogin';
import { FormsModule } from '@angular/forms';
import { FoccoService } from './services/focco.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Focco_Angular';

  constructor(private foccoService: FoccoService) { }

  userLogin = new userLogin();

  login(user: userLogin) {
    this.foccoService.login(user).subscribe((data) => {
      const token = data.data;
      localStorage.setItem("token", token);
    })
  }

  getTransaction(){
    this.foccoService.getTransactions().subscribe((data) => {
      console.log(data);
    })
  };

  logout(){
    this.foccoService.logout();
  }
}
