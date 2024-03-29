import {Button, TextInput, View, Text} from 'react-native';
import {useContext, useEffect} from 'react';
import ItemTodo from './itemTodo';
import TodoContext from '../context';
import {fetchListTodos} from '../redux/todoSlice';
import {fetchDataTodo} from '../redux/thunkAction';
import {useSelector, useDispatch} from 'react-redux';
import {useGetAllAlbumQuery, useGetAlbumByIdQuery} from '../redux/actionRTK';
import NetworkLogger from 'react-native-network-logger';

function ListTodo() {
  let dispatch = useDispatch();
  // dispatch(fetchListTodo());
  // const {data, error, isLoading} = useGetAllAlbumQuery();
  // const {data, error, isLoading} = useGetAlbumByIdQuery(18);
  // console.log(data);

  // let datas = useSelector(state => state.todos);
  // let todos = datas.values;

  // console.log(datas);
  useEffect(() => {}, []);
  // let ab = data.map((item, index) => {
  //   return <ItemTodo key={index} item={item} index={index} />;
  // });
  return (
    <View>
      <ItemTodo />
      <ItemTodo />
      <ItemTodo />
      <ItemTodo />

      <NetworkLogger />
    </View>
  );
}

export default ListTodo;
