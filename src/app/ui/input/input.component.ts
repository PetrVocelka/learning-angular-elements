import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type InputValue = string | number | undefined;
type InputType = "text" | "number" | "email" | "password";

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="form-control">
      <label [for]="inputId" *ngIf="label">{{ label }}</label>
      <input [type]="type" [value]="value" [id]="inputId" />
    </div>
  `,
  styles: [`
    .form-control {
      display: block;
      margin-bottom: 16px;
    }

    .form-control label {
      display: block;
    }

    .form-control input {
      width: 100%;
      padding: 8px;
      box-sizing: border-box;
      display: block;
    }
  `]
})
export class InputComponent {
  @Input() inputId = Math.random().toString(16);
  @Input() label = "";
  @Input() value: InputValue;
  @Input() type: InputType = "text";

  constructor() {
    console.log("čus");
  }
}
