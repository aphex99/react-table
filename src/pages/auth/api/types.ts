export interface AuthRequestType {
  username: string;
  password: string;
  expiresInMins?: number;
}

export interface ErrorResponseType {
  message: string;
  status: number;
}