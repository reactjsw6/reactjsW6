# reactjsW6

## Running

### Install packages

```bash
> npm install
```

### Install gulp

```bash
> npm install --save-dev gulp
```

### Build assets

```bash
> ./node_modules/.bin/gulp
```

### Start mongodb

```bash
> mongod --config /usr/local/etc/mongod.conf
```

### Run *the* server

```bash
> node ./server.js
```

### CHECK YO' SHIT OUT

```
open http://localhost:5000
```


####This project is a simple client side CRUD app using React as the client side framework.


####Technologies:

  - React: Client-side framework (including React-router and React-dom)
  - Gulp: Task runner
  - Webpack: Module bundler (plus Webpack-stream to run Webpack as a stream to conveniently integrate with Gulp)
  - Express: Server package  
  - Babel: Javascript compiler (including Babel-loader to transpile JS files using Babel and Webpack, and Babel-preset-react to transform JSX into createElement calls)
  - Mongoose: MongoDB object modeling tool designed to work in an asynchronous environment


####The ReactJSW6 team:

    Ardian Ajvazi
    Joshua Ho
    Stephen Salzer
    Gene Troy
