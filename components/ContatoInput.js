import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  Image,
  StyleSheet
} from 'react-native';

const ContatoInput = (props) => {

  const [contato, setContato] = useState({ nome: '', telefone: '' });
  const capturarNome = (nome) => {
    let c = { ...contato, nome }
    setContato(c);
  }
  const capturarTelefone = (telefone) => {
    let c = { ...contato, telefone }
    setContato(c);
  }
  return (
    <View style={estilos.contatoView}>
        <Image
        style={estilos.tinyLogo}
        source={{
          uri: 'https://img.pngio.com/hd-sanrio-png-cinnamoroll-transparent-sanrio-transparent-png-cinnamoroll-transparent-634_409.png',
        }}
      />
      <TextInput 
        placeholder="Nome"
        style={estilos.contatoTextInput}
        onChangeText={capturarNome}
        value={contato.nome}        
      />
       <TextInput 
        placeholder="Telefone"
        style={estilos.contatoTextInput}
        onChangeText={capturarTelefone}
        value={contato.telefone}        
      />
      <Button 
        style={estilos.button}
        title="Adicionar Contato"
        color= "#FFC0CB"
        onPress={() => props.onAdicionarContato(contato)}
      />
    </View>
  );
};

const estilos = StyleSheet.create({
  contatoView: {
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contatoTextInput: {
    borderBottomColor: '#BD946A',
    borderBottomWidth: 1,
    padding: 8,
    marginBottom: 8,
    textAlign: 'center',
    color: '#BD946A',
  },
  tinyLogo: {
    width: 155,
    height: 100,
    marginBottom: 10,
  }
});



export default ContatoInput;