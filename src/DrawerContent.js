import React, {Component} from 'react'
import {View,Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native'
import Icon from 'react-native-vector-icons/Octicons';
export default class DrawerContent extends Component {
  constructor(props) {
  super(props)
}
  render(){
    return(
      <View style={{elevation: 10}}>
        <View style={{height:200,backgroundColor:'#6ABFA0'}}>
          <View style={{marginTop:50, alignItems:'center'}}>
            <Text style={{fontSize:30,fontFamily:'futurapt-bold',color:'#fff'}}>
              Daily Attendance
            </Text>
            <Text style={{fontSize:50,fontFamily:'futurapt-book',color:'#fff'}}>
              Sections
            </Text>
          </View>
        </View>
          </View>
    )
  }
}
