import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {Navigation} from './src/navigation/Navigation';
import { GradientProvider } from './src/context/GradientContext';

const AppState = ({children}:any)=>{
  return(
    <GradientProvider>
      {children}
    </GradientProvider>
  )
}

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <AppState>
      <Navigation />
      </AppState>
    </NavigationContainer>
  );
}

export default App;
