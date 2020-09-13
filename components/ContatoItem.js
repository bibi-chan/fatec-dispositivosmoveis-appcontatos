import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const ContatoItem = (props) => {
  return (
    <TouchableOpacity onPress={() => props.onRemoverContato(props.i)}>
      <View style={estilos.itemNaLista}>
        <Text style={estilos.texto}>ID: {props.i}</Text>
        <Text style={estilos.texto}>Nome: {props.contato.nome}</Text>
        <Text style={estilos.texto}>Telefone: {props.contato.telefone}</Text>
      </View>
    </TouchableOpacity>
  );
};

const estilos = StyleSheet.create({
  itemNaLista: {
    padding: 12,
    backgroundColor: '#ABE0E8',
    borderColor: '#BD946A',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8
  },
  texto: {
    color: 'white',
  }
});

export default ContatoItem;