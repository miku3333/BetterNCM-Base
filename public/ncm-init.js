plugin.onAllPluginsLoaded(async function (plugins) {
    await plugins.StylesheetLoader.loadStylesheet(plugin, this.pluginPath + '/index.css', 'qiankun', {});
});

const btnClick = () => {
    const root = document.querySelector('#qiankun-root');
    if (root.style.display === 'block') {
        root.style.display = 'none';
    } else {
        root.style.display = 'block';
    }
};

window.qiankunMenuClose = () => {
    const root = document.querySelector('#qiankun-root');
    root.style.display = 'none';
};

window.qiankunMenuOpen = () => {
    const root = document.querySelector('#qiankun-root');
    root.style.display = 'block';
};

// 侧边栏添加插件管理菜单
const sys = document.querySelector('.sys');
const btn = sys.appendChild(document.createElement('li'));
btn.className = 'fx j-flag fsection';
btn.appendChild(document.createElement('a'));
btn.children[0].innerText = '插件管理';
btn.addEventListener('click', btnClick);
