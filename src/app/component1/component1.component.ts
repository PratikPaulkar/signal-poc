import { Component, computed, signal } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms'
import { from } from 'rxjs';
@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component {
  myForm1: FormGroup;
  // firstName: any = '';
  // lastName: any = '';
  constructor(private fb: FormBuilder) {
    // Define the form structure and add validators
    this.myForm1 = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]]
    });
  }
  firstName = signal('')
  lastName = signal('')

  // fullname = computed(()=> `${this.firstName()} ${this.lastName()} `)
  // onSubmit() {
  //   if (this.myForm1.valid) {
  //     // Form is valid, you can perform further actions here
  //     // console.log(this.myForm1)
  //     console.log('Form1 submitted successfully!');
  //   } else {
  //     // Form is invalid, display error messages
  //     console.log('Form1 is invalid. Please check the fields.');
  //   }
  // }
}
