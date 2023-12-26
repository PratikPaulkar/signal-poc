import { Component, signal } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component {
  myForm2: FormGroup;
  form2Data: any;
  // mobile: any = '';
  // email: any = '';
  constructor(private fb: FormBuilder) {
    // Define the form structure and add validators
    this.myForm2 = this.fb.group({
      mobile: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.minLength(7)]]
    });
  }
  mobile = signal('')
  email = signal('')
  // onSubmit() {
  //   if (this.myForm2.valid) {
  //     // Form is valid, you can perform further actions here
  //     // this.form2Data = this.myForm2;
  //     // console.log(this.form2Data.mobile.value, this.form2Data.email.value)
  //     console.log('Form2 submitted successfully!');
  //   } else {
  //     // Form is invalid, display error messages
  //     console.log('Form2 is invalid. Please check the fields.');
  //   }
  // }
}
