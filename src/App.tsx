import { useCallback } from 'react';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const items = [
    { label: 'miku-plugin', key: 'miku-plugin' }, // 菜单项务必填写 key
    { label: '关于', key: 'item-2' },
    { label: '关闭', key: 'close' }
];

function App() {
    const navigate = useNavigate();
    const menuClick = useCallback((item: any) => {
        if (item.key === 'close') {
            // @ts-ignore
            window.qiankunMenuClose();
            return;
        }
        navigate(item.key);
    }, []);
    return (
        <div className='App'>
            <Menu onClick={menuClick} mode='horizontal' defaultSelectedKeys={['miku-plugin']} items={items} />
            <div id='microRoot'></div>
        </div>
    );
}

export default App;
