import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Header, SocialIcon, PricingCard   } from 'react-native-elements';
import { Button } from 'native-base';
import { StackNavigator } from 'react-navigation';
import LoginPage from './src/pages/LoginPage';
import MainPage from './src/pages/MainPage';
import CadastroUsuario from './src/pages/CadastroUsuario';
export default StackNavigator ({
  'Main':{
    screen: LoginPage
  },
  'MainPage':{
    screen: MainPage
  },
  'Cadastro':{
    screen: CadastroUsuario
  }
  
},{
  navigationOptions: {
    header: null,
  }
});


