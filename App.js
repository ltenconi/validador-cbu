/**
 * Validador CBU
 *
 * @ltenconi
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button
} from 'react-native';
import {validarLargoCBU,validarBloque1,validarBloque2,validarCBU} from "./validadorCBU"

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {text: '', cbu: '' };
  }
  render() {
    return (
      <View style={styles.container}>
          <TextInput
            placeholder="Ingrese aquí un CBU para validar"
            onChangeText={(text) => {this.textInputOnChangeTextHandler(text)}}
            keyboardType={'numeric'}
            style={styles.input}
            maxLength={22}
            ref={ref => this.textInputRef = ref}
          />
        <Text style={styles.result}>
           {this.state.text}
        </Text>
        {this.state.cbu.length > 0 &&
        <Button onPress={()=>this.buttonOnPressHandler()}
          title="Borrar"
        />
        }
      </View>
    );
  }

  buttonOnPressHandler(){
    this.textInputRef.clear();
    this.setState({text: '', cbu: ''})
  }

  textInputOnChangeTextHandler(cbu) {
    this.setState({ cbu: cbu})
    if(cbu.length == 0) {
      this.setState({text: ''})
    } else if(cbu.length > 0 && cbu.length < 22) {
      this.setState({text: "Resta ingresar " + (22 - cbu.length) + " dígitos"})
    } else if (validarCBU(cbu)) {
      this.setState({text: "CBU válido"})
    } else {
      this.setState({text: "CBU Inválido"})
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue'
  },
  input: {
    width: 270,
    fontSize: 18
  },
  result: {
    textAlign: 'center',
    margin: 10,
    fontSize: 20
  },
});
