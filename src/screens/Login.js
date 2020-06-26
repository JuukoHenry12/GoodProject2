import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput} from 'react-native';


import { Input, Block, Button, theme, Icon } from 'galio-framework'
import { color } from 'react-native-reanimated';

class Login extends Component{
  constructor(props) {
  super(props);
  this.state = {
    name: '',
    password: ''
  }
}

handlePassword = password => {
  this.setState({ password })
  }
  
handleName = name => {
  this.setState({ name })
  }
  _login = (navigation) => {
    this.props.navigation.navigate('home')
  }
  
render() {
  return (
    <Block style={styles.container}>
      <Text style={styles.text}>Login </Text>
      <Input
        placeholder="Name"
        right
        Icon="heart"
        value={this.state.name}
        onChangeText={this.handleName}
        style={styles.Input}
        placeholderTextColor={theme.COLORS.THEME}
      />
      <Input
        placeholder="password"
        value={this.state.password}
        onChangeText={this.handlePassword}
        style={styles.Input}
        placeholderTextColor={theme.COLORS.THEME}
        
      />

     
      <Button  round uppercase  color='success' onPress={this._login} >Login</Button>
      <Text  onPress={this._signUp} >Login</Text>
    </Block>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#ff0'
  },
  Input: {
    borderColor: theme.COLORS.THEME,
    color: theme.COLORS.THEME,
    width: 300,
    borderWidth: 2,
  
  },
  text: {
    fontSize:20,
    color: '#000',
    fontFamily:'aerial'
  },
  button: {
    width:500,
  }
})

export default Login;