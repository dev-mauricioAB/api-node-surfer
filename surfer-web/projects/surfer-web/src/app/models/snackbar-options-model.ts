import { MatSnackBarConfig } from '@angular/material/snack-bar';

export interface SnackbarOptionsModel {
  message: string;
  action?: string;
  config?: MatSnackBarConfig;
}
