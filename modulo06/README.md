# Primeiro projeto React Native

- Preparação de ambiente, para desenvolver conectando um celular Android por USB
- Criação de projeto usando react native 6.0, para Android somente
- Adicionar eslint, prettier
- Reactotron para debug
- Rotas de navegação
- Barra de status
- Styled components

## Windows e WSL

Como o WSL ainda não oferece suporte para ReactNative, foi necessário instalar e rodar tudo pelo windows e não mais pelo WSL.

É possível reabrir o projeto pelo VSCode sem conectar pelo WSL, desde que o projeto esteja em diretório visível pelo windows.

## Preparação de ambiente

- Instalar o chocolatey
- Instalar o Android SDK command-line tools

### Chocolatey e dependências

Instalar abrindo o commmand prompt as administrator, e teste a instalação:
```bash
@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"

choco
```

Instalar o python2:
```bash
choco install -y python2
```

Obs: outras dependências são node e jdk 8
```bash
choco install -y nodejs.install jdk8
```

Instalar a interface por linha de comando do react native, e teste a instalação:
```bash
yarn global add react-native-cli

react-native -h
```

### Android SDK
Realize o download das ferramentas de linha de comando em https://developer.android.com/studio/#downloads

Crie uma pasta e descompacte os arquivos do SDK:
 ```bash
mkdir c:\android\sdk
```

Adicione a variável de usuário ```ANDROID_HOME``` com o caminho para esse diretório.

Edite a variável de usuário ```PATH``` e inclua os caminhos ```%ANDROID_HOME%\platform-toos``` e ```%ANDROID_HOME%\tools```.

Instalar abrindo o commmand prompt as administrator as outras ferramentas, a partir do subdiretório tools\bin, aceitando as licenças:
```bash
c:
cd \android\sdk\tools\bin
sdkmanager  "platform-tools" "platforms;android-28" "build-tools;28.0.3"
```

## Criação de projeto
Criar projeto conforme descrito em https://github.com/react-native-community/cli
```bash
npx react-native init modulo06
```

Conectar o dispositivo e verificar se é reconhecido pelo sistema:
```bash
adb devices
```

Construir o app e instalar no dispositivo conectado (abre terminal com Metro Bundler, que não deve ser fechado). O Metro Bundler converte e empacota o código do app em um bundle. 
```bash
cd modulo06

react-native run-android
```

Após esta primeira vez, não é preciso construir o app novamente. É possível somente rodar o Metro Bundler e conectar ao dispositivo:
```bash
react-native start
```

Para atualizar as dependências do app, é necessário atualizar totamente o app e iniciar o Metro Bundler com:
```bash
react-native start --reset-cache
```


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

## Reactotron
Para debugar sem ter que abrir um novo console e ficar acompanhando o console do browser.

Instalar:
 - Siga o item "Quick Start for React Native":
https://github.com/infinitered/reactotron
 - Na página de releases, realizar download e instalar a aplicação

Adicionar ao projeto:
```bash
yarn add reactotron-react-native
```

Adicione o arquivo ```ReactotronConfig.js``` com a configuração conforme a documentação.

Para garantir que o dispositivo android consiga conectar ao Reactotron, é necessário executar o seguinte para redirecionar as portas:
```bash
adb reverse tcp:9090 tcp:9090
```

## Rotas
Rotas de navegação entre páginas:
```bash
yarn add react-navigation react-native-gesture-handler react-native-reanimated
yarn add react-navigation-stack
yarn add react-navigation-tabs
yarn add react-navigation-drawer
```

Para Android, um passo adicional é necessário, vide https://kmagiera.github.io/react-native-gesture-handler/docs/getting-started.html

# Styled components
Permite definir estilo em formato CSS para cada componente, ao contrário da definição de estilos no formato camelCase, além de CSS prover mais opções de definições (exemplo: padding).

```bash
yarn add styled-components
```
Snippet "styled-rn".

Define o CSS para cada componente, com várias diferenças do uso para ReactJS:
- não permite definir estilos aninhados, deve ser um para cada componente
- não permite definir estilos globais

