import { memo, useState } from 'react';
import './index.css';

const About = () => {
    return (
        <div>
            <a target='_blank' href='https://github.com/MicroCBer/BetterNCM' className='about' rel='noreferrer'>
                @MicroCBer PC版网易云客户端插件管理器
            </a>
            <a target='_blank' href='https://github.com/miku3333/BetterNCM-Base' className='about' rel='noreferrer'>
                @miku3333 PC版网易云客户端插件管理器的微前端基座
            </a>
        </div>
    );
};

export default memo(About);
