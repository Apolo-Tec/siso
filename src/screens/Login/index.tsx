import React from 'react';
import { View, Text, SafeAreaView, StatusBar } from 'react-native';

import { CustomGrid, Box } from '../../components';

export default function Login() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <CustomGrid 
        marginBottom="medium" 
        flex={1} 
        justifyContent="space-around" 
        alignItems="center" 
        marginLeft="medium" 
        marginRight="medium">
        <Box>
          <CustomGrid paddingTop="medium" paddingBottom="medium" paddingLeft="small" paddingRight="small">
            <Text>Box element</Text>
          </CustomGrid>
        </Box>
      </CustomGrid>
    </SafeAreaView>
  );
}