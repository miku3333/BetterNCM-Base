import { useCallback, useState } from 'react';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { IS_IN_NCM } from './constants';
import About from './components/About';

const items = [
    { label: 'miku-plugin', key: 'miku-plugin' }, // 菜单项务必填写 key
    { label: '关于', key: 'about' },
    { label: '关闭', key: 'close' }
];

function App() {
    const navigate = useNavigate();
    const [isAbout, setIsAbout] = useState(false);
    const menuClick = useCallback((item: any) => {
        if (item.key === 'close' && IS_IN_NCM) {
            // @ts-ignore
            window.qiankunMenuClose();
            return;
        }
        setIsAbout(item.key === 'about');
        navigate(item.key);
    }, []);
    return (
        <div className='App'>
            <Menu onClick={menuClick} mode='horizontal' defaultSelectedKeys={['miku-plugin']} items={items} />
            {isAbout && <About />}
            <div id='microRoot'></div>
        </div>
    );
}

export default App;
