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
import CenaPrincipalRouterFlux from './src/components/CenaPrincipalRouterFlux';


class reactApp5 extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ id: 'routerFlux' }}
        renderScene={(route, navigator) => {

          switch ('routerFlux') {

            case ('a'):
              return (<CenaPrincipal navigator={navigator} />);
            case ('b'):
              return (<CenaClientes navigator={navigator} />);
            case ('c'):
              return (<CenaContatos navigator={navigator} />);
            case ('d'):
              return (<CenaEmpresa navigator={navigator} />);
            case ('e'):
              return (<CenaConsultoria navigator={navigator} />);
            case ('routerFlux'):
              return (<CenaPrincipalRouterFlux />);
          }
        }
        }
      />
    );
  }
}

AppRegistry.registerComponent('reactApp5', () => reactApp5);
