import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import AuthStack from './src/navigations/AuthStack'
import Routes from './src/navigations/Routes'


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Routes />
        {/* <Text>App</Text> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})