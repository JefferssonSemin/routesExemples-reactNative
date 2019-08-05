import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

const imgVoltar = require('../../imgs/btn_voltar.png');

export default class BarraTopo extends Component {
  render() {
    if (this.props.voltar) {
      return (
        <View style={[styles.topoEstilo, { backgroundColor: this.props.corFundo }]}>
          <TouchableHighlight
            underlayColor={this.props.corFundo}
            activeOpacity={0.3}
            onPress={() => {
              this.props.navigator.pop();
            }} >
            <Image source={imgVoltar} />
          </TouchableHighlight>
          <Text style={styles.txtTitulo}>Terceirize</Text>
        </View>
      );
    }
    return (
      <View style={styles.topoEstilo}>
        <Text style={styles.txtTitulo}>Terceirize</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topoEstilo: {
    backgroundColor: '#CCC',
    padding: 10,
    height: 60,
    flexDirection: 'row'
  },
  txtTitulo: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    color: '#000'
  }
});

AppRegistry.registerComponent('reactApp5', () => reactApp5);
