import './utils/module-alias';

import { Server } from '@overnightjs/core';

import bodyParser from 'body-parser';
import { ForecastController } from './controllers/forecast';

export class SetupServer extends Server {

  constructor(
    private port = 3000
  ) {
    super();
  }

  public init() {
    this.setupExpress();
    this.setupControllers();
  }

  private setupExpress() {
    this.app.use(bodyParser.json());
  }

  private setupControllers() {
    const forecastController = new ForecastController();

    this.addControllers([forecastController]);
  }

  public getApp() {
    return this.app;
  }
}