import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from './screens/stack/Home';
import Board from './screens/stack/Board';
import LogIn from './screens/stack/LogIn';
import SignIn from './screens/stack/SignIn';
import Menu from './screens/stack/Menu';
import Details from './component/Details';
import Orders from './screens/drawer/Orders';
import CustomDraw from './component/CustomDraw';
import Place from './screens/stack/Place';
import Confirm from './screens/stack/Confirm';
import Final from './screens/stack/Final';

const NavOptionHandler = () => ({headerShown: false});

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Final" component={Final} options={NavOptionHandler} />
      <Stack.Screen name="Home" component={Home} options={NavOptionHandler} />
      <Stack.Screen name="Board" component={Board} options={NavOptionHandler} />
      <Stack.Screen name="LogIn" component={LogIn} options={NavOptionHandler} />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={NavOptionHandler}
      />
      <Stack.Screen name="Menu" component={Menu} options={NavOptionHandler} />
      <Stack.Screen
        name="Details"
        component={Details}
        options={NavOptionHandler}
      />
      <Stack.Screen name="Place" component={Place} options={NavOptionHandler} />
      <Stack.Screen
        name="Confirm"
        component={Confirm}
        options={NavOptionHandler}
      />
    </Stack.Navigator>
  );
}
function MyDraw() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDraw {...props} />}>
      <Drawer.Screen name="Menu" component={Menu} />
      <Drawer.Screen name="Orders" component={Orders} />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Auth"
          component={MyStack}
          options={NavOptionHandler}
        />
        <Stack.Screen
          name="MainHome"
          component={MyDraw}
          options={NavOptionHandler}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
