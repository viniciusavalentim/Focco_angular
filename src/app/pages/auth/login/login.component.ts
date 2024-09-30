import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DefaultLayoutAuthComponent } from '../../../components/default-layout-auth/default-layout-auth.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../../components/primary-input/primary-input.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, DefaultLayoutAuthComponent, ReactiveFormsModule, PrimaryInputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  LoginForm!: FormGroup;

  constructor() {
    this.LoginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });    
  }

  submit(){

  }

}
