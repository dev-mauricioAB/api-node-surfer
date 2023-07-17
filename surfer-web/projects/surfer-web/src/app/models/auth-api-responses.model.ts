export interface AuthenticateResponseModel extends BaseModel {
  token: string
}

export type RegisterResponseModel = BaseModel

interface BaseModel {
  name: string,
  email: string
  id: string
}
