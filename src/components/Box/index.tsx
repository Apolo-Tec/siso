import React from 'react';
import { View } from 'react-native';

export default function Box({ children }) {
  const style = {  
      width: '100%',
      shadowColor: 'rgba(153,155,168,0.25)',
      shadowOffset: {
        width: 0, 
        height: 2,
      },
      shadowRadius: 3.84,
      elevation: 5,
      backgroundColor: '#fff',
      borderRadius: 4,
    };

  return (
    <View style={style}>
      { children }
    </View>
  )
}