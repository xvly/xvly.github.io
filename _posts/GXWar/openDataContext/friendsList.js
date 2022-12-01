const service = require("./service");

const canvas = wx.getSharedCanvas();
const context = canvas.getContext('2d');

let itemY = 120;
let startBgPos = [11, 0]; // 列表全部子节点按照第一个背景相对定位
let imageSize = [65, 65];
let imageBorderSize = 8.5;
let itemInterval = 1.1;
/** 实现九宫格渲染背景图片 */
let bgCut = [15, 15, 15, 15];
let bgSize = [32, 32];

const friendsList = {
    pngList: [],
    lastScrollY: 40,
    saveScrollEndY: 40,
    scrollStart() {
        friendsList.lastScrollY = friendsList.saveScrollEndY;
    },
    scrollEnd() {
    },
    hide() {
        context.clearRect(0, 0, 720, 2000);
    },
    show(scrollY) {
        context.clearRect(0, 0, 720, 2000);
        let userOpenid = service.openid;
        let data = service.data;
        let pngList = service.pngList;
        if (scrollY !== 0 && scrollY !== undefined && data.length > 6) { // 改变startBgPos，制造滚动
            let minY = -itemY * data.length + 824;
            startBgPos[1] = friendsList.lastScrollY + -scrollY;
            startBgPos[1] = startBgPos[1] > 40 ? 40 : startBgPos[1] < minY ? minY : startBgPos[1];
            friendsList.saveScrollEndY = startBgPos[1];
        }
        let user = null;
        for (let i = 0; i < data.length; i++) {
            if (userOpenid == data[i].openid) {
                user = data[i];
                user.rank = i + 1;
            }
            //每一个排行数据的位置
            let bgPos = [startBgPos[0], itemInterval * i * itemY + startBgPos[1]];
            if (bgPos[1] < service.globalCfg.renderHeight) { // 超出可世范围的不渲染，节省资源
                //头像位置
                let headPos = [bgPos[0] + 143, bgPos[1] + 30];

                this.getImageByCut(pngList[0], bgCut[0], bgCut[1], bgCut[2], bgCut[3], bgSize[0], bgSize[1], {
                    x: bgPos[0] + 10,
                    y: bgPos[1],
                    width: 610,
                    height: itemY
                });

                // 头像
                let headImgScale = 0.93;
                if (data[i].avatarUrl) {
                    context.drawImage(data[i].image, headPos[0], headPos[1], (imageSize[0]) * headImgScale, (imageSize[1]) * headImgScale);
                }
                context.drawImage(pngList[6], headPos[0] - imageBorderSize, headPos[1] - imageBorderSize, (imageSize[0] + imageBorderSize * 2) * headImgScale, (imageSize[1] + imageBorderSize * 2) * headImgScale);

                let nickNameStrokeColor;

                // 排序
                if ([0, 1, 2].indexOf(i) > -1) {
                    //排名徽章
                    context.drawImage(pngList[i + 2], bgPos[0] + 50, bgPos[1] + 21.5, 66, 86);

                }
                else {
                    //排名底图
                    context.drawImage(pngList[5], bgPos[0] + 50, bgPos[1] + 33, 58, 58);
                    context.font = 'bold 35px 宋体';
                    context.textAlign = 'center';
                    context.fillStyle = "#ffffff";
                    context.lineWidth = 1.5;
                    context.strokeStyle = "#ffffff";
                    context.strokeText(`${i + 1}`, bgPos[0] + 77, bgPos[1] + 75);
                    context.fillText(`${i + 1}`, bgPos[0] + 77, bgPos[1] + 75);
                }

                //名字
                context.font = 'bold 27px 宋体';
                context.fillStyle = '#814e3d';
                context.textAlign = 'left';
                let nickName = data[i].nickname;
                if (nickName) {
                    nickName = nickName.length > 6 ? `${nickName.slice(0, 6)}...` : nickName;
                }
                context.lineWidth = 1.5;
                context.strokeStyle = '#814e3d';
                context.strokeText(nickName, bgPos[0] + 250, bgPos[1] + 71);
                context.fillText(nickName, bgPos[0] + 250, bgPos[1] + 71);

                //关卡
                context.font = 'bold 27px 宋体';
                context.fillStyle = "#c26435";
                context.textAlign = 'center';
                let chap = Math.floor(data[i].KVDataList[0].value / 1000);
                let stage = data[i].KVDataList[0].value - 1000 * chap;
                context.lineWidth = 1.5;
                context.strokeStyle = '#c26435';
                context.strokeText(`关卡`, bgPos[0] + 468, bgPos[1] + 71);
                context.fillText(`关卡`, bgPos[0] + 468, bgPos[1] + 71);
                context.fillStyle = '#48943e';
                context.strokeStyle = '#48943e';
                context.strokeText(`${chap}-${stage}`, bgPos[0] + 550, bgPos[1] + 71);
                context.fillText(`${chap}-${stage}`, bgPos[0] + 550, bgPos[1] + 71);
            }

            if (i == data.length - 1 && user) {
                // 当前玩家的展示
                this.renderUser(user);
            }
        }
    },
    renderUser(user) {

        let pngList = service.pngList;
        this.getImageByCut(pngList[1], 20, 20, 20, 20, 164, 118, {
            x: service.globalCfg.myRankPos[0],
            y: service.globalCfg.myRankPos[1],
            width: 637,
            height: 138
        });

        // 排序
        if (user.rank <= 2) {
            context.drawImage(pngList[2 + user.rank], service.globalCfg.myRankPos[0] + 40, service.globalCfg.myRankPos[1] + 25);
        }
        else {
            context.font = 'bold 35px 宋体';
            context.textAlign = 'center';
            context.lineWidth = 1.5;
            context.strokeStyle = "#ffffff";
            context.strokeText(user.rank, service.globalCfg.myRankPos[0] + 80, service.globalCfg.myRankPos[1] + 73);
            context.fillStyle = "#ffffff";
            context.fillText(user.rank, service.globalCfg.myRankPos[0] + 80, service.globalCfg.myRankPos[1] + 73);
        }



        // 头像
        let headPos = [service.globalCfg.myRankPos[0] + 147, service.globalCfg.myRankPos[1] + 31];
        if (user.avatarUrl) {
            context.drawImage(user.image, headPos[0], headPos[1], imageSize[0] + 2, imageSize[1] + 2);
        }
        context.drawImage(pngList[6], headPos[0] - imageBorderSize, headPos[1] - imageBorderSize, imageSize[0] + imageBorderSize * 2, imageSize[1] + imageBorderSize * 2);

        // 名字
        context.font = 'bold 30px 宋体';
        context.lineWidth = 1.5;
        context.strokeStyle = "#476d9a";
        context.fillStyle = '#476d9a';
        context.textAlign = 'left';
        let nickName = user.nickname;
        if (nickName) {
            nickName = nickName.length > 6 ? `${nickName.slice(0, 6)}...` : nickName;
        }
        context.strokeText(nickName, service.globalCfg.myRankPos[0] + 230, service.globalCfg.myRankPos[1] + 70);
        context.fillText(nickName, service.globalCfg.myRankPos[0] + 230, service.globalCfg.myRankPos[1] + 70);

        // 关卡
        context.font = 'bold 30px 宋体';
        context.fillStyle = '#c26435';
        context.textAlign = 'center';
        let chap = Math.floor(user.KVDataList[0].value / 1000);
        let stage = user.KVDataList[0].value - 1000 * chap;
        context.lineWidth = 1.5;
        context.strokeStyle = "#c26435";
        context.strokeText(`关卡`, service.globalCfg.myRankPos[0] + 473, service.globalCfg.myRankPos[1] + 73);
        context.fillText(`关卡`, service.globalCfg.myRankPos[0] + 473, service.globalCfg.myRankPos[1] + 73);
        context.fillStyle = '#48943e';
        context.strokeStyle = "#48943e";
        context.fillText(`${chap}-${stage}`, service.globalCfg.myRankPos[0] + 555, service.globalCfg.myRankPos[1] + 73);
        context.strokeText(`${chap}-${stage}`, service.globalCfg.myRankPos[0] + 555, service.globalCfg.myRankPos[1] + 73);
    },
    /** 裁剪成九份： 上左，上中，上右， 中左，中中，中右，下左，下中，下右*/
    getImageByCut(image, left, right, top, bottom, width, height, setting) {
        // 上
        context.drawImage(image, 0, 0, left, top, setting.x, setting.y, left, top);
        context.drawImage(image, left, 0, width - (left + right), top, setting.x + left, setting.y, setting.width - (left + right), top);
        context.drawImage(image, width - right, 0, right, top, setting.x + (setting.width - right), setting.y, right, top);

        // 中
        context.drawImage(image, 0, top, left, height - (top + bottom), setting.x, setting.y + top, left, setting.height - (top + bottom));
        context.drawImage(image,
            left,
            top,
            width - (left + right),
            height - (top + bottom),

            setting.x + left,
            setting.y + top,
            setting.width - (left + right),
            setting.height - (top + bottom),
        );
        context.drawImage(image,
            width - right,
            top,
            right,
            height - (top + bottom),

            setting.x + (setting.width - right),
            setting.y + top,
            right,
            setting.height - (top + bottom),
        );

        // 下
        context.drawImage(image,
            0,
            height - bottom,
            left,
            bottom,

            setting.x,
            setting.y + (setting.height - bottom),
            left,
            bottom
        );
        context.drawImage(image,
            left,
            height - bottom,
            width - (left + right),
            bottom,

            setting.x + left,
            setting.y + (setting.height - bottom),
            setting.width - (left + right),
            bottom,
        );

        context.drawImage(image,
            width - right,
            height - bottom,
            right,
            bottom,

            setting.x + (setting.width - right),
            setting.y + (setting.height - bottom),
            right,
            bottom
        );
    }
}

module.exports = friendsList;