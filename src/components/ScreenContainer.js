import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Home from "../Pages/Home";
import Todos from "../components/Main";

const RootStack = createStackNavigator(
  {
    Login: {
      screen: Login
    },
    SignUp: {
      screen: SignUp
    },
    Home: {
      screen: Home
    },
    Todos: {
      screen: Todos
    }
  },
  {
    initialRouteName: "Home"
  }
);

const Container = createAppContainer(RootStack);

export default Container;
