export type RootStackParamList = {
  Register: undefined;
  Login: undefined;
  Welcome: undefined;
};

export type authResponse = {
  accessToken: string;
  refreshToken: string;
};

export type RegisterRequest = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: number;
  bankAccount: number;
};

export type updateProfile = RegisterRequest;
