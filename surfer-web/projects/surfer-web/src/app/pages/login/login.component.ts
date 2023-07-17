import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
import { FormGroupModel } from '../../models/form-group.model';
import { LoginControlsModels } from '../../models/login-form-controls.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroupModel<LoginControlsModels>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    public router: Router,
  ) {
    this.loginForm = this.formBuilder.nonNullable.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const { email, password } = this.loginForm.value;

    if (email && password)
      this.authService.login(email, password)
        .subscribe(() => {
          this.loginForm.reset();
          this.router.navigate(['/']);
        });
  }
}
