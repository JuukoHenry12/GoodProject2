import React, { Component } from 'react'
import { View, Text,StyleSheet } from 'react-native'
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text> Search loadin ..</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  }
})
export default Search;