import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./src/Redux/store";
import Container from "./src/components/ScreenContainer";
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}
