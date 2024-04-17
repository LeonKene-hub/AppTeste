import { View } from 'react-native';
import { HeaderMsn } from './src/components/header/header';
import { MsgList } from './src/components/msn/Style';
import { MsgBallon } from './src/components/msn/Msg';

export default function App() {
  const dados = "";

  return (
    <View style={{flex: 1}}>
      <HeaderMsn/>

      <MsgList
        data={dados}
        //keyExtrator={(item) => item.texto}
        renderItem={({item}) => <MsgBallon texto={item} />}
      />
    </View>
  );
}
