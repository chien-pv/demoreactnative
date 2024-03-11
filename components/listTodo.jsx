import {Button, TextInput, View, Text} from 'react-native';
import {useContext} from 'react';
import ItemTodo from './itemTodo';
import TodoContext from '../context';

function ListTodo() {
  let {todos} = useContext(TodoContext);

  let data = todos.map((item, index) => {
    return <ItemTodo item={item} index={index} />;
  });
  return <View>{data}</View>;
}

export default ListTodo;
