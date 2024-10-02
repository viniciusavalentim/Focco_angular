import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { DefaultLayoutAuthComponent } from '../../../components/default-layout-auth/default-layout-auth.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../../components/primary-input/primary-input.component';
import { FoccoService } from '../../../services/focco.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, DefaultLayoutAuthComponent, ReactiveFormsModule, PrimaryInputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  LoginForm!: FormGroup;

  constructor(private router: Router, private auth: FoccoService, private toastService: ToastrService) {
    this.LoginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  submit() {
    this.auth.login(this.LoginForm.value).subscribe({
      next: (data) => {
        this.toastService.clear();
        const token = data.data;
        this.toastService.success("Logado com sucesso!");
        localStorage.setItem('token', token);
        this.router.navigate(["dashboard"]);
      },
      error: (error) => {
        this.toastService.clear();
        const erro = error.error.errors;
        const erroResponse = error.error;

        if (erroResponse.message) {
          this.toastService.error(erroResponse.message);
        } else {
          if (erro.Email?.length) {
            this.toastService.error(erro.Email[0]);
          } else if (erro.Password?.length) {
            this.toastService.error(erro.Password[0]);
          }
        }

      }
    })
  }

  navigate() {
    this.router.navigate(["register"]);
  }

}
