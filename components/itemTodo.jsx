import {Text, Button, View} from 'react-native';
import TodoContext from '../context';
import {useContext} from 'react';

function ItemTodo({item, index}) {
  let {handleDelete} = useContext(TodoContext);

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
        {item}
      </Text>
      <Button title="Edit"></Button>
      <Button
        onPress={() => {
          handleDelete(index);
        }}
        title="Delete"></Button>
    </View>
  );
}

export default ItemTodo;
