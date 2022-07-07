# Using `Custom Fonts` In React Native Application

## Let's see all the steps in details

### Create a `react native` application using following commands

```sh
npx react-native init [ProjectName] --template react-native-template-typescript
```

### Create a fonts folder in your project to store your fonts

```sh
mkdir fonts
```

### Create `react-native.config.js` file in the root of your project

```
touch react-native.config.js
```

### Add following code in `react-native.config.js` file

```js
module.exports = {
  assets: ['./fonts/'],
};
```

### Now run following command to link fonts to your project

```sh
npx react-native-asset
```
