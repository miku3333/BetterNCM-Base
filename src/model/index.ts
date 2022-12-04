let appName = '';
export const setAppName = (name: string) => (appName = name);

export const styleMap: { [key: string]: any } = {};
const headAppend = HTMLHeadElement.prototype.appendChild;
export const getStyleDom = (key: string) => {
    let appKey = `${appName}-${key}`;
    console.log(appKey);
    if (!styleMap[appKey]) {
        HTMLHeadElement.prototype.appendChild = headAppend;
        const style = document.createElement('style');
        style.setAttribute('type', 'text/css');
        styleMap[appKey] = document.head.appendChild(style);
    }
    console.log(styleMap[appKey]);
    return styleMap[appKey];
};
