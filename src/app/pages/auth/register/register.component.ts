import { Component } from '@angular/core';
import { DefaultLayoutAuthComponent } from "../../../components/default-layout-auth/default-layout-auth.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [DefaultLayoutAuthComponent, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  titleRegister: string = "Crie a sua conta";
  btnRegister: string = "Registre a sua conta";
  btnGoogleRegister: string = "Registre com o Google";
  btnGitHubRegister: string = "Registre com o GitHub";

  registerForm!: FormGroup;

  constructor() {
    this.registerForm = new FormGroup({
      user: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required,Validators.minLength(6)]),
    });    
  }

}
