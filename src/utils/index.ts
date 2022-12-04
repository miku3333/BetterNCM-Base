export const clickPlay = (type?: 'play' | 'pause') => {
    const clickE = document.createEvent('MouseEvents');
    clickE.initEvent('click', true, true);
    const playBtn = document.querySelector('.btnp') as HTMLDivElement;
    const isPause = playBtn.classList.value.includes('play');
    if (!type || (isPause && type === 'play') || (!isPause && type === 'pause')) {
        playBtn.dispatchEvent(clickE);
    }
};

// export const deBounce = (, timeout:number = 1000) => {}
