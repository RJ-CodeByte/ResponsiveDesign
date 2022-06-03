import { Text, StyleSheet, View, StatusBar } from 'react-native'
import React, { Component } from 'react'
import Routes from './src/navigations/Routes'
import { Store } from './src/Redux/store'
import { Provider } from 'react-redux'
import { notificationListener, requestUserPermission } from "./src/utils/notificationService";


export default class App extends Component {

  componentDidMount() {
    requestUserPermission()
    notificationListener()
  }


  render() {
    return (
      <Provider store={Store}>
        <View style={styles.container}>
          <StatusBar
            animated={true}
            backgroundColor="transparent"
            barStyle={'dark-content'}
            translucent={true}
          />

          <Routes />
          {/* <Text>App</Text> */}
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})