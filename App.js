
import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

 

  return (
    <SafeAreaView style={{backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
      flex:1,alignItems:'center',justifyContent:'space-evenly'}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
     
          <Button title="Tic" color="#212121"/>
          <Button title="Tic" color="#212121"/>
 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
