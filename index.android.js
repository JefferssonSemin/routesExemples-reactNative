import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import CenaClientes from './src/components/CenaClientes';
import CenaPrincipal from './src/components/CenaPrincipal';
import CenaContatos from './src/components/CenaContatos';
import CenaEmpresa from './src/components/CenaEmpresa';
import CenaConsultoria from './src/components/CenaConsultoria';


class reactApp5 extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ id: 'a' }}
        renderScene={(route, navigator ) => {
          if (route.id === 'a') {
            return (<CenaPrincipal navigator={navigator}/>);
          }
          if (route.id === 'b') {
            return (<CenaClientes navigator={navigator}/>);
          }
          if (route.id === 'c') {
            return (<CenaContatos navigator={navigator}/>);
          }
          if (route.id === 'd') {
            return (<CenaEmpresa navigator={navigator}/>);
          }
          if (route.id === 'e') {
            return (<CenaConsultoria navigator={navigator}/>);
          }
        }
        }
      />
    );
  }
}

AppRegistry.registerComponent('reactApp5', () => reactApp5);
