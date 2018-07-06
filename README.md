<h1 align="center">Welcome to Pugdepro 🚀🚀🚀</h1>
<h1 align="center">
  
  ![pugdepro](./src/assets/pugdepro.svg)
</h1>
<p  align="center">
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/tr-yanqing/scaffold#readme">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
  <a href="https://github.com/tr-yanqing/scaffold/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />
  </a>
  <a href="https://github.com/tr-yanqing/scaffold/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a>
</p>

> react + react-router + redux + babel + webpack + proxy + mock built-in scaffolding, redux management state, emulation and proxy emulation or proxy interface. Load modules on demand.
### 🏠 [Homepage](https://github.com/tr-yanqing/pugdepro#readme)

## 📦Install

```sh
npm install
```

## 🔨Usage

```sh
npm start
```

## ✨Run Build

```sh
npm run build
```

## 🐔Run Docs

```sh
npm run docs
```

## 🎮Run tests

```sh
npm run test
```

## Redux State Management

```
example:
// define state in ./src/store/movielist
import { createAction, handleActions } from 'redux-actions';

export default {
  actions: {
    setList: createAction('putList'),
    clearList: createAction('empList'),
  },
  reducer: handleActions({
    putList(state, action) {
      return { ...state, list: action.payload.list };
    },
    empList(state) {
      return { ...state, list: [] };
    }
  }, {
    list: []
  })
};

// use in ./src/view/MovieList
...
import { connect, Provider } from 'react-redux';

const store = createStore(reducers);
const mapStateToProps = (state) => ({ ...state.movielist });
const mapDispatchToProps = (dispatch) => ({
  setList(list) {
    dispatch(actions.movielist.setList(list));
  },
  clearList() {
    dispatch(actions.movielist.clearList());
  }
});
...
```

## Router Management

```
in ./config/router.js
load on demand example:
import MovieList from  'bundle-loader?lazy&name=lazy-[name]!../src/view/MovieList'

<Route path='/movielist' component={() => (
  <Bundle load={MovieList}>
    {(MovieList) => <MovieList />}
  </Bundle>
)} />
```

## 🔗 Links

[homepage](https://yqcscaff.github.io/pugdepro/)

## Author

* Github: [@tr-yanqing](https://github.com/tr-yanqing)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/tr-yanqing/scaffold/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

This project is [MIT](https://github.com/tr-yanqing/scaffold/blob/master/LICENSE) licensed.