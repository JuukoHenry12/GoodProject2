import React, { Component } from 'react'
import {Text,View ,TextInput,StyleSheet} from 'react-native'
import { Input, Block, Button, theme, Icon } from 'galio-framework'
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      phone:''
     };
  }
  
  handlePhone = phone => {
    this.setState({phone})
  }

render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text1}>Sign up</Text>
        <Input
          placeholder="phone number"
          onChangeText={this.handlePhone}
          value={this.state.phone}
          style={styles.Input}
          placeholderTextColor={theme.COLORS.THEME}
        />
        
        <Button 
          round
        >Send Verification Code </Button>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
  },
 Input: {
    borderColor: theme.COLORS.THEME,
    color: theme.COLORS.THEME,
    width: 300,
    borderWidth: 2,

  },
 text1: {
    color: 'red',
    fontSize: 20,

  }
})

export default SignUp;