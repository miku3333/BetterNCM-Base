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

// 点击发现音乐直接播放推荐音乐
// betterncm.utils.waitForElement('.u-cover-daily').then(() => {
//     const clickE = document.createEvent('MouseEvents');
//     clickE.initEvent('click', true, true);
//     const dailyBtn = document.body.appendChild(document.querySelector('.u-cover-daily').querySelector('.ply'));
//     dailyBtn.style.display = 'none';
//     let targetBtn = null;
//     try {
//         document.querySelectorAll('.fsection').forEach(item => {
//             if (item.dataset.id === '/m/disc/') {
//                 targetBtn = item;
//                 throw new Error();
//             }
//         });
//     } catch (e) {
//         console.log(e);
//     }
//     const targetClick = e => {
//         e.preventDefault();
//         dailyBtn.dispatchEvent(clickE);
//     };
//     targetBtn.addEventListener('click', targetClick, true);
// });
