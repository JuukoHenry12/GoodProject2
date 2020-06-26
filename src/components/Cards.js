import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Rows form './Rows'
class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <View style={styles.container}>
       <Rows />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 5,
    borderTopWidth: 5,
    borderBottomColor: '#222',
    borderTopColor: '#CACACA',
    borderStyle: 'solid',
    height:207,
  }
})
export default Cards;