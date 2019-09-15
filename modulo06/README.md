# Primeiro projeto React Native

- Projeto criado usando react native 6.0, para Android somente
- Debug em celular Android conectado por USB
- Adicionado eslint, prettier

## Windows e WSL

Como o WSL ainda não oferece suporte para ReactNative, foi necessário instalar e rodar tudo pelo windows e não mais pelo WSL.

É possível reabrir o projeto pelo VSCode sem conectar pelo WSL, desde que o projeto esteja em diretório visível pelo windows.

## Adicionando eslint

Remover o arquivo de configuração pré-existente ```.eslintrc.js```

```bash
yarn add eslint -D
yarn eslint --init
```

Configuração do eslint:

- How would you like to use ESLint? To check syntax, find problems, and enforce code style
- What type of modules does your project use? JavaScript modules (import/export)
- Which framework does your project use? React
- Does your project use TypeScript? No
- Where does your code run?
- How would you like to define a style for your project? Use a popular style guide
- Which style guide do you want to follow? Airbnb (https://github.com/airbnb/javascript)
- What format do you want your config file to be in? JavaScript

Como ocorreu o erro `npm ERR! Maximum call stack size exceeded`, foi necessário instalar manualmente:

```
npm install eslint-plugin-react@^7.14.3
npm install eslint-config-airbnb@latest
npm install eslint@^5.16.0
npm install eslint-plugin-import@^2.18.2
npm install eslint-plugin-jsx-a11y@^6.2.3
npm install eslint-plugin-react-hooks@^1.7.0
```

Como os pacotes foram instalados pelo npm, o arquivo ```package.lock``` deve ser removido e dever ser executado o comando
```
yarn
```

## Adicionando prettier
```
yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D
```
