import React from 'react';
import { View, Text, SafeAreaView, StatusBar } from 'react-native';

import { CustomGrid, Box, Input } from '../../components';

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
              <CustomGrid marginBottom="medium">
                <Input placeholder="Email" />
              </CustomGrid>
              <CustomGrid marginBottom="medium">
                <Input placeholder="Senha" />
              </CustomGrid>
            </CustomGrid>
          </Box>
      </CustomGrid>
    </SafeAreaView>
  );
}