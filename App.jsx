import {Button, Text, View} from 'react-native';
import TrackPlayer, {State, Event} from 'react-native-track-player';
import {useEffect, useState} from 'react';
import ListTodo from './components/listTodo';
import {Provider} from 'react-redux';
import {store} from './redux/store';
function App() {
  return (
    <Provider store={store}>
      <View>
        <ListTodo />
      </View>
    </Provider>
  );
}

export default App;
