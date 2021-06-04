

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
 import {
   SafeAreaView,
   Text,
   View,
 } from 'react-native';
import { Navigation } from './src/navigation/Navigation';



 
 const App = () => {
   return (
     <NavigationContainer>
        <Navigation/>
     </NavigationContainer>
   )
  
 };

 export default App;
