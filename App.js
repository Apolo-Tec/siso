import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text
} from 'react-native';


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View><Text>Siso</Text></View>
      </SafeAreaView>
    </>
  );
};

export default App;
