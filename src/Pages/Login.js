import React, { Component } from "react";
import { View, Text, Button } from "react-native";

export default class Login extends Component {
  render() {
    return (
      <View>
        <Text>Login Page</Text>
        <Button
          onPress={() => this.props.navigation.navigate("Home")}
          title="Go to Home Page"
        />
      </View>
    );
  }
}
