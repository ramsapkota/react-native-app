import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity
} from "react-native";
import Todo from "./Todos/Todo";
import shortid from "shortid";
import findIndex from "lodash/findIndex";
import { connect } from "react-redux";
import { setTodo, removeTodo } from "../Redux/Actions/TodoAction";
class Main extends Component {
  state = {
    todos: [],
    noteText: ""
  };

  deleteNote = _id => {
    alert(_id);

    this.props.removeTodo(_id);
  };

  handleChange = todo => {
    this.setState({
      noteText: todo
    });
  };

  handleTodo = () => {
    if (!this.state.noteText.length) {
      alert("Please add todo title!");
      return;
    }
    this.props.setTodo(this.state.noteText);
    this.setState({ noteText: "" });
  };
  render() {
    const { todos } = this.props.todos;

    let _todos =
      todos && todos.length ? (
        todos.map((val, key) => {
          console.log("val", val);
          console.log("id", val.id);
          return (
            <Todo
              key={key}
              keyval={key}
              val={val}
              deleteMethod={this.deleteNote}
            />
          );
        })
      ) : (
        <View style={styles.note}>
          <Text style={styles.noteText}>No Todos found</Text>
        </View>
      );
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>--Todo List--</Text>
        </View>
        <ScrollView style={styles.scrollContainer}>{_todos}</ScrollView>
        <View style={styles.footer}>
          <TextInput
            style={styles.textInput}
            onChangeText={this.handleChange}
            placeholder=">Add Note"
            placeholderTextColor="white"
            value={this.state.noteText}
            underlineColorAndroid="transparent"
          />
        </View>
        <TouchableOpacity style={styles.addButton} onPress={this.handleTodo}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: "#e91e63",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 18,
    borderBottomColor: "#ddd"
  },
  headerText: {
    color: "white",
    fontSize: 18,
    padding: 26
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10
  },
  textInput: {
    alignSelf: "stretch",
    color: "#fff",
    padding: 20,
    backgroundColor: "#252525",
    borderTopWidth: 3,
    borderTopColor: "#ededed"
  },
  addButton: {
    position: "absolute",
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: "#e91e63",
    width: 90,
    height: 90,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8
  },
  addButtonText: {
    color: "#fff",
    fontSize: 24
  },
  note: {
    position: "relative",
    padding: 20,
    borderBottomWidth: 2,
    alignItems: "center",
    borderBottomColor: "#ededed"
  },
  noteText: {
    backgroundColor: "#34495e",
    width: "90%",
    textAlign: "center",
    padding: 20,
    color: "#ecf0f1"
  }
});

const mapStaesToProps = state => ({
  todos: state.todos
});
export default connect(
  mapStaesToProps,
  { setTodo, removeTodo }
)(Main);
