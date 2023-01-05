import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './src/screens/Splash';
import Home from './src/screens/Home';
import { NativeBaseProvider } from "native-base";

// android:windowSoftInputMode="stateAlwaysHidden|adjustPan" <--- androidManifest for keyboard

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Splash">
          <Stack.Screen name='Splash' component={Splash} />
          <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;