import { Injectable } from '@angular/core';

import { environment } from 'projects/surfer-web/src/environments/environment';
import { EnvironmentModel } from '../../environments/environment.model';

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {
  getEnvironment(): EnvironmentModel {
    return environment;
  }
}
