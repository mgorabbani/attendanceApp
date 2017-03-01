import React, {Component} from 'react'
import {View,Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native'
import Icon from 'react-native-vector-icons/Octicons';
import Swipeout from 'react-native-swipe-out'

var swipeoutBtns = [
  {
    text: 'Button',
         backgroundColor: '#4fba8a',
         color: '#17807a',
         underlayColor: "#006fff",
          autoClose: true,
  }
]

export default class Single extends Component {
  constructor(props){
    super(props)
    this.state = {
      active : true
    }
  }
  render(){
    return(
      <View style={{flex:1}}>
        <View style={{flex:.5,backgroundColor:'#8a2be2'}}>
          <TouchableOpacity  style={{marginTop:20,marginLeft:20}} onPress={()=> {this.props.navigation.navigate('DrawerOpen'); this.setState({active : !this.state.active})}}>
              <Icon size={30} color="#fff"
                name='three-bars'
              />
          </TouchableOpacity>
          <View style={{alignItems:'center'}}>
            <Text style={{fontSize:30,fontFamily:'futurapt-bold',color:'#fff'}}>
              Daily Attendance
            </Text>
            <Text style={{fontSize:50,fontFamily:'futurapt-book',color:'#fff'}}>
              Jan 31
            </Text>
          </View>
        </View>

        <View style={{flex:.5,justifyContent:'space-between'}}>

          <Swipeout right={swipeoutBtns}  left={swipeoutBtns} onOpen={()=>alert("opeend")}  autoClose={true} >
            <TouchableNativeFeedback  background={TouchableNativeFeedback.Ripple('#E7E7E8')}>
            <View style={{paddingLeft:40,paddingRight:40,backgroundColor:'#30C6A5',paddingTop:20,paddingBottom:20 }}>
              <Text style={{fontSize:20,fontFamily:'futurapt-book',color:'#fff'}}>
                Golam Rabbani
              </Text>
              <Text style={{fontSize:40,fontFamily:'futurapt-bold',color:'#fff'}}>
                152-35-1204
                  </Text>
            </View>
            </TouchableNativeFeedback>
        </Swipeout>

          <TouchableNativeFeedback  background={TouchableNativeFeedback.Ripple('#30C6A5')}>
            <View style={{width: 150,paddingLeft:40,paddingRight:40,backgroundColor:'#093243',paddingTop:20,paddingBottom:20 }}>
              <Text style={{fontSize:20,fontFamily:'futurapt-book',color:'#fff'}}>
              Undo
              </Text>
            </View>
          </TouchableNativeFeedback>





        </View>
      </View>
    )
  }
}
