import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

import { FormGroupModel } from '../../models/form-group.model';
import { RegisterControlsModels } from '../../models/register-form-controls.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroupModel<RegisterControlsModels>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.registerForm = this.formBuilder.nonNullable.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      return;
    }

    const { name, email, password } = this.registerForm.value;

    if (name && email && password)
      this.authService.register(name, email, password)
        .subscribe(data => {
          console.log(data)
        })

  }
}
