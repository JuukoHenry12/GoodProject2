import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, FlatList } from 'react-native'

import { Card } from 'galio-framework';


class MainList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:this._additem
    };
  }
  _additem = (item) => {
     this.setState()
  }
  render() {
    return (
      <FlatList
        data={food}
        renderItem={({ item }) => <Text>{food}</Text>}

      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  row: {
    fontSize: 20,
    padding: 32,
    borderWidth: 1,
    backgroundColor:'#DDDDDD'
  }
})

export default MainList;