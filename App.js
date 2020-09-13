import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import ContatoItem from './components/ContatoItem';
import ContatoInput from './components/ContatoInput';

/* 
1. Refatore a sua aplicação. Crie, ao menos, dois componentes que serão utilizados
pelo componente principal.
2. Torne os itens da lista clicáveis.
3. Apague um contato da lista quando um toque longo (diferente da aula, em que
decidimos apagar com um toque simples) sobre ele acontecer. Descubra a propriedade
de TouchableOpacity que viabiliza identificar esse evento. 
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
