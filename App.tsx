import React from 'react';
import Dashboard from './src/Dashboard';
import { ThemeProvider } from 'styled-components';
import defaultTheme from './global/styles/defaultTheme';

import Apploading from 'expo-app-loading';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if (!fontsLoaded) {
    return <Apploading />
  }
  return (
  <ThemeProvider theme={defaultTheme}>
    <Dashboard/>
  </ThemeProvider>
  )
}

