import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCircleExclamation} from '@fortawesome/free-solid-svg-icons/faCircleExclamation';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View as ViewRN,
  TextInput,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function App() {
  return (
    <View bgColor="#f5f5dc">
      <HeaderCustome />
      <InputCustome title="Tên" placeholder="Nhập Tên" />
      <InputCustome title="Email" placeholder="Nhập Email" />
      <InputCustome title="Địa chỉ" placeholder="Nhập Địa Chỉ" />
      <InputCustomeErr title="Địa chỉ" placeholder="Nhập Địa Chỉ" />
      <SectionCustome title={'Tên Sự Kiện'} name={'Việt Nam Vs Thái Lan'} />
      <SectionCustome title={'Ngày Diễn Ra'} name={'20/10/2023'} />
      <SectionCustome title={'Địa Điểm'} name={'Sân Mỹ Đình'} />
    </View>
  );
}

function SectionCustome({title, name}) {
  return (
    <View pad={10}>
      <Text>{title}</Text>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 16,
        }}>
        {name}
      </Text>
    </View>
  );
}

function View({children, pad, bgColor}) {
  return (
    <ViewRN
      style={{
        padding: pad ? pad : 30,
        backgroundColor: bgColor ? bgColor : '#f0ffff',
      }}>
      {children}
    </ViewRN>
  );
}
function InputCustome({title, placeholder}) {
  return (
    <ViewRN>
      <Text style={style.text}>{title} *</Text>
      <TextInput placeholder={placeholder} style={style.input} />
    </ViewRN>
  );
}

function HeaderCustome() {
  return (
    <ViewRN style={headerStyle.view}>
      <FontAwesomeIcon style={headerStyle.icon} icon={faChevronLeft} />
      <Text>Home</Text>
      <FontAwesomeIcon style={headerStyle.icon} icon={faBars} />
    </ViewRN>
  );
}

function InputCustomeErr({title, placeholder}) {
  return (
    <ViewRN>
      <Text style={style.text}>{title} *</Text>
      <ViewRN style={style.view}>
        <TextInput
          placeholder={placeholder}
          style={{...style.input, ...style.inputErr}}
        />
        <FontAwesomeIcon style={style.icon} icon={faCircleExclamation} />
      </ViewRN>
      <Text style={style.textErr}>errors</Text>
    </ViewRN>
  );
}

const headerStyle = {
  view: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  icon: {},
  text: {},
};
const style = {
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '90%',
  },
  inputErr: {
    borderColor: 'red',
  },

  text: {
    paddingLeft: 10,
    paddingTop: 10,
  },
  textErr: {
    paddingLeft: 10,
    color: 'red',
  },
  icon: {
    color: 'red',
    paddingTop: 65,
    marginLeft: -35,
  },
  view: {
    flexDirection: 'row',
  },
};

export default App;
