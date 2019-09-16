import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
// import { createDrawerNavigator } from 'react-navigation-drawer';

import Main from './pages/Main';
import User from './pages/User';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      User,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: 'false',
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        headerTintColor: '#fff',
      },
    }
  )
);

export default Routes;

// createStackNavigator: uma pilha de navegação, volta para a página anterior
// createSwitchNavigator: troca a navegação, a página anterior é destruída
// createBottomTabNavigator: navegação por abas na parte inferior
// createMaterialTopTabNavigator: navegação por abas na parte superior,
// fem outro estilo
// createDrawerNavigator: navegação por menu escondido na esquerda, que precisa
// ser aberto ao arrastar o dedo da esquerda para a direita
