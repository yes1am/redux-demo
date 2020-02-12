## redux-demo

## 开发

`npm install`  

`npm start`

## 调试插件

- React Develop Tools
- Redux DevTools

Redux DevTools [文档](https://github.com/zalmoxisus/redux-devtools-extension)
设置:  
```js
 const store = createStore(
   reducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );
```