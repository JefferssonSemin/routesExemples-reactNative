import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    StatusBar
} from 'react-native';
import BarraTopo from './BarraTopo'

const imgConsultoria = require('../../imgs/detalhe_servico.png');

export default class CenaConsultoria extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#FFF' }}>
                <StatusBar
                    backgroundColor='#19d1c8'
                />
                <BarraTopo voltar navigator={this.props.navigator}
                    corFundo='#19d1c8'
                />

                <View style={styles.cabecario}>
                    <Image source={imgConsultoria} />
                    <Text style={styles.nossosCliente}> Nossos Serviços</Text>
                </View>
                <View style={styles.detalhesCliente}>
                    <Text style={styles.txtCliente}>
                        {/* <li>
                            teste 
                        </li> */}
                        testee
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    nossosCliente: {
        fontSize: 30,
        color: '#19d1c8',
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