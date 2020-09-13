import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import ContatoItem from './components/ContatoItem';
import ContatoInput from './components/ContatoInput';

/* 
Crie uma aplicação React Native com Expo que permita o cadastro e listagem de
contatos. Contatos possuem nome e telefone. Ela precisará de dois campos para
inserção de dados e um botão para fazer a inserção. Use um FlatList, como visto em
aula, para exibir os dados de contato. Garanta que cada contato possui identificadaor
único na lista. A lista de identificadores deve começar de 10 e somente números pares
positivos podem ser utilizados como identificadores. Seja criativo, use “CSS” para
descrever como se dá a exibição de cada item na lista. 
*/

export default function App() {
 
  const[contatos, setContatos] = useState ([]);
  const[contadorContatos, setContadorContatos] = useState(10);


  const adicionarContato = (contato) => {
    if (contato !== undefined && contato.nome !== '' && contato.telefone !== '') {
      setContatos(() => {
        setContadorContatos(contadorContatos + 2)
        return [...contatos, { value: contato, key: contadorContatos.toString() }]
      })
    }
  }

  const removerContato = (i) =>{
    setContatos(contatos => {
      return contatos.filter((contato) => {
         return contato.key !== i
      })
    });
  }

  return (
    <View style={estilos.telaPrincipalView}>
      <ContatoInput onAdicionarContato={adicionarContato}/>
        <FlatList 
          data={contatos}
          renderItem={
            (contato) => (
              <ContatoItem
                i={contato.item.key} 
                contato={contato.item.value} 
                onRemoverContato={removerContato}
              />
            )
          }
        />      

    </View>
  );
}

const estilos = StyleSheet.create({
  entradaView: {
    marginBottom: 8
  },
  itemNaListaView: {
    padding: 12,
    backgroundColor: '#ABE0E8',
    borderColor: '#BD946A',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8
  },

  telaPrincipalView: {
    padding: 50
  },
  lembreteTextInput: {
    borderBottomColor: '#BD946A', 
    borderBottomWidth: 1, 
    marginBottom: 4, 
    padding: 12,
    textAlign: 'center'
  }
})
