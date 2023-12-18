import {GoogleSignin} from '@react-native-google-signin/google-signin';
import axios from 'axios';
import {authResponse, updateProfile} from '../types/types';
export class AuthServices {
  private googleClientId: string;
  private apiURL: string;

  constructor() {
    this.googleClientId = process.env.GOOGLE_CLIENT_ID || '';
    this.apiURL = process.env.BASE_URL || '';
  }

  async googleAuth(): Promise<authResponse> {
    GoogleSignin.configure({
      webClientId: this.googleClientId,
    });

    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();

    const response = await axios.post(`${this.apiURL}/oauth2/google`, {
      idToken: userInfo.idToken,
    });

    return response.data;
  }

  async updateUserProfile(token: string, data: updateProfile): Promise<String> {
    const response = await axios.put(`${this.apiURL}/users/update`, data, {
      headers: {
        Authorization: token,
      },
    });

    return response.data;
  }
}
