import {Button, TextInput, View, Text} from 'react-native';
import {useContext, useEffect} from 'react';
import ItemTodo from './itemTodo';
import TodoContext from '../context';
import {fetchListTodos} from '../redux/todoSlice';
import {fetchDataTodo} from '../redux/thunkAction';
import {useSelector, useDispatch} from 'react-redux';
function ListTodo() {
  let dispatch = useDispatch();
  // dispatch(fetchListTodo());
  let datas = useSelector(state => state.todos);
  let todos = datas.values;

  console.log(datas);
  useEffect(() => {
    dispatch(fetchListTodos());
  }, []);
  let data = todos.map((item, index) => {
    return <ItemTodo key={index} item={item} index={index} />;
  });
  return (
    <View>
      {datas.isLoading ? <Text>isLoading ... </Text> : ''}
      {data}
    </View>
  );
}

export default ListTodo;
