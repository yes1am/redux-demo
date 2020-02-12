## redux-demo

## 调试插件

- React Develop Tools
- Redux DevTools

Redux DevTools 设置:  

```js
 const store = createStore(
   reducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );
```