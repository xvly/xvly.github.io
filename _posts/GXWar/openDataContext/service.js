const utils =  require("./utils");
let loadPromise = null;
const service = {
    data: [],
    openid: '',
    pngList: [],
    globalCfg: null,
    load: (cfg) => {
        if(service.globalCfg == null){
            service.globalCfg = cfg;
        }
        if (loadPromise) return loadPromise;
        return loadPromise = Promise.all([
            utils.loadImage('rank/bg1.png'),
            utils.loadImage('rank/bg2.png'),
            utils.loadImage('rank/badge1.png'),
            utils.loadImage('rank/badge2.png'),
            utils.loadImage('rank/badge3.png'),
            utils.loadImage('rank/badgeBG.png'),
            utils.loadImage('rank/headBorder.png'),
            service.getFriendData()
        ]).then((list) => {
            service.data = list.pop();
            service.pngList = list;
        });
    },
    update: (score) => {
        var kvData = [
            {
                "key": "score",
                "value": `${score}`
            }
        ];
        service.data.forEach(item => {
            if (item.openid === service.openid) {
                item.KVDataList = kvData;
            }
        });

        service.sortData();
        service.saveData(kvData);
    },
    sortData() {
        if (service.data.length > 0 ){
            service.data = service.data.sort((a, b) => Number(b.KVDataList[0].value) - Number(a.KVDataList[0].value));
        }
    },
    saveData: (kvData) => {
        wx.setUserCloudStorage({
            KVDataList: kvData,
        });
    },
    getFriendData: function() {
        return new Promise(resolve => {
            wx.getFriendCloudStorage({
                keyList: ['score'],
                success:function(res){
                    service.data = res.data;
                    service.sortData();
                    Promise.all(service.data.map(item => utils.loadImage(item.avatarUrl))).then((imagesLists) => {
                        service.data = service.data.map((item, index) => {
                            item.image = imagesLists[index];
                            return item;
                        });
                        console.log('wx-oepn-context-service.data: ', service.data);
                        resolve(service.data);
                    });
                }
            });
        });
    }
}

module.exports = service;