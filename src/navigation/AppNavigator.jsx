// src/navigation/AppNavigator.jsx
// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import HomeScreen from './HomeScreen';
// import RecipeDetails from './RecipeDetails';

// const Drawer = createDrawerNavigator();

// const AppNavigator = () => (
//   <NavigationContainer>
//     <Drawer.Navigator initialRouteName="Home">
//       <Drawer.Screen name="Home" component={HomeScreen} />
//       <Drawer.Screen name="RecipeDetails" component={RecipeDetails} />
//     </Drawer.Navigator>
//   </NavigationContainer>
// );

// export default AppNavigator;

///////////////////////////////////////////////////////////////////////

//AppNavigator.js
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import RecipeDetails from '../components/RecipeDetails';
import Dashboard from '../components/Dashboard'; // Import Dashboard

const Drawer = createDrawerNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="RecipeDetails" component={RecipeDetails} />
      <Drawer.Screen name="Dashboard" component={Dashboard} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default AppNavigator;


//////////////////////////////////////////////////

//AppNavigator.js
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import HomeScreen from '../screens/HomeScreen';
// import RecipeDetails from '../components/RecipeDetails';
// import Dashboard from '../components/Dashboard';
// import SignInScreen from '../screens/SignInScreen'; // Make sure to import your SignInScreen

// const Drawer = createDrawerNavigator();

// const AppNavigator = () => (
//   <NavigationContainer>
//     <Drawer.Navigator initialRouteName="SignIn">
//       <Drawer.Screen name="SignIn" component={SignInScreen} />
//       <Drawer.Screen name="Home" component={HomeScreen} />
//       <Drawer.Screen name="RecipeDetails" component={RecipeDetails} />
//       <Drawer.Screen name="Dashboard" component={Dashboard} />
//       {/* Add additional screens as needed */}
//     </Drawer.Navigator>
//   </NavigationContainer>
// );

// export default AppNavigator;

