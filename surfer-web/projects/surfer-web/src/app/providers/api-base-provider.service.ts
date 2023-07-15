import { HttpClient } from '@angular/common/http';

import { ApiBaseService } from '../services/api-base.service';
import { ApiBaseMockService } from '../mocks/api-base.mock.service';
import { EnvironmentService } from '../services/environment.service';

import { environment } from '../../environments/environment';

const apiBaseServiceFactory = (http: HttpClient, environmentService: EnvironmentService) => {
  if (environment.useApiServiceMock) return new ApiBaseMockService();

  return new ApiBaseService(http, environmentService);
};

export const ApiBaseServiceProvider = {
  provide: ApiBaseService,
  useFactory: apiBaseServiceFactory,
  deps: [HttpClient, EnvironmentService],
};
