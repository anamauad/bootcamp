import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure() // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .connect();

  console.tron = tron;

  tron.clear();

  console.tron.log('console.tron configurado para Reactotron');
}
