import { HeaderMsn } from './src/components/header/header';
import { InputMsg } from './src/components/input/Input';
import { MsgList } from './src/components/msn/Style';
import { MsgBallon } from './src/components/msn/Msg';
import { View } from 'react-native';
import { useState } from 'react';
import api from './src/service/service';

export default function App() {
  const [dadosFixos, setDadosFixos] = useState([
    { id: 1, texto: "aaaaa", lado: "esquerdo" },
    { id: 2, texto: "bbbbbb" },
    { id: 3, texto: "ccccccc", lado: "esquerdo" }
  ])

  const [value, setValue] = useState("")
  const [tipo, setTipo] = useState()

  async function TextToSpeech() {
    //console.log("entrou");
    try {
      const response = await api.post(`http://localhost:5112/api/texttospeech`, {text: value})
      console.log(response.status);
    } catch (error) {
      console.log("erro na requisicao de texto para fala: " + error );
    }
  }
  
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <HeaderMsn />

      <MsgList
        data={dadosFixos}
        keyExtrator={(item) => item.id}
        renderItem={({ item }) => <MsgBallon texto={item.texto} lado={item.lado} />}
      />

      <InputMsg
        value={value}
        tipo={value != "" ? "digitar" : "audio"}
        onChangeText={(newValue) => setValue(newValue)}
        onPress={() => {TextToSpeech()}}
      />
    </View>
  );
}
