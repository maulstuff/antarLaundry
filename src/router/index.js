import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Home,
  Splash,
  Akun,
  Pesanan,
  Kiloan,
  Satuan,
  ViAiPi,
  Login,
  Register,
  Karpet,
  Setrika,
  Ekspress,
  DetailKontak,
  ListKiloan,
  ListSatuan,
  ListVip,
  ListKarpet,
  ListSetrika,
  ListEkspress,
  DetailSatuan,
  DetailKarpet,
  DetailSetrika,
  DetailEkspress,
  DetailVip,
  LoginAwal,

} from '../pages';
import { BottomNavigator } from '../components/';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Pesanan" component={Pesanan} />
      <Tab.Screen name="Akun" component={Akun} />
    </Tab.Navigator>
  );
};


const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
      <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
      <Stack.Screen name="Kiloan" component={Kiloan} />
      <Stack.Screen name="Satuan" component={Satuan} />
      <Stack.Screen name="ViAiPi" component={ViAiPi} />
      <Stack.Screen name="Karpet" component={Karpet} />
      <Stack.Screen name="Setrika" component={Setrika} />
      <Stack.Screen name="Ekspress" component={Ekspress} />
      <Stack.Screen name="LoginAwal" component={LoginAwal} options={{ headerShown: false }} />
      <Stack.Screen name="ListKiloan" component={ListKiloan} options={{ headerShown: false }} />
      <Stack.Screen name="ListVip" component={ListVip} options={{ headerShown: false }} />
      <Stack.Screen name="ListSatuan" component={ListSatuan} options={{ headerShown: false }} />
      <Stack.Screen name="ListKarpet" component={ListKarpet} options={{ headerShown: false }} />
      <Stack.Screen name="ListSetrika" component={ListSetrika} options={{ headerShown: false }} />
      <Stack.Screen name="ListEkspress" component={ListEkspress} options={{ headerShown: false }} />
      <Stack.Screen name="DetailKontak" component={DetailKontak} options={{ headerShown: false }} />
      <Stack.Screen name="DetailSatuan" component={DetailSatuan} options={{ headerShown: false }} />
      <Stack.Screen name="DetailSetrika" component={DetailSetrika} options={{ headerShown: false }} />
      <Stack.Screen name="DetailVip" component={DetailVip} options={{ headerShown: false }} />
      <Stack.Screen name="DetailEkspress" component={DetailEkspress} options={{ headerShown: false }} />
      <Stack.Screen name="DetailKarpet" component={DetailKarpet} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
