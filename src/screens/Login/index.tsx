import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { CustomGrid, Box, Input, Button } from '../../components';
import { ApplicationState } from '../../store';
//import { loadRequest } from '../../store/ducks/repositories/actions';
import { loadRequest } from '../../store/ducks/user/actions';
import { useSelector, useDispatch } from 'react-redux';

export default function Login() {
  const dispatch = useDispatch();

  const handleButton = () => {
    dispatch(loadRequest());
  }

  const user  = useSelector((state: ApplicationState) => state.user.data);

  console.log('user', user);

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
              <Button title="Entrar" onPress={handleButton} variant="primary" />
            </CustomGrid>
          </Box>
      </CustomGrid>
    </SafeAreaView>
  );
}