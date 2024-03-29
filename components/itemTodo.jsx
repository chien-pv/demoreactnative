import {Text, Button, View} from 'react-native';
import {useDispatch} from 'react-redux';
import todoSlice from '../redux/todoSlice';
import {useGetAllAlbumQuery, useGetAlbumByIdQuery} from '../redux/actionRTK';

function ItemTodo({item, index}) {
  const {data, error, isLoading} = useGetAlbumByIdQuery(18);

  // let {deleteTodo} = todoSlice.actions;
  // console.log(todoSlice.actions.deleteTodo(1));
  // let dispatch = useDispatch();
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
        {data.title}
      </Text>
      <Button title="Edit"></Button>
    </View>
  );
}

export default ItemTodo;
