import { applyMiddleware, createStore } from "redux";
import createRootReducer from "./reducers";
import { createHashHistory } from "history";
import { routerMiddleware } from "connected-react-router";
// 初始化store 路由状态同步全局STORE

export const history = createHashHistory()
const store = createStore(
    createRootReducer(history), 
    applyMiddleware(routerMiddleware(history))
    );

export default store;
