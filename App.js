import 'react-native-gesture-handler';
import * as React from 'react';
import {
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator} from '@react-navigation/drawer';
import Home from './components/Home'
import Choice from './components/Choice';
import Result from './components/Result'
import Game from './components/Game';
import Level from './components/Level';
import DrawerContent from './components/Menu';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const NavigationDrawerStructure = (props)=> {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={()=> toggleDrawer()}>
        <Image
          source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png'}}
          style={{
            width: 25,
            height: 25,
            marginLeft: 5
          }}
        />
      </TouchableOpacity>
    </View>
  );
}


function Menu({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Menu"
      screenOptions={{
        headerLeft: ()=>
          <NavigationDrawerStructure
            navigationProps={navigation}
          />,
        headerStyle: {
          backgroundColor: '#AFD471', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        }
      }}>
      <Stack.Screen
    name='Home'
    component={Home}
    options={{
      title: 'MENTIS',
    }}
    />
      <Stack.Screen
        name="Choice"
        component={Choice}
        options={{
          title: 'MENTIS', //Set Header Title
          
        }}/>
      <Stack.Screen
    name='Level'
    component={Level}
    options={{
      title: 'MENTIS',
    }}
    />
      <Stack.Screen
    name='Game'
    component={Game}
    options={{
      title: 'MENTIS',
    }}
    />

  <Stack.Screen
    name='Result'
    component={Result}
    options={{
      title: 'MENTIS',
    }}
    />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
        drawerContentOptions={{
          activeTintColor: '#AFD471',
          itemStyle: { marginVertical: 5 },
        }}>
        <Drawer.Screen name={'Home'} component={Menu} />
      </Drawer.Navigator>
      
    </NavigationContainer>
  );
}

export default App;