import { Component, Input } from '@angular/core';

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


}
