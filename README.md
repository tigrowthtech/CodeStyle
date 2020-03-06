# Manual Técnico de Code Style

> ESLint, Prettier e Git são obrigatórios em todos os projetos

**ESLint**: Serve para alertar sobre código danoso e passível de gerar bugs.

**Prettier**: Serve para manter uma formatação padrão de código.

**Git**: Serve para gerenciar as versões do código

## Projetos com NodeJS

Em cada projeto executar a instalação dos seguintes pacotes com **npm** ou **yarn**:

##### NPM

```
npm install -D prettier eslint eslint-config-airbnb-base eslint-config-prettier eslint-plugin-prettier eslint-plugin-import
```

##### YARN

```
yarn add -D prettier eslint eslint-config-airbnb-base eslint-config-prettier eslint-plugin-prettier eslint-plugin-import
```

Dentro de cada projeto **NodeJS**, adicionar o arquivo .eslintrc.js com o seguinte conteúdo:

```javascript
module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ["airbnb-base", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["prettier"],
  rules: {
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    "no-multiple-empty-lines": ["warn", { max: 1 }],
    "no-unused-vars": ["error", { argsIgnorePattern: "next" }],
    "import/prefer-default-export": "off",
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        printWidth: 120,
        trailingComma: "es5"
      }
    ],
  },
};
```

## Projetos com ReactJS

Em cada projeto executar a instalação dos seguintes pacotes com **npm** ou **yarn**:

##### NPM

```
npm install -D prettier eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-prettier eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y
```

##### YARN

```
yarn add -D prettier eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-prettier eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y
```


Dentro de cada projeto **ReactJS**, adicionar o arquivo .eslintrc.js com o seguinte conteúdo:

```javascript
module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["airbnb", "prettier", "prettier/react"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2020,
    sourceType: "module"
  },
  plugins: ["react", "prettier"],
  rules: {
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    "no-multiple-empty-lines": ["warn", { max: 1 }],
    "react/jsx-filename-extension": ["warn", { extensions: ["js", "jsx"] }],
    "import/prefer-default-export": "off",
    "prettier/prettier": ["error",
      {
        singleQuote: true,
        printWidth: 120,
        trailingComma: "es5",
        jsxBracketSameLine: true
      }
    ],
  }
};
```

## VSCode - Extensões recomendadas

### ESLint

> Única extensão da lista **obrigatória** para garantir que teremos o código padronizado.

Após instalar a extensão no VSCode, adicionar isso nas configurações de usuários do VSCode para garantir que estará funcionando:

```json
// Configura a extensão do ESLint para formatar ao salvar
"eslint.format.enable": true,
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
},

// Mostra duas réguas verticais no editor
// Uma linha de código nunca deve ter mais de 120 colunas
// E de preferência deve ter menos de 80 também
"editor.rulers": [
    80,
    120,
],
```

### GitLens

Integrada com o Git (não github) mostra informações úteis dentro do git dentro do projeto. Entre as funcionalidades, a principal é que ela ajuda a resolver conflitos de maneira visual e simples.

### Rocketseat React Native + Rocketseat ReactJS

Juntas, elas disponibilizam vários atalhos para programar em React Native e React JS respectivamente. Facilita muito a vida tê-las instaladas.

### Color Highlight

Ajuda a visualizar as cores dentro do VSCode. Ele identifica onde tem um hexadecimal, rgb, nome de cor, etc e mostra a cor ao lado.

### Settings Sync

Ao conectar ao github, com ela você consegue sincronizar suas configurações do VSCode direto num _gist_ do github. Bastante útil quando se tem muitas extensões e não quer o risco de perder suas configurações.

### Husky = Correcões automáticas antes de dar o gitcommit

Permite criar hooks para as ações do GIT. No nosso caso, formatará o código de maneira automática usando as configs do eslint antes de dar o commit, caso o mesmo não tenha sido editado automaticamente ao salvar.

Adicione globalmente a dependência do ESLint na máquina rodando `npm i -g eslint` no terminal (uma única vez).

Em cada projeto, adicionar essa dependência no **devDependencies** do _package.json_ e rodar o _npm install_ ou _yarn_ em seguida

```json
"husky": "^4.0.0-beta.1"
```

Depois disso, adicione os hooks, também no _package.json_

```json
"husky": {
    "hooks": {
        "pre-commit": "eslint --fix */*.js"
    }
}
```

## GIT

Nunca esquecer de configurar o .gitignore adequadamente. Na pasta gitignores tem arquivos base para o gitignore de node, reactjs e reactnative.

Evitar commits com descrições poucos explicativas.

### Política de Branches

Sempre trabalharemos com pelo menos 3 branches:

-   Master: somente coisas prontas para ir para produção.
-   Homologação: branch de testes para o cliente.
-   Dev: tudo que está em desenvolvimento, está pronto, mas ainda não foi para produção. Branch que irá para o servidor de testes adequado.
-   Feature: cada feature precisa ter sua branch. Uma vez pronta (e testada!) é feito um pull request para a branch _dev_.

## TESTES

Teremos que ter, ainda será pensado e adicionado aqui.
