const images = {};
const canvas = wx.getSharedCanvas();
const context = canvas.getContext('2d');
const utils = {
    findNearFriends(service) {
        let userOpenid = service.openid;
        let userData = null;
        let nextTarget = null;
        let lastTarget = null;
        let index = 0;
        while(index < service.data.length) {
            let item = service.data[index];
            if (item.openid === userOpenid) {
                userData = item;
                break;
            }
            index += 1;
        }
        while(index < service.data.length) {
            let item = service.data[index];
            if (item && (userData.KVDataList[0].value - item.KVDataList[0].value > 0) && item.openid !== userOpenid) {
                lastTarget = item;
                break;
            }
            index += 1;
        }
        while(index >= 0) {
            let item = service.data[index];
            if (item  && item.KVDataList[0].value - userData.KVDataList[0].value >= 0 && item.openid !== userOpenid) {
                nextTarget = item;
                break;
            }
            index -= 1;
        }
        return [lastTarget, userData, nextTarget];
    },
    roundRect: function (x, y, w, h, r) {
        var min_size = Math.min(w, h);
        if (r > min_size / 2) r = min_size / 2;
        // 开始绘制
        context.beginPath();
        context.moveTo(x + r, y);
        context.arcTo(x + w, y, x + w, y + h, r);
        context.arcTo(x + w, y + h, x, y + h, r);
        context.arcTo(x, y + h, x, y, r);
        context.arcTo(x, y, x + w, y, r);
        context.stroke();
        context.closePath();
        return context;
    },
    loadImage: (url) => {  
        return new Promise((resolve, reject) => {
            if (images[url]) return resolve(images[url]);
            var img = wx.createImage(); //创建一个Image对象，实现图片的预下载  
            if (!url) return resolve(img);
            img.src = url;      
            img.onload = function () { //图片下载完毕时异步调用callback函数。  
                images[url] = img;
                resolve(img);
            };
            img.onError = function() {
                reject();
            }
        });
    }
}

module.exports = utils;