import React, { Component } from 'react'

import { View, Text,StyleSheet} from 'react-native'
import {Button} from 'galio-framework'
class welcome extends Component {
 
  _login = ({navigation}) => {
    this.props.navigation.navigate('login')
  }
  render() {
    return (
      <View style={styles.container}>
        <Text styles={styles.text}> Your Hustle App</Text>
        <Button color="#50C7C7" shadowless onPress={this._login}>Next</Button>      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#fff'
  },
  text: {
    fontSize: 20,
    fontFamily:''
  }
})
export default welcome;