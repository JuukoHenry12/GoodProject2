import React, { Component } from 'react'
import { Text, View } from 'react-native'


class Chat extends Component {
  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => (
      <Ionicons name={`ios-options${focused ? '' : '-outline'}`} size={25} color={tintColor} />
    ),
  }

  render() {
    return (
      <View>
        <Text>
          Chate Room
        </Text>
      </View>
    );
  }
}

export default Chat;