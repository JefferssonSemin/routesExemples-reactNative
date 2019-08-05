import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
} from 'react-native';

const logo = require('../../imgs_flux/logo.png');
const btnJogar = require('../../imgs_flux/botao_jogar.png');
const outrosJogos = require('../../imgs_flux/outros_jogos.png');
const sobreJogos = require('../../imgs_flux/sobre_jogo.png');

export default class CenaPrincipalRouterFlux extends Component {
    render() {
        return (
            <View style={styles.CenaPrincipal}>
                <View>
                </View>
                <View style={styles.apresentacaoJogos}>
                    <Image source={logo} />
                    <Image source={btnJogar} />
                </View>
                <View style={styles.rodape}>
                    <Image source={outrosJogos} />
                    <Image source={sobreJogos} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    CenaPrincipal: {
        flex: 1,
        backgroundColor: '#61bd86'
    },
    apresentacaoJogos: {
        flex: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    rodape: {
        flexDirection: 'row',
        flex:1,
        justifyContent:'space-between'
    }
});