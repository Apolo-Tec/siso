import React from 'react';
import { SafeAreaView, StatusBar, View, Text, Image } from 'react-native';

import { CustomGrid, Button, Slider } from '../../components';

import step1 from '../../assets/images/step1.png';
import step2 from '../../assets/images/step2.png';
import step3 from '../../assets/images/step3.png';

import Swiper from 'react-native-swiper'

export default function Tutorial() {

  const styles = {
    text: {
      marginTop: 50,
      color: '#000',
      fontSize: 16,
    }};
  
  const handleButton = () => {
    console.log('go to login');
  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <CustomGrid backgroundColor="secondary" flex={1}>
        <CustomGrid flex={1}>
            <Swiper loop={false}>
              <Slider>
                <Image source={step1} />
                <Text style={styles.text}>Gerencie seus projetos de meneira ágilGerencie seus projetos de meneira ágilGerencie seus projetos de meneira ágilGerencie seus projetos de meneira ágilGerencie seus projetos de meneira ágil</Text>
              </Slider>
              <Slider>
                <Image source={step2} />
                <Text style={styles.text}>Beautiful</Text>
              </Slider>
              <Slider>
                <Image source={step3} />
                <Text style={styles.text}>And simple</Text>
              </Slider>
            </Swiper>
        </CustomGrid>
        <CustomGrid  paddingLeft="medium" paddingRight="medium" paddingBottom="medium"> 
          <Button variant="primary" onPress={handleButton} title="Entrar" />
        </CustomGrid>
      </CustomGrid>
    </SafeAreaView>
  )

  
}

