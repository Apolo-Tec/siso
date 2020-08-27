import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { CustomGrid, Box, Input, Button, Typography } from '../../components';
import { ApplicationState } from '../../store';
//import { loadRequest } from '../../store/ducks/repositories/actions';
import { loadRequest } from '../../store/ducks/user/actions';
import { useSelector, useDispatch } from 'react-redux';

export default function Login({ navigation }) {
  const dispatch = useDispatch();

  const [user, onChangeUser] = useState('');
  const [psw, onChangePassword] = useState('');

  const handleButton = () => {
     dispatch(loadRequest({ user, psw }));
  }

  const userData  = useSelector((state: ApplicationState) => state.user.data);

  console.log('userData', userData);
  console.log('userData.Erro', userData.Erro);

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
                <Input onChangeText={(text: any) => onChangeUser(text)} value={user} placeholder="Email" />
              </CustomGrid>
              <CustomGrid marginBottom="medium">
                <Input onChangeText={(text: any) => onChangePassword(text)} secureTextEntry value={psw} placeholder="Senha" />
              </CustomGrid>
              { !!userData.Erro && ( <CustomGrid marginBottom="medium">
                <Typography text="Ocorreu um erro ao fazer o login" color="#FF0000" />
              </CustomGrid>) }
              <Button title="Entrar" onPress={handleButton} variant="primary" />
            </CustomGrid>
          </Box>
      </CustomGrid>
    </SafeAreaView>
  );
}