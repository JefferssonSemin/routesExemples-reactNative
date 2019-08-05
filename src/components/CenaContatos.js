import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    StatusBar
} from 'react-native';
import BarraTopo from './BarraTopo'

const datalheContatos = require('../../imgs/detalhe_contato.png');

export default class CenaContatos extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#FFF' }}>
                <StatusBar
                    backgroundColor='#61BD8C'
                />
                <BarraTopo voltar navigator={this.props.navigator} corFundo='#61BD8C' />
                <View style={styles.cabecario}>
                    <Image source={datalheContatos} />
                    <Text style={styles.nossosCliente}> Contatos</Text>
                </View>
                <View style={styles.detalhesContato}>
                    <Text style={styles.txtCliente}> Teste sasa sad clientes</Text>
                    <Text style={styles.txtCliente}> Teste sada asdas clientes</Text>
                    <Text style={styles.txtCliente}> Teste as asd clientes</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    nossosCliente: {
        fontSize: 30,
        color: '#61BD8C',
        marginLeft: 10,
        marginTop: 25
    },
    detalhesContato: {
        marginTop: 10,
        padding: 10
    },
    cabecario: {
        flexDirection: 'row',
        marginTop: 20
    },
    txtCliente: {
        fontSize: 18,
    }
});