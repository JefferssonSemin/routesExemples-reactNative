import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    StatusBar
} from 'react-native';
import BarraTopo from './BarraTopo'

const cliente1 = require('../../imgs/cliente1.png');
const cliente2 = require('../../imgs/cliente2.png');
const datelheCliente = require('../../imgs/detalhe_cliente.png');

export default class CenaClientes extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#FFF' }}>
                <StatusBar
                    backgroundColor='#B9C941'
                />
                <BarraTopo voltar navigator={this.props.navigator} corFundo='#B9C941' />
                <View style={styles.cabecario}>
                    <Image source={datelheCliente} />
                    <Text style={styles.nossosCliente}> Nossos clientes</Text>
                </View>
                <View style={styles.detalhesCliente}>
                    <Image source={cliente1} />
                    <Text style={styles.txtCliente}> Teste clientes</Text>
                </View>
                <View style={styles.detalhesCliente}>
                    <Image source={cliente2} />
                    <Text style={styles.txtCliente}> Teste clientes</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    nossosCliente: {
        fontSize: 30,
        color: '#B9C941',
        marginLeft: 10,
        marginTop: 25
    },
    detalhesCliente: {
        marginTop: 10,
        padding: 20
    },
    cabecario: {
        flexDirection: 'row',
        marginTop: 20
    },
    txtCliente: {
        fontSize: 15,
        marginLeft: 20
    }
});