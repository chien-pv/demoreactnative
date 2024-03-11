import React, {useState, useEffect, useMemo, memo, useCallback} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCircleExclamation} from '@fortawesome/free-solid-svg-icons/faCircleExclamation';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';
import TodoContext from './context';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import FormAdd from './components/formAdd';
import ListTodo from './components/listTodo';

function App() {
  let [todos, setTodos] = useState(['Học Html', 'Học CSS', 'Học JS']);
  function handleDelete(index) {
    todos.splice(index, 1);
    setTodos([...todos]);
  }
  return (
    <TodoContext.Provider
      value={{
        todos,
        handleDelete: handleDelete,
      }}>
      <View>
        <Text
          style={{
            fontSize: 30,
            marginBottom: 10,
          }}>
          Todo APP
        </Text>
        <FormAdd />
        <ListTodo />
      </View>
    </TodoContext.Provider>
  );
}

export default App;
