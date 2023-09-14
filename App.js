import react from 'react';
import {Text, View, TextInput, Button} from 'react-native'
import axios from 'axios';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {useState} from 'react'

const Tab = createBottomTabNavigator();


const Cadastrar = (props) => {
  const [nome, setNome] = useState("");
  const [email,setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  return(
    <View style={{flex: 1}}>
      <Text>Detalhes do Contato</Text>
      <Text>Nome Completo</Text>
      <TextInput placeholder="Nome Completo..." value={nome} onChangeText={setNome}/>
      <Text>Email</Text>
      <TextInput placeholder="Email..." value={email} onChangeText={setEmail}/>
      <Text>Telefone</Text>
      <TextInput placeholder="Telefone..." value={telefone} onChangeText={setTelefone}/>
      <Button title="Gravar" onPress={()=>{
        const obj = {nome, email, telefone}
        props.onSalvar(obj);
      }}/>
    </View>
  )
}


const Lista = (props) => {
  return(
    <View style={{flex: 1}}>
      <Text>Lista de Contatos</Text>
      {props.lista.map((item, indicie)=>
        <View style={{margin: 5, borderWidth: 1, borderRadius: 5}}>
          <Text>{item.nome}</Text>
          <Text>{item.email}</Text>
          <Text>{item.telefone}</Text>
        </View>
      )}
    </View>
  )
}

const Principal = () =>{
  const [lista, setLista]=useState([]);

  const salvar = (objContato) => {
    setLista([...lista, objContato]);
  }


  return(
    <NavigationContainer>
      <View style={{flex: 1}}>
        <Text>Tela Principal</Text>
        <Tab.Navigator>
          <Tab.Screen name="Cadastrar">
            {(tabProps)=><Cadastrar {...tabProps} onSalvar={salvar}/>}
          </Tab.Screen>
          <Tab.Screen name="Listar">
            {(tabProps)=> <Lista {...tabProps} lista={lista}/>}
          </Tab.Screen>
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  )
}


const Login = () => {
  return (
    <View style={{flex: 1}}>
      <Text>Email</Text>
      <TextInput/>
      <Text>Senha</Text>
      <TextInput/>
      <Button title='Logar'/>
    </View>
  )
}

export default function App() {
  return (
    <View style={{flex: 1,}}>
      <Text>Agenda de Contatos</Text>
      <Principal/>
    </View>
  );
}