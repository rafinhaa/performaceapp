<h4 align="center">
    <h1 align="center">
      PerformanceApp
    </h1>
    <br><br>
</h4>

<h4 align="center">
    <br><br>
    <p align="center">
      <a href="#-about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-how-to-run-the-project">Run</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-info">Info</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-changelog">Changelog</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-license">License</a>
  </p>
</h4>

## 🔖 About

PerformanceApp é um aplicativo para mostrar como utilizar os hooks do React Native.
É utilizado Memo, useMemo, useCallback e flatlist.

## 🚀 Technologies

- [ReactNative](https://reactnative.dev/)
- [Expo](https://expo.io/)

## 🏁 How to run the project

#### Clone the repository

```bash
git clone https://github.com/rafinhaa/performanceApp.git
cd PerformanceApp
```

#### Install dependencies

```bash
yarn install
```

#### Start fake api

```bash
yarn json-server -d 750 -w -H <your-ip-here> -p 3333 src/api/server.js
```

#### Build in iOS

```bash
cd ios && pod install && cd..
yarn run ios
```

#### Build in Android

```bash
yarn run android
```

## ℹ️ Info

## 📝 License

[MIT](LICENSE)

**Free Software, Hell Yeah!**
