import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import CharacteristicScreen from './screens/CharacteristicScreen';
import CompatibilityScreen from './screens/CompatibilityScreen';
import JusticeScreen from './screens/JusticeScreen';
import PersonalityScreen from './screens/PersonalityScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          options={{ headerShown: false }}
          component={HomeScreen}
        />
        <Stack.Screen
          name='Justice'
          component={JusticeScreen}
          options={{
            title: 'MBTI란?',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#618264',
            },
            headerTitleStyle: {
              color: 'white',
            },
          }}
        />
        <Stack.Screen
          name='Characteristic'
          component={CharacteristicScreen}
          options={{
            title: 'MBTI 각 지표별 특징',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#618264',
            },
            headerTitleStyle: {
              color: 'white',
            },
          }}
        />
        <Stack.Screen
          name='Compatibility'
          component={CompatibilityScreen}
          options={{
            title: 'MBTI 궁합',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#618264',
            },
            headerTitleStyle: {
              color: 'white',
            },
          }}
        />
        <Stack.Screen
          name='Personality'
          component={PersonalityScreen}
          options={{
            title: 'MBTI별 특징',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#618264',
            },
            headerTitleStyle: {
              color: 'white',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
