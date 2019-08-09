import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import moment from "moment";
export default class Todo extends Component {
  render() {
    return (
      <View key={this.props.keyval} style={styles.note}>
        <Text style={styles.noteText}>
          {//   dayjs(

          //   ).fromNow()
          moment(this.props.val.date)
            .startOf("hour")
            .fromNow()}
        </Text>
        <Text style={styles.noteText}>{this.props.val.todoTitle}</Text>
        <TouchableOpacity
          onPress={() => this.props.deleteMethod(this.props.val.id)}
          style={styles.noteDelete}
        >
          <Text style={styles.noteDeleteText}>D</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  note: {
    position: "relative",
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: "#ededed"
  },
  noteText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: "#e91e63"
  },
  noteDelete: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2980b9",
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10
  },
  noteDeleteText: {
    color: "white"
  }
});
