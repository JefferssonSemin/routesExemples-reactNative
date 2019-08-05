import React, { Component } from 'react';
import {
    View,
    StatusBar,
    Image,
    StyleSheet,
    TouchableHighlight
} from 'react-native';
import BarraTopo from './BarraTopo'

const logo = require('../../imgs/logo.png');
const menuCliente = require('../../imgs/menu_cliente.png');
const menuContato = require('../../imgs/menu_contato.png');
const menuEmpresa = require('../../imgs/menu_empresa.png');
const menuServico = require('../../imgs/menu_servico.png');

export default class CenaPrincipal extends Component {
    render() {
        return (
            <View>
                <StatusBar backgroundColor='#CCC' />
                <BarraTopo />
                <View style={styles.logo}>
                    <Image source={logo} />
                </View>
                <View style={styles.menu}>
                    <View style={styles.card}>
                        <TouchableHighlight
                            underlayColor={'#B9C941'}
                            activeOpacity={0.3}
                            onPress={() => {
                                this.props.navigator.push({ id: 'b' });
                            }}>
                            <Image style={styles.cardEsp} source={menuCliente} />
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor={'#61BD8C'}
                            activeOpacity={0.3}
                            onPress={() => {
                                this.props.navigator.push({ id: 'c' });
                            }}>
                            <Image style={styles.cardEsp} source={menuContato} />
                        </TouchableHighlight>

                    </View>
                    <View style={styles.card}>
                        <TouchableHighlight
                            underlayColor={'#EC7148'}
                            activeOpacity={0.3}
                            onPress={() => {
                                this.props.navigator.push({ id: 'd' });
                            }}>
                            <Image style={styles.cardEsp} source={menuEmpresa} />
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor={'#19d1c8'}
                            activeOpacity={0.3}
                            onPress={() => {
                                this.props.navigator.push({ id: 'e' });
                            }}>
                            <Image style={styles.cardEsp} source={menuServico} />
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    logo: {
        marginTop: 30,
        alignItems: 'center'
    },
    menu: {
        marginTop: 30,
        alignItems: 'center'
    },
    card: {
        flexDirection: 'row'
    },
    cardEsp: {
        margin: 15
    }
});