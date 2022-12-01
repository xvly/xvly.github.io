const friendsList = require("./friendsList");
const service = require("./service")
var globalCfg = {};
wx.onMessage((data) => {
    switch (data.type) {
        case 'init':
            service.openid = data.args.openid;

            if (data.args.isBangsScreen) {
                globalCfg.myRankPos = [3, 980]; // 我的排行固定这个位置 
                globalCfg.renderHeight = 1000;
            }
            else {
                globalCfg.myRankPos = [3, 775]; // 我的排行固定这个位置 
                globalCfg.renderHeight = 740;
            }
            service.load(globalCfg);
            break;
        case 'friendsList':
            service.load(globalCfg).then(() => {
                if (data.args.scrollType == "start") {
                    friendsList.scrollStart();
                } else if (data.args.scrollType == "scroll") {
                    friendsList.show(data.args.scrollY);
                } else if (data.args.scrollType == "end") {
                    friendsList.scrollEnd();
                } else if (data.args.scrollType == "hide") {
                    friendsList.hide();
                } else {
                    friendsList.show(0);
                }
            });
            break;
        case 'updateScore':
            service.update(data.args.score);
            break;
    }
});
