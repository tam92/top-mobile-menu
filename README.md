# template-webpack

Template with the following initial configuration:

- npm init (generates package.json)
- npm install webpack webpack-cli --save-dev
- (on package.json): 
    - "private": true
    - "build": "webpack"
- .gitignore
    - node_modules/
- created folder src
- created file webpack.config.js:
```js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```
- npm install --save-dev style-loader css-loader
- css loader on webpack.config.js
```js
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
    ],
},
```
- import css file on entry point (src/index.js)
    ```import './style.css';```

- image loader on webpack.config.js

    ```
            {   // dependencias para cargar imágenes
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
    ```

- npm install --save-dev html-webpack-plugin

```
plugins: [
	new HtmlWebpackPlugin({
        template: './src/index.html',
		title: '',
		inject: 'body',
    })
]
```

- npm install eslint --save-dev

- FINISH CONFIGURATION:
    ./node_modules/.bin/eslint --init

- added this to settings.json:
```JSON
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
},
"eslint.validate": ["javascript"]
```

- npm install --save-dev --save-exact prettier
- node --eval "fs.writeFileSync('.prettierrc','{}\n')"
- RUN THIS TO FORMAT ALL FILES WITH PRETTIER:
    npx prettier . --write

- npm install --save-dev eslint-config-prettier

- eslintrc: Add `"prettier"` to the "extends" array in your `.eslintrc.*` file. Make sure to put it **last,** so it gets the chance to override other configs.
    
    ```json
    {
      "extends": [
        "some-other-config-you-use",
        "prettier"
      ]
    }
    ```
- set mode on webpack.confgi.js
```js
module.exports = {
  entry: './src/index.js',
  mode: "development",
```


- CLI helper tool

eslint-config-prettier also ships with a little CLI tool to help you check if your configuration contains any rules that are unnecessary or conflict with Prettier. Here’s how to run it:

```
npx eslint-config-prettier path/to/main.js
```

(Change `path/to/main.js` to a file that exists in your project.)