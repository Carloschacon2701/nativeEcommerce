import React, {useContext} from 'react';
import {useMemo} from 'react';
import {AuthServices} from '../utils/services/AuthServices';
import {AuthContextProvider} from '../Context/AuthContext';
import {updateProfile} from '../utils/types/types';

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const authService = useMemo(() => new AuthServices(), []);

  const GoogleSigIn = async () => {
    const response = await authService.googleAuth();

    return response;
  };

  const updateUserProfile = async (token: string, data: updateProfile) => {
    const response = await authService.updateUserProfile(token, data);

    return response;
  };

  return (
    <AuthContextProvider.Provider value={{GoogleSigIn, updateUserProfile}}>
      {children}
    </AuthContextProvider.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContextProvider);

  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }

  return context;
};
