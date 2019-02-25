import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';
import axios from 'axios';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Find My Coords?'
});

export default class App extends Component {
  state = {
    location: null
  };

  findCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = JSON.stringify(position)

        //this.setState({ location});
        axios.post(
          'http://10.0.2.2:3000/api/v1/test',
          { location }
        )
          .then(res => {
            const m = JSON.stringify(res.data)
            this.setState({ location: m })
          }
          )
          .catch(err => {
            //Alert.alert(err)
          }
          )
      },
      (error) => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 30000, maximumAge: 5000 }
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.findCoordinates}>
          <Text style={styles.instructions}>
            Location : {this.state.location}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    backgroundColor: 'red',
    fontSize: 30,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
