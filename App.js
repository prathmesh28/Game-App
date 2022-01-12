import * as React from 'react';
import {View, Text, Button, Switch, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TickTacToe from './src/Screens/TicTacToe';
import RollDice from './src/Screens/RollDice';

function HomeScreen({navigation}) {
  return (
    <View
      style={{flex: 1, alignItems: 'center', justifyContent: 'space-evenly'}}>
      <Button
        title="Tic"
        color="#212121"
        onPress={() => navigation.navigate('TickTacToe')}
      />
      <Button
        title="Tac"
        color="#212121"
        onPress={() => navigation.navigate('RollDice')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  const colorScheme = useColorScheme();
  
  return (
    <NavigationContainer>
      <Stack.Navigator
      
        initialRouteName="Home"
        screenOptions={{
          headerStyle:{backgroundColor:colorScheme==='light'?'#fff':'#000',
        },
        headerTitleStyle:{color:colorScheme==='light'?'#fff':'#cccccc'}
       
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TickTacToe" component={TickTacToe} />
        <Stack.Screen name="RollDice" component={RollDice} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
