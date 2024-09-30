import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-default-layout-auth',
  standalone: true,
  imports: [],
  templateUrl: './default-layout-auth.component.html',
  styleUrl: './default-layout-auth.component.css'
})
export class DefaultLayoutAuthComponent {
  @Input() title: string = '';
  @Input() primaryBtn: string = '';
  @Input() btnGoogle: string = '';
  @Input() btnGitHub: string = '';
  @Input() textAccount: string = '';
  @Input() actionAccount: string = '';
  @Input() titleSecondary: string = '';
  @Input() titlePrimary: string = '';

  @Output("submit") onSubmit = new EventEmitter();

  submit(){
    this.onSubmit.emit();
  }


}
