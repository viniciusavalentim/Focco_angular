import { Component } from '@angular/core';
import { DefaultLayoutAuthComponent } from "../../../components/default-layout-auth/default-layout-auth.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { FoccoService } from '../../../services/focco.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [DefaultLayoutAuthComponent, ReactiveFormsModule, PrimaryInputComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent{
  titleRegister: string = "Crie a sua conta";
  btnRegister: string = "Registre a sua conta";
  btnGoogleRegister: string = "Registre com o Google";
  btnGitHubRegister: string = "Registre com o GitHub";

  registerForm!: FormGroup;

  constructor(private router: Router, private auth: FoccoService, private toastService: ToastrService) {
    this.registerForm = new FormGroup({
      user: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required,Validators.minLength(6)]),
    });    
  }

  submit(){
    this.auth.register(this.registerForm.value).subscribe({
      next: (data) =>{
        const token = data.data;
          localStorage.setItem('token', token);
          this.router.navigate(["home/dashboard"]);
      },
      error: (error) => {
        const erro = error.error.errors;
        console.log(erro)
        if(erro.Email){
          this.toastService.error(erro.Email[0]);
        }else if(erro.User){
          this.toastService.error(erro.User[0]);
        }else if(erro.Password){
          this.toastService.error(erro.Password[0]);
        }else{
          this.toastService.error(erro.ConfirmPassword[0]);
        }

      }
    })
  }
  
  navigate(){
    this.router.navigate(["login"]);
  }
}
