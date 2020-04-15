import React, { useState, useRef, RefObject } from 'react';
import { SafeAreaView, StatusBar, View, Text } from 'react-native';

import { CustomGrid, Button } from '../../components';

import Swiper from 'react-native-swiper'

export default function Tutorial() {

  const styles = {
    wrapper: {},
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF'
    },
    text: {
      color: '#000',
      fontSize: 30,
      fontWeight: 'bold'
    }};

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <CustomGrid backgroundColor="secondary" flex={1}>
        <CustomGrid flex={1}>
            <Swiper style={styles.wrapper} index={1}>
              <View style={styles.slide1}>
                <Text style={styles.text}>Hello Swiper</Text>
              </View>
              <View style={styles.slide2}>
                <Text style={styles.text}>Beautiful</Text>
              </View>
              <View style={styles.slide3}>
                <Text style={styles.text}>And simple</Text>
              </View>
            </Swiper>
        </CustomGrid>
        <CustomGrid  paddingLeft="medium" paddingRight="medium" paddingBottom="medium"> 
          <Button variant="primary" title="Continuar" />
        </CustomGrid>
      </CustomGrid>
    </SafeAreaView>
  )

  
}

