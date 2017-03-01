'use strict'
import React, {Component} from 'react'
import {View,Text} from 'react-native'
import {DrawerNavigator} from 'react-navigation'

import single from './src/single'
import secb from './src/single'
import DrawerContent from './src/DrawerContent'

const DrawerRoutes = {
  Single: {
    screen: single,
  },
  SecB: {
    screen: secb,
  }
}

const RouteConfigs = {
headerMode: 'screen',
  contentComponent:({navigation})=> <DrawerContent navigation={navigation} routes={DrawerRoutes} />,
}

const App = DrawerNavigator(DrawerRoutes,RouteConfigs);



export default App;
