import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    StatusBar
} from 'react-native';
import BarraTopo from './BarraTopo'

const imgEmpresa = require('../../imgs/detalhe_empresa.png');

export default class CenaEmpresa extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#FFF' }}>
                <StatusBar
                    backgroundColor='#EC7148'
                />
                <BarraTopo voltar navigator={this.props.navigator} corFundo='#EC7148' />

                <View style={styles.cabecario}>
                    <Image source={imgEmpresa} />
                    <Text style={styles.nossosCliente}> A Empresa</Text>
                </View>
                <View style={styles.detalhesCliente}>
                    <Text style={styles.txtCliente}> Teste clientes teste Teste clientes teste Teste clientes teste </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    nossosCliente: {
        fontSize: 30,
        color: '#EC7148',
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