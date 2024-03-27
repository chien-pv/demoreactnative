import {Text, Button, View} from 'react-native';
import {useDispatch} from 'react-redux';
import todoSlice from '../redux/todoSlice';
function ItemTodo({item, index}) {
  let {deleteTodo} = todoSlice.actions;
  // console.log(todoSlice.actions.deleteTodo(1));
  let dispatch = useDispatch();
  return (
    <View
      style={{
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      }}>
      <Text
        style={{
          padding: 7,
        }}>
        {item.title}
      </Text>
      <Button title="Edit"></Button>
      <Button
        onPress={() => {
          dispatch(deleteTodo(index));
        }}
        title="Delete"></Button>
    </View>
  );
}

export default ItemTodo;
