import React from 'react';
import { createContext } from 'react';
import { ContextProps } from '../types';

export const AppContext = createContext<ContextProps | undefined>(undefined);

export const useAppContext = () => {
  let context = React.useContext(AppContext);

  if (context === undefined) {
    throw Error('App Context is undefined');
  }

  return context;
};
