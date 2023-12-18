import {createContext} from 'react';
import {AuthContextType} from '../utils/types/ContextTypes';

export const AuthContextProvider = createContext<AuthContextType>(
  {} as AuthContextType,
);
