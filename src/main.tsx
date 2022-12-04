import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './main.css';
import { BrowserRouter } from 'react-router-dom';
import { initGlobalState, MicroAppStateActions, registerMicroApps, setDefaultMountApp, start } from 'qiankun';
import { IS_IN_NCM } from './constants';
import { getStyleDom, setAppName } from './model';

// qiankun
registerMicroApps(
    [
        {
            name: 'miku-plugin', // app name registered
            entry: 'https://xiaoyanmiao.gitee.io/miku-plugin',
            container: '#microRoot',
            activeRule: '/miku-plugin',
            props: { getStyleDom }
        }
    ],
    {
        beforeLoad: app => Promise.resolve(setAppName(app.name))
    }
);
start();
// shadow模式, document等会有一些问题
// start({
//     sandbox: { strictStyleIsolation: true }
// });
setDefaultMountApp('/miku-plugin');

const actions: MicroAppStateActions = initGlobalState({ getStyleDom });
const root = document.createElement('div');
root.id = 'qiankun-root';
const qiankun = IS_IN_NCM ? document.querySelector('.g-mn')?.appendChild(root) : document.getElementById('qiankun-root');
if (IS_IN_NCM && qiankun?.style) {
    qiankun.style.display = 'none';
}
ReactDOM.createRoot(qiankun as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
