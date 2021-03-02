export interface User {
  name: string;
  email: string;
  password: string;
  phone: number;
  passcode: number;
}

export interface Login {
  email: string;
  password: string;
}
