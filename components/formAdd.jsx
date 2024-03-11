import {Button, TextInput, View} from 'react-native';

function FormAdd() {
  return (
    <View>
      <TextInput
        style={{
          height: 40,
          borderWidth: 1,
          padding: 10,
        }}></TextInput>
      <Button title="ADD" />
    </View>
  );
}

export default FormAdd;
