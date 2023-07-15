import { ForecastModel } from "./forecast.model";

export interface GetForecastsResponseModel {
  forecast: ForecastModel[],
  time: Date
}
