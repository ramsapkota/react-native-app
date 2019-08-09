import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";
import Main from "../components/Main";

class Home extends Component {
  render() {
    return (
      <View>
        <Button
          title="Todos"
          onPress={() => this.props.navigation.navigate("Todos")}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});
export default connect(
  mapStateToProps,
  null
)(Home);
