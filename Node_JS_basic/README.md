# NodeJS Basics

## Resources
Read or watch:

- [Node JS getting started](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
- [Process API doc](https://node.readthedocs.io/en/latest/api/process/)
- [Child process](https://nodejs.org/api/child_process.html)
- [Express getting started](https://expressjs.com/en/starter/installing.html)
- [Mocha documentation](https://mochajs.org/)
- [Nodemon documentation](https://github.com/remy/nodemon#nodemon)

## Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

- run javascript using NodeJS
- use NodeJS modules
- use specific Node JS module to read files
- use process to access command line arguments and the environment
- create a small HTTP server using Node JS
- create a small HTTP server using Express JS
- create advanced routes with Express JS
- use ES6 with Node JS with Babel-node
- use Nodemon to develop faster

## Requirements
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files will be interpreted/compiled on Ubuntu 20.04 LTS using node (version 20.x.x)
- All your files should end with a new line
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the js extension
- Your code will be tested using Jest and the command npm run test
- Your code will be verified against lint using ESLint
- Your code needs to pass all the tests and lint. You can verify the entire project running npm run full-test
- All of your functions/classes must be exported by using this format: module.exports = myFunction;

## Provided files
<details>
  <summary>database.csv</summary>
    <pre>
    <code class="language-javascript">
    firstname,lastname,age,field
    Johann,Kerbrou,30,CS
    Guillaume,Salou,30,SWE
    Arielle,Salou,20,CS
    Jonathan,Benou,30,CS
    Emmanuel,Turlou,40,CS
    Guillaume,Plessous,35,CS
    Joseph,Crisou,34,SWE
    Paul,Schneider,60,SWE
    Tommy,Schoul,32,SWE
    Katie,Shirou,21,CS
    </code>
    </pre>
</details>

<details>
  <summary>package.json</summary>
    <pre>
    <code class="language-javascript">
    {
      "name": "node_js_basics",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "lint": "./node_modules/.bin/eslint",
        "check-lint": "lint [0-9]*.js",
        "test": "./node_modules/mocha/bin/mocha --require babel-register --exit",
        "dev": "nodemon --exec babel-node --presets babel-preset-env ./server.js ./database.csv"
      },
      "author": "",
      "license": "ISC",
      "dependencies": {
        "chai-http": "^4.3.0",
        "express": "^4.17.1"
      },
      "devDependencies": {
          "babel-cli": "^6.26.0",
          "babel-preset-env": "^1.7.0",
          "lint": "*",
          "eslint": "^6.8.0",
          "eslint-config-airbnb-base": "^14.2.1",
          "eslint-plugin-import": "^2.29.1",
          "eslint-plugin-jest": "^22.21.0",
          "nodemon": "^2.0.22",
          "chai": "^4.4.1",
          "mocha": "^6.2.3",
          "request": "^2.88.2",
          "sinon": "^7.5.0"
      }
    }
    </code>
    </pre>
</details>

<details>
  <summary>babel.config.js</summary>
  <pre>
  <code class="language-javascript">
    module.exports = {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current',
            },
          },
        ],
      ],
    };
  </code>
  </pre>
</details>

<details>
  <summary>.eslintrc.js</summary>
  <pre>
<code class="language-javascript">
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides: [
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    },
  ],
};
</code>
  </pre>
</details>

## and...
Don’t forget to run ```$ npm install``` when you have the ```package.json```