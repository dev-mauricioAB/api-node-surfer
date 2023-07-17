import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarOptionsModel } from '../models/snackbar-options-model';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    private snackBar: MatSnackBar,
  ) { }

  openSnackBar(options: SnackbarOptionsModel) {
    const { message, action = 'X', config } = options;

    this.snackBar.open(message, action, config);
  }
}
