//App.jsX
// import React from 'react';
// import {KeyboardAvoidingView, StatusBar, SafeAreaView} from 'react-native';
// import AppNavigator from './src/navigation/AppNavigator';
// import {Provider} from 'react-redux';
// import {store} from './src/redux/store'; 
// const App = () => {
//   return (
//     <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
//       <StatusBar barStyle="dark-content" />
//       <AppNavigator />
//     </KeyboardAvoidingView>
//   );
// };

// export default App;

import React from 'react';
import {KeyboardAvoidingView, StatusBar} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const App = () => {
  return (

      <SafeAreaProvider>
        <SafeAreaView style={{flex: 1}}>
          <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
            <StatusBar barStyle="dark-content" />
            <AppNavigator />
          </KeyboardAvoidingView>
        </SafeAreaView>
      </SafeAreaProvider>
   
  );
};

export default App;




// App.js


// const App = () => {
//   return (
//     <Provider store={store}>
//       <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
//         <StatusBar barStyle="dark-content" />
//         <AppNavigator />
//       </KeyboardAvoidingView>
//     </Provider>
//   );
// };

// export default App;
