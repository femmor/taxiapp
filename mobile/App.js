import React from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
} from 'react-native';
import io from "socket.io-client"
import tailwind from 'tailwind-rn';

const App = () => (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={tailwind('h-full flex justify-center')}>
        <Text style={tailwind('text-center text-4xl')}>Welcome to TaxiApp</Text>
      </SafeAreaView>
    </>
);

export default App;
