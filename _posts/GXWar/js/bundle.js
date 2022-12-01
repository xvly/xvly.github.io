(function () {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    class BaseController {
    }

    var LoopType;
    (function (LoopType) {
        LoopType[LoopType["loop"] = 0] = "loop";
        LoopType[LoopType["pingpong"] = 1] = "pingpong";
    })(LoopType || (LoopType = {}));
    class Tween {
        static to(target, props, duration, ease, complete, delay, coverBefore, autoRecover, progress) {
            let tween = target["__tweener"];
            if (tween != null) {
                tween.clear();
            }
            if (props.update == undefined &&
                progress != null) {
                props.update = progress;
            }
            return new Promise((resolve, reject) => {
                let layaTween = Laya.Tween.to(target, props, duration, ease, Laya.Handler.create(this, function () {
                    target["__tweener"] = null;
                    if (complete) {
                        complete.runWith(complete.args);
                    }
                    resolve(null);
                }), delay, coverBefore, autoRecover);
                target["__tweener"] = layaTween;
            });
        }
        static transformTranslate(tf, pos, duration, ease) {
            return __awaiter(this, void 0, void 0, function* () {
                let tempPos = tf.position.clone();
                return Tween.to(tempPos, { x: pos.x, y: pos.y, z: pos.z }, duration, ease, null, null, true, null, Laya.Handler.create(tf, function () {
                    tf.position = tempPos;
                }, null, false));
            });
        }
        static transformRotateTo(tf, rot, duration, ease) {
            return __awaiter(this, void 0, void 0, function* () {
                let tempRot = { x: tf.rotation.x, y: tf.rotation.y, z: tf.rotation.z, w: tf.rotation.w };
                return Tween.to(tempRot, { x: rot.x, y: rot.y, z: rot.z, w: rot.w }, duration, ease, null, null, true, null, Laya.Handler.create(tf, function () {
                    tf.rotation = new Laya.Quaternion(tempRot.x, tempRot.y, tempRot.z, tempRot.w);
                }, null, false));
            });
        }
        static clearAll(target) {
            Laya.Tween.clearAll(target);
        }
        static numberTween_Int(startNum, targetNum, runTime, callback) {
            if (runTime == 0)
                return;
            let curNum = Math.ceil(startNum);
            let interval = Math.abs(runTime / (targetNum - startNum));
            let targetNumStep;
            if (interval >= 25) {
                targetNumStep = targetNum > 0 ? 1 : -1;
            }
            else {
                targetNumStep = (targetNum - startNum) > 0 ? 1 : -1;
                targetNumStep /= (interval / 25);
                targetNumStep = Math.floor(targetNumStep);
            }
            let numberTweenFunc = function () {
                curNum += targetNumStep;
                if (((targetNum - startNum) > 0 && curNum >= targetNum) || ((targetNum - startNum) <= 0 && curNum <= targetNum)) {
                    curNum = targetNum;
                    Laya.timer.clear(this, numberTweenFunc);
                }
                callback(curNum);
            };
            Laya.timer.loop(interval, this, numberTweenFunc);
        }
    }

    var FlyWordPos;
    (function (FlyWordPos) {
        FlyWordPos[FlyWordPos["High"] = 1] = "High";
        FlyWordPos[FlyWordPos["Middle"] = 2] = "Middle";
        FlyWordPos[FlyWordPos["Low"] = 3] = "Low";
    })(FlyWordPos || (FlyWordPos = {}));
    class FlywordItem extends Laya.UIComponent {
        constructor() {
            super();
            this.width = 480;
            this.height = 60;
            this.bg = new Laya.Image("game/view/common/black_bg.png");
            this.bg.centerX = 0;
            this.bg.centerY = 0;
            this.bg.width = Laya.stage.width;
            this.bg.height = 60;
            this.bg.visible = false;
            this.addChild(this.bg);
            this.text = new Laya.Label();
            this.text.font = "SimHei";
            this.text.anchorX = 0.5;
            this.text.anchorY = 0.5;
            this.text.centerX = 0;
            this.text.centerY = 0;
            this.text.align = "center";
            this.text.valign = "middle";
            this.addChild(this.text);
            this.icon = new Laya.Image();
            this.icon.centerX = 0;
            this.icon.centerY = 0;
            this.icon.width = 50;
            this.icon.height = 50;
            this.icon.visible = false;
            this.text.addChild(this.icon);
        }
        set(text, fontSize, isBold, color, stroke, strokeColor, isAddBG, iconUrl) {
            this.text.fontSize = fontSize || 38;
            this.text.bold = isBold;
            this.text.color = color || "#ffffff";
            this.text.text = text || "none";
            this.text.stroke = stroke || 0;
            this.text.strokeColor = strokeColor || "#000000";
            this.bg.visible = isAddBG;
            if (iconUrl) {
                this.icon.visible = true;
                this.icon.skin = iconUrl;
                this.icon.centerX = -this.text.width / 2 - 25;
            }
            else {
                this.icon.visible = false;
            }
        }
        moveup(y) {
            this.y = y;
            if (this.lastItem && this.lastItem.visible) {
                this.lastItem.moveup(this.y - this.height - 5);
            }
        }
    }
    class ViewFlyword {
        static setup() {
            let parentNode = ViewManagerLY.getLayer(ViewLayer.debug);
            this.root = parentNode.addChild(new Laya.View());
            this.root.name = "flyword";
            this.root.zOrder = 999;
            this.items = new Array();
        }
        static _createItem(data) {
            let item = null;
            if (item == null) {
                item = new FlywordItem();
                item.anchorX = 0.5;
                item.anchorY = 0.5;
                if (data.parent) {
                    data.parent.addChild(item);
                }
                else {
                    this.root.addChild(item);
                }
                this.items.push(item);
            }
            item.set(data.text, data.fontSize, data.bold, data.color, data.stroke, data.strokeColor, data.isAddBG, data.iconUrl);
            item.pos(data.fromPos.x, data.fromPos.y);
            return item;
        }
        static defaultPos(pos) {
            switch (pos) {
                case FlyWordPos.High: {
                    return { x: Laya.stage.width / 2, y: Laya.stage.height / 4 };
                }
                case FlyWordPos.Middle: {
                    return { x: Laya.stage.width / 2, y: Laya.stage.height / 2 };
                }
                case FlyWordPos.Low: {
                    return { x: Laya.stage.width / 2, y: Laya.stage.height / 4 * 3 };
                }
                default: {
                    console.warn("[flyword]default pos unvalid");
                }
            }
        }
        static showTip(text, iconUrl, isAddBG, duration) {
            (isAddBG == null) && (isAddBG = true);
            let pos = this.defaultPos(FlyWordPos.High);
            if (this.lastTip && !this.lastTip.destroyed) {
                Tween.clearAll(this.lastTip);
                this.lastTip.visible = true;
                this.lastTip.alpha = 1;
                this.lastTip.x = pos.x;
                this.lastTip.y = pos.y;
                this.lastTip.text.text = text;
                this.lastTip.bg.visible = isAddBG;
                this._doTween(this.lastTip, duration);
            }
            else {
                this.lastTip = this.show({
                    text: text,
                    fromPos: pos,
                    color: "#ffffff",
                    isAddBG: isAddBG,
                    iconUrl: iconUrl,
                    stroke: 2,
                    strokeColor: "#000000"
                }, duration);
            }
        }
        static show(data, duration) {
            let item = this._createItem(data);
            this._doTween(item, duration);
            return item;
        }
        static _doTween(item, duration) {
            (duration == null) && (duration = 1000);
            Tween.to(item, { scaleX: 1.1, scaleY: 1.1 }, 100).then(tween => {
                Tween.to(item, { scaleX: 1, scaleY: 1 }, 100).then(tween => {
                    Tween.to(item, { alpha: 0 }, duration).then(tween => {
                        item.visible = false;
                    });
                });
            });
        }
        static clear() {
            for (let item of this.items) {
                item.destroy();
            }
            this.items = [];
        }
    }

    class Timer {
        static setServerTime(t) {
            console.info("timer set server time ", t);
            this._serverTime = t;
        }
        static setup() {
            this._gameStartTime = this.curMs;
        }
        static get timeFromGameStart() {
            return this.curMs - this._gameStartTime;
        }
        static updateServerTime(deltaMs) {
            this._serverTime += deltaMs;
        }
        static get deltaMs() {
            if (Laya.timer.delta > 1000)
                return 33;
            else
                return Laya.timer.delta;
        }
        static get deltaS() {
            return this.deltaMs / 1000;
        }
        static get curMs() {
            return this._serverTime || Laya.timer.currTimer;
        }
        static clear(caller, method) {
            Laya.timer.clear(caller, method);
        }
        static clearAll(caller) {
            Laya.timer.clearAll(caller);
        }
        static loop(delay, caller, method, args, coverBefore, jumpFrame, duration) {
            return __awaiter(this, void 0, void 0, function* () {
                Laya.timer.loop(delay, caller, method, args, coverBefore, jumpFrame);
                if (duration != null) {
                    return new Promise((resolve, reject) => {
                        Laya.timer.once(duration, caller, function () {
                            Laya.timer.clear(caller, method);
                            resolve(null);
                        });
                    });
                }
                else {
                    return Promise.resolve();
                }
            });
        }
        static frameLoop(delay, caller, method, args, coverBefore, count) {
            return __awaiter(this, void 0, void 0, function* () {
                if (count != null) {
                    return new Promise((resolve, reject) => {
                        let curCount = 0;
                        let loopMethod = function () {
                            method(caller, args);
                            curCount++;
                            if (curCount >= count) {
                                Laya.timer.clear(caller, loopMethod);
                                resolve(null);
                            }
                        };
                        Laya.timer.frameLoop(delay, caller, loopMethod, args, coverBefore);
                    });
                }
                else {
                    Laya.timer.frameLoop(delay, caller, method, args, coverBefore);
                    return Promise.resolve();
                }
            });
        }
        static frameOnce(delay, caller, method, args, coverBefore) {
            Laya.timer.frameOnce(delay, caller, method, args, coverBefore);
        }
        static once(delay, caller, method, args, coverBefore) {
            Laya.timer.once(delay, caller, method, args, coverBefore);
        }
        static wait(delay) {
            return __awaiter(this, void 0, void 0, function* () {
                return new Promise((resolve) => {
                    Timer.once(delay, this, resolve);
                });
            });
        }
        static get getNowFormatDate() {
            let date = new Date();
            let seperator1 = "-";
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let monthTxt = (month >= 1 && month <= 9 ? '0' : '') + month;
            let strDate = date.getDate();
            let strDateTxt = (strDate >= 0 && strDate <= 9 ? '0' : '') + strDate;
            let currentdate = year + seperator1 + monthTxt + seperator1 + strDateTxt;
            return currentdate;
        }
        static get isInWeekday() {
            const now = new Date();
            const isInWeekday = [0, 6].indexOf(now.getDay()) == -1;
            return isInWeekday;
        }
        static manualReset() {
            this._manualCurFrame = 0;
        }
        static manualSetTime(timestamp) {
            this._manualTimestamp = timestamp;
        }
        static get manualCurMs() {
            return this._manualTimestamp;
        }
        static get manualCurS() {
            return this.manualCurMs / 1000;
        }
        static get manualDeltaMs() {
            return this._manualDeltaMs;
        }
        static get manualDeltaS() {
            return this.manualDeltaMs / 1000;
        }
        static manualUpdate(deltaMs) {
            this._manualTimestamp += deltaMs;
            this._manualDeltaMs = deltaMs;
            this._manualCurFrame++;
            for (let i = this._manualTimers.length - 1; i >= 0; i--) {
                let timer = this._manualTimers[i];
                let isCall = false;
                if (timer.frame != null) {
                    if (this._manualCurFrame >= timer.frameOver) {
                        timer.frameOver = this._manualCurFrame + timer.frame;
                        isCall = true;
                    }
                }
                else if (timer.time != null) {
                    if (this._manualTimestamp >= timer.timeOver) {
                        timer.timeOver = this.manualCurMs + timer.time;
                        isCall = true;
                    }
                }
                if (isCall) {
                    if (timer.args) {
                        timer.method.apply(timer.caller, timer.args);
                    }
                    else {
                        timer.method.call(timer.caller);
                    }
                    if (timer.loopCount > 0) {
                        timer.loopCount--;
                    }
                    if (timer.loopCount == 0) {
                        this._manualTimers.splice(i, 1);
                    }
                }
            }
        }
        static manualOnce(delay, caller, method, args) {
            if (delay <= 0) {
                method.apply(caller, args);
            }
            else {
                let timer = {
                    time: delay,
                    timeOver: this.manualCurMs + delay,
                    caller: caller,
                    method: method,
                    loopCount: 1,
                    args: args
                };
                this._manualTimers.push(timer);
            }
        }
        static manualLoop(delay, caller, method, args) {
            let timer = {
                time: delay,
                timeOver: this._manualTimestamp + delay,
                caller: caller,
                method: method,
                loopCount: -1,
                args: args
            };
            this._manualTimers.push(timer);
        }
        static manualFrameLoop(frame, caller, method, args, count) {
            let timer = {
                frame: frame,
                frameOver: this._manualCurFrame + frame,
                caller: caller,
                method: method,
                loopCount: count || -1,
                args: args
            };
            this._manualTimers.push(timer);
        }
        static manualFrameOnce(frame, caller, method, args) {
            let timer = {
                frame: frame,
                frameOver: this._manualTimestamp + frame,
                caller: caller,
                method: method,
                loopCount: 1,
                args: args
            };
            this._manualTimers.push(timer);
        }
        static manualClear(caller, method) {
            for (let i = 0, n = this._manualTimers.length; i < n; i++) {
                let timer = this._manualTimers[i];
                if (timer.caller == caller && timer.method == method) {
                    this._manualTimers.splice(i, 1);
                    break;
                }
            }
        }
        static manualClearAll(caller) {
            if (caller) {
                for (let i = this._manualTimers.length - 1; i >= 0; i--) {
                    let timer = this._manualTimers[i];
                    if (timer.caller == caller) {
                        this._manualTimers.splice(i, 1);
                    }
                }
            }
            else {
                this._manualTimers = [];
            }
        }
    }
    Timer._manualTimers = [];

    class Resource {
        static enableVersionControl(manifestFile, callback, type) {
            return new Promise((resolve, reject) => {
                Laya.ResourceVersion.enable(manifestFile, Laya.Handler.create(this, function () {
                    if (callback) {
                        callback.run();
                    }
                    resolve(null);
                }), type);
            });
        }
        static is3DUrl(url) {
            return url.endsWith(".ls") || url.endsWith(".lh");
        }
        static load(url, complete, progress, type, priority, cache, group, ignoreCache, reloadCount = 1) {
            return new Promise((resolve, reject) => {
                Laya.loader.load(url, Laya.Handler.create(this, function (res) {
                    if (res && url.indexOf(".png") != -1 && !res.bitmap) {
                        console.log("res with problem, url", url);
                        ignoreCache = true;
                        res = null;
                    }
                    if ((res == null || res == false) && reloadCount != 0) {
                        this.load(url, complete, progress, type, priority, cache, group, ignoreCache, reloadCount - 1).then(res => {
                            resolve(res);
                        });
                    }
                    else {
                        if (complete) {
                            complete.runWith(res);
                        }
                        resolve(res);
                    }
                }), progress, type, priority, cache, group, ignoreCache);
            });
        }
        static load3Ds(urls) {
            return __awaiter(this, void 0, void 0, function* () {
                let awaiters = [];
                for (let url of urls) {
                    awaiters.push(yield this.load3D(url));
                }
                return yield Promise.all(awaiters);
            });
        }
        static load3D(url, complete, progress, type, constructParams, propertyParams, priority, cache, isCompileShader = false) {
            return new Promise((resolve, reject) => {
                Laya.loader.create(url, Laya.Handler.create(this, function (obj) {
                    if (obj == undefined) {
                        reject("load failed " + url);
                    }
                    else {
                        if (complete) {
                            complete.runWith(obj);
                        }
                        resolve(obj);
                    }
                }), progress, type, constructParams, propertyParams, priority, cache);
            });
        }
        static loadPrefab(url) {
            return __awaiter(this, void 0, void 0, function* () {
                yield Resource.load(url);
                return this.getPrefab(url);
            });
        }
        static getPrefab(url) {
            const prefab = new Laya.Prefab();
            prefab.json = Laya.loader.getRes(url);
            return Laya.Pool.getItemByCreateFun(url, prefab.create, prefab);
        }
    }

    class Device {
        static setup() {
            if (this.isDev) {
                console.log("[device]systeminfo=", this.systemInfo);
            }
            let firstOpenItem = Laya.LocalStorage.getItem("firstOpen");
            if (firstOpenItem == null || firstOpenItem == "") {
                this.isFirstOpen = true;
                Laya.LocalStorage.setItem("firstOpen", "true");
            }
            let vibrate = Laya.LocalStorage.getItem("vibrate");
            if (vibrate) {
                let isVibrate = parseInt(vibrate) ? true : false;
                this.switch = { isVibrate };
            }
            else {
                this.switch = { isVibrate: true };
            }
            let quality = Laya.LocalStorage.getItem("quality");
            if (quality) {
                let isLowPerfByAuto = parseInt(quality) ? true : false;
                this._isLowPerfByAuto = isLowPerfByAuto;
            }
        }
        static get isVibrated() {
            return this.switch.isVibrate;
        }
        static setVibrated(isVibrate) {
            this.switch.isVibrate = isVibrate;
            Laya.LocalStorage.setItem("vibrate", isVibrate && "1" || "0");
        }
        static vibrateShort() {
            if (this.switch && this.switch.isVibrate) {
                if (Laya.Browser.onWeiXin) {
                }
            }
        }
        static get systemInfo() {
            if (this._systemInfo == null) {
                if (Laya.Browser.onWeiXin) {
                    this._systemInfo = wx.getSystemInfoSync();
                }
                else {
                    this._systemInfo = {
                        brand: "",
                        model: "",
                        pixelRatio: 0,
                        screenWidth: 0,
                        screenHeight: 0,
                        windowWidth: 0,
                        windowHeight: 0,
                        language: "",
                        version: "",
                        system: "",
                        platform: "",
                        fontSizeSetting: "",
                        SDKVersion: "",
                        benchmarkLevel: 0,
                        battery: 0,
                        wifiSignal: 0
                    };
                }
            }
            return this._systemInfo;
        }
        static get isDev() {
            let brand = this.systemInfo.brand;
            return brand == null || brand == "" || brand == "devtools";
        }
        static get isiOS() {
            return this.systemInfo.system.indexOf("iOS") != -1;
        }
        static get screenMode() {
            return Laya.stage.screenMode;
        }
        static get isLowOptDeviceByAuto() {
            if (this._isLowPerfByAuto == null) {
                let perf = 0;
                if (this.systemInfo.model == "") {
                    perf = 1;
                }
                else {
                    perf = cfg.devicePerf[this.systemInfo.model];
                }
                this._isLowPerfByAuto = perf == null || perf === 0;
                return this._isLowPerfByAuto;
            }
            else {
                return this._isLowPerfByAuto;
            }
        }
        static setQuality(value) {
            this._isLowPerfByAuto = value;
            Laya.LocalStorage.setItem("quality", value && "1" || "0");
        }
        static isBangsScreen() {
            if (this._isBangsScreen == null) {
                this._isBangsScreen = (Laya.stage.displayHeight / Laya.stage.displayWidth) >= 1.95;
            }
            return this._isBangsScreen;
        }
    }
    Device.isFirstOpen = false;
    Device._isBangsScreen = null;
    Device._isLowPerfByAuto = null;

    const AnimatorKey = {
        idle: "idle",
        run: "run",
        atk: "atk",
        ed: "ed",
        zuandi1: "zuandi1",
        zuandi2: "zuandi2",
    };
    var eSceneGridType;
    (function (eSceneGridType) {
        eSceneGridType[eSceneGridType["Walkable"] = 1] = "Walkable";
        eSceneGridType[eSceneGridType["Block"] = 2] = "Block";
        eSceneGridType[eSceneGridType["Water"] = 3] = "Water";
        eSceneGridType[eSceneGridType["Spikeweed"] = 4] = "Spikeweed";
        eSceneGridType[eSceneGridType["Gate"] = 5] = "Gate";
        eSceneGridType[eSceneGridType["Edge"] = 6] = "Edge";
    })(eSceneGridType || (eSceneGridType = {}));
    var BuffType;
    (function (BuffType) {
        BuffType[BuffType["attr"] = 0] = "attr";
        BuffType[BuffType["relive"] = 1] = "relive";
        BuffType[BuffType["enemyBulletSlowDown"] = 2] = "enemyBulletSlowDown";
        BuffType[BuffType["selfbulletSpeedUp"] = 3] = "selfbulletSpeedUp";
        BuffType[BuffType["lowHpAngry"] = 4] = "lowHpAngry";
        BuffType[BuffType["lowHPCrazy"] = 5] = "lowHPCrazy";
        BuffType[BuffType["killRecoverHP"] = 6] = "killRecoverHP";
        BuffType[BuffType["fireBullet"] = 7] = "fireBullet";
        BuffType[BuffType["freezeBullet"] = 8] = "freezeBullet";
        BuffType[BuffType["addForwardBullet"] = 9] = "addForwardBullet";
        BuffType[BuffType["addSideBullet"] = 10] = "addSideBullet";
        BuffType[BuffType["bulletStrike"] = 11] = "bulletStrike";
        BuffType[BuffType["bulletPingpong"] = 12] = "bulletPingpong";
        BuffType[BuffType["bulletJump"] = 13] = "bulletJump";
        BuffType[BuffType["health"] = 14] = "health";
        BuffType[BuffType["poisonBullet"] = 15] = "poisonBullet";
        BuffType[BuffType["hitRecoverHP"] = 16] = "hitRecoverHP";
        BuffType[BuffType["strike"] = 17] = "strike";
        BuffType[BuffType["bulletMulti"] = 18] = "bulletMulti";
        BuffType[BuffType["healthUp"] = 19] = "healthUp";
        BuffType[BuffType["shield"] = 21] = "shield";
        BuffType[BuffType["autoMissile"] = 22] = "autoMissile";
        BuffType[BuffType["autoLandmines"] = 23] = "autoLandmines";
        BuffType[BuffType["addBackward"] = 24] = "addBackward";
        BuffType[BuffType["addSide2Bullet"] = 25] = "addSide2Bullet";
        BuffType[BuffType["instantKill"] = 26] = "instantKill";
        BuffType[BuffType["deathBomb"] = 27] = "deathBomb";
        BuffType[BuffType["deathFreeze"] = 28] = "deathFreeze";
        BuffType[BuffType["rage"] = 99] = "rage";
    })(BuffType || (BuffType = {}));
    const attrTypeStr = {
        exp: "exp",
        crit: "crit",
        hpMax: "hpMax",
        atk: "atk",
        atkSpeed: "atkSpeed",
        moveSpeed: "moveSpeed"
    };
    var CharacterType;
    (function (CharacterType) {
        CharacterType[CharacterType["role"] = 0] = "role";
        CharacterType[CharacterType["monster"] = 1] = "monster";
        CharacterType[CharacterType["bonusMonster"] = 2] = "bonusMonster";
        CharacterType[CharacterType["pet"] = 3] = "pet";
    })(CharacterType || (CharacterType = {}));
    var BuffScene;
    (function (BuffScene) {
        BuffScene[BuffScene["levelUpScene"] = 0] = "levelUpScene";
        BuffScene[BuffScene["refitScene"] = 1] = "refitScene";
        BuffScene[BuffScene["evilScene"] = 2] = "evilScene";
        BuffScene[BuffScene["tigerScene"] = 3] = "tigerScene";
    })(BuffScene || (BuffScene = {}));
    var eStageBonusType;
    (function (eStageBonusType) {
        eStageBonusType[eStageBonusType["ModFab"] = 1] = "ModFab";
        eStageBonusType[eStageBonusType["EvilChip"] = 2] = "EvilChip";
        eStageBonusType[eStageBonusType["Slot"] = 3] = "Slot";
        eStageBonusType[eStageBonusType["Slot_1"] = 4] = "Slot_1";
    })(eStageBonusType || (eStageBonusType = {}));
    var AIMoveType;
    (function (AIMoveType) {
        AIMoveType[AIMoveType["none"] = 0] = "none";
        AIMoveType[AIMoveType["random"] = 1] = "random";
        AIMoveType[AIMoveType["traceRole"] = 2] = "traceRole";
        AIMoveType[AIMoveType["rebound"] = 3] = "rebound";
        AIMoveType[AIMoveType["burrow"] = 4] = "burrow";
    })(AIMoveType || (AIMoveType = {}));
    var eSceneItemType;
    (function (eSceneItemType) {
        eSceneItemType[eSceneItemType["XP"] = 0] = "XP";
        eSceneItemType[eSceneItemType["GOLD"] = 1] = "GOLD";
        eSceneItemType[eSceneItemType["ITEM"] = 2] = "ITEM";
    })(eSceneItemType || (eSceneItemType = {}));
    var BeAtkType;
    (function (BeAtkType) {
        BeAtkType[BeAtkType["normal"] = 0] = "normal";
        BeAtkType[BeAtkType["crit"] = 1] = "crit";
        BeAtkType[BeAtkType["getHP"] = 2] = "getHP";
        BeAtkType[BeAtkType["miss"] = 3] = "miss";
    })(BeAtkType || (BeAtkType = {}));
    var eSkillType;
    (function (eSkillType) {
        eSkillType[eSkillType["JumpAtk"] = 1] = "JumpAtk";
        eSkillType[eSkillType["Rush"] = 2] = "Rush";
        eSkillType[eSkillType["Thunder"] = 3] = "Thunder";
        eSkillType[eSkillType["Split"] = 4] = "Split";
        eSkillType[eSkillType["EulerRotateY"] = 5] = "EulerRotateY";
        eSkillType[eSkillType["Summon"] = 6] = "Summon";
    })(eSkillType || (eSkillType = {}));
    var eEarlyWarningType;
    (function (eEarlyWarningType) {
        eEarlyWarningType[eEarlyWarningType["Circle"] = 1] = "Circle";
        eEarlyWarningType[eEarlyWarningType["Line"] = 2] = "Line";
        eEarlyWarningType[eEarlyWarningType["ReflectLine"] = 3] = "ReflectLine";
        eEarlyWarningType[eEarlyWarningType["Laser"] = 4] = "Laser";
    })(eEarlyWarningType || (eEarlyWarningType = {}));
    var FaceType;
    (function (FaceType) {
        FaceType[FaceType["forward"] = 0] = "forward";
        FaceType[FaceType["followTarget"] = 1] = "followTarget";
        FaceType[FaceType["target"] = 2] = "target";
        FaceType[FaceType["random"] = 3] = "random";
    })(FaceType || (FaceType = {}));
    var TipsScene;
    (function (TipsScene) {
        TipsScene[TipsScene["hint"] = 1] = "hint";
        TipsScene[TipsScene["notEnergy"] = 2] = "notEnergy";
        TipsScene[TipsScene["notGold"] = 3] = "notGold";
        TipsScene[TipsScene["notDiamond"] = 4] = "notDiamond";
    })(TipsScene || (TipsScene = {}));
    const RenderQueue = {
        ground: 3000,
        shadow: 3001,
        selectEffect: 3002,
        obj: 3500
    };
    var TaskType;
    (function (TaskType) {
        TaskType[TaskType["mainTask"] = 1] = "mainTask";
        TaskType[TaskType["everyDayTask"] = 2] = "everyDayTask";
    })(TaskType || (TaskType = {}));
    var TaskTargetType;
    (function (TaskTargetType) {
        TaskTargetType[TaskTargetType["passChap"] = 1] = "passChap";
        TaskTargetType[TaskTargetType["tankUpgrade"] = 2] = "tankUpgrade";
        TaskTargetType[TaskTargetType["wipeMonster"] = 3] = "wipeMonster";
        TaskTargetType[TaskTargetType["battleNum"] = 4] = "battleNum";
    })(TaskTargetType || (TaskTargetType = {}));
    var eHPBarDisplayType;
    (function (eHPBarDisplayType) {
        eHPBarDisplayType[eHPBarDisplayType["Normal"] = 0] = "Normal";
        eHPBarDisplayType[eHPBarDisplayType["Boss"] = 1] = "Boss";
        eHPBarDisplayType[eHPBarDisplayType["BossButShow"] = 2] = "BossButShow";
    })(eHPBarDisplayType || (eHPBarDisplayType = {}));
    var eAttrBonus;
    (function (eAttrBonus) {
        eAttrBonus["HpMax"] = "hpMax";
        eAttrBonus["Hp"] = "hp";
        eAttrBonus["Atk"] = "atk";
        eAttrBonus["ASpd"] = "aSpd";
        eAttrBonus["Crit"] = "crit";
        eAttrBonus["CritDmg"] = "critDmgScale";
        eAttrBonus["DmgReduceByPercent"] = "dmgReduceByPercent";
        eAttrBonus["DmgReduceByValue"] = "dmgReduceByValue";
        eAttrBonus["ContactDmgReduce"] = "contactDmgReduce";
        eAttrBonus["BulletDmgReduce"] = "bulletDmgReduce";
        eAttrBonus["Avoidance"] = "avoidance";
        eAttrBonus["XPRecAddition"] = "XPRecAddition";
        eAttrBonus["PetAtk"] = "petAtk";
        eAttrBonus["PetCrit"] = "petCrit";
        eAttrBonus["PetCritDmg"] = "petCritDmg";
    })(eAttrBonus || (eAttrBonus = {}));
    var eDmgSrc;
    (function (eDmgSrc) {
        eDmgSrc[eDmgSrc["Contact"] = 1] = "Contact";
        eDmgSrc[eDmgSrc["Bullet"] = 2] = "Bullet";
    })(eDmgSrc || (eDmgSrc = {}));
    var eItemType;
    (function (eItemType) {
        eItemType[eItemType["Number"] = 1] = "Number";
        eItemType[eItemType["Equip"] = 2] = "Equip";
        eItemType[eItemType["Scroll"] = 3] = "Scroll";
    })(eItemType || (eItemType = {}));
    const GoldItemID = 1;
    const DiamondItemID = 2;
    const PowerItemID = 3;

    var SceneType;
    (function (SceneType) {
        SceneType[SceneType["twod"] = 0] = "twod";
        SceneType[SceneType["threed"] = 1] = "threed";
    })(SceneType || (SceneType = {}));
    var SceneProgress;
    (function (SceneProgress) {
        SceneProgress[SceneProgress["start"] = 0] = "start";
        SceneProgress[SceneProgress["clear"] = 1] = "clear";
        SceneProgress[SceneProgress["downloading"] = 2] = "downloading";
        SceneProgress[SceneProgress["loading"] = 3] = "loading";
        SceneProgress[SceneProgress["preload"] = 4] = "preload";
        SceneProgress[SceneProgress["done"] = 5] = "done";
    })(SceneProgress || (SceneProgress = {}));
    class SceneManager {
        static setup() {
            this._root = new Laya.Sprite();
            this._root.name = "scene manager";
            this._root.zOrder = 0;
            Laya.stage.addChild(this._root);
            EffectManager.setup();
        }
        static handleProgress(handler) {
            this.progressHandler = handler;
        }
        static open(url, clas, type, preloads, isComplieShader = false, args) {
            return __awaiter(this, void 0, void 0, function* () {
                if (this.progressHandler) {
                    this.progressHandler.runWith(SceneProgress.start);
                }
                if (this.progressHandler) {
                    this.progressHandler.runWith(SceneProgress.clear);
                }
                Timer.manualClearAll();
                Pool.clear();
                ViewManagerLY.clear();
                if (this.curScene != null) {
                    this.curScene.owner.destroy();
                    this.curScene = null;
                }
                Laya.Scene.gc();
                try {
                    let scene = null;
                    if (type == SceneType.threed) {
                        if (url == null) {
                            scene = new Laya.Scene3D();
                        }
                        else {
                            scene = (yield Resource.load3D(url));
                        }
                    }
                    else {
                        if (url == null) {
                            scene = new Laya.Scene();
                        }
                        else {
                            scene = yield Resource.load(url);
                        }
                    }
                    if (scene == null) {
                        throw "load scene failed, url=" + url;
                    }
                    let baseScene = new clas(args);
                    scene.addComponentIntance(baseScene);
                    baseScene.sceneNode = scene;
                    this._root.addChild(scene);
                    this.curScene = baseScene;
                    if (preloads) {
                        let loadedCount = 0;
                        for (let url of preloads) {
                            try {
                                yield Resource.load3D(url, null, null, null, null, null, 0, true, isComplieShader);
                            }
                            catch (err) {
                                console.error("[scene] load asset failed, error: ", err);
                            }
                            loadedCount++;
                            if (this.progressHandler) {
                                this.progressHandler.runWith([SceneProgress.preload, loadedCount / preloads.length]);
                            }
                        }
                    }
                    if (this.progressHandler) {
                        this.progressHandler.runWith(SceneProgress.done);
                    }
                    return baseScene;
                }
                catch (e) {
                    console.error("[scene]load faield", e);
                    if (this.progressHandler) {
                        this.progressHandler.runWith(SceneProgress.done);
                    }
                    throw e;
                }
            });
        }
    }

    class MathUtils {
        static vecRad(vecA, vecB, isCheckNegative = false, isRad = true) {
            let dotV = Laya.Vector3.dot(vecA, vecB);
            let rad = Math.acos(dotV / (Laya.Vector3.scalarLength(vecA) * Laya.Vector3.scalarLength(vecB)));
            if (isRad) {
                return rad;
            }
            else {
                return this.radinToAgnle(rad);
            }
        }
        static angleToRandin(angle) {
            return angle / (180 / Math.PI);
        }
        static radinToAgnle(rad) {
            return rad * (180 / Math.PI);
        }
        static setSeed(seed) {
            this._seed = seed;
            console.warn("[math] set seed ", seed);
        }
        static random() {
            if (this._seed == null) {
                this.setSeed(Laya.Browser.now());
            }
            this._seed = (this._seed * 9301 + 49297) % 233280;
            return this._seed / 233280.0;
        }
        static randomWithLimit(min, max = null) {
            if (max == null) {
                max = min;
                min = 0;
            }
            return min + MathUtils.random() * (max - min);
        }
        static randomN(min, max = null) {
            if (max == null) {
                max = min;
                min = 0;
            }
            return min + Math.floor(MathUtils.random() * (max - min + 1));
        }
        static randomWeight(arr) {
            let totalW = 0;
            for (let item of arr) {
                totalW += item[1];
            }
            for (let item of arr) {
                let itemW = item[1];
                if (this.random() < itemW / totalW) {
                    return item[0];
                }
                totalW -= itemW;
            }
        }
        static bubbleSortArray(array, compareFunction) {
            let len = array.length;
            for (let i = 0; i < len; i++) {
                for (let j = 0; j < len - 1 - i; j++) {
                    let a = array[j];
                    let b = array[j + 1];
                    let compareRet = compareFunction(a, b);
                    if (compareRet > 0) {
                        array[j] = b;
                        array[j + 1] = a;
                    }
                }
            }
        }
        static lineLine(a1, a2, b1, b2) {
            var ua_t = (b2.x - b1.x) * (a1.y - b1.y) - (b2.y - b1.y) * (a1.x - b1.x);
            var ub_t = (a2.x - a1.x) * (a1.y - b1.y) - (a2.y - a1.y) * (a1.x - b1.x);
            var u_b = (b2.y - b1.y) * (a2.x - a1.x) - (b2.x - b1.x) * (a2.y - a1.y);
            if (u_b !== 0) {
                var ua = ua_t / u_b;
                var ub = ub_t / u_b;
                if (0 <= ua && ua <= 1 && 0 <= ub && ub <= 1) {
                    return true;
                }
            }
            return false;
        }
        static linelineIntersection(a1, a2, b1, b2) {
            let temp1 = (a2.y - a1.y) * a1.x + (a1.x - a2.x) * a1.y;
            let temp2 = (b2.y - b1.y) * b1.x + (b1.x - b2.x) * b1.y;
            let D = (a2.x - a1.x) * (b2.y - b1.y) - (b2.x - b1.x) * (a2.y - a1.y);
            let D1 = temp2 * (a2.x - a1.x) - temp1 * (b2.x - b1.x);
            let D2 = temp2 * (a2.y - a1.y) - temp1 * (b2.y - b1.y);
            return new Laya.Vector2(D1 / D, D2 / D);
        }
        static pointLineDistance(srcpx, srcpy, px, py, v2x, v2y) {
            let dx = v2x;
            let dy = v2y;
            let t = ((px - srcpx) * dx + (py - srcpy) * dy);
            let tempV2x = srcpx + t * dx;
            let tempV2y = srcpy + t * dy;
            dx = px - tempV2x;
            dy = py - tempV2y;
            return Math.sqrt(dx * dx + dy * dy);
        }
    }

    const gVec3 = new Laya.Vector3();
    const gVec4 = new Laya.Vector4();
    const gVec2 = new Laya.Vector2();
    const gQuat = new Laya.Quaternion();
    const gEvent = new Laya.EventDispatcher();
    const gPoint = new Laya.Point();
    const gUp = new Laya.Vector3(0, 1, 0);
    const gRight = new Laya.Vector3(1, 0, 0);
    const gForward = new Laya.Vector3(0, 0, 1);
    const gZero = new Laya.Vector3(0, 0, 0);
    const gForwardLH = new Laya.Vector3(Laya.ConchVector3.ForwardLH.x, Laya.ConchVector3.ForwardLH.y, Laya.ConchVector3.ForwardLH.z);

    const getType = (value) => toString.call(value);
    const isNumber = (value) => value && typeof value === "number" && !isNaN(value);
    const isArray = (value) => value && Array.isArray(value);
    const isString = (value) => value && typeof value === "string";
    const isObject = (value) => value && getType(value) === "[object Object]";
    const isArrayOfString = (value) => value && isArray(value) && !value.map((val) => isString(val)).includes(false);
    const isArrayOfObject = (value) => value && isArray(value) && !value.map((val) => isObject).includes(false);
    const isDefined = (value) => value !== undefined;
    const isOneOf = (value, options) => isArray(options) ? options.includes(value) : false;

    class Base64 {
        static getLength(string) {
            let p = string.length;
            if (!p) {
                return 0;
            }
            let n = 0;
            while (--p % 4 > 1 && string.charAt(p) === "=") {
                ++n;
            }
            return Math.ceil(string.length * 3) / 4 - n;
        }
        static encode(buffer, start, end) {
            let parts = null;
            const chunk = [];
            let i = 0;
            let j = 0;
            let t;
            while (start < end) {
                const b = buffer.charCodeAt(start++);
                switch (j) {
                    case 0:
                        chunk[i++] = this.b64[b >> 2];
                        t = (b & 3) << 4;
                        j = 1;
                        break;
                    case 1:
                        chunk[i++] = this.b64[t | (b >> 4)];
                        t = (b & 15) << 2;
                        j = 2;
                        break;
                    case 2:
                        chunk[i++] = this.b64[t | (b >> 6)];
                        chunk[i++] = this.b64[b & 63];
                        j = 0;
                        break;
                }
                if (i > 8191) {
                    (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
                    i = 0;
                }
            }
            if (j) {
                chunk[i++] = this.b64[t];
                chunk[i++] = 61;
                if (j === 1) {
                    chunk[i++] = 61;
                }
            }
            if (parts) {
                if (i) {
                    parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
                }
                return parts.join("");
            }
            return String.fromCharCode.apply(String, chunk.slice(0, i));
        }
        static decode(string, buffer, offset) {
            const start = offset;
            let j = 0;
            let t;
            for (let i = 0; i < string.length;) {
                let c = string.charCodeAt(i++);
                if (c === 61 && j > 1) {
                    break;
                }
                if ((c = this.s64[c]) === undefined) {
                    throw Error("invalid encoding");
                }
                switch (j) {
                    case 0:
                        t = c;
                        j = 1;
                        break;
                    case 1:
                        buffer[offset++] = (t << 2) | ((c & 48) >> 4);
                        t = c;
                        j = 2;
                        break;
                    case 2:
                        buffer[offset++] = ((t & 15) << 4) | ((c & 60) >> 2);
                        t = c;
                        j = 3;
                        break;
                    case 3:
                        buffer[offset++] = ((t & 3) << 6) | c;
                        j = 0;
                        break;
                }
            }
            if (j === 1) {
                throw Error("invalid encoding");
            }
            return offset - start;
        }
        static decodeToBuffer(string, offset) {
            if (offset > 0) {
                string = string.slice(offset);
            }
            const buffer = new Uint8Array(this.getLength(string));
            this.decode(string, buffer, 0);
            return buffer;
        }
        static test(string) {
            return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(string);
        }
    }
    Base64.s64 = [];
    Base64.b64 = [];
    const s64 = Base64.s64;
    const b64 = Base64.b64;
    for (let i = 0; i < 64;) {
        s64[(b64[i] = i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : (i - 59) | 43)] = i++;
    }

    class Utils {
        static numPrefix(num, length) {
            return (Array(length).join("0") + num).slice(-length);
        }
        static strFormat(str, args) {
            if (arguments.length > 0) {
                if (arguments.length == 1 && typeof args == "object") {
                    for (const key in args) {
                        if (args[key] != undefined) {
                            const reg = new RegExp("({" + key + "})", "g");
                            str = str.replace(reg, args[key]);
                        }
                    }
                }
                else {
                    for (let i = 0; i < arguments.length; i++) {
                        if (arguments[i] != undefined) {
                            const reg = new RegExp("({)" + i + "(})", "g");
                            str = str.replace(reg, arguments[i]);
                        }
                    }
                }
            }
            return str;
        }
        static strLen(str) {
            let ret = 0;
            for (let i = 0; i < this.length; i++) {
                const c = str.charCodeAt(i);
                if (c >= 0 && c <= 128) {
                    ret++;
                }
                else {
                    ret += 2;
                }
            }
            return ret;
        }
        static adaptString(origin, length = 8) {
            let currentLength = 0;
            let ret = "";
            for (let i of origin) {
                const isChinese = i.match(/[\u4e00-\u9fa5]/);
                if (isChinese) {
                    currentLength += 2;
                }
                else {
                    currentLength += 1;
                }
                ret += i;
                if (currentLength >= length) {
                    break;
                }
            }
            if (ret != origin) {
                ret += "...";
            }
            return ret;
        }
        static strVersionCompare(v1, v2) {
            const v1Arr = v1.split(".");
            const v2Arr = v2.split(".");
            const len = Math.max(v1Arr.length, v2Arr.length);
            for (let i = 0, cnt = len - v1Arr.length; i < cnt; i++) {
                v1Arr.push("0");
            }
            for (let i = 0, cnt = len - v2Arr.length; i < cnt; i++) {
                v2Arr.push("0");
            }
            for (let i = 0; i < len; i++) {
                const num1 = parseInt(v1Arr[i]);
                const num2 = parseInt(v2Arr[i]);
                if (num1 > num2) {
                    return 1;
                }
                else if (num1 < num2) {
                    return -1;
                }
            }
            return 0;
        }
        static isSameDay(oldTime, newTime) {
            const oldDate = new Date(oldTime);
            const oldY = oldDate.getFullYear();
            const oldM = oldDate.getMonth() + 1;
            const oldD = oldDate.getDate();
            const newDate = new Date(newTime);
            const newY = newDate.getFullYear();
            const newM = newDate.getMonth() + 1;
            const newD = newDate.getDate();
            if (newY != oldY || newM != oldM || newD != oldD) {
                return false;
            }
            return true;
        }
        static getJsonKey(data) {
            const keys = [];
            for (const key in data) {
                keys.push(key);
            }
            return keys;
        }
        static getJsonValue(data) {
            const values = [];
            for (const key in data) {
                values.push(data[key]);
            }
            return values;
        }
        static formatTime(remainMs) {
            const second = this.numPrefix(Math.floor(remainMs / 1000) % 60, 2);
            const minute = this.numPrefix(Math.floor(remainMs / 1000 / 60) % 60, 2);
            const hour = this.numPrefix(Math.floor(remainMs / 1000 / 60 / 60), 2);
            return hour + ":" + minute + ":" + second;
        }
        static randomN(min, max = null) {
            if (max == null) {
                max = min;
                min = 0;
            }
            return min + Math.floor(Math.random() * (max - min + 1));
        }
        static isEmptyObject(obj) {
            return !obj || (isObject(obj) && JSON.stringify(obj) === "{}");
        }
        static toWXCoordinateFromNode(node) {
            Utils.tempPoint1.x = 0;
            Utils.tempPoint2.x = 0;
            const globalP = node.localToGlobal(Utils.tempPoint1);
            const globalX = globalP.x;
            const globalY = globalP.y;
            const radio = (() => {
                if (GameConfig.scaleMode == "fixedheight") {
                    return Device.systemInfo.windowHeight / GameConfig.height;
                }
                else {
                    return Device.systemInfo.windowWidth / GameConfig.width;
                }
            })();
            return {
                x: (globalX * radio) << 0,
                y: (globalY * radio) << 0,
                width: (node.width * radio) << 0,
                height: (node.height * radio) << 0
            };
        }
        static binarySearch(list, item, compare) {
            if (list.length == 0)
                return null;
            if (list.length == 1) {
                return compare(list[0], item) == 0 ? list[0] : null;
            }
            else {
                const middleIndex = Math.floor(list.length / 2);
                const middle = list[middleIndex];
                const compareRet = compare(middle, item);
                if (compareRet == 0) {
                    return middle;
                }
                else if (compareRet == 1) {
                    return Utils.binarySearch(list.slice(0, middleIndex - 1), item, compare);
                }
                else {
                    return Utils.binarySearch(list.slice(middleIndex + 1), item, compare);
                }
            }
        }
        static unionArray(arr1, arr2, isEqual = (a, b) => {
            return a === b;
        }) {
            if (!arr1 || arr1.length == 0) {
                return arr2;
            }
            if (!arr2 || arr2.length == 0) {
                return arr1;
            }
            const tmp = arr1.slice();
            for (let index = 0; index < arr1.length || index < arr2.length; index++) {
                if (index < arr1.length && index < arr2.length) {
                    if (!isEqual(arr1[index], arr2[index])) {
                        tmp.push(arr2[index]);
                    }
                }
                else if (index < arr1.length) {
                }
                else if (index < arr2.length) {
                    tmp.push(arr2[index]);
                }
            }
            return tmp;
        }
        static matrixNextItem(cur, row, column, loop = false) {
            const next1D = cur.r * column + cur.c + 1;
            if (next1D >= row * column) {
                if (loop) {
                    return { r: 0, c: 0 };
                }
                else {
                    return null;
                }
            }
            else {
                return { r: Math.floor(next1D / column), c: next1D % column };
            }
        }
        static pointInRect(p, rect) {
            const minX = rect.x;
            const minY = rect.y;
            const maxX = rect.x + rect.width;
            const maxY = rect.y + rect.height;
            if (p.x >= minX && p.x < maxX && p.y >= minY && p.y < maxY) {
                return true;
            }
            return false;
        }
        static sumStringCode(str = '') {
            let len = str.length;
            let sum = 0;
            for (let index = 0; index < len; index++) {
                sum += str.charCodeAt(index);
            }
            return sum;
        }
        static getChilds(obj, clas, out) {
            if (out == null) {
                out = [];
            }
            if (obj instanceof clas ||
                obj instanceof Laya.SkinnedMeshSprite3D) {
                out.push(obj);
            }
            for (let i = 0, n = obj.numChildren; i < n; i++) {
                let child = obj.getChildAt(i);
                this.getChilds(child, clas, out);
            }
            return out;
        }
        static getChild(obj, path) {
            let paths = path.split("/");
            let node = obj;
            for (let str of paths) {
                node = node.getChildByName(str);
                if (node == null) {
                    return null;
                }
            }
            return node;
        }
        static getChildsByName(obj, name, out) {
            if (out == null) {
                out = [];
            }
            if (obj.name == name) {
                out.push(obj);
            }
            for (let i = 0, n = obj.numChildren; i < n; i++) {
                let child = obj.getChildAt(i);
                this.getChildsByName(child, name, out);
            }
            return out;
        }
        static disturbArr(arr) {
            for (let index = 0; index < arr.length; index++) {
                let rnd = Math.round(Math.random() * (arr.length - 1));
                if (rnd == index)
                    continue;
                let temp = arr[index];
                arr[index] = arr[rnd];
                arr[rnd] = temp;
            }
        }
        static randomChar(num) {
            let tempCharCode = "";
            for (let l = 0; l < num; l++) {
                tempCharCode += this.charCode[Math.floor(Math.random() * this.charCode.length)];
            }
            return tempCharCode;
        }
        static strAddChar(str, offset, charCount) {
            let tempCharCode = this.randomChar(charCount);
            let head = str.substr(0, offset);
            let tail = str.substr(offset, str.length);
            return head + tempCharCode + tail;
        }
        static strRemoveChar(str, offset, charCount) {
            let head = str.substr(0, offset);
            let tail = str.substr(offset + charCount, str.length);
            return head + tail;
        }
        static encodeBase64_salt(str, offset, charCount) {
            let temp = Base64.encode(str, 0, str.length);
            return this.strAddChar(temp, offset, charCount);
        }
        static decodeBase64_salt(str, offset, charCount) {
            let temp = this.strRemoveChar(str, offset, charCount);
            let buff = Base64.decodeToBuffer(temp, 0);
            return this.uint8ArrayToString(buff);
        }
        static encodeBase64WithSaltV2(data) {
            if (data) {
                data["salt"] = this.randomChar(8);
                const dataWithSalt = data;
                const str = encodeURIComponent(JSON.stringify(dataWithSalt));
                const base64str = Base64.encode(str, 0, str.length);
                return base64str.substr(0, 2) + this.randomChar(8) + base64str.substring(2);
            }
            return null;
        }
        static decodeBase64WithSaltV2(body) {
            const base64Str = body.substr(0, 2) + body.substring(10);
            const jsonstr = Base64.decodeToBuffer(base64Str, 0);
            const data = JSON.parse(decodeURIComponent(jsonstr.reduce((pre, value) => {
                pre += String.fromCharCode(value);
                return pre;
            }, "")));
            return data;
        }
        static uint8ArrayToString(u8a) {
            let temp = "";
            for (let i = 0; i < u8a.length; i++) {
                temp += String.fromCharCode(u8a[i]);
            }
            return temp;
        }
        static stringToByte(str) {
            var bytes = new Array();
            var len, c;
            len = str.length;
            for (var i = 0; i < len; i++) {
                c = str.charCodeAt(i);
                if (c >= 0x010000 && c <= 0x10FFFF) {
                    bytes.push(((c >> 18) & 0x07) | 0xF0);
                    bytes.push(((c >> 12) & 0x3F) | 0x80);
                    bytes.push(((c >> 6) & 0x3F) | 0x80);
                    bytes.push((c & 0x3F) | 0x80);
                }
                else if (c >= 0x000800 && c <= 0x00FFFF) {
                    bytes.push(((c >> 12) & 0x0F) | 0xE0);
                    bytes.push(((c >> 6) & 0x3F) | 0x80);
                    bytes.push((c & 0x3F) | 0x80);
                }
                else if (c >= 0x000080 && c <= 0x0007FF) {
                    bytes.push(((c >> 6) & 0x1F) | 0xC0);
                    bytes.push((c & 0x3F) | 0x80);
                }
                else {
                    bytes.push(c & 0xFF);
                }
            }
            return bytes;
        }
        static byteToString(arr) {
            if (typeof arr === 'string') {
                return arr;
            }
            var str = '', _arr = arr;
            for (var i = 0; i < _arr.length; i++) {
                var one = _arr[i].toString(2), v = one.match(/^1+?(?=0)/);
                if (v && one.length == 8) {
                    var bytesLength = v[0].length;
                    var store = _arr[i].toString(2).slice(7 - bytesLength);
                    for (var st = 1; st < bytesLength; st++) {
                        store += _arr[st + i].toString(2).slice(2);
                    }
                    str += String.fromCharCode(parseInt(store, 2));
                    i += bytesLength - 1;
                }
                else {
                    str += String.fromCharCode(_arr[i]);
                }
            }
            return str;
        }
        static numberTween_Int(startNum, targetNum, runTime_ms, callback, valve = 2) {
            if (runTime_ms == 0)
                return;
            if (Math.abs(startNum - targetNum) <= Math.abs(valve)) {
                callback(targetNum, true);
                return;
            }
            let curNum = Math.ceil(startNum);
            let interval = Math.abs(runTime_ms / (targetNum - startNum));
            let targetNumStep;
            if (interval >= 25) {
                targetNumStep = targetNum > 0 ? 1 : -1;
            }
            else {
                targetNumStep = targetNum > 0 ? 1 : -1;
                targetNumStep /= (interval / 25);
                targetNumStep = Math.floor(targetNumStep);
            }
            let numberTweenFunc = function () {
                curNum += targetNumStep;
                callback(curNum, false);
                if ((targetNum > 0 && curNum >= targetNum) || (targetNum <= 0 && curNum <= targetNum)) {
                    curNum = targetNum;
                    callback(curNum, true);
                    Laya.timer.clear(this, numberTweenFunc);
                }
            };
            Laya.timer.loop(interval, this, numberTweenFunc);
            return numberTweenFunc;
        }
        static clearNumberTween_Int(func) {
            if (func) {
                Laya.timer.clear(this, func);
            }
        }
        static flyItem2D(prefab, prefabCount, itemArr, startX, startY, endX, endY, duration_s, startOffsetRadius, parent, complete) {
            return __awaiter(this, void 0, void 0, function* () {
                if (prefabCount < 0 || prefab == "" || !itemArr)
                    return;
                for (let i = 0; i < prefabCount; i++) {
                    if (!itemArr[i]) {
                        itemArr[i] = yield Resource.loadPrefab(prefab);
                        parent.addChild(itemArr[i]);
                    }
                }
                for (let item of itemArr) {
                    let offsetX = Math.random() * startOffsetRadius + 10;
                    let offsetY = Math.random() * startOffsetRadius + 10;
                    let x = offsetX + startX;
                    let y = offsetY + startY;
                    item.x = x;
                    item.y = y;
                    item.visible = true;
                    Timer.once(Math.random() * 200, this, () => {
                        Laya.Tween.to(item, { x: item.x - 150 }, duration_s * 350, null);
                        Laya.Tween.to(item, { y: item.y + 100 }, duration_s * 350, null, Laya.Handler.create(item, () => {
                            Laya.Tween.to(item, { x: endX }, duration_s * 650, null);
                            Laya.Tween.to(item, { y: endY, ealpha: 0 }, duration_s * 650, Laya.Ease.quintIn, Laya.Handler.create(item, () => {
                                if (item) {
                                    item.visible = false;
                                    item.alpha = 1;
                                    complete && complete();
                                }
                            }));
                        }));
                    });
                }
            });
        }
        static GetTransformForward(transform) {
            var ret = new Laya.Vector3();
            transform.getForward(ret);
            return ret;
        }
        static GetTransformRight(transform) {
            var ret = new Laya.Vector3();
            transform.getRight(ret);
            return ret;
        }
    }
    Utils.tempPoint1 = new Laya.Point();
    Utils.tempPoint2 = new Laya.Point();
    Utils.charCode = "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";

    class BaseSprite3D extends Laya.Sprite3D {
        constructor(isPvp = false) {
            super();
            this._shouldLookDown = true;
            this._isFixPos = false;
            this._isStrike = false;
            this._pos = this.transform.position.clone();
            this._rot = this.transform.rotation.clone();
            this._manualComponents = [];
            this.isMoving = false;
            this.modelRadius = 0.5;
        }
        set destination(value) {
            if (value != null) {
                value = this.fixNearestPos(value);
            }
            this._destination = value;
        }
        get destination() {
            return this._destination;
        }
        translateTo(pos, translateDuration, ySpeed, shouldLookDown, complete) {
            let destination = pos.clone();
            let dis = Laya.Vector3.distance(destination, this.position);
            if (dis < 0.1) {
                return;
            }
            (shouldLookDown == null) && (shouldLookDown = 1);
            this.destination = destination;
            if (this.isMoving == false) {
                this.isMoving = true;
                this.onMoveStart();
            }
            this._moveComplete = complete;
            this._shouldLookDown = shouldLookDown ? true : false;
            this._translateDuration = translateDuration;
            this._translateDurationSum = translateDuration;
            Laya.Vector3.subtract(destination, this.position, gVec3);
            gVec3.y = 0;
            Laya.Vector3.normalize(gVec3, gVec3);
            this._translateSpd = dis / translateDuration;
            Laya.Vector3.scale(gVec3, this._translateSpd, gVec3);
            this._translateSpdV3 = gVec3.clone();
            if (ySpeed != null) {
                this._translateSpdV3.y = ySpeed;
                this._translateYSpd = ySpeed;
                let deltaY = this.position.y;
                this._yASpeed = -(2 * ySpeed * translateDuration + 2 * deltaY) / (translateDuration * translateDuration);
            }
        }
        rotateTo(pos, rotateDuration) {
            (rotateDuration == null) && (rotateDuration = 0);
            this._rotateDuration = rotateDuration;
            if (rotateDuration == null || rotateDuration <= 0) {
                this.lookAt(pos.clone());
                this._targetEulerY = null;
                this._rotateSpd = 0;
            }
            else {
                Laya.Quaternion.lookAt(this.position, pos, gUp, gQuat);
                gQuat.invert(gQuat);
                gQuat.getYawPitchRoll(gVec3);
                let localRotationEulerY = MathUtils.radinToAgnle(gVec3.x) % 360;
                this._targetEulerY = localRotationEulerY;
                let deltaY = (localRotationEulerY - this.rotationEuler.y) % 360;
                if (Math.abs(deltaY) > 180) {
                    if (deltaY > 0) {
                        this.rotationEuler.y += 360;
                    }
                    else {
                        this.rotationEuler.y -= 360;
                    }
                }
                this._rotateSpd = (localRotationEulerY - this.rotationEuler.y) / rotateDuration;
            }
        }
        moveTo(pos, translateDuration, rotateDuration, ySpeed, shouldLookDown, complete) {
            this.translateTo(pos, translateDuration, ySpeed, shouldLookDown, complete);
            if (this.destination != null && !(this.destination.x == this.position.x && this.destination.z == this.position.z)) {
                this.rotateTo(this.destination, rotateDuration);
            }
        }
        stopMove() {
            if (this.isMoving == false) {
                return;
            }
            this.isMoving = false;
            this.destination = null;
            this._destinationTarget = null;
            this._targetEulerY = null;
            this.onMoveEnd();
            if (this._moveComplete) {
                this._moveComplete.run();
            }
        }
        moveToTarget(tf, translateDuration, rotateDuration = 300, complete) {
            if (this.isMoving == false) {
                this.isMoving = true;
                this.onMoveStart();
            }
            this._destinationTarget = tf;
            this._destinationSrcPos = this.position;
            this._translateDuration = translateDuration;
            this._translateDurationSum = translateDuration;
            this._moveComplete = complete;
        }
        onMoveStart() { }
        onMoveEnd() { }
        onMoving() { }
        onRotateEnd() { }
        fixNearestPos(pos) {
            let deltas = [
                [-this.modelRadius, -this.modelRadius],
                [-this.modelRadius, this.modelRadius],
                [this.modelRadius, -this.modelRadius],
                [this.modelRadius, this.modelRadius],
            ];
            let dstPos = pos.clone();
            for (let i = 0; i < 4; i++) {
                let anchordPos = dstPos.clone();
                let delta = deltas[i];
                anchordPos.x += delta[0];
                anchordPos.z += delta[1];
                let isFixed = mm.fight.scene.getNearestPoint(anchordPos, this.position, this, anchordPos);
                if (isFixed) {
                    anchordPos.x -= delta[0];
                    anchordPos.z -= delta[1];
                    dstPos = anchordPos;
                }
            }
            return dstPos;
        }
        moveUpdate(deltaMs) {
            if (this.transform == null) {
                return;
            }
            if (this._targetEulerY != null) {
                this.rotationEuler.y += this._rotateSpd * deltaMs;
                this._rotateDuration -= deltaMs;
                if (this._rotateDuration <= 0) {
                    this.rotationEuler.y = this._targetEulerY;
                    this._targetEulerY = null;
                    this.onRotateEnd();
                }
            }
            if (this.destination != null) {
                this._translateDuration -= deltaMs;
                if (this._translateDuration <= 0) {
                    this.position = this.destination.clone();
                    this._yASpeed = null;
                    this.stopMove();
                }
                else {
                    let forward = this.forward.clone();
                    forward.y = 0;
                    Laya.Vector3.normalize(forward, forward);
                    Laya.Vector3.scale(forward, this._translateSpd * deltaMs, gVec3);
                    if (this._yASpeed) {
                        if (this.position.y <= 0 && this._translateYSpd < 0) {
                            this._translateSpdV3.y = 0;
                            this._translateYSpd = 0;
                            this.position.y = 0;
                            gVec3.y = 0;
                        }
                        else {
                            let spd = this._yASpeed * deltaMs;
                            this._translateSpdV3.y += spd;
                            this._translateYSpd += spd;
                            gVec3.y = this._translateYSpd * deltaMs;
                        }
                    }
                    Laya.Vector3.add(this.position, gVec3, gVec3);
                    if (this._yASpeed && this._shouldLookDown) {
                        this.lookAt(gVec3);
                    }
                    if (this._isStrike) {
                        this.position = gVec3;
                    }
                    else if (!this._isFixPos) {
                        if (!this.ifWorldposWalkable(gVec3)) {
                            this.stopMove();
                            return;
                        }
                        this.position = gVec3;
                    }
                    else {
                        let fixedPos = this.fixNearestPos(gVec3);
                        if (this.ifWorldposWalkable(fixedPos)) {
                            this.position = fixedPos;
                        }
                    }
                    this.onMoving();
                }
            }
            else if (this._destinationTarget != null) {
                this._translateDuration -= deltaMs;
                if (this._translateDuration <= 0) {
                    this.position = this._destinationTarget.position.clone();
                    this.stopMove();
                }
                else {
                    Laya.Vector3.lerp(this._destinationSrcPos, this._destinationTarget.position, Math.min(1, (this._translateDurationSum - this._translateDuration) / this._translateDurationSum), gVec3);
                    this.position = gVec3.clone();
                    this.onMoving();
                }
            }
        }
        onUpdate(deltaMs) {
            this.moveUpdate(deltaMs);
            for (let i = this._manualComponents.length - 1; i >= 0; i--) {
                let component = this._manualComponents[i];
                if (component.destroyed) {
                    this._manualComponents.splice(i, 1);
                    continue;
                }
                component["onManualUpdate"](deltaMs);
            }
        }
        onLateUpdate(deltaMs) {
            if (this.transform == null) {
                return;
            }
            if (this._isPvp) {
                let spd = Math.min(1, deltaMs / 50);
                if (!Laya.Vector3.equals(this.transform.position, this._pos)) {
                    if (Laya.Vector3.distanceSquared(this.transform.position, this._pos) > 10) {
                        this.transform.position = this._pos.clone();
                    }
                    else {
                        Laya.Vector3.lerp(this.transform.position, this._pos, spd, gVec3);
                        this.transform.position = gVec3.clone();
                    }
                }
                if (!this.transform.rotation.equals(this._rot)) {
                    Laya.Quaternion.lerp(this.transform.rotation, this._rot, spd, gQuat);
                    this.transform.rotation = gQuat.clone();
                }
            }
        }
        addComponentIntance(inst) {
            super.addComponentIntance(inst);
            if (inst["onManualUpdate"] != null) {
                this._manualComponents.push(inst);
            }
        }
        addComponent(clas) {
            let inst = super.addComponent(clas);
            if (inst["onManualUpdate"] != null) {
                this._manualComponents.push(inst);
            }
            return inst;
        }
        setPosition(value, syncAtOnce = false) {
            if (syncAtOnce) {
                this.transform.position = value;
            }
            this.position = value;
        }
        set position(value) {
            if (this._isPvp) {
                this._pos = value.clone();
                if (Laya.Vector3.distanceSquared(this.transform.position, this._pos) > 4) {
                    this.transform.position = this._pos.clone();
                }
            }
            else {
                this.transform.position = value;
            }
        }
        get position() {
            if (this._isPvp) {
                return this._pos;
            }
            else {
                return this.transform.position;
            }
        }
        set rotation(value) {
            this.transform.rotation = value;
        }
        setRotation(value, syncAtOnce = false) {
            if (this._isPvp) {
                this._rot = value;
                if (syncAtOnce) {
                    this.transform.rotation = value;
                }
            }
            else {
                this.transform.rotation = value;
            }
        }
        lookAt(target) {
            target.cloneTo(gVec3);
            gVec3.y = this.transform.position.y;
            this.transform.lookAt(gVec3, gUp);
        }
        get rotation() {
            if (this._isPvp) {
                return this._rot;
            }
            else {
                return this.transform.rotation;
            }
        }
        get rotationEuler() {
            return this.transform.rotationEuler;
        }
        set rotationEuler(value) {
            if (this._isPvp) {
                Laya.Quaternion.createFromYawPitchRoll(MathUtils.angleToRandin(value.y), MathUtils.angleToRandin(value.x), MathUtils.angleToRandin(value.z), this._rot);
            }
            else {
                this.transform.rotationEuler = value;
            }
        }
        set rotationEulerY(value) {
            this.transform.localRotationEulerY = value;
        }
        get rotationEulerY() {
            if (this._isPvp) {
                return this.rotationEuler.y;
            }
            else {
                return this.transform.localRotationEulerY;
            }
        }
        get forward() {
            return Utils.GetTransformForward(this.transform);
        }
        ifGridWalkable(type) {
            return true;
        }
        ifWorldposWalkable(worldPos) {
            return true;
        }
    }

    class SinglePool {
        constructor(root, obj) {
            this.root = new Laya.Sprite();
            this.root.name = "single pool";
            root.addChild(this.root);
            this.originObj = obj;
            this.insts = [];
            this.hides = [];
            this.actives = [];
        }
        spawn(parent, pos, rot) {
            let inst;
            if (this.hides.length > 0) {
                inst = this.hides.shift();
            }
            else {
                inst = Laya.Sprite3D.instantiate(this.originObj, undefined, false);
                inst["_url"] = this.originObj.url;
                this.insts.push(inst);
                inst["pool"] = this;
            }
            if (inst.destroyed) {
                console.warn("inst destroyed");
                return;
            }
            if (parent) {
                if (parent.destroyed) {
                    console.warn("parent destroyed");
                    return;
                }
                parent.addChild(inst);
            }
            else {
                SceneManager.curScene.scene3D.addChild(inst);
            }
            if (pos) {
                if (inst instanceof BaseSprite3D) {
                    inst.setPosition(pos.clone(), true);
                }
                else {
                    inst.transform.position = pos.clone();
                }
            }
            else {
                inst.transform.localPosition = new Laya.Vector3();
            }
            if (rot) {
                if (inst instanceof BaseSprite3D) {
                    inst.setRotation(rot.clone(), true);
                }
                else {
                    inst.transform.rotation = rot.clone();
                }
            }
            else {
                inst.transform.localRotation = new Laya.Quaternion();
            }
            inst.active = true;
            this.actives.push(inst);
            return inst;
        }
        despawn(inst, destroyTime = 10000) {
            let index = this.actives.indexOf(inst);
            if (index == -1) {
                console.warn("[pool]despawn fail, not found");
                return;
            }
            inst.active = false;
            this.root.addChild(inst);
            if (destroyTime == -1) {
                inst["timeToDestroy"] = -1;
            }
            else {
                inst["timeToDestroy"] = Timer.curMs + destroyTime;
            }
            this.actives.splice(index, 1);
            this.hides.push(inst);
        }
        onUpdate(deltaMs) {
            let curMs = Timer.curMs;
            for (let i = this.hides.length - 1; i >= 0; i--) {
                let inst = this.hides[i];
                let timeToDestroy = inst["timeToDestroy"];
                if (timeToDestroy != -1 && timeToDestroy <= Timer.curMs) {
                    inst.destroy();
                    this.hides.splice(i, 1);
                    let index = this.insts.indexOf(inst);
                    if (index != -1) {
                        this.insts.splice(index, 1);
                    }
                }
            }
        }
        clear() {
            for (let inst of this.insts) {
                if (!inst.destroyed) {
                    inst.destroy();
                }
            }
            this.insts = [];
            this.actives = [];
            this.hides = [];
        }
    }
    class Pool {
        static setup() {
            this._root = new Laya.Sprite();
            this._root.name = "pool";
            this._root.zOrder = 0;
            this._prefabPool = {};
            this._pools = new Array();
            Laya.timer.frameLoop(1, Pool, Pool.onUpdate);
        }
        static loadPrefab(url, isCompileShader = false, bThrowErrMsg = false) {
            return __awaiter(this, void 0, void 0, function* () {
                if (this._prefabPool == null) {
                    throw "call pool.setup first";
                }
                let prefab = this._prefabPool[url];
                if (!prefab) {
                    try {
                        prefab = (yield Resource.load3D(url, undefined, undefined, undefined, undefined, undefined, undefined, undefined, isCompileShader));
                    }
                    catch (err) {
                        console.error(err);
                        if (bThrowErrMsg) {
                            throw (err);
                        }
                        return;
                    }
                    this._prefabPool[url] = prefab;
                }
                return prefab;
            });
        }
        static createObj(url, parent, pos, rot, isCompileShader = false) {
            return __awaiter(this, void 0, void 0, function* () {
                let prefab = yield this.loadPrefab(url, isCompileShader);
                let inst = Laya.Sprite3D.instantiate(prefab, parent, false, pos, rot);
                return inst;
            });
        }
        static preSpawn(url, num = 1, isCompileShader = false) {
            return __awaiter(this, void 0, void 0, function* () {
                let insts = [];
                insts.push(yield this.spawn(url, undefined, undefined, undefined, isCompileShader, true));
                let awaiters = [];
                for (let i = 0; i < num - 1; i++) {
                    awaiters.push(this.spawn(url, undefined, undefined, undefined, isCompileShader, true));
                }
                for (let asyncFunc of awaiters) {
                    insts.push(yield asyncFunc);
                }
                for (let inst of insts) {
                    this.despawn(inst, -1);
                }
            });
        }
        static preSpawns(urls, isCompileShader = false, progressHandler) {
            return __awaiter(this, void 0, void 0, function* () {
                let awaiters = [];
                let count = 0;
                let total = urls.length;
                for (let url of urls) {
                    let loaderFunc = () => __awaiter(this, void 0, void 0, function* () {
                        yield this.preSpawn(url.url, url.num, isCompileShader);
                        if (progressHandler) {
                            count++;
                            progressHandler.runWith([count, total]);
                        }
                    });
                    awaiters.push(loaderFunc());
                }
                for (let asyncFunc of awaiters) {
                    yield asyncFunc;
                }
            });
        }
        static spawn(url, parent, pos, rot, isCompileShader = false, bThrowErrMsg = false) {
            return __awaiter(this, void 0, void 0, function* () {
                let prefab = yield this.loadPrefab(url, isCompileShader, bThrowErrMsg);
                return this.spawnByObj(prefab, parent, pos, rot);
            });
        }
        static spawnByObj(obj, parent, pos, rot) {
            let pool = null;
            for (let v of this._pools) {
                if (v.originObj == obj) {
                    pool = v;
                    break;
                }
            }
            if (pool == null) {
                pool = new SinglePool(this._root, obj);
                this._pools.push(pool);
            }
            return pool.spawn(parent, pos, rot);
        }
        static despawn(inst, timeToDestroy = 5000) {
            if (!inst || inst.destroyed) {
                console.warn("[pool]despawn null or destroyed obj");
                return;
            }
            let pool = inst["pool"];
            if (pool == null) {
                console.warn("[pool]despawn failed, pool not exist ", inst["resUrl"]);
                return;
            }
            pool.despawn(inst, timeToDestroy);
        }
        static onUpdate(deltaMs) {
            for (let pool of this._pools) {
                pool.onUpdate(deltaMs);
            }
        }
        static clear() {
            if (this._pools == null) {
                return;
            }
            for (let pool of this._pools) {
                pool.clear();
            }
            this._pools = [];
            Object.keys(this._prefabPool).forEach(key => {
                const ins = this._prefabPool[key];
                console.log(`destroy ins url: ${ins.url}`);
                ins.destroy();
            });
            this._prefabPool = {};
        }
    }

    class EffectManager {
        static setup() {
            this.caches = new Array();
            this._spawnTime = 0;
            Timer.frameLoop(1, this, this.onUpdate);
        }
        static initHighLowPerfResTbl() {
            this._highLowPerfResTbl = {};
            for (let k in cfg.effect) {
                let effectCfg = cfg.effect[k];
                if (effectCfg.lPerfFileName) {
                    this._highLowPerfResTbl[CommonRes.obj3D(effectCfg.fileName)] = CommonRes.obj3D(effectCfg.lPerfFileName);
                }
            }
        }
        static convertToRealUrl(url) {
            if (!Device.isLowOptDeviceByAuto) {
                return url;
            }
            if (!this._highLowPerfResTbl) {
                this.initHighLowPerfResTbl();
            }
            if (this._highLowPerfResTbl[url]) {
                return this._highLowPerfResTbl[url];
            }
            else {
                return url;
            }
        }
        static spawn(url, parent, pos, rot, duration, isCheckSpawnTime = false) {
            return __awaiter(this, void 0, void 0, function* () {
                if (isCheckSpawnTime) {
                    if (Timer.curMs - this._spawnTime < 100) {
                        return;
                    }
                    this._spawnTime = Timer.curMs;
                }
                (duration == null) && (duration = 5000);
                url = this.convertToRealUrl(url);
                let obj = yield Pool.spawn(url, parent, pos, rot);
                if (!obj) {
                    console.warn("[effect] spawn failed");
                }
                else {
                    if (duration != -1) {
                        obj["timeToDestroy"] = Timer.curMs + duration;
                    }
                    this.caches.push(obj);
                }
                return obj;
            });
        }
        static despawn(inst) {
            let index = this.caches.indexOf(inst);
            if (index != -1) {
                Pool.despawn(inst);
                this.caches.splice(index, 1);
            }
        }
        static onUpdate() {
            for (let i = this.caches.length - 1; i >= 0; i--) {
                let obj = this.caches[i];
                let timeToDestroy = obj["timeToDestroy"];
                if (obj.destroyed ||
                    (timeToDestroy != null && timeToDestroy <= Timer.curMs)) {
                    Pool.despawn(obj);
                    this.caches.splice(i, 1);
                }
            }
        }
    }

    class PlatformBase {
        init(shareImgUrl) { }
        login() {
            return;
        }
        startRecord() { }
        stopRecord() { }
        shareRecordVideo() { return; }
        shareVideo() { return; }
        showBanner(id, width) { }
        hideBanner() { }
        showSplash() { }
        showRewardedVideo(id, listener) {
            if (listener) {
                listener({ isEnded: true });
            }
        }
        showVideoOrShare(videoID, shareKey) {
            return __awaiter(this, void 0, void 0, function* () {
                return new Promise((resolve, reject) => {
                    this.showRewardedVideo(videoID, (args) => {
                        if (args.isEnded)
                            resolve(1);
                        else
                            reject(0);
                    });
                });
            });
        }
        getSystemInfoSync() { }
        vibrateShort() { }
        report(event, arg) { }
        updateScore(score) { }
        showFriendRank() {
            return __awaiter(this, void 0, void 0, function* () { });
        }
    }

    class NetResponseType {
    }
    NetResponseType.text = "text";
    NetResponseType.json = "json";
    NetResponseType.xml = "xml";
    NetResponseType.arraybuffer = "arraybuffer";
    class NetMethod {
    }
    NetMethod.post = "post";
    NetMethod.get = "get";
    NetMethod.delete = "delete";
    NetMethod.patch = "patch";
    class Net {
        static setHttpDefaultKV(k, v) {
            if (this._httpDefaultKVs == null) {
                this._httpDefaultKVs = {};
            }
            console.log("[net]set http default kv = ", k, v);
            this._httpDefaultKVs[k] = v;
        }
        static setHeaders(k, v) {
            console.log("[net]set headers ", k, v);
            this._httpHeaders[k] = v;
        }
        static setBaseUrl(url) {
            console.log("[net]set base url ", url);
            this._baseUrl = url;
        }
        static httpDelete(url, body, responseType = NetResponseType.text, header, success, fail, baseUrl) {
            return this.http(NetMethod.delete, url, body, responseType, header, success, fail, baseUrl);
        }
        static httpPost(url, body, responseType = NetResponseType.text, header, success, fail, baseUrl) {
            if (body == null) {
                body = {};
            }
            return this.http(NetMethod.post, url, body, responseType, header, success, fail, baseUrl);
        }
        static httpGet(url, body, responseType = NetResponseType.text, header, success, fail, baseUrl) {
            return this.http(NetMethod.get, url, body, responseType, header, success, fail, baseUrl);
        }
        static genHeader(headers) {
            let _headers = [];
            if (headers) {
                let hasContentType = false;
                let hasAuthorization = false;
                for (var _key in headers) {
                    if (headers.hasOwnProperty(_key)) {
                        if (_key == "Content-Type") {
                            hasContentType = true;
                        }
                        if (_key == "Authorization") {
                            hasAuthorization = true;
                        }
                        _headers.push(_key);
                        _headers.push(headers[_key]);
                    }
                }
                if (!hasContentType) {
                    _headers.push("Content-Type");
                    _headers.push("application/json");
                }
                if (!hasAuthorization) {
                    _headers.push("Authorization");
                    _headers.push(this._httpHeaders["Authorization"]);
                }
            }
            else {
                _headers.push("Content-Type");
                _headers.push("application/json");
            }
            return _headers;
        }
        static http(method, url, body, responseType = NetResponseType.text, headers, success, fail, baseUrl) {
            if (this._httpDefaultKVs != null) {
                if (!body) {
                    body = {};
                }
                for (let k in this._httpDefaultKVs) {
                    let v = this._httpDefaultKVs[k];
                    if (body) {
                        body[k] = v;
                    }
                }
            }
            if (baseUrl) {
                url = baseUrl + "/" + url;
            }
            else if (this._baseUrl) {
                url = this._baseUrl + "/" + url;
            }
            if (!url.startsWith("http")) {
                url = "https://" + url;
            }
            let req = new Laya.HttpRequest();
            let _headers = this.genHeader(headers || this._httpHeaders);
            if (method == NetMethod.get || method == NetMethod.delete) {
                if (body) {
                    let count = 0;
                    for (var key in body) {
                        if (count == 0) {
                            if (url.indexOf("?") < 0) {
                                url += "?";
                            }
                        }
                        count++;
                        if (body.hasOwnProperty(key)) {
                            url += ("&" + key + "=" + body[key]);
                        }
                    }
                }
                req.send(url, null, method, responseType, _headers);
            }
            else {
                if (typeof (body) != "string")
                    body = JSON.stringify(body);
                req.send(url, body, method, responseType, _headers);
            }
            return new Promise((resolve, reject) => {
                req.once(Laya.Event.COMPLETE, req, function (res) {
                    if (success) {
                        success(res);
                    }
                    resolve(res);
                });
                req.once(Laya.Event.ERROR, req, function (err) {
                    console.error("[net] error, url=", url, "args=", body);
                    if (fail)
                        fail(err);
                    reject(err);
                });
            });
        }
    }
    Net._httpDefaultKVs = null;
    Net._httpHeaders = {};

    const ShareKeys = {
        power: "power",
        other: "other",
        revive: "revive",
        buff: "buff",
        gold: "gold",
        reward: "reward",
        doubleSign: "sign",
    };
    const SwitchKeys = {
        replay: "replay",
        power: "power",
        invite: "invite",
        lottery: "lottery",
        sign: "sign",
        tips: "tips",
        regular: "regular",
    };
    const AppInfo = {
        GameVersion: "1.3.1",
        appid: "tt016677db9e4c110d",
    };
    const TigerID = {
        relive_guessLike: "1033783"
    };
    const BannerID = {
        relive: "relive",
        fightEnd: "fightEnd",
        fight: "fight",
        sign: "sign",
    };
    const VideoID = {
        common: "common",
        relive: "relive",
        tiger: "tiger",
        levelUp: "levelUp",
        endReward: "endReward",
        getGold: "getGold",
        getPower: "getPower",
        doubleSign: "doubleSign",
        shop: "shop",
    };

    class PlatformTT extends PlatformBase {
        constructor() {
            super(...arguments);
            this.bannerId = "dp35apadogj1djjj12";
            this.vTipsId = "3bbml4l865g32g37g4";
            this.splashId = "j78f9cag042548gssc";
            this.VideoID = {
                common: "3bbml4l865g32g37g4",
                relive: "3bbml4l865g32g37g4",
                tiger: "3bbml4l865g32g37g4",
                levelUp: "3bbml4l865g32g37g4",
                endReward: "3bbml4l865g32g37g4",
                getGold: "3bbml4l865g32g37g4",
                getPower: "3bbml4l865g32g37g4",
                doubleSign: "3bbml4l865g32g37g4",
                shop: "3bbml4l865g32g37g4",
            };
            this._stopRecordCode = -1;
        }
        init(shareImgUrl) {
            tt.onShareAppMessage(() => {
                return {
                    title: 'X战役',
                    imageUrl: shareImgUrl,
                    query: '',
                    success() {
                        console.log('分享成功');
                    },
                    fail(e) {
                        console.log('分享失败', e);
                    }
                };
            });
        }
        login() {
            return new Promise((resolve, reject) => {
                tt.login({
                    force: true,
                    success(loginRes) {
                        Net.httpPost("toutiao/login", {
                            code: loginRes.code,
                            anonymous_code: loginRes.anonymousCode,
                            appid: AppInfo.appid,
                            ConfigVersion: null
                        }).then(sLoginRes => {
                            let ttLoginData = JSON.parse(sLoginRes);
                            if (ttLoginData.err) {
                                console.error("login failed");
                                reject(ttLoginData.err);
                            }
                            else {
                                tt["getUserInfo"]({
                                    success(userInfoRes) {
                                        let finalRes = userInfoRes.userInfo;
                                        finalRes.openid = ttLoginData.data.openid;
                                        finalRes.jwt = ttLoginData.data.jwt;
                                        finalRes.nid = ttLoginData.data.nid;
                                        resolve(finalRes);
                                    },
                                    fail(userInfoRes) {
                                        reject(userInfoRes);
                                    }
                                });
                            }
                        }).catch(sLoginRes => {
                            reject(sLoginRes);
                        });
                    },
                    fail(loginRes) {
                        console.log(`login 调用失败`);
                        reject(loginRes);
                    },
                });
            });
        }
        startRecord() {
            console.info("[record] start record");
            if (this._recorder != null) {
                console.warn("already recording or multi record");
                return;
            }
            this._recorder = tt.getGameRecorderManager();
            if (this._recorder == null) {
                console.warn("[recorder] record failed.");
                return;
            }
            this._recorder.onStart(() => {
                console.info("on start record");
                this._recordStartTime = Timer.curMs;
            });
            this._recorder.onStop(res => {
                console.info("on stop record");
                this._recordPath = res.videoPath;
                console.info("[record] on stop record, path=", this._recordPath);
                let recordPassSec = Math.floor((Timer.curMs - this._recordStartTime) / 1000);
                let clipDuration = 15;
                if (recordPassSec < clipDuration)
                    clipDuration = recordPassSec;
                if (clipDuration < 3) {
                    console.error("时间太短");
                    this._stopRecordCode = 1;
                }
                else {
                    this._recorder.clipVideo({
                        path: res.videoPath,
                        timeRange: [clipDuration, 0],
                        success: res => {
                            console.log("[record] success clip video " + res.videoPath + "," + clipDuration);
                        },
                        fail: e => {
                            console.error("[record] clip video failed, e=" + e);
                        }
                    });
                    this._stopRecordCode = 0;
                }
                this._recorder = null;
            });
            this._recorder.onError(res => {
                console.error("[record] error ", res.errMsg);
                this._stopRecordCode = 2;
                this._recorder = null;
            });
            this._recorder.start({
                duration: 300
            });
        }
        stopRecord() {
            console.info("[record] stop record");
            if (this._recorder == null) {
                console.warn("not recording, stop failed");
                return;
            }
            this._recorder.stop();
        }
        shareRecordVideo() {
            return new Promise((resolve, reject) => {
                console.info("[record] shareRecordVideo, sharepath=", this._recordPath);
                if (!this._recordPath) {
                    console.warn("share failed");
                    reject("no record");
                    return;
                }
                tt.shareVideo({
                    videoPath: `${this._recordPath}`,
                    success() {
                        console.log(`分享成功！`);
                        resolve("success");
                    },
                    fail(e) {
                        console.log(`分享失败！`);
                        reject(e);
                    }
                });
            });
        }
        hideBanner() {
            return;
            console.info("[platform] hide banner");
            if (!this._bannerAd) {
                console.warn("banner not show yet.");
                return;
            }
            this._bannerAd.hide();
        }
        showBanner(id, width) {
            return;
            console.info("[platform] show banner ", width);
            if (this._bannerAd != undefined) {
                console.warn("banner already created.");
                this._bannerAd.show();
                return;
            }
            let systemInfo = this.getSystemInfoSync();
            (width == undefined) && (width = systemInfo.windowWidth);
            let left = (systemInfo.windowWidth - width) / 2;
            let top = systemInfo.windowHeight - (width / 16) * 9;
            console.info("[platform] create banner , id=", this.bannerId);
            this._bannerAd = tt.createBannerAd({
                adUnitId: this.bannerId,
                adIntervals: 30,
                style: {
                    width: width,
                    left: left,
                    top: top
                }
            });
            this._bannerAd.onError(err => {
                console.error("[platform] banner failed , err=", err);
            });
            this._bannerAd.onResize(size => {
                console.info("[platform] banner onresize");
                if (Device.isBangsScreen()) {
                    this._bannerAd.style.top = systemInfo.windowHeight - size.height - 10;
                }
                else {
                    this._bannerAd.style.top = systemInfo.windowHeight - size.height;
                }
                this._bannerAd.style.left = (systemInfo.windowWidth - size.width) / 2;
            });
            this._bannerAd.onLoad(() => {
                console.info("[platform] banner onload");
                this._bannerAd.show()
                    .then(() => {
                    console.info("[platform] show banner success");
                })
                    .catch(err => {
                    console.error("[platform] show banner failed");
                });
            });
        }
        showRewardedVideo(id, listener) {
            let videoID = this.VideoID[id];
            if (this._isVideoShowing) {
                listener({ isEnded: false });
                return;
            }
            if (tt.createRewardedVideoAd == undefined) {
                if (listener) {
                    listener({ isEnded: true });
                }
                return;
            }
            this._isVideoShowing = true;
            this._videoCallback = listener;
            if (this._vTipsAd == undefined) {
                this._vTipsAd = tt.createRewardedVideoAd({ adUnitId: videoID });
                if (!this._vTipsAd) {
                    console.error("create video failed");
                    return;
                }
                this._vTipsAd.onError(err => {
                    console.error("video failed, err = ", err);
                });
                this._vTipsAd.onClose(arg => {
                    this._isVideoShowing = false;
                    this._videoCallback(arg);
                });
            }
            this._vTipsAd.show()
                .then(() => {
                console.log("广告显示成功");
            })
                .catch(err => {
                this._vTipsAd.load().then(() => {
                    console.log("手动加载成功");
                    return this._vTipsAd.show();
                });
            });
        }
        getSystemInfoSync() {
            return tt.getSystemInfoSync();
        }
        vibrateShort() {
            tt.vibrateShort();
        }
        report(eventName, arg) {
            (arg == undefined) && (arg = {});
            arg.playTime = Timer.timeFromGameStart;
            tt.reportAnalytics(eventName, arg);
        }
        showSplash() {
            console.info("[platform] show splash, appName = ", this.getAppName());
            if (this.getAppName() != "Toutiao") {
                return;
            }
            console.info("[platform] create splash handler");
            this._splashAd = tt.createInterstitialAd({ adUnitId: this.splashId });
            this._splashAd.onError(err => {
                console.error("[platform] splash err=", err);
            });
            this._splashAd.onLoad(() => {
                console.info("[platform] on splash load");
            });
            this._splashAd
                .load()
                .then(() => {
                console.info("[platform] on splashAd load, do show");
                this._splashAd.show();
            })
                .catch((err) => {
                console.error("show splash failed, err=", err);
            });
        }
        getAppName() {
            return this.getSystemInfoSync().appName;
        }
        loadHead(imgUrl, drawRect, ctx, callback) {
            var image = tt["createImage"]();
            image.onload = function () {
                tt["drawImage"](image, {
                    x: 0,
                    y: 0,
                    width: image.width,
                    height: image.height
                }, drawRect, ctx);
                if (callback) {
                    callback();
                }
            };
            image.src = imgUrl;
        }
        updateScore(score) {
            if (tt["setImRankData"] == undefined) {
                console.warn("setImRankData is undefined, update score failed.");
                return;
            }
            tt["setImRankData"]({
                dataType: 0,
                value: score.toString(),
                priority: 0,
                extra: "extra",
                success(res) {
                    console.log(`setImRankData success res: ${res}`);
                },
                fail(res) {
                    console.log(`setImRankData fail res: ${res.errMsg}`);
                },
            });
        }
        showFriendRank() {
            return __awaiter(this, void 0, void 0, function* () {
                if (tt["getImRankList"] == undefined) {
                    console.warn("getImRankList is undefined, update score failed.");
                    throw "not support";
                }
                tt["getImRankList"]({
                    relationType: "friend",
                    dataType: 0,
                    rankType: "month",
                    suffix: "分",
                    rankTitle: "好友排行榜",
                    success(res) {
                        console.log(`getImRankData success res: ${res}`);
                    },
                    fail(res) {
                        console.log(`getImRankData fail res: ${res.errMsg}`);
                        throw res;
                    },
                });
            });
        }
    }

    class PlatformWX extends PlatformBase {
        init(shareImgUrl) {
        }
        getSystemInfoSync() {
            return wx.getSystemInfoSync();
        }
        vibrateShort() {
        }
    }

    class ViewUtils {
        static viewDirToCameraDir(viewDir, cameraTransform) {
            if (cameraTransform == null) {
                return;
            }
            const cameraFoward = Utils.GetTransformForward(cameraTransform);
            cameraFoward.y = 0;
            gVec3.x = viewDir.x;
            gVec3.y = 0;
            gVec3.z = viewDir.y;
            let rad = MathUtils.vecRad(gVec3, gForwardLH);
            if (viewDir.x > 0) {
                rad *= -1;
            }
            Laya.Quaternion.createFromAxisAngle(gUp, rad, gQuat);
            Laya.Vector3.transformQuat(cameraFoward, gQuat, gVec3);
            return gVec3.clone();
        }
        static setWidgetGlobalPos(globalX, globalY, widget) {
            if (!widget || !widget.parent) {
                return;
            }
            gPoint.x = globalX;
            gPoint.y = globalY;
            widget.parent.globalToLocal(gPoint, false);
            widget.x = gPoint.x;
            widget.y = gPoint.y;
        }
        static getWidgetGlobalPos(widget) {
            if (widget != null && widget.parent != null) {
                gPoint.x = widget.x;
                gPoint.y = widget.y;
                widget.parent.localToGlobal(gPoint, false);
            }
            else {
                console.warn("get widget global pos failed, widget is null");
            }
            return gPoint;
        }
    }

    class WXSdk {
        static isHasAd() {
            return false;
            if (!Laya.Browser.onWeiXin)
                return true;
            if (Utils.strVersionCompare(Device.systemInfo.SDKVersion, "2.0.4") < 0)
                return false;
            return this._isHasAD;
        }
        static checkNoAd(err) {
            if (!err || !this._isHasAD)
                return;
            this._isHasAD = false;
        }
        static fixBannerTop(bannerAd) {
            let top = 0;
            let maxTop = Device.systemInfo.windowHeight - bannerAd.style.realHeight;
            if (this.bannerTopValue != null) {
                top = this.bannerTopValue;
                if (top > maxTop) {
                    top = maxTop;
                }
                else {
                    if (bannerAd["style"]["realHeight"] > 90) {
                        top = this.bannerTopValue - 10;
                    }
                }
            }
            else {
                top = maxTop;
            }
            bannerAd["style"]["top"] = top;
        }
        static fixBannerLeft(bannerAd) {
            let left = 0;
            let windowWidth = Device.systemInfo.windowWidth;
            if (this.bannerLeftValue != null) {
                left = this.bannerLeftValue;
            }
            else {
                if (Device.screenMode == 'horizontal') {
                    left = windowWidth - bannerAd['style']['realWidth'];
                }
                else {
                    left = (windowWidth - bannerAd['style']['realWidth']) / 2;
                }
            }
            bannerAd.style.left = left;
        }
        static calcWidgetY(widget, offset) {
            let y = 0;
            if (this.tempPoint == null) {
                this.tempPoint = new Laya.Point();
            }
            this.tempPoint.x = 0;
            this.tempPoint.y = 0;
            widget.localToGlobal(this.tempPoint, false);
            let widgetY = this.tempPoint.y;
            y = widgetY / Laya.stage.height * Device.systemInfo.windowHeight;
            if (offset) {
                y += offset;
            }
            return y;
        }
        static loadSubpackage(name, onUpdate) {
            return new Promise((resolve, reject) => {
                let subTask = wx.loadSubpackage({
                    name: name,
                    success: function () {
                        resolve(null);
                    },
                    fail: function () {
                        reject();
                    },
                    complete: function () {
                        resolve(null);
                    }
                });
                if (onUpdate) {
                    subTask.onProgressUpdate(onUpdate);
                }
            });
        }
        static widgetToWXPos(widget) {
            let point = ViewUtils.getWidgetGlobalPos(widget);
            let widthRate = Device.systemInfo.windowWidth / Laya.stage.displayWidth;
            let heightRate = Device.systemInfo.windowHeight / Laya.stage.displayHeight;
            let x;
            let y;
            let w;
            let h;
            if (isNaN(widget.anchorX) || widget.anchorX == undefined) {
                widget.anchorX = 0;
            }
            if (isNaN(widget.anchorY) || widget.anchorY == undefined) {
                widget.anchorY = 0;
            }
            x = (point.x - widget.displayWidth * widget.anchorX) * widthRate;
            y = (point.y - widget.displayHeight * widget.anchorY) * heightRate;
            w = widget.displayWidth * widthRate;
            h = widget.displayHeight * heightRate;
            return { x: x, y: y, w: w, h: h };
        }
        static setCollected(res) {
            if (res.scene != 1104 && res.scene != 1103) {
                return;
            }
            let isCollected = Laya.LocalStorage.getItem("isCollect");
            if (isCollected == null || isCollected == "") {
                Laya.LocalStorage.setItem("isCollect", "true");
            }
        }
        static isCollected() {
            let isCollected = Laya.LocalStorage.getItem("isCollect");
            if (isCollected == null || isCollected == "") {
                return false;
            }
            return true;
        }
    }
    WXSdk._isHasAD = true;
    WXSdk.showingBannerAd = {};
    WXSdk.cachedBannerAd = {};
    WXSdk.cacheVideo = {};
    WXSdk.loadingBanner = [];

    const SDKEvent = {
        onShow: "sdk.onShow",
        onHide: "sdk.onHide"
    };
    const SDKLoadingLog = {
        start: "progressStart",
        end: "progressEnd"
    };
    var PayType;
    (function (PayType) {
        PayType[PayType["mi"] = 0] = "mi";
        PayType[PayType["h5"] = 1] = "h5";
    })(PayType || (PayType = {}));
    const wx$1 = window["wx"];
    class XHSdk {
        static get isAuthorize() {
            return (this.userInfo.nick_name != null &&
                this.userInfo.nick_name != "");
        }
        static removeAuthorizeBtn() {
            if (!this._authorizeBtn) {
                return;
            }
            this._authorizeBtn.destroy();
            this._authorizeBtn = null;
        }
        static authorizeLogin(bindWidget) {
            let stageWidth = Laya.stage.width;
            let stageHeight = Laya.stage.height;
            let node = new Laya.Sprite();
            Laya.stage.addChild(node);
            let point = WXSdk.widgetToWXPos(bindWidget);
            let btnInfo = {
                type: "text",
                text: "",
                style: {
                    left: point.x,
                    top: point.y,
                    width: point.w,
                    height: point.h
                },
                withCredentials: true
            };
            return new Promise((resolve, reject) => {
                this.removeAuthorizeBtn();
                this._authorizeBtn = wx$1.createUserInfoButton(btnInfo);
                this._authorizeBtn.onTap(res => {
                    this.removeAuthorizeBtn();
                    node.destroy();
                    if (res.errMsg == "getUserInfo:ok") {
                        console.log("[platform]authorize ok ");
                        wx$1.tmSDK
                            .updateUserInfo({
                            encryptedData: res.encryptedData,
                            iv: res.iv,
                            signature: res.signature
                        })
                            .then(res => {
                            console.log("[platform]update userinfo ", res);
                            this.userInfo = res;
                            resolve(null);
                        })
                            .catch(() => {
                            resolve(null);
                        });
                    }
                    else {
                        console.log("[platform]authorize reject");
                        reject();
                    }
                });
            });
        }
        static tryAuthorize(bindWidget) {
            if (this.isAuthorize)
                return Promise.resolve();
            return this.authorizeLogin(bindWidget);
        }
        static onShow(cb, once = false) {
            let tempCallback = function (res) {
                cb(res);
                if (once) {
                    this.offShow(tempCallback);
                }
            };
            wx$1.onShow(tempCallback);
        }
        static offShow(cb) {
            wx$1.offShow(cb);
        }
        static onHide(cb, once = false) {
            let tempCallback = function (res) {
                cb(res);
                if (once) {
                    this.offHide(tempCallback);
                }
            };
            wx$1.onHide(tempCallback);
        }
        static offHide(cb) {
            wx$1.offHide(cb);
        }
        static shareAppMessage(shareKey, content, titleArgs, query) {
            if (!Laya.Browser.onWeiXin)
                return Promise.resolve();
            if (this.switchs[shareKey] && this.switchs[shareKey] == false) {
                console.warn("[platform]share failed, ", shareKey + " not open");
                return Promise.reject(null);
            }
            if (query != null && typeof query != "string") {
                let str = "";
                for (let k in query) {
                    if (str != "")
                        str += "&";
                    str = str + k + "=" + query[k];
                }
                query = str;
            }
            return new Promise((resolve, reject) => {
                let shareData = {
                    scene: shareKey,
                    query: query
                };
                console.log("[share]shareData ", shareData);
                wx$1.tmSDK.shareAppMessage(shareData);
                let shareTime = Date.now();
                gEvent.once(SDKEvent.onShow, this, (res) => {
                    if (Date.now() - shareTime < 2500) {
                        wx$1.showModal({
                            title: "温馨提示",
                            content: "你取消了分享，请分享到群",
                            showCancel: false
                        });
                        reject();
                    }
                    else {
                        console.log("share resolve");
                        resolve(null);
                    }
                    console.log("share resolve");
                    resolve(null);
                });
            });
        }
        static sendLoadingLog(type) {
        }
        static createRewardedVideoAd(arg) {
            return wx$1.createRewardedVideoAd(arg);
        }
        static createBannerAd(arg) {
            return wx$1.createBannerAd(arg);
        }
    }
    XHSdk.switchs = {};
    XHSdk.userInfo = {
        open_id: "X17",
        nick_name: "X",
        avatar_url: `game/view/common/head_icon.jpg`,
        ofp: "127f579a61aaa84fe35a5366a79f7a7313b77a99"
    };

    class PlatformStandalone extends PlatformBase {
        login() {
            return __awaiter(this, void 0, void 0, function* () {
                let data = {
                    appid: AppInfo.appid,
                    openid: XHSdk.userInfo.open_id,
                    ofp: XHSdk.userInfo.ofp
                };
                let res = yield Net.httpPost("getJWT", data);
                console.log("jwt res ", res);
                res = JSON.parse(res);
                if (res.err) {
                    console.error("login failed");
                    return;
                }
                return res.data;
            });
        }
    }

    class PlatformQQ extends PlatformBase {
        init(shareImgUrl) {
            qq.onShareAppMessage(() => {
                return {
                    title: 'X战役',
                    imageUrl: shareImgUrl,
                    query: '',
                    success() {
                        console.log('分享成功');
                    },
                    fail(e) {
                        console.log('分享失败', e);
                    }
                };
            });
        }
        login() {
            return new Promise((resolve, reject) => {
                qq.login({
                    force: true,
                    success(loginRes) {
                        Net.httpPost("qq/login", {
                            code: loginRes.code,
                            anonymous_code: loginRes.anonymousCode,
                            appid: AppInfo.appid,
                            ConfigVersion: null
                        }).then(sLoginRes => {
                            let ttLoginData = JSON.parse(sLoginRes);
                            if (ttLoginData.err) {
                                console.error("login failed");
                                reject(ttLoginData.err);
                            }
                            else {
                                qq.getUserInfo({
                                    success(userInfoRes) {
                                        let finalRes = userInfoRes.userInfo;
                                        finalRes.openid = ttLoginData.data.openid;
                                        finalRes.jwt = ttLoginData.data.jwt;
                                        finalRes.nid = ttLoginData.data.nid;
                                        resolve(finalRes);
                                    },
                                    fail(userInfoRes) {
                                        reject(userInfoRes);
                                    }
                                });
                            }
                        }).catch(sLoginRes => {
                            reject(sLoginRes);
                        });
                    },
                    fail(loginRes) {
                        console.log(`login 调用失败`);
                        reject(loginRes);
                    },
                });
            });
        }
    }

    var ePlatform;
    (function (ePlatform) {
        ePlatform[ePlatform["standalone"] = 0] = "standalone";
        ePlatform[ePlatform["wx"] = 1] = "wx";
        ePlatform[ePlatform["tt"] = 2] = "tt";
        ePlatform[ePlatform["qq"] = 3] = "qq";
    })(ePlatform || (ePlatform = {}));
    class Platform {
        static get inst() {
            if (this._inst == undefined) {
                if (this.platform == ePlatform.wx) {
                    this._inst = new PlatformWX();
                }
                else if (this.platform == ePlatform.tt) {
                    this._inst = new PlatformTT();
                }
                else if (this.platform == ePlatform.qq) {
                    this._inst = new PlatformQQ();
                }
                else if (this.platform == ePlatform.standalone) {
                    this._inst = new PlatformStandalone();
                }
                else {
                    this._inst = new PlatformBase();
                }
            }
            return this._inst;
        }
        static get platform() {
            if (this._platform == undefined) {
                if (Laya.Browser.onTTMiniGame) {
                    this._platform = ePlatform.tt;
                }
                else if (Laya.Browser.onQQMiniGame) {
                    this._platform = ePlatform.qq;
                }
                else if (Laya.Browser.onWeiXin) {
                    this._platform = ePlatform.wx;
                }
                else {
                    this._platform = ePlatform.standalone;
                }
                console.info("[platform] set platform = ", this._platform);
            }
            return this._platform;
        }
        static get onMiniGame() {
            return Laya.Browser.onWeiXin || Laya.Browser.onTTMiniGame || Laya.Browser.onQQMiniGame;
        }
    }

    const remoteUrl = `https://cdn.kuaiyugo.com/xyx/t1/TankStrike/release`;
    class CommonRes {
        static config(name) {
            return `game/config/${name}.json`;
        }
        static useRemoteUrl() {
            return Platform.onMiniGame;
        }
        static get trdBaseUrl() {
            if (this.useRemoteUrl()) {
                return `${remoteUrl}/${cfg.global.resVer}/game/u3d`;
            }
            else {
                return "game/u3d";
            }
        }
        static get voiceBaseUrl() {
            if (this.useRemoteUrl()) {
                return `${remoteUrl}/${cfg.global.resVer}/game/voice`;
            }
            else {
                return "game/voice";
            }
        }
        static scene3D(name) {
            return `${this.trdBaseUrl}/LayaScene_${name}/Conventional/${name}.ls`;
        }
        static obj3D(name) {
            return `${this.trdBaseUrl}/LayaScene_${name}/Conventional/${name}.lh`;
        }
        static sound(name) {
            return `${this.voiceBaseUrl}/${name}`;
        }
        static music(name) {
            return `${this.voiceBaseUrl}/${name}`;
        }
        static viewLayout(floder, name) {
            return `game/view/${floder}/${name}.json`;
        }
        static texture(name) {
            if (this.useRemoteUrl()) {
                return `${remoteUrl}/${cfg.global.resVer}/game/texture/${name}.png`;
            }
            else {
                return `game/texture/${name}.png`;
            }
        }
        static icon(name) {
            if (this.useRemoteUrl()) {
                return `${remoteUrl}/${cfg.global.resVer}/game/icon/${name}.png`;
            }
            else {
                return `game/icon/${name}.png`;
            }
        }
        static prefab(name) {
            return `game/prefab/${name}.json`;
        }
        static viewCommon(name) {
            if (this.useRemoteUrl()) {
                return `${remoteUrl}/${cfg.global.resVer}/game/view/common/${name}.png`;
            }
            else {
                return `game/view/common/${name}.png`;
            }
        }
        static get warningRes() {
            return "yujingkuang_002";
        }
        static get shadow() {
            return CommonRes.obj3D("common_shadow");
        }
        static get fxHuiXue() {
            return CommonRes.obj3D("effect_tongyong_huixue");
        }
        static get fxReborn() {
            return CommonRes.obj3D("effect_hudun_001");
        }
        static durationBuffIcon(icon) {
            return `game/view/common/${icon}.png`;
        }
        static get fxBeAtk() {
            return CommonRes.obj3D("effect_tongyong_shouji_003");
        }
        static get fxSummon() {
            return CommonRes.obj3D("moster_summon_01");
        }
        static getItemIconUrlByID(itemID) {
            let config = cfg.item[itemID];
            if (eItemType.Number == config.type) {
                return `game/view/common/${config.icon}.png`;
            }
            else {
                return `${remoteUrl}/${cfg.global.resVer}/game/icon/${config.icon}.png`;
            }
        }
        static getCharacterRelateRes(id) {
            let out = [];
            let config = cfg.actor[id];
            out.push({ url: CommonRes.obj3D(config.res), num: 1 });
            if (config.dieFx) {
                out.push({ url: EffectManager.convertToRealUrl(CommonRes.obj3D(config.dieFx)), num: 1 });
            }
            let bullets = config.bullet;
            let skills = config.skills;
            let isLowDevice = Device.isLowOptDeviceByAuto;
            let getBulletRes = (id, num) => {
                let bulletConfig = cfg.bullet[id];
                out.push({ url: CommonRes.obj3D(bulletConfig.res), num: num || 10 });
                if (bulletConfig.bombRes) {
                    out.push({ url: EffectManager.convertToRealUrl(CommonRes.obj3D(bulletConfig.bombRes)), num: 3 });
                }
                if (bulletConfig.splitBulletID) {
                    getBulletRes(bulletConfig.splitBulletID, bulletConfig.splitNum);
                }
                if (!isLowDevice && bulletConfig.flareRes) {
                    out.push({ url: EffectManager.convertToRealUrl(CommonRes.obj3D(bulletConfig.flareRes)), num: 3 });
                }
                if (!isLowDevice && bulletConfig.beAtkEffect) {
                    out.push({ url: EffectManager.convertToRealUrl(CommonRes.obj3D(bulletConfig.beAtkEffect)), num: 3 });
                }
            };
            if (bullets) {
                for (let id of bullets) {
                    getBulletRes(id);
                }
            }
            if (skills) {
                for (let id of skills) {
                    let skillConfig = cfg.skillCfg[id];
                    if (skillConfig.fallRes) {
                        out.push({ url: EffectManager.convertToRealUrl(CommonRes.obj3D(skillConfig.fallRes)), num: skillConfig.fallNum || 1 });
                    }
                    if (skillConfig.whileBullet) {
                        out.push({ url: CommonRes.obj3D(cfg.bullet[skillConfig.whileBullet].res), num: 10 });
                    }
                    if (skillConfig.warningRes) {
                        let num = 1;
                        if (skillConfig.type == eSkillType.Thunder) {
                            num = skillConfig.fallNum || 1;
                        }
                        out.push({ url: CommonRes.obj3D(skillConfig.warningRes), num: num });
                    }
                    if (skillConfig.flareRes) {
                        out.push({ url: EffectManager.convertToRealUrl(CommonRes.obj3D(skillConfig.flareRes)), num: skillConfig.fallNum || 1 });
                    }
                    if (skillConfig.beAtkEffect) {
                        out.push({ url: EffectManager.convertToRealUrl(CommonRes.obj3D(skillConfig.beAtkEffect)), num: 1 });
                    }
                    if (eSkillType.Summon == skillConfig.type) {
                        out.push(...this.getCharacterRelateRes(skillConfig.summonedId));
                    }
                }
            }
            return out;
        }
        static getSceneItemReleateRes(itemID) {
            let ret = [];
            let itemCfg = cfg.item[itemID];
            ret.push({ url: CommonRes.obj3D(itemCfg.model), num: 1 });
            return ret;
        }
    }
    CommonRes.viewResBasePath = "game/fgui";

    var eActorColliderType;
    (function (eActorColliderType) {
        eActorColliderType[eActorColliderType["circle"] = 1] = "circle";
    })(eActorColliderType || (eActorColliderType = {}));
    class cfg {
        static load() {
            return __awaiter(this, void 0, void 0, function* () {
                [
                    this.global,
                    this.stageLevelCfg,
                    this.stageCfg,
                    this.map0Cfg,
                    this.map1Cfg,
                    this.map2Cfg,
                    this.map3Cfg,
                    this.map4Cfg,
                    this.map5Cfg,
                    this.map6Cfg,
                    this.sceneAssetCfg,
                    this.item,
                    this.actor,
                    this.bullet,
                    this.buff,
                    this.ai,
                    this.skillCfg,
                    this.level,
                    this.voice,
                    this.tips,
                    this.rankReward,
                    this.rankTask,
                    this.devicePerf,
                    this.effect,
                    this.technology,
                    this.technologyCost,
                    this.signReward,
                    this.boxList,
                    this.shop
                ] = yield Promise.all([
                    this.loadConfig("Global"),
                    this.loadConfig("StageLevelCfg"),
                    this.loadConfig("StageCfg"),
                    this.loadConfig("Map0Cfg"),
                    this.loadConfig("Map1Cfg"),
                    this.loadConfig("Map2Cfg"),
                    this.loadConfig("Map3Cfg"),
                    this.loadConfig("Map4Cfg"),
                    this.loadConfig("Map5Cfg"),
                    this.loadConfig("Map6Cfg"),
                    this.loadConfig("SceneAssetCfg"),
                    this.loadConfig("Item"),
                    this.loadConfig("Actor"),
                    this.loadConfig("Bullet"),
                    this.loadConfig("Buff"),
                    this.loadConfig("AI"),
                    this.loadConfig("SkillCfg"),
                    this.loadConfig("Level"),
                    this.loadConfig("Voice"),
                    this.loadConfig("Tips"),
                    this.loadConfig("MilitaryRank"),
                    this.loadConfig("TaskList"),
                    this.loadConfig("DevicePerf"),
                    this.loadConfig("Effect"),
                    this.loadConfig("Technology"),
                    this.loadConfig("TechnologyCost"),
                    this.loadConfig("SignReward"),
                    this.loadConfig("BoxList"),
                    this.loadConfig("Shop")
                ]);
            });
        }
        static loadConfig(name) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield Resource.load(CommonRes.config(name), null, null, Laya.Loader.JSON);
            });
        }
        static LoadFromZip() {
            return __awaiter(this, void 0, void 0, function* () {
                const zipData = yield Resource.load("game/config.zip", null, null, Laya.Loader.BUFFER);
                const jszip = new JSZip();
                const data = yield jszip.loadAsync(zipData, null);
                this.global = JSON.parse(yield data.file("Global.json").async("string"));
                this.stageLevelCfg = JSON.parse(yield data.file("StageLevelCfg.json").async("string"));
                this.stageCfg = JSON.parse(yield data.file("StageCfg.json").async("string"));
                this.map0Cfg = JSON.parse(yield data.file("Map0Cfg.json").async("string"));
                this.map1Cfg = JSON.parse(yield data.file("Map1Cfg.json").async("string"));
                this.map2Cfg = JSON.parse(yield data.file("Map2Cfg.json").async("string"));
                this.map3Cfg = JSON.parse(yield data.file("Map3Cfg.json").async("string"));
                this.map4Cfg = JSON.parse(yield data.file("Map4Cfg.json").async("string"));
                this.map5Cfg = JSON.parse(yield data.file("Map5Cfg.json").async("string"));
                this.map6Cfg = JSON.parse(yield data.file("Map6Cfg.json").async("string"));
                this.sceneAssetCfg = JSON.parse(yield data.file("SceneAssetCfg.json").async("string"));
                this.item = JSON.parse(yield data.file("Item.json").async("string"));
                this.actor = JSON.parse(yield data.file("Actor.json").async("string"));
                this.bullet = JSON.parse(yield data.file("Bullet.json").async("string"));
                this.buff = JSON.parse(yield data.file("Buff.json").async("string"));
                this.ai = JSON.parse(yield data.file("AI.json").async("string"));
                this.skillCfg = JSON.parse(yield data.file("SkillCfg.json").async("string"));
                this.level = JSON.parse(yield data.file("Level.json").async("string"));
                this.voice = JSON.parse(yield data.file("Voice.json").async("string"));
                this.tips = JSON.parse(yield data.file("Tips.json").async("string"));
                this.rankReward = JSON.parse(yield data.file("MilitaryRank.json").async("string"));
                this.rankTask = JSON.parse(yield data.file("TaskList.json").async("string"));
                this.devicePerf = JSON.parse(yield data.file("DevicePerf.json").async("string"));
                this.effect = JSON.parse(yield data.file("Effect.json").async("string"));
                this.technology = JSON.parse(yield data.file("Technology.json").async("string"));
                this.technologyCost = JSON.parse(yield data.file("TechnologyCost.json").async("string"));
                this.signReward = JSON.parse(yield data.file("SignReward.json").async("string"));
                this.boxList = JSON.parse(yield data.file("BoxList.json").async("string"));
                this.shop = JSON.parse(yield data.file("Shop.json").async("string"));
            });
        }
    }

    class AudioManager {
        static setup() {
            let audioV = Laya.LocalStorage.getItem("audio");
            Laya.SoundManager.muted = audioV == "1";
            this._soundChannels = [];
            this._urlPlayTime = {};
            this._soundInterval = 100;
            if (Device.isLowOptDeviceByAuto) {
                this._soundInterval = 500;
            }
            console.log("音效间隔：", this._soundInterval);
        }
        static playMusic(url, volume = 100, forcePlay = false) {
            if (this.isMuted() || url == null) {
                return;
            }
            if (this._music) {
                if (!forcePlay &&
                    !this._music.isStopped &&
                    this._musicUrl == url) {
                    return;
                }
                this._music.stop();
            }
            this._musicUrl = url;
            this._musicVolume = volume;
            this._music = this.playSound(url, volume, 0);
        }
        static playMusicRandom(idArr) {
            if (this.isMuted())
                return;
            let index = Math.floor(Math.random() * idArr.length);
            let url = CommonRes.music(cfg.voice[idArr[index]].res);
            let volume = cfg.voice[idArr[index]].volume;
            this.playMusic(url, volume);
        }
        static playSound(url, volume = 100, loop = 1, bIgnoreInterval) {
            if (Laya.SoundManager.muted) {
                return;
            }
            let lastPlayTime = this._urlPlayTime[url];
            if (!bIgnoreInterval && lastPlayTime && Timer.curMs - lastPlayTime < this._soundInterval) {
                return;
            }
            this._urlPlayTime[url] = Timer.curMs;
            if (this._bSoundChannelLimitEnabled) {
                if (this._soundChannels.length > 0) {
                    let playingCount = 0;
                    for (let i = this._soundChannels.length - 1; i >= 0; i--) {
                        let soundChannel = this._soundChannels[i];
                        if (!soundChannel.isStopped) {
                            playingCount++;
                        }
                        else {
                            this._soundChannels.slice(i, 1);
                        }
                    }
                    if (playingCount >= 5) {
                        return;
                    }
                }
            }
            let channel = Laya.SoundManager.playSound(url, loop);
            if (channel) {
                channel.volume = volume / 100;
                if (this._bSoundChannelLimitEnabled) {
                    this._soundChannels.push(channel);
                }
            }
            return channel;
        }
        static playSoundRandom(idArr, loop = 1, bIgnoreInterval) {
            if (Laya.SoundManager.muted)
                return;
            let index = Math.floor(Math.random() * idArr.length);
            let url = CommonRes.sound(cfg.voice[idArr[index]].res);
            let volume = cfg.voice[idArr[index]].volume;
            this.playSound(url, volume, loop, bIgnoreInterval);
        }
        static isMuted() {
            return Laya.SoundManager.muted;
        }
        static tempSetMuted(isMuted) {
            this.originMuted = this.isMuted();
            this.setMuted(isMuted);
        }
        static revertMutedState() {
            this.setMuted(this.originMuted);
        }
        static setMuted(isMute) {
            let oldMutedV = Laya.SoundManager.muted;
            Laya.SoundManager.muted = isMute;
            if (oldMutedV && !isMute) {
                this.playMusic(this._musicUrl);
            }
            Laya.LocalStorage.setItem("audio", isMute && "1" || "0");
        }
        static playConfig(id, loop = 1) {
            if (Laya.SoundManager.muted)
                return null;
            let config = cfg.voice[id];
            return this.playSound(CommonRes.sound(config.res), config.volume, loop);
        }
    }
    AudioManager._bSoundChannelLimitEnabled = false;

    var ViewEffect;
    (function (ViewEffect) {
        ViewEffect[ViewEffect["None"] = 1] = "None";
        ViewEffect[ViewEffect["Scale"] = 2] = "Scale";
        ViewEffect[ViewEffect["Alpha"] = 3] = "Alpha";
        ViewEffect[ViewEffect["MoveLeft"] = 11] = "MoveLeft";
        ViewEffect[ViewEffect["MoveRight"] = 12] = "MoveRight";
        ViewEffect[ViewEffect["MoveUp"] = 13] = "MoveUp";
        ViewEffect[ViewEffect["MoveDown"] = 14] = "MoveDown";
    })(ViewEffect || (ViewEffect = {}));
    const bangSize = 50;
    class BaseViewLY extends Laya.View {
        constructor() {
            super(...arguments);
            this.isOpen = false;
            this.isClosing = false;
        }
        get isFitBang() {
            return false;
        }
        loadData(layout) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    let layoutData = yield Resource.load(layout, null, null, Laya.Loader.JSON);
                    this.createView(layoutData);
                    if (this.isFitBang && Device.isBangsScreen()) {
                        if (Device.screenMode == "horizontal") {
                            this.width = Laya.stage.width - 70;
                            this.x = bangSize + this.fixX;
                        }
                        else {
                            this.height = Laya.stage.height - 70;
                            this.y = bangSize + this.fixY;
                        }
                    }
                    else {
                        this.height = Laya.stage.height;
                        this.width = Laya.stage.width;
                        this.y = this.fixY;
                        this.x = this.fixX;
                    }
                    this.fitLayout(this);
                    console.info("[baseview] ", layout, "loaded.");
                }
                catch (e) {
                    console.error("[baseview]load fail ", e);
                }
            });
        }
        get fixX() {
            return (this.anchorX || 0) * this.width;
        }
        get fixY() {
            return (this.anchorY || 0) * this.height;
        }
        processOpenEffect(effect = ViewEffect.None) {
            return __awaiter(this, void 0, void 0, function* () {
                switch (effect) {
                    case ViewEffect.Alpha:
                        {
                            this.alpha = 0;
                            yield Tween.to(this, { alpha: 1 }, 300);
                        }
                        break;
                    case ViewEffect.MoveLeft:
                        {
                            this.x = this.fixX + Laya.stage.width;
                            let toX = 0;
                            if (this.isFitBang && Device.isBangsScreen() && Device.screenMode == "horizontal") {
                                toX = bangSize;
                            }
                            toX += this.fixX;
                            yield Tween.to(this, { x: toX }, 300, Laya.Ease.cubicOut);
                        }
                        break;
                    case ViewEffect.MoveRight:
                        {
                            this.x = this.fixX - Laya.stage.width;
                            let toX = 0;
                            if (this.isFitBang && Device.isBangsScreen() && Device.screenMode == "horizontal")
                                toX = bangSize;
                            toX += this.fixX;
                            yield Tween.to(this, { x: toX }, 300, Laya.Ease.cubicOut);
                        }
                        break;
                    case ViewEffect.MoveUp:
                        {
                            this.y = Laya.stage.height + this.fixY;
                            let toY = 0;
                            if (this.isFitBang && Device.isBangsScreen() && Device.screenMode == "vertical")
                                toY = bangSize;
                            toY += this.fixY;
                            yield Tween.to(this, { y: toY }, 300, Laya.Ease.cubicOut);
                        }
                        break;
                    case ViewEffect.MoveDown:
                        {
                            this.y = -Laya.stage.height + this.fixY;
                            let toY = 0;
                            if (this.isFitBang && Device.isBangsScreen() && Device.screenMode == "vertical")
                                toY = bangSize;
                            toY += this.fixY;
                            yield Tween.to(this, { y: toY }, 300, Laya.Ease.cubicOut);
                        }
                        break;
                    case ViewEffect.Scale:
                        {
                            if (this.anchorX != 0.5) {
                                this.anchorX = 0.5;
                                this.x = this.width * 0.5;
                            }
                            if (this.anchorY != 0.5) {
                                this.anchorY = 0.5;
                                this.y = this.height * 0.5;
                            }
                            this.scale(0, 0);
                            yield Tween.to(this, { scaleX: 1, scaleY: 1 }, 200);
                        }
                        break;
                    default:
                        {
                            if (this.isFitBang && Device.isBangsScreen()) {
                                if (Device.screenMode == "vertical") {
                                    this.y = bangSize + this.fixY;
                                }
                                else {
                                    this.x = bangSize + this.fixX;
                                }
                            }
                            else {
                                this.y = this.fixY;
                                this.x = this.fixX;
                            }
                        }
                        ;
                }
            });
        }
        open(closeOther, param, effect, voice) {
            return __awaiter(this, void 0, void 0, function* () {
                this.active = true;
                this.visible = true;
                if (effect) {
                    this._showEffect = effect;
                }
                if (voice) {
                    AudioManager.playConfig(voice);
                }
                yield this.processOpenEffect(effect);
                this.isOpen = true;
                this.onOpened(param);
            });
        }
        processCloseEffect(type, effect) {
            return __awaiter(this, void 0, void 0, function* () {
                if (!effect) {
                    switch (this._showEffect) {
                        case ViewEffect.MoveRight:
                            effect = ViewEffect.MoveLeft;
                            break;
                        case ViewEffect.MoveLeft:
                            effect = ViewEffect.MoveRight;
                            break;
                        case ViewEffect.Scale:
                            effect = ViewEffect.Scale;
                            break;
                        case ViewEffect.MoveUp:
                            effect = ViewEffect.MoveDown;
                            break;
                        case ViewEffect.MoveDown:
                            effect = ViewEffect.MoveUp;
                            break;
                        case ViewEffect.Alpha:
                            effect = ViewEffect.Alpha;
                            break;
                        default:
                            effect = ViewEffect.None;
                            break;
                    }
                }
                switch (effect) {
                    case ViewEffect.Alpha:
                        {
                            yield Tween.to(this, { alpha: 0 }, 300);
                        }
                        break;
                    case ViewEffect.MoveRight:
                        {
                            yield Tween.to(this, { x: Laya.stage.width + this.fixX }, 300, Laya.Ease.cubicIn);
                        }
                        break;
                    case ViewEffect.MoveLeft:
                        {
                            yield Tween.to(this, { x: -Laya.stage.width + this.fixX }, 300, Laya.Ease.cubicIn);
                        }
                        break;
                    case ViewEffect.MoveUp:
                        {
                            yield Tween.to(this, { y: -Laya.stage.height + this.fixY }, 300, Laya.Ease.cubicIn);
                        }
                        break;
                    case ViewEffect.MoveDown:
                        {
                            yield Tween.to(this, { y: Laya.stage.height + this.fixY }, 300, Laya.Ease.cubicIn);
                        }
                        break;
                    case ViewEffect.Scale:
                        {
                            yield Tween.to(this, { scaleX: 0, scaleY: 0 }, 200);
                        }
                        break;
                    default:
                        {
                            this.onClosed();
                        }
                        break;
                }
            });
        }
        close(type, effect, voice) {
            return __awaiter(this, void 0, void 0, function* () {
                if (!this.isOpen) {
                    return Promise.resolve();
                }
                if (voice) {
                    AudioManager.playConfig(voice);
                }
                this.onBeforeClose();
                ViewManagerLY.onViewClose(this.id);
                if (this._timeNeed2Destroy != null) {
                    if (this._timeNeed2Destroy < 0) {
                        this.time2Destroy = null;
                    }
                    else {
                        this.time2Destroy = Laya.timer.currTimer + this._timeNeed2Destroy;
                    }
                }
                else {
                    this.time2Destroy = Laya.timer.currTimer + 10000;
                }
                this.isClosing = true;
                this.isOpen = false;
                yield this.processCloseEffect(type, effect);
                this.onClosed();
            });
        }
        onBeforeClose() { }
        onClosed() {
            super.onClosed();
            this.visible = false;
            this.active = false;
        }
        onEnable() { }
        onDisable() {
            this.isClosing = false;
            if (this.disableCallback) {
                this.disableCallback();
                this.disableCallback = null;
            }
        }
        update(delta) { }
        fitLayout(node) {
            for (let i = 0, n = node.numChildren; i < n; i++) {
                let child = node.getChildAt(i);
                if (child instanceof Laya.UIComponent) {
                    if (child.top !== null ||
                        child.left !== null ||
                        child.right !== null ||
                        child.bottom !== null ||
                        child.centerX !== null ||
                        child.centerY !== null) {
                        child["_widget"].resetLayout();
                    }
                }
                this.fitLayout(child);
            }
        }
    }

    var ViewLayer;
    (function (ViewLayer) {
        ViewLayer[ViewLayer["background"] = 1] = "background";
        ViewLayer[ViewLayer["normal"] = 2] = "normal";
        ViewLayer[ViewLayer["popup"] = 3] = "popup";
        ViewLayer[ViewLayer["overlay"] = 4] = "overlay";
        ViewLayer[ViewLayer["debug"] = 5] = "debug";
    })(ViewLayer || (ViewLayer = {}));
    const ViewEvent = {
        show: "viewShow",
        hide: "viewHide"
    };
    class ViewManagerLY {
        static setup() {
            this.root = new Laya.Sprite();
            this.root.zOrder = 100;
            this.root.name = "view manager";
            this.root.width = Laya.stage.width;
            this.root.height = Laya.stage.height;
            Laya.stage.addChild(this.root);
            let layers = [
                ViewLayer.background,
                ViewLayer.normal,
                ViewLayer.popup,
                ViewLayer.overlay,
                ViewLayer.debug
            ];
            if (layers) {
                for (let i in layers) {
                    let layer = new Laya.Sprite();
                    layer.active = true;
                    layer.mouseThrough = true;
                    let id = layers[i];
                    layer.name = "layer" + id.toString();
                    layer.zOrder = id * 100;
                    this.layers[id] = layer;
                    this.root.addChild(layer);
                }
            }
            ViewFlyword.setup();
            Timer.frameLoop(1, this, this.update);
        }
        static show(viewData, layer = ViewLayer.normal, isShowMask = false, args, maskCallback, zOrder) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log("[view]show ", "id=" + viewData.name, "layer=" + layer);
                let id = viewData.name;
                let layerObj = this.layers[layer];
                let existView = this.actives[id];
                if (existView) {
                    console.warn("view " + id + " already show");
                    if (existView.active == false) {
                        existView.active = true;
                    }
                    if (zOrder != null) {
                        existView.zOrder = zOrder;
                    }
                    return existView;
                }
                for (let i = 0; i < this.hides.length; i++) {
                    let view = this.hides[i];
                    if (view["id"] == id) {
                        this.hides.splice(i, 1);
                        view.args = args;
                        yield view.open(null, args, viewData.effect, this.commonOpenVoice);
                        this.actives[id] = view;
                        gEvent.event(ViewEvent.show, id);
                        if (zOrder != null) {
                            view.zOrder = zOrder;
                        }
                        return view;
                    }
                }
                let view = new viewData.clas();
                view.args = args;
                view["id"] = id;
                if (!viewData.layout) {
                    throw new Error("[View]show " + id + " faield, layout or atlas not defined");
                }
                view.name = viewData.name;
                yield view.loadData(viewData.layout);
                if (!layerObj) {
                    console.warn("[view]layer not found ", layer);
                    layerObj = this.root;
                }
                view.layer = layer;
                layerObj.addChild(view);
                if (zOrder != null) {
                    view.zOrder = zOrder;
                }
                if (isShowMask) {
                    let btnMask = new Laya.Button("game/view/common/black_bg.png");
                    btnMask.tag = "mask";
                    btnMask.y = -Laya.stage.height;
                    btnMask.x = -Laya.stage.width;
                    btnMask.width = Laya.stage.width * 3;
                    btnMask.height = Laya.stage.height * 3;
                    btnMask.alpha = 0;
                    Laya.Tween.to(btnMask, { alpha: 0.7 }, 300);
                    view.addChildAt(btnMask, 0);
                    if (maskCallback) {
                        btnMask.on(Laya.Event.CLICK, view, view.close);
                    }
                }
                yield view.open(null, args, viewData.effect, this.commonOpenVoice);
                gEvent.event(ViewEvent.show, id);
                this.actives[id] = view;
                return view;
            });
        }
        static close(id, type, effect = ViewEffect.None) {
            console.log("[view]close ", id);
            let view = this.actives[id];
            if (!view) {
                console.warn("[view]view not found ", id);
                return;
            }
            view.close(type, effect, this.commonCloseVoice);
        }
        static closeAll(exceptName, layer) {
            for (let i in this.actives) {
                let view = this.actives[i];
                if (exceptName != null) {
                    if (exceptName.indexOf(view.name) == -1) {
                        view.close();
                    }
                }
                else if (view.layer == layer) {
                    view.close();
                }
                else {
                    view.close();
                }
            }
        }
        static clear() {
            for (let viewName in this.actives) {
                let view = this.actives[viewName];
                if (!view.dontDestroyOnLoad) {
                    view.destroy();
                    console.log("[view]destroy ", viewName);
                    delete this.actives[viewName];
                }
            }
            for (let i = this.hides.length - 1; i >= 0; i--) {
                let view = this.hides[i];
                if (view.time2Destroy != null) {
                    view.destroy();
                    this.hides.splice(i, 1);
                }
            }
        }
        static onViewClose(id) {
            let view = this.actives[id];
            if (!view) {
                console.warn("[view]view not found ", id);
                return;
            }
            this.hides.push(view);
            this.actives[id] = null;
            delete this.actives[id];
            gEvent.event(ViewEvent.hide, id);
        }
        static update() {
            let deltaMs = Timer.deltaMs;
            let curTime = Laya.timer.currTimer;
            for (let id in this.actives) {
                let view = this.actives[id];
                view.update(deltaMs);
            }
            for (let i = this.hides.length - 1; i >= 0; i--) {
                let view = this.hides[i];
                if (view.time2Destroy && curTime > view.time2Destroy) {
                    console.log("[view]destroy ", view.id, i, this.hides.length);
                    view.destroy();
                    this.hides.splice(i, 1);
                }
            }
        }
        static isShow(id) {
            let view = this.actives[id];
            return view != null;
        }
        static getView(name) {
            return this.actives[name];
        }
        static getLayer(layer) {
            return this.layers[layer];
        }
        static handleClickVoice(url) {
            Laya.stage.on(Laya.Event.CLICK, this, function (res) {
                if (res.target instanceof Laya.Button) {
                    AudioManager.playConfig(url);
                }
            });
        }
        static handleOpenVoice(url) {
            this.commonOpenVoice = url;
        }
        static handleCloseVoice(url) {
            this.commonCloseVoice = url;
        }
        static enableClickEffect() {
            Laya.stage.on(Laya.Event.CLICK, this, function (res) {
                if (res.target instanceof Laya.Button) {
                    res.target.scale(1.1, 1.1);
                }
            });
            Laya.stage.on(Laya.Event.MOUSE_UP, this, function (res) {
                if (res.target instanceof Laya.Button) {
                    res.target.scale(1, 1);
                }
            });
        }
    }
    ViewManagerLY.actives = {};
    ViewManagerLY.hides = [];
    ViewManagerLY.layers = {};

    class LoadingView extends BaseViewLY {
        onAwake() {
            this.dontDestroyOnLoad = true;
            this._timeNeed2Destroy = -1;
            this.lastProgressV = 0;
        }
        onEnable() {
            super.onEnable();
            this.progressValue = 0;
            this.progressTargetValue = -1;
            this.alpha = 1;
        }
        setContent(value) {
            if (!this.txtContent) {
                return;
            }
            this.txtContent.text = value;
        }
        update(delta) {
            if (this.lastProgressV == 0) {
                Tween.to(this.txt_x, { centerX: -100 }, 200);
            }
            else if (this.lastProgressV < 20 && this.progressValue >= 20) {
                Tween.to(this.txt_zhan, { alpha: 1 }, 200);
            }
            else if (this.lastProgressV < 40 && this.progressValue >= 40) {
                Tween.to(this.txt_yi, { alpha: 1 }, 200);
            }
            this.lastProgressV = this.progressValue;
        }
        updateProgress(progress, duration = 1000) {
            return __awaiter(this, void 0, void 0, function* () {
                let targetValue = progress * 100;
                if (targetValue <= this.progressTargetValue) {
                    return;
                }
                this.progressTargetValue = targetValue;
                if (duration > 0) {
                    yield Tween.to(this, { progressValue: this.progressTargetValue }, duration, null, null, null, null, null, Laya.Handler.create(this, function () {
                    }, null, false));
                }
                else {
                }
                if (progress >= 1) {
                    this.close(null, ViewEffect.Alpha);
                }
            });
        }
    }

    const JoyEvent = {
        JoyStart: "JoyStart",
        JoyMoving: "JoyMoving",
        JoyEnd: "JoyEnd",
    };
    class JoyStick {
        constructor(box, JoyHandleMaxDist, bounds) {
            this.isClickInBounds = false;
            this.isInitJoyStickXY = false;
            this.xValve = 1;
            this.yValve = 1;
            this.xValveOffsets = [];
            this.yValveOffsets = [];
            this.joyStickBox = box;
            this.joyHandleMaxDist = JoyHandleMaxDist;
            this.bounds = bounds;
            this.clickMaxX = this.bounds.x + this.bounds.width;
            this.clickMinY = this.bounds.y - this.bounds.height;
            this.joyStickDir = box.getChildByName("joyStickDir");
            this.joyStickHandle = box.getChildByName("joyStickHandle");
            this.joyStickDir.visible = false;
            this.originJoyStickPos = new Laya.Vector2(this.joyStickBox.x, this.joyStickBox.y);
            this.originJoyStickHandlePos = new Laya.Vector2(this.joyStickHandle.x, this.joyStickHandle.y);
        }
        mouseDown(event) {
            if (!this.isMouseInBounds(event))
                return;
            this.joyStickBox.pos(event.stageX - this.joyStickBox.width / 2, event.stageY - this.joyStickBox.height / 2);
            let point = ViewUtils.getWidgetGlobalPos(this.joyStickHandle);
            this.startJoyStickHandleX = point.x;
            this.startJoyStickHandleY = point.y;
            this.isClickInBounds = true;
            gEvent.event(JoyEvent.JoyStart);
        }
        mouseUp(event) {
            if (!this.isClickInBounds)
                return;
            this.isClickInBounds = false;
            this.joyStickDir.visible = false;
            this.resetJoyStick();
            gEvent.event(JoyEvent.JoyEnd);
        }
        update() {
            if (!this.isClickInBounds || !this.joyStickBox || this.joyStickBox.destroyed)
                return;
            this.xValveOffsets[0] = this.startJoyStickHandleX - this.xValve;
            this.xValveOffsets[1] = this.startJoyStickHandleX + this.xValve;
            this.yValveOffsets[0] = this.startJoyStickHandleY + this.yValve;
            this.yValveOffsets[1] = this.startJoyStickHandleY - this.yValve;
            let mX = Laya.stage.mouseX;
            let mY = Laya.stage.mouseY;
            let tempMX = mX;
            let tempMY = mY;
            if (tempMX >= this.xValveOffsets[0] && tempMX <= this.xValveOffsets[1]) {
                mX = 0;
            }
            else {
                mX = Laya.stage.mouseX - this.startJoyStickHandleX;
            }
            if (tempMY <= this.yValveOffsets[0] && tempMY >= this.yValveOffsets[1]) {
                mY = 0;
            }
            else {
                mY = Laya.stage.mouseY - this.startJoyStickHandleY;
            }
            gVec2.x = mX;
            gVec2.y = mY;
            let dist = Math.sqrt(mX * mX + mY * mY);
            if (mX == 0 && mY == 0 && this.joyStickDir.visible) {
                this.joyStickDir.visible = false;
            }
            if ((mX != 0 || mY != 0) && !this.joyStickDir.visible) {
                this.joyStickDir.visible = true;
            }
            Laya.Vector2.normalize(gVec2, gVec2);
            let angle = Math.atan(gVec2.y / gVec2.x) / Math.PI * 180;
            if (mY > 0 && mX >= 0) {
                angle = Math.abs(angle) - 180;
            }
            if (mY <= 0 && mX >= 0) {
                angle = -Math.abs(angle) + 180;
            }
            this.joyStickDir.rotation = angle;
            if (dist <= this.joyHandleMaxDist) {
                gPoint.x = Laya.stage.mouseX;
                gPoint.y = Laya.stage.mouseY;
                let point = this.joyStickBox.globalToLocal(gPoint);
                this.joyStickHandle.pos(point.x, point.y);
            }
            else {
                gPoint.x = this.startJoyStickHandleX + gVec2.x * this.joyHandleMaxDist;
                gPoint.y = this.startJoyStickHandleY + gVec2.y * this.joyHandleMaxDist;
                let point = this.joyStickBox.globalToLocal(gPoint);
                this.joyStickHandle.pos(point.x, point.y);
                dist = this.joyHandleMaxDist;
            }
            gEvent.event(JoyEvent.JoyMoving, { x: gVec2.x, y: -gVec2.y, dist: dist });
        }
        isMouseInBounds(event) {
            if (event.stageX >= this.bounds.x && event.stageX <= this.clickMaxX &&
                event.stageY <= this.bounds.y && event.stageY >= this.clickMinY) {
                return true;
            }
            return false;
        }
        resetJoyStick() {
            this.joyStickDir.visible = false;
            this.joyStickBox.pos(this.originJoyStickPos.x, this.originJoyStickPos.y);
            this.joyStickHandle.pos(this.originJoyStickHandlePos.x, this.originJoyStickHandlePos.y);
        }
        onEvents() {
            Timer.frameLoop(1, this, this.update);
            Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
            Laya.stage.on(Laya.Event.MOUSE_UP, this, this.mouseUp);
        }
        offEvents() {
            Timer.clear(this, this.update);
            Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
            Laya.stage.off(Laya.Event.MOUSE_UP, this, this.mouseUp);
        }
        setJoyStickState(state) {
            if (!this.joyStickBox || this.joyStickBox.destroyed)
                return;
            this.resetJoyStick();
            this.isClickInBounds = false;
            if (state) {
                this.onEvents();
                this.joyStickBox.alpha = 1;
            }
            else {
                this.offEvents();
                this.joyStickBox.alpha = 0;
            }
        }
    }

    class MainCamera {
        static findCamera(node) {
            for (let i = 0, n = node.numChildren; i < n; i++) {
                let child = node.getChildAt(i);
                if (child.name == "Main Camera") {
                    return child;
                }
                else {
                    let camera = this.findCamera(child);
                    if (camera != null) {
                        return camera;
                    }
                }
            }
            return null;
        }
        static get camera() {
            if (this._camera == null) {
                this._camera = this.findCamera(Laya.stage);
            }
            return this._camera;
        }
        static set camera(camera) {
            this._camera = camera;
        }
        static rayCast(scene, hitResult, maxDistance = 100) {
            if (this.camera == null) {
                return null;
            }
            let tf = this.camera.transform;
            let ray = new Laya.Ray(tf.position, Utils.GetTransformForward(tf));
            return scene.physicsSimulation.rayCast(ray, hitResult, maxDistance);
        }
    }

    class Bomb {
        static effect(url, duration, pos, rot, range, damage, srcCharacter, buffs) {
            if (url && url != "") {
                EffectManager.spawn(CommonRes.obj3D(url), null, pos, rot, duration, false);
            }
            if (range && range > 0) {
                let hiters = mm.fight.scene.findCharacters(srcCharacter.targetCharacterType, pos, range || 0.5, -1, true, { exceptTeam: srcCharacter.team });
                if (hiters && hiters.length > 0) {
                    for (const character of hiters) {
                        character.beAtk(srcCharacter, damage, buffs);
                    }
                }
            }
        }
        static spawn(url, duration, pos, rot, num, range, damage, lastDamage, srcCharacter, durationEffect, buffs) {
            if (pos == null) {
                console.error("[bomb]pos is null");
                return;
            }
            if (!num || num <= 0) {
                return;
            }
            if (durationEffect && durationEffect != "") {
                EffectManager.spawn(CommonRes.obj3D(durationEffect), null, pos, rot, duration, false);
            }
            const gap = duration / num;
            for (let i = 0; i < num; i++) {
                if (i == 0) {
                    Bomb.effect(url, duration, pos.clone(), rot, range, damage || lastDamage || 0, srcCharacter, buffs);
                }
                else {
                    const delay = gap * i;
                    Timer.manualOnce(delay, Bomb, Bomb.effect, [
                        "",
                        duration,
                        pos && pos.clone(),
                        rot && rot.clone(),
                        range,
                        lastDamage || damage || 0,
                        srcCharacter,
                        buffs
                    ]);
                }
            }
        }
    }

    class GridMapUtil {
        static get inst() {
            if (!GridMapUtil._inst) {
                GridMapUtil._inst = new GridMapUtil();
            }
            return GridMapUtil._inst;
        }
        setGridMap(map) {
            this.map = map;
            this.mapWidth = cfg.global.stageMapW;
            this.mapHeight = map.length / this.mapWidth;
            this.halfMapWidth = this.mapWidth / 2;
            this.halfMapHeight = this.mapHeight / 2;
        }
        getMapIdxByLogicPos(logicPos) {
            return logicPos.x + logicPos.y * this.mapWidth;
        }
        getGridTypeByMapIdx(mapIdx) {
            if (mapIdx < 0 || mapIdx >= this.map.length) {
                return eSceneGridType.Block;
            }
            return this.map[mapIdx];
        }
        ifWorldPosOutOfMap(worldPos) {
            return this.ifLogicPosOutOfMap(this.convertWorldPos2LogicPos(worldPos));
        }
        ifLogicPosOutOfMap(logicPos) {
            if (logicPos.x < 0 || logicPos.x >= this.mapWidth || logicPos.y < 0 || logicPos.y >= this.mapHeight) {
                return true;
            }
        }
        getGridTypeByLogicPos(logicPos) {
            if (this.ifLogicPosOutOfMap(logicPos)) {
                return eSceneGridType.Edge;
            }
            let mapIdx = this.getMapIdxByLogicPos(logicPos);
            return this.getGridTypeByMapIdx(mapIdx);
        }
        convertWorldPos2LogicPos(worldPos) {
            let x = Math.floor(-worldPos.x + this.halfMapWidth);
            let y = Math.floor(-worldPos.z + this.halfMapHeight);
            return {
                x: x,
                y: y
            };
        }
        convertLogicPos2WorldPos(logicPos) {
            gVec3.x = -logicPos.x + this.halfMapWidth - 0.5;
            gVec3.y = 0;
            gVec3.z = -logicPos.y + this.halfMapHeight - 0.5;
            return gVec3.clone();
        }
        convertWorldPos2GridPos(worldPos) {
            return this.convertLogicPos2WorldPos(this.convertWorldPos2LogicPos(worldPos));
        }
        getGridTypeByWorldPos(worldPos, outGridPos) {
            let logicPos = this.convertWorldPos2LogicPos(worldPos);
            if (outGridPos != null) {
                outGridPos = this.convertLogicPos2WorldPos(logicPos);
            }
            return this.getGridTypeByLogicPos(logicPos);
        }
        openTheDoor() {
            this.map[5] = eSceneGridType.Gate;
        }
        cleanUp() {
            GridMapUtil._inst = null;
        }
    }

    class SceneShadow {
        static spawn(obj, size = 1) {
            return __awaiter(this, void 0, void 0, function* () {
                if (obj == null || obj.destroyed) {
                    return;
                }
                if (this._root == null) {
                    this._root = new Laya.Sprite();
                    SceneManager.curScene.scene3D.addChild(this._root);
                    Timer.frameLoop(1, this, this.update);
                }
                let shadow = yield Pool.spawn(CommonRes.shadow, this._root, obj.transform.position);
                if (obj.destroyed) {
                    Pool.despawn(shadow);
                    return;
                }
                if (shadow == null) {
                    console.warn("spawn null shadow");
                    return;
                }
                mm.fight.setObjRenderQueue(shadow, RenderQueue.shadow);
                shadow.transform.localScale = new Laya.Vector3(size, size, size);
                let inst = {
                    shadow: shadow,
                    target: obj,
                    shadowOriginSize: size
                };
                this._shadows.push(inst);
            });
        }
        static despawn(obj) {
            for (let i = 0, n = this._shadows.length; i < n; i++) {
                let inst = this._shadows[i];
                if (inst.target == obj) {
                    Pool.despawn(inst.shadow);
                    this._shadows.splice(i, 1);
                    break;
                }
            }
        }
        static clear() {
            for (let inst of this._shadows) {
                Pool.despawn(inst.shadow);
            }
            this._shadows = [];
            this._root = null;
            Timer.clear(this, this.update);
        }
        static update() {
            if (this._shadows == null || this._shadows.length == 0) {
                return;
            }
            for (let i = this._shadows.length - 1; i >= 0; i--) {
                let inst = this._shadows[i];
                if (inst.target == null || inst.target.destroyed ||
                    inst.shadow == null || inst.shadow.destroyed) {
                    this._shadows.splice(i, 1);
                    continue;
                }
                if (inst.target.active) {
                    if (!inst.shadow.active) {
                        inst.shadow.active = true;
                    }
                    let pos = inst.target.transform.position.clone();
                    if (pos.y > 0) {
                        let newSize = inst.shadowOriginSize * (1 - pos.y / 10);
                        if (newSize < 0.1) {
                            newSize = 0.1;
                        }
                        inst.shadow.transform.localScale = new Laya.Vector3(newSize, 1, newSize);
                    }
                    pos.y = 0;
                    inst.shadow.transform.position = pos;
                }
                else {
                    if (inst.shadow.active) {
                        inst.shadow.active = false;
                    }
                }
            }
        }
    }
    SceneShadow._shadows = [];

    class ProjectileBase extends BaseSprite3D {
        constructor(pos, rot, config, damage, param) {
            super();
            this.alive = true;
            this._isFixPos = false;
            if (param) {
                this._param = {};
                for (let k in param) {
                    this._param[k] = param[k];
                }
            }
            this._damage = damage;
            this._config = config;
            this.timeToDestroy = Timer.manualCurMs + this._config.duration;
            this.position = pos;
            this.rotation = rot;
            this.updateLastPosRecState();
            if (this._bRecLastPos) {
                this._lastPos = this.position.clone();
            }
            if (this._config.intimeNum && this._config.intimeNum > 0) {
                this._intimeGap = this._config.duration / this._config.intimeNum;
                this._intimeTime = 0;
            }
            this._bHitBlock = false;
        }
        onAwake() {
            if (!Device.isLowOptDeviceByAuto && this._config.shadowSize != 0) {
                SceneShadow.spawn(this, this._config.shadowSize || 0.2);
            }
        }
        onDestroy() {
            SceneShadow.despawn(this);
        }
        get speed() {
            if (this.srcCharacter && this.srcCharacter.characterType == CharacterType.monster) {
                return (this._speed || 0) * mm.fight.scene.monsterBulletSpeedScale;
            }
            else {
                return this._speed;
            }
        }
        set speed(value) {
            this._speed = value;
        }
        initShow(url) {
            return __awaiter(this, void 0, void 0, function* () {
                this.effect = yield Pool.spawn(url, this, this.position, this.rotation);
                if (this.destroyed) {
                    console.warn("this destroyed");
                    this.effect = null;
                }
            });
        }
        onInit() {
            this._originPos = this.position.clone();
        }
        isCanRebound() {
            return this._param && this._param.path == null && this._param.pingpongCount > 0;
        }
        updateLastPosRecState() {
            if (this.isCanRebound()) {
                this._bRecLastPos = true;
            }
            else {
                this._bRecLastPos = false;
            }
        }
        updateIntimeEffect(deltaMs) {
            if (this._intimeTime == null) {
                return;
            }
            this._intimeTime += deltaMs;
            if (this._intimeTime < this._intimeGap) {
                return;
            }
            this._intimeTime = 0;
            Bomb.spawn(this._config.intimeRes, this._config.intimeDuration, this.position, null, this._config.intimeEffectNum, this._config.intimeRange, null, this._config.intimeLastDamage, this.srcCharacter);
        }
        onUpdate(deltaMs) {
            super.onUpdate(deltaMs);
            if (!this.alive) {
                return;
            }
            if (this.destroyed) {
                return;
            }
            this.doUpdate(deltaMs);
        }
        doUpdate(deltaMs) {
            this._bHitBlock = false;
            if (this.timeToDestroy < Timer.manualCurMs) {
                this._bHitBlock = true;
                this.despawn();
                return true;
            }
            if (this.checkHitBlockArea()) {
                return true;
            }
            if (this.checkHitThenDespawn()) {
                return true;
            }
            if (this._intimeTime != null) {
                this.updateIntimeEffect(deltaMs);
            }
            if (this._bRecLastPos) {
                this._lastPos.x = this.position.x;
                this._lastPos.y = this.position.y;
                this._lastPos.z = this.position.z;
            }
            return false;
        }
        spawnSplitBullet(bulletID, bulletNum) {
            let bulletCfg = cfg.bullet[bulletID];
            let angleInterval = 360 / bulletNum;
            let rot = new Laya.Quaternion();
            let initRot = angleInterval / 2;
            for (let i = 0; i < bulletNum; i++) {
                Laya.Quaternion.createFromYawPitchRoll(MathUtils.angleToRandin(angleInterval * i + initRot), 0, 0, rot);
                Projectile.spawn(bulletCfg, this._damage, this.srcCharacter, this.position.clone(), rot.clone(), undefined, { target: this._param.target });
            }
        }
        despawn() {
            this.alive = false;
            if (!this._lastHited && this._config.splitBulletID) {
                this.spawnSplitBullet(this._config.splitBulletID, this._config.splitNum);
            }
            Projectile.despawn(this);
        }
        checkHitBlockArea() {
            if (this._config.isStrike == 1) {
                return false;
            }
            let gridType = mm.fight.scene.getGridTypeByWorld(this.position);
            if (gridType == eSceneGridType.Block || gridType == eSceneGridType.Edge) {
                this._bHitBlock = true;
                if (this._param.isCheckHitblock &&
                    gridType != eSceneGridType.Edge) {
                    this.srcCharacter.hitBlock();
                }
                if (this.isCanRebound()) {
                    this._param.pingpongCount--;
                    this.position = mm.fight.rebound(this.position, this._lastPos, this._translateSpdV3);
                    Laya.Vector3.add(this.position, this._translateSpdV3, gVec3);
                    this.lookAt(gVec3);
                    this.updateLastPosRecState();
                }
                else {
                    this.despawn();
                    return true;
                }
            }
            return false;
        }
        checkHit(dir, angle) {
            if (this._config.isCheckHit == 0) {
                return false;
            }
            let hiter = null;
            if (Device.isLowOptDeviceByAuto) {
                hiter = mm.fight.scene.findCharacterByLogicPos(this.srcCharacter.targetCharacterType, GridMapUtil.inst.convertWorldPos2LogicPos(this.position), true, { exceptTeam: this.srcCharacter.team, exceptCharacters: [this._lastHited] });
            }
            else {
                let hiters = mm.fight.scene.findCharacters(this.srcCharacter.targetCharacterType, this.position.clone(), this._config.hitRange || 0.5, 1, true, { exceptTeam: this.srcCharacter.team, exceptCharacters: [this._lastHited], srcDir: dir, angle: angle });
                if (hiters && hiters.length > 0) {
                    hiter = hiters[0];
                }
            }
            if (hiter) {
                let damage = this._damage;
                if (this._config.damageByDis != null) {
                    let dis = Laya.Vector3.distance(this.position, this._originPos);
                    damage += this._config.damageByDis * dis;
                }
                let curTarget = hiter;
                this._lastHited = curTarget;
                curTarget.beAtk(this.srcCharacter, damage, this._param.buffs, this._param.isCrit, this.position.clone(), this._config.hitbackDis);
                this._param.isCheckHitblock = false;
                if (this._config.beAtkEffect && this._config.beAtkEffect != "") {
                    EffectManager.spawn(CommonRes.obj3D(this._config.beAtkEffect), undefined, this.position, this.rotation, 250, true);
                }
                if (this._param.jumpCount > 0) {
                    this._param.jumpCount--;
                    if (this.jumpToOtherTarget(curTarget)) {
                        return false;
                    }
                }
                if (this._param.strikeCount > 0) {
                    this._param.strikeCount--;
                    return false;
                }
                return true;
            }
            return false;
        }
        checkHitThenDespawn() {
            let ishited = this.checkHit();
            if (ishited) {
                this.despawn();
                return true;
            }
            return false;
        }
        bomb() {
            if (this._bHitBlock && this._config.projectile != ProjectileType.parabola && Device.isLowOptDeviceByAuto) {
                return;
            }
            let bombNum = 1;
            if (this._config.bombNum && this._config.bombNum > 0) {
                bombNum = this._config.bombNum;
            }
            let damage = this._damage;
            if (this._config.damageByDis != null) {
                let dis = Laya.Vector3.distance(this.position, this._originPos);
                damage += this._config.damageByDis * dis;
            }
            Bomb.spawn(this._config.bombRes, this._config.bombDuration, this.position, null, bombNum, this._config.bombRange, damage, this._config.bombLastDamage, this.srcCharacter, this._config.bombDurationRes);
        }
        jumpToOtherTarget(curTarget) {
            return false;
        }
        set duration(value) {
            this._duration = value;
            this.overTime = Timer.manualCurMs + this._duration;
        }
        get duration() {
            return this._duration;
        }
        set overTime(value) {
            this._overTime = value;
            this._duration = this._overTime - Timer.manualCurMs;
        }
        get overTime() {
            return this._overTime;
        }
        onMoveEnd() {
            this.despawn();
        }
    }

    class ProjectileLine extends ProjectileBase {
        onInit() {
            super.onInit();
            if (this.speed == null || this.speed == 0) {
                this.checkHit();
            }
            else {
                if (this._param.path) {
                    if (this._param.path.length == 0) {
                        console.warn("path length is zero");
                    }
                    else {
                        this._paths = new Array(...this._param.path);
                        this.movePath();
                    }
                }
                else {
                    Laya.Vector3.scale(this.forward, this.speed * this.duration, gVec3);
                    Laya.Vector3.add(this.position, gVec3, gVec3);
                    this.moveTo(gVec3, this.duration);
                }
            }
        }
        movePath() {
            let path = this._paths.shift();
            let dis = Laya.Vector3.distance(path.targetPos, this.position);
            if (dis < 1) {
                this.position = path.targetPos;
                this.onMoveEnd();
            }
            else {
                let duration = dis / this.speed;
                this.moveTo(path.targetPos, duration);
            }
        }
        onMoveEnd() {
            if (this._paths && this._paths.length > 0) {
                this.movePath();
            }
            else {
                super.onMoveEnd();
            }
        }
        jumpToOtherTarget(curTarget) {
            if (this.speed == null || this.speed == 0) {
                return false;
            }
            this.position = curTarget.position;
            let nextTargets = mm.fight.scene.findCharacters(this.srcCharacter.targetCharacterType, this.position, cfg.global.bulletJumpRange || -1, 1, false, { exceptTeam: this.srcCharacter.team, exceptCharacters: [curTarget] });
            if (nextTargets && nextTargets.length > 0) {
                let nextTarget = nextTargets[0];
                let dis = Laya.Vector3.distance(this.position, nextTarget.position);
                this.duration = dis / this.speed;
                this._damage /= 2;
                this.moveTo(nextTarget.position, this.duration);
                return true;
            }
            return false;
        }
    }

    class ProjectileParabola extends ProjectileBase {
        constructor(pos, rot, config, damage, param, target) {
            super(pos, rot, config, damage, param);
            if (target) {
                this._targetPos = target;
            }
        }
        onInit() {
            super.onInit();
            let duration = this.duration;
            if (this._targetPos) {
                let disTarget = Laya.Vector3.distance(this._targetPos, this.position);
                let durationTarget = disTarget / this.speed;
                if (durationTarget < this.duration) {
                    this.timeToDestroy = Timer.manualCurMs + durationTarget;
                    duration = durationTarget;
                }
                this.lookAt(this._targetPos);
            }
            Laya.Vector3.scale(Utils.GetTransformForward(this.transform), this.speed * duration, gVec3);
            Laya.Vector3.add(this.position, gVec3, gVec3);
            this.moveTo(gVec3, duration, null, this._config.ySpeed || 0.001, this._config.shouldLookDown === 0 ? 0 : 1);
        }
        jumpToOtherTarget(curTarget) {
            if (this.speed == null || this.speed == 0) {
                return false;
            }
            this.position = curTarget.position;
            let nextTargets = mm.fight.scene.findCharacters(this.srcCharacter.targetCharacterType, this.position, cfg.global.bulletJumpRange || -1, 1, false, { exceptTeam: this.srcCharacter.team, exceptCharacters: [curTarget] });
            if (nextTargets && nextTargets.length > 0) {
                let nextTarget = nextTargets[0];
                let targetPos = nextTarget.position;
                let disTarget = Laya.Vector3.distance(targetPos, this.position);
                let duration = disTarget / this.speed;
                this.timeToDestroy = Timer.manualCurMs + duration;
                this._damage /= 2;
                this.moveTo(targetPos, duration, null, this._config.ySpeed || 0.001, this._config.shouldLookDown === 0 ? 0 : 1);
                return true;
            }
            return false;
        }
    }

    class ProjectileFan extends ProjectileBase {
        onInit() {
            super.onInit();
            this._checkGap = this.duration / this._config.bombNum;
            this._remainTime = this._checkGap;
        }
        checkHit() {
            let hiter = mm.fight.scene.findCharacters(this.srcCharacter.targetCharacterType, this.position, this._config.hitRange || 5, -1, true, { exceptTeam: this.srcCharacter.team, srcDir: this.forward, angle: this._config.fanAngle });
            if (hiter && hiter.length > 0) {
                let damage = this._damage;
                let curTarget = hiter[0];
                this._lastHited = curTarget;
                curTarget.beAtk(this.srcCharacter, damage, this._param.buffs, this._param.isCrit, this.position.clone(), this._config.hitbackDis);
                this._param.isCheckHitblock = false;
                if (this._config.beAtkEffect && this._config.beAtkEffect != "") {
                    EffectManager.spawn(CommonRes.obj3D(this._config.beAtkEffect), null, curTarget.position, this.rotation);
                }
                return true;
            }
            return false;
        }
        onUpdate(deltaMs) {
            super.onUpdate(deltaMs);
            if (!this.alive) {
                return;
            }
            if (this.destroyed) {
                return;
            }
            if (this._remainTime > 0) {
                this._remainTime -= deltaMs;
                return;
            }
            this._remainTime = this._checkGap;
            this.checkHit();
        }
        onDestroy() {
            super.onDestroy();
            this.checkHit();
        }
        checkHitThenDespawn() {
            return false;
        }
    }

    class ProjectileLineSin extends ProjectileBase {
        onInit() {
            super.onInit();
            if (this.speed == null || this.speed == 0) {
                this.checkHit();
            }
            else {
                Laya.Vector3.scale(this.forward, this.speed * this.duration, gVec3);
                Laya.Vector3.add(this.position, gVec3, gVec3);
                this.moveTo(gVec3, this.duration);
            }
            this._angleSpd = this._config.angleSpd;
            this._curAngleSpd = this._angleSpd;
            this._maxAngle = this.rotationEulerY + this._config.limitAngle;
            this._minAngle = this.rotationEulerY - this._config.limitAngle;
            this.rotationEulerY -= this._config.limitAngle;
        }
        onUpdate(deltaMs) {
            super.onUpdate(deltaMs);
            if (!this.alive) {
                return;
            }
            if (this.destroyed) {
                return;
            }
            if (this._curAngleSpd > 0) {
                if (this.rotationEulerY > this._maxAngle) {
                    this._curAngleSpd = -this._angleSpd;
                }
            }
            else if (this._curAngleSpd < 0) {
                if (this.rotationEulerY < this._minAngle) {
                    this._curAngleSpd = this._angleSpd;
                }
            }
            this.rotationEulerY += this._curAngleSpd;
        }
        jumpToOtherTarget(curTarget) {
            if (this.speed == null || this.speed == 0) {
                return false;
            }
            this.position = curTarget.position;
            let nextTargets = mm.fight.scene.findCharacters(this.srcCharacter.targetCharacterType, this.position, -1, 1, false, { exceptTeam: this.srcCharacter.team, exceptCharacters: [curTarget] });
            if (nextTargets && nextTargets.length > 0) {
                let nextTarget = nextTargets[0];
                let dis = Laya.Vector3.distance(this.position, nextTarget.position);
                this.duration = dis / this.speed;
                this._damage /= 2;
                this.moveTo(nextTarget.position, this.duration);
                return true;
            }
            return false;
        }
    }

    class ProjectileTrace extends ProjectileBase {
        onInit() {
            super.onInit();
            if (this._param.target &&
                this._param.target.alive) {
                this.updateDir();
            }
            this._followTime = this._config.followTime || 0;
        }
        updateDir() {
            if (this._param.target &&
                this._param.target.alive) {
                Laya.Vector3.subtract(this._param.target.transform.position, this.position, gVec3);
                gVec3.y = 0;
                Laya.Vector3.normalize(gVec3, gVec3);
                this.deserveDir = gVec3.clone();
            }
        }
        doUpdate(deltaMs) {
            this.updateDir();
            if (this.deserveDir && this._followTime > 0) {
                let angle = MathUtils.vecRad(Utils.GetTransformForward(this.transform), this.deserveDir, false, false);
                let rotMax = this._config.followSpeed / 1000 * deltaMs;
                let t = 1;
                if (rotMax < angle) {
                    t = rotMax / angle;
                }
                Laya.Vector3.lerp(Utils.GetTransformForward(this.transform), this.deserveDir, t, gVec3);
                Laya.Vector3.add(this.position, gVec3, gVec3);
                this.lookAt(gVec3);
                this._followTime -= deltaMs;
            }
            Laya.Vector3.scale(Utils.GetTransformForward(this.transform), this._speed * deltaMs, gVec3);
            this.transform.translate(gVec3, false);
            return super.doUpdate(deltaMs);
        }
    }

    class ProjectileLaser extends ProjectileBase {
        constructor(pos, rot, config, damage, param) {
            pos.y = 0;
            super(pos, rot, config, damage, param);
        }
        initShow(url) {
            const _super = Object.create(null, {
                initShow: { get: () => super.initShow }
            });
            return __awaiter(this, void 0, void 0, function* () {
                yield _super.initShow.call(this, url);
                if (this.effect) {
                    mm.fight.setObjRenderQueue(this.effect, 4000);
                }
            });
        }
        onInit() {
            super.onInit();
            this._checkGap = this.duration / this._config.bombNum;
            this._remainTime = this._checkGap;
        }
        checkHit() {
            let findCharParam = {
                exceptTeam: this.srcCharacter.team,
                srcDir: this.forward,
                lineHalfW: this._config.laserWidth / 2,
            };
            let beHitChars = mm.fight.scene.findCharacters(this.srcCharacter.targetCharacterType, this.position, undefined, -1, false, findCharParam);
            if (beHitChars && beHitChars.length > 0) {
                for (let char of beHitChars) {
                    char.beAtk(this.srcCharacter, this._damage, this._param.buffs, this._param.isCrit, this.position.clone(), this._config.hitbackDis);
                    if (this._config.beAtkEffect && this._config.beAtkEffect != "") {
                        EffectManager.spawn(CommonRes.obj3D(this._config.beAtkEffect), null, char.position, this.rotation);
                    }
                }
            }
            return true;
        }
        checkHitThenDespawn() {
            return false;
        }
        checkHitBlockArea() {
            return false;
        }
        updatePosAndRot() {
            let atkNode = this.srcCharacter.getAtkNode();
            let atkNodePos = atkNode.transform.position.clone();
            atkNodePos.y = 0;
            this.position = atkNodePos;
            this.rotation = atkNode.transform.rotation;
        }
        onUpdate(deltaMs) {
            if (!this.srcCharacter.alive) {
                this.destroy();
                return;
            }
            if (!this.alive) {
                return;
            }
            super.onUpdate(deltaMs);
            if (this.destroyed) {
                return;
            }
            if (FaceType.followTarget == this._config.faceType) {
                this.updatePosAndRot();
            }
            if (this._remainTime > 0) {
                this._remainTime -= deltaMs;
                return;
            }
            this._remainTime = this._checkGap;
            this.checkHit();
        }
    }

    var ProjectileType;
    (function (ProjectileType) {
        ProjectileType[ProjectileType["line"] = 0] = "line";
        ProjectileType[ProjectileType["parabola"] = 2] = "parabola";
        ProjectileType[ProjectileType["lineDisDamage"] = 3] = "lineDisDamage";
        ProjectileType[ProjectileType["fan"] = 4] = "fan";
        ProjectileType[ProjectileType["lineSin"] = 5] = "lineSin";
        ProjectileType[ProjectileType["trace"] = 6] = "trace";
        ProjectileType[ProjectileType["laser"] = 7] = "laser";
    })(ProjectileType || (ProjectileType = {}));
    class Projectile {
        static setup() {
            this.actives = [];
        }
        static spawnShotGun(config, damage, srcCharacter, pos, rot, targetPos, param) {
            let coverRadian = config.fanAngle / 180 * Math.PI;
            if (config.scatterNum == 1) {
                Projectile.spawn(config, damage, srcCharacter, pos, rot, targetPos, param);
            }
            else {
                let intervalNum = config.fanAngle == 360 ? config.scatterNum : config.scatterNum - 1;
                let radInterval = coverRadian / intervalNum;
                rot.rotateY(-coverRadian / 2, gQuat);
                let tInterval;
                if (!isNaN(config.scatterDuration) && config.scatterDuration > 0) {
                    tInterval = config.scatterDuration / (config.scatterNum - 1);
                }
                for (let i = 0; i < config.scatterNum; i++) {
                    if (!isNaN(tInterval)) {
                        let rot = gQuat.clone();
                        Timer.manualOnce(i * tInterval, this, () => {
                            Projectile.spawn(config, damage, srcCharacter, pos, rot, targetPos, param);
                        });
                    }
                    else {
                        Projectile.spawn(config, damage, srcCharacter, pos, gQuat.clone(), targetPos, param);
                    }
                    gQuat.rotateY(radInterval, gQuat);
                }
            }
        }
        static spawn(config, damage, srcCharacter, pos, rot, targetPos, param) {
            let inst;
            switch (config.projectile) {
                case ProjectileType.line:
                    {
                        inst = new ProjectileLine(pos, rot, config, damage, param);
                    }
                    break;
                case ProjectileType.lineSin:
                    {
                        inst = new ProjectileLineSin(pos, rot, config, damage, param);
                    }
                    break;
                case ProjectileType.trace:
                    {
                        inst = new ProjectileTrace(pos, rot, config, damage, param);
                    }
                    break;
                case ProjectileType.parabola:
                    {
                        inst = new ProjectileParabola(pos, rot, config, damage, param, targetPos);
                    }
                    break;
                case ProjectileType.fan:
                    {
                        inst = new ProjectileFan(pos, rot, config, damage, param);
                    }
                    break;
                case ProjectileType.laser:
                    inst = new ProjectileLaser(pos, rot, config, damage, param);
                    break;
                default: {
                    throw Error("unknown projectile type " + config.projectile);
                }
            }
            inst.initShow(CommonRes.obj3D(config.res));
            mm.fight.scene.addChild(inst);
            inst.srcCharacter = srcCharacter;
            inst.duration = config.duration;
            if (typeof (config.speed) == "number") {
                inst.speed = config.speed;
            }
            else {
                if (config.speed.length == 1) {
                    inst.speed = config.speed[0];
                }
                else {
                    inst.speed = MathUtils.randomWithLimit(config.speed[0], config.speed[1]);
                }
            }
            this.actives.push(inst);
            if (config.randY) {
                let rotation = inst.rotationEuler;
                rotation.y += (MathUtils.random() - 0.5) * config.randY;
                inst.rotationEuler = rotation.clone();
            }
            inst.onInit();
            if (config.bulletSound) {
                AudioManager.playSound(config.bulletSound);
            }
        }
        static despawn(inst) {
            let index = this.actives.indexOf(inst);
            if (index == -1) {
                console.info("[projectile]despawn fail, not found");
                return;
            }
            this.actives.splice(index, 1);
            inst.bomb();
            Pool.despawn(inst.effect);
            inst.destroy();
        }
        static clear() {
            for (const projectile of this.actives) {
                projectile.destroy();
            }
            this.actives = [];
        }
        static onUpdate(deltaMs) {
            for (let i = this.actives.length - 1; i >= 0; i--) {
                let projectile = this.actives[i];
                projectile.onUpdate(deltaMs);
                if (projectile.overTime < Timer.manualCurMs) {
                    this.despawn(projectile);
                }
            }
        }
        static onLateUpdate(deltaMs) {
            for (let i = this.actives.length - 1; i >= 0; i--) {
                const projectile = this.actives[i];
                projectile.onLateUpdate(deltaMs);
            }
        }
    }

    class AIFSM extends Laya.Script {
        constructor() {
            super();
            this._totalWeight = 0;
            this._orderStatuses = [];
            this._updateRemainTime = 0;
        }
        get character() {
            return this.owner;
        }
        onAwake() {
            this.isRunning = mm.fight.scene.isPlaying;
        }
        setDefaultStatus(status) {
            let index = this._statuses.indexOf(status);
            if (index == -1) {
                console.warn("set default status failed, not exist");
                return;
            }
            if (this._curStatus != status) {
                status.onEnter();
            }
            this._curStatus = status;
            this._defaultStatus = status;
        }
        addStatus(status) {
            status.fsm = this;
            if (this._statuses == null) {
                this._statuses = new Array(status);
            }
            else {
                this._statuses.push(status);
            }
            this._totalWeight += status.weight;
            let statuses = null;
            for (let tempStatuses of this._orderStatuses) {
                if (tempStatuses[0].order == status.order) {
                    tempStatuses.push(status);
                    statuses = tempStatuses;
                    break;
                }
            }
            if (statuses == null) {
                this._orderStatuses.push([status]);
                this._orderStatuses.sort(this.sortStatuses);
            }
            return status;
        }
        setFirstStatusAsDefaultStatus() {
            if (this._orderStatuses == null || this._orderStatuses.length == 0) {
                return;
            }
            this.setDefaultStatus(this._orderStatuses[0][0]);
        }
        sortStatuses(a, b) {
            return a[0].order - b[0].order;
        }
        enterStatus(status) {
            if (this._curStatus) {
                this._curStatus.onLeave();
            }
            this._curStatus = status;
            this._curStatus.onEnter();
        }
        enterDefaultStatus() {
            this.enterStatus(this._defaultStatus);
        }
        enterNextStatus() {
            if (this._orderStatuses == null) {
                return;
            }
            let index = 0;
            for (let i = 0, n = this._orderStatuses.length; i < n; i++) {
                let statuses = this._orderStatuses[i];
                if (statuses[0].order == this._curStatus.order) {
                    index = i;
                    break;
                }
            }
            index++;
            if (index >= this._orderStatuses.length) {
                index = 0;
            }
            let statuses = this._orderStatuses[index];
            if (statuses != null) {
                if (statuses.length == 1) {
                    this.enterStatus(statuses[0]);
                }
                else {
                    let totalWeight = 0;
                    for (let i = 0, n = statuses.length; i < n; i++) {
                        totalWeight += statuses[i].weight;
                    }
                    for (let status of statuses) {
                        if (MathUtils.random() * totalWeight < status.weight) {
                            this.enterStatus(status);
                        }
                    }
                }
            }
        }
        enterRandomStatus() {
            let totalWeight = this._totalWeight;
            for (let status of this._statuses) {
                if (MathUtils.random() * totalWeight < status.weight) {
                    this.enterStatus(status);
                    break;
                }
                else {
                    totalWeight -= status.weight;
                }
            }
        }
        get isWorking() {
            return this.isRunning && this.character.alive;
        }
        start() {
            this.isRunning = true;
        }
        stop() {
            this.isRunning = false;
        }
        onManualUpdate(deltaMs) {
            if (!this.isWorking) {
                return;
            }
            for (let i = 0, n = this._statuses.length; i < n; i++) {
                let status = this._statuses[i];
                if (status != this._curStatus && status.anyTrigger()) {
                    this.enterStatus(status);
                }
            }
            if (this._curStatus) {
                if (this._curStatus.onUpdate(deltaMs)) {
                    this.enterNextStatus();
                }
            }
        }
    }

    const FightEvent = {
        start: "fight.start",
        pause: "fight.pause",
        over: "fight.over",
        resume: "fight.resume",
        contactWithBonusMonster: "fight.contactWithBonusMonster",
        takeBonusFini: "fight.takeBonusFini",
        showDragJoyTip: "fight.showDragJoyTip",
        hideDragJoyTip: "fight.hideDragJoyTip",
        showRelease2FireTip: "fight.showRelease2FireTip",
        hideRelease2FireTip: "fight.hideRelease2FireTip",
        showReloadBtn: "fight.showReloadBtn",
        showDragRightJoyTip: "fight.showDragRightJoyTip",
        hideDragRightJoyTip: "fight.hideDragRightJoyTip",
    };
    const MainEvent = {
        selChapChanged: "main.selChapChanged",
        showShopView: "main.showShopView",
        hideShopView: "main.hideShopView",
    };
    const GMEvent = {
        changeStage: "gm.changeStage",
        changeTankRankLV: "gm.changeTankRankLV",
    };

    class AIStatus {
        constructor(weight, order = 0) {
            this.weight = weight;
            this.order = order;
        }
        get character() {
            return this.fsm.owner;
        }
        trigger() {
            return false;
        }
        anyTrigger() {
            return false;
        }
        onEnter() {
            this.isRunning = true;
        }
        onUpdate(deltaMs) {
            return false;
        }
        onLeave() {
            this.isRunning = false;
        }
    }

    class AIStatusIdle extends AIStatus {
        constructor(weight, order, duration) {
            super(weight, order);
            this._duration = duration;
        }
        onEnter() {
            super.onEnter();
            this._overTime = Timer.manualCurMs + this._duration;
        }
        onUpdate(deltaMs) {
            super.onUpdate(deltaMs);
            if (Timer.manualCurMs > this._overTime) {
                return true;
            }
            return false;
        }
    }

    class AIStatusMove extends AIStatus {
        constructor(weight, order, moveType, moveDuration) {
            super(weight, order);
            if (typeof (moveType) != "number") {
                this._moveTypes = moveType;
            }
            else {
                this._moveType = moveType;
            }
            this._moveDuration = moveDuration;
        }
        randomDir(tryCount = 3) {
            let deltaX = (MathUtils.random() - 0.5) * 10;
            let deltaY = (MathUtils.random() - 0.5) * 10;
            gVec3.x = deltaX;
            gVec3.z = deltaY;
            gVec3.y = 0;
            Laya.Vector3.normalize(gVec3, gVec3);
            if (tryCount > 0) {
                let nextPos = new Laya.Vector3();
                Laya.Vector3.add(this.character.position, gVec3, nextPos);
                if (!this.character.ifWorldposWalkable(nextPos)) {
                    this.randomDir(--tryCount);
                    return;
                }
            }
            this._moveDir = gVec3.clone();
        }
        traceRole() {
            this.character.AStarTrace();
        }
        reboundMove() {
            this._moveOverTime = -1;
            this.randomDir();
        }
        burrowMove() {
            this._moveOverTime = Timer.manualCurMs + this.character.getMoveDura();
            this.character.burrowMove();
        }
        onEnter() {
            super.onEnter();
            if (this._moveTypes != null) {
                this._moveType = MathUtils.randomWeight(this._moveTypes);
            }
            if (this._moveType == AIMoveType.none) {
                this.fsm.enterRandomStatus();
                return;
            }
            switch (this._moveType) {
                case AIMoveType.random:
                    this._moveOverTime = Timer.manualCurMs + this._moveDuration;
                    this.randomDir();
                    break;
                case AIMoveType.traceRole:
                    this._moveOverTime = Timer.manualCurMs + this._moveDuration;
                    break;
                case AIMoveType.rebound:
                    this.reboundMove();
                    break;
                case AIMoveType.burrow:
                    this.burrowMove();
                    break;
            }
        }
        onUpdate(deltaMs) {
            super.onUpdate(deltaMs);
            if (!this.character.canMove()) {
                return false;
            }
            switch (this._moveType) {
                case AIMoveType.random:
                    {
                        this.character.move(this._moveDir.clone());
                    }
                    break;
                case AIMoveType.traceRole:
                    {
                        if (!this.character.isMoving) {
                            this.traceRole();
                        }
                    }
                    break;
                case AIMoveType.rebound:
                    if (!this.character.reboundDir) {
                        this.character.reboundDir = this._moveDir;
                    }
                    this.character.move(this.character.reboundDir);
                    break;
            }
            if (this._moveOverTime != -1) {
                if (this._moveOverTime < Timer.manualCurMs) {
                    this.character.stopMove();
                    return true;
                }
            }
            return false;
        }
    }

    class AIStatusAtk extends AIStatus {
        constructor(weight, order, atkCount, atkGap) {
            super(weight, order);
            this._atkCount = atkCount;
            this._atkGap = atkGap;
        }
        onEnter() {
            super.onEnter();
            this._curAtkCount = this._atkCount;
            this._nextAtkTime = this._nextAtkTime || 0;
        }
        onUpdate(deltaMs) {
            super.onUpdate(deltaMs);
            if (this._curAtkCount <= 0) {
                return true;
            }
            let target = this.character.target;
            if (target != null &&
                target.alive &&
                target.visible) {
                if (this._nextAtkTime != -1 && this._nextAtkTime < Timer.manualCurMs) {
                    this.character.atk()
                        .then(() => {
                        this._curAtkCount--;
                        this._nextAtkTime = Timer.manualCurMs + this._atkGap;
                    });
                    this._nextAtkTime = -1;
                }
            }
            else {
                return true;
            }
            return false;
        }
    }

    class AStar {
        static setup(isEnableDiagonals, acceptableTiles) {
            this.acceptableTiles = acceptableTiles;
            this.astar = new EasyStar.js();
            if (isEnableDiagonals) {
                this.astar.enableDiagonals();
            }
            this.astar.enableSync();
            this.astar.setAcceptableTiles(acceptableTiles);
        }
        static setGrids(grids) {
            this.grids = grids;
            this.astar.setGrid(grids);
        }
        static getGridType(x, y) {
            try {
                return this.grids[y][x];
            }
            catch (err) {
                console.error(x + "," + y + ":" + err);
            }
        }
        static isGridWalkable(x, y) {
            let gridType = this.getGridType(x, y);
            for (let type of this.acceptableTiles) {
                if (type == gridType) {
                    return true;
                }
            }
            return false;
        }
        static isGridBlock(x, y) {
            return !this.isGridWalkable(x, y);
        }
        static transfer(map, col, row) {
            let grids = [];
            for (let r = 0; r < row; r++) {
                let line = [];
                for (let c = 0; c < col; c++) {
                    line.push(map[r * col + c]);
                }
                grids.push(line);
            }
            return grids;
        }
        static findPath(startX, startY, endX, endY, callback) {
            return this.astar.findPath(startX, startY, endX, endY, callback);
        }
        static calculate() {
            this.astar.calculate();
        }
        static pathTo(startX, startY, endX, endY) {
            return __awaiter(this, void 0, void 0, function* () {
                return new Promise((resolve) => {
                    this.findPath(startX, startY, endX, endY, function (points) {
                        resolve(points);
                    });
                    this.astar.calculate();
                });
            });
        }
        static pathToAtOnce(startX, startY, endX, endY) {
            this.findPath(startX, startY, endX, endY, null);
            return this.astar.calculateAtOnce();
        }
        static cacelPath(id) {
            this.astar.cancelPath(id);
        }
    }

    var eAtkMode;
    (function (eAtkMode) {
        eAtkMode[eAtkMode["Bullet"] = 1] = "Bullet";
        eAtkMode[eAtkMode["Skill"] = 2] = "Skill";
    })(eAtkMode || (eAtkMode = {}));
    class Character extends BaseSprite3D {
        constructor(actorID, attr) {
            super();
            this._EarlyWarningSpArr = [];
            this._tempDir = new Laya.Vector3();
            this.actorId = actorID;
            this._isFixPos = true;
            this._buffs = [];
            this._atkBuffs = [];
            this._durationBuffs = [];
            this._findTargetTime = 0;
            this.config = cfg.actor[actorID];
            this._nextTimeToAtk = 0;
            this._atkIndex = 0;
            this._toRecoverMpTime = 0;
            this.alive = true;
            this.size = 1;
            this.team = 0;
            this.visible = true;
            this.unsearchable = false;
            this.reliveCount = 0;
            this.attr = {
                level: 0,
                exp: 0,
                expScale: 1,
                hp: this.config.hp,
                hpMax: this.config.hp,
                hpBase: this.config.hp,
                atk: this.config.atk,
                atkBase: this.config.atk,
                atkHpRatio: 0,
                atkGap: this.config.atkGap,
                aSpd: 1,
                atkSpeedHpRatio: 0,
                moveSpeed: this.config.moveSpeed,
                crit: this.config.crit,
                critDmgScale: 1,
                killRecoverHpRatio: 0,
                hitRecoverHpRatio: 0,
                bulletDamageScale: 1,
                healthScale: 1,
                avoidance: 0,
                dmgReduceByPercent: 0,
                dmgReduceByValue: 0,
                contactDmgReduce: 0,
                contactDmgReduceByValue: 0,
                bulletDmgReduce: 0,
                bulletDmgReduceByValue: 0,
                petAtk: 0,
                petCrit: 0,
                petCritDmg: 0,
                XPRecAddition: 0,
                meleeExtDmg: 0,
                remoteExtDmg: 0,
                inspire: 0,
                instantKillRate: 0,
                deathBomb: undefined,
                deathFreeze: undefined,
            };
            if (attr) {
                if (attr["atk"]) {
                    this.attr.atkBase += attr["atk"];
                    this.attr.atk = this.attr.atkBase;
                }
                if (attr["atkRate"]) {
                    this.attr.atkBase *= (1 + attr["atkRate"]);
                    this.attr.atk = this.attr.atkBase;
                }
                if (attr["hp"]) {
                    this.attr.hpBase += attr["hp"];
                    this.attr.hp = this.attr.hpBase;
                    this.attr.hpMax = this.attr.hpBase;
                }
                if (attr["DRRate"]) {
                    this.attr.dmgReduceByPercent = +attr["DRRate"];
                }
                if (attr["CDRRate"]) {
                    this.attr.contactDmgReduce += attr["CDRRate"];
                }
                if (attr["BDRRate"]) {
                    this.attr.bulletDmgReduce += attr["BDRRate"];
                }
                if (attr["dodge"]) {
                    this.attr.avoidance += attr["dodge"];
                }
                if (attr["crit"]) {
                    this.attr.crit += attr["crit"] * 100;
                }
                if (attr["critDam"]) {
                    this.attr.critDmgScale += attr["critDam"];
                }
                if (attr["aspd"]) {
                    this.attr.aSpd += attr["aspd"];
                }
                if (attr["meleeAtk"]) {
                    this.attr.meleeExtDmg = attr["meleeAtk"];
                }
                if (attr["remoteAtk"]) {
                    this.attr.remoteExtDmg = attr["remoteAtk"];
                }
                if (attr["contactDmgReduce"]) {
                    this.attr.contactDmgReduce += attr["contactDmgReduce"];
                }
                if (attr["contactDmgReduceByValue"]) {
                    this.attr.contactDmgReduceByValue += attr["contactDmgReduceByValue"];
                }
                if (attr["bulletDmgReduce"]) {
                    this.attr.bulletDmgReduce += attr["bulletDmgReduce"];
                }
                if (attr["bulletDmgReduceByValue"]) {
                    this.attr.bulletDmgReduceByValue += attr["bulletDmgReduceByValue"];
                }
                if (attr["XPRecAddition"]) {
                    this.attr.XPRecAddition += attr["XPRecAddition"];
                }
                if (attr["inspire"]) {
                    this.attr.inspire += attr["inspire"];
                }
                if (attr["weaponID"]) {
                    this._weaponID = attr["weaponID"];
                    this._weaponBulletID = cfg.item[this._weaponID].bulletId;
                }
                if (attr["clothingID"]) {
                    this._clothingID = attr["clothingID"];
                }
            }
            this.isFireBullet = false;
            this.isFreezeBullet = false;
            this.bulletStrikeCount = 0;
            this.bulletForwardCount = 1;
            this.bulletSideCount = 0;
            this.bulletHitbackCount = 0;
            this.bulletJumpCount = 0;
            this.bulletMultiCount = 0;
            this.bulletBackwardCount = 0;
            this.bulletSide2Count = 0;
            this.modelRadius = this.config.modelRadius || 0.5;
            let size = this.getModelScale();
            this.transform.localScale = new Laya.Vector3(size, size, size);
            this.refreshMapBoundary();
            this.addConfigBuff();
            this._bOnJump = false;
            this._bOnRush = false;
            this._bOnArmor = false;
            this._canBeAtk = true;
            this._bAnimStateAvailableArr = {};
            for (let k in AnimatorKey) {
                this._bAnimStateAvailableArr[k] = false;
            }
            this._bCannonAnimStateAvailableArr = {};
            for (let k in AnimatorKey) {
                this._bCannonAnimStateAvailableArr[k] = false;
            }
        }
        addConfigBuff() {
            if (this.config.buffs != null) {
                for (let id of this.config.buffs) {
                    this.addBuff(id);
                }
            }
        }
        get fightScene() {
            return mm.fight.scene;
        }
        get pve() {
            return this.fightScene;
        }
        loadModel() {
            this.load(CommonRes.obj3D(this.config.res));
        }
        getModelScale() {
            return this.config.modelScale || 1;
        }
        onAwake() {
            this.loadModel();
            gEvent.on(FightEvent.start, this, this.onGameStart);
            gEvent.on(FightEvent.pause, this, this.onGamePause);
            gEvent.on(FightEvent.resume, this, this.onGameResume);
            gEvent.on(FightEvent.over, this, this.onGameOver);
            if (this.config.shadowSize != 0) {
                SceneShadow.spawn(this, this.config.shadowSize || 1);
            }
        }
        onDestroy() {
            gEvent.off(FightEvent.start, this, this.onGameStart);
            gEvent.off(FightEvent.pause, this, this.onGamePause);
            gEvent.off(FightEvent.over, this, this.onGameOver);
            gEvent.off(FightEvent.resume, this, this.onGameResume);
            SceneShadow.despawn(this);
        }
        onEnable() {
        }
        onDisable() {
        }
        onGameStart() {
            if (this._aiFSM) {
                this._aiFSM.start();
            }
        }
        onGamePause() {
            if (this._aiFSM) {
                this._aiFSM.stop();
            }
            if (this._animator) {
                this._animator.speed = 0;
            }
        }
        onGameResume() {
            if (this._aiFSM) {
                this._aiFSM.start();
            }
            if (this._animator) {
                this._animator.speed = 1;
            }
        }
        onGameOver() {
            if (this._aiFSM) {
                this._aiFSM.stop();
            }
        }
        setupAnimator(animator, arr) {
            if (animator != null) {
                let controllerLayer = animator.getControllerLayer();
                if (controllerLayer != null) {
                    let states = controllerLayer["_states"];
                    for (let i = 0, len = states.length; i < len; i++) {
                        arr[states[i].name] = true;
                    }
                    animator.play(AnimatorKey.idle);
                    this.playAnim(this._cachedPlayAnim || AnimatorKey.idle);
                }
            }
        }
        load(url) {
            return __awaiter(this, void 0, void 0, function* () {
                if (this._inst) {
                    Pool.despawn(this._inst);
                }
                this._inst = yield Pool.spawn(url, this);
                let baseNode = this._inst.getChildAt(0).getChildByName("base");
                if (baseNode != null) {
                    this._animator = baseNode.getChildAt(0).getComponent(Laya.Animator);
                    this.setupAnimator(this._animator, this._bAnimStateAvailableArr);
                }
                let cannon = this._inst.getChildAt(0).getChildByName("cannon");
                if (cannon != null) {
                    let cannonRenderer = cannon.getChildAt(0);
                    if (cannonRenderer != null) {
                        this._cannonAnimator = cannonRenderer.getComponent(Laya.Animator);
                    }
                    this.setupAnimator(this._cannonAnimator, this._bCannonAnimStateAvailableArr);
                    let renderers = Utils.getChilds(cannon, Laya.MeshSprite3D);
                    if (renderers.length > 0) {
                        this._cannon = cannon;
                    }
                }
                this._atkNodes = Utils.getChildsByName(this, "atk");
                if (this._atkNodes == null || this._atkNodes.length == 0) {
                    this._atkNodes = [this];
                }
                this._sortMaterials = [];
                mm.fight.fixSceneObjRenderState(this, this.position.x, this.position.z, this._sortMaterials);
                this.updateTexture();
            });
        }
        updateTexture() {
            if (!this.config.texture || this.config.texture.length != 2) {
                return;
            }
            let nodePath = this.config.texture[0];
            let pngPath = this.config.texture[1];
            let node = Utils.getChild(this._inst, nodePath);
            if (node == null) {
                console.error("set texture failed, nodePath ", nodePath);
                return;
            }
            let renderer = node.meshRenderer;
            if (!renderer) {
                console.error("set texture failed, no meshrenderer");
                return;
            }
            let mat = renderer.material;
            Resource.load(CommonRes.texture(pngPath)).then((tex) => {
                if (this.destroyed) {
                    return;
                }
                mat.albedoTexture = tex;
            });
        }
        playAnim(key, duration = 0, animTime = 3000) {
            if (this._animator) {
                if (this._bAnimStateAvailableArr[key]) {
                    if (duration == 0) {
                        this._animator.play(key, 0, 0);
                    }
                    else {
                        this._animator.play(key, 0, 0);
                    }
                    this._curAnim = key;
                    if (key != AnimatorKey.idle && key != AnimatorKey.run) {
                        this._time2ResetAnim = Timer.manualCurMs + animTime;
                    }
                    else {
                        this._time2ResetAnim = 0;
                    }
                }
            }
            else {
                this._cachedPlayAnim = key;
            }
            if (this._cannonAnimator) {
                if (this._bCannonAnimStateAvailableArr[key]) {
                    this._cannonAnimator.play(key, 0, 0);
                }
            }
        }
        refreshMapBoundary() {
            this.minPosX = -cfg.global.stageMapW / 2 + this.modelRadius;
            this.maxPosX = -this.minPosX;
            this.minPosZ = this.fightScene.getMapMinPosZ() + this.modelRadius;
            this.maxPosZ = -this.minPosZ;
        }
        canAtk() {
            return Timer.manualCurMs > this._nextTimeToAtk;
        }
        canControl() {
            return !this._beAtking;
        }
        canMove() {
            return !this._bOnRush;
        }
        canBeFound() {
            return this.visible && this.alive;
        }
        showEarlyWarning_rect(resName, width, pos, targetPos, duration) {
            EffectManager.spawn(CommonRes.obj3D(resName), null, pos, null, duration).then((sp) => {
                mm.fight.setObjRenderQueue(sp, 3001);
                this.setEarlyWarning_rect(sp, width, this.position, targetPos);
                this.earlyWarning_rect = sp;
            });
        }
        setEarlyWarning_rect(sp, scaleX, startPos, targetPos) {
            startPos.y = 0;
            targetPos.y = 0;
            sp.transform.position = startPos;
            gVec3.x = scaleX;
            gVec3.y = 1;
            gVec3.z = Laya.Vector3.distance(targetPos, startPos);
            sp.transform.scale = gVec3;
            let mX = targetPos.x - startPos.x;
            let mZ = targetPos.z - startPos.z;
            let angle = Math.atan(mZ / mX) / Math.PI * 180;
            if (mZ <= 0 && mX >= 0) {
                angle = Math.abs(angle) + 270;
            }
            if (mZ > 0 && mX >= 0) {
                angle = 270 - Math.abs(angle);
            }
            if (mZ <= 0 && mX <= 0) {
                angle = 90 - Math.abs(angle);
            }
            if (mZ > 0 && mX <= 0) {
                angle = Math.abs(angle) + 90;
            }
            gVec3.x = 0;
            gVec3.y = angle;
            gVec3.z = 0;
            sp.transform.rotationEuler = gVec3;
        }
        updateEarlyWarning() {
            if (this.earlyWarning_rect && this.earlyWarning_rect.active) {
                this.setEarlyWarning_rect(this.earlyWarning_rect, 1.1, this.position, this.rushPosV3);
            }
        }
        showEarlyWarning_line(resName, pos, targetPos, duration) {
            return __awaiter(this, void 0, void 0, function* () {
                let sp = yield EffectManager.spawn(CommonRes.obj3D(resName), null, pos, null, duration);
                mm.fight.setObjRenderQueue(sp, 3001);
                this.setEarlyWarning_rect(sp, 0.3, pos, targetPos);
                this._EarlyWarningSpArr.push(sp);
                return sp;
            });
        }
        showProjectileWarning(res, hitWallCnt = 0, duration = -1) {
            let atkNode = this.getAtkNode();
            let paths = this.calcProjectileWarning(atkNode.transform.position, Utils.GetTransformForward(atkNode.transform), this._curBullet.isStrike == 1, hitWallCnt);
            if (duration == -1) {
                if (paths.length < this._spawnProjectilePaths.length) {
                    for (let i = this._spawnProjectilePaths.length - 1; i >= paths.length - 1; i++) {
                        let path = paths[i];
                        if (path.sp && !path.sp.destroyed) {
                            EffectManager.despawn(path.sp);
                        }
                        this._spawnProjectilePaths.splice(i, 1);
                    }
                }
                else if (paths.length > this._spawnProjectilePaths.length) {
                    for (let i = this._spawnProjectilePaths.length - 1; i < paths.length; i++) {
                        let path = paths[i];
                        let startPos;
                        if (i == 0) {
                            startPos = path.startPos;
                        }
                        else {
                            startPos = paths[i - 1].targetPos;
                        }
                        this.showEarlyWarning_line(res, startPos, path.targetPos, duration).then(sp => {
                            path.sp = sp;
                            let lineParent = sp.getChildAt(0).getChildAt(0);
                            let tra = lineParent.getChildAt(0);
                            let opa = lineParent.getChildAt(1);
                            tra.active = false;
                            opa.active = false;
                            if (i == paths.length - 1) {
                                tra.active = true;
                            }
                            else {
                                opa.active = true;
                            }
                        });
                        this._spawnProjectilePaths.push(path);
                    }
                }
                for (let i = 0, n = paths.length; i < n; i++) {
                    let path = paths[i];
                    let instPath = this._spawnProjectilePaths[i];
                    instPath.startPos = path.startPos;
                    instPath.targetPos = path.targetPos;
                    if (!instPath.sp || instPath.sp.destroyed) {
                        continue;
                    }
                    this.setEarlyWarning_rect(instPath.sp, 0.3, instPath.startPos, instPath.targetPos);
                }
            }
            else {
                for (let i = 0; i < paths.length; i++) {
                    let path = paths[i];
                    let startPos;
                    if (i == 0) {
                        startPos = path.startPos;
                    }
                    else {
                        startPos = paths[i - 1].targetPos;
                    }
                    this.showEarlyWarning_line(CommonRes.warningRes, startPos, path.targetPos, duration).then(sp => {
                        path.sp = sp;
                        let lineParent = sp.getChildAt(0).getChildAt(0);
                        let tra = lineParent.getChildAt(0);
                        let opa = lineParent.getChildAt(1);
                        tra.active = false;
                        opa.active = false;
                        if (i == paths.length - 1) {
                            tra.active = true;
                        }
                        else {
                            opa.active = true;
                        }
                    });
                }
                this._spawnProjectilePaths = paths;
            }
        }
        fire(bulletId, targetPos) {
            return __awaiter(this, void 0, void 0, function* () {
                if (null == bulletId) {
                    let randomBulletIndex = Math.floor(MathUtils.random() * this.config.bullet.length);
                    bulletId = this.config.bullet[randomBulletIndex];
                }
                let bulletConfig = cfg.bullet[bulletId];
                this._curBullet = bulletConfig;
                this.face(bulletConfig.faceType, bulletConfig.faceTime);
                if (bulletConfig.anim) {
                    this.playAnim(bulletConfig.anim, 0.5, bulletConfig.animTime);
                }
                if (bulletConfig.perAtk && bulletConfig.perAtk > 0) {
                    if (bulletConfig.warningType != null) {
                        this.showProjectileWarning(bulletConfig.warningRes, bulletConfig.hitWallCnt, bulletConfig.faceTime || bulletConfig.perAtk);
                    }
                    return new Promise((resolve, reject) => {
                        Timer.manualOnce(bulletConfig.perAtk, this, this.perAtkTimer, [bulletConfig, targetPos]);
                        Timer.manualOnce(bulletConfig.animTime || 2000, this, resolve);
                    });
                }
                else {
                    if (bulletConfig.animTime) {
                        this.spawnProjectile(bulletConfig, targetPos);
                        yield Timer.wait(bulletConfig.animTime);
                    }
                    else {
                        yield this.spawnProjectile(bulletConfig, targetPos);
                    }
                    this._isFollowTargetFace = false;
                }
            });
        }
        perAtkTimer(bulletConfig, targetPos) {
            this.atkTimer = null;
            if (this.alive) {
                this.spawnProjectile(bulletConfig, targetPos, this._spawnProjectilePaths);
            }
            this._isFollowTargetFace = false;
            this._spawnProjectilePaths = null;
        }
        calcProjectileWarning(position, forward, isStrike = false, hitWallCnt = 0) {
            let reboundCount = this.bulletHitbackCount + hitWallCnt;
            let curPosition = position.clone();
            let nextPosition = curPosition.clone();
            let curForward = forward.clone();
            let smallerStepCnt = 0;
            const MAX_SMALLER_STEP_NUM = 2;
            let out = [];
            let startPos = curPosition.clone();
            while (true) {
                Laya.Vector3.add(curPosition, curForward, nextPosition);
                let gridType = mm.fight.scene.getGridTypeByWorld(nextPosition);
                if ((!isStrike && gridType == eSceneGridType.Block) || gridType == eSceneGridType.Edge) {
                    if (smallerStepCnt < MAX_SMALLER_STEP_NUM) {
                        Laya.Vector3.scale(curForward, 0.5, curForward);
                        smallerStepCnt++;
                        continue;
                    }
                    out.push({
                        startPos: startPos.clone(),
                        targetPos: curPosition.clone()
                    });
                    if (reboundCount <= 0) {
                        break;
                    }
                    else {
                        reboundCount--;
                        startPos = mm.fight.rebound(nextPosition, curPosition, curForward).clone();
                        curPosition = startPos.clone();
                        smallerStepCnt = 0;
                        Laya.Vector3.scale(curForward, Math.pow(2, MAX_SMALLER_STEP_NUM), curForward);
                    }
                }
                else {
                    curPosition.x = nextPosition.x;
                    curPosition.z = nextPosition.z;
                }
            }
            return out;
        }
        showEarlyWarning_circle(resName, pos, radius, duration) {
            EffectManager.spawn(CommonRes.obj3D(resName), null, pos, null, duration).then((sp) => {
                gVec3.x = radius;
                gVec3.y = 1;
                gVec3.z = radius;
                sp.transform.scale = gVec3;
                this._EarlyWarningSpArr.push(sp);
            });
        }
        onPreReleaseSkill(skillId) {
            let skillCfg = cfg.skillCfg[skillId];
            if (skillCfg.type == eSkillType.Thunder) {
                this.searchThunderFallPoses(skillId);
                if (skillCfg.perAtk &&
                    skillCfg.warningType && skillCfg.warningType == eEarlyWarningType.Circle) {
                    this._EarlyWarningSpArr = [];
                    for (let i = 0, len = this._thunderFallPosArr.length; i < len; i++) {
                        this.showEarlyWarning_circle(skillCfg.warningRes, this._thunderFallPosArr[i], skillCfg.fallRadiu, skillCfg.perAtk);
                    }
                }
            }
            if (skillCfg.type == eSkillType.Rush) {
                this.rushPos(skillId);
                this.focus(this.rushPosV3);
                if (skillCfg.perAtk &&
                    skillCfg.warningType && skillCfg.warningType == eEarlyWarningType.Line) {
                    this.showEarlyWarning_rect(skillCfg.warningRes, 1.1, this.position, this.rushPosV3, skillCfg.perAtk);
                }
            }
        }
        onSkillFini(skillId) {
            if (!this.alive) {
                return;
            }
            let skillCfg = cfg.skillCfg[skillId];
            if (skillCfg.whileBullet && -1 == skillCfg.whileBulletTime) {
                this.fire(skillCfg.whileBullet);
            }
        }
        doReleaseSkill(skillType, skillId) {
            this.clearWarningEffect();
            this._isFollowTargetFace = false;
            switch (skillType) {
                case eSkillType.JumpAtk:
                    this.jumpAtk(skillId);
                    break;
                case eSkillType.Rush:
                    this.rush(skillId);
                    break;
                case eSkillType.Thunder:
                    this.thunder(skillId);
                    break;
                case eSkillType.EulerRotateY:
                    this.eulerRotY(skillId);
                    break;
                case eSkillType.Summon:
                    this.summon(skillId);
                    break;
                default:
            }
        }
        playFallResEffect_thunder(skillCfg) {
            let effectUrl = CommonRes.obj3D(skillCfg.fallRes);
            for (let i = 0, len = this._thunderFallPosArr.length; i < len; i++) {
                EffectManager.spawn(effectUrl, null, this._thunderFallPosArr[i]);
            }
        }
        playFallResEffect(skillCfg) {
            switch (skillCfg.type) {
                case eSkillType.Thunder:
                    this.playFallResEffect_thunder(skillCfg);
            }
        }
        releaseSkill(skillId, targetPos) {
            return __awaiter(this, void 0, void 0, function* () {
                if (null == skillId) {
                    let randomSkillIdx = Math.floor(MathUtils.randomWithLimit(this.config.skills.length));
                    skillId = this.config.skills[randomSkillIdx];
                }
                let skillCfg = cfg.skillCfg[skillId];
                if (skillCfg.atkRadiu && skillCfg.atkRadiu > 0) {
                    yield this.traceBeforeSkill(skillCfg.atkRadiu);
                }
                if (skillCfg.atkEffect) {
                    EffectManager.spawn(CommonRes.obj3D(skillCfg.atkEffect), null, this.position);
                }
                if (skillCfg.type != eSkillType.Split) {
                    if (skillCfg.anim) {
                        this.playAnim(skillCfg.anim, 0.5, skillCfg.animTime);
                    }
                    else {
                        this.playAnim(AnimatorKey.atk, 0.5, skillCfg.animTime);
                    }
                }
                this.onPreReleaseSkill(skillId);
                if (skillCfg.fallRes) {
                    if (skillCfg.fallResTime && skillCfg.fallResTime > 0) {
                        Timer.manualOnce(skillCfg.fallResTime, this, () => {
                            if (this.alive) {
                                this.playFallResEffect(skillCfg);
                            }
                        });
                    }
                    else {
                        this.playFallResEffect(skillCfg);
                    }
                }
                let skillDuration = 0;
                if (skillCfg.perAtk && skillCfg.perAtk > 0) {
                    this.atkTimer = () => {
                        if (this.alive) {
                            this.doReleaseSkill(skillCfg.type, skillId);
                        }
                        this.atkTimer = null;
                    };
                    Timer.manualOnce(skillCfg.perAtk, this, this.atkTimer);
                    skillDuration += skillCfg.animTime || 2000;
                }
                else {
                    this.doReleaseSkill(skillCfg.type, skillId);
                }
                if (skillCfg.whileBullet && !isNaN(skillCfg.whileBulletTime) && -1 != skillCfg.whileBulletTime) {
                    Timer.manualOnce(skillCfg.whileBulletTime, this, () => {
                        if (this.alive) {
                            this.fire(skillCfg.whileBullet);
                        }
                    });
                    skillDuration += skillCfg.whileBulletTime;
                }
                if (!isNaN(skillCfg.tEulerRotY)) {
                    skillDuration += skillCfg.tEulerRotY;
                }
                yield Timer.wait(skillDuration);
            });
        }
        atk() {
            return __awaiter(this, void 0, void 0, function* () {
                if (!this.canAtk()) {
                    return;
                }
                let candidateAtkMode = [];
                if (this.config.bullet && this.config.bullet.length > 0) {
                    candidateAtkMode.push(eAtkMode.Bullet);
                }
                if (this.config.skills && this.config.skills.length > 0) {
                    candidateAtkMode.push(eAtkMode.Skill);
                }
                if (0 == candidateAtkMode.length) {
                    return;
                }
                let targetPos = null;
                if (this.target && this.target.canBeFound()) {
                    targetPos = this.target.position.clone();
                }
                let gap = this.getAtkGap();
                this._nextTimeToAtk = Timer.manualCurMs + gap;
                let atkModeIdx = MathUtils.randomN(candidateAtkMode.length - 1);
                switch (candidateAtkMode[atkModeIdx]) {
                    case eAtkMode.Bullet:
                        yield this.fire(this._weaponBulletID, targetPos);
                        break;
                    case eAtkMode.Skill:
                        yield this.releaseSkill();
                        break;
                }
            });
        }
        onAtked(atked) {
            if (this.attr.hitRecoverHpRatio != 0) {
                this.addHp(this.attr.hpMax * this.attr.hitRecoverHpRatio);
            }
        }
        skillBeBreakIn() {
            if (this._bOnJump) {
                this._bOnJump = false;
                this.stopMove();
            }
        }
        ifAvoidAtk() {
            if (this.attr.avoidance <= 0) {
                return false;
            }
            if (MathUtils.randomN(100) < this.attr.avoidance * 100) {
                return true;
            }
            else {
                return false;
            }
        }
        showMissText() {
        }
        calExtDmg(atker, dmg) {
            if (!atker) {
                return dmg;
            }
            if (this.config.isMelee) {
                if (atker.attr.meleeExtDmg) {
                    dmg += atker.attr.meleeExtDmg;
                }
            }
            else {
                if (atker.attr.remoteExtDmg) {
                    dmg += atker.attr.remoteExtDmg;
                }
            }
            return dmg;
        }
        calDmgReduce(damage, dmgSrc) {
            switch (dmgSrc) {
                case eDmgSrc.Contact:
                    if (this.attr.contactDmgReduce > 0) {
                        damage = damage * (1 - this.attr.contactDmgReduce);
                    }
                    break;
                case eDmgSrc.Bullet:
                    if (this.attr.bulletDmgReduce > 0) {
                        damage = damage * (1 - this.attr.bulletDmgReduce);
                    }
                    break;
            }
            if (this.attr.dmgReduceByPercent > 0) {
                damage = damage * (1 - this.attr.dmgReduceByPercent);
            }
            switch (dmgSrc) {
                case eDmgSrc.Contact:
                    if (this.attr.contactDmgReduceByValue > 0) {
                        damage = damage - this.attr.contactDmgReduceByValue;
                    }
                    break;
                case eDmgSrc.Bullet:
                    if (this.attr.bulletDmgReduceByValue > 0) {
                        damage = damage - this.attr.bulletDmgReduceByValue;
                    }
                    break;
            }
            if (this.attr.dmgReduceByValue > 0) {
                damage = damage - this.attr.dmgReduceByValue;
            }
            if (damage < 0) {
                damage = 0;
            }
            return Math.ceil(damage);
        }
        beAtk(atker, damage, buffs, isCrit = false, hitPos, hitbackDis, ignoreBeAtkAnim, dmgSrc = eDmgSrc.Bullet) {
            if (!mm.fight.isFighting()) {
                return;
            }
            if (!this._canBeAtk) {
                return;
            }
            if (this.rmShield()) {
                return;
            }
            if (!ignoreBeAtkAnim) {
                AudioManager.playSoundRandom(this.config.hurtSound);
            }
            damage = this.calExtDmg(atker, damage);
            damage = this.calDmgReduce(damage, dmgSrc);
            this.addHp(-damage);
            if (atker) {
                atker.onAtked(this);
            }
            if (this.attr.hp <= 0) {
                if (this.reliveCount <= 0) {
                    this.die(atker);
                    return;
                }
                else {
                    this.relive();
                }
            }
            if (buffs != null) {
                for (let buff of buffs) {
                    this.addDurationBuff(buff, atker);
                }
            }
            if (this.config.repel == 1 && hitbackDis != null && hitbackDis != 0 && !this._bOnArmor) {
                Laya.Vector3.subtract(this.position, hitPos, gVec3);
                Laya.Vector3.normalize(gVec3, gVec3);
                Laya.Vector3.scale(gVec3, hitbackDis, gVec3);
                gVec3.y = 0;
                Laya.Vector3.add(this.position, gVec3, gVec3);
                if (this.ifWorldposWalkable(gVec3)) {
                    this.setPosition(gVec3.clone(), true);
                }
            }
        }
        kill(character) {
            if (this.attr.killRecoverHpRatio != 0) {
                this.addHp(this.attr.hpMax * this.attr.killRecoverHpRatio);
            }
        }
        die(atker) {
            AudioManager.playSoundRandom(this.config.dieSound);
            if (atker) {
                atker.kill(this);
            }
            this.alive = false;
            this.visible = false;
            this.active = false;
            if (this.config.dieFx && this.config.dieFx != "") {
                EffectManager.spawn(CommonRes.obj3D(this.config.dieFx), null, this.position, this.rotation);
            }
            this.clearWarningEffect();
        }
        clearWarningEffect() {
            if (this._EarlyWarningSpArr && this._EarlyWarningSpArr.length > 0) {
                for (let effect of this._EarlyWarningSpArr) {
                    EffectManager.despawn(effect);
                }
                this._EarlyWarningSpArr = [];
            }
            if (this.earlyWarning_rect) {
                EffectManager.despawn(this.earlyWarning_rect);
                this.earlyWarning_rect = null;
            }
        }
        relive(isCheckReliveCount = true) {
            if (isCheckReliveCount && this.reliveCount <= 0) {
                console.warn("character relive failed, reliveCount not enought");
                return;
            }
            if (!isCheckReliveCount) {
                this.reliveCount--;
            }
            this.alive = true;
            this.visible = true;
            this.active = true;
            this.attr.hp = this.attr.hpMax;
            this._canBeAtk = false;
            EffectManager.spawn(CommonRes.fxReborn, this, undefined, undefined, cfg.global.reliveCanNotBeAtkTime);
            Timer.manualOnce(cfg.global.reliveCanNotBeAtkTime, this, function () {
                this._canBeAtk = true;
            });
        }
        calNewPos(shift, out) {
            Laya.Vector3.add(this.position, shift, out);
            if (out.x < this.minPosX) {
                out.x = this.minPosX;
            }
            else if (out.x > this.maxPosX) {
                out.x = this.maxPosX;
            }
            if (out.z < this.minPosZ) {
                out.z = this.minPosZ;
            }
            else if (out.z > this.maxPosZ) {
                out.z = this.maxPosZ;
            }
        }
        getMoveSpeed() {
            if (this._isFreeze) {
                return this.attr.moveSpeed * (1 - this._freezeScale);
            }
            else {
                return this.attr.moveSpeed;
            }
        }
        getAtkGap() {
            let gap = this.attr.atkGap;
            if (this.attr.atkSpeedHpRatio != 0) {
                gap = this.config.atkGap * (1 + (this.attr.atkSpeedHpRatio * (this.attr.hpMax - this.attr.hp) / this.attr.hpMax));
            }
            return gap;
        }
        getDamage() {
            let damage = this.attr.atk;
            if (this.attr.atkHpRatio != 0) {
                damage += this.attr.atkBase * (1 - this.attr.hp / this.attr.hpMax) * this.attr.atkHpRatio;
            }
            damage *= this.attr.bulletDamageScale;
            return damage;
        }
        spawnSingleProjectile(bulletConfig, damage, node, targetPos, projectile, param) {
            if (this.destroyed || !this.alive || !node) {
                return;
            }
            let pos = node.position.clone();
            let rot = node.rotation.clone();
            let xDelta = projectile.xDelta || 0;
            let zDelta = projectile.zDelta || 0;
            let angle = projectile.angle || 0;
            if (xDelta != 0) {
                Laya.Vector3.scale(Utils.GetTransformRight(node), xDelta, gVec3);
                Laya.Vector3.add(pos, gVec3, pos);
            }
            if (zDelta != 0) {
                Laya.Vector3.scale(Utils.GetTransformForward(node), zDelta, gVec3);
                Laya.Vector3.add(pos, gVec3, pos);
            }
            if (angle != 0) {
                rot.rotateY(MathUtils.angleToRandin(angle), rot);
            }
            Projectile.spawn(bulletConfig, damage, this, pos, rot, targetPos, param);
            AudioManager.playSoundRandom(bulletConfig.sound);
        }
        hitBlock() {
        }
        spawnShotGunProjectile(bulletConfig, damage, node, targetPos, projectile, param) {
            if (this.destroyed || !this.alive) {
                return;
            }
            let pos = node.position.clone();
            let rot;
            if (bulletConfig.bScatterInWS) {
                Laya.Quaternion.lookAt(gZero, gForwardLH, gUp, gQuat);
                rot = gQuat.clone();
            }
            else {
                rot = node.rotation.clone();
            }
            let xDelta = projectile.xDelta || 0;
            let zDelta = projectile.zDelta || 0;
            let angle = projectile.angle || 0;
            if (xDelta != 0) {
                Laya.Vector3.scale(Utils.GetTransformRight(node), xDelta, gVec3);
                Laya.Vector3.add(pos, gVec3, pos);
            }
            if (zDelta != 0) {
                Laya.Vector3.scale(Utils.GetTransformRight(node), zDelta, gVec3);
                Laya.Vector3.add(pos, gVec3, pos);
            }
            if (angle != 0) {
                rot.rotateY(MathUtils.angleToRandin(angle), rot);
            }
            Projectile.spawnShotGun(bulletConfig, damage, this, pos, rot, targetPos, param);
            AudioManager.playSoundRandom(bulletConfig.sound);
        }
        focus(position) {
            if (this._cannon == null) {
                this.lookAt(position);
            }
            else {
                this.cannonLookAt(position);
            }
        }
        face(faceType, faceTime) {
            switch (faceType) {
                case FaceType.followTarget: {
                    this._isFollowTargetFace = true;
                    if (faceTime) {
                        this._faceTime = Timer.manualCurMs + faceTime;
                    }
                    else {
                        this._faceTime = null;
                    }
                }
                case FaceType.target:
                    {
                        if (!this.target || !this.target.alive) {
                            return;
                        }
                        this.focus(this.target.transform.position);
                    }
                    break;
                case FaceType.forward:
                    {
                    }
                    break;
                default: {
                    this.rotationEulerY = MathUtils.randomWithLimit(0, 360);
                }
            }
        }
        spawnProjectile(bulletConfig, targetPos, path) {
            return __awaiter(this, void 0, void 0, function* () {
                if (this.destroyed) {
                    return;
                }
                let damage = this.getDamage();
                damage *= bulletConfig.damageRatio;
                let isCrit = MathUtils.random() * 100 < this.attr.crit;
                if (isCrit) {
                    damage *= 2 * this.attr.critDmgScale;
                }
                let atkNode = this.getAtkNode();
                if (atkNode == null) {
                    atkNode = this;
                }
                else {
                    if (!Device.isLowOptDeviceByAuto && bulletConfig.flareRes && bulletConfig.flareRes != "") {
                        EffectManager.spawn(CommonRes.obj3D(bulletConfig.flareRes), null, atkNode.transform.position, atkNode.transform.rotation);
                    }
                }
                let tfAtk = atkNode.transform;
                let projectiles = [];
                let step = 0.4;
                for (let i = 0, n = this.bulletForwardCount; i < n; i++) {
                    let node = this.getAtkNode().transform;
                    let pos = node.position.clone();
                    let xDelta = (i + (-n / 2 + 0.5)) * step;
                    projectiles.push({ xDelta: xDelta });
                    if (this.bulletMultiCount > 0) {
                        let deltaMs = 100;
                        for (let ii = 0, iin = this.bulletMultiCount; ii < iin; ii++) {
                            let posii = pos.clone();
                            projectiles.push({ xDelta: xDelta, delay: (ii + 1) * (deltaMs) });
                        }
                    }
                }
                projectiles[0].isCheckHitblock = true;
                for (let i = 0, n = this.bulletBackwardCount; i < n; i++) {
                    projectiles.push({ angle: 180 });
                }
                for (let i = 0, n = this.bulletSideCount; i < n; i++) {
                    let angle = (i + 1) / (this.bulletSideCount + 1) * 90;
                    projectiles.push({ angle: angle });
                    projectiles.push({ angle: -angle });
                }
                for (let i = 0, n = this.bulletSide2Count; i < n; i++) {
                    projectiles.push({ angle: 90 });
                    projectiles.push({ angle: -90 });
                }
                let num = bulletConfig.bulletNum;
                let cd = bulletConfig.bulletCd;
                let sound = bulletConfig.bulletSound;
                let node = this.getAtkNode().transform;
                let spawnFunc = bulletConfig.isScatter ? this.spawnShotGunProjectile : this.spawnSingleProjectile;
                let durationMs = cd * num;
                let pingpongCnt = this.bulletHitbackCount || 0;
                if (bulletConfig.hitWallCnt) {
                    pingpongCnt += bulletConfig.hitWallCnt;
                }
                for (let projectile of projectiles) {
                    let delay = projectile.delay || 0;
                    durationMs += delay;
                    for (let i = 0; i < num; i++) {
                        Timer.manualOnce((cd * i + delay), this, spawnFunc, [
                            bulletConfig,
                            damage,
                            node,
                            targetPos,
                            projectile,
                            {
                                pingpongCount: pingpongCnt,
                                jumpCount: this.bulletJumpCount,
                                strikeCount: this.bulletStrikeCount,
                                buffs: this._atkBuffs,
                                isCrit: isCrit,
                                isCheckHitblock: projectile.isCheckHitblock,
                                target: this.target,
                                path: path
                            }
                        ]);
                    }
                }
                if (!isNaN(bulletConfig.scatterDuration)) {
                    durationMs = durationMs || 0;
                    durationMs += bulletConfig.scatterDuration;
                }
                if (durationMs > 0) {
                    yield Timer.wait(durationMs);
                }
            });
        }
        spawnMissile(bulletId) {
            if (!this.target) {
                return;
            }
            let bulletConfig = cfg.bullet[bulletId];
            let damage = this.getDamage();
            damage *= bulletConfig.damageRatio;
            Projectile.spawn(bulletConfig, damage, this, this.position, this.rotation, this.target.position);
        }
        spawnLandmine(bulletId) {
            let bulletConfig = cfg.bullet[bulletId];
            let damage = this.getDamage();
            damage *= bulletConfig.damageRatio;
            let pos = GridMapUtil.inst.convertWorldPos2GridPos(this.position);
            this.pve.createLandmine(bulletConfig.res, bulletConfig.bombRes, damage, pos, this, bulletConfig.bombDuration, bulletConfig.bombRange);
        }
        move(dir) {
            if (this._bOnJump || this._bOnRush) {
                return;
            }
            let step = 0.5;
            Laya.Vector3.normalize(dir, this._tempDir);
            Laya.Vector3.scale(this._tempDir, step, this._tempDir);
            this.calNewPos(this._tempDir, gVec3);
            if (Laya.Vector3.equals(this.position, gVec3)) {
                return;
            }
            this.moveTo(gVec3);
        }
        moveTo(pos, translateDuration, rotateDuration, ySpeed, shouldLookDown, complete, clearDestination = true) {
            if (translateDuration == null) {
                let dis = Laya.Vector3.distance(this.position, pos);
                translateDuration = dis / this.getMoveSpeed();
            }
            if (clearDestination) {
                this._destinations = null;
            }
            super.moveTo(pos.clone(), translateDuration, null, null, null, complete);
        }
        moveToPoints(points, checkFirstPoint, complete) {
            if (!points || points.length == 0) {
                return;
            }
            (checkFirstPoint == null) && (checkFirstPoint = true);
            if (complete != null) {
                this._movePointsCompleteHandler = complete;
            }
            if (checkFirstPoint) {
                let selfLogicPos = GridMapUtil.inst.convertWorldPos2LogicPos(this.position);
                let point = points[0];
                if (selfLogicPos.x == point.x && selfLogicPos.y == point.y) {
                    points.shift();
                    if (points.length == 0) {
                        return;
                    }
                }
            }
            this._destinations = points;
            let targetPoint = this._destinations.shift();
            if (this._destinations.length == 0) {
                this.moveTo(GridMapUtil.inst.convertLogicPos2WorldPos(targetPoint), null, null, null, null, complete);
            }
            else {
                this.moveTo(GridMapUtil.inst.convertLogicPos2WorldPos(targetPoint), null, null, null, null, null, false);
            }
        }
        onMoveStart() {
            if (this._bOnJump) {
                return;
            }
            Timer.clear(this, this.perAtkTimer);
            Timer.clear(this, this.spawnSingleProjectile);
            Timer.clear(this, this.spawnShotGunProjectile);
            if (this.rushPosV3 == null) {
                this.playAnim(AnimatorKey.run, 0.5);
            }
        }
        onMoveEnd() {
            if (this._destinations && this._destinations.length > 0) {
                this.isMoving = true;
                this.moveToPoints(this._destinations, false, this._movePointsCompleteHandler);
            }
            else {
                if (this._curAnim == AnimatorKey.run) {
                    this.playAnim(AnimatorKey.idle, 0.5);
                }
            }
        }
        addAttrByScale(attrType, scale) {
            if (attrType == attrTypeStr.atk) {
                this.attr.atk += this.attr.atkBase * (scale / 100);
                if (this.attr.atk < 0) {
                    this.attr.atk = 0;
                }
            }
            else if (attrType == attrTypeStr.crit) {
                this.attr.crit += this.config.crit + scale;
            }
            else if (attrType == attrTypeStr.hpMax) {
                let v = this.attr.hpBase * (scale / 100);
                v = Math.ceil(v);
                this.attr.hpMax += v;
                if (scale >= 0) {
                    this.attr.hp += v;
                }
                else {
                    if (this.attr.hpMax < 1) {
                        this.attr.hpMax = 1;
                    }
                    if (this.attr.hp > this.attr.hpMax) {
                        this.attr.hp = this.attr.hpMax;
                    }
                }
            }
            else if (attrType == attrTypeStr.exp) {
                this.attr.expScale += scale / 100;
            }
            else if (attrType == attrTypeStr.atkSpeed) {
                this.attr.aSpd += scale / 100;
                this.attr.atkGap = this.config.atkGap / this.attr.aSpd;
                if (this.attr.atkGap < 0) {
                    this.attr.atkGap = 0;
                }
            }
            else if (attrType == attrTypeStr.moveSpeed) {
                this.attr.moveSpeed += this.config.moveSpeed * (scale / 100);
                if (this.attr.moveSpeed < 0) {
                    this.attr.moveSpeed = 0;
                }
            }
        }
        addBuff(buffID, atker) {
            let config = cfg.buff[buffID];
            if (!config) {
                throw "buff config not found, id=" + buffID;
            }
            this._buffs.push(buffID);
            switch (config.type) {
                case BuffType.attr:
                    {
                        this.addAttrByScale(config.value, config.value2);
                    }
                    break;
                case BuffType.relive:
                    {
                        this.reliveCount += config.value;
                    }
                    break;
                case BuffType.enemyBulletSlowDown:
                    {
                        let monsterBulletSpeedScale = mm.fight.scene.monsterBulletSpeedScale;
                        monsterBulletSpeedScale -= config.value / 100;
                        if (monsterBulletSpeedScale < 0) {
                            monsterBulletSpeedScale = 0;
                        }
                        mm.fight.scene.monsterBulletSpeedScale = monsterBulletSpeedScale;
                    }
                    break;
                case BuffType.selfbulletSpeedUp:
                    {
                        this.attr.atkGap *= 1 - config.value / 100;
                    }
                    break;
                case BuffType.lowHpAngry:
                    {
                        this.attr.atkHpRatio += config.value / 100;
                    }
                    break;
                case BuffType.lowHPCrazy:
                    {
                        this.attr.atkSpeedHpRatio += config.value / 100;
                    }
                    break;
                case BuffType.killRecoverHP:
                    {
                        this.attr.killRecoverHpRatio += config.value / 100;
                    }
                    break;
                case BuffType.hitRecoverHP:
                    {
                        this.attr.hitRecoverHpRatio += config.value / 100;
                    }
                    break;
                case BuffType.fireBullet:
                    {
                        this.isFireBullet = true;
                        this._atkBuffs.push(buffID);
                    }
                    break;
                case BuffType.freezeBullet:
                    {
                        this.isFreezeBullet = true;
                        this._atkBuffs.push(buffID);
                    }
                    break;
                case BuffType.poisonBullet:
                    {
                        this.isPoisonBullet = true;
                        this._atkBuffs.push(buffID);
                    }
                    break;
                case BuffType.addForwardBullet:
                    {
                        this.bulletForwardCount += config.value;
                        if (config.value2) {
                            this.attr.bulletDamageScale *= config.value2 / 100;
                        }
                    }
                    break;
                case BuffType.addBackward:
                    {
                        this.bulletBackwardCount += config.value;
                        if (config.value2) {
                            this.attr.bulletDamageScale *= config.value2 / 100;
                        }
                    }
                    break;
                case BuffType.addSideBullet:
                    {
                        this.bulletSideCount += config.value;
                        if (config.value2) {
                            this.attr.bulletDamageScale *= config.value2 / 100;
                        }
                    }
                    break;
                case BuffType.addSide2Bullet:
                    {
                        this.bulletSide2Count += config.value;
                        if (config.value2) {
                            this.attr.bulletDamageScale *= config.value2 / 100;
                        }
                    }
                    break;
                case BuffType.bulletStrike:
                    {
                        this.bulletStrikeCount += config.value;
                    }
                    break;
                case BuffType.bulletPingpong:
                    {
                        this.bulletHitbackCount += config.value;
                    }
                    break;
                case BuffType.bulletJump:
                    {
                        this.bulletJumpCount += config.value;
                        if (config.value2) {
                            this.attr.bulletDamageScale *= config.value2 / 100;
                        }
                    }
                    break;
                case BuffType.health:
                    {
                        this.addHp(this.attr.hpMax * config.value / 100);
                    }
                    break;
                case BuffType.strike:
                    {
                        this._isStrike = true;
                    }
                    break;
                case BuffType.bulletMulti:
                    {
                        this.bulletMultiCount += config.value;
                        if (config.value2) {
                            this.attr.bulletDamageScale *= config.value2 / 100;
                        }
                    }
                    break;
                case BuffType.healthUp:
                    {
                        this.attr.healthScale += config.value / 100;
                    }
                    break;
                case BuffType.shield:
                case BuffType.autoMissile:
                case BuffType.autoLandmines:
                    {
                        this.addDurationBuff(buffID, this);
                    }
                    break;
                case BuffType.rage:
                    for (let b of config.value) {
                        this.addBuff(b, atker);
                    }
                    break;
                case BuffType.instantKill:
                    this.attr.instantKillRate += config.value / 100;
                    break;
                case BuffType.deathBomb:
                    this.attr.deathBomb = buffID;
                    break;
                case BuffType.deathFreeze:
                    this.attr.deathFreeze = buffID;
                    break;
            }
            if (config.selfFx && config.selfFx != "") {
                EffectManager.spawn(CommonRes.obj3D(config.selfFx), this);
            }
        }
        addDurationBuff(buffID, atker) {
            let config = cfg.buff[buffID];
            let buff;
            switch (config.type) {
                case BuffType.fireBullet:
                    {
                        let gap = config.duration / config.value;
                        buff = {
                            type: config.type,
                            atker: atker,
                            overTime: Timer.manualCurMs + config.duration,
                            damage: atker.getDamage() * config.value2 / 100,
                            triggerTime: Timer.manualCurMs + gap,
                            gap: gap
                        };
                    }
                    break;
                case BuffType.freezeBullet:
                    {
                        if (!this._isFreeze) {
                            this._isFreeze = true;
                            this._freezeScale = config.value / 100;
                        }
                        buff = {
                            type: config.type,
                            atker: atker,
                            overTime: Timer.manualCurMs + config.duration
                        };
                    }
                    break;
                case BuffType.poisonBullet:
                    {
                        let gap = config.value;
                        buff = {
                            type: config.type,
                            atker: atker,
                            overTime: -1,
                            damage: atker.getDamage() * config.value2 / 100,
                            triggerTime: Timer.manualCurMs + gap,
                            gap: gap
                        };
                    }
                    break;
                default: {
                    let gap = config.value;
                    buff = {
                        type: config.type,
                        fx: config.selfFx,
                        overTime: -1,
                        triggerTime: Timer.manualCurMs + gap,
                        gap: gap,
                        args: config.value2
                    };
                }
            }
            if (buff != null) {
                buff.id = buffID;
                let existItem = this._durationBuffs.find((v) => { return v.type == config.type; });
                if (existItem != null) {
                    for (let k in buff) {
                        existItem[k] = buff[k];
                    }
                }
                else {
                    if (!Device.isLowOptDeviceByAuto && config.fx) {
                        EffectManager.spawn(CommonRes.obj3D(config.fx), this)
                            .then(spr => {
                            if (buff != null) {
                                buff.fxInst = spr;
                            }
                        });
                    }
                    this._durationBuffs.push(buff);
                    if (this.hpProgress) {
                        this.hpProgress.addDurationBuff(buffID);
                    }
                }
            }
        }
        addShield(fx, duration) {
            if (this._isHaveShield) {
                return;
            }
            this._isHaveShield = true;
            Pool.spawn(CommonRes.obj3D(fx), this).then((inst) => {
                if (this.destroyed || this._isHaveShield == false) {
                    Pool.despawn(inst);
                    return;
                }
                this._shieldFx = inst;
            });
            Timer.manualOnce(duration, this, this.rmShield);
        }
        rmShield() {
            if (!this._isHaveShield) {
                return false;
            }
            this._isHaveShield = false;
            if (this._shieldFx && !this._shieldFx.destroyed) {
                Pool.despawn(this._shieldFx);
                this._shieldFx = null;
            }
            for (let buff of this._durationBuffs) {
                if (buff.type == BuffType.shield) {
                    buff.triggerTime = Timer.manualCurMs + buff.gap;
                    break;
                }
            }
            return true;
        }
        addHp(hp) {
            if (hp > 0) {
                hp *= this.attr.healthScale;
            }
            hp = Math.ceil(hp);
            this.attr.hp += hp;
            if (this.attr.hp < 0) {
                this.attr.hp = 0;
            }
            else if (this.attr.hp > this.attr.hpMax) {
                this.attr.hp = this.attr.hpMax;
            }
        }
        addExp(exp) {
            if (exp < 0) {
                console.warn("can not add negative exp");
                return;
            }
            this.attr.exp += exp * this.attr.expScale;
            let needExp = 0;
            let cfgLevel = 0;
            for (let i = 0, n = cfg.global.levelExp.length; i < n; i++) {
                let cfgExp = cfg.global.levelExp[i];
                if (needExp <= this.attr.exp && needExp + cfgExp > this.attr.exp) {
                    cfgLevel = i;
                    break;
                }
                needExp += cfgExp;
                cfgLevel = i + 1;
            }
            if (cfgLevel > this.attr.level) {
                this.levelUp(cfgLevel - this.attr.level);
            }
        }
        levelUp(deltaLevel) {
            this.attr.level += deltaLevel;
        }
        getAtkNode() {
            if (!this._atkNodes || this._atkNodes.length == 0) {
                return this;
            }
            let atkNode = this._atkNodes[this._atkIndex];
            this._atkIndex++;
            if (this._atkIndex >= this._atkNodes.length) {
                this._atkIndex = 0;
            }
            return atkNode;
        }
        updateDurationBuff() {
            if (this._durationBuffs == null || this._durationBuffs.length == 0) {
                return;
            }
            for (let i = this._durationBuffs.length - 1; i >= 0; i--) {
                let buff = this._durationBuffs[i];
                if (buff.triggerTime <= Timer.manualCurMs) {
                    if (buff.damage != null) {
                        this.beAtk(buff.atker, buff.damage, null, null, null, null, true);
                    }
                    if (buff.type == BuffType.shield) {
                        this.addShield(buff.fx, buff.args);
                    }
                    else if (buff.type == BuffType.autoMissile) {
                        this.spawnMissile(buff.args);
                    }
                    else if (buff.type == BuffType.autoLandmines) {
                        this.spawnLandmine(buff.args);
                    }
                    buff.triggerTime += buff.gap;
                }
                if (buff.overTime != -1 && buff.overTime <= Timer.manualCurMs) {
                    if (buff.fxInst != null) {
                        EffectManager.despawn(buff.fxInst);
                    }
                    this._durationBuffs.splice(i, 1);
                    if (this.hpProgress) {
                        this.hpProgress.rmDurationBuff(buff.id);
                    }
                    switch (buff.type) {
                        case BuffType.freezeBullet:
                            {
                                this._isFreeze = false;
                            }
                            break;
                    }
                    continue;
                }
            }
        }
        updateForward() {
            if (this._isFollowTargetFace) {
                if (this._faceTime && this._faceTime < Timer.manualCurMs) {
                    return;
                }
                if (this.target && this.target.canBeFound()) {
                    this.focus(this.target.position);
                    if (this.rushPosV3 != null) {
                        if (this.earlyWarning_rect && !this.earlyWarning_rect.destroyed) {
                            this.rushPosV3 = this.rushFollowTarget(this._warnDis, this.target.position);
                            this.setEarlyWarning_rect(this.earlyWarning_rect, 1.1, this.position, this.rushPosV3);
                        }
                    }
                }
                if (this._spawnProjectilePaths != null) {
                    this.showProjectileWarning(this._curBullet && this._curBullet.warningRes || CommonRes.warningRes, this._curBullet.hitWallCnt, -1);
                }
            }
            else {
                if (this._cannon != null && !this._cannon.destroyed) {
                    this.autoLookAt();
                }
            }
        }
        checkTime2ResetAnim() {
            if (!this._time2ResetAnim ||
                this._time2ResetAnim == -1 ||
                this._time2ResetAnim > Timer.manualCurMs) {
                return;
            }
            this._time2ResetAnim = -1;
            this.playAnim(AnimatorKey.idle);
        }
        onUpdate(deltaMs) {
            if (!this.alive) {
                return false;
            }
            super.onUpdate(deltaMs);
            this.updateForward();
            this.updateDurationBuff();
            this.checkTime2ResetAnim();
            if (this._sortMaterials != null && this._sortMaterials.length > 0) {
                for (let mat of this._sortMaterials) {
                    mat.renderQueue = mm.fight.clacRenderQueue(this.position.x, this.position.z);
                }
            }
            return true;
        }
        setupAIByID(aiID) {
            let configAI = cfg.ai[aiID];
            if (configAI == null) {
                throw `ai config not found id=${aiID}`;
            }
            let statuses = [];
            if (configAI.idleW && configAI.idleW != 0) {
                statuses.push(new AIStatusIdle(configAI.idleW, configAI.idleOrder, MathUtils.randomWithLimit(configAI.idleDuration[0], configAI.idleDuration[1])));
            }
            if (configAI.moveW && configAI.moveW != 0) {
                statuses.push(new AIStatusMove(configAI.moveW, configAI.moveOrder, configAI.moveType, MathUtils.randomWithLimit(configAI.moveDuration[0], configAI.moveDuration[1])));
            }
            if (configAI.atkW && configAI.atkW != 0) {
                statuses.push(new AIStatusAtk(configAI.atkW, configAI.atkOrder, configAI.atkCount, MathUtils.randomWithLimit(configAI.atkGap[0], configAI.atkGap[1])));
            }
            if (statuses.length != 0) {
                this.setupAI(statuses);
            }
        }
        setupAI(statuses, defaultStatus) {
            if (this._aiFSM != null) {
                console.warn("character setup ai failed, fsm already setup");
                return;
            }
            this._aiFSM = this.addComponent(AIFSM);
            for (let status of statuses) {
                this._aiFSM.addStatus(status);
                if (status == defaultStatus) {
                    this._aiFSM.setDefaultStatus(status);
                }
            }
            if (!defaultStatus) {
                this._aiFSM.setFirstStatusAsDefaultStatus();
            }
        }
        findTarget() {
            let exceptCharacters = [];
            let isNeedFind = false;
            if (this._isHitBlock) {
                isNeedFind = true;
                exceptCharacters.push(this.target);
            }
            else if (this.isMoving) {
                isNeedFind = true;
            }
            else {
                if (this.target == null ||
                    !this.target.alive ||
                    !this.target.visible) {
                    isNeedFind = true;
                }
            }
            if (isNeedFind) {
                let targets = this.fightScene.findCharacters(this.targetCharacterType, this.position, -1, 1, false, { exceptTeam: this.team, exceptCharacters: exceptCharacters });
                if (targets && targets.length > 0) {
                    this.onTargetSelected(targets[0]);
                    this._isHitBlock = false;
                }
            }
        }
        onTargetSelected(target) {
            this.target = target;
        }
        autoLookAt() {
            if (this._cannon == null) {
                return;
            }
            if (this.target == null ||
                this.target.destroyed) {
                this._cannon.transform.rotation = this.transform.rotation;
            }
            else {
                this.focus(this.target.transform.position);
            }
        }
        cannonLookAt(targetPos) {
            if (!this._cannon) {
                return;
            }
            gVec3.x = targetPos.x;
            gVec3.y = this._cannon.transform.position.y;
            gVec3.z = targetPos.z;
            this._cannon.transform.lookAt(gVec3, gUp);
        }
        get buffs() {
            return this._buffs;
        }
        doJump(targetPos, duration, ySpeed, onJumpFini) {
            this._bOnJump = true;
            this._bOnArmor = true;
            super.moveTo(targetPos, duration, 0, ySpeed, 0, Laya.Handler.create(this, () => {
                this._bOnJump = false;
                this._bOnArmor = false;
                if (onJumpFini) {
                    onJumpFini();
                }
            }));
        }
        jumpAtk(skillId) {
            let skillCfg = cfg.skillCfg[skillId.toString()];
            let bRandom = skillCfg.faceType == null || skillCfg.faceType == FaceType.random;
            let jumpDis = skillCfg.jumpDis;
            let lowerLimit = skillCfg.jumpDisLowLimit || 0;
            let speed = skillCfg.jumpSpeed;
            let jumpHeight = skillCfg.jumpHeight;
            let _func_randomLandingPoint = () => {
                let dis = MathUtils.randomWithLimit(lowerLimit, jumpDis);
                let dir = MathUtils.randomWithLimit(2 * Math.PI);
                gVec3.x = 0;
                gVec3.y = 0;
                gVec3.z = dis;
                Laya.Quaternion.createFromYawPitchRoll(dir, 0, 0, gQuat);
                Laya.Vector3.transformQuat(gVec3, gQuat, gVec3);
                Laya.Vector3.add(this.position, gVec3, gVec3);
                return gVec3.clone();
            };
            let landingPoint;
            let gridType;
            if (bRandom) {
                while (!gridType || !this.ifGridWalkable(gridType)) {
                    landingPoint = _func_randomLandingPoint();
                    gridType = this.fightScene.getGridTypeByWorld(landingPoint);
                }
            }
            else {
                if (!this.target || !this.target.alive) {
                    return;
                }
                let disToTarget = Laya.Vector3.distance(this.position, this.target.position);
                if (disToTarget > jumpDis) {
                    Laya.Vector3.subtract(this.target.position, this.position, gVec3);
                    Laya.Vector3.scale(gVec3, jumpDis / disToTarget, gVec3);
                    Laya.Vector3.add(this.position, gVec3, gVec3);
                    landingPoint = gVec3.clone();
                    gridType = this.fightScene.getGridTypeByWorld(landingPoint);
                    if (!this.ifGridWalkable(gridType)) {
                        return;
                    }
                }
                else {
                    landingPoint = this.target.position;
                }
            }
            let logicPoint = GridMapUtil.inst.convertWorldPos2LogicPos(landingPoint);
            landingPoint = GridMapUtil.inst.convertLogicPos2WorldPos(logicPoint);
            Laya.Vector3.subtract(landingPoint, this.position, gVec3);
            let dis = Laya.Vector3.scalarLength(gVec3);
            let duration = dis / speed;
            let ySpeed = null;
            if (jumpHeight) {
                ySpeed = jumpHeight / duration;
            }
            let self = this;
            let onJumpFini = () => {
                self.onSkillFini(skillId);
            };
            this.doJump(landingPoint, duration, ySpeed, onJumpFini);
        }
        onEnterRushSkill() {
            this._isFixPos = false;
            this._bOnRush = true;
            this._bOnArmor = true;
            this.stopMove();
        }
        onExitRushSkill(skillId) {
            this._isFixPos = true;
            this._bOnRush = false;
            this._bOnArmor = false;
            this.onSkillFini(skillId);
        }
        randomRushPos(dis, tryCount = 3) {
            this.transform.localRotationEulerY = MathUtils.randomWithLimit(0, 360);
            let targetPos = this.transform.position;
            let forward = Utils.GetTransformForward(this.transform);
            let remainDis = dis;
            while (remainDis > 0) {
                Laya.Vector3.add(targetPos, forward, gVec3);
                if (!this.ifWorldposWalkable(gVec3)) {
                    break;
                }
                remainDis--;
                targetPos = gVec3.clone();
            }
            if (dis - remainDis <= dis / 2) {
                targetPos = this.randomRushPos(dis, --tryCount);
            }
            return targetPos;
        }
        rushFollowTarget(rushDis, targetPos) {
            Laya.Vector3.subtract(targetPos, this.position, gVec3);
            Laya.Vector3.normalize(gVec3, gVec3);
            Laya.Vector3.scale(gVec3, rushDis, gVec3);
            Laya.Vector3.add(this.position, gVec3, gVec3);
            return gVec3.clone();
        }
        rushPos(skillId) {
            let skillCfg = cfg.skillCfg[skillId];
            let bRandom = skillCfg.faceType == null || skillCfg.faceType == FaceType.random;
            let rushDis = skillCfg.jumpDis;
            let targetPos;
            this.face(skillCfg.faceType);
            switch (skillCfg.faceType) {
                case FaceType.followTarget: {
                    this._warnDis = rushDis;
                }
                case FaceType.target:
                    {
                        if (!this.target || !this.target.alive) {
                            return;
                        }
                        targetPos = this.rushFollowTarget(rushDis, this.target.position);
                    }
                    break;
                case FaceType.forward:
                    {
                        while (rushDis > 0) {
                            Laya.Vector3.scale(this.forward, rushDis, gVec3);
                            Laya.Vector3.add(this.position, gVec3, gVec3);
                            if (this.ifWorldposWalkable(gVec3)) {
                                targetPos = gVec3.clone();
                                break;
                            }
                            else {
                                rushDis -= 0.5;
                            }
                        }
                        if (!targetPos) {
                            targetPos = this.position.clone();
                        }
                    }
                    break;
                default: {
                    targetPos = this.randomRushPos(rushDis);
                }
            }
            this.rushPosV3 = targetPos.clone();
        }
        rush(skillId) {
            let skillCfg = cfg.skillCfg[skillId];
            let rushDis = skillCfg.jumpDis;
            let speed = skillCfg.jumpSpeed;
            let duration = rushDis / speed;
            this.onEnterRushSkill();
            let completeHandler = Laya.Handler.create(this, this.onExitRushSkill, [skillId]);
            this.moveTo(this.rushPosV3, duration, null, null, null, completeHandler);
            this.rushPosV3 = null;
        }
        randomThunderFallPos() {
            let gridType = null;
            let pos = new Laya.Vector3();
            let minPosX = this.fightScene.getMapMinPosX();
            let maxPosX = this.fightScene.getMapMaxPosX();
            let minPosZ = this.fightScene.getMapMinPosZ();
            let maxPosZ = this.fightScene.getMapMaxPosX();
            while (gridType != eSceneGridType.Walkable) {
                pos.x = MathUtils.randomWithLimit(minPosX, maxPosX);
                pos.y = 0;
                pos.z = MathUtils.randomWithLimit(minPosZ, maxPosZ);
                gridType = this.fightScene.getGridTypeByWorld(pos);
            }
            return pos;
        }
        searchThunderFallPoses(skillId) {
            this._thunderFallPosArr = [];
            let skillCfg = cfg.skillCfg[skillId];
            let bRandom = skillCfg.faceType == null || skillCfg.faceType == FaceType.random;
            let bombNum = skillCfg.fallNum;
            if (bRandom) {
                for (let i = 0; i < bombNum; i++) {
                    this._thunderFallPosArr.push(this.randomThunderFallPos());
                }
            }
            else {
                if (!this.target || !this.target.alive) {
                    return;
                }
                this._thunderFallPosArr.push(this.target.position.clone());
            }
        }
        thunder(skillId) {
            let skillCfg = cfg.skillCfg[skillId];
            let radius = skillCfg.fallRadiu;
            for (let i = 0, len = this._thunderFallPosArr.length; i < len; i++) {
                Bomb.spawn(skillCfg.flareRes, skillCfg.flareTime, this._thunderFallPosArr[i], null, 1, radius, this.getDamage(), null, this);
            }
            this._thunderFallPosArr = [];
            this.onSkillFini(skillId);
        }
        eulerRotY(skillId) {
            let skillCfg = cfg.skillCfg[skillId];
            let totalAngle = skillCfg.eulerRotYAngle;
            let totalTime = skillCfg.tEulerRotY;
            let anglePerMS = totalAngle / totalTime;
            let tLeft = totalTime;
            let newRotYAngle = this.rotationEulerY;
            let rotateTimer = () => {
                let deltaMS = Timer.manualDeltaMs;
                if (tLeft > deltaMS) {
                    newRotYAngle = this.rotationEulerY + deltaMS * anglePerMS;
                    tLeft -= deltaMS;
                }
                else {
                    Timer.manualClear(this, rotateTimer);
                    newRotYAngle = this.rotationEulerY + tLeft * anglePerMS;
                    tLeft = 0;
                }
                this.rotationEulerY = newRotYAngle;
            };
            Timer.manualFrameLoop(1, this, rotateTimer);
        }
        summon(skillId) {
        }
        ;
        destorySelf() {
            if (this._inst) {
                Pool.despawn(this._inst);
                this._inst = null;
            }
            this.destroy();
        }
        ifGridWalkable(gridType) {
            if (eSceneGridType.Edge == gridType) {
                return false;
            }
            if (this.config.isFly) {
                return true;
            }
            if (this._bOnJump) {
                return true;
            }
            return gridType == eSceneGridType.Gate || gridType == eSceneGridType.Walkable || gridType == eSceneGridType.Spikeweed;
        }
        ifWorldposWalkable(worldPos) {
            if (this._bOnJump) {
                return true;
            }
            let logicPos = GridMapUtil.inst.convertWorldPos2LogicPos(worldPos);
            let gridType = GridMapUtil.inst.getGridTypeByLogicPos(logicPos);
            return this.ifGridWalkable(gridType);
        }
        get logicPos() {
            return GridMapUtil.inst.convertWorldPos2LogicPos(this.position);
        }
        AStarTrace() {
            if (!this.target || this.target.destroyed) {
                return;
            }
            if (this.attr.moveSpeed <= 0) {
                this.focus(this.target.position);
                return;
            }
            let targetLogicPos = this.target.logicPos;
            if (this._lastTargetPos &&
                (this._lastTargetPos.x == targetLogicPos.x && this._lastTargetPos.y == targetLogicPos.y)) {
                return;
            }
            let characterLogicPos = this.logicPos;
            let poses = AStar.pathToAtOnce(characterLogicPos.x, characterLogicPos.y, targetLogicPos.x, targetLogicPos.y);
            this.moveToPoints(poses);
        }
        traceBeforeSkill(traceStopDis) {
            return __awaiter(this, void 0, void 0, function* () { });
        }
        isContinueGame() {
            if (!mm.fight.stashMainRoleHp) {
                return false;
            }
            return true;
        }
    }

    var AtkPlan;
    (function (AtkPlan) {
        AtkPlan[AtkPlan["PlanA"] = 0] = "PlanA";
        AtkPlan[AtkPlan["PlanB"] = 1] = "PlanB";
    })(AtkPlan || (AtkPlan = {}));
    class Role extends Character {
        constructor() {
            super(...arguments);
            this._atkPlan = AtkPlan.PlanA;
            this._autoAtk = true;
        }
        get collectedGoldNum() {
            return this._collectedGoldNum || 0;
        }
        getCollectedItems() {
            return this._collectedItems;
        }
        onAwake() {
            super.onAwake();
            this.characterType = CharacterType.role;
            this.targetCharacterType = CharacterType.monster;
            this.team = 1;
            this._collectedGoldNum = 0;
            this._nextSpikeweedDmgTick = 0;
            this._nextPlayHuiXueFXTick = 0;
            this._nextBeAtkTick = 0;
            this._collectedItems = [];
        }
        autoAtk() {
            if (!this._autoAtk) {
                return;
            }
            if (!this.target) {
                return;
            }
            this.atk();
        }
        onPickUpXP() {
            if (!this.alive) {
                return;
            }
            let recoverPercent = (cfg.global.XPRecoverScale + this.attr.XPRecAddition) / 100;
            let recoverNum = Math.floor(this.attr.hpMax * recoverPercent);
            this.addHp(recoverNum);
        }
        pickUpXP() {
            let arr = this.fightScene.findSceneItemInMap(eSceneItemType.XP);
            if (arr.length == 0) {
                return;
            }
            let displayFiniCB = () => {
                if (this._nextPlayHuiXueFXTick < Timer.manualCurMs) {
                    EffectManager.spawn(CommonRes.obj3D("effect_tongyong_huixue"), this);
                    this._nextPlayHuiXueFXTick = Timer.manualCurMs + cfg.global.HuiXueFXCD;
                }
            };
            let logicFiniCB = () => {
                this.onPickUpXP();
            };
            for (let item of arr) {
                item.bePickUp(this, displayFiniCB, logicFiniCB);
            }
        }
        doPickUpStageGold() {
            let stageCfg = mm.fight.getCurStageCfg();
            if (stageCfg.goldReward && stageCfg.goldReward > 0) {
                this._collectedGoldNum += stageCfg.goldReward;
            }
        }
        pickUpGold() {
            this.doPickUpStageGold();
            let arr = this.fightScene.findSceneItemInMap(eSceneItemType.GOLD);
            if (arr.length == 0) {
                return;
            }
            for (let item of arr) {
                item.bePickUp(this);
            }
        }
        doPickUpStageItems() {
            let itemList = this.fightScene.getStageItemList();
            if (null == itemList || 0 == itemList.length) {
                return;
            }
            if (!this._collectedItems) {
                this._collectedItems = [];
            }
            for (let i = 0, len = itemList.length; i < len; i++) {
                this._collectedItems.push(itemList[i]);
            }
        }
        pickUpItems() {
            this.doPickUpStageItems();
            let arr = this.fightScene.findSceneItemInMap(eSceneItemType.ITEM);
            if (arr.length == 0) {
                return;
            }
            for (let item of arr) {
                item.bePickUp(this);
            }
        }
        onUpdate(deltaMs) {
            if (!super.onUpdate(deltaMs)) {
                return false;
            }
            if (!this.fightScene.isPlaying) {
                return true;
            }
            if (this.target) {
                if (!this.target.canBeFound()) {
                    this.target = null;
                }
            }
            this.findTarget();
            this.autoAtk();
            this.pickUpXP();
            if (this._nextSpikeweedDmgTick < Timer.manualCurMs) {
                if (GridMapUtil.inst.getGridTypeByWorldPos(this.position) == eSceneGridType.Spikeweed) {
                    this.beAtk(null, this.attr.hpMax * cfg.global.spikeweedDmgPercent);
                    this._nextSpikeweedDmgTick = Timer.manualCurMs + cfg.global.monsterContactDmgCd;
                }
            }
            return true;
        }
        get atkPlan() {
            return this._atkPlan;
        }
        set atkPlan(value) {
            this._atkPlan = value;
            if (value == AtkPlan.PlanA) {
                this._autoAtk = false;
            }
            else {
                this._autoAtk = true;
            }
        }
        onGameResume() {
            super.onGameResume();
            this._autoAtk = true;
        }
        checkInBeAtkCD() {
            if (Timer.manualCurMs > this._nextBeAtkTick) {
                this._nextBeAtkTick = Timer.manualCurMs + cfg.global.mainRoleBeHurtInterval;
                return false;
            }
            else {
                return true;
            }
        }
    }

    class Node {
        constructor(buffId, weight, limit, scene) {
            this.buffId = buffId;
            this.weight = weight;
            this.limit = limit;
            this.scene = scene;
        }
    }
    class BuffManager {
        static init() {
            this.trueUpgradeSceneBuffNodeArr = [];
            this.trueRefitSceneBuffNodeArr = [];
            this.trueEvilSceneBuffNodeArr = [];
            this.trueTigerSceneBuffNodeArr = [];
            this.falseUpgradeSceneBuffNodeArr = [];
            this.falseRefitSceneBuffNodeArr = [];
            this.falseEvilSceneBuffNodeArr = [];
            this.falseTigerSceneBuffNodeArr = [];
            this.buffArr = [];
            for (let id in cfg.buff) {
                this.buffArr.push(new Node(Number(id), cfg.buff[id].weight, cfg.buff[id].limit, cfg.buff[id].scene));
            }
            for (let id of UserData.unlockBuffIDs) {
                if (cfg.buff[id] == undefined)
                    continue;
                for (let sceneBuff of cfg.buff[id].scene) {
                    if (sceneBuff == -1)
                        continue;
                    this.addBuffNodeInArr(Number(id), sceneBuff);
                }
            }
            this.setFalseBuffArrCount(5);
        }
        static reset() {
            this.trueUpgradeSceneBuffNodeArr = [];
            this.trueRefitSceneBuffNodeArr = [];
            this.trueEvilSceneBuffNodeArr = [];
            this.trueTigerSceneBuffNodeArr = [];
            this.falseUpgradeSceneBuffNodeArr = [];
            this.falseRefitSceneBuffNodeArr = [];
            this.falseEvilSceneBuffNodeArr = [];
            this.falseTigerSceneBuffNodeArr = [];
            for (let buffNode of this.buffArr) {
                buffNode.limit = cfg.buff[buffNode.buffId].limit;
            }
            for (let id of UserData.unlockBuffIDs) {
                if (cfg.buff[id] == undefined)
                    continue;
                for (let sceneBuff of cfg.buff[id].scene) {
                    if (sceneBuff == -1)
                        continue;
                    this.addBuffNodeInArr(Number(id), sceneBuff);
                }
            }
            this.setFalseBuffArrCount(5);
        }
        static addBuffNodeInArr(buffId, buffScene) {
            let trueArr = this.getTrueBuffArr(buffScene);
            let falseArr = this.getFalseBuffArr(buffScene);
            let index = this.buffArr.findIndex((elem) => {
                return elem.buffId == buffId;
            });
            trueArr.push(this.buffArr[index]);
            falseArr.push(this.buffArr[index]);
        }
        static removeBuffNodeInArr(buffId, buffScene) {
            let arr = this.getTrueBuffArr(buffScene);
            let index = arr.findIndex((elem) => {
                return elem.buffId == buffId;
            });
            if (index != -1) {
                arr.splice(index, 1);
            }
        }
        static randomGetBuffId(buffScene) {
            let arr = this.getTrueBuffArr(buffScene);
            let weightCount = 0;
            let weightArr = [0];
            for (let elem of arr) {
                weightCount += elem.weight;
                weightArr.push(weightCount);
            }
            let index = Math.random() * weightCount;
            for (let i = 0; i < weightArr.length; i++) {
                if (index > weightArr[i] && index <= weightArr[i + 1])
                    return arr[i].buffId;
            }
            return 6;
        }
        static randomGetLevelUpBuffIDs(deWeight = 22, maxNeedBuffCount = 3) {
            if (this.getTrueBuffArr(BuffScene.levelUpScene).length <= 0) {
                let arr = [];
                for (let l = 0; l < maxNeedBuffCount; l++) {
                    arr.push(6);
                }
                return arr;
            }
            let buffIDs = [];
            if (this.getTrueBuffArr(BuffScene.levelUpScene).length <= maxNeedBuffCount) {
                let tempArr = [...this.getTrueBuffArr(BuffScene.levelUpScene)];
                let tempLen = tempArr.length;
                for (let l = 0; l < maxNeedBuffCount - tempLen; l++) {
                    tempArr.push(tempArr[Math.floor(Math.random() * tempLen)]);
                }
                for (let l of tempArr) {
                    buffIDs.push(l.buffId);
                }
            }
            else {
                for (let l = 0; l < deWeight + maxNeedBuffCount; l++) {
                    if (buffIDs.length >= maxNeedBuffCount)
                        break;
                    let id = this.randomGetBuffId(BuffScene.levelUpScene);
                    if (buffIDs.findIndex((v) => { return v == id; }) == -1) {
                        buffIDs.push(id);
                    }
                }
                if (buffIDs.length < maxNeedBuffCount) {
                    let tempLen = buffIDs.length;
                    for (let l = 0; l < maxNeedBuffCount - tempLen; l++) {
                        buffIDs.push(buffIDs[Math.floor(Math.random() * tempLen)]);
                    }
                }
                if (buffIDs.length > maxNeedBuffCount) {
                    buffIDs.splice(maxNeedBuffCount, buffIDs.length);
                }
            }
            Utils.disturbArr(buffIDs);
            return buffIDs;
        }
        static getTrueBuffArr(buffScene) {
            switch (buffScene) {
                case BuffScene.levelUpScene:
                    return this.trueUpgradeSceneBuffNodeArr;
                case BuffScene.refitScene:
                    return this.trueRefitSceneBuffNodeArr;
                case BuffScene.evilScene:
                    return this.trueEvilSceneBuffNodeArr;
                case BuffScene.tigerScene:
                    return this.trueTigerSceneBuffNodeArr;
                default:
                    throw "[BuffManager] Can not find buffScene:" + buffScene;
            }
        }
        static getFalseBuffArr(buffScene) {
            switch (buffScene) {
                case BuffScene.levelUpScene:
                    return this.falseUpgradeSceneBuffNodeArr;
                case BuffScene.refitScene:
                    return this.falseRefitSceneBuffNodeArr;
                case BuffScene.evilScene:
                    return this.falseEvilSceneBuffNodeArr;
                case BuffScene.tigerScene:
                    return this.falseTigerSceneBuffNodeArr;
                default:
                    throw "[BuffManager] Can not find buffScene:" + buffScene;
            }
        }
        static setFalseBuffArrCount(count) {
            this.falseUpgradeSceneBuffNodeArr.splice(count, this.falseUpgradeSceneBuffNodeArr.length);
            this.falseRefitSceneBuffNodeArr.splice(count, this.falseRefitSceneBuffNodeArr.length);
            this.falseEvilSceneBuffNodeArr.splice(count, this.falseEvilSceneBuffNodeArr.length);
            this.falseTigerSceneBuffNodeArr.splice(count, this.falseTigerSceneBuffNodeArr.length);
        }
        static calcAddBuffLimit(buffId) {
            let index = this.buffArr.findIndex((elem) => {
                return elem.buffId == buffId;
            });
            if (index != -1) {
                --this.buffArr[index].limit;
                if (this.buffArr[index].limit <= 0) {
                    for (let s of this.buffArr[index].scene) {
                        if (s == -1)
                            continue;
                        this.removeBuffNodeInArr(buffId, s);
                    }
                }
            }
        }
        static unlockBuffIDs(buffIDs, isInit = false) {
            for (let id of buffIDs) {
                if (cfg.buff[id] == undefined)
                    continue;
                UserData.unlockBuffIDs.push(id);
            }
            !isInit && this.reset();
        }
    }

    class HUD {
        static init() {
            this.textPoor = [];
            this.hpBarPoor = [];
            this.labelBox = new Laya.Box();
            this.hpBarBox = new Laya.Box();
            Laya.stage.addChild(this.hpBarBox);
            Laya.stage.addChild(this.labelBox);
        }
        static dispose() {
            this.destroyHUD();
            this.labelBox.destroy();
            this.labelBox = null;
            this.hpBarBox.destroy();
            this.hpBarBox = null;
        }
        static createHurtText(hudType, character, text) {
            return __awaiter(this, void 0, void 0, function* () {
                let label = yield this.getHurtText();
                let color;
                switch (hudType) {
                    case BeAtkType.normal:
                        color = "#ffffff";
                        break;
                    case BeAtkType.crit:
                        color = "#ff0014";
                        break;
                    case BeAtkType.getHP:
                        color = "#32ff00";
                        break;
                    case BeAtkType.miss:
                        color = "#96fbe7";
                        break;
                    default:
                        throw "[HUD] illegal BeAtkType";
                }
                label.color = color;
                label.text = text;
                label.scaleX = 0.35;
                label.scaleY = 0.35;
                label.alpha = 0;
                MainCamera.camera.worldToViewportPoint(character.position, gVec4);
                gPoint.x = gVec4.x;
                gPoint.y = gVec4.y;
                let point = this.labelBox.globalToLocal(gPoint);
                label.pos(point.x + this.hurtTextOffset.x + (Math.random() * this.hurtTextRndPosX - this.hurtTextRndPosX / 2), point.y + this.hurtTextOffset.y);
                yield Tween.to(label, { y: label.y - 68, alpha: 1, scaleX: 1.5, scaleY: 1.5 }, 160);
                yield Tween.to(label, { scaleX: 1, scaleY: 1, y: label.y }, 140);
                yield Tween.to(label, { scaleX: 1, scaleY: 1, y: label.y + 2 }, 200);
                yield Tween.to(label, { scaleX: 0.8, scaleY: 0.8, y: label.y + 16, alpha: 0 }, 340);
                label.visible = false;
            });
        }
        static createHPProgress(hudType, character) {
            let hpProgress = this.getHPBar(hudType);
            if (hpProgress) {
                hpProgress.reset(character);
            }
            else {
                hpProgress = new HPBar();
                hpProgress.init(hudType, character, this.hpBarOffset, this.hpBarBox);
                this.hpBarPoor.push(hpProgress);
            }
            return hpProgress;
        }
        static getHurtText() {
            return __awaiter(this, void 0, void 0, function* () {
                for (let text of this.textPoor) {
                    if (text && !text.visible) {
                        text.visible = true;
                        return text;
                    }
                }
                let label = yield Resource.loadPrefab("game/prefab/textLabel.json");
                this.labelBox.addChild(label);
                this.textPoor.push(label);
                return label;
            });
        }
        static getHPBar(hudType) {
            let index = this.hpBarPoor.findIndex((item) => {
                return item.hudType == hudType && item.canReUse == true;
            });
            if (index == -1) {
                return null;
            }
            if (this.hpBarPoor[index]) {
                return this.hpBarPoor[index];
            }
            else {
                this.hpBarPoor.splice(index, 1);
                this.getHPBar(hudType);
            }
        }
        static destroyHUD() {
            for (let item of this.hpBarPoor) {
                if (item) {
                    item.dispose(true);
                }
            }
            for (let item of this.textPoor) {
                Tween.clearAll(item);
                item.destroy();
            }
            this.hpBarPoor = [];
            this.textPoor = [];
        }
        static getLabelBox() {
            return this.labelBox;
        }
    }
    HUD.hurtTextOffset = new Laya.Vector2(0, -70);
    HUD.hurtTextRndPosX = 100;
    HUD.hpBarOffset = new Laya.Vector2(-58, -108);
    class HPBar {
        constructor() {
            this.tempHP = -1;
            this.tempMaxHP = -1;
            this.isInitComplete = false;
            this.maxRecoverHPAniTime = 1;
            this.recoverHPAniTimer = 1;
            this.canReUse = false;
            this.originAttr = {};
        }
        init(hudType, character, hpBarOffset, parent) {
            return __awaiter(this, void 0, void 0, function* () {
                this.hudType = hudType;
                this.parent = parent;
                this.hpBarOffset = hpBarOffset;
                this.character = character;
                switch (hudType) {
                    case CharacterType.role:
                        this.hpBar = (yield Resource.loadPrefab("game/prefab/roleHPBar.json"));
                        this.hpLabel = this.hpBar.getChildByName("hpLabel");
                        break;
                    case CharacterType.monster:
                        this.hpBar = (yield Resource.loadPrefab("game/prefab/monsterHPBar.json"));
                        break;
                    default:
                        throw "[HUD] illegal CharacterType";
                }
                this.bottomBG = this.hpBar.getChildByName("bottomBG");
                this.buffList = this.hpBar.getChildByName("buffList");
                this.rAni1 = this.hpBar.getChildByName("rAni1");
                this.rAni2 = this.hpBar.getChildByName("rAni2");
                this.lvUpAni = this.hpBar.getChildByName("lvUpAni");
                if (this.rAni1) {
                    this.originAttr["rAni1"] = {
                        x: this.rAni1.x,
                        y: this.rAni1.y,
                        scaleX: this.rAni1.scaleX,
                        scaleY: this.rAni1.scaleY,
                        alpha: this.rAni1.alpha
                    };
                }
                if (this.rAni2) {
                    this.originAttr["rAni2"] = {
                        x: this.rAni2.x,
                        y: this.rAni2.y,
                        scaleX: this.rAni2.scaleX,
                        scaleY: this.rAni2.scaleY,
                        alpha: this.rAni2.alpha
                    };
                }
                if (this.lvUpAni) {
                    this.originAttr["lvUpAni"] = {
                        y: this.lvUpAni.y,
                        alpha: this.lvUpAni.alpha,
                        visible: this.lvUpAni.visible
                    };
                }
                if (this.buffList) {
                    this.buffList.visible = false;
                    this.buffList.renderHandler = Laya.Handler.create(this, this.renderBuffList, null, false);
                }
                this.mainBG = this.hpBar.getChildByName("mainBG");
                parent.addChild(this.hpBar);
                this.isInitComplete = true;
                this.canReUse = false;
                if (hudType == CharacterType.role) {
                    this.show();
                }
                else {
                    this.hide();
                }
            });
        }
        showRecoverAni() {
            if (this.recoverHPAniTimer >= this.maxRecoverHPAniTime) {
                this.playRAni1();
                this.playRAni2();
                this.recoverHPAniTimer = 0;
            }
        }
        playRAni1() {
            return __awaiter(this, void 0, void 0, function* () {
                if (this.rAni1 == undefined)
                    return;
                Tween.clearAll(this.rAni1);
                yield Tween.to(this.rAni1, { y: this.rAni1.y - 27, scaleX: 0.63, scaleY: 0.63, alpha: 1 }, 366);
                yield Tween.to(this.rAni1, { y: this.rAni1.y - 26, scaleX: 0.75, scaleY: 0.75, alpha: 0 }, 333);
                this.resetAniAttr(this.rAni1, this.originAttr["rAni1"]);
            });
        }
        playRAni2() {
            return __awaiter(this, void 0, void 0, function* () {
                if (this.rAni2 == undefined)
                    return;
                Tween.clearAll(this.rAni2);
                yield Tween.to(this.rAni2, {}, 166);
                yield Tween.to(this.rAni2, { y: this.rAni1.y - 24, scaleX: 1.2, scaleY: 1.2, alpha: 1 }, 333);
                yield Tween.to(this.rAni2, { y: this.rAni1.y - 23, scaleX: 1, scaleY: 1, alpha: 0 }, 333);
                this.resetAniAttr(this.rAni2, this.originAttr["rAni2"]);
            });
        }
        playLvUpAni() {
            return __awaiter(this, void 0, void 0, function* () {
                if (this.lvUpAni == undefined)
                    return;
                Tween.clearAll(this.lvUpAni);
                this.lvUpAni.visible = true;
                yield Tween.to(this.lvUpAni, { y: 0 }, 425);
                yield Tween.to(this.lvUpAni, { y: -this.originAttr["lvUpAni"].y, alpha: 0 }, 425);
                this.resetAniAttr(this.lvUpAni, this.originAttr["lvUpAni"]);
            });
        }
        resetAniAttr(target, originData) {
            for (let l in originData) {
                target[l] = originData[l];
            }
        }
        show() {
            if (!this.isInitComplete)
                return;
            Timer.frameLoop(1, this, () => {
                this.updateHPBarPos();
                this.updateData(this.character.attr.hp, this.character.attr.hpMax);
                this.recoverHPAniTimer += Timer.deltaS;
                if (!this.hpBar.visible)
                    this.hpBar.visible = true;
            });
        }
        hide() {
            if (!this.isInitComplete)
                return;
            this.clearBuff();
            this.hpBar.visible = false;
            Timer.clearAll(this);
        }
        dispose(state) {
            if (!this.isInitComplete)
                return;
            this.hpBar.visible = false;
            Tween.clearAll(this.bottomBG);
            Timer.clearAll(this);
            if (state) {
                this.hpBar && this.hpBar.destroy();
            }
            else {
                this.canReUse = true;
            }
        }
        reset(character) {
            if (!this.canReUse)
                return;
            this.character = character;
            this.bottomBG.width = this.hpBar.width;
            this.mainBG.width = this.hpBar.width;
            this.tempHP = -1;
            this.tempMaxHP = -1;
            this.canReUse = false;
            if (this.hudType == CharacterType.role) {
                this.show();
            }
            else {
                this.hide();
            }
        }
        updateData(curHP, maxHP) {
            if (curHP == undefined || maxHP == undefined || (curHP == this.tempHP && maxHP == this.tempMaxHP))
                return;
            let curHPWidth = curHP / this.character.attr.hpMax * this.hpBar.width;
            this.mainBG.width = curHPWidth;
            Tween.clearAll(this.bottomBG);
            Tween.to(this.bottomBG, { width: curHPWidth }, 350);
            if (this.hpLabel)
                this.hpLabel.text = curHP.toString();
            this.tempHP = curHP;
            this.tempMaxHP = maxHP;
        }
        updateHPBarPos() {
            MainCamera.camera.worldToViewportPoint(this.character.position, gVec4);
            gPoint.x = gVec4.x;
            gPoint.y = gVec4.y;
            let point = this.parent.globalToLocal(gPoint);
            this.hpBar.pos(point.x + this.hpBarOffset.x, point.y + this.hpBarOffset.y);
        }
        renderBuffList(cell, index) {
            let buffID = cell.dataSource;
            let icon = cell.getChildByName("icon");
            icon.skin = CommonRes.durationBuffIcon(cfg.buff[buffID].durationBuffIcon);
        }
        addDurationBuff(id) {
            if (!this.buffList) {
                return;
            }
            if (this.buffList.array == null) {
                this.buffList.array = [];
            }
            this.buffList.array.push(id);
            this.buffList.refresh();
            if (!this.buffList.visible) {
                this.buffList.visible = true;
            }
        }
        rmDurationBuff(id) {
            if (!this.buffList || this.buffList.array == null) {
                return;
            }
            let index = this.buffList.array.indexOf(id);
            if (index == -1) {
                console.warn("[hud] rm duration buff failed, id=", id);
                return;
            }
            this.buffList.array.splice(index, 1);
            if (this.buffList.array.length == 0 && this.buffList.visible) {
                this.buffList.visible = false;
            }
        }
        clearBuff() {
            if (!this.buffList) {
                return;
            }
            this.buffList.array = [];
        }
    }
    class ItemLabel {
        constructor(itemID, num) {
            this._itemID = itemID;
            this._num = num;
        }
        initShow() {
            return __awaiter(this, void 0, void 0, function* () {
                this._label = yield HUD.getHurtText();
                this._label.color = "#ffffff";
                this._label.scaleX = 0.75;
                this._label.scaleY = 0.75;
                this._label.alpha = 255;
                let itemCfg = cfg.item[this._itemID];
                let text = itemCfg.name;
                this._label.text = text;
            });
        }
        updatePosition(tgtPos) {
            MainCamera.camera.worldToViewportPoint(tgtPos, gVec4);
            gPoint.x = gVec4.x;
            gPoint.y = gVec4.y;
            let point = HUD.getLabelBox().globalToLocal(gPoint);
            this._label.pos(point.x - this._label.width / 2 * 0.75, point.y - 55);
        }
        hide() {
            if (this._label && this._label.destroyed == false) {
                this._label.visible = false;
            }
        }
    }

    const kDisplayInfoArray = [
        {
            descColor: "#FFFFFF",
            bgPath: "game/view/common/common_frame_c0.png"
        },
        {
            descColor: "#4ceb54",
            bgPath: "game/view/common/common_frame_c1.png"
        },
        {
            descColor: "#5dbcfe",
            bgPath: "game/view/common/common_frame_c2.png"
        },
        {
            descColor: "#f264ff",
            bgPath: "game/view/common/common_frame_c3.png"
        },
        {
            descColor: "#ffba41",
            bgPath: "game/view/common/common_frame_c4.png"
        },
        {
            descColor: "#ff6161",
            bgPath: "game/view/common/common_frame_c5.png"
        },
        {
            descColor: "#ffffff",
            bgPath: "game/view/common/common_frame_golden.png"
        },
        {
            descColor: "#ffffff",
            bgPath: "game/view/common/common_frame_golden.png"
        },
        {
            descColor: "#ffffff",
            bgPath: "game/view/common/common_frame_golden.png"
        }
    ];
    const kJinbiDisplayIndex = 6;
    const kJinbiRewardIcon = "game/view/common/common_icon_jinbi.png";
    const kJinbiRewardDesc = "金币";
    const kTiliDisplayIndex = 7;
    const kTiliRewardIcon = "game/view/common/common_icon_tili.png";
    const kTiliRewardDesc = "体力";
    const kJuanzhouDisplayIndex = 8;
    const kDisplayDefaultInfo = kDisplayInfoArray[0];
    const kItemWidth = 122;
    const kItemHeight = 164;
    const kItemSpaceX = 20;
    const kMaxListWidth = 720 - 2 * 47;
    class TipsBoxView extends BaseViewLY {
        constructor() {
            super(...arguments);
            this.items = [];
        }
        static showView(items) {
            console.log(`[tipsbox] init items: ${JSON.stringify(items)}`);
            this.toShowList.push(items);
            mm.main.showTipsBoxView();
        }
        onAwake() {
            this.background.on(Laya.Event.MOUSE_DOWN, this, this.tipBoxClick);
            this.list.renderHandler = Laya.Handler.create(this, this.onListRender, null, false);
            this.list.hScrollBarSkin = "";
        }
        onListRender(cell, index) {
            const bg = cell.getChildByName("bg");
            const icon1 = bg.getChildByName("icon1");
            const icon2 = bg.getChildByName("icon2");
            const tipsBg = bg.getChildByName("tipsBgImage");
            const tips = tipsBg.getChildByName("tips");
            const desc = cell.getChildByName("desc");
            icon1.visible = false;
            icon2.visible = false;
            const itemInfo = this.items[index];
            if (itemInfo == undefined || itemInfo == null) {
                return;
            }
            const displayInfo = kDisplayInfoArray[itemInfo.displayIndex] || kDisplayDefaultInfo;
            Resource.load(displayInfo.bgPath).then(res => {
                if (res) {
                    bg.texture = res;
                }
            });
            desc.color = displayInfo.descColor;
            Resource.load(itemInfo.icon).then(res => {
                if (res) {
                    if (itemInfo.desc == "金币" || itemInfo.desc == "钻石" || itemInfo.desc == "体力") {
                        icon2.visible = true;
                        icon2.texture = res;
                    }
                    else {
                        icon1.visible = true;
                        icon1.texture = res;
                    }
                }
            });
            desc.text = itemInfo.desc;
            if (itemInfo.tips) {
                tipsBg.visible = true;
                tips.text = itemInfo.tips;
            }
            else {
                tipsBg.visible = false;
                tips.text = "";
            }
        }
        onEnable() {
            this.items = TipsBoxView.toShowList.shift();
            const trueWidth = (this.items.length - 1) * (kItemWidth + kItemSpaceX) + kItemWidth;
            if (trueWidth > kMaxListWidth) {
                this.list.hScrollBarSkin = "";
                this.list.width = kMaxListWidth;
            }
            else {
                this.list.hScrollBarSkin = undefined;
                this.list.width = trueWidth;
            }
            this.list.array = this.items;
            this.list.refresh();
            Platform.inst.showBanner(BannerID.fight);
        }
        onDisable() {
            Platform.inst.hideBanner();
        }
        tipBoxClick() {
            this.close();
        }
    }
    TipsBoxView.toShowList = [];

    class Observerable {
        register(obj) {
            this.observers.push(obj);
        }
        unregister(obj) {
            let index = this.observers.indexOf(obj);
            if (index >= 0) {
                this.observers.splice(index, 1);
            }
        }
        notify() {
            for (let i in this.observers) {
                let observer = this.observers[i];
                observer.update(this);
            }
        }
    }

    class BaseModel extends Observerable {
        constructor() {
            super();
        }
    }

    class DBBase {
        get(key) {
            return __awaiter(this, void 0, void 0, function* () { });
        }
        ;
        update(key, data) {
            return __awaiter(this, void 0, void 0, function* () { });
        }
        ;
        add(key, data) {
            return __awaiter(this, void 0, void 0, function* () { });
        }
        ;
        remove(key) {
            return __awaiter(this, void 0, void 0, function* () { });
        }
        ;
    }

    class DBLocalStorage extends DBBase {
        get(key) {
            return __awaiter(this, void 0, void 0, function* () {
                return Laya.LocalStorage.getJSON(key);
            });
        }
        add(key, data) {
            return __awaiter(this, void 0, void 0, function* () {
                Laya.LocalStorage.setItem(key, JSON.stringify(data));
            });
        }
        update(key, data) {
            return __awaiter(this, void 0, void 0, function* () {
                Laya.LocalStorage.setItem(key, JSON.stringify(data));
            });
        }
        remove(key) {
            return __awaiter(this, void 0, void 0, function* () {
                Laya.LocalStorage.removeItem(key);
            });
        }
    }

    class DBServer extends DBBase {
        get(key) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    let res = yield Net.httpGet("userData", { datatype: key });
                    res = Utils.decodeBase64WithSaltV2(res);
                    return JSON.parse(res.data);
                }
                catch (err) {
                    console.error("DBServer get data failed, key =", key);
                    return null;
                }
            });
        }
        add(key, data) {
            return __awaiter(this, void 0, void 0, function* () {
                if (typeof (data) !== "string") {
                    data = JSON.stringify(data);
                }
                yield Net.httpPost("userData", { datatype: key, content: data });
            });
        }
        update(key, data) {
            return __awaiter(this, void 0, void 0, function* () {
                let obj = { datatype: key };
                if (typeof (data) === "string") {
                    data = JSON.parse(data);
                }
                data["salt"] = Math.round(Math.random() * 50000 + 10000);
                obj["content"] = JSON.stringify(data);
                let jsonStr = Utils.encodeBase64WithSaltV2(obj);
                yield Net.httpPost("userData", jsonStr, NetResponseType.text, { "Content-Type": "text/plain" });
            });
        }
        remove(key) {
            return __awaiter(this, void 0, void 0, function* () {
                yield Net.httpPost("userData", { datatype: key, content: {} });
            });
        }
    }

    var DBType;
    (function (DBType) {
        DBType[DBType["localStorage"] = 0] = "localStorage";
        DBType[DBType["wechat"] = 1] = "wechat";
        DBType[DBType["Server"] = 2] = "Server";
    })(DBType || (DBType = {}));
    class DB {
        static setup(dbType, defaultData, saveDelta = 1000) {
            switch (dbType) {
                case DBType.localStorage:
                    {
                        this._db = new DBLocalStorage();
                    }
                    break;
                case DBType.Server:
                    {
                        this._db = new DBServer();
                    }
                    break;
            }
        }
        static get(key) {
            return __awaiter(this, void 0, void 0, function* () {
                let ret = yield this._db.get(key);
                if (ret == "") {
                    return null;
                }
                else {
                    return ret;
                }
            });
        }
        static update(key, data, delaySave = 3000) {
            if (!key || !data) {
                console.error("[db]update failed, key or data is null");
                return;
            }
            if (typeof (data) == "string") {
                data = JSON.parse(data);
            }
            if (this._dataCache == null)
                this._dataCache = {};
            if (this._dataCache[key]) {
                let cache = this._dataCache[key];
                for (let i in data) {
                    cache[i] = data[i];
                }
                this._dataCache[key] = cache;
            }
            else {
                this._dataCache[key] = data;
            }
            Laya.stage.clearTimer(this, this.delayUpdate);
            Laya.stage.timerOnce(delaySave, this, this.delayUpdate);
        }
        static delayUpdate() {
            if (!this._dataCache)
                return;
            for (let key in this._dataCache) {
                this._db.update(key, this._dataCache[key]);
            }
            this._dataCache = null;
        }
    }
    DB._dataCache = null;

    var EquipmentType;
    (function (EquipmentType) {
        EquipmentType[EquipmentType["weapon"] = 1] = "weapon";
        EquipmentType[EquipmentType["clothing"] = 2] = "clothing";
        EquipmentType[EquipmentType["ring"] = 3] = "ring";
        EquipmentType[EquipmentType["pet"] = 4] = "pet";
    })(EquipmentType || (EquipmentType = {}));
    var GridType;
    (function (GridType) {
        GridType[GridType["roleEquip"] = 0] = "roleEquip";
        GridType[GridType["roleStore"] = 1] = "roleStore";
    })(GridType || (GridType = {}));
    var ItemType;
    (function (ItemType) {
        ItemType[ItemType["other"] = 1] = "other";
        ItemType[ItemType["equipment"] = 2] = "equipment";
        ItemType[ItemType["material"] = 3] = "material";
    })(ItemType || (ItemType = {}));
    var EquipPart;
    (function (EquipPart) {
        EquipPart[EquipPart["weapon"] = 0] = "weapon";
        EquipPart[EquipPart["clothing"] = 1] = "clothing";
        EquipPart[EquipPart["ringLeft"] = 2] = "ringLeft";
        EquipPart[EquipPart["ringRight"] = 3] = "ringRight";
        EquipPart[EquipPart["petLeft"] = 4] = "petLeft";
        EquipPart[EquipPart["petRight"] = 5] = "petRight";
    })(EquipPart || (EquipPart = {}));
    var comGridType;
    (function (comGridType) {
        comGridType[comGridType["middle"] = 0] = "middle";
        comGridType[comGridType["left"] = 1] = "left";
        comGridType[comGridType["right"] = 2] = "right";
    })(comGridType || (comGridType = {}));
    class BagModel extends BaseModel {
        constructor() {
            super();
            this.dataKey = "bagData";
            this.weapon = { id: 10011, lv: 0, type: EquipmentType.weapon, equipPart: EquipPart.weapon };
            this.clothing = { id: -1, lv: 0, type: EquipmentType.clothing, equipPart: EquipPart.clothing };
            this.ringLeft = { id: -1, lv: 0, type: EquipmentType.ring, equipPart: EquipPart.ringLeft };
            this.ringRight = { id: -1, lv: 0, type: EquipmentType.ring, equipPart: EquipPart.ringRight };
            this.petLeft = { id: -1, lv: 0, type: EquipmentType.pet, equipPart: EquipPart.petLeft };
            this.petRight = { id: -1, lv: 0, type: EquipmentType.pet, equipPart: EquipPart.petRight };
            this.equipments = [];
            this.materials = [{
                    id: 20001,
                    count: 1
                }];
            this.roleEquipments = [];
            this.comEquipData = [];
            this.equipMaxQua = 5;
            this.bagAttrObj = {
                atk: 0,
                atkRate: 0,
                hp: 0,
                DRRate: 0,
                CDRRate: 0,
                BDRRate: 0,
                dodge: 0,
                crit: 0,
                critDam: 0,
                aspd: 0,
                meleeAtk: 0,
                remoteAtk: 0
            };
            this.dataObj = {};
        }
        initData() {
            return __awaiter(this, void 0, void 0, function* () {
                let res = yield DB.get(this.dataKey);
                if (res) {
                    this.setObj(res);
                }
                else {
                    this.saveData();
                }
                this.roleEquipments = [this.weapon, this.clothing, this.ringLeft, this.ringRight, this.petLeft, this.petRight];
            });
        }
        getAddEquipPart(type) {
            switch (type) {
                case EquipmentType.weapon:
                    return this.weapon;
                case EquipmentType.clothing:
                    return this.clothing;
                case EquipmentType.ring:
                    if (this.ringLeft.id <= this.ringRight.id)
                        return this.ringLeft;
                    else
                        return this.ringRight;
                case EquipmentType.pet:
                    if (this.petLeft.id <= this.petRight.id)
                        return this.petLeft;
                    else
                        return this.petRight;
                default:
                    throw "[Bag] illegal equiptype";
            }
        }
        getCanComEquipIds() {
            let equips = {};
            for (let l of this.equipments) {
                if (equips[l] == undefined) {
                    equips[l] = 1;
                }
                else {
                    ++equips[l];
                }
            }
            let canComEquip = [];
            for (let l in equips) {
                if (equips[l] >= 3) {
                    canComEquip.push(l);
                }
            }
            return canComEquip;
        }
        sortEquipOnCom() {
            let sortEquip = this.getCanComEquipIds();
            let idx = 0;
            let hasEquip;
            for (let l = 0; l < sortEquip.length; l++) {
                let se = sortEquip[l];
                for (let i = idx; i < this.equipments.length; i++) {
                    if (this.equipments[i] == se) {
                        idx++;
                        continue;
                    }
                    hasEquip = false;
                    for (let j = i + 1; j < this.equipments.length; j++) {
                        if (this.equipments[j] == se) {
                            let temp = this.equipments[i];
                            this.equipments[i] = this.equipments[j];
                            this.equipments[j] = temp;
                            hasEquip = true;
                            idx++;
                            break;
                        }
                    }
                    if (hasEquip == false) {
                        break;
                    }
                }
            }
        }
        sortEquipByPart() {
            this.equipments.sort((a, b) => {
                return a - b;
            });
            this.equipments.sort((a, b) => {
                return cfg.item[b].qua - cfg.item[a].qua;
            });
            this.equipments.sort((a, b) => {
                return cfg.item[a].part - cfg.item[b].part;
            });
        }
        sortEquipByQua() {
            this.equipments.sort((a, b) => {
                return cfg.item[b].qua - cfg.item[a].qua;
            });
            let quaArr = {};
            for (let l of this.equipments) {
                if (quaArr[cfg.item[l].qua] == undefined) {
                    quaArr[cfg.item[l].qua] = [];
                }
                quaArr[cfg.item[l].qua].push(l);
            }
            let partArr = [];
            let idx = 0;
            for (let l = this.equipMaxQua; l >= 0; l--) {
                if (quaArr[l] == undefined)
                    continue;
                quaArr[l].sort((a, b) => {
                    return cfg.item[a].part - cfg.item[b].part;
                });
                partArr[idx] = {};
                for (let ll of quaArr[l]) {
                    if (partArr[idx][cfg.item[ll].part] == undefined) {
                        partArr[idx][cfg.item[ll].part] = [];
                    }
                    partArr[idx][cfg.item[ll].part].push(ll);
                }
                ++idx;
            }
            this.equipments = [];
            for (let l of partArr) {
                for (let partTable in l) {
                    l[partTable].sort((a, b) => {
                        return a - b;
                    });
                    for (let id of l[partTable]) {
                        this.equipments.push(id);
                    }
                }
            }
        }
        saveData() {
            DB.update(this.dataKey, this.getObj(), 1000);
        }
        setObj(obj, isReset = false) {
            if (obj.weapon != undefined && obj.weapon.id != -1)
                this.weapon = obj.weapon;
            if (obj.clothing != undefined)
                this.clothing = obj.clothing;
            if (obj.ringLeft != undefined)
                this.ringLeft = obj.ringLeft;
            if (obj.ringRight != undefined)
                this.ringRight = obj.ringRight;
            if (obj.petLeft != undefined)
                this.petLeft = obj.petLeft;
            if (obj.petRight != undefined)
                this.petRight = obj.petRight;
            if (obj.equipments != undefined)
                this.equipments = obj.equipments;
            if (obj.materials != undefined)
                this.materials = obj.materials;
            if (isReset) {
                this.weapon = { id: 10011, lv: 0, type: EquipmentType.weapon, equipPart: EquipPart.weapon };
                this.clothing = { id: -1, lv: 0, type: EquipmentType.clothing, equipPart: EquipPart.clothing };
                this.ringLeft = { id: -1, lv: 0, type: EquipmentType.ring, equipPart: EquipPart.ringLeft };
                this.ringRight = { id: -1, lv: 0, type: EquipmentType.ring, equipPart: EquipPart.ringRight };
                this.petLeft = { id: -1, lv: 0, type: EquipmentType.pet, equipPart: EquipPart.petLeft };
                this.petRight = { id: -1, lv: 0, type: EquipmentType.pet, equipPart: EquipPart.petRight };
                this.equipments = [];
                this.materials = [{
                        id: 20001,
                        count: 1
                    }];
            }
        }
        getPet() {
            return [this.petLeft, this.petRight];
        }
        getObj() {
            this.dataObj["weapon"] = this.weapon;
            this.dataObj["clothing"] = this.clothing;
            this.dataObj["ringLeft"] = this.ringLeft;
            this.dataObj["ringRight"] = this.ringRight;
            this.dataObj["petLeft"] = this.petLeft;
            this.dataObj["petRight"] = this.petRight;
            this.dataObj["equipments"] = this.equipments;
            this.dataObj["materials"] = this.materials;
            return this.dataObj;
        }
        resetData() {
            this.setObj({}, true);
            this.saveData();
        }
    }

    const ServerConfig = {
        releaseUrl: "https://xvgame.top:3029"
    };
    const DotServerConfig = {
        releaseUrl: "https://xyx.kuaiyugo.com/node3/t1/public/p1"
    };
    const ServerList = {
        ServerUrl: ServerConfig.releaseUrl,
        DotServerUrl: DotServerConfig.releaseUrl,
    };

    class StatManager {
        static tmStat(key, info) {
            return;
            try {
                if (Utils.isEmptyObject(info)) {
                    wx.tmSDK.sendEvent(key);
                }
                else {
                    wx.tmSDK.sendEvent(key, info);
                }
            }
            catch (e) {
                console.log('[stat err]:', JSON.stringify(e));
            }
        }
        static initStatRegDate() {
            return;
            let date = new Date(UserData.regDate);
            this._statRegDate = `${date.getUTCFullYear()}-${date.getUTCMonth() + 1}-${date.getUTCDate()}`;
        }
        static sendDailyStat() {
            return;
            if (!this._statRegDate) {
                this.initStatRegDate();
            }
            let type = "dailyStat";
            let strStageNum = UserData.chap.toString();
            if (UserData.stage - 1 > 9) {
                strStageNum = strStageNum + (UserData.stage - 1);
            }
            else {
                if (UserData.stage > 0) {
                    strStageNum = strStageNum + "0" + (UserData.stage - 1);
                }
                else {
                    strStageNum = strStageNum + "0" + UserData.stage;
                }
            }
            let weaponInfo = mm.bag.getRoleEquipPart(EquipPart.weapon);
            let weaponQua = cfg.item[weaponInfo.id].qua;
            let data = {
                "openID": XHSdk.userInfo.open_id,
                "注册时间": this._statRegDate,
                "当天开始次数": UserData.dailyGameTimes,
                "当天累计通关层数": UserData.dailyPassStageCnt,
                "当天完成次数": UserData.dailyFiniGameTimes,
                "累计完成次数": UserData.totalFiniGameTimes,
                "历史最高层数": parseInt(strStageNum),
                "武器品质": weaponQua,
                "武器等级": weaponInfo.lv,
                "死亡层数": UserData.dailyDeadStageID,
            };
            let date = Timer.getNowFormatDate;
            let param = {
                type: type,
                data: data,
                uploadDate: date,
                appid: "wx9cf352e7906e75fc",
                openid: XHSdk.userInfo.open_id,
            };
            try {
                Net.httpPost("record/upload", JSON.stringify(param), null, null, null, null, ServerList.DotServerUrl);
            }
            catch (e) {
                console.warn("StatManger.sendDailyStat error", e);
            }
        }
        static dailyPlayGame() {
            return;
            UserData.statPlayGame();
            this.sendDailyStat();
        }
        static dailyPassStage() {
            return;
            UserData.statPassStage();
            this.sendDailyStat();
        }
        static tankUpgrade() {
            return;
            this.sendDailyStat();
        }
        static bestScore() {
            return;
            this.sendDailyStat();
        }
        static statDeath(stageID) {
            return;
            UserData.statDeath(stageID);
            this.sendDailyStat();
        }
        static endGame() {
            return;
            UserData.statEndGame();
            this.sendDailyStat();
        }
        static weaponUpdate() {
            return;
            this.sendDailyStat();
        }
    }

    class BagController extends BaseController {
        constructor() {
            super();
            this._model = new BagModel();
        }
        get _view() {
            return mm.main.mainView;
        }
        init() {
            return __awaiter(this, void 0, void 0, function* () {
                yield this._model.initData();
            });
        }
        static sortItemsById(itemsIds) {
            const itemInfos = itemsIds.map(id => {
                const item = cfg.item[id];
                item.id = id;
                return item;
            });
            itemInfos.sort((a, b) => {
                if (a.type < b.type) {
                    return -1;
                }
                else if (a.type > b.type) {
                    return 1;
                }
                else {
                    if (a.type == 1) {
                        return a.id <= b.id ? 1 : -1;
                    }
                    else if (a.type == 2) {
                        if (a.qua < b.qua) {
                            return -1;
                        }
                        else if (a.qua > b.qua) {
                            return 1;
                        }
                        else {
                            if (a.part < b.part) {
                                return -1;
                            }
                            else if (a.part > b.part) {
                                return 1;
                            }
                            else {
                                return a.id <= b.id ? -1 : 1;
                            }
                        }
                    }
                    else {
                        return a.id <= b.id ? -1 : 1;
                    }
                }
            });
            const currencyIds = itemInfos.filter(v => {
                return v.type == 1;
            }).map((v) => { return v.id; });
            const equipIds = itemInfos.filter(v => {
                return v.type == 2;
            }).map((v) => { return v.id; });
            const matIds = itemInfos.filter(v => {
                return v.type == 3;
            }).map((v) => { return v.id; });
            return {
                equip: equipIds,
                currency: currencyIds,
                mat: matIds,
                total: itemInfos.map(v => { return v.id; })
            };
        }
        getMainRoleAttrBonusByType(type) {
            let attr = 0;
            for (let equip of this._model.roleEquipments) {
                if (equip.id == -1 || !cfg.item[equip.id][type])
                    continue;
                attr += cfg.item[equip.id][type];
                if (cfg.item[equip.id].intenAttr == type) {
                    attr += cfg.item[equip.id].intenValue * equip.lv;
                }
            }
            console.log("[bag attr] " + type + ":" + attr.toString());
            return attr;
        }
        ifPartEquiped(partInfo) {
            return -1 != partInfo.id;
        }
        ifPartEquipedByType(type) {
            let info = this.getRoleEquipPart(type);
            return this.ifPartEquiped(info);
        }
        getMainRoleAttrBonusObj() {
            for (let attr in this._model.bagAttrObj) {
                this._model.bagAttrObj[attr] = 0;
            }
            for (let equip of this._model.roleEquipments) {
                if (!this.ifPartEquiped(equip))
                    continue;
                if (cfg.item[equip.id].atk)
                    this._model.bagAttrObj.atk += cfg.item[equip.id].atk;
                if (cfg.item[equip.id].atkRate)
                    this._model.bagAttrObj.atkRate += cfg.item[equip.id].atkRate;
                if (cfg.item[equip.id].hp)
                    this._model.bagAttrObj.hp += cfg.item[equip.id].hp;
                if (cfg.item[equip.id].DRRate)
                    this._model.bagAttrObj.DRRate += cfg.item[equip.id].DRRate;
                if (cfg.item[equip.id].CDRRate)
                    this._model.bagAttrObj.CDRRate += cfg.item[equip.id].CDRRate;
                if (cfg.item[equip.id].BDRRate)
                    this._model.bagAttrObj.BDRRate += cfg.item[equip.id].BDRRate;
                if (cfg.item[equip.id].dodge)
                    this._model.bagAttrObj.dodge += cfg.item[equip.id].dodge;
                if (cfg.item[equip.id].crit)
                    this._model.bagAttrObj.crit += cfg.item[equip.id].crit;
                if (cfg.item[equip.id].critDam)
                    this._model.bagAttrObj.critDam += cfg.item[equip.id].critDam;
                if (cfg.item[equip.id].aspd)
                    this._model.bagAttrObj.aspd += cfg.item[equip.id].aspd;
                if (cfg.item[equip.id].meleeAtk)
                    this._model.bagAttrObj.meleeAtk += cfg.item[equip.id].meleeAtk;
                if (cfg.item[equip.id].remoteAtk)
                    this._model.bagAttrObj.remoteAtk += cfg.item[equip.id].remoteAtk;
                this._model.bagAttrObj[cfg.item[equip.id].intenAttr] += cfg.item[equip.id].intenValue * equip.lv;
            }
            return this._model.bagAttrObj;
        }
        getAddEquipPart(part) {
            return this._model.getAddEquipPart(part);
        }
        addEquip(idx) {
            let roleEquipPart = this.getAddEquipPart(cfg.item[this._model.equipments[idx]].part);
            if (!this.ifPartEquiped(roleEquipPart)) {
                roleEquipPart.id = this._model.equipments[idx];
                this._model.equipments.splice(idx, 1);
            }
            else {
                let tempId = roleEquipPart.id;
                roleEquipPart.id = this._model.equipments[idx];
                this._model.equipments[idx] = tempId;
            }
            this._model.saveData();
            if (EquipPart.weapon == roleEquipPart.equipPart) {
                StatManager.weaponUpdate();
            }
            this._view && this._view.refreshEquipView();
            this._view && this._view.refreshItemView();
            this._view && this._view.refreshRoleModel();
        }
        removeEquip(part) {
            let roleEquip = this.getRoleEquipPart(part);
            if (roleEquip.id == -1)
                return;
            if (roleEquip.type == EquipmentType.weapon) {
                ViewFlyword.showTip("武器不能卸下！");
                return;
            }
            this._model.equipments.push(roleEquip.id);
            roleEquip.id = -1;
            this._model.saveData();
            this._view && this._view.refreshEquipView();
            this._view && this._view.refreshItemView();
            this._view && this._view.refreshRoleModel();
        }
        upgradeEquip(equipPart) {
            let part = mm.bag.getRoleEquipPart(equipPart);
            if (part.id == -1)
                return false;
            let equipLv = part.lv;
            let spoolerID = cfg.global.equipPartToSpooler[cfg.item[part.id].part];
            if (cfg.level[equipLv + 1]) {
                let spoolerCount = mm.bag.getspoolerCount(spoolerID);
                let spooler = mm.bag.getMat(spoolerID);
                let spoolerCost = cfg.level[equipLv + 1].scrollCost;
                let goldCost = cfg.level[equipLv + 1].goldCost;
                if (spoolerCount >= spoolerCost && UserData.gold >= goldCost) {
                    spooler.count -= spoolerCost;
                    UserData.gold -= goldCost;
                    part.lv++;
                    this._view && this._view.refreshEquipView();
                    this._view && this._view.refreshItemView();
                    UserData.saveData();
                    this._model.saveData();
                    if (EquipPart.weapon == equipPart) {
                        StatManager.weaponUpdate();
                    }
                    return true;
                }
                else if (spoolerCount < spoolerCost && UserData.gold < goldCost) {
                    ViewFlyword.showTip("材料和金币不足！");
                    return false;
                }
                else if (spoolerCount < spoolerCost) {
                    ViewFlyword.showTip("材料不足！");
                    return false;
                }
                else if (UserData.gold < goldCost) {
                    ViewFlyword.showTip("金币不足！");
                    return false;
                }
            }
            else {
                ViewFlyword.showTip("该部位已经最高级！");
                return false;
            }
        }
        canUpgradeEquip(equipPart) {
            let part = mm.bag.getRoleEquipPart(equipPart);
            if (part.id == -1)
                return false;
            let equipLv = part.lv;
            let spoolerID = cfg.global.equipPartToSpooler[cfg.item[part.id].part];
            if (cfg.level[equipLv + 1]) {
                let spoolerCount = mm.bag.getspoolerCount(spoolerID);
                let spoolerCost = cfg.level[equipLv + 1].scrollCost;
                let goldCost = cfg.level[equipLv + 1].goldCost;
                if (spoolerCount >= spoolerCost && UserData.gold >= goldCost) {
                    return true;
                }
            }
            return false;
        }
        obtainItem(id, count = 1) {
            let itemType = cfg.item[id].type;
            switch (itemType) {
                case ItemType.equipment:
                    for (let i = 0; i < count; i++) {
                        this._model.equipments.push(id);
                    }
                    break;
                case ItemType.material:
                    let index = this._model.materials.findIndex((res) => {
                        return res.id == id;
                    });
                    if (index == -1) {
                        this._model.materials.push({ id: id, count: count });
                    }
                    else {
                        this._model.materials[index].count += count;
                    }
                    break;
                default:
                    throw "[Bag Controller] illegal itemType:" + itemType;
            }
            this._model.saveData();
            this._view && this._view.refreshItemView();
        }
        getPet() {
            return this._model.getPet();
        }
        getMainRoleActorID() {
            let weaponID = this.getRoleEquipPart(EquipPart.weapon).id;
            return cfg.item[weaponID].actorId;
        }
        sortEquipByQua() {
            this._model.sortEquipByQua();
        }
        sortEquipByPart() {
            this._model.sortEquipByPart();
        }
        getItemArr() {
            return [...this._model.equipments, ...this._model.materials];
        }
        getRoleEquipArr() {
            return this._model.roleEquipments;
        }
        getEquipArr() {
            return this._model.equipments;
        }
        getMainRoleModelRes() {
            let weaponID = this.getRoleEquipPart(EquipPart.weapon).id;
            let clothingID;
            let clothingInfo = this.getRoleEquipPart(EquipPart.clothing);
            if (this.ifPartEquiped(clothingInfo)) {
                clothingID = clothingInfo.id;
            }
            let weaponCursor = cfg.item[weaponID].modelType - 1;
            let clothingCursor = 0;
            if (clothingID) {
                clothingCursor = cfg.item[clothingID].modelType - 1;
                if (clothingCursor >= cfg.global.equipModleRes[weaponCursor].length) {
                    clothingCursor = cfg.global.equipModleRes[weaponCursor].length - 1;
                }
            }
            return cfg.global.equipModleRes[weaponCursor][clothingCursor];
        }
        resetData() {
            this._model.resetData();
        }
        getRoleEquipPart(equipPart) {
            return this._model.roleEquipments[equipPart];
        }
        getspoolerCount(id) {
            let count = 0;
            for (let mat of this._model.materials) {
                if (mat.id == id) {
                    count = mat.count;
                    break;
                }
            }
            return count;
        }
        getMat(id) {
            for (let mat of this._model.materials) {
                if (mat.id == id) {
                    return mat;
                }
            }
            return null;
        }
        addComEquip(id, index, grid) {
            this._model.comEquipData[grid] = { id, index, grid };
        }
        removeComEquip(grid) {
            this._model.comEquipData[grid] = null;
        }
        getComEquipGrid(grid) {
            return this._model.comEquipData[grid];
        }
        getComEquipGridTypeByIndex(index) {
            for (let l = 0; l < this._model.comEquipData.length; l++) {
                let data = this._model.comEquipData[l];
                if (data == undefined || data == null)
                    continue;
                if (data.index == index) {
                    return l;
                }
            }
            return -1;
        }
        getGrid() {
            for (let l = 0; l < 3; l++) {
                if (this._model.comEquipData[l] == undefined || this._model.comEquipData[l] == null) {
                    return l;
                }
            }
            return -1;
        }
        clearComEquip() {
            this._model.comEquipData = [];
        }
        comEquip() {
            if (this.canComEquip() == false) {
                ViewFlyword.showTip("合成失败！");
                return -1;
            }
            this._model.comEquipData.sort((a, b) => {
                return a.index - b.index;
            });
            let equip = this._model.comEquipData.shift();
            let indexOffset = 0;
            let mergeId = cfg.item[equip.id].mergeId;
            this._model.equipments.push(mergeId);
            while (equip != undefined) {
                this._model.equipments.splice(equip.index - indexOffset, 1);
                ++indexOffset;
                equip = this._model.comEquipData.shift();
            }
            this._model.saveData();
            this._view && this._view.refreshItemView();
            return mergeId;
        }
        canComEquip() {
            let equips = this._model.comEquipData;
            if (!equips[comGridType.left] || !equips[comGridType.right] || !equips[comGridType.middle]) {
                return false;
            }
            return equips[comGridType.left].id == equips[comGridType.middle].id &&
                equips[comGridType.right].id == equips[comGridType.middle].id &&
                cfg.item[equips[comGridType.middle].id].mergeId != undefined;
        }
        hasComEquip() {
            for (let l of this._model.comEquipData) {
                if (l != undefined || l != null) {
                    return true;
                }
            }
            return false;
        }
        checkEquipInComGrid(cellIndex) {
            for (let l of this._model.comEquipData) {
                if (l != undefined || l != null) {
                    if (l.index == cellIndex) {
                        return true;
                    }
                }
            }
            return false;
        }
        getCanComEquipIds() {
            return this._model.getCanComEquipIds();
        }
        itemQuaRes(qua) {
            return `game/view/common/common_frame_c${qua}.png`;
        }
        itemIconRes(name) {
            return `${remoteUrl}/${cfg.global.resVer}/game/icon/${name}.png`;
        }
        isShowComRedDot() {
            let equipCountTable = {};
            for (let l of this._model.equipments) {
                if (equipCountTable[l] == undefined) {
                    equipCountTable[l] = 1;
                }
                else {
                    ++equipCountTable[l];
                    if (equipCountTable[l] >= 3) {
                        return true;
                    }
                }
            }
            return false;
        }
        isShowEquipArrow() {
            for (let l of this._model.roleEquipments) {
                if (l.id == -1)
                    continue;
                for (let equip of this._model.equipments) {
                    if (l.type == cfg.item[equip].part && cfg.item[l.id].qua < cfg.item[equip].qua) {
                        return true;
                    }
                }
            }
            return false;
        }
        compareEquip(originID, compareID) {
            let origin = cfg.item[originID];
            let compare = cfg.item[compareID];
            if (originID == -1 || (origin.part == compare.part && origin.qua < compare.qua)) {
                return true;
            }
            return false;
        }
        sortItemOnCom() {
            this._model.sortEquipOnCom();
        }
        debug_delMaterials() {
            this._model.materials = [];
            this._model.saveData();
            this._view && this._view.refreshItemView();
        }
    }

    function memoize(target, key, descriptor) {
        let fnKey = null;
        let fn = null;
        if (typeof descriptor.value === "function") {
            fnKey = "value";
            fn = descriptor.value;
            if (fn.length !== 0) {
                console.warn("Memoize should only be used in functions with zero parameters");
            }
        }
        else if (typeof descriptor.get === "function") {
            fnKey = "get";
            fn = descriptor.get;
        }
        if (!fn) {
            throw new Error("not supported");
        }
        const memoizeKey = `$memoize$${key}`;
        descriptor[fnKey] = function (...args) {
            if (!this.hasOwnProperty(memoizeKey)) {
                Object.defineProperty(this, memoizeKey, {
                    configurable: false,
                    enumerable: false,
                    writable: false,
                    value: fn.apply(this, args)
                });
            }
            return this[memoizeKey];
        };
    }

    class FightEndViewPVE extends BaseViewLY {
        onAwake() {
            if (Laya.Browser.onTTMiniGame) {
                this.shareVideo.visible = true;
                this.shareVideo.on(Laya.Event.CLICK, this, this.shareVideoBtnClick);
            }
            else {
                this.shareVideo.visible = false;
            }
            this.rewardBtn.on(Laya.Event.CLICK, this, this.rewardBtnClick);
            this.threeRewardBtn.on(Laya.Event.CLICK, this, this.multipleRewardBtnClick);
            this.multipleRewardLabel.text = `${cfg.global.endViewMultipleReward}倍领取`;
            this.itemList.renderHandler = Laya.Handler.create(this, this.itemListRender, null, false);
            this.itemList.vScrollBarSkin = "";
            this.setHand(false);
            if (Device.isBangsScreen()) {
                this.headBox.top += 70;
            }
        }
        setBtnEnabled(b) {
            this.rewardBtn.mouseEnabled = b;
            this.threeRewardBtn.mouseEnabled = b;
        }
        onEnable() {
            this.setBtnEnabled(false);
            mm.tankRank.calcTaskIsFinish(TaskTargetType.battleNum, 1);
            UserData.saveEndData();
            mm.fight.setJoyStickStatePVE(false);
            mm.fight.scene.gamePause();
            this.changeTitleText(FightEndViewPVE.chap, FightEndViewPVE.stage);
            this.displayRewardList();
            this.updateTankRankInfo();
            if (UserData.totalGameTimes == 1) {
                this.setHand(true);
            }
            Platform.inst.showBanner(BannerID.fightEnd);
        }
        onOpened() {
            this.setBtnEnabled(true);
        }
        onBeforeClose() {
            Platform.inst.hideBanner();
        }
        static showView(chap, stage) {
            this.chap = chap;
            this.stage = stage < 0 ? 0 : stage;
            mm.fight.showFightEndViewPVE();
            Platform.inst.stopRecord();
        }
        changeTitleText(chap, stage) {
            this.chapText.text = `第${chap}章`;
            this.stageText.value = stage.toString();
        }
        get reduceCollectItems() {
            let obj = {};
            if (MainRole.inst.getCollectedItems() && MainRole.inst.getCollectedItems().length > 0) {
                for (let item of MainRole.inst.getCollectedItems()) {
                    if (obj[item]) {
                        obj[item]++;
                    }
                    else {
                        obj[item] = 1;
                    }
                }
            }
            return obj;
        }
        get sortCollectItems() {
            return BagController.sortItemsById(Object.keys(this.reduceCollectItems).map(s => {
                return Number(s);
            })).total.map(itemIDStr => {
                return {
                    id: Number(itemIDStr),
                    count: this.reduceCollectItems[itemIDStr]
                };
            });
        }
        displayRewardList() {
            this.itemList.array = [MainRole.inst.collectedGoldNum.toString(), ...this.sortCollectItems];
            this.itemList.refresh();
        }
        itemListRender(cell, index) {
            let numLabel = cell.getChildByName("num");
            let bg = cell.getChildByName("bg");
            if (index == 0) {
                let item1Img = cell.getChildByName("item1");
                item1Img.visible = true;
                item1Img.skin = "game/view/common/common_icon_jinbi.png";
                numLabel.text = cell.dataSource;
                bg.skin = "game/view/common/common_frame_golden.png";
            }
            else {
                let item2Img = cell.getChildByName("item2");
                item2Img.visible = true;
                let item = cfg.item[cell.dataSource.id];
                Resource.load(mm.bag.itemIconRes(item.icon)).then(res => {
                    if (res) {
                        item2Img.texture = res;
                    }
                });
                if (item.type == ItemType.material) {
                    bg.skin = "game/view/common/common_frame_golden.png";
                }
                else {
                    bg.skin = mm.bag.itemQuaRes(item.qua);
                }
                numLabel.text = `${cell.dataSource.count}`;
            }
        }
        rewardBtnClick() {
            this.getReward(true, 1);
        }
        multipleRewardBtnClick() {
            Platform.inst.showVideoOrShare(VideoID.endReward, ShareKeys.reward).then(() => {
                this.getReward(true, cfg.global.endViewMultipleReward);
            }).catch(() => {
                this.getReward(false);
                ViewFlyword.showTip("需完整观看才能获取奖励哦");
            });
        }
        shareVideoBtnClick() {
            Platform.inst.shareRecordVideo()
                .then(() => {
                this.getReward(true, cfg.global.endViewMultipleReward);
            }).catch(() => {
                this.getReward(false);
                ViewFlyword.showTip("分享成功才能获取奖励哦");
            });
        }
        getReward(state, multiple = 1) {
            if (multiple <= 0)
                return;
            if (state) {
                UserData.gold += MainRole.inst.collectedGoldNum * multiple;
                let obj = this.reduceCollectItems;
                for (let k in obj) {
                    mm.bag.obtainItem(parseInt(k), obj[k] * multiple);
                }
                const gainItemInfos = [{
                        icon: kJinbiRewardIcon,
                        displayIndex: kJinbiDisplayIndex,
                        desc: kJinbiRewardDesc,
                        tips: `x${MainRole.inst.collectedGoldNum * multiple}`
                    }];
                gainItemInfos.push(...this.sortCollectItems.map(item => {
                    const itemID = item.id;
                    const count = item.count;
                    const itemConfig = cfg.item[itemID];
                    const type = itemConfig.type;
                    if (type == 1) {
                        let displayIndex;
                        let displayDesc;
                        if (itemID == 1) {
                            displayIndex = kJinbiDisplayIndex;
                            displayDesc = kJinbiRewardDesc;
                        }
                        else if (itemID == 3) {
                            displayIndex = kTiliDisplayIndex;
                            displayDesc = kJinbiRewardDesc;
                        }
                        return {
                            icon: `game/view/common/${itemConfig.icon}`,
                            displayIndex: displayIndex,
                            tips: `x${count * multiple}`,
                            desc: displayDesc
                        };
                    }
                    else if (type == 2) {
                        return {
                            icon: mm.bag.itemIconRes(itemConfig.icon),
                            displayIndex: itemConfig.qua,
                            desc: itemConfig.name,
                            tips: `x${count * multiple}`
                        };
                    }
                    else if (type == 3) {
                        return {
                            icon: mm.bag.itemIconRes(itemConfig.icon),
                            displayIndex: kJuanzhouDisplayIndex,
                            desc: itemConfig.name,
                            tips: `x${count * multiple}`
                        };
                    }
                }));
                TipsBoxView.showView(gainItemInfos);
                UserData.saveEndData();
                ViewManagerLY.close(ViewID.end.name);
                mm.fight.exitFight();
            }
        }
        updateTankRankInfo() {
            let isSetTaskShow = false;
            let hasEverydayTask = false;
            let hasMainTask = false;
            for (let id in mm.tankRank.tankRankModel.everyDayTask) {
                let taskData = mm.tankRank.tankRankModel.everyDayTask[id];
                let originData = cfg.rankTask[id];
                if (!taskData.isFinish && !hasEverydayTask) {
                    isSetTaskShow = true;
                    hasEverydayTask = true;
                    this.passLevelText.text = originData.desc;
                    this.passLevelProgress.value = (taskData.maxCount - taskData.count) / taskData.maxCount;
                    this.passLevelPercText.text = `(${taskData.maxCount - taskData.count}/${taskData.maxCount})`;
                    continue;
                }
                if (taskData.isFinish && !taskData.isGetReward) {
                    isSetTaskShow = true;
                    this.passLevelText.text = originData.desc;
                    this.passLevelProgress.value = (taskData.maxCount - taskData.count) / taskData.maxCount;
                    this.passLevelPercText.text = `(${taskData.maxCount - taskData.count}/${taskData.maxCount})`;
                    break;
                }
            }
            for (let id in mm.tankRank.tankRankModel.mainTask) {
                let taskData = mm.tankRank.tankRankModel.mainTask[id];
                let originData = cfg.rankTask[id];
                if (!taskData.isFinish && !hasMainTask) {
                    isSetTaskShow = true;
                    hasMainTask = true;
                    this.passLevelText.text = originData.desc;
                    this.passLevelProgress.value = (taskData.maxCount - taskData.count) / taskData.maxCount;
                    this.passLevelPercText.text = `(${taskData.maxCount - taskData.count}/${taskData.maxCount})`;
                    continue;
                }
                if (taskData.isFinish && !taskData.isGetReward) {
                    isSetTaskShow = true;
                    this.passLevelText.text = originData.desc;
                    this.passLevelProgress.value = (taskData.maxCount - taskData.count) / taskData.maxCount;
                    this.passLevelPercText.text = `(${taskData.maxCount - taskData.count}/${taskData.maxCount})`;
                    break;
                }
            }
            this.setTankRankDisplay(isSetTaskShow);
        }
        setTankRankDisplay(state) {
            this.passLevelText.visible = state;
            this.passLevelPercText.visible = state;
            this.passLevelProgress.visible = state;
            this.noneTaskLabel.visible = !state;
        }
        setHand(state) {
        }
    }
    __decorate([
        memoize
    ], FightEndViewPVE.prototype, "reduceCollectItems", null);
    __decorate([
        memoize
    ], FightEndViewPVE.prototype, "sortCollectItems", null);

    class BaseScene extends Laya.Script {
        get scene3D() {
            return this.sceneNode;
        }
        get scene2D() {
            return this.sceneNode;
        }
        onAwake() {
            if (this.sceneNode != null) {
                this.camera = this.sceneNode.getChildByName("Main Camera");
                if (this.camera == null) {
                    console.warn("Not find Main Camera");
                    return;
                }
                else {
                    MainCamera.camera = this.camera;
                }
                this.directionLight = this.sceneNode.getChildByName("Directional Light");
            }
        }
        onEnable() { }
        onDestroy() { }
        addChild(node) {
            this.sceneNode.addChild(node);
        }
        getChildByName(name) {
            this.sceneNode.getChildByName(name);
        }
    }

    const CONTENT_LAYER_NAME = "mapContent";
    const DECORATION_LAYER_NAME = "mapDecoration";
    const TAG_FOR_FLOOR = 1;
    class StageSceneGeneraotr {
        constructor() {
            this.mapWidth = cfg.global.stageMapW;
            this.maxPosX = this.mapWidth / 2;
            this.minPosX = -this.mapWidth / 2;
        }
        setChap(chapIdx) {
            this.chapIdx = chapIdx;
            this.prefabMap = {};
        }
        setStage(stageIdx, back2Map) {
            this.stageIdx = stageIdx;
            this.config = mm.fight.getCurStageCfg();
            if (null == back2Map) {
                this.randomMap();
                UserData.saveContinueData(false);
            }
            else {
                this.mapGroupIdx = back2Map;
            }
        }
        initStageTitleNodes() {
            let itemsNode = this.scene.getChildByName("mapItems_02");
            let titleNode = itemsNode.getChildByName("1_title");
            this.titleBg = titleNode.getChildByName("1_title");
            this.oneDigit = titleNode.getChildByName("oneDigit");
            this.twoDigitNode = titleNode.getChildByName("twoDigit");
            this.onesPlace = this.twoDigitNode.getChildByName("oneDigit");
            this.tensPlace = this.twoDigitNode.getChildByName("tenDigit");
            this.bossIcon = itemsNode.getChildByName("boss").getChildByName("boss").getChildByName("boss");
            this.bossIcon.meshRenderer.material.renderQueue = 3003;
        }
        setScene(scene) {
            this.scene = scene;
            this.scene.getChildByName("mapItems_01").active = false;
            this.initStageTitleNodes();
        }
        getGridMap() {
            return this.gridMap;
        }
        getMonsterBornInfos() {
            return this.monsterBornInfoArr;
        }
        getMonsterBornInfosByWave(waveIdx) {
            return this.monsterBornInfoArr[waveIdx];
        }
        getActorBornInfos() {
            return this.actorBornPosArr;
        }
        getMapPool() {
            let mapPool = this.config.stage;
            if (!mm.fight.bPassedNoobStage7 && this.config.noobStage) {
                mapPool = this.config.noobStage;
            }
            return mapPool;
        }
        getMapGroupIdx() {
            return this.mapGroupIdx;
        }
        randomMap() {
            let mapPool = this.getMapPool();
            this.mapGroupIdx = MathUtils.randomN(mapPool.length - 1);
        }
        setActorBornPos(rowCnt) {
            this.actorBornPosArr = [];
            this.actorBornPosArr.push(new Laya.Vector3(0, 0, -rowCnt / 2 + 0.5));
        }
        getResPrefab(resTag) {
            if (!this.prefabMap[resTag]) {
                const resName = cfg.sceneAssetCfg[resTag].name;
                this.prefabMap[resTag] = this.scene.getChildByName("mapItems_01").getChildByName(resName);
            }
            return this.prefabMap[resTag];
        }
        createEle(resTag) {
            let sp = Pool.spawnByObj(this.getResPrefab(resTag));
            return sp;
        }
        refreshBotBorderPos(rowCnt) {
            const decorationCfg = cfg.stageLevelCfg[this.chapIdx].assetList;
            const botResTag = decorationCfg[2];
            const botResName = cfg.sceneAssetCfg[botResTag].name;
            const botBorderNode = this.scene.getChildByName("mapItems_02").getChildByName(botResName);
            gVec3.x = 0;
            gVec3.y = 0;
            gVec3.z = -rowCnt / 2;
            botBorderNode.transform.position = gVec3.clone();
            for (var i = 0; i < botBorderNode.numChildren; i++) {
                var child = botBorderNode.getChildAt(i);
                let sp = child;
                if (sp.meshRenderer) {
                    sp.meshRenderer.material.renderQueue = 3010;
                }
            }
        }
        addMonsterDropGoldInfo() {
            if (!this.config.goldReward || 0 == this.config.goldReward) {
                return;
            }
            for (let waveIdx = 0, waveNum = this.monsterBornInfoArr.length; waveIdx < waveNum; waveIdx++) {
                let infoArr = this.monsterBornInfoArr[waveIdx];
                for (let i = 0, len = infoArr.length; i < len; i++) {
                    infoArr[i].goldCnt = MathUtils.randomN(3, 6);
                }
            }
            for (let i = 0, len = this.splitedMonsterDropInfoArr.length; i < len; i++) {
                this.splitedMonsterDropInfoArr[i].goldCnt = MathUtils.randomN(3, 6);
            }
        }
        getMonsterNum() {
            let total = 0;
            for (let waveIdx = 0, waveNum = this.monsterBornInfoArr.length; waveIdx < waveNum; waveIdx++) {
                total += this.monsterBornInfoArr[waveIdx].length;
            }
            total += this.splitedMonsterDropInfoArr.length;
            return total;
        }
        randomDropCnt(chanceList) {
            let totalWeight = 0;
            let intervals = [];
            for (let i = 0, len = chanceList.length; i < len; i++) {
                let weight = chanceList[i][0];
                totalWeight += weight;
                intervals.push(totalWeight);
            }
            let pin = MathUtils.randomN(0, totalWeight);
            let dropCnt = 0;
            for (let i = 0, len = intervals.length; i < len; i++) {
                if (pin < intervals[i]) {
                    dropCnt = chanceList[i][1];
                    break;
                }
            }
            return dropCnt;
        }
        addMonsterDropXPInfo() {
            if (!this.config.hpReward) {
                return;
            }
            let dropCnt = this.randomDropCnt(this.config.hpReward);
            for (let waveIdx = 0, waveNum = this.monsterBornInfoArr.length; waveIdx < waveNum; waveIdx++) {
                let infoArr = this.monsterBornInfoArr[waveIdx];
                for (let m of infoArr) {
                    if (dropCnt > 0) {
                        let cnt = MathUtils.randomN(dropCnt);
                        dropCnt -= cnt;
                        m.XPCnt = cnt;
                    }
                    else {
                        break;
                    }
                }
            }
            if (this.splitedMonsterDropInfoArr.length == 0) {
                if (dropCnt > 0) {
                    let lastWave = this.monsterBornInfoArr[this.monsterBornInfoArr.length - 1];
                    let lastMonster = lastWave[lastWave.length - 1];
                    lastMonster.XPCnt += dropCnt;
                }
                return;
            }
            for (let i = 0, len = this.splitedMonsterDropInfoArr.length; i < len; i++) {
                if (dropCnt > 0) {
                    let cnt = MathUtils.randomN(dropCnt);
                    dropCnt -= cnt;
                    this.splitedMonsterDropInfoArr[i].XPCnt = cnt;
                }
                else {
                    break;
                }
            }
            if (dropCnt > 0) {
                this.splitedMonsterDropInfoArr[this.splitedMonsterDropInfoArr.length - 1].XPCnt += dropCnt;
            }
        }
        ctorDropItems() {
            let itemList;
            let chanceList;
            let dropCnt;
            for (let i = 1; i <= 3; i++) {
                itemList = this.config["itemList_" + i];
                chanceList = this.config["itemReward_" + i];
                if (null == itemList || 0 == itemList.length || null == chanceList || 0 == chanceList.length) {
                    break;
                }
                dropCnt = this.randomDropCnt(chanceList);
                let selectedIdx;
                let poolSize = itemList.length;
                if (dropCnt > 0) {
                    for (let j = 0; j < dropCnt; j++) {
                        selectedIdx = MathUtils.randomN(0, poolSize - 1);
                        this.dropItemArr.push(itemList[selectedIdx]);
                    }
                }
            }
        }
        addMonsterDropItemInfo() {
            this.ctorDropItems();
            if (0 == this.dropItemArr.length) {
                return;
            }
            let totalMonsterNum = this.getMonsterNum();
            let distItemIdx = 0;
            let distributeItem2Monster = (m) => {
                if (!m.items) {
                    m.items = [];
                }
                m.items.push(this.dropItemArr[distItemIdx]);
                distItemIdx++;
            };
            for (let waveIdx = 0, waveNum = this.monsterBornInfoArr.length; waveIdx < waveNum; waveIdx++) {
                let infoArr = this.monsterBornInfoArr[waveIdx];
                for (let m of infoArr) {
                    if (1 == MathUtils.randomN(1, totalMonsterNum)) {
                        distributeItem2Monster(m);
                        if (distItemIdx >= this.dropItemArr.length) {
                            break;
                        }
                    }
                }
                if (distItemIdx >= this.dropItemArr.length) {
                    break;
                }
            }
            if (distItemIdx < this.dropItemArr.length) {
                if (this.splitedMonsterDropInfoArr.length == 0) {
                    let lastWave = this.monsterBornInfoArr[this.monsterBornInfoArr.length - 1];
                    let lastMonster = lastWave[lastWave.length - 1];
                    while (distItemIdx < this.dropItemArr.length) {
                        distributeItem2Monster(lastMonster);
                    }
                }
                else {
                    for (let i = 0, len = this.splitedMonsterDropInfoArr.length; i < len; i++) {
                        if (1 == MathUtils.randomN(1, totalMonsterNum)) {
                            distributeItem2Monster(this.splitedMonsterDropInfoArr[i]);
                            if (distItemIdx >= this.dropItemArr.length) {
                                break;
                            }
                        }
                    }
                    if (distItemIdx < this.dropItemArr.length) {
                        let lastMonster = this.splitedMonsterDropInfoArr[this.splitedMonsterDropInfoArr.length - 1];
                        while (distItemIdx < this.dropItemArr.length) {
                            distributeItem2Monster(lastMonster);
                        }
                    }
                }
            }
        }
        addMonsterDropInfo() {
            if (this.monsterBornInfoArr.length == 0) {
                return;
            }
            this.addMonsterDropGoldInfo();
            this.addMonsterDropXPInfo();
            this.addMonsterDropItemInfo();
        }
        recursiveFindSpiltMonster(srcMonsterId) {
            let config = cfg.actor[srcMonsterId];
            if (!config.dieSkills) {
                return;
            }
            let dieSplitMonsterIdArr = [];
            for (let skillId of config.dieSkills) {
                let skillCfg = cfg.skillCfg[skillId];
                if (skillCfg.type == eSkillType.Split) {
                    dieSplitMonsterIdArr.push(skillCfg.divisionActorId);
                    for (let i = 0; i < 2; i++) {
                        this.splitedMonsterDropInfoArr.push({
                            monsterId: skillCfg.divisionActorId,
                            pos: gZero,
                        });
                    }
                }
            }
            if (dieSplitMonsterIdArr.length == 0) {
                return;
            }
            for (let id of dieSplitMonsterIdArr) {
                this.recursiveFindSpiltMonster(id);
                this.recursiveFindSpiltMonster(id);
            }
        }
        refreshStageTitle() {
            let func_setDigit = (sp, num) => {
                if (UserData.isNewPlayer() && mm.fight.stageIdx == 2) {
                    sp.active = false;
                }
                else {
                    sp.active = true;
                }
                let texUrl = CommonRes.texture("common_txt_" + num);
                Resource.load(texUrl, Laya.Handler.create(this, (tex) => {
                    sp.meshRenderer.material.albedoTexture = tex;
                }));
            };
            this.titleBg.active = true;
            let displayStageNum = this.stageIdx - 1;
            let nextStageCfgIdx = mm.fight.getCurChapCfg().stage[this.stageIdx];
            let nextStageCfg = null;
            if (nextStageCfgIdx) {
                nextStageCfg = cfg.stageCfg[nextStageCfgIdx];
            }
            if (nextStageCfg && nextStageCfg.type) {
                this.oneDigit.active = false;
                this.twoDigitNode.active = false;
                this.bossIcon.active = true;
            }
            else {
                this.bossIcon.active = false;
                if (this.stageIdx == 1) {
                    this.titleBg.active = false;
                    this.oneDigit.active = false;
                    this.twoDigitNode.active = false;
                }
                else if (displayStageNum < 10) {
                    this.oneDigit.active = true;
                    this.twoDigitNode.active = false;
                    func_setDigit(this.oneDigit, displayStageNum);
                }
                else {
                    this.oneDigit.active = false;
                    this.twoDigitNode.active = true;
                    let tensPlaceNum = Math.floor(displayStageNum / 10);
                    func_setDigit(this.tensPlace, tensPlaceNum);
                    let onesPlaceNum = displayStageNum % 10;
                    func_setDigit(this.onesPlace, onesPlaceNum);
                }
            }
        }
        ctorMonsterBornInfoInOneMap(mapCfg) {
            const rowNum = mapCfg.length / this.mapWidth;
            let infoArr = [];
            let colIdx;
            let tag;
            let gridIdx = 0;
            let halfMapW = this.mapWidth / 2;
            let halfMapH = rowNum / 2;
            for (let rowIdx = 0; rowIdx < rowNum; rowIdx++) {
                for (colIdx = 0; colIdx < this.mapWidth; colIdx++) {
                    tag = mapCfg[gridIdx];
                    if (tag > cfg.global.monsterKey && TAG_FOR_FLOOR != tag && tag != cfg.global.eventKey) {
                        let info = {
                            monsterId: tag,
                            pos: new Laya.Vector3(halfMapW - colIdx - 0.5, 0, halfMapH - rowIdx - 0.5),
                            goldCnt: 0,
                            XPCnt: 0,
                        };
                        infoArr.push(info);
                        this.recursiveFindSpiltMonster(tag);
                    }
                    gridIdx++;
                }
            }
            return infoArr;
        }
        ctorMonsterBornInfoArr(mapList) {
            for (let mapIdx = 0, mapNum = mapList.length; mapIdx < mapNum; mapIdx++) {
                let oneMapInfoArr = this.ctorMonsterBornInfoInOneMap(mapList[mapIdx]);
                if (oneMapInfoArr.length > 0) {
                    this.monsterBornInfoArr.push(oneMapInfoArr);
                }
            }
        }
        ctorStageMap() {
            this.gridMap = [];
            this.monsterBornInfoArr = [];
            this.splitedMonsterDropInfoArr = [];
            this.dropItemArr = [];
            let mapCfg;
            let mapCfgTbl = cfg["map" + this.chapIdx + "Cfg"];
            let mapPool = this.getMapPool();
            let mapGroup = mapPool[this.mapGroupIdx];
            if (isNumber(mapGroup)) {
                mapGroup = [mapGroup];
            }
            mapCfg = mapCfgTbl[mapGroup[0]];
            const rowCnt = mapCfg.length / this.mapWidth;
            this.minPosZ = -rowCnt / 2;
            this.maxPosZ = rowCnt / 2;
            this.setActorBornPos(rowCnt);
            let contentLayer = new Laya.Sprite3D();
            contentLayer.name = CONTENT_LAYER_NAME;
            this.scene.addChild(contentLayer);
            let objLayers = {};
            let _func_getObjLayer = (tag) => {
                if (!objLayers[tag]) {
                    let layer = new Laya.Sprite3D();
                    contentLayer.addChild(layer);
                    objLayers[tag] = layer;
                }
                return objLayers[tag];
            };
            let rowIdx, colIdx, gridType;
            let posZ = rowCnt / 2 - 1;
            let posX;
            let gridIdx = 0;
            for (rowIdx = 0; rowIdx < rowCnt; rowIdx++) {
                posX = this.mapWidth / 2;
                for (colIdx = 0; colIdx < this.mapWidth; colIdx++) {
                    let tag = mapCfg[gridIdx];
                    if (tag < cfg.global.monsterKey && tag != cfg.global.eventKey) {
                        gridType = cfg.sceneAssetCfg[tag.toString()].type || eSceneGridType.Walkable;
                    }
                    else {
                        gridType = eSceneGridType.Walkable;
                    }
                    this.gridMap.push(gridType);
                    if (TAG_FOR_FLOOR != tag) {
                        if (tag == cfg.global.eventKey) {
                            this.eventMonsterBornPos = new Laya.Vector3(posX - 0.5, 0, posZ + 0.5);
                        }
                        else if (tag < cfg.global.monsterKey) {
                            let sp = this.createEle(tag);
                            gVec3.x = posX;
                            gVec3.y = 0;
                            gVec3.z = posZ;
                            sp.transform.position = gVec3;
                            _func_getObjLayer(tag).addChild(sp);
                        }
                    }
                    posX -= 1;
                    gridIdx++;
                }
                posZ -= 1;
            }
            let itemsNode = this.scene.getChildByName("mapItems_02");
            itemsNode.transform.position = new Laya.Vector3(0, 0, rowCnt / 2);
            this.refreshBotBorderPos(rowCnt);
            this.showDoorEffect(false);
            let mapList = [];
            for (let i = 0, len = mapGroup.length; i < len; i++) {
                mapList.push(mapCfgTbl[mapGroup[i]]);
            }
            this.ctorMonsterBornInfoArr(mapList);
            this.addMonsterDropInfo();
            this.refreshStageTitle();
        }
        cleanUpContent() {
            let layer = this.scene.getChildByName(CONTENT_LAYER_NAME);
            if (layer) {
                for (var i = 0; i < layer.numChildren; i++) {
                    var subLayer = layer.getChildAt(i);
                    for (let i = subLayer.numChildren - 1; i > -1; i--) {
                        Pool.despawn(subLayer.getChildAt[i]);
                    }
                }
                layer.destroy();
            }
            this.gridMap = null;
        }
        showDoorEffect(bShow) {
            let itemsNode = this.scene.getChildByName("mapItems_02");
            let doorEffect1 = itemsNode.getChildByName("zhishi_qianjin");
            let doorEffect2 = itemsNode.getChildByName("effect_door_light");
            let door = itemsNode.getChildByName("1_doorClose");
            if (doorEffect1) {
                if (mm.fight.stageIdx > 1) {
                    doorEffect1.active = false;
                }
                else {
                    doorEffect1.active = bShow;
                }
            }
            if (doorEffect2) {
                doorEffect2.active = bShow;
            }
            if (door) {
                door.active = !bShow;
            }
        }
        setNewPlayerHalo(state, index) {
            let itemsNode = this.scene.getChildByName("mapItems_02");
            let halo = itemsNode.getChildByName(`guangquan${index}`);
            halo.active = state;
            if (state == true)
                return halo;
            else
                return null;
        }
        setNewPlayerText(state, index) {
            let itemsNode = this.scene.getChildByName("mapItems_02");
            let txt = itemsNode.getChildByName(`txt${index}`);
            txt.active = state;
            if (state == true)
                return txt;
            else
                return null;
        }
    }

    class SceneItem extends BaseSprite3D {
        constructor(type, extInfo) {
            super();
            this.animators = {};
            this.childs = {};
            this.type = type;
            this.extInfo = extInfo;
            this.alive = true;
        }
        onAwake() {
            return __awaiter(this, void 0, void 0, function* () {
                yield this.initShow();
            });
        }
        changeItemTexture(itemID) {
            return __awaiter(this, void 0, void 0, function* () {
                let itemCfg = cfg.item[itemID];
                if (itemCfg.type != eItemType.Equip) {
                    return;
                }
                let sp = this._spriteNode.getChildAt(0).getChildAt(0).getChildByName("wuqi_icon");
                let material = sp.meshRenderer.material;
                let tex = yield Resource.load(mm.bag.itemIconRes(itemCfg.icon), null, null, Laya.Loader.TEXTURE2D);
                material.albedoTexture = tex;
            });
        }
        initShow() {
            return __awaiter(this, void 0, void 0, function* () {
                let resUrl;
                if (this.type != eSceneItemType.ITEM) {
                    resUrl = SceneItemFactory.inst.getSceneItemResUrl(this.type);
                }
                else {
                    resUrl = SceneItemFactory.inst.getEquipResUrl(this.extInfo["itemID"]);
                }
                if (!resUrl) {
                    return;
                }
                let sp = yield Pool.spawn(resUrl, this);
                this._spriteNode = sp;
                if (this.type == eSceneItemType.GOLD) {
                    this.childs["money"] = sp.getChildAt(0).getChildAt(0).getChildByName("money_02");
                    this.animators["money"] = this.childs["money"].getComponent(Laya.Animator);
                    this.childs["yinying"] = sp.getChildAt(0).getChildAt(0).getChildByName("yinying_01");
                    this.animators["yinying"] = this.childs["yinying"].getComponent(Laya.Animator);
                    this.childs["jinbi_tuowei"] = sp.getChildAt(0).getChildAt(0).getChildByName("jinbi_tuowei_001");
                    this.animators["jinbi_tuowei"] = this.childs["jinbi_tuowei"].getComponent(Laya.Animator);
                    Timer.once(1000, this, () => {
                        if (this.animators["money"]) {
                            this.animators["money"].play("money_02");
                        }
                    });
                }
                if (this.type == eSceneItemType.XP) {
                    this.childs["blood"] = sp.getChildAt(0).getChildAt(0).getChildByName("blood_01");
                    this.animators["blood"] = this.childs["blood"].getComponent(Laya.Animator);
                    this.childs["yinying"] = sp.getChildAt(0).getChildAt(0).getChildByName("yinying_02");
                    this.animators["yinying"] = this.childs["yinying"].getComponent(Laya.Animator);
                }
                else if (eSceneItemType.ITEM == this.type) {
                    let itemID = this.extInfo["itemID"];
                    let itemNum = this.extInfo["num"];
                    let title = new ItemLabel(itemID, itemNum);
                    this._title = title;
                    yield this._title.initShow();
                    yield this.changeItemTexture(itemID);
                    if (this && this.alive) {
                        Timer.frameLoop(1, this, this.updateItemTitlePos);
                    }
                    else {
                        title.hide();
                    }
                }
            });
        }
        reset() {
            this.bAvailable = true;
            this.alive = true;
            this.active = true;
            this.bFreeze = false;
        }
        bePickUp(char, displayFiniCB, logicFiniCB) {
            this.bAvailable = false;
            if (this.type == eSceneItemType.GOLD) {
                if (this._spriteNode) {
                    this.childs["jinbi_tuowei"].active = true;
                }
            }
            let displayFiniCB2 = () => {
                if (displayFiniCB) {
                    displayFiniCB(duration);
                    displayFiniCB = null;
                }
                this.despawnSelf();
            };
            let dis = Laya.Vector3.distance(char.position, this.position);
            let duration = dis / cfg.global.sceneItemSpeed;
            this.moveToTarget(char, duration, null, Laya.Handler.create(this, displayFiniCB2));
            if (logicFiniCB) {
                this._bePickUpLogicCB = () => {
                    logicFiniCB(duration);
                    this._bePickUpLogicCB = null;
                };
                Timer.manualOnce(duration, null, () => {
                    if (this._bePickUpLogicCB) {
                        this._bePickUpLogicCB();
                    }
                });
            }
            let checkerCnt = Math.floor(duration / 10);
            let disToTargetChecker = () => {
                if (Laya.Vector3.distanceSquared(this.position, char.position) <= 0.25) {
                    displayFiniCB2();
                    if (this._bePickUpLogicCB) {
                        this._bePickUpLogicCB();
                        Timer.manualClear(this, disToTargetChecker);
                    }
                }
                checkerCnt--;
                if (checkerCnt <= 0) {
                    Timer.manualClear(this, disToTargetChecker);
                }
            };
            Timer.manualLoop(10, this, disToTargetChecker);
        }
        updateItemTitlePos() {
            this._title.updatePosition(this.position);
        }
        moveToTarget(tf, translateDuration, rotateDuration = 300, complete) {
            super.moveToTarget(tf, translateDuration, rotateDuration, complete);
            gVec3.x = tf.position.x;
            gVec3.y = this.position.y;
            gVec3.z = tf.position.z;
            this.lookAt(gVec3);
        }
        despawnSelf() {
            this.active = false;
            this.alive = false;
            if (this.type == eSceneItemType.GOLD) {
                if (this._spriteNode) {
                    this.childs["jinbi_tuowei"].active = false;
                }
            }
            else if (eSceneItemType.ITEM == this.type) {
                Timer.clear(this, this.updateItemTitlePos);
                if (this._title) {
                    this._title.hide();
                    this._title = null;
                }
            }
        }
        destorySelf() {
            this.advanceExcPickUpLogicCB();
            this.despawnSelf();
            Timer.manualClearAll(this);
            Pool.despawn(this._spriteNode);
            this.destroy();
        }
        advanceExcPickUpLogicCB() {
            if (this._bePickUpLogicCB) {
                this._bePickUpLogicCB();
            }
        }
    }

    class SceneItemFactory {
        constructor() {
        }
        static get inst() {
            if (!SceneItemFactory._inst) {
                SceneItemFactory._inst = new SceneItemFactory();
            }
            return SceneItemFactory._inst;
        }
        getSceneItemResUrl(type) {
            let resName = null;
            switch (type) {
                case eSceneItemType.GOLD:
                    resName = "effect_jinbi_diaoluo";
                    break;
                case eSceneItemType.XP:
                    resName = "effect_blood_diaoluo";
                    break;
            }
            return CommonRes.obj3D(resName);
        }
        getEquipResUrl(itemID) {
            let resName = cfg.item[itemID].model;
            return CommonRes.obj3D(resName);
        }
        createItem(type, extInfo) {
            return new SceneItem(type, extInfo);
        }
    }

    class FightSpecialRewardPVE extends BaseViewLY {
        constructor() {
            super(...arguments);
            this.buffBorderArr = new Array();
            this.buffIds = new Array(9);
            this.curBuffId = 0;
            this.rollTigerVDirArr = [1, 0, -1];
            this.isRenewRoll = false;
            this.itemIndex = 0;
            this.aniOffsetX = 150;
        }
        onAwake() {
            this.x = Laya.stage.displayWidth;
            this.aniTime = (Laya.stage.displayWidth + this.aniOffsetX) / (Laya.stage.displayWidth / cfg.global.tigerAniTime);
            this.items = [this.item1, this.item2, this.item3, this.item4, this.item5, this.item6, this.item7, this.item8];
            this.startBtn.on(Laya.Event.CLICK, this, this.startBtnClick);
            this.returnBtn.on(Laya.Event.CLICK, this, this.returnBtnClick);
            for (let i = 0; i < this.items.length; i++) {
                this.buffBorderArr[i] = this.items[i].getChildByName("buffBorder");
            }
        }
        static setTigerPriorityIds(arr) {
            this.tigerPriorityIds = arr;
        }
        onEnable() {
            this.playAni();
            this.isRenewRoll = false;
            mm.fight.setJoyStickStatePVE(false);
            mm.fight.scene.gamePause();
            this.setBtnsState(true);
            this.initTiger(false);
            Platform.inst.showBanner(BannerID.fight);
        }
        playAni() {
            return __awaiter(this, void 0, void 0, function* () {
                yield Tween.to(this, { x: 0 - this.aniOffsetX }, this.aniTime);
                yield Tween.to(this, { x: 0 }, this.aniTime - cfg.global.tigerAniTime);
            });
        }
        onDisable() {
            super.onDisable();
            this.x = Laya.stage.displayWidth;
            mm.fight.setJoyStickStatePVE(true);
            mm.fight.scene.gameResume();
            gEvent.event(FightEvent.takeBonusFini);
            Platform.inst.hideBanner();
        }
        initTiger(isRoll) {
            this.itemIndex = 0;
            if (this.isRenewRoll) {
                for (let border of this.buffBorderArr) {
                    border.visible = false;
                }
            }
            else {
                let idArr = [];
                for (let priorityId of FightSpecialRewardPVE.tigerPriorityIds) {
                    for (let v of cfg.buff[priorityId].value[mm.fight.chapIdx - 1]) {
                        idArr.push({ ["data"]: [priorityId, v] });
                    }
                }
                for (let l = idArr.length; l < this.items.length; l++) {
                    let id = BuffManager.randomGetBuffId(BuffScene.tigerScene);
                    idArr.push({ ["data"]: [id, cfg.buff[id].name] });
                }
                Utils.disturbArr(idArr);
                for (let i = 0; i < this.items.length; i++) {
                    let id = idArr[this.itemIndex].data[0];
                    let nameStr = idArr[this.itemIndex].data[1];
                    let icon = this.items[i].getChildByName("icon");
                    let itemIcon = this.items[i].getChildByName("itemIcon");
                    let iconDecoration = this.items[i].getChildByName("iconDecoration");
                    iconDecoration.visible = false;
                    icon.visible = false;
                    itemIcon.visible = false;
                    let name = this.items[i].getChildByName("name");
                    if (id < 2000) {
                        icon.visible = true;
                        icon.skin = `${remoteUrl}/${cfg.global.resVer}/game/icon/${cfg.buff[id].icon}.png`;
                        iconDecoration.visible = true;
                        name.text = "";
                    }
                    else {
                        itemIcon.visible = true;
                        itemIcon.skin = `${remoteUrl}/${cfg.global.resVer}/game/icon/${cfg.buff[id].icon}.png`;
                        name.text = nameStr + "";
                    }
                    this.buffIds[i] = id;
                    ++this.itemIndex;
                }
            }
            if (isRoll) {
                this.rollTiger(this.items, 0.06, 0.03, 2.5, 0.5);
            }
        }
        rollTiger(list, slowOnceGoTime, fastOnceGoTime, rollTimeCount, maxRollTimeCountOffset) {
            Timer.clearAll(list);
            let itemIndexMap = 0;
            let onceTimer = 0;
            let globalTimer = 0;
            let cellIndex = 0;
            let rollTime = rollTimeCount - (maxRollTimeCountOffset - Math.random() * maxRollTimeCountOffset);
            let curGoTime = slowOnceGoTime;
            let rollTimeStep = rollTime / 3;
            let timeStep = [0, rollTimeStep, rollTimeStep * 2, rollTimeStep * 3];
            let timeStepIndex = 0;
            let v = (slowOnceGoTime - fastOnceGoTime) / rollTimeStep;
            let vDir = 0;
            Timer.frameLoop(1, list, () => {
                globalTimer += Timer.deltaS;
                onceTimer += Timer.deltaS;
                if (timeStepIndex < timeStep.length - 1 && globalTimer > timeStep[timeStepIndex] && globalTimer <= timeStep[timeStepIndex + 1]) {
                    vDir = this.rollTigerVDirArr[timeStepIndex];
                    timeStepIndex++;
                }
                curGoTime -= v * Timer.deltaS * vDir;
                if (onceTimer >= curGoTime) {
                    cellIndex = itemIndexMap;
                    this.buffBorderArr[cellIndex].visible = false;
                    itemIndexMap++;
                    if (itemIndexMap == this.items.length)
                        itemIndexMap = 0;
                    cellIndex = itemIndexMap;
                    this.buffBorderArr[cellIndex].visible = true;
                    onceTimer = 0;
                    if (globalTimer < rollTime) {
                        AudioManager.playSoundRandom(cfg.global.tigerSound[0], undefined, true);
                    }
                }
                if (globalTimer >= rollTime) {
                    this.curBuffId = this.buffIds[cellIndex];
                    this.priorityValue = Number(this.items[cellIndex].getChildByName("name").text);
                    if (!this.priorityValue) {
                        this.priorityValue = 0;
                    }
                    if (this.isRenewRoll) {
                        this.getRenewReward();
                        Timer.once(cfg.global.tigerRenewCloseTime * 1000, this, () => {
                            this.close();
                        });
                    }
                    else {
                        this.setBtnsState(true);
                    }
                    AudioManager.playSoundRandom(cfg.global.tigerSound[1], undefined, true);
                    Timer.clearAll(list);
                }
            });
        }
        setBtnsState(state) {
            this.startBtn.mouseEnabled = state;
            this.returnBtn.mouseEnabled = state;
        }
        startBtnClick() {
            Platform.inst.showVideoOrShare(VideoID.tiger, ShareKeys.buff).then(() => {
                this.renewRoll(true);
            }).catch(() => {
                this.renewRoll(false);
                ViewFlyword.showTip("需完整观看才能获取奖励哦");
            });
        }
        renewRoll(state) {
            if (state) {
                this.setBtnsState(false);
                this.isRenewRoll = true;
                this.initTiger(true);
            }
        }
        getRenewReward() {
            MainRole.inst.addBuff(this.curBuffId);
            let buff = cfg.buff[this.curBuffId];
            mm.fight.fightView.showTip(buff.name, buff.des, cfg.global.buffTipDuration);
            console.log("[Special Reward Buff Scene] get Buff:", this.curBuffId);
            mm.fight.scene.onTakeStageBonus();
        }
        getPriorityValue() {
            return this.priorityValue;
        }
        returnBtnClick() {
            this.close();
        }
    }

    class FightTigerView extends BaseViewLY {
        constructor() {
            super(...arguments);
            this.buffBorderArr = new Array();
            this.buffIds = new Array(9);
            this.curBuffId = 0;
            this.rollTigerVDirArr = [1, 0, -1];
            this.isRenewRoll = false;
            this.itemIndex = 0;
        }
        onAwake() {
            this.items = [this.item1, this.item2, this.item3, this.item4, this.item5, this.item6, this.item7, this.item8];
            this.getBtn.on(Laya.Event.CLICK, this, this.getBtnClick);
            this.renewBtn.on(Laya.Event.CLICK, this, this.renewBtnClick);
            for (let i = 0; i < this.items.length; i++) {
                this.buffBorderArr[i] = this.items[i].getChildByName("buffBorder");
            }
        }
        static setTigerPriorityIds(arr) {
            this.tigerPriorityIds = arr;
        }
        onEnable() {
            this.isRenewRoll = false;
            mm.fight.setJoyStickStatePVE(false);
            mm.fight.scene.gamePause();
            this.setBtnsState(false);
            this.initTiger();
            Platform.inst.showBanner(BannerID.fight);
        }
        onDisable() {
            super.onDisable();
            let stageCfg = mm.fight.getCurStageCfg();
            if (!stageCfg.type) {
                mm.fight.setJoyStickStatePVE(true);
                mm.fight.scene.gameResume();
                gEvent.event(FightEvent.takeBonusFini);
            }
            Platform.inst.hideBanner();
        }
        initTiger() {
            this.itemIndex = 0;
            if (this.isRenewRoll) {
                for (let border of this.buffBorderArr) {
                    border.visible = false;
                }
            }
            else {
                let idArr = [];
                for (let priorityId of FightTigerView.tigerPriorityIds) {
                    for (let v of cfg.buff[priorityId].value[mm.fight.chapIdx - 1]) {
                        idArr.push({ ["data"]: [priorityId, v] });
                    }
                }
                for (let l = idArr.length; l < this.items.length; l++) {
                    let id = BuffManager.randomGetBuffId(BuffScene.tigerScene);
                    idArr.push({ ["data"]: [id, cfg.buff[id].name] });
                }
                Utils.disturbArr(idArr);
                for (let i = 0; i < this.items.length; i++) {
                    let id = idArr[this.itemIndex].data[0];
                    let nameStr = idArr[this.itemIndex].data[1];
                    let icon = this.items[i].getChildByName("icon");
                    let itemIcon = this.items[i].getChildByName("itemIcon");
                    let iconDecoration = this.items[i].getChildByName("iconDecoration");
                    iconDecoration.visible = false;
                    icon.visible = false;
                    itemIcon.visible = false;
                    let name = this.items[i].getChildByName("name");
                    if (id < 2000) {
                        icon.visible = true;
                        icon.skin = `${remoteUrl}/${cfg.global.resVer}/game/icon/${cfg.buff[id].icon}.png`;
                        iconDecoration.visible = true;
                        name.text = "";
                    }
                    else {
                        itemIcon.visible = true;
                        itemIcon.skin = `${remoteUrl}/${cfg.global.resVer}/game/icon/${cfg.buff[id].icon}.png`;
                        name.text = nameStr + "";
                    }
                    this.buffIds[i] = id;
                    ++this.itemIndex;
                }
            }
            this.buffBorderArr[0].visible = true;
            this.rollTiger(this.items, 0.06, 0.03, 2.5, 0.5);
        }
        rollTiger(list, slowOnceGoTime, fastOnceGoTime, rollTimeCount, maxRollTimeCountOffset) {
            Timer.clearAll(list);
            let itemIndexMap = 0;
            let onceTimer = 0;
            let globalTimer = 0;
            let cellIndex = 0;
            let rollTime = rollTimeCount - (maxRollTimeCountOffset - Math.random() * maxRollTimeCountOffset);
            let curGoTime = slowOnceGoTime;
            let rollTimeStep = rollTime / 3;
            let timeStep = [0, rollTimeStep, rollTimeStep * 2, rollTimeStep * 3];
            let timeStepIndex = 0;
            let v = (slowOnceGoTime - fastOnceGoTime) / rollTimeStep;
            let vDir = 0;
            Timer.frameLoop(1, list, () => {
                globalTimer += Timer.deltaS;
                onceTimer += Timer.deltaS;
                if (timeStepIndex < timeStep.length - 1 && globalTimer > timeStep[timeStepIndex] && globalTimer <= timeStep[timeStepIndex + 1]) {
                    vDir = this.rollTigerVDirArr[timeStepIndex];
                    timeStepIndex++;
                }
                curGoTime -= v * Timer.deltaS * vDir;
                if (onceTimer >= curGoTime) {
                    cellIndex = itemIndexMap;
                    this.buffBorderArr[cellIndex].visible = false;
                    itemIndexMap++;
                    if (itemIndexMap == this.items.length)
                        itemIndexMap = 0;
                    cellIndex = itemIndexMap;
                    this.buffBorderArr[cellIndex].visible = true;
                    onceTimer = 0;
                    if (globalTimer < rollTime) {
                        AudioManager.playSoundRandom(cfg.global.tigerSound[0], undefined, true);
                    }
                }
                if (globalTimer >= rollTime) {
                    this.curBuffId = this.buffIds[cellIndex];
                    this.priorityValue = Number(this.items[cellIndex].getChildByName("name").text);
                    if (!this.priorityValue) {
                        this.priorityValue = 0;
                    }
                    if (this.isRenewRoll) {
                        this.getRenewReward();
                        Timer.once(cfg.global.tigerRenewCloseTime * 1000, this, () => {
                            this.closeView();
                        });
                    }
                    else {
                        this.setBtnsState(true);
                    }
                    AudioManager.playSoundRandom(cfg.global.tigerSound[1], undefined, true);
                    Timer.clearAll(list);
                }
            });
        }
        closeView() {
            let stageCfg = mm.fight.getCurStageCfg();
            if (stageCfg.type) {
                FightSpecialRewardPVE.setTigerPriorityIds([2003, 2013]);
                mm.fight.showFightSpecialRewardViewPVE();
                this.playCloseAni();
            }
            else {
                this.close();
            }
        }
        playCloseAni() {
            return __awaiter(this, void 0, void 0, function* () {
                yield Tween.to(this, { x: -Laya.stage.displayWidth }, cfg.global.tigerAniTime);
                this.x = 0;
                this.close();
            });
        }
        setBtnsState(state) {
            this.getBtn.gray = !state;
            this.renewBtn.gray = !state;
            this.getBtn.mouseEnabled = state;
            this.renewBtn.mouseEnabled = state;
        }
        getBtnClick() {
            console.log("[Tiger Buff Scene] get Buff:", this.curBuffId);
            MainRole.inst.addBuff(this.curBuffId);
            let buff = cfg.buff[this.curBuffId];
            mm.fight.fightView.showTip(buff.name, buff.des, cfg.global.buffTipDuration);
            this.closeView();
            mm.fight.scene.onTakeStageBonus();
        }
        renewBtnClick() {
            Platform.inst.showVideoOrShare(VideoID.tiger, ShareKeys.buff).then(() => {
                this.renewRoll(true);
            }).catch(() => {
                this.renewRoll(false);
                ViewFlyword.showTip("需完整观看才能获取奖励哦");
            });
        }
        renewRoll(state) {
            if (state) {
                this.setBtnsState(false);
                this.isRenewRoll = true;
                this.initTiger();
            }
        }
        getRenewReward() {
            MainRole.inst.addBuff(this.curBuffId);
            let buff = cfg.buff[this.curBuffId];
            mm.fight.fightView.showTip(buff.name, buff.des, cfg.global.buffTipDuration);
            console.log("[Tiger Buff Scene] get Buff:", this.curBuffId);
            mm.fight.scene.onTakeStageBonus();
        }
        getPriorityValue() {
            return this.priorityValue;
        }
    }

    class Landmines extends BaseSprite3D {
        constructor(url, bombUrl, damage, owner, duration, bombRange) {
            super();
            this._owner = owner;
            this._damage = damage;
            this._bombUrl = bombUrl;
            this._duration = duration;
            this._bombRange = bombRange;
            Pool.spawn(CommonRes.obj3D(url), this).then(inst => {
                if (this.destroyed) {
                    Pool.despawn(inst);
                    return;
                }
                this._inst = inst;
            });
        }
        onAwake() {
            this._logicPos = GridMapUtil.inst.convertWorldPos2GridPos(this.position);
        }
        bomb() {
            Bomb.spawn(this._bombUrl, 1000, this.position, this.rotation, 1, this._bombRange, this._damage, undefined, this._owner);
            mm.fight.scene.destroyLandmines(this);
        }
        onUpdate(deltaMs) {
            this._duration -= deltaMs;
            if (this._duration <= 0) {
                this.bomb();
                return;
            }
            let character = mm.fight.scene.findCharacterByLogicPos(this._owner.characterType, this._logicPos, true, { exceptTeam: this._owner.team });
            if (character) {
                this.bomb();
                return;
            }
        }
        onDestroy() {
            if (this._inst) {
                Pool.despawn(this._inst);
            }
        }
    }

    class FightLevelUpView extends BaseViewLY {
        constructor() {
            super(...arguments);
            this.allListBuffId = [];
            this.allListBottom = [];
            this.listBtnTargetScale = 1.08;
            this.listBtnBaseScale = 1;
            this.listBtnScaleTime_ms = 400;
        }
        static isShowView() {
            return this.isShow;
        }
        static setCloseFunc(func) {
            this.closeFunc = func;
        }
        onAwake() {
            this.renewRandomBtn.on(Laya.Event.CLICK, this, this.renewRandomBtnClick);
            this.a1ListBtn.on(Laya.Event.CLICK, this, this.abilityListBtnClick, [0]);
            this.a2ListBtn.on(Laya.Event.CLICK, this, this.abilityListBtnClick, [1]);
            this.a3ListBtn.on(Laya.Event.CLICK, this, this.abilityListBtnClick, [2]);
            this.allListArr = [this.a1List, this.a2List, this.a3List];
            this.allListTextArr = [this.a1Text, this.a2Text, this.a3Text];
            this.allListBottom = [this.a1List.centerY, this.a2List.centerY, this.a3List.centerY];
            this.renewRandomBtn.visible = false;
            this.setHand(null, false);
        }
        onEnable() {
            FightLevelUpView.isShow = true;
            this.levelUpTip(MainRole.inst.attr.level - MainRole.inst.levelUpCount + 2);
            --MainRole.inst.levelUpCount;
            mm.fight.setJoyStickStatePVE(false);
            MainRole.inst.playAnim(AnimatorKey.idle);
            mm.fight.scene.gamePause();
            this.setTextsVisible(false);
            this.setBtnsState(false);
            if ((UserData.isPassedStage7() && UserData.isNewPlayer() == false) || MainRole.inst.attr.level > cfg.global.newPlayerLevelUpBuffIDs.length || (MainRole.inst.attr.level == 0 && MainRole.inst.attr.exp == 0)) {
                this.initList();
            }
            else {
                this.initNewPlayerList();
            }
            Platform.inst.showBanner(BannerID.fight);
        }
        onDisable() {
            super.onDisable();
            this.stopListAni();
            let conflictViewFunc;
            if (MainRole.inst && MainRole.inst.levelUpConflictViewCaches) {
                conflictViewFunc = MainRole.inst.levelUpConflictViewCaches.shift();
            }
            if (conflictViewFunc) {
                Timer.once(500, this, () => {
                    conflictViewFunc().then(res => {
                        res.disableCallback = FightLevelUpView.closeFunc;
                        FightLevelUpView.closeFunc = null;
                    }).catch(err => {
                        FightLevelUpView.closeFunc();
                        FightLevelUpView.closeFunc = null;
                    });
                });
            }
            else {
                mm.fight.setJoyStickStatePVE(true);
                mm.fight.scene.gameResume();
                if (FightLevelUpView.closeFunc) {
                    FightLevelUpView.closeFunc();
                    FightLevelUpView.closeFunc = null;
                }
            }
            Platform.inst.hideBanner();
            this.handClick.alpha = 0;
            FightLevelUpView.isShow = false;
        }
        levelUpTip(lv) {
            let bShowInitTitle;
            if (MainRole.inst.attr.level == 0 && MainRole.inst.attr.exp == 0) {
                bShowInitTitle = true;
            }
            else {
                bShowInitTitle = false;
                let img1 = this.upgradeTipText.getChildByName("img1");
                let lvLabel = this.upgradeTipText.getChildByName("lv");
                let img2 = this.upgradeTipText.getChildByName("img2");
                let max = this.upgradeTipText.getChildByName("max");
                let boxWidth = img1.width;
                if (lv >= cfg.global.levelExp.length + 1) {
                    max.visible = true;
                    lvLabel.visible = false;
                    max.x = boxWidth + 5;
                    boxWidth += max.width + 10;
                }
                else {
                    max.visible = false;
                    lvLabel.visible = true;
                    lvLabel.value = lv.toString();
                    lvLabel.x = boxWidth + 5;
                    let labelWidth = lvLabel.width;
                    if (0 == labelWidth) {
                        if (lv > 9) {
                            labelWidth = 96 * 2;
                        }
                        else {
                            labelWidth = 96;
                        }
                    }
                    boxWidth += labelWidth * lvLabel.scaleX + 10;
                }
                img2.x = boxWidth;
                boxWidth += img2.width;
                this.upgradeTipText.width = boxWidth;
            }
            this.initBuffTitle.visible = bShowInitTitle;
            this.upgradeTipText.visible = !bShowInitTitle;
        }
        initList() {
            this.renewRandomBtn.visible = true;
            let getBuffArr = BuffManager.randomGetLevelUpBuffIDs();
            for (let listIndex = 0; listIndex < this.allListArr.length; listIndex++) {
                let showBuffArr = BuffManager.getFalseBuffArr(BuffScene.levelUpScene);
                Utils.disturbArr(showBuffArr);
                for (let buffIndex = 0; buffIndex < showBuffArr.length; buffIndex++) {
                    if (buffIndex == 0) {
                        let id = getBuffArr.shift();
                        this.allListArr[listIndex].cells[buffIndex].getChildByName("abilityIcon").skin = `${remoteUrl}/${cfg.global.resVer}/game/icon/${cfg.buff[id].icon}.png`;
                        this.allListTextArr[listIndex].text = cfg.buff[id].name;
                        this.allListBuffId[listIndex] = id;
                    }
                    else {
                        this.allListArr[listIndex].cells[buffIndex].getChildByName("abilityIcon").skin = `${remoteUrl}/${cfg.global.resVer}/game/icon/${cfg.buff[showBuffArr[buffIndex].buffId].icon}.png`;
                    }
                }
            }
            this.allListRoll();
        }
        initNewPlayerList() {
            let getBuffArr = BuffManager.randomGetLevelUpBuffIDs();
            let lvIdx = MainRole.inst.attr.level - 1;
            if (UserData.isNewPlayer() == false) {
                getBuffArr[cfg.global.newPlayerLevelUpGridIdx[lvIdx]] = cfg.global.newPlayerLevelUpBuffIDs[lvIdx];
            }
            else {
                getBuffArr[cfg.global.newPlayerLevelUpGridIdx[lvIdx]] = cfg.global.zcNewPlayerLevelUpBuffIDs[lvIdx];
            }
            for (let listIndex = 0; listIndex < this.allListArr.length; listIndex++) {
                let showBuffArr = BuffManager.getFalseBuffArr(BuffScene.levelUpScene);
                Utils.disturbArr(showBuffArr);
                for (let buffIndex = 0; buffIndex < showBuffArr.length; buffIndex++) {
                    if (buffIndex == 0) {
                        let id = getBuffArr.shift();
                        this.allListArr[listIndex].cells[buffIndex].getChildByName("abilityIcon").skin = `${remoteUrl}/${cfg.global.resVer}/game/icon/${cfg.buff[id].icon}.png`;
                        this.allListTextArr[listIndex].text = cfg.buff[id].name;
                        this.allListBuffId[listIndex] = id;
                    }
                    else {
                        this.allListArr[listIndex].cells[buffIndex].getChildByName("abilityIcon").skin = `${remoteUrl}/${cfg.global.resVer}/game/icon/${cfg.buff[showBuffArr[buffIndex].buffId].icon}.png`;
                    }
                }
            }
            this.allListRoll(() => {
                this.setTextsVisible(true);
                if (cfg.global.newPlayerLevelUpGridIdx[lvIdx] == 0) {
                    this.a1ListBtn.mouseEnabled = true;
                    this.setHand(this.a1ListBtn);
                }
                if (cfg.global.newPlayerLevelUpGridIdx[lvIdx] == 1) {
                    this.a2ListBtn.mouseEnabled = true;
                    this.setHand(this.a2ListBtn);
                }
                if (cfg.global.newPlayerLevelUpGridIdx[lvIdx] == 2) {
                    this.a3ListBtn.mouseEnabled = true;
                    this.setHand(this.a3ListBtn);
                }
                this.renewRandomBtn.mouseEnabled = true;
            });
        }
        allListRoll(callback) {
            for (let i = 0; i < this.allListArr.length; i++) {
                this.allListArr[i].centerY = this.allListBottom[i];
                this.listRoll(this.allListArr[i], 2 * (i + 1), 0.28, () => {
                    if (callback) {
                        if (i == this.allListArr.length - 1) {
                            callback();
                            this.playListAni();
                        }
                    }
                    else {
                        this.setTextsVisible(true, i);
                        if (i == this.allListArr.length - 1) {
                            this.setBtnsState(true);
                            this.playListAni();
                        }
                    }
                });
            }
        }
        listRoll(list, rollCount, onceRollTime, callback) {
            Timer.clearAll(list);
            let rate = 1 / onceRollTime * Math.abs(list.height);
            let curRollCount = 0;
            let top = Math.abs(list.height) + list.centerY - list.cells[0].height;
            let bottom = list.centerY;
            let fuck = function () {
                if (list.centerY >= top) {
                    ++curRollCount;
                    if (curRollCount > rollCount) {
                        list.centerY = top;
                        callback();
                        Timer.clearAll(list);
                        return;
                    }
                    list.centerY = bottom;
                }
                list.centerY = list.centerY + rate * Timer.deltaS;
            };
            Timer.frameLoop(1, list, fuck);
        }
        setTextsVisible(state, index) {
            if (index != undefined) {
                this.allListTextArr[index].visible = state;
            }
            else {
                for (let text of this.allListTextArr) {
                    text.visible = state;
                }
            }
        }
        setBtnsState(state) {
            this.a1ListBtn.mouseEnabled = state;
            this.a2ListBtn.mouseEnabled = state;
            this.a3ListBtn.mouseEnabled = state;
            this.renewRandomBtn.mouseEnabled = state;
        }
        renewRandomBtnClick() {
            Platform.inst.showVideoOrShare(VideoID.levelUp, ShareKeys.buff).then(() => {
                this.renewRandomBtn.visible = false;
                this.reRollList(true);
            }).catch(() => {
                this.reRollList(false);
                ViewFlyword.showTip("需完整观看才能获取奖励哦");
            });
        }
        reRollList(state) {
            if (state) {
                this.stopListAni();
                this.setTextsVisible(false);
                this.setBtnsState(false);
                let getBuffArr = BuffManager.randomGetLevelUpBuffIDs();
                for (let listIndex = 0; listIndex < this.allListArr.length; listIndex++) {
                    let id = getBuffArr.shift();
                    this.allListArr[listIndex].cells[0].getChildByName("abilityIcon").skin = `${remoteUrl}/${cfg.global.resVer}/game/icon/${cfg.buff[id].icon}.png`;
                    this.allListTextArr[listIndex].text = cfg.buff[id].name;
                    this.allListBuffId[listIndex] = id;
                }
                this.allListRoll();
            }
        }
        abilityListBtnClick(index) {
            console.log("[Upgrade Buff Scene] get Buff:", this.allListBuffId[index]);
            MainRole.inst.addBuff(this.allListBuffId[index]);
            let buff = cfg.buff[this.allListBuffId[index]];
            mm.fight.fightView.showTip(buff.name, buff.des, cfg.global.buffTipDuration);
            if (!this.isContinue()) {
                ViewManagerLY.close(ViewID.fightLevelUp.name);
            }
            mm.fight.scene.onTakeLvUpBuff();
        }
        isContinue() {
            if (MainRole.inst.levelUpCount > 0) {
                this.levelUpTip(MainRole.inst.attr.level - MainRole.inst.levelUpCount + 2);
                --MainRole.inst.levelUpCount;
                this.reRollList(true);
                return true;
            }
            return false;
        }
        setHand(parent, state = true) {
            if (parent) {
                this.handClickBox.centerX = parent.centerX;
                this.handClickBox.centerY = parent.centerY;
            }
            if (state == true) {
                Timer.once(100, this, () => {
                    this.handClick.alpha = 1;
                });
            }
            this.handClickBox.visible = state;
            state && this.handClick.play();
        }
        playListAni() {
            let scaleRate = (this.listBtnTargetScale - this.listBtnBaseScale) / this.listBtnScaleTime_ms;
            let timerCycle = 0;
            let dir;
            if (scaleRate >= 0) {
                dir = 1;
            }
            else {
                dir = -1;
            }
            let syncListScale = this.listBtnBaseScale;
            Timer.frameLoop(1, this.a1ListBtn, () => {
                syncListScale += scaleRate * dir * Timer.deltaMs;
                if (dir > 0 && syncListScale > this.listBtnTargetScale) {
                    syncListScale = this.listBtnTargetScale;
                }
                if (dir < 0 && syncListScale < this.listBtnBaseScale) {
                    syncListScale = this.listBtnBaseScale;
                }
                this.a1ListBtn.scale(syncListScale, syncListScale);
                this.a2ListBtn.scale(syncListScale, syncListScale);
                this.a3ListBtn.scale(syncListScale, syncListScale);
                timerCycle += Timer.deltaMs;
                if (timerCycle >= this.listBtnScaleTime_ms) {
                    timerCycle = 0;
                    dir = -dir;
                }
            });
        }
        stopListAni() {
            Timer.clearAll(this.a1ListBtn);
            this.a1ListBtn.scale(1, 1);
            this.a2ListBtn.scale(1, 1);
            this.a3ListBtn.scale(1, 1);
        }
    }
    FightLevelUpView.isShow = false;

    class FightScene extends BaseScene {
        constructor(args) {
            super();
            this.isPlaying = false;
            this.monsterBulletSpeedScale = 1;
            Timer.manualSetTime(Timer.curMs);
            this._characters = {
                [CharacterType.role]: [],
                [CharacterType.monster]: [],
                [CharacterType.bonusMonster]: [],
                [CharacterType.pet]: [],
            };
            this._sceneItemMap = {
                [eSceneItemType.GOLD]: [],
                [eSceneItemType.XP]: [],
                [eSceneItemType.ITEM]: [],
            };
            this._landmines = [];
            this._bAlreadyEnter = true;
        }
        getMapGroupIdx() {
            return this._mapGentor.getMapGroupIdx();
        }
        getMapMaxPosZ() {
            return this._mapGentor.maxPosZ;
        }
        getMapMinPosZ() {
            return this._mapGentor.minPosZ;
        }
        getMapMaxPosX() {
            return this._mapGentor.maxPosX;
        }
        getMapMinPosX() {
            return this._mapGentor.minPosX;
        }
        getStageItemList() {
            return this._mapGentor.dropItemArr;
        }
        saveUnfiniTripRec() {
            if (this._bTakeStageBonus && this._bTakeLvUpBuff) {
                UserData.saveContinueData(true, MainRole.inst.position.x, MainRole.inst.position.z);
            }
        }
        onTakeStageBonus() {
            this._bTakeStageBonus = true;
            this.saveUnfiniTripRec();
        }
        onTakeLvUpBuff() {
            this._bTakeLvUpBuff = true;
            this.saveUnfiniTripRec();
        }
        onAwake() {
            super.onAwake();
            HUD.init();
            gEvent.on(FightEvent.contactWithBonusMonster, this, this.takeStageBonus);
        }
        findCharacters(characterType, src, maxRange = -1, count = 1, isSearchUnvisible = false, param = {}) {
            if (src.y != 0) {
                src.y = 0;
            }
            let ret = null;
            let squaredRange = maxRange * maxRange;
            let sortCharacters = [];
            let deltaX = 0;
            let deltaZ = 0;
            let disSquared = 0;
            let angle = 0;
            let range = 0;
            let rangeSquared = 0;
            let squaredSize = 0;
            let characters = this._characters[characterType];
            for (let character of characters) {
                if ((!isSearchUnvisible && !character.visible) ||
                    !character.alive ||
                    character.unsearchable ||
                    character.team == param.exceptTeam ||
                    (param.exceptCharacters && param.exceptCharacters.indexOf(character) != -1)) {
                    continue;
                }
                squaredSize = character.size * character.size;
                rangeSquared = squaredRange + squaredSize + 2 * character.size * maxRange;
                range = character.size + maxRange;
                let characterPos = character.position;
                if (maxRange != -1) {
                    deltaX = characterPos.x - src.x;
                    if (Math.abs(deltaX) > range) {
                        continue;
                    }
                    deltaZ = characterPos.z - src.z;
                    if (Math.abs(deltaZ) > range) {
                        continue;
                    }
                }
                disSquared = Laya.Vector3.distanceSquared(characterPos, src);
                if (maxRange != -1) {
                    if (disSquared > rangeSquared) {
                        continue;
                    }
                }
                if (param.srcDir && param.angle) {
                    Laya.Vector3.subtract(characterPos, src, gVec3);
                    Laya.Vector3.normalize(gVec3, gVec3);
                    angle = MathUtils.vecRad(param.srcDir, gVec3, false, false);
                    if (angle > param.angle) {
                        continue;
                    }
                }
                if (param.srcDir && param.lineHalfW) {
                    let v2charX = characterPos.x - src.x;
                    let v2charY = characterPos.z - src.z;
                    let dotProduct = v2charX * param.srcDir.x + v2charY * param.srcDir.z;
                    if (dotProduct < 0) {
                        continue;
                    }
                    let pointLineDis = MathUtils.pointLineDistance(src.x, src.z, characterPos.x, characterPos.z, param.srcDir.x, param.srcDir.z);
                    if (pointLineDis - param.lineHalfW >= character.size) {
                        continue;
                    }
                }
                character["_dis"] = disSquared;
                sortCharacters.push(character);
            }
            ;
            if (sortCharacters.length > 1) {
                sortCharacters.sort(this.sortCharacter);
            }
            if (count > 0 && count < sortCharacters.length) {
                sortCharacters.splice(count, sortCharacters.length - count);
            }
            return sortCharacters;
        }
        setMonsterBulletSpeedScale(num) {
            if (num < 0)
                num = 0;
            this.monsterBulletSpeedScale = num;
        }
        findCharacterByLogicPos(characterType, srcLogicPos, isSearchUnvisible = false, param = {}) {
            let characters = this._characters[characterType];
            for (let character of characters) {
                if ((!isSearchUnvisible && !character.visible) ||
                    !character.alive ||
                    character.unsearchable ||
                    character.team == param.exceptTeam ||
                    (param.exceptCharacters && param.exceptCharacters.indexOf(character) != -1)) {
                    continue;
                }
                let characterLogicPos = character.logicPos;
                if (characterLogicPos.x == srcLogicPos.x && characterLogicPos.y == srcLogicPos.y) {
                    return character;
                }
            }
            return null;
        }
        sortCharacter(a, b) {
            return a._dis - b._dis;
        }
        getGridTypeByWorld(position, outGridPos) {
            return GridMapUtil.inst.getGridTypeByWorldPos(position, outGridPos);
        }
        getSplitMonsterDrop() {
            if (this._mapGentor.splitedMonsterDropInfoArr.length > 0) {
                return this._mapGentor.splitedMonsterDropInfoArr.shift();
            }
            else {
                return {
                    monsterId: 0,
                    pos: gZero,
                    goldCnt: 0,
                    XPCnt: 0,
                };
            }
        }
        takeStageBonus() {
            if (!this._stageBonus) {
                return;
            }
            this.gamePause();
            switch (this._stageBonus) {
                case eStageBonusType.ModFab:
                    this.conflictViewShow(mm.fight.showFightRefitViewPVE.bind(mm.fight));
                    break;
                case eStageBonusType.EvilChip:
                    this.conflictViewShow(mm.fight.showFightEvilViewPVE.bind(mm.fight));
                    break;
                case eStageBonusType.Slot:
                    FightTigerView.setTigerPriorityIds([2001]);
                    this.conflictViewShow(mm.fight.showFightTigerViewPVE.bind(mm.fight));
                    break;
                case eStageBonusType.Slot_1:
                    FightTigerView.setTigerPriorityIds([2002]);
                    this.conflictViewShow(mm.fight.showFightTigerViewPVE.bind(mm.fight));
                    break;
            }
            this._stageBonus = null;
        }
        conflictViewShow(func) {
            if ((mm.fight && mm.fight.fightLevelUpView && !mm.fight.fightLevelUpView.destroyed && mm.fight.fightLevelUpView.visible) || MainRole.inst.levelUpCount > 0) {
                MainRole.inst.levelUpConflictViewCaches.push(func);
            }
            else {
                func();
            }
        }
        uploadPassStageStat() {
            let evtKey = "stage" + mm.fight.chapIdx;
            if (UserData.isFirstDay() && mm.fight.chapIdx <= 2) {
                let info = {
                    ["newWin"]: mm.fight.stageIdx.toString(),
                };
                StatManager.tmStat(evtKey, info);
            }
            let info = {
                ["win"]: mm.fight.stageIdx.toString(),
            };
            StatManager.tmStat(evtKey, info);
        }
        updateGameFrame(deltaMs) {
            if (!this.isPlaying) {
                return;
            }
            Projectile.onUpdate(deltaMs);
            for (let t in this._characters) {
                let characters = this._characters[t];
                for (let char of characters) {
                    char.onUpdate(deltaMs);
                }
            }
            for (let landmine of this._landmines) {
                landmine.onUpdate(deltaMs);
            }
            for (let type in this._sceneItemMap) {
                let arr = this._sceneItemMap[type];
                for (let item of arr) {
                    item.onUpdate(deltaMs);
                }
            }
            if (this._bDoorOpen) {
                if (GridMapUtil.inst.getGridTypeByWorldPos(this._mainRole.position) == eSceneGridType.Gate && !this._bAlreadyEnter) {
                    mm.fight.setJoyStickStatePVE(false);
                    MainRole.inst.stopMove();
                    if (this._stageBonus) {
                        this.takeStageBonus();
                    }
                    else {
                        this._bAlreadyEnter = true;
                        this.uploadPassStageStat();
                        if (this.ifPassChapter()) {
                            this.onPassChapter();
                            StatManager.dailyPassStage();
                        }
                        else {
                            if (mm.fight.chapIdx == 1 && mm.fight.stageIdx == 1) {
                                gEvent.event(FightEvent.hideDragJoyTip);
                            }
                            this.gamePause();
                            StatManager.dailyPassStage();
                            mm.fight.enterNextStage(true);
                        }
                    }
                }
            }
        }
        lazyInitMapGentor() {
            if (this._mapGentor) {
                return;
            }
            this._mapGentor = new StageSceneGeneraotr();
            this._mapGentor.setScene(this.scene3D);
        }
        enterChapeter(chap) {
            this.lazyInitMapGentor();
            this._mapGentor.setChap(chap);
        }
        initStageBonus() {
            this._stageBonus = null;
            let stageCfg = mm.fight.getCurStageCfg();
            let bonusExistChanceCfg = stageCfg.rate;
            if (!bonusExistChanceCfg) {
                return;
            }
            if (bonusExistChanceCfg < 1) {
                if (MathUtils.random() > bonusExistChanceCfg) {
                    return;
                }
            }
            let bonusTypePool = stageCfg.bonusType;
            let idx = MathUtils.randomN(bonusTypePool.length - 1);
            this._stageBonus = bonusTypePool[idx];
        }
        clear() {
            this._mapGentor.cleanUpContent();
            Projectile.clear();
            this.cleanUpMonsters();
            for (let landmine of this._landmines) {
                if (!landmine.destroyed) {
                    landmine.destroy();
                }
            }
            this._landmines = [];
            for (let item of this._sceneItemMap[eSceneItemType.ITEM]) {
                item.destorySelf();
            }
            this._sceneItemMap[eSceneItemType.ITEM] = [];
        }
        cleanUpMonsters() {
            for (let m of this._characters[CharacterType.monster]) {
                m.destorySelf();
            }
            this._characters[CharacterType.monster] = [];
            for (let m of this._characters[CharacterType.bonusMonster]) {
                m.destorySelf();
            }
            this._characters[CharacterType.bonusMonster] = [];
        }
        enterStage(stage, back2Map) {
            return __awaiter(this, void 0, void 0, function* () {
                AudioManager.playMusicRandom(mm.fight.getCurStageCfg().sound);
                this.gamePause();
                this.clear();
                this._mapGentor.setStage(stage, back2Map);
                this._mapGentor.ctorStageMap();
                let gridMapInst = GridMapUtil.inst;
                let gridMap = this._mapGentor.getGridMap();
                gridMapInst.setGridMap(gridMap);
                this.initPathFinding(gridMap, gridMapInst.mapWidth, gridMapInst.mapHeight);
                this.initStageBonus();
                this.waveIdx = 0;
                gVec3.x = 0;
                gVec3.y = 0;
                gVec3.z = 999;
                MainRole.inst.rotateTo(gVec3);
                Laya.timer.frameOnce(1, this, this.stageStart);
                if (!mm.fight.bPassedNoobStage7 && mm.fight.chapIdx == 1 && mm.fight.stageIdx == 1) {
                    Laya.timer.frameOnce(2, this, () => {
                        gEvent.event(FightEvent.showDragJoyTip);
                    });
                }
            });
        }
        ifMonsterClear() {
            const monsterArr = this._characters[CharacterType.monster];
            for (let monster of monsterArr) {
                if (monster.alive) {
                    return false;
                }
            }
            return true;
        }
        ifHaveNextWave() {
            return this.waveIdx < this._mapGentor.getMonsterBornInfos().length;
        }
        onClearMonster() {
            MainRole.inst.resetNotAtkTime();
        }
        openTheDoor() {
            if (this._bDoorOpen || this._isOpenDoor) {
                return;
            }
            this._isOpenDoor = true;
            let func = () => {
                this._bDoorOpen = true;
                this._bAlreadyEnter = false;
                GridMapUtil.inst.openTheDoor();
                this._mapGentor.showDoorEffect(true);
            };
            Timer.once(1500, this, () => {
                if (FightLevelUpView.isShowView()) {
                    FightLevelUpView.setCloseFunc(func);
                }
                else {
                    func();
                }
            });
        }
        ifPassChapter() {
            let chapCfg = mm.fight.getCurChapCfg();
            let maxStageIdx = chapCfg.stage.length;
            return mm.fight.stageIdx >= maxStageIdx;
        }
        onPassChapter() {
            console.log("pass Chapter!!!");
            mm.fight.onChapPassed();
        }
        checkHaveNextWave() {
            if (UserData.isNewPlayer()) {
                let info = FightScenePVE.newPlayerSeqInfo;
                if (info && info[mm.fight.stageIdx] && info[mm.fight.stageIdx][this.waveIdx] == false)
                    return true;
            }
            if (this.ifHaveNextWave()) {
                this.createMonsterNextWave();
                return true;
            }
            return false;
        }
        createMonsterNextWave(time = 2000) {
            Timer.manualClear(this, this.onNextWaveComes);
            Timer.manualOnce(time, this, this.createMonster);
        }
        checkCanOpenTheDoor() {
            if (this._bDoorOpen) {
                return;
            }
            if (!this._bAllMonsterClear && this.ifMonsterClear()) {
                if (this.checkHaveNextWave()) {
                    Timer.once(1000, null, () => {
                        MainRole.inst.pickUpGold();
                    });
                    return;
                }
                this._bAllMonsterClear = true;
                this.onClearMonster();
                if (!this._bTakeLvUpBuff) {
                    let stageExp = this._mapGentor.config.exp;
                    MainRole.inst.addExp(stageExp, new Laya.Handler(this, this.onAddExpFinish));
                }
                else {
                    this.openTheDoor();
                }
            }
        }
        isClearAllMonster() {
            if (this._bDoorOpen) {
                return true;
            }
            if (!this._bAllMonsterClear && this.ifMonsterClear()) {
                if (this.checkHaveNextWave()) {
                    return true;
                }
            }
            return false;
        }
        onAddExpFinish() {
            this.openTheDoor();
        }
        randomDropItemPos(centrePos, r) {
            let shiftX = 0;
            let shiftZ = 0;
            let gridType = null;
            let loopCnt = 30;
            let bFound = false;
            while (loopCnt > 0) {
                loopCnt--;
                shiftX = MathUtils.randomWithLimit(r);
                shiftZ = MathUtils.randomWithLimit(r);
                gVec3.x = centrePos.x + shiftX;
                gVec3.y = 0.1;
                gVec3.z = centrePos.z + shiftZ;
                if (gVec3.x < this.getMapMinPosX() || this.getMapMaxPosX() < gVec3.x || gVec3.z < this.getMapMinPosZ() || this.getMapMaxPosZ() < gVec3.z) {
                    continue;
                }
                gridType = GridMapUtil.inst.getGridTypeByWorldPos(gVec3);
                if (eSceneGridType.Block != gridType && eSceneGridType.Water != gridType) {
                    bFound = true;
                    break;
                }
            }
            return bFound ? gVec3.clone() : centrePos.clone();
        }
        spawnSceneItem(type) {
            for (let item of this._sceneItemMap[type]) {
                if (!item.alive) {
                    if (type == eSceneItemType.GOLD) {
                        Timer.once(1000, item, () => {
                            if (item.animators["money"]) {
                                item.animators["money"].play("money_02");
                            }
                        });
                    }
                    return item;
                }
            }
            let item = SceneItemFactory.inst.createItem(type);
            this._sceneItemMap[type].push(item);
            return item;
        }
        dropSceneItems(type, cnt, centrePos, r) {
            for (let i = 0; i < cnt; i++) {
                Timer.once(70 * i, this, () => {
                    let item = this.spawnSceneItem(type);
                    item.setPosition(this.randomDropItemPos(centrePos, r));
                    this.addChild(item);
                    item.reset();
                    if (type == eSceneItemType.XP) {
                        item.bFreeze = true;
                        Timer.manualOnce(cfg.global.XPFreezeTime, item, () => {
                            item.bFreeze = false;
                        });
                    }
                });
            }
        }
        dropEquip(itemID, num, centrePos, r) {
            let extInfo = {
                ["itemID"]: itemID,
                ["num"]: num,
            };
            let item = SceneItemFactory.inst.createItem(eSceneItemType.ITEM, extInfo);
            item.setPosition(this.randomDropItemPos(centrePos, r));
            this.addChild(item);
            item.reset();
            this._sceneItemMap[eSceneItemType.ITEM].push(item);
        }
        findSceneItem(type, centrePos, r) {
            let ret = [];
            let arr = this._sceneItemMap[type];
            let pow_r = r * r;
            for (let item of arr) {
                if (!item.alive || !item.bAvailable || !item.active || item.bFreeze) {
                    continue;
                }
                if (Math.abs(item.position.x - centrePos.x) > r) {
                    continue;
                }
                if (Math.abs(item.position.y - centrePos.y) > r) {
                    continue;
                }
                if (Laya.Vector3.distanceSquared(item.position, centrePos) > pow_r) {
                    continue;
                }
                ret.push(item);
            }
            return ret;
        }
        findSceneItemInMap(type) {
            let ret = [];
            let arr = this._sceneItemMap[type];
            for (let item of arr) {
                if (!item.alive || !item.bAvailable || !item.active || item.bFreeze) {
                    continue;
                }
                ret.push(item);
            }
            return ret;
        }
        gameStart() {
            return __awaiter(this, void 0, void 0, function* () {
                console.info("game start");
                this.isPlaying = true;
                gEvent.event(FightEvent.start);
            });
        }
        gamePause() {
            console.info("game pause");
            this.isPlaying = false;
            gEvent.event(FightEvent.pause);
        }
        gameResume() {
            console.info("game resume");
            if (ViewManagerLY.isShow(ViewID.fightPause.name)) {
                return;
            }
            this.isPlaying = true;
            gEvent.event(FightEvent.resume);
        }
        gameOver() {
            console.info("game over");
            gEvent.event(FightEvent.over);
        }
        refreshCamPosZRestriction() {
            let camRotX = Math.abs(this._cameraController.camera.transform.rotationEuler.x);
            let sita = camRotX / 180 * Math.PI;
            let size = this._cameraController.camera.orthographicVerticalSize;
            let l0 = size * Math.sin(sita) / 2;
            let l1 = l0 * Math.cos(sita);
            let l3 = this._cameraController.camera.transform.position.y - l1;
            let l4 = l3 / Math.tan(sita);
            let l2 = l0 * Math.sin(sita);
            let l5 = l4 - l2;
            let maxPosZ = this._mapGentor.maxPosZ - size - l5 + cfg.global.mapAdditiveZShift_top;
            let minPosZ = this._mapGentor.minPosZ - l5 - cfg.global.mapAdditiveZShift_bot;
            this._cameraController.setCamPosZBound(minPosZ, maxPosZ);
        }
        stageStart() {
            this._bAllMonsterClear = false;
            this._bDoorOpen = false;
            this._isOpenDoor = false;
            this._bTakeStageBonus = false;
            this._bTakeLvUpBuff = false;
            if (UserData.unfiniRec && UserData.unfiniRec.bStageFini) {
                this._bTakeLvUpBuff = true;
                this._bTakeStageBonus = true;
                this._stageBonus = null;
                this.waveIdx = 999;
            }
            this.refreshCamPosZRestriction();
            this.checkCanOpenTheDoor();
            if (mm.fight.bNewTrip) {
                let tLoading = Math.ceil((Timer.curMs - StatManager.tGameLoadingStart) / 1000);
                if (tLoading > 10) {
                    tLoading = 10;
                }
                let evtKey = "stageloading";
                let info = {
                    ["loadingTime"]: tLoading.toString(),
                    ["isSuccess"]: "1",
                };
                StatManager.tmStat(evtKey, info);
            }
            mm.fight.bNewTrip = false;
        }
        onNextWaveComes() {
            this.createMonster();
        }
        createMonster() {
            this.waveIdx++;
            if (this.ifHaveNextWave()) {
                let nextWaveTime = mm.fight.getCurStageCfg().tWaveInterval;
                if (UserData.isNewPlayer() == false) {
                    Timer.manualOnce(nextWaveTime, this, this.onNextWaveComes);
                }
            }
        }
        ;
        get cameraController() {
            return this._cameraController;
        }
        getNearestPoint(dstPos, srcPos, spr, outPos) {
            let logicPos = GridMapUtil.inst.convertWorldPos2LogicPos(dstPos);
            let gridType = GridMapUtil.inst.getGridTypeByLogicPos(logicPos);
            if (spr.ifGridWalkable(gridType)) {
                outPos = dstPos;
                return false;
            }
            let gridWorldPos = GridMapUtil.inst.convertLogicPos2WorldPos(logicPos);
            Laya.Vector3.subtract(gridWorldPos, srcPos, gVec3);
            let fixedPos = dstPos.clone();
            if (Math.abs(gVec3.x) > Math.abs(gVec3.z)) {
                Laya.Vector3.subtract(dstPos, gridWorldPos, gVec3);
                fixedPos.x = gridWorldPos.x + (gVec3.x > 0 ? 0.51 : -0.51);
            }
            else {
                Laya.Vector3.subtract(dstPos, gridWorldPos, gVec3);
                fixedPos.z = gridWorldPos.z + (gVec3.z > 0 ? 0.51 : -0.51);
            }
            if (spr.ifWorldposWalkable(fixedPos)) {
                dstPos = fixedPos;
            }
            else {
                Laya.Vector3.subtract(dstPos, gridWorldPos, gVec3);
                fixedPos.x = gridWorldPos.x + (gVec3.x > 0 ? 0.51 : -0.51);
                fixedPos.z = gridWorldPos.z + (gVec3.z > 0 ? 0.51 : -0.51);
                dstPos = fixedPos;
            }
            dstPos.cloneTo(outPos);
            return true;
        }
        onDestroy() {
            super.onDestroy();
            HUD.dispose();
            gEvent.off(FightEvent.contactWithBonusMonster, this, this.takeStageBonus);
            this.isPlaying = false;
            this._characters = [];
            this._sceneItemMap = {};
            this._mainRole = null;
            if (this._mapGentor) {
                this._mapGentor.cleanUpContent();
                this._mapGentor = null;
            }
        }
        shakeCamera(strength, frequent, duration) {
            if (this.cameraController) {
                this.cameraController.shake(strength, frequent, duration);
            }
        }
        preload(progressHandler) {
            return __awaiter(this, void 0, void 0, function* () {
                console.info("[fight] preload start");
                let reses = [];
                reses.push({ url: CommonRes.shadow, num: Device.isLowOptDeviceByAuto && 5 || 20 });
                reses.push({ url: CommonRes.fxHuiXue, num: 1 });
                reses.push({ url: CommonRes.fxReborn, num: 1 });
                reses.push({ url: CommonRes.fxBeAtk, num: 1 });
                reses.push({ url: CommonRes.obj3D("role_yuandian_001"), num: 1 });
                reses.push({ url: CommonRes.fxSummon, num: 10 });
                let goldNum = 0;
                let xpNum = 0;
                let monsterBornInfoArr = this._mapGentor.getMonsterBornInfos();
                for (let waveIdx = 0, waveNum = monsterBornInfoArr.length; waveIdx < waveNum; waveIdx++) {
                    let oneWaveMosters = monsterBornInfoArr[waveIdx];
                    for (let m of oneWaveMosters) {
                        let relateReses = CommonRes.getCharacterRelateRes(m.monsterId);
                        reses.push(...relateReses);
                        if (m.goldCnt) {
                            goldNum += m.goldCnt;
                        }
                        if (m.XPCnt) {
                            xpNum += m.XPCnt;
                        }
                        if (m.items) {
                            for (let itemID of m.items) {
                                reses.push(...CommonRes.getSceneItemReleateRes(itemID));
                            }
                        }
                    }
                }
                let splitedMonsterDropInfoArr = this._mapGentor.splitedMonsterDropInfoArr;
                for (let info of splitedMonsterDropInfoArr) {
                    let relateReses = CommonRes.getCharacterRelateRes(info.monsterId);
                    reses.push(...relateReses);
                    if (info.goldCnt) {
                        goldNum += info.goldCnt;
                    }
                    if (info.XPCnt) {
                        xpNum += info.XPCnt;
                    }
                    if (info.items) {
                        for (let itemID of info.items) {
                            reses.push(...CommonRes.getSceneItemReleateRes(itemID));
                        }
                    }
                }
                reses.push({ url: SceneItemFactory.inst.getSceneItemResUrl(eSceneItemType.GOLD), num: goldNum });
                reses.push({ url: SceneItemFactory.inst.getSceneItemResUrl(eSceneItemType.XP), num: xpNum });
                for (let i = reses.length - 1; i >= 0; i--) {
                    let iRes = reses[i];
                    for (let j = 0; j < i; j++) {
                        let jRes = reses[j];
                        if (jRes.url == iRes.url) {
                            jRes.num += iRes.num;
                            reses.splice(i, 1);
                            break;
                        }
                    }
                }
                let isLoaded = false;
                let _func2 = (resolve, reject) => {
                    if (!isLoaded) {
                        console.log("超时，请重试");
                        gEvent.event(FightEvent.showReloadBtn);
                    }
                };
                let _func = (resolve, reject) => {
                    let tsPreSpawnStart = new Date().getTime();
                    Pool.preSpawns(reses, false, progressHandler)
                        .then(() => {
                        mm.debug.tStageLoading = (new Date().getTime()) - tsPreSpawnStart;
                        console.log("preSpawn finish", mm.debug.tStageLoading);
                        isLoaded = true;
                        Timer.clear(this, _func2);
                        resolve();
                    })
                        .catch(err => {
                        console.log("网络异常, 资源加载失败，请重试", err);
                        Timer.clear(this, _func2);
                        gEvent.event(FightEvent.showReloadBtn);
                    });
                };
                return new Promise((resolve, reject) => {
                    Timer.once(10000, this, _func2, [resolve, reject]);
                    _func(resolve, reject);
                });
            });
        }
        initPathFinding(grids, width, height) {
            AStar.setup(true, [eSceneGridType.Walkable]);
            AStar.setGrids(AStar.transfer(grids, width, height));
        }
        debugKillAllMonster() {
            let monsterArr = this._characters[CharacterType.monster];
            for (let i = 0, len = monsterArr.length; i < len; i++) {
                let monster = monsterArr[i];
                monster.die(MainRole.inst);
            }
        }
        createLandmine(url, bombUrl, damage, pos, owner, duration, bombRange) {
            let landmine = new Landmines(url, bombUrl, damage, owner, duration, bombRange);
            landmine.position = pos;
            this.addChild(landmine);
            this._landmines.push(landmine);
            return landmine;
        }
        destroyLandmines(inst) {
            for (let i = 0, n = this._landmines.length; i < n; i++) {
                let landmine = this._landmines[i];
                if (landmine == inst) {
                    landmine.destroy();
                    this._landmines.splice(i, 1);
                    break;
                }
            }
        }
        isFighting() {
            return !this._bDoorOpen;
        }
        isAllMonsterClear() {
            return this._bAllMonsterClear;
        }
    }

    var CameraFollowType;
    (function (CameraFollowType) {
        CameraFollowType[CameraFollowType["none"] = 0] = "none";
        CameraFollowType[CameraFollowType["back"] = 1] = "back";
        CameraFollowType[CameraFollowType["fixZAxis"] = 2] = "fixZAxis";
    })(CameraFollowType || (CameraFollowType = {}));
    class CameraController extends Laya.Script {
        onAwake() {
            CameraController.inst = this;
            this.camera = this.owner;
            this.targetPos = null;
            this.bAcrossCorner = false;
        }
        setTarget(target, sync = true) {
            if (this.owner == null) {
                return;
            }
            this.target = target;
            let tfCamera = this.owner.transform;
            Laya.Vector3.scale(Utils.GetTransformForward(tfCamera), this.followSetting.distance * (-1), gVec3);
            this.deltaPos = gVec3.clone();
            if (sync) {
                Laya.Vector3.add(this.target.position, this.deltaPos, gVec3);
                tfCamera.position = gVec3.clone();
                tfCamera.lookAt(target.position, gUp);
            }
        }
        setFollowSetting(setting) {
            this.followSetting = setting;
            if (this.target) {
                this.follow();
            }
        }
        setCamPosZBound(min, max) {
            this.minPosZ = min;
            this.maxPosZ = max;
        }
        onLateUpdate() {
            let deltaMs = Timer.deltaMs;
            this.follow();
            this.updateShake(deltaMs);
        }
        limitPos() {
        }
        follow() {
            if (this.target == null) {
                return;
            }
            switch (this.followSetting.followType) {
                case CameraFollowType.none:
                    {
                        if (!this.targetPos) {
                            this.targetPos = new Laya.Vector3();
                        }
                        Laya.Vector3.add(this.target.position, this.deltaPos, this.targetPos);
                    }
                    break;
                case CameraFollowType.fixZAxis:
                    if (!this.targetPos) {
                        this.targetPos = new Laya.Vector3();
                    }
                    gVec3.x = 0;
                    gVec3.y = 0;
                    gVec3.z = this.target.position.z;
                    Laya.Vector3.add(gVec3, this.deltaPos, this.targetPos);
                    break;
            }
            if (this.minPosZ && this.targetPos.z < this.minPosZ) {
                this.targetPos.z = this.minPosZ;
            }
            if (this.maxPosZ && this.targetPos.z > this.maxPosZ) {
                this.targetPos.z = this.maxPosZ;
            }
            if (this.targetPos) {
                if (this.shakeStrength) {
                    this.targetPos.x += this.shakeStrength;
                }
                let tf = this.owner.transform;
                Laya.Vector3.lerp(tf.position, this.targetPos, Timer.deltaS * this.followSetting.speed, gVec3);
                tf.position = gVec3.clone();
            }
        }
        shake(strength, frequent, duration) {
            this.shakeStrength = strength;
            this.shakeGap = 1000 / frequent;
            this.shakeDuration = duration;
            this.shakeTime = 0;
        }
        updateShake(deltaMs) {
            if (this.shakeDuration == null) {
                return;
            }
            if (this.shakeDuration < 0) {
                this.shakeStrength = null;
                return;
            }
            this.shakeDuration -= deltaMs;
            this.shakeTime += deltaMs;
            if (this.shakeTime > this.shakeGap) {
                this.shakeTime = 0;
                this.shakeStrength = -this.shakeStrength;
            }
        }
        onDestroy() {
            CameraController.inst = null;
        }
    }

    class Monster extends Character {
        constructor() {
            super(...arguments);
            this._contactDmgCD = 0;
        }
        onAwake() {
            super.onAwake();
            this.characterType = CharacterType.monster;
            this.targetCharacterType = CharacterType.role;
            this.team = 2;
            this.hpProgress = HUD.createHPProgress(this.characterType, this);
            this.target = MainRole.inst;
        }
        onDestroy() {
            this.hpProgress.dispose(false);
            super.onDestroy();
        }
        updateContactDmgCD(deltaMs) {
            if (this._contactDmgCD > 0) {
                this._contactDmgCD -= deltaMs;
            }
        }
        onContactWithMainRole(role) {
            role.beAtk(this, this.attr.atk, null, false, this.position, 1, null, eDmgSrc.Contact);
        }
        checkContactWithMainRole(role) {
            if (this._contactDmgCD > 0) {
                return;
            }
            if (!this.visible) {
                return;
            }
            if (role.config.colliderType == eActorColliderType.circle && this.config.colliderType == eActorColliderType.circle) {
                const selfPos = this.position;
                const rolePos = role.position;
                let pow_dis = Math.pow(selfPos.x - rolePos.x, 2) + Math.pow(selfPos.z - rolePos.z, 2);
                let pow_contact_dis = Math.pow(role.config.radius + this.config.radius, 2);
                if (pow_dis < pow_contact_dis) {
                    this.onContactWithMainRole(role);
                    this._contactDmgCD = cfg.global.monsterContactDmgCd;
                }
            }
        }
        onUpdate(deltaMs) {
            if (!super.onUpdate(deltaMs)) {
                return false;
            }
            if (this.target.alive) {
                this.checkContactWithMainRole(this.target);
            }
            this.updateContactDmgCD(deltaMs);
            if (this._funcTraceTimer) {
                this._funcTraceTimer();
            }
            return true;
        }
        dropEquip() {
            let mergeList = {};
            for (let itemID of this.dropItemList) {
                if (mergeList[itemID]) {
                    mergeList[itemID]++;
                }
                else {
                    mergeList[itemID] = 1;
                }
            }
            for (let k in mergeList) {
                this.fightScene.dropEquip(parseInt(k), mergeList[k], this.position, cfg.global.dropRadius);
            }
        }
        spawnDeathBomb(atker) {
            let buffConfig = cfg.buff[atker.attr.deathBomb];
            Bomb.spawn(buffConfig.value2, buffConfig.duration, this.position, undefined, 1, buffConfig.value, atker.getDamage(), undefined, atker);
        }
        spawnDeathFreeze(atker) {
            let buffConfig = cfg.buff[atker.attr.deathFreeze];
            Bomb.spawn(buffConfig.value2, buffConfig.duration, this.position, undefined, 1, buffConfig.value, 0, undefined, atker, undefined, [buffConfig.value3]);
        }
        die(atker) {
            super.die(atker);
            this.hpProgress.hide();
            if (UserData.isNewPlayer() && mm.fight.stageIdx == 1 && mm.fight.scene && MainRole.inst) {
                let func = () => {
                    MainRole.inst.pickUpGold();
                    Timer.once(1200, this, () => {
                        mm.fight.scene.createMonsterNextWave(0);
                    });
                };
                if (FightScenePVE.newPlayerSeqInfo[1][1] == false && mm.fight.scene.ifMonsterClear()) {
                    FightScenePVE.newPlayerSeqInfo[1][1] = true;
                    MainRole.inst.addExp(cfg.global.levelExp[0]);
                    func();
                    return;
                }
                if (FightScenePVE.newPlayerSeqInfo[1][2] == false && mm.fight.scene.ifMonsterClear()) {
                    FightScenePVE.newPlayerSeqInfo[1][2] = true;
                    MainRole.inst.addExp(cfg.global.levelExp[1]);
                    func();
                    return;
                }
            }
            if (this.dropGoldNum) {
                this.fightScene.dropSceneItems(eSceneItemType.GOLD, this.dropGoldNum, this.position, cfg.global.dropRadius);
            }
            if (this.dropItemList && this.dropItemList.length > 0) {
                this.dropEquip();
            }
            if (this.dropXPNum) {
                this.fightScene.dropSceneItems(eSceneItemType.XP, this.dropXPNum, this.position, cfg.global.dropRadius);
            }
            mm.tankRank.calcTaskIsFinish(TaskTargetType.wipeMonster, 1);
            if (atker.attr.deathBomb) {
                this.spawnDeathBomb(atker);
            }
            if (atker.attr.deathFreeze) {
                this.spawnDeathFreeze(atker);
            }
            if (this.config.dieSkills && this.config.dieSkills.length > 0) {
                for (let skillId of this.config.dieSkills) {
                    this.releaseSkill(skillId);
                }
            }
            mm.fight.scene.checkCanOpenTheDoor();
        }
        playBeAtkScaleAni() {
            if (this._onBeAtkScaling) {
                return;
            }
            let configScale = this.getModelScale();
            let tgtScale = configScale * cfg.global.beAtkScale;
            this._onBeAtkScaling = true;
            Tween.to(this.transform, { localScaleX: tgtScale, localScaleY: tgtScale, localScaleZ: tgtScale }, cfg.global.tBeAtkScale)
                .then(() => {
                Tween.to(this.transform, { localScaleX: configScale, localScaleY: configScale, localScaleZ: configScale }, cfg.global.tBeAtkScaleRecover)
                    .then(() => {
                    this._onBeAtkScaling = false;
                });
            });
        }
        playBeAtkFX() {
            EffectManager.spawn(CommonRes.fxBeAtk, undefined, this.position);
        }
        showBeAtkAnim() {
            if (this.attr.hp <= 0) {
                return;
            }
            if (!this.config.atkedTime) {
                return;
            }
            if (this._animTime && this._animTime > Timer.manualCurMs) {
                return;
            }
            let previousKey = this._curAnim;
            if (AnimatorKey.idle == this._curAnim || AnimatorKey.run == this._curAnim) {
                this.playAnim(AnimatorKey.ed);
                if (!this._bAnimStateAvailableArr[AnimatorKey.ed]) {
                    this.playBeAtkScaleAni();
                }
                this.playBeAtkFX();
                this.stopMove();
                this._beAtking = true;
                Timer.manualOnce(this.config.atkedTime, this, () => {
                    if (this.alive && AnimatorKey.ed == this._curAnim) {
                        this.playAnim(previousKey);
                        this._beAtking = false;
                    }
                });
            }
            this._animTime = Timer.manualCurMs + cfg.global.beAtkThenStopCD;
        }
        isInstantKill(rate) {
            return rate > MathUtils.random();
        }
        beAtk(atker, damage, buffs, isCrit = false, hitPos, hitbackDis, ignoreBeAtkAnim, dmgSrc = eDmgSrc.Bullet) {
            if (!mm.fight.isFighting()) {
                return;
            }
            let bInstantKill = false;
            if (this.config.isBoss != 1 && atker.attr.instantKillRate > 0) {
                bInstantKill = this.isInstantKill(atker.attr.instantKillRate);
            }
            let stageCfg = mm.fight.getCurStageCfg();
            if (this.visible && (!this.config.isBoss || !stageCfg.type || eHPBarDisplayType.BossButShow == stageCfg.type) && this.hpProgress.hpBar && !this.hpProgress.hpBar.visible) {
                this.hpProgress.show();
            }
            let _damageForDisplay;
            if (bInstantKill) {
                damage = 99999;
                _damageForDisplay = 99999;
            }
            else {
                _damageForDisplay = this.calExtDmg(atker, damage);
            }
            _damageForDisplay = Math.ceil(_damageForDisplay);
            if (stageCfg.type && mm.fight.scene instanceof FightScenePVE) {
                if (this.attr.hp >= _damageForDisplay) {
                    mm.fight.scene.curBossHP -= _damageForDisplay;
                }
                else {
                    mm.fight.scene.curBossHP -= this.attr.hp;
                }
            }
            super.beAtk(atker, damage, buffs, isCrit, hitPos, hitbackDis, ignoreBeAtkAnim);
            if (bInstantKill) {
                HUD.createHurtText(BeAtkType.crit, this, "爆头");
            }
            else {
                _damageForDisplay = Math.ceil(_damageForDisplay);
                if (_damageForDisplay > 0) {
                    if (isCrit) {
                        HUD.createHurtText(BeAtkType.crit, this, (-_damageForDisplay).toString());
                    }
                    else {
                        HUD.createHurtText(BeAtkType.normal, this, (-_damageForDisplay).toString());
                    }
                }
            }
            if (!ignoreBeAtkAnim) {
                this.showBeAtkAnim();
            }
        }
        relive() {
            super.relive();
            if (!this.hpProgress.hpBar.visible && this.visible && mm.fight.getCurStageCfg().type) {
                this.hpProgress.show();
            }
        }
        doReleaseSkill(skillType, skillId) {
            switch (skillType) {
                case eSkillType.Split:
                    this.split(skillId);
                    return;
            }
            super.doReleaseSkill(skillType, skillId);
        }
        split(skillId) {
            let config = cfg.skillCfg[skillId];
            let position = this.position;
            let dropInfo_1 = this.fightScene.getSplitMonsterDrop();
            let dropInfo_2 = this.fightScene.getSplitMonsterDrop();
            let func_setMonsterInfo = (info) => {
                info.monsterId = config.divisionActorId;
                info.pos = position.clone();
                let cnt = 30;
                for (let i = 0; i < cnt; i++) {
                    let randPosX = MathUtils.randomWithLimit(-2, 2);
                    let randPosZ = MathUtils.randomWithLimit(-2, 2);
                    info.pos.x = info.pos.x + randPosX;
                    info.pos.z = info.pos.z + randPosZ;
                    if (this.ifWorldposWalkable(info.pos)) {
                        break;
                    }
                    info.pos.x = position.x;
                    info.pos.z = position.z;
                }
            };
            func_setMonsterInfo(dropInfo_1);
            func_setMonsterInfo(dropInfo_2);
            this.fightScene.createOneMonster(dropInfo_1);
            this.fightScene.createOneMonster(dropInfo_2);
            this.onSkillFini(skillId);
        }
        setUnsearchable(b) {
            this.unsearchable = b;
            this.visible = !b;
            this.active = !b;
            if (b) {
                this.hpProgress.hide();
            }
            else {
                this.hpProgress.show();
            }
        }
        traceBeforeSkill(traceStopDis) {
            return __awaiter(this, void 0, void 0, function* () {
                let traceStopDisSquare = traceStopDis * traceStopDis;
                return new Promise(resolve => {
                    this._funcTraceTimer = () => {
                        let funcTraceEndCB = () => {
                            this._funcTraceTimer = null;
                            resolve();
                        };
                        if (!this.target || this.target.destroyed) {
                            funcTraceEndCB();
                            return;
                        }
                        if (Laya.Vector3.distanceSquared(this.target.position, this.position) <= traceStopDisSquare) {
                            this.focus(this.target.position);
                            funcTraceEndCB();
                            return;
                        }
                        this.AStarTrace();
                    };
                });
            });
        }
        summon(skillId) {
            const config = cfg.skillCfg[skillId];
            let reRndCnt = 30;
            let logicPos = { x: undefined, y: undefined };
            while (reRndCnt > 0) {
                reRndCnt--;
                logicPos.x = MathUtils.randomN(0, GridMapUtil.inst.mapWidth - 1);
                logicPos.y = MathUtils.randomN(0, GridMapUtil.inst.mapHeight - 1);
                let gridType = GridMapUtil.inst.getGridTypeByLogicPos(logicPos);
                if (gridType == eSceneGridType.Walkable) {
                    break;
                }
            }
            if (reRndCnt <= 0) {
                return;
            }
            let bornInfo = {
                monsterId: config.summonedId,
                pos: GridMapUtil.inst.convertLogicPos2WorldPos(logicPos),
            };
            mm.fight.scene.summonMonster(bornInfo);
        }
    }

    class BonusMonster extends Monster {
        onAwake() {
            super.onAwake();
            this.characterType = CharacterType.bonusMonster;
            this.hpProgress.hide();
            gEvent.on(FightEvent.takeBonusFini, this, this.flyOut);
        }
        onContactWithMainRole(role) {
            console.log("contact with bonus monster");
            gEvent.event(FightEvent.contactWithBonusMonster);
            this.alive = false;
        }
        flyIn() {
            gVec3.x = this.position.x;
            gVec3.y = 15;
            gVec3.z = this.position.z;
            this.position = gVec3.clone();
            gVec3.y = 0;
            let targetPos = gVec3.clone();
            Timer.once(1000, this, () => {
                Tween.transformTranslate(this.transform, targetPos, 250);
            });
        }
        flyOut() {
            gVec3.x = this.position.x;
            gVec3.y = 15;
            gVec3.z = this.position.z;
            Tween.transformTranslate(this.transform, gVec3.clone(), 250).then(() => {
                this.die(this);
            });
        }
        die(atker) {
            this.alive = false;
            this.visible = false;
            this.active = false;
        }
        autoLookAt() { }
        onUpdate(deltaMs) {
            return super.onUpdate(deltaMs);
        }
        onDisable() {
            gEvent.off(FightEvent.takeBonusFini, this, this.flyOut);
            super.onDisable();
        }
        onDestroy() {
            gEvent.off(FightEvent.takeBonusFini, this, this.flyOut);
            super.onDestroy();
        }
    }

    class ReboundMonster extends Monster {
        constructor() {
            super(...arguments);
            this._moveStepLen = 0.5;
            this._tempDir1 = new Laya.Vector3();
        }
        set reboundDir(dir) {
            Laya.Vector3.normalize(dir, dir);
            this._reboundDir = dir;
        }
        get reboundDir() {
            return this._reboundDir;
        }
        initCornerCheckVar() {
            this.cornerHitWallRst = [];
            this.prevCornerPos = [];
            this.curCornerPos = [];
            for (let i = 0; i < 4; i++) {
                this.prevCornerPos.push(null);
                this.curCornerPos.push(new Laya.Vector3());
            }
        }
        onAwake() {
            super.onAwake();
            this.initCornerCheckVar();
        }
        reboundMove(pos) {
            this.prevCornerPos[0] = this.curCornerPos[0];
            this.prevCornerPos[1] = this.curCornerPos[1];
            this.prevCornerPos[2] = this.curCornerPos[2];
            this.prevCornerPos[3] = this.curCornerPos[3];
            let deltas = [
                [-this.modelRadius, -this.modelRadius],
                [-this.modelRadius, this.modelRadius],
                [this.modelRadius, -this.modelRadius],
                [this.modelRadius, this.modelRadius],
            ];
            let bHitWallArr = [false, false, false, false];
            let dstPos = pos.clone();
            for (let i = 0; i < 4; i++) {
                let anchordPos = dstPos.clone();
                let delta = deltas[i];
                anchordPos.x += delta[0];
                anchordPos.z += delta[1];
                this.curCornerPos[i] = anchordPos;
                let gridType = GridMapUtil.inst.getGridTypeByWorldPos(anchordPos);
                if (!this.ifGridWalkable(gridType)) {
                    bHitWallArr[i] = true;
                }
            }
            if (!bHitWallArr[0] && !bHitWallArr[1] && !bHitWallArr[2] && !bHitWallArr[3]) {
                return pos;
            }
            if (this.reboundDir.x < 0 && this.reboundDir.z < 0) {
                if (bHitWallArr[0]) {
                    if (bHitWallArr[2]) {
                        this.reboundDir.z = -this.reboundDir.z;
                    }
                    if (bHitWallArr[1]) {
                        this.reboundDir.x = -this.reboundDir.x;
                    }
                    if (!bHitWallArr[1] && !bHitWallArr[2]) {
                        mm.fight.rebound(this.curCornerPos[0], this.prevCornerPos[0], this.reboundDir);
                    }
                }
                else if (bHitWallArr[1]) {
                    this.reboundDir.x = -this.reboundDir.x;
                }
                else if (bHitWallArr[2]) {
                    this.reboundDir.z = -this.reboundDir.z;
                }
            }
            else if (this.reboundDir.x < 0 && this.reboundDir.z >= 0) {
                if (bHitWallArr[1]) {
                    if (bHitWallArr[0]) {
                        this.reboundDir.x = -this.reboundDir.x;
                    }
                    if (bHitWallArr[3]) {
                        this.reboundDir.z = -this.reboundDir.z;
                    }
                    if (!bHitWallArr[0] && !bHitWallArr[3]) {
                        mm.fight.rebound(this.curCornerPos[1], this.prevCornerPos[1], this.reboundDir);
                    }
                }
                else if (bHitWallArr[0]) {
                    this.reboundDir.x = -this.reboundDir.x;
                }
                else if (bHitWallArr[3]) {
                    this.reboundDir.z = -this.reboundDir.z;
                }
            }
            else if (this.reboundDir.x >= 0 && this.reboundDir.z < 0) {
                if (bHitWallArr[2]) {
                    if (bHitWallArr[0]) {
                        this.reboundDir.z = -this.reboundDir.z;
                    }
                    if (bHitWallArr[3]) {
                        this.reboundDir.x = -this.reboundDir.x;
                    }
                    if (!bHitWallArr[0] && !bHitWallArr[3]) {
                        mm.fight.rebound(this.curCornerPos[2], this.prevCornerPos[2], this.reboundDir);
                    }
                }
                else if (bHitWallArr[0]) {
                    this.reboundDir.z = -this.reboundDir.z;
                }
                else if (bHitWallArr[3]) {
                    this.reboundDir.x = -this.reboundDir.x;
                }
            }
            else {
                if (bHitWallArr[3]) {
                    if (bHitWallArr[1]) {
                        this.reboundDir.z = -this.reboundDir.z;
                    }
                    if (bHitWallArr[2]) {
                        this.reboundDir.x = -this.reboundDir.x;
                    }
                    if (!bHitWallArr[1] && !bHitWallArr[2]) {
                        mm.fight.rebound(this.curCornerPos[3], this.prevCornerPos[3], this.reboundDir);
                    }
                }
                else if (bHitWallArr[1]) {
                    this.reboundDir.z = -this.reboundDir.z;
                }
                else if (bHitWallArr[2]) {
                    this.reboundDir.x = -this.reboundDir.x;
                }
            }
            Laya.Vector3.scale(this._reboundDir, this._moveStepLen, gVec3);
            Laya.Vector3.add(this.position, gVec3, pos);
            return pos.clone();
        }
        move(dir) {
            if (this._bOnJump || this._bOnRush) {
                return;
            }
            Laya.Vector3.normalize(dir, this._tempDir1);
            Laya.Vector3.scale(this._tempDir1, this._moveStepLen, this._tempDir1);
            Laya.Vector3.add(this.position, this._tempDir1, gVec3);
            if (Laya.Vector3.equals(this.position, gVec3)) {
                return;
            }
            let dis = Laya.Vector3.distance(this.position, gVec3);
            let moveDuration = dis / this.getMoveSpeed();
            let targetPos = this.reboundMove(gVec3);
            this.moveTo(targetPos, moveDuration);
        }
    }

    const BURROW_FX_RES_NAME = "moster_dundi_001";
    const T_BURROW_FX = 500;
    class BurrowMonster extends Monster {
        constructor(actorID, attr) {
            super(actorID, attr);
            this.initBurrowAnimInfo();
        }
        initBurrowAnimInfo() {
            this._burrowAnimDura = this.config.burrowActTime;
            this._drillOutAnimDura = this.config.burrowActTime;
        }
        load(url) {
            const _super = Object.create(null, {
                load: { get: () => super.load }
            });
            return __awaiter(this, void 0, void 0, function* () {
                yield _super.load.call(this, url);
            });
        }
        getMoveDura() {
            return this.config.burrowTime + this._burrowAnimDura + this._drillOutAnimDura + 100;
        }
        randomBurrowPos() {
            let targetPos = new Laya.Vector3();
            let dis_lowerLimit = this.config.burrowDis[0];
            let dis_upperLimit = this.config.burrowDis[1] || dis_lowerLimit;
            let rdnCnt = 30;
            let dis;
            let dir;
            let bFound = false;
            while (rdnCnt > 0) {
                rdnCnt--;
                dis = MathUtils.randomWithLimit(dis_lowerLimit, dis_upperLimit);
                dir = MathUtils.randomWithLimit(2 * Math.PI);
                gVec3.x = 0;
                gVec3.y = 0;
                gVec3.z = dis;
                Laya.Quaternion.createFromYawPitchRoll(dir, 0, 0, gQuat);
                Laya.Vector3.transformQuat(gVec3, gQuat, gVec3);
                Laya.Vector3.add(this.position, gVec3, targetPos);
                if (this.ifWorldposWalkable(targetPos)) {
                    bFound = true;
                    break;
                }
            }
            if (!bFound) {
                targetPos = this.position.clone();
            }
            return targetPos;
        }
        showBurrowFX() {
            EffectManager.spawn(CommonRes.obj3D(BURROW_FX_RES_NAME), null, this.position.clone(), null, 1000).then((fx) => {
                this._fxBurrow = fx;
                Timer.manualOnce(T_BURROW_FX, this, () => {
                    this._fxBurrow = null;
                });
            });
        }
        burrowMove() {
            this.playAnim(AnimatorKey.zuandi1);
            Timer.manualOnce(this._burrowAnimDura, this, () => {
                if (this.alive) {
                    this.showBurrowFX();
                    this.setUnsearchable(true);
                    this.position = this.randomBurrowPos();
                }
            });
            Timer.manualOnce(this._burrowAnimDura + this.config.burrowTime, this, () => {
                if (this.alive) {
                    this.setUnsearchable(false);
                    this.playAnim(AnimatorKey.zuandi2);
                }
            });
            Timer.manualOnce(this._burrowAnimDura + this.config.burrowTime - T_BURROW_FX, this, () => {
                if (this.alive) {
                    this.showBurrowFX();
                }
            });
        }
        die(atker) {
            if (this._fxBurrow) {
                EffectManager.despawn(this._fxBurrow);
                this._fxBurrow = null;
            }
            super.die(atker);
        }
    }

    class MonsterFactory {
        constructor() {
        }
        static get inst() {
            if (!MonsterFactory._inst) {
                MonsterFactory._inst = new MonsterFactory();
            }
            return MonsterFactory._inst;
        }
        createMonster(id, attr) {
            let config = cfg.actor[id];
            let aiConfig;
            if (config.ai) {
                aiConfig = cfg.ai[config.ai];
            }
            if (aiConfig.moveType == AIMoveType.rebound) {
                return new ReboundMonster(id, attr);
            }
            else if (aiConfig.moveType == AIMoveType.burrow) {
                return new BurrowMonster(id, attr);
            }
            else {
                return new Monster(id, attr);
            }
        }
    }

    class FightScenePVE extends FightScene {
        constructor() {
            super(...arguments);
            this._bossTotalHP = 0;
            this._curBossHP = 0;
        }
        set curBossHP(value) {
            this._curBossHP = value;
            if (this._curBossHP <= 0) {
                mm.fight.fightView.setBossHPProgress(0, this._bossTotalHP);
                mm.fight.fightView.showBossProgress(false);
            }
            else {
                mm.fight.fightView.setBossHPProgress(this._curBossHP, this._bossTotalHP);
            }
        }
        get curBossHP() {
            return this._curBossHP;
        }
        getCamSize() {
            let cfgWidthSize = cfg.global.orthographicVerticalSize / 16 * 9;
            let devicePixelRatio = Laya.Browser.clientHeight / Laya.Browser.clientWidth;
            return cfgWidthSize * devicePixelRatio;
        }
        onEnable() {
            const _super = Object.create(null, {
                onEnable: { get: () => super.onEnable }
            });
            return __awaiter(this, void 0, void 0, function* () {
                _super.onEnable.call(this);
                yield mm.fight.showFightViewPVE();
                mm.loading.updateFightLoadingProgress(0.3, "坦克正在进军...40%", 300);
                MainCamera.camera.orthographicVerticalSize = this.getCamSize();
                yield this.createSceneElements();
                mm.loading.updateFightLoadingProgress(0.3, "坦克正在进军...60%", 300);
                yield mm.fight.enterNextStage();
                this.showNewPlayerGuide1();
            });
        }
        createSceneElements() {
            return __awaiter(this, void 0, void 0, function* () {
                yield this.createMainRole();
            });
        }
        ctorMainRoleAttrData() {
            let obj = mm.bag.getMainRoleAttrBonusObj();
            let techBonus = mm.technology.getTechnologyObj();
            obj.hp += techBonus.hp;
            obj.atk += techBonus.atk;
            obj.aspd += techBonus.atkSpd / 100;
            obj["contactDmgReduceByValue"] = techBonus.armoured;
            obj["bulletDmgReduceByValue"] = techBonus.protection;
            obj["XPRecAddition"] = techBonus.recoverHP;
            obj["inspire"] = techBonus.inspire;
            return obj;
        }
        updateGameFrame(deltaMs) {
            if (!this.isPlaying) {
                return;
            }
            super.updateGameFrame(deltaMs);
            this.isEndOfHalo1();
            this.isEndOfHalo2();
        }
        createMainRole() {
            return __awaiter(this, void 0, void 0, function* () {
                let actorID = mm.bag.getMainRoleActorID();
                let attrData = this.ctorMainRoleAttrData();
                let weaponID = mm.bag.getRoleEquipPart(EquipPart.weapon).id;
                attrData["weaponID"] = weaponID;
                if (mm.bag.ifPartEquipedByType(EquipPart.clothing)) {
                    attrData["clothing"] = mm.bag.getRoleEquipPart(EquipPart.clothing).id;
                }
                this._mainRole = new MainRole(actorID, attrData);
                this._mainRole.rotationEulerY = 180;
                this.addChild(this._mainRole);
                this._characters[CharacterType.role].push(this._mainRole);
                this._cameraController = this.camera.addComponent(CameraController);
                this._cameraController.setFollowSetting({
                    followType: CameraFollowType.fixZAxis,
                    speed: 10,
                    distance: 20
                });
                this._cameraController.setTarget(this._mainRole.transform, true);
                try {
                    Pool.preSpawns(CommonRes.getCharacterRelateRes(UserData.tankID), true);
                }
                catch (err) {
                    console.log(err);
                }
            });
        }
        createOneMonster(bornInfo) {
            let monster = MonsterFactory.inst.createMonster(bornInfo.monsterId);
            let monsterConfig = cfg.actor[bornInfo.monsterId];
            monster.attr.atk = Math.ceil(monster.attr.atk * this._mapGentor.config.atkK / 100 * mm.fight.gameTimesAddition);
            monster.attr.hpMax = Math.ceil(monster.attr.hpMax * (this._mapGentor.config.hpK / 100 * mm.fight.gameTimesAddition));
            monster.attr.hp = monster.attr.hpMax;
            monster.setupAIByID(monsterConfig.ai);
            monster.setPosition(bornInfo.pos, true);
            this.addChild(monster);
            this._characters[CharacterType.monster].push(monster);
            if (bornInfo.goldCnt) {
                monster.dropGoldNum = bornInfo.goldCnt;
            }
            if (bornInfo.XPCnt) {
                monster.dropXPNum = bornInfo.XPCnt;
            }
            if (bornInfo.items && bornInfo.items.length > 0) {
                monster.dropItemList = bornInfo.items;
            }
        }
        createMonster() {
            if (0 == this.waveIdx) {
                this._characters[CharacterType.monster] = [];
            }
            let curWave = this._mapGentor.getMonsterBornInfosByWave(this.waveIdx);
            if (curWave) {
                for (let bornInfo of curWave) {
                    this.createOneMonster(bornInfo);
                    if (this.waveIdx > 0 || (UserData.isNewPlayer() && mm.fight.stageIdx == 1)) {
                        EffectManager.spawn(CommonRes.fxSummon, null, bornInfo.pos, null, 2000);
                    }
                }
            }
            super.createMonster();
        }
        summonMonster(bornInfo) {
            EffectManager.spawn(CommonRes.fxSummon, null, bornInfo.pos, null, 2000);
            const tMonsterDelayShow = 700;
            Timer.manualOnce(tMonsterDelayShow, this, () => {
                this.createOneMonster(bornInfo);
            });
        }
        onKeyPress(event) {
            let dir = gVec2;
            dir.x = 0;
            dir.y = 0;
            if (event.keyCode == 97) {
                dir.x = -1;
            }
            if (event.keyCode == 100) {
                dir.x = 1;
            }
            if (event.keyCode == 119) {
                dir.y = 1;
            }
            if (event.keyCode == 115) {
                dir.y = -1;
            }
            if (dir.x != 0 || dir.y != 0) {
                let cameraDir = ViewUtils.viewDirToCameraDir(dir, MainCamera.camera.transform);
                this._mainRole.move(cameraDir);
            }
        }
        onKeyUp() {
            if (this._mainRole.isMoving) {
                this._mainRole.stopMove();
            }
        }
        stageStart() {
            const _super = Object.create(null, {
                stageStart: { get: () => super.stageStart }
            });
            return __awaiter(this, void 0, void 0, function* () {
                let mainRolePos;
                if (UserData.unfiniRec && UserData.unfiniRec.bStageFini) {
                    mainRolePos = new Laya.Vector3();
                    mainRolePos.x = UserData.unfiniRec.posX;
                    mainRolePos.z = UserData.unfiniRec.posZ;
                }
                else {
                    mainRolePos = this._mapGentor.getActorBornInfos()[0];
                }
                this._mainRole.setPosition(mainRolePos);
                this._cameraController.follow();
                if ((!(UserData.unfiniRec && UserData.unfiniRec.bStageFini) && UserData.isNewPlayer() == false) || (UserData.isNewPlayer() == true && mm.fight.stageIdx == 2)) {
                    yield this.createMonster();
                    this.calcAndShowBossHP();
                }
                this._mainRole.refreshMapBoundary();
                _super.stageStart.call(this);
            });
        }
        calcAndShowBossHP() {
            if (!mm.fight.getCurStageCfg().type)
                return;
            this._bossTotalHP = 0;
            mm.fight.fightView.showBossProgress(true);
            for (let m of this._characters[CharacterType.monster]) {
                this._bossTotalHP += m.attr.hpMax;
            }
            if (this._mapGentor.splitedMonsterDropInfoArr && this._mapGentor.splitedMonsterDropInfoArr.length > 0) {
                for (let i = 0, len = this._mapGentor.splitedMonsterDropInfoArr.length; i < len; i++) {
                    let info = this._mapGentor.splitedMonsterDropInfoArr[i];
                    this._bossTotalHP += (Math.ceil(cfg.actor[info.monsterId].hp * (this._mapGentor.config.hpK / 100) * mm.fight.gameTimesAddition));
                }
            }
            this._curBossHP = this._bossTotalHP;
        }
        addBonusMonster() {
            let bornPos = this._mapGentor.eventMonsterBornPos;
            if (!bornPos) {
                return;
            }
            let monsterId = cfg.global.eventMonsterKey + this._stageBonus;
            let monster = new BonusMonster(monsterId);
            monster.setPosition(bornPos, true);
            this.addChild(monster);
            if (this._characters[CharacterType.bonusMonster] && this._characters[CharacterType.bonusMonster].length > 0) {
                console.warn("!!!!!!!addBonusMonster", this._characters[CharacterType.bonusMonster]);
            }
            this._characters[CharacterType.bonusMonster] = [];
            this._characters[CharacterType.bonusMonster].push(monster);
            monster.flyIn();
        }
        onClearMonster() {
            super.onClearMonster();
            if (this._bTakeStageBonus) {
                return;
            }
            if (this.ifPassChapter()) {
                mm.fight.fightView.playPassChapTipAni(true, mm.fight.chapIdx);
            }
            Timer.once(1000, this, () => {
                MainRole.inst.pickUpGold();
            });
            MainRole.inst.pickUpItems();
            if (this._stageBonus) {
                this.addBonusMonster();
            }
            else {
                this.onTakeStageBonus();
            }
        }
        showNewPlayerGuide1() {
            if (UserData.isNewPlayer() && mm.fight.stageIdx == 1) {
                this._newPlayerHalo1 = this._mapGentor.setNewPlayerHalo(true, 1);
                this._mapGentor.setNewPlayerText(true, 1);
            }
        }
        isEndOfHalo1() {
            if (this._newPlayerHalo1 && UserData.isNewPlayer() && MainRole.inst) {
                if (Laya.Vector3.distanceSquared(MainRole.inst.transform.position, this._newPlayerHalo1.transform.position) <= 2) {
                    this._newPlayerHalo1 = this._mapGentor.setNewPlayerHalo(false, 1);
                    this._mapGentor.setNewPlayerText(false, 1);
                    this._newPlayerHalo2 = this._mapGentor.setNewPlayerHalo(true, 2);
                    this._mapGentor.setNewPlayerText(true, 2);
                    FightScenePVE.newPlayerSeqInfo[1][0] = true;
                    MainRole.inst.addBuff(5);
                    this.createMonsterNextWave(50);
                }
            }
        }
        isEndOfHalo2() {
            if (this._newPlayerHalo2 && UserData.isNewPlayer() && MainRole.inst) {
                if (Laya.Vector3.distanceSquared(MainRole.inst.transform.position, this._newPlayerHalo2.transform.position) <= 2) {
                    gEvent.event(FightEvent.showRelease2FireTip);
                    this._newPlayerHalo2 = this._mapGentor.setNewPlayerHalo(false, 2);
                    this._mapGentor.setNewPlayerText(false, 2);
                    FightScenePVE.newPlayerSeqInfo[1].isCheckHalo2 = true;
                }
            }
        }
    }
    FightScenePVE.newPlayerSeqInfo = {
        "1": {
            "0": false,
            "1": false,
            "2": false,
            isCheckHalo2: false
        }
    };

    class MainRole extends Role {
        constructor() {
            super(...arguments);
            this.levelUpCount = 0;
            this.levelUpConflictViewCaches = [];
            this._isUnfiniExp = false;
            this._isExpAni = false;
            this._expAniCache = [];
            this._isPlayPickGoldSound = false;
            this._newPlayerTipTimer = 0;
        }
        onAwake() {
            super.onAwake();
            console.info("[MainRole] create mainrole");
            MainRole.inst = this;
            gEvent.on(JoyEvent.JoyMoving, this, this.joyMoving);
            gEvent.on(JoyEvent.JoyEnd, this, this.joyEnd);
            gEvent.on(JoyEvent.JoyStart, this, this.joyStart);
            Pool.spawn(CommonRes.obj3D("effect_renwuquan"), this)
                .then(spr => {
                mm.fight.setObjRenderQueue(spr, RenderQueue.selectEffect);
            });
            Pool.spawn(CommonRes.obj3D("effect_direnquan_001"), null)
                .then(spr => {
                this._targetSelectedEffect = spr;
                mm.fight.setObjRenderQueue(spr, RenderQueue.selectEffect);
                this._targetSelectedEffect.active = false;
            });
            this.hpProgress = HUD.createHPProgress(this.characterType, this);
            this.isContinue = this.isContinueGame();
            if (this.isContinue) {
                this._isPlayPickGoldSound = true;
                this._isUnfiniExp = true;
                if (mm.fight.stashMainRoleBuffs && mm.fight.stashMainRoleBuffs.length > 0) {
                    for (let buffId of mm.fight.stashMainRoleBuffs) {
                        this.addBuff(buffId);
                    }
                    mm.fight.stashMainRoleBuffs = null;
                }
                if (mm.fight.stashMainRoleExp) {
                    this.addExp(mm.fight.stashMainRoleExp / this.attr.expScale);
                    mm.fight.stashMainRoleExp = null;
                }
                if (mm.fight.stashMainRoleHp) {
                    this.attr.hp = mm.fight.stashMainRoleHp;
                    mm.fight.stashMainRoleHp = null;
                }
                if (mm.fight.stashMainRoleGold) {
                    this._collectedGoldNum = mm.fight.stashMainRoleGold;
                    mm.fight.stashMainRoleGold = null;
                }
                this._collectedItems = mm.fight.stashMainRoleItems;
                mm.fight.stashMainRoleItems = null;
            }
            else {
                UserData.canSeeAVRelive = true;
            }
        }
        addConfigBuff() {
            if (!this.isContinueGame()) {
                super.addConfigBuff();
            }
        }
        loadModel() {
            return __awaiter(this, void 0, void 0, function* () {
                let modelRes = mm.bag.getMainRoleModelRes();
                this._originDot = new Laya.Sprite3D();
                yield this.load(CommonRes.obj3D(modelRes));
                this._inst.getChildAt(0).addChild(this._originDot);
                gVec3.x = 0;
                gVec3.y = 0;
                gVec3.z = 0;
                this._originDot.transform.localPosition = gVec3;
                this._originDot.active = false;
                let yd = yield Pool.spawn(CommonRes.obj3D("role_yuandian_001"));
                if (yd) {
                    this._originDot.addChild(yd);
                    gVec3.x = 0;
                    gVec3.y = 0;
                    gVec3.z = 0;
                    yd.transform.localPosition = gVec3;
                }
            });
        }
        uploadMainRoleDieStat() {
            let evtKey = "stage" + mm.fight.chapIdx;
            if (UserData.isFirstDay() && mm.fight.chapIdx <= 2) {
                let info = {
                    ["newDie"]: mm.fight.stageIdx.toString(),
                };
                StatManager.tmStat(evtKey, info);
            }
            let info = {
                ["die"]: mm.fight.stageIdx.toString(),
            };
            StatManager.tmStat(evtKey, info);
            let chapCfg = mm.fight.getCurChapCfg();
            let stageCfgKey = chapCfg.stage[mm.fight.stageIdx - 1];
            StatManager.statDeath(stageCfgKey);
        }
        die(atker) {
            this.uploadMainRoleDieStat();
            super.die(atker);
            Timer.once(cfg.global.showReliveDelay, null, () => {
                if (UserData.canSeeAVRelive) {
                    mm.fight.showFightReliveViewPVE();
                }
                else {
                    FightEndViewPVE.showView(mm.fight.chapIdx, mm.fight.stageIdx - 2);
                    UserData.canSeeAVRelive = true;
                }
            });
            this.hpProgress.hide();
        }
        relive(isCheckReliveCount = true) {
            super.relive(isCheckReliveCount);
            this.hpProgress.show();
        }
        onDestroy() {
            this.hpProgress.dispose(false);
            gEvent.off(JoyEvent.JoyMoving, this, this.joyMoving);
            gEvent.off(JoyEvent.JoyEnd, this, this.joyEnd);
            gEvent.off(JoyEvent.JoyStart, this, this.joyStart);
            super.onDestroy();
        }
        joyStart() {
            if (this.atkPlan == AtkPlan.PlanA) {
                this._autoAtk = false;
            }
            if (!this.fightScene.isPlaying) {
                this.fightScene.gameResume();
                return;
            }
            this.playAnim(AnimatorKey.run);
            this._originDot.active = true;
            if (mm.fight.chapIdx == 1 && mm.fight.stageIdx == 1 && !mm.fight.bPassedNoobStage7) {
                gEvent.event(FightEvent.hideDragJoyTip);
            }
            if (UserData.isNewPlayer()) {
                gEvent.event(FightEvent.hideDragJoyTip);
            }
        }
        joyMoving(data) {
            if (!this.fightScene.isPlaying) {
                return;
            }
            if (UserData.isNewPlayer()) {
                if (FightScenePVE.newPlayerSeqInfo[1].isCheckHalo2 == true) {
                    this._newPlayerTipTimer += Timer.deltaS;
                    if (this._newPlayerTipTimer >= 5 && mm.fight.scene.isClearAllMonster() == false) {
                        gEvent.event(FightEvent.showRelease2FireTip);
                    }
                }
            }
            if (this.atkPlan == AtkPlan.PlanA) {
                this._autoAtk = false;
            }
            if (data.x == 0 && data.y == 0)
                return;
            gVec2.x = data.x;
            gVec2.y = data.y;
            gVec3.x = 0;
            gVec3.y = 0;
            gVec3.z = -data.dist * 0.02;
            this._originDot.transform.localPosition = gVec3;
            let cameraDir = ViewUtils.viewDirToCameraDir(gVec2, MainCamera.camera.transform);
            this.move(cameraDir);
        }
        joyEnd() {
            if (!this.fightScene.isPlaying) {
                return;
            }
            if (UserData.isNewPlayer()) {
                gEvent.event(FightEvent.hideRelease2FireTip);
            }
            this._newPlayerTipTimer = 0;
            if (this.atkPlan == AtkPlan.PlanA) {
                this._autoAtk = true;
            }
            this.playAnim(AnimatorKey.idle);
            this.stopMove();
            this._notAtkTime = 0;
            if (this._bShowNotAtkTip) {
                this.cancelNotAtkTip();
            }
            this._originDot.active = false;
            if (mm.fight.chapIdx == 1 && mm.fight.stageIdx == 1 && !mm.fight.bPassedNoobStage7) {
                gEvent.event(FightEvent.showDragJoyTip);
            }
            if (UserData.isNewPlayer()) {
                if (FightScenePVE.newPlayerSeqInfo[1].isCheckHalo2 == false) {
                    gEvent.event(FightEvent.showDragJoyTip);
                }
            }
        }
        levelUp(deltaLevel, isMute = false) {
            this.hpProgress.playLvUpAni();
            !isMute && AudioManager.playSoundRandom(cfg.global.mianRoleLevelUpSound);
            if (this.attr.inspire > 0) {
                this.addHp(this.attr.inspire * deltaLevel);
            }
            super.levelUp(deltaLevel);
            console.info("mainrole level up ", deltaLevel, this.attr.level);
        }
        addExp(exp, callback) {
            if (exp < 0) {
                console.warn("can not add negative exp");
                this.fightScene.onTakeLvUpBuff();
                return;
            }
            if (this.attr.level > cfg.global.levelExp.length - 1) {
                console.warn("level is hightest");
                this.fightScene.onTakeLvUpBuff();
                if (callback) {
                    callback.run();
                }
                return;
            }
            this.attr.exp += exp * this.attr.expScale;
            let needExp = 0;
            let cfgLevel = 0;
            for (let i = 0, n = cfg.global.levelExp.length; i < n; i++) {
                let cfgExp = cfg.global.levelExp[i];
                if (needExp <= this.attr.exp && needExp + cfgExp > this.attr.exp) {
                    cfgLevel = i;
                    break;
                }
                needExp += cfgExp;
                cfgLevel = i + 1;
            }
            this.levelUpCount = cfgLevel - this.attr.level;
            if (!this._isExpAni) {
                this.addExpAni(exp * this.attr.expScale, this.attr.level, callback);
            }
            else {
                this._expAniCache.push({ exp: exp * this.attr.expScale, level: this.attr.level });
            }
            if (cfgLevel > this.attr.level) {
                this.levelUp(this.levelUpCount, this._isUnfiniExp);
            }
            else {
                this.fightScene.onTakeLvUpBuff();
            }
            this._isUnfiniExp = false;
        }
        showMissText() {
            HUD.createHurtText(BeAtkType.miss, this, "闪避");
        }
        beAtk(atker, damage, buffs, isCrit = false, hitPos, hitbackDis, ignoreBeAtkAnim, dmgSrc = eDmgSrc.Bullet) {
            if (this.checkInBeAtkCD() || !mm.fight.isFighting()) {
                return;
            }
            if (this.ifAvoidAtk()) {
                this.showMissText();
                return;
            }
            super.beAtk(atker, damage, buffs, isCrit, hitPos, hitbackDis);
            damage = this.calDmgReduce(damage, dmgSrc);
            damage = Math.ceil(damage);
            HUD.createHurtText(BeAtkType.normal, this, (-damage).toString());
            Device.vibrateShort();
        }
        addExpAni(addExp, curLVIndex, callback) {
            this._isExpAni = true;
            if (this._isUnfiniExp) {
                let lv = 1;
                for (let lvExp of cfg.global.levelExp) {
                    if (addExp >= lvExp) {
                        addExp -= lvExp;
                        ++lv;
                    }
                    else {
                        break;
                    }
                }
                if (lv >= cfg.global.levelExp.length + 1) {
                    mm.fight.fightView.changeExp(0, 1, false, 0);
                    mm.fight.fightView.changeLV(lv);
                }
                else {
                    mm.fight.fightView.changeExp(addExp, cfg.global.levelExp[lv - 1], false, 0);
                    mm.fight.fightView.changeLV(lv);
                }
                if (callback != null) {
                    callback.run();
                }
                this._isExpAni = false;
                return;
            }
            if (curLVIndex > cfg.global.levelExp.length - 1) {
                mm.fight.fightView.changeExp(0, 1, false, 0);
                mm.fight.fightView.changeLV(curLVIndex + 1);
                if (this.levelUpCount > 0) {
                    Timer.once(1100, this, () => {
                        mm.fight.showFightLevelUpViewPVE();
                    });
                }
                if (callback != null) {
                    callback.run();
                }
                this._isExpAni = false;
                return;
            }
            if (!addExp)
                addExp = 0;
            let curExp = this.attr.exp - addExp;
            for (let l = curLVIndex - 1; l >= 0; l--) {
                curExp -= cfg.global.levelExp[l];
            }
            if (curExp + addExp < cfg.global.levelExp[curLVIndex]) {
                mm.fight.fightView.changeExp(addExp + curExp, cfg.global.levelExp[curLVIndex], true, cfg.global.expAniTime);
                mm.fight.fightView.changeLV(curLVIndex + 1);
                if (this.levelUpCount > 0) {
                    Timer.once(1100, this, () => {
                        mm.fight.showFightLevelUpViewPVE();
                    });
                }
                if (callback != null) {
                    callback.run();
                }
                this._isExpAni = false;
                return;
            }
            mm.fight.fightView.changeExp(1, 1, true, cfg.global.expAniTime);
            Timer.once(cfg.global.expAniTime * 1000, this, () => {
                mm.fight.fightView.changeExp(0, 1, false);
                mm.fight.fightView.changeLV(curLVIndex + 2);
                this.addExpAni(addExp + curExp - cfg.global.levelExp[curLVIndex], curLVIndex + 1, callback);
            });
        }
        onUpdate(deltaMs) {
            super.onUpdate(deltaMs);
            if (this._targetSelectedEffect) {
                if (this.target && this.target.visible) {
                    let pos = this.target.transform.position.clone();
                    pos.y = 0.2;
                    this._targetSelectedEffect.transform.position = pos;
                    if (!this._targetSelectedEffect.active) {
                        this._targetSelectedEffect.active = true;
                    }
                }
                else {
                    if (this._targetSelectedEffect.active) {
                        this._targetSelectedEffect.active = false;
                    }
                }
            }
            if (!mm.fight.bPassedNoobStage10 && this._bJoyMove && !mm.fight.scene.isAllMonsterClear() && this.alive) {
                if (isNaN(this._notAtkTime)) {
                    this._notAtkTime = 0;
                }
                this._notAtkTime += deltaMs;
                if (this._notAtkTime > cfg.global.noobRelease2FireTipTime) {
                    this._bShowNotAtkTip = true;
                    gEvent.event(FightEvent.showRelease2FireTip);
                }
            }
            return true;
        }
        addBuff(buffID, atker) {
            switch (buffID) {
                case 2001:
                case 2002:
                    this._collectedGoldNum += mm.fight.tigerView.getPriorityValue();
                    AudioManager.playSoundRandom(cfg.global.pickGoldSound);
                    mm.fight.fightView.changeGold(this._collectedGoldNum);
                    break;
                case 2003:
                    this._collectedGoldNum += mm.fight.specialRewardView.getPriorityValue();
                    AudioManager.playSoundRandom(cfg.global.pickGoldSound);
                    mm.fight.fightView.changeGold(this._collectedGoldNum);
                    break;
                case 2013:
                    UserData.diamond += mm.fight.specialRewardView.getPriorityValue();
                    AudioManager.playSoundRandom(cfg.global.pickGoldSound);
                    break;
                default:
                    super.addBuff(buffID, atker);
                    AudioManager.playSoundRandom(cfg.global.getBuffSound);
                    BuffManager.calcAddBuffLimit(buffID);
                    break;
            }
        }
        atk() {
            const _super = Object.create(null, {
                atk: { get: () => super.atk }
            });
            return __awaiter(this, void 0, void 0, function* () {
                if (!Device.isLowOptDeviceByAuto && cfg.global.cameraShake.atk && cfg.global.cameraShake.atk[0] && this.canAtk()) {
                    this.fightScene.shakeCamera(cfg.global.cameraShake.atk[0], cfg.global.cameraShake.atk[1], cfg.global.cameraShake.atk[2]);
                }
                return yield _super.atk.call(this);
            });
        }
        kill(character) {
            super.kill(character);
            if (!Device.isLowOptDeviceByAuto && cfg.global.cameraShake.kill && cfg.global.cameraShake.kill[0]) {
                this.fightScene.shakeCamera(cfg.global.cameraShake.kill[0], cfg.global.cameraShake.kill[1], cfg.global.cameraShake.kill[2]);
            }
            Device.vibrateShort();
        }
        addHp(hp) {
            super.addHp(hp);
            hp = Math.ceil(hp);
            hp > 0 && this.hpProgress.showRecoverAni();
        }
        onPickUpXP() {
            super.onPickUpXP();
            AudioManager.playSoundRandom(cfg.global.pickHPBottleSound);
        }
        pickUpGold() {
            super.pickUpGold();
            mm.fight.fightView.changeGold(this._collectedGoldNum);
            if (this._isPlayPickGoldSound) {
                AudioManager.playSoundRandom(cfg.global.pickGoldSound);
            }
            else {
                this._isPlayPickGoldSound = true;
            }
        }
        cancelNotAtkTip() {
            this._bShowNotAtkTip = false;
            gEvent.event(FightEvent.hideRelease2FireTip);
        }
        resetNotAtkTime() {
            this.cancelNotAtkTip();
            this._notAtkTime = 0;
            this._bJoyMove = false;
        }
        onMoveStart() {
            this._bJoyMove = true;
            super.onMoveStart();
        }
        onMoveEnd() {
            this._originDot.active = false;
            this._bJoyMove = false;
            super.onMoveEnd();
        }
    }

    function isNumber$1(val) {
        return !isNaN(val) && null != val;
    }
    function addOne(val) {
        if (!isNumber$1(val)) {
            return 1;
        }
        else {
            val = val + 1;
            return val;
        }
    }
    class UserData {
        static init() {
            return __awaiter(this, void 0, void 0, function* () {
                yield this.initData();
                this.initPower();
                this.calcPower();
                this.initDailyStat();
                this.validSelChap();
            });
        }
        static getDailyStatExpireTimestamp() {
            let curMs = Timer.curMs;
            if (!isNumber$1(curMs)) {
                curMs = new Date().getTime();
            }
            let date = new Date(curMs);
            date.setHours(0, 0, 0, 0);
            let ts = date.getTime();
            return ts + 86400000;
        }
        static isNewPlayer() {
            return this.chap == 0;
        }
        static resetDailyStat() {
            this.dailyGameTimes = 0;
            this.dailyPassStageCnt = 0;
            this.dailyFiniGameTimes = 0;
            this.dailyDeadStageID = 0;
        }
        static resetDailyBonusCnt() {
            this.dailyFreeBonus1Cnt = 0;
            this.dailyFreeBonus2Cnt = 0;
        }
        static checkDailyStatExpire() {
            let curMs = Timer.curMs;
            if (!isNumber$1(curMs)) {
                curMs = new Date().getTime();
            }
            if (!isNumber$1(this.dailyStatExpireDate)) {
                this.dailyStatExpireDate = 0;
            }
            if (curMs > this.dailyStatExpireDate) {
                this.resetDailyStat();
                this.resetDailyBonusCnt();
                this.dailyStatExpireDate = this.getDailyStatExpireTimestamp();
                return true;
            }
            else {
                return false;
            }
        }
        static initDailyStat() {
            if (this.checkDailyStatExpire()) {
                this.saveData();
            }
        }
        static initRegDate() {
            return __awaiter(this, void 0, void 0, function* () {
                if (!this.regDate) {
                    let retMsg = yield Net.httpGet("/user/info");
                    retMsg = Utils.decodeBase64WithSaltV2(retMsg);
                    if (retMsg && 0 == retMsg.err) {
                        this.regDate = retMsg.msg["created_at"];
                    }
                    else {
                        console.warn("request regDate error", retMsg);
                    }
                }
            });
        }
        static initData() {
            return __awaiter(this, void 0, void 0, function* () {
                this.tankID = cfg.global.defaultActor;
                let res = yield DB.get(this.key);
                if (res) {
                    this.setObj(res);
                }
                else {
                    this.saveData();
                }
            });
        }
        static initPower() {
            let secSub = (Timer.curMs - this.powerTimestamp) / 1000;
            secSub = Math.round(secSub);
            while (true) {
                if (this.power >= cfg.global.maxPower) {
                    this.savePowerTimestamp();
                    break;
                }
                secSub -= cfg.global.resumePowerInterval;
                if (secSub >= 0) {
                    ++this.power;
                    continue;
                }
                else {
                    this.savePowerTimestamp(secSub * 1000);
                    this.resumePowerTimer = -secSub;
                    break;
                }
            }
        }
        static calcPower() {
            setInterval(() => {
                if (this.power >= cfg.global.maxPower) {
                    this.resumePowerTimer = cfg.global.resumePowerInterval;
                    return;
                }
                if (this.resumePowerTimer <= 0) {
                    if (this.power < cfg.global.maxPower) {
                        ++this.power;
                        this.savePowerTimestamp();
                        this.saveData(1000);
                    }
                    this.resumePowerTimer = cfg.global.resumePowerInterval;
                }
                --this.resumePowerTimer;
            }, 1000);
        }
        static validSelChap() {
            if (this.selChap != 0) {
                this.selChap = Math.min(this.selChap || this.chap, cfg.global.maxChapIdx);
            }
            if (this.chap > cfg.global.maxChapIdx + 1) {
                this.chap = cfg.global.maxChapIdx + 1;
            }
            if (this.chap > cfg.global.maxChapIdx && this.stage > 0) {
                this.stage = 0;
            }
            if (this.selChap == 0 && this.chap > 0) {
                this.selChap = Math.min(this.chap, cfg.global.maxChapIdx);
            }
        }
        static checkAndUseDiamond(diamond) {
            if (this.diamond >= diamond) {
                this.diamond -= diamond;
                return true;
            }
            return false;
        }
        static checkAndUsePower(needPowerCount) {
            if (this.power >= needPowerCount) {
                this.power -= needPowerCount;
                return true;
            }
            return false;
        }
        static checkAndUseGold(gold) {
            if (this.gold >= gold) {
                this.gold -= gold;
                return true;
            }
            return false;
        }
        static saveData(delay = 3000) {
            DB.update(this.key, this.getObj(), delay);
        }
        static savePowerTimestamp(deltaMs = 0) {
            this.powerTimestamp = Timer.curMs + deltaMs;
        }
        static getContinueData() {
            return this.unfiniRec;
        }
        static saveContinueData(bStageFini, posX, posZ) {
            if (this.isNewPlayer())
                return;
            this.unfiniRec = {
                chap: mm.fight.chapIdx,
                stage: mm.fight.stageIdx - 1,
                map: mm.fight.scene.getMapGroupIdx(),
                buffs: MainRole.inst.buffs,
                hp: MainRole.inst.attr.hp,
                exp: MainRole.inst.attr.exp,
                gold: MainRole.inst.collectedGoldNum,
                bStageFini: bStageFini,
                posX: posX,
                posZ: posZ,
                items: MainRole.inst.getCollectedItems(),
            };
            console.log("saveContinueData", JSON.stringify(this.unfiniRec));
            this.saveData(1000);
        }
        static saveEndData() {
            if (mm.fight.chapIdx > this.chap || (mm.fight.stageIdx >= this.stage && mm.fight.chapIdx == this.chap)) {
                this.stage = mm.fight.stageIdx;
                StatManager.bestScore();
            }
            if (mm.fight.chapIdx > this.chap) {
                this.chap = mm.fight.chapIdx;
                if (this.chap <= cfg.global.maxChapIdx) {
                    this.bNewChapNotice = true;
                    UserData.changeSelChap(this.chap);
                }
            }
            this.buffs = [];
            this.fightGold = 0;
            this.fightExp = 0;
            if (this.unfiniRec) {
                this.unfiniRec = null;
            }
            this.saveData(1000);
        }
        static onShowNewChapNotice() {
            this.bNewChapNotice = false;
            this.saveData(1000);
        }
        static cancelUnfiniTrip() {
            this.unfiniRec = null;
            this.saveData(1000);
        }
        static changeSelChap(chapIdx) {
            this.selChap = chapIdx;
            gEvent.event(MainEvent.selChapChanged);
            this.saveData(1000);
        }
        static statPlayGame() {
            if (isNumber$1(this.totalGameTimes)) {
                this.totalGameTimes++;
            }
            else {
                this.totalGameTimes = 1;
            }
            let chapIdx = this.selChap || 1;
            if (isNumber$1(this.gameTimesByChap[chapIdx])) {
                this.gameTimesByChap[chapIdx]++;
            }
            else {
                this.gameTimesByChap[chapIdx] = 1;
            }
            this.checkDailyStatExpire();
            if (isNumber$1(this.dailyGameTimes)) {
                this.dailyGameTimes++;
            }
            else {
                this.dailyGameTimes = 1;
            }
            this.saveData();
        }
        static statDeath(stageID) {
            this.checkDailyStatExpire();
            this.dailyDeadStageID = stageID;
            this.saveData(1000);
        }
        static statEndGame() {
            this.dailyFiniGameTimes = addOne(this.dailyFiniGameTimes);
            this.totalFiniGameTimes = addOne(this.totalFiniGameTimes);
            this.saveData(1000);
        }
        static statPassStage() {
            this.checkDailyStatExpire();
            if (isNumber$1(this.dailyPassStageCnt)) {
                this.dailyPassStageCnt++;
            }
            else {
                this.dailyPassStageCnt = 1;
            }
            this.saveData();
        }
        static getObj() {
            this.dataObj["power"] = this.power;
            this.dataObj["gold"] = this.gold;
            this.dataObj["diamond"] = this.diamond;
            this.dataObj["chap"] = this.chap;
            this.dataObj["selChap"] = this.selChap;
            this.dataObj["stage"] = this.stage;
            this.dataObj["buffs"] = this.buffs;
            this.dataObj["fightGold"] = this.fightGold;
            this.dataObj["fightExp"] = this.fightExp;
            this.dataObj["tankID"] = this.tankID;
            this.dataObj["tankLV"] = this.tankLV;
            this.dataObj["unlockTankIDs"] = this.unlockTankIDs;
            this.dataObj["unfiniRec"] = this.unfiniRec;
            this.dataObj["bNewChapNotice"] = this.bNewChapNotice;
            this.dataObj["tankRankData"] = this.tankRankData;
            this.dataObj["unlockBuffIDs"] = this.unlockBuffIDs;
            this.dataObj["totalGameTimes"] = this.totalGameTimes;
            this.dataObj["totalFiniGameTimes"] = this.totalFiniGameTimes;
            this.dataObj["gameTimesByChap"] = this.gameTimesByChap;
            this.dataObj["dailyGameTimes"] = this.dailyGameTimes;
            this.dataObj["dailyPassStageCnt"] = this.dailyPassStageCnt;
            this.dataObj["dailyFiniGameTimes"] = this.dailyFiniGameTimes;
            this.dataObj["dailyDeadStageID"] = this.dailyDeadStageID;
            this.dataObj["dailyStatExpireDate"] = this.dailyStatExpireDate;
            this.dataObj["regDate"] = this.regDate;
            this.dataObj["canSeeAVRelive"] = this.canSeeAVRelive;
            this.dataObj["powerTimestamp"] = this.powerTimestamp;
            this.dataObj["technology"] = this.technology;
            this.dataObj["technologyCount"] = this.technologyCount;
            this.dataObj["offlineRewardTimestamp_gold"] = this.offlineRewardTimestamp_gold;
            this.dataObj["isCollectGift"] = this.isCollectGift;
            this.dataObj["offlineReward"] = this.offlineReward;
            this.dataObj["offlineRewardTimeStamp_item"] = this.offlineRewardTimeStamp_item;
            this.dataObj["offlineRewardTimestamp_longTime"] = this.offlineRewardTimestamp_longTime;
            this.dataObj["lastSignTimeStamp"] = this.lastSignTimeStamp;
            this.dataObj["continuousSignCnt"] = this.continuousSignCnt;
            this.dataObj["dailyFreeBonus1Cnt"] = this.dailyFreeBonus1Cnt;
            this.dataObj["dailyFreeBonus2Cnt"] = this.dailyFreeBonus2Cnt;
            this.dataObj["freeBonus1TakeTimeStamp"] = this.freeBonus1TakeTimeStamp;
            this.dataObj["freeBonus2TakeTimeStamp"] = this.freeBonus2TakeTimeStamp;
            this.dataObj["freeBonus3TakeTimeStamp"] = this.freeBonus3TakeTimeStamp;
            return this.dataObj;
        }
        static setObj(obj) {
            this.power = obj.power == undefined ? cfg.global.maxPower : obj.power;
            this.gold = obj.gold == undefined ? 1000 : obj.gold;
            this.diamond = obj.diamond == undefined ? 0 : obj.diamond;
            this.chap = obj.chap == undefined ? 0 : obj.chap;
            this.selChap = obj.selChap == undefined ? this.chap : obj.selChap;
            this.stage = obj.stage == undefined ? 0 : obj.stage;
            this.buffs = obj.buffs == undefined ? [] : obj.buffs;
            this.fightGold = obj.fightGold == undefined ? 0 : obj.fightGold;
            this.fightExp = obj.fightExp == undefined ? 0 : obj.fightExp;
            this.tankID = obj.tankID == undefined ? 10001 : obj.tankID;
            this.tankLV = obj.tankLV == undefined ? 1 : obj.tankLV;
            this.unlockTankIDs = obj.unlockTankIDs == undefined ? [10001] : obj.unlockTankIDs;
            this.unfiniRec = obj.unfiniRec == undefined ? null : obj.unfiniRec;
            this.bNewChapNotice = obj.bNewChapNotice == undefined ? false : obj.bNewChapNotice;
            this.tankRankData = obj.tankRankData == undefined ? null : obj.tankRankData;
            this.unlockBuffIDs = obj.unlockBuffIDs == undefined ? [] : obj.unlockBuffIDs;
            this.totalGameTimes = (obj.totalGameTimes == undefined || obj.totalGameTimes == null) ? 0 : obj.totalGameTimes;
            this.totalFiniGameTimes = (obj.totalFiniGameTimes == undefined || obj.totalFiniGameTimes == null) ? 0 : obj.totalFiniGameTimes;
            this.gameTimesByChap = (obj.gameTimesByChap == undefined || obj.gameTimesByChap == null) ? [] : obj.gameTimesByChap;
            this.dailyGameTimes = (obj.dailyGameTimes == undefined || obj.dailyGameTimes == null) ? 0 : obj.dailyGameTimes;
            this.dailyPassStageCnt = (obj.dailyPassStageCnt == undefined || obj.dailyPassStageCnt == null) ? 0 : obj.dailyPassStageCnt;
            this.dailyFiniGameTimes = (obj.dailyFiniGameTimes == undefined || obj.dailyFiniGameTimes == null) ? 0 : obj.dailyFiniGameTimes;
            this.dailyDeadStageID = (obj.dailyDeadStageID == undefined || obj.dailyDeadStageID == null) ? 0 : obj.dailyDeadStageID;
            this.dailyStatExpireDate = (obj.dailyStatExpireDate == undefined || obj.dailyStatExpireDate == null) ? 0 : obj.dailyStatExpireDate;
            this.regDate = obj.regDate == undefined ? null : obj.regDate;
            this.canSeeAVRelive = obj.canSeeAVRelive == undefined ? false : obj.canSeeAVRelive;
            this.powerTimestamp = obj.powerTimestamp == undefined ? 0 : obj.powerTimestamp;
            this.technology = obj.technology == undefined ? {} : obj.technology;
            this.technologyCount = obj.technologyCount == undefined ? 0 : obj.technologyCount;
            this.offlineRewardTimestamp_gold = obj.offlineRewardTimestamp_gold == undefined ? 0 : obj.offlineRewardTimestamp_gold;
            this.isCollectGift = obj.isCollectGift == undefined ? false : obj.isCollectGift;
            this.offlineReward = obj.offlineReward == undefined ? {} : obj.offlineReward;
            this.offlineRewardTimeStamp_item = obj.offlineRewardTimeStamp_item == undefined ? 0 : obj.offlineRewardTimeStamp_item;
            this.offlineRewardTimestamp_longTime = obj.offlineRewardTimestamp_longTime == undefined ? 0 : obj.offlineRewardTimestamp_longTime;
            this.lastSignTimeStamp = isNumber$1(obj.lastSignTimeStamp) ? obj.lastSignTimeStamp : 0;
            this.continuousSignCnt = isNumber$1(obj.continuousSignCnt) ? obj.continuousSignCnt : 0;
            this.dailyFreeBonus1Cnt = isNumber$1(obj.dailyFreeBonus1Cnt) ? obj.dailyFreeBonus1Cnt : 0;
            this.dailyFreeBonus2Cnt = isNumber$1(obj.dailyFreeBonus2Cnt) ? obj.dailyFreeBonus2Cnt : 0;
            this.freeBonus1TakeTimeStamp = isNumber$1(obj.freeBonus1TakeTimeStamp) ? obj.freeBonus1TakeTimeStamp : 0;
            this.freeBonus2TakeTimeStamp = isNumber$1(obj.freeBonus2TakeTimeStamp) ? obj.freeBonus2TakeTimeStamp : 0;
            this.freeBonus3TakeTimeStamp = isNumber$1(obj.freeBonus3TakeTimeStamp) ? obj.freeBonus3TakeTimeStamp : 0;
        }
        static resetData() {
            this.setObj({});
            this.saveData(0);
            mm.bag.resetData();
        }
        static isFirstDay() {
            if (!this.regDate) {
                return false;
            }
            let timeStamp = new Date(this.regDate).getTime();
            return Utils.isSameDay(timeStamp, Timer.curMs);
        }
        static isPassedStage7() {
            return !(this.chap == 1 && this.stage <= 7);
        }
        static isPassedStage10() {
            return !(this.chap == 1 && this.stage <= 10);
        }
        static updateLastSignDate(ts) {
            this.lastSignTimeStamp = ts;
            this.saveData(1000);
        }
        static updateContinuousSignCnt(cnt) {
            this.continuousSignCnt = cnt;
            this.saveData(1000);
        }
        static addGold(num) {
            this.gold += num;
            if (this.gold < 0) {
                this.gold = 0;
            }
            this.saveData(1000);
        }
        static addDiamond(num) {
            this.diamond += num;
            if (this.diamond < 0) {
                this.diamond = 0;
            }
            this.saveData(1000);
        }
    }
    UserData.key = "user_data";
    UserData.power = 0;
    UserData.gold = 1000;
    UserData.diamond = 0;
    UserData.chap = 0;
    UserData.selChap = 0;
    UserData.stage = 0;
    UserData.buffs = [];
    UserData.fightGold = 0;
    UserData.fightExp = 0;
    UserData.tankID = 10001;
    UserData.tankLV = 1;
    UserData.unlockTankIDs = [10001];
    UserData.unfiniRec = null;
    UserData.unlockBuffIDs = [];
    UserData.totalGameTimes = 0;
    UserData.totalFiniGameTimes = 0;
    UserData.gameTimesByChap = [];
    UserData.canSeeAVRelive = false;
    UserData.powerTimestamp = 0;
    UserData.technology = {};
    UserData.technologyCount = 0;
    UserData.offlineRewardTimestamp_gold = 0;
    UserData.offlineRewardTimeStamp_item = 0;
    UserData.offlineRewardTimestamp_longTime = 0;
    UserData.offlineReward = {};
    UserData.dataObj = {};
    UserData.tankAtk = 0;
    UserData.tankMaxHp = 0;
    UserData.resumePowerTimer = 0;
    UserData.dailyGameTimes = 0;
    UserData.dailyPassStageCnt = 0;
    UserData.dailyFiniGameTimes = 0;
    UserData.dailyDeadStageID = 0;
    UserData.dailyFreeBonus1Cnt = 0;
    UserData.dailyFreeBonus2Cnt = 0;
    UserData.dailyStatExpireDate = 0;
    UserData.isCollectGift = false;
    UserData.lastSignTimeStamp = 0;
    UserData.continuousSignCnt = 0;
    UserData.freeBonus1TakeTimeStamp = 0;
    UserData.freeBonus2TakeTimeStamp = 0;
    UserData.freeBonus3TakeTimeStamp = 0;

    const numberTransform = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
    class FightViewPVE extends BaseViewLY {
        onAwake() {
            this.joyStick = new JoyStick(this.joyStickBox, cfg.global.joyStickMaxDis, new Laya.Rectangle(0, Laya.stage.height, Laya.stage.width, Laya.stage.height * 0.6));
            this.buffTipBG.visible = false;
            this.pauseBtn.on(Laya.Event.CLICK, this, this.pauseBtnClick);
            this.newPlayerGuideBox.visible = false;
            this.handUp.visible = false;
            this.handRight.visible = false;
        }
        onEnable() {
            this.changeGold(UserData.fightGold);
            this.joyStick.setJoyStickState(true);
            gEvent.on(FightEvent.showDragJoyTip, this, this.onEvtShowDragJoyTip);
            gEvent.on(FightEvent.hideDragJoyTip, this, this.onEvtHideDragJoyTip);
            gEvent.on(FightEvent.showDragRightJoyTip, this, this.onEvtShowDragRightJoyTip);
            gEvent.on(FightEvent.hideDragRightJoyTip, this, this.onEvtHideDragRightJoyTip);
            gEvent.on(FightEvent.showRelease2FireTip, this, this.onEvtShowRelease2FireTip);
            gEvent.on(FightEvent.hideRelease2FireTip, this, this.onEvtHideRelease2FireTip);
            if (UserData.isNewPlayer()) {
                if (FightScenePVE.newPlayerSeqInfo[1].isCheckHalo2 == false) {
                    this.onEvtShowDragJoyTip();
                }
            }
        }
        onDisable() {
            this.joyStick.setJoyStickState(false);
            gEvent.offAllCaller(this);
        }
        onClickExit() {
            mm.fight.exitFight();
        }
        showPauseBtn(stage) {
            if (stage == 0 || UserData.isNewPlayer()) {
                this.pauseBtn.visible = false;
            }
            else {
                this.pauseBtn.visible = true;
            }
        }
        changeExp(curExp, upgradeExp, isTween = true, tweenTime = 0.25) {
            let value = curExp / upgradeExp;
            Tween.clearAll(this.expProgress);
            if (isTween) {
                Tween.to(this.expProgress, { value: value }, tweenTime * 1000);
            }
            else {
                this.expProgress.value = value;
            }
        }
        changeLV(lv) {
            if (lv >= cfg.global.levelExp.length + 1) {
                this.lvText.text = "Lv.Max";
            }
            else {
                this.lvText.text = "Lv." + lv.toString();
            }
        }
        showBossProgress(state) {
            if (state) {
                this.setBossHPProgress(1, 1, false);
            }
            this.bossHPProgress.visible = state;
            this.expProgress.visible = !state;
        }
        setBossHPProgress(curValue, totalValue, isTween = true, tweenTime = 0.25) {
            let value = curValue / totalValue;
            Tween.clearAll(this.bossHPProgress);
            if (isTween) {
                Tween.to(this.bossHPProgress, { value: value }, tweenTime * 1000);
            }
            else {
                this.bossHPProgress.value = value;
            }
        }
        changeGold(gold) {
            this.goldText.text = gold.toString();
        }
        showTip(buffStr, tipStr, duration) {
            this.buffTipBG.visible = true;
            this.buffText.text = buffStr;
            this.tipText.text = tipStr;
            this.aniShowBuff.play();
            this.aniShowBuff.once(Laya.Event.COMPLETE, this, function () {
                if (this.buffTipBG && !this.buffTipBG.destroyed) {
                    this.buffTipBG.visible = false;
                }
            });
        }
        setJoyStickState(state) {
            this.joyStick.setJoyStickState(state);
        }
        pauseBtnClick() {
            return __awaiter(this, void 0, void 0, function* () {
                this.visible = false;
                yield mm.fight.showFightPauseViewPVE();
                mm.fight.scene.gamePause();
            });
        }
        playBossTipAni(state) {
            if (state) {
                Timer.once(300, this.bossTipAni, () => {
                    this.bossTipAni.play(0, false);
                });
            }
            else {
                this.bossTipAni.stop();
                this.bossTip.visible = false;
            }
        }
        playSupplyTipAni(state) {
            if (state) {
                Timer.once(300, this.supplyTipAni, () => {
                    this.supplyTipAni.play(0, false);
                });
            }
            else {
                this.supplyTipAni.stop();
                this.supplyTip.visible = false;
            }
        }
        playPassChapTipAni(state, chap) {
            if (state) {
                this.passChapTipLabel.text = "" + numberTransform[chap];
                this.passChapTipAni.play(0, false);
            }
            else {
                this.passChapTipAni.stop();
                this.passChapTip.visible = false;
            }
        }
        playPassStageTipAni(state, chap, stage) {
            if (state && stage != 0) {
                this.passStageTipLabel.text = `第${numberTransform[chap]}章 第${stage}关`;
                Timer.once(300, this.passStageTipAni, () => {
                    this.passStageTipAni.play(0, false);
                });
            }
            else {
                this.passStageTipAni.stop();
                this.passStageTip.visible = false;
            }
        }
        onEvtShowDragJoyTip() {
            this.handUp.visible = true;
        }
        onEvtHideDragJoyTip() {
            this.handUp.visible = false;
        }
        onEvtShowDragRightJoyTip() {
            this.handRight.visible = true;
        }
        onEvtHideDragRightJoyTip() {
            this.handRight.visible = false;
        }
        onEvtShowRelease2FireTip() {
            this.newPlayerGuideBox.visible = true;
        }
        onEvtHideRelease2FireTip() {
            this.newPlayerGuideBox.visible = false;
        }
    }

    class FightEvilView extends BaseViewLY {
        onAwake() {
            this.unDamageGetBuffBtn.on(Laya.Event.CLICK, this, this.undamageGetBuffBtnClick);
            this.rejectBtn.on(Laya.Event.CLICK, this, this.rejectBtnClick);
            this.getBuffBtn.on(Laya.Event.CLICK, this, this.getBuffBtnClick);
        }
        onEnable() {
            mm.fight.setJoyStickStatePVE(false);
            mm.fight.scene.gamePause();
            this.buffId = BuffManager.randomGetBuffId(BuffScene.evilScene);
            this.tipText.text = `失去 ${Math.round(MainRole.inst.attr.hpMax * cfg.global.evilBuffLoseHPPerc)} 生命上限，获得 ${cfg.buff[this.buffId].name}`;
            this.buffIcon.getComponent(Laya.Script).initShow(this.buffId);
            Platform.inst.showBanner(BannerID.fight);
        }
        onDisable() {
            super.onDisable();
            mm.fight.setJoyStickStatePVE(true);
            mm.fight.scene.gameResume();
            gEvent.event(FightEvent.takeBonusFini);
            Platform.inst.hideBanner();
        }
        undamageGetBuffBtnClick() {
            Platform.inst.showVideoOrShare(VideoID.common, ShareKeys.buff).then(() => {
                this.undamageGetBuff(true);
            }).catch(() => {
                this.undamageGetBuff(false);
                ViewFlyword.showTip("需完整观看才能获取奖励哦");
            });
        }
        undamageGetBuff(state) {
            if (state) {
                console.log("[Evil Buff Scene] get Buff:", this.buffId);
                MainRole.inst.addBuff(this.buffId);
                let buff = cfg.buff[this.buffId];
                mm.fight.fightView.showTip(buff.name, buff.des, cfg.global.buffTipDuration);
                mm.fight.scene.onTakeStageBonus();
                ViewManagerLY.close(ViewID.evil.name);
            }
        }
        rejectBtnClick() {
            ViewManagerLY.close(ViewID.evil.name);
        }
        getBuffBtnClick() {
            console.log("[Evil Buff Scene] get Buff:", this.buffId);
            MainRole.inst.addBuff(cfg.global.cutDownHpBuffId);
            MainRole.inst.addBuff(this.buffId);
            let buff = cfg.buff[this.buffId];
            mm.fight.fightView.showTip(buff.name, buff.des, cfg.global.buffTipDuration);
            ViewManagerLY.close(ViewID.evil.name);
            mm.fight.scene.onTakeStageBonus();
        }
    }

    class FightRefitView extends BaseViewLY {
        constructor() {
            super(...arguments);
            this.allListBuffId = [];
        }
        onAwake() {
            this.a1ListBtn.on(Laya.Event.CLICK, this, this.listBtnClick, [0]);
            this.a2ListBtn.on(Laya.Event.CLICK, this, this.listBtnClick, [1]);
        }
        onEnable() {
            mm.fight.setJoyStickStatePVE(false);
            mm.fight.scene.gamePause();
            this.initList();
        }
        onDisable() {
            super.onDisable();
            mm.fight.setJoyStickStatePVE(true);
            mm.fight.scene.gameResume();
            gEvent.event(FightEvent.takeBonusFini);
        }
        initList() {
            this.a1Text.visible = true;
            this.a2Text.visible = true;
            let id1 = BuffManager.randomGetBuffId(BuffScene.refitScene);
            this.a1List.cells[0].getChildByName("abilityIcon").skin = `${remoteUrl}/${cfg.global.resVer}/game/icon/${cfg.buff[id1].icon}.png`;
            this.a1Text.text = cfg.buff[id1].name;
            this.allListBuffId[0] = id1;
            let id2 = cfg.global.defaultRefitBuffId;
            this.a2List.cells[0].getChildByName("abilityIcon").skin = `${remoteUrl}/${cfg.global.resVer}/game/icon/${cfg.buff[id2].icon}.png`;
            this.a2Text.text = cfg.buff[id2].name;
            this.allListBuffId[1] = id2;
        }
        listBtnClick(index) {
            console.log("[Refit Buff Scene] get Buff:", this.allListBuffId[index]);
            MainRole.inst.addBuff(this.allListBuffId[index]);
            let buff = cfg.buff[this.allListBuffId[index]];
            mm.fight.fightView.showTip(buff.name, buff.des, cfg.global.buffTipDuration);
            ViewManagerLY.close(ViewID.refit.name);
            mm.fight.scene.onTakeStageBonus();
        }
    }

    class SkillIcon extends Laya.Script {
        initShow(buffID) {
            return __awaiter(this, void 0, void 0, function* () {
                let buffIcon = this.owner.getChildByName("buffIcon");
                buffIcon.skin = CommonRes.icon(cfg.buff[buffID].icon);
            });
        }
    }

    class FightPauseViewPVE extends BaseViewLY {
        onAwake() {
            this.continueGameBtn.on(Laya.Event.CLICK, this, this.continueGameBtnClick);
            this.backHomeBtn.on(Laya.Event.CLICK, this, this.backHomeBtnClick);
            this.abilityList.renderHandler = Laya.Handler.create(this, this.listRender, null, false);
            this.abilityList.vScrollBarSkin = "";
        }
        onEnable() {
            mm.fight.setJoyStickStatePVE(false);
            mm.fight.scene.gamePause();
            this.initList();
            Platform.inst.showBanner(BannerID.fight);
        }
        onDisable() {
            mm.fight.scene.gameResume();
            Platform.inst.hideBanner();
        }
        initList() {
            return __awaiter(this, void 0, void 0, function* () {
                let boxs = [];
                for (let item of MainRole.inst.buffs) {
                    if (cfg.buff[item].scene[0] != -1) {
                        boxs.push(item);
                    }
                }
                this.abilityList.array = boxs;
                this.abilityList.refresh();
            });
        }
        continueGameBtnClick() {
            return __awaiter(this, void 0, void 0, function* () {
                mm.fight.setJoyStickStatePVE(true);
                ViewManagerLY.close(ViewID.fightPause.name);
                mm.fight.getFightViewPVE().visible = true;
                mm.fight.scene.gameResume();
            });
        }
        backHomeBtnClick() {
            return __awaiter(this, void 0, void 0, function* () {
                UserData.saveEndData();
                ViewManagerLY.close(ViewID.fightPause.name);
                FightEndViewPVE.showView(mm.fight.chapIdx, mm.fight.stageIdx - 2);
            });
        }
        listRender(cell, index) {
            cell.getComponent(SkillIcon).initShow(cell.dataSource);
        }
    }

    class FightReliveViewPVE extends BaseViewLY {
        constructor() {
            super(...arguments);
            this.timeDownOutBGSpeed = 30;
            this.timeDownInBGSpeed = 30;
        }
        onAwake() {
            this.avBtn.on(Laya.Event.CLICK, this, this.avBtnClick);
            this.giveUpBtn.on(Laya.Event.CLICK, this, this.giveUpBtnClick);
            this.guessLike1List.renderHandler = Laya.Handler.create(this, this.guessLike1ListRender, null, false);
            this.guessLike2List.renderHandler = Laya.Handler.create(this, this.guessLike2ListRender, null, false);
        }
        onEnable() {
            this.timeDownTimer = 0;
            this.reliveTimeDown = cfg.global.reliveTimeDown;
            this.timeDownLabel.value = this.reliveTimeDown.toString();
            this.timeDownInBG.rotation = 0;
            this.timeDownOutBG.rotation = 0;
            mm.fight.setJoyStickStatePVE(false);
            mm.fight.scene.gamePause();
            if (UserData.isNewPlayer() == true) {
                this.avIcon.visible = false;
                this.avLabel.centerX = 5;
            }
            else {
                this.avIcon.visible = true;
                this.avLabel.centerX = 30;
                Timer.frameLoop(1, this, this.timeDown);
            }
            this.initGuessLike();
            this.clearUnfinishTripRec();
            Platform.inst.showBanner(BannerID.relive);
        }
        drawCircle(percent) {
            if (!this.pieMask) {
                this.pieMask = this.pieMaskBox.graphics.drawPie(156, 156, 156, -90 - 360 * percent, -90, "#ff0000");
            }
            else {
                if (percent != 0) {
                    this.pieMask.startAngle = -90 - 360 * percent;
                }
                else {
                    this.pieMask.startAngle = -90 - 360 * percent - 1;
                }
                this.pieMaskBox.repaint();
            }
        }
        onBeforeClose() {
            Timer.clearAll(this);
            mm.fight.setJoyStickStatePVE(true);
            mm.fight.scene.gameResume();
            Platform.inst.hideBanner();
        }
        initGuessLike() {
        }
        guessLike1ListRender(cell, index) {
            this.guessLikeListRender(cell, index);
        }
        guessLike2ListRender(cell, index) {
            this.guessLikeListRender(cell, index);
        }
        guessLikeListRender(cell, index) {
            let guessLikeData = cell.dataSource;
            let icon = cell.getChildByName("icon");
            let name = cell.getChildByName("name");
            icon.skin = guessLikeData.show_config.image;
            name.text = guessLikeData.show_config.title;
            icon.offAllCaller(icon);
            icon.on(Laya.Event.CLICK, icon, () => {
                wx.tmSDK.navigateToTiger({
                    tiger_position_id: TigerID.relive_guessLike,
                    creative_id: guessLikeData.creative_id
                })
                    .then(data => {
                    console.log("点击后返回数据 ：", data);
                    this.guessLike1List.array = data[0].list.slice(0, 4);
                    this.guessLike2List.array = data[0].list.slice(4, 8);
                    this.guessLike1List.refresh();
                    this.guessLike2List.refresh();
                });
            });
        }
        avBtnClick() {
            if (UserData.isNewPlayer() == true) {
                MainRole.inst.relive(false);
                this.close();
                return;
            }
            Timer.clearAll(this);
            Platform.inst.showVideoOrShare(VideoID.relive, ShareKeys.revive).then(() => {
                this.getRelive(true);
            }).catch(() => {
                this.getRelive(false);
                ViewFlyword.showTip("需完整观看才能获取奖励哦");
            });
        }
        getRelive(state) {
            if (state) {
                UserData.canSeeAVRelive = false;
                this.continueUnfinishTripRec();
                MainRole.inst.relive(false);
                this.close();
            }
            else {
                Timer.frameLoop(1, this, this.timeDown);
            }
        }
        giveUpBtnClick() {
            Timer.clearAll(this);
            this.close();
            UserData.saveEndData();
            FightEndViewPVE.showView(mm.fight.chapIdx, mm.fight.stageIdx - 2);
        }
        timeDown() {
            this.timeDownTimer += Timer.deltaS;
            if (this.timeDownTimer >= 1) {
                if (this.reliveTimeDown <= 0) {
                    this.giveUpBtnClick();
                    this.drawCircle(1);
                    this.close();
                    return;
                }
                --this.reliveTimeDown;
                this.timeDownTimer = 0;
                this.timeDownLabel.value = this.reliveTimeDown.toString();
            }
            this.drawCircle(1 - this.timeDownTimer);
        }
        clearUnfinishTripRec() {
            this.tempUnfiniRec = UserData.unfiniRec;
            UserData.unfiniRec = null;
            UserData.saveData(0);
        }
        continueUnfinishTripRec() {
            UserData.unfiniRec = this.tempUnfiniRec;
            this.tempUnfiniRec = null;
            UserData.saveData(0);
        }
    }

    class TecTipsView extends BaseViewLY {
        onAwake() {
            this.tipBox.on(Laya.Event.CLICK, this, this.closeClick);
        }
        onEnable() {
            this.titleLabel.text = TecTipsView.title;
            this.icon.skin = TecTipsView.icon;
            this.desLabel.text = TecTipsView.des;
            this.nameLabel.text = TecTipsView.title;
        }
        static showView(title, icon, des) {
            return __awaiter(this, void 0, void 0, function* () {
                this.title = title;
                this.icon = icon;
                this.des = des;
                yield mm.main.showTecTipView();
            });
        }
        closeClick() {
            this.close();
        }
    }

    class EquipDescView extends BaseViewLY {
        constructor() {
            super(...arguments);
            this.attrXSpace = 25;
            this.attrFontWidth = 25;
            this.attrTransition = {
                atk: "攻击",
                atkRate: "攻击比例",
                hp: "生命",
                DRRate: "伤害减免",
                CDRRate: "碰撞伤害减免",
                BDRRate: "子弹伤害减免",
                dodge: "闪避率",
                crit: "暴击率",
                critDam: "暴击伤害",
                aspd: "攻击速度",
                meleeAtk: "近战伤害",
                remoteAtk: "远程伤害",
            };
            this.quaTransition = ["普通", "精良", "稀有", "史诗", "传说", "神话"];
            this.quaColor = ["#ffffff", "#4ceb54", "#5dbcfe", "#f264ff", "#ffba41", "#ff6161"];
        }
        static showEquipDescView(gridType, id, redFunc, greenFunc, equipPart, equipIdx, itemType) {
            return __awaiter(this, void 0, void 0, function* () {
                let view = yield mm.main.showEquipDescView();
                view.showHand();
                view.alpha = 0;
                view.redBtn.offAll(Laya.Event.CLICK);
                view.greenBtn.offAll(Laya.Event.CLICK);
                view.redBtn.on(Laya.Event.CLICK, this, view.redBtnClick.bind(view), [equipIdx, equipPart, redFunc]);
                view.greenBtn.on(Laya.Event.CLICK, this, view.greenBtnClick.bind(view), [equipPart, greenFunc, id]);
                switch (itemType) {
                    case ItemType.equipment:
                        view.equipBox.visible = true;
                        switch (gridType) {
                            case GridType.roleEquip:
                                view.showRoleEquip(equipPart);
                                break;
                            case GridType.roleStore:
                                view.showRoleStore(id);
                                break;
                            default:
                                throw "[EquipDescView] illegal gridType: " + gridType;
                        }
                        view.refreshAttrList(equipPart, id);
                        break;
                    case ItemType.material:
                        view.matBox.visible = true;
                        view.showMat(id);
                        break;
                }
                view.alpha = 1;
            });
        }
        onAwake() {
            this.closeBtn.on(Laya.Event.CLICK, this, this.closeBtnClick);
            this.matBoxCloseBtn.on(Laya.Event.CLICK, this, this.closeBtnClick);
            this.attrList.renderHandler = Laya.Handler.create(this, this.attrListRender, null, false);
        }
        onDisable() {
            this.matBoxIcon.visible = false;
            this.equIcon.visible = false;
            this.matIcon.visible = false;
        }
        showHand(state) {
            let part = mm.bag.getRoleEquipPart(EquipPart.weapon);
            if (state != undefined) {
                this.upgradeHand.visible = state;
                return;
            }
            if (part.lv == 0 && UserData.gold >= 1001) {
                this.upgradeHand.visible = true;
            }
            else {
                this.upgradeHand.visible = false;
            }
        }
        redBtnClick(idx, equipPart, func) {
            func(idx, equipPart);
            this.closeBtnClick();
        }
        greenBtnClick(equipPart, func, id) {
            let b = func(equipPart);
            if (equipPart != undefined && equipPart != null) {
                b && this.playLevelUpAni();
                b && this.showHand(false);
                b && AudioManager.playSoundRandom(cfg.global.comEquipMusic);
                this.showRoleEquip(equipPart);
                this.refreshAttrList(equipPart, id);
            }
        }
        refreshAttrList(equipPart, id) {
            let arr = [];
            let item = cfg.item[id];
            if (equipPart == undefined || equipPart == null) {
                arr[0] = [this.attrTransition[item.intenAttr], item[item.intenAttr]];
            }
            else {
                arr[0] = [this.attrTransition[item.intenAttr], (item[item.intenAttr] + item.intenValue * mm.bag.getRoleEquipPart(equipPart).lv).toString(), item.intenValue.toString(), equipPart];
            }
            for (let type of item.attrType) {
                if (type != item.intenAttr) {
                    arr.push([this.attrTransition[type], item[type]]);
                }
            }
            this.attrList.array = arr;
            this.attrList.refresh();
        }
        attrListRender(cell, idx) {
            let title = cell.getChildByName("title");
            let val1 = cell.getChildByName("val1");
            let lC = cell.getChildByName("lC");
            let rC = cell.getChildByName("rC");
            let val2 = cell.getChildByName("val2");
            lC.visible = false;
            rC.visible = false;
            val2.visible = false;
            let data = cell.dataSource;
            title.text = data[0];
            let data1Str = data[1].toString();
            if (data1Str.indexOf('.') != -1) {
                val1.text = "+" + (Math.floor(Number(data[1]) * 100)) + "%";
            }
            else {
                val1.text = "+" + data1Str;
            }
            val1.x = this.attrXSpace + data[0].length * this.attrFontWidth;
            if (data.length == 4 && mm.bag.canUpgradeEquip(data[3])) {
                lC.visible = true;
                rC.visible = true;
                val2.visible = true;
                lC.x = val1.x + data[1].length * this.attrFontWidth;
                val2.text = "+" + data[2];
                val2.x = lC.x + lC.text.length * this.attrFontWidth - 5;
                if (val2.text.length == 2) {
                    rC.x = val2.x + data[2].length * this.attrFontWidth + 15;
                }
                else {
                    rC.x = val2.x + data[2].length * this.attrFontWidth + 5;
                }
            }
        }
        showMat(id) {
            let data = cfg.item[id];
            this.matBoxTitle.text = data.name;
            this.matBoxDes.text = data.desc;
            Resource.load(mm.bag.itemIconRes(data.icon)).then(res => {
                if (res) {
                    this.matBoxIcon.visible = true;
                    this.matBoxIcon.texture = res;
                }
            });
            this.matBoxCount.text = "数量:" + mm.bag.getMat(id).count;
        }
        showRoleEquip(equipPart) {
            this.lvLabel.visible = true;
            let data = cfg.item[mm.bag.getRoleEquipPart(equipPart).id];
            this.titleLabel.text = "";
            this.quaLabel.text = "";
            this.titleLabel.text = data.name;
            this.quaLabel.text = this.quaTransition[data.qua];
            this.titleLabel.color = this.quaColor[data.qua];
            this.quaLabel.color = this.quaColor[data.qua];
            this.equIconBG.skin = mm.bag.itemQuaRes(data.qua);
            Resource.load(mm.bag.itemIconRes(data.icon)).then(res => {
                if (res) {
                    this.equIcon.visible = true;
                    this.equIcon.texture = res;
                }
            });
            this.descLabel.text = data.desc;
            this.featureDesc.text = data.desc;
            let equipLv = mm.bag.getRoleEquipPart(equipPart).lv;
            this.lvLabel.text = `等级${equipLv}`;
            let spoolerID = cfg.global.equipPartToSpooler[data.part];
            let spooler = cfg.item[spoolerID];
            Resource.load(mm.bag.itemIconRes(spooler.icon)).then(res => {
                if (res) {
                    this.matIcon.visible = true;
                    this.matIcon.texture = res;
                }
            });
            this.matDesc.text = spooler.name + ":";
            if (mm.bag.canUpgradeEquip(equipPart)) {
                this.greenBtn.gray = false;
            }
            else {
                this.greenBtn.gray = true;
            }
            if (cfg.level[equipLv + 1]) {
                let spoolerCount = mm.bag.getspoolerCount(spoolerID);
                let spoolerCost = cfg.level[equipLv + 1].scrollCost;
                this.matValue.text = spoolerCount + "/" + spoolerCost;
                if (spoolerCount >= spoolerCost) {
                    this.matValue.color = "#3de427";
                }
                else {
                    this.matValue.color = "#fb081b";
                }
                this.greenValue.text = "x" + cfg.level[equipLv + 1].goldCost.toString();
            }
            else {
                this.matValue.text = "0/0";
                this.greenValue.text = "x????";
                this.matValue.color = "#3de427";
            }
            this.redImg.skin = "game/view/Main/zb_txt_7.png";
        }
        showRoleStore(id) {
            this.lvLabel.visible = false;
            this.greenBtn.gray = false;
            let data = cfg.item[id];
            this.titleLabel.text = "";
            this.quaLabel.text = "";
            this.titleLabel.text = data.name;
            this.quaLabel.text = this.quaTransition[data.qua];
            this.titleLabel.color = this.quaColor[data.qua];
            this.quaLabel.color = this.quaColor[data.qua];
            this.equIconBG.skin = mm.bag.itemQuaRes(data.qua);
            Resource.load(mm.bag.itemIconRes(data.icon)).then(res => {
                if (res) {
                    this.equIcon.visible = true;
                    this.equIcon.texture = res;
                }
            });
            this.descLabel.text = data.desc;
            this.featureDesc.text = data.desc;
            let spoolerID = cfg.global.equipPartToSpooler[data.part];
            let spooler = cfg.item[spoolerID];
            Resource.load(mm.bag.itemIconRes(spooler.icon)).then(res => {
                if (res) {
                    this.matIcon.visible = true;
                    this.matIcon.texture = res;
                }
            });
            this.matDesc.text = spooler.name;
            let spoolerCount = mm.bag.getspoolerCount(spoolerID);
            let spoolerCost = cfg.level[1].scrollCost;
            this.matValue.text = spoolerCount + "/" + spoolerCost;
            if (spoolerCount >= spoolerCost) {
                this.matValue.color = "#3de427";
            }
            else {
                this.matValue.color = "#fb081b";
            }
            this.greenValue.text = "x" + cfg.level[1].goldCost.toString();
            this.redImg.skin = "game/view/Main/zb_txt_9.png";
        }
        closeBtnClick() {
            this.equipBox.visible = false;
            this.matBox.visible = false;
            mm.main.mainView.upgradeShowHand();
            this.close();
        }
        playLevelUpAni() {
            return __awaiter(this, void 0, void 0, function* () {
                this.iconBoxAni();
                this.starAni();
                this.lightAni();
            });
        }
        iconBoxAni() {
            return __awaiter(this, void 0, void 0, function* () {
                Tween.clearAll(this.iconBox);
                this.iconBox.scale(1.1, 1.1);
                yield Tween.to(this.iconBox, { scaleX: 1.25, scaleY: 1.25 }, 208);
                yield Tween.to(this.iconBox, { scaleX: 1.1, scaleY: 1.1 }, 125);
            });
        }
        starAni() {
            return __awaiter(this, void 0, void 0, function* () {
                Tween.clearAll(this.star);
                this.star.scale(0, 0);
                this.star.rotation = 0;
                yield Tween.to(this.star, { rotation: 20 }, 166);
                yield Tween.to(this.star, { rotation: 40, scaleX: 2, scaleY: 2 }, 166);
                yield Tween.to(this.star, { rotation: 60, scaleX: 0, scaleY: 0 }, 166);
            });
        }
        lightAni() {
            return __awaiter(this, void 0, void 0, function* () {
                Tween.clearAll(this.light);
                this.light.alpha = 0.5;
                this.light.x = -180;
                yield Tween.to(this.light, { alpha: 1, x: 120 }, 333);
            });
        }
    }

    class ComEquipView extends BaseViewLY {
        constructor() {
            super(...arguments);
            this.isAniPlay = false;
        }
        onAwake() {
            this.itemList.renderHandler = Laya.Handler.create(this, this.itemListRender, null, false);
            this.itemList.vScrollBarSkin = "";
            this.comBtn.on(Laya.Event.CLICK, this, this.comBtnClick);
            this.closeBtn.on(Laya.Event.CLICK, this, this.closeBtnClick);
            this.midGrid.on(Laya.Event.CLICK, this, this.removeEquip, [comGridType.middle]);
            this.leftGrid.on(Laya.Event.CLICK, this, this.removeEquip, [comGridType.left]);
            this.rightGrid.on(Laya.Event.CLICK, this, this.removeEquip, [comGridType.right]);
            this.girds = [this.midGrid, this.leftGrid, this.rightGrid];
        }
        static showView() {
            return __awaiter(this, void 0, void 0, function* () {
                let view = yield mm.main.showComEquipView();
                view.alpha = 0;
                mm.bag.sortItemOnCom();
                view.refreshItemList();
                view.alpha = 1;
            });
        }
        itemListRender(cell, index) {
            let id = cell.dataSource;
            let data = cfg.item[id];
            let bg = cell.getChildByName("bg");
            let icon = cell.getChildByName("icon");
            let comEquip = cell.getChildByName("comEquip");
            let lockEquip = cell.getChildByName("lockEquip");
            let redDot = cell.getChildByName("redDot");
            if (this.canComEquipIds) {
                if (this.canComEquipIds.indexOf(id + "") != -1) {
                    redDot.visible = true;
                }
                else {
                    redDot.visible = false;
                }
            }
            else {
                redDot.visible = false;
            }
            icon.skin = mm.bag.itemIconRes(data.icon);
            bg.skin = mm.bag.itemQuaRes(data.qua);
            let equipPart = mm.bag.getComEquipGrid(comGridType.middle) || mm.bag.getComEquipGrid(comGridType.left) || mm.bag.getComEquipGrid(comGridType.right);
            if ((equipPart != null || equipPart != undefined) && equipPart.id != id) {
                lockEquip.visible = true;
                redDot.visible = false;
            }
            else {
                lockEquip.visible = false;
            }
            if (mm.bag.checkEquipInComGrid(index)) {
                comEquip.visible = true;
            }
            else {
                comEquip.visible = false;
            }
            cell.offAll(Laya.Event.CLICK);
            cell.on(Laya.Event.CLICK, this, (id, index, comEquip, lockEquip) => {
                if (this.isAniPlay == true || lockEquip.visible == true)
                    return;
                if (comEquip.visible) {
                    comEquip.visible = false;
                    let grid = mm.bag.getComEquipGridTypeByIndex(index);
                    if (grid != -1) {
                        this.removeEquip(grid);
                    }
                }
                else {
                    if (this.addEquip(id, index)) {
                        comEquip.visible = true;
                    }
                }
                this.refreshItemList();
            }, [id, index, comEquip, lockEquip]);
        }
        comBtnClick() {
            if (this.comBtn.gray == true)
                return;
            let id = mm.bag.comEquip();
            if (id != -1) {
                this.desLabel.text = "选择你想合成的装备吧！";
                this.comBtn.gray = true;
                this.closeBtn.visible = false;
                this.comBtn.visible = false;
                this.isAniPlay = true;
                this.ani1.play(0, false);
                Timer.once(1166, this, () => {
                    this.resetComGrid(comGridType.left);
                    this.resetComGrid(comGridType.right);
                });
                Timer.once(2170, this, () => {
                    this.closeBtn.visible = true;
                    this.comBtn.visible = true;
                    this.resetAllComGrid();
                    this.refreshItemList();
                    mm.bag.sortItemOnCom();
                    let equip = cfg.item[id];
                    TipsBoxView.showView([
                        {
                            icon: mm.bag.itemIconRes(equip.icon),
                            displayIndex: equip.qua,
                            desc: equip.name,
                        }
                    ]);
                    AudioManager.playSoundRandom(cfg.global.comEquipMusic);
                    this.isAniPlay = false;
                });
            }
        }
        removeEquip(gridType) {
            let gridData = mm.bag.getComEquipGrid(gridType);
            if (gridData == undefined || gridData == null)
                return;
            this.refreshItemList();
            mm.bag.removeComEquip(gridType);
            this.resetComGrid(gridType);
            if (mm.bag.hasComEquip() == false) {
                this.desLabel.text = "选择你想合成的装备吧！";
                this.comBtn.gray = true;
            }
        }
        refreshItemList() {
            this.canComEquipIds = mm.bag.getCanComEquipIds();
            this.itemList.array = mm.bag.getEquipArr();
            this.itemList.refresh();
        }
        addEquip(equipID, index) {
            let equipGrid = mm.bag.getGrid();
            if (equipGrid == -1 || this.isAniPlay == true)
                return false;
            let data = cfg.item[equipID];
            mm.bag.addComEquip(equipID, index, equipGrid);
            let grid = this.girds[equipGrid].getChildAt(0);
            grid.getChildByName("bg").skin = mm.bag.itemQuaRes(data.qua);
            grid.getChildByName("icon").skin = mm.bag.itemIconRes(data.icon);
            grid.visible = true;
            if (mm.bag.canComEquip()) {
                this.desLabel.text = "点击合成新装备吧！";
                this.comBtn.gray = false;
            }
            else {
                this.desLabel.text = "放入相同的装备吧！";
            }
            return true;
        }
        resetComGrid(gridType) {
            let box = this.girds[gridType].getChildAt(0);
            let icon = box.getChildByName("icon");
            box.visible = false;
            icon.x = 59;
            icon.y = 59;
            icon.alpha = 1;
            icon.scale(1, 1);
        }
        resetAllComGrid() {
            for (let l = 0; l < this.girds.length; l++) {
                this.resetComGrid(l);
            }
        }
        closeBtnClick() {
            this.reset();
            this.close();
        }
        reset() {
            mm.bag.clearComEquip();
            this.resetAllComGrid();
            this.comBtn.gray = true;
            this.desLabel.text = "选择你想合成的装备吧！";
        }
    }

    function setRemoteTexture(img, url) {
        if (!url) {
            return;
        }
        Resource.load(url).then((res) => {
            img.texture = res;
        });
    }
    class SignView extends BaseViewLY {
        constructor() {
            super(...arguments);
            this._signListData = [];
        }
        static getCurMs() {
            return Timer.curMs;
        }
        static isTodaySign() {
            let tsLastSign = UserData.lastSignTimeStamp || 0;
            return !(SignView.getCurMs() > tsLastSign && !Utils.isSameDay(SignView.getCurMs(), tsLastSign));
        }
        onAwake() {
            this.updateContentTop();
            this.ctorSignData();
            this.closeBtn.on(Laya.Event.CLICK, this, this.onClickCloseBtn);
            this.rewardBtn.on(Laya.Event.CLICK, this, this.onClickRewardBtn);
            this.doubleRewardBtn.on(Laya.Event.CLICK, this, this.onClickDoubleRewardBtn);
            this.initRewardList();
        }
        onEnable() {
            this.updateSignData();
            this.refreshRewardList();
            Platform.inst.showBanner(BannerID.sign);
        }
        onDisable() {
            Platform.inst.hideBanner();
        }
        updateContentTop() {
            if (Laya.stage.height > Laya.stage.designHeight) {
                this.content.top = this.content.top + (Laya.stage.height - Laya.stage.designHeight) / 2;
            }
        }
        ctorSignData() {
            const signCfg = cfg.signReward;
            for (let i = 1; i < 7; i++) {
                let obj = {
                    dayIdx: i,
                    config: signCfg[i.toString()],
                    bTaken: false,
                };
                this._signListData.push(obj);
            }
            this._day7SignData = {
                dayIdx: 7,
                config: signCfg["7"],
                bTaken: false,
            };
        }
        updateSignData() {
            let continuousSignCnt = UserData.continuousSignCnt || 0;
            let tsLastSign = UserData.lastSignTimeStamp || 0;
            this._canSignDayIdx = undefined;
            if (SignView.getCurMs() > tsLastSign && !Utils.isSameDay(SignView.getCurMs(), tsLastSign)) {
                if (continuousSignCnt == 7) {
                    continuousSignCnt = 0;
                    UserData.updateContinuousSignCnt(continuousSignCnt);
                    this._canSignDayIdx = 1;
                }
                else {
                    this._canSignDayIdx = continuousSignCnt + 1;
                }
            }
            if (continuousSignCnt < 7) {
                for (let i = 0; i < 6; i++) {
                    this._signListData[i].bTaken = i + 1 <= continuousSignCnt;
                }
            }
            this._day7SignData.bTaken = continuousSignCnt == 7;
        }
        initRewardList() {
            this.rewardList.renderHandler = Laya.Handler.create(this, this.refreshRewardItem, null, false);
            this.rewardList.array = this._signListData;
        }
        refreshRewardItem(cell, idx) {
            cell.offAll(Laya.Event.CLICK);
            let data = idx < 6 ? this._signListData[idx] : this._day7SignData;
            cell.getChildByName("dayIdxLabel").text = `第${data.dayIdx}天`;
            cell.getChildByName("rewardNum").text = `x${data.config.Item[1]}`;
            let rewardBGResUrl = `game/view/Sign/${data.config.baseMap}.png`;
            setRemoteTexture(cell.getChildByName("rewardBG"), rewardBGResUrl);
            let rewardIconResUrl = CommonRes.getItemIconUrlByID(data.config.Item[0]);
            let rewardIcon = cell.getChildByName("rewardIcon");
            setRemoteTexture(rewardIcon, rewardIconResUrl);
            Resource.load(rewardIconResUrl).then((res) => {
                rewardIcon.texture = res;
                rewardIcon.width = res.width;
                rewardIcon.height = res.height;
                rewardIcon.getComponent(Laya.Widget).resetLayout();
            });
            let bToBeSign = data.dayIdx == this._canSignDayIdx;
            cell.getChildByName("selBorder").visible = bToBeSign;
            let rewardLight = cell.getChildByName("rewardLight");
            rewardLight.visible = bToBeSign;
            if (bToBeSign) {
                let tweenObj = Laya.Tween.to(rewardLight, { rotation: 360 }, 3000, undefined, Laya.Handler.create(undefined, () => { rewardLight.rotation = 0; }, undefined, false), undefined, undefined, false);
                tweenObj.repeat = 0;
            }
            else {
                Laya.Tween.clearAll(rewardLight);
            }
            cell.getChildByName("grayMask").visible = data.bTaken;
            cell.getChildByName("takenIcon").visible = data.bTaken;
            cell.on(Laya.Event.CLICK, this, () => { this.onClickSignReward(data.dayIdx); });
        }
        refreshRewardList() {
            this.rewardList.refresh();
            this.refreshRewardItem(this.day7Reward, 6);
            this.setDoubleRewardBtnVisible(this._canSignDayIdx != undefined);
        }
        isSignedByDayIdx(dayIdx) {
            if (dayIdx < 7) {
                if (this._signListData[dayIdx - 1].bTaken) {
                    return true;
                }
            }
            else {
                if (this._day7SignData.bTaken) {
                    return true;
                }
            }
            return false;
        }
        onClickSignReward(idx) {
            if (idx != this._canSignDayIdx) {
                return;
            }
            if (this.isSignedByDayIdx(idx)) {
                return;
            }
            this.setDoubleRewardBtnVisible();
            this.doSign(idx);
        }
        doSign(idx, bDouble = false) {
            UserData.updateContinuousSignCnt(idx);
            UserData.updateLastSignDate(SignView.getCurMs());
            let config = cfg.signReward[idx.toString()];
            let rewardCfg = cfg.item[config.Item[0]];
            let rewardNum = bDouble ? config.Item[1] * 2 : config.Item[1];
            if (eItemType.Number == rewardCfg.type) {
                switch (config.Item[0]) {
                    case GoldItemID:
                        UserData.addGold(rewardNum);
                        break;
                    case DiamondItemID:
                        UserData.addDiamond(rewardNum);
                        break;
                }
            }
            else {
                mm.bag.obtainItem(config.Item[0], rewardNum);
            }
            this.updateSignData();
            this.refreshRewardList();
            let tipBoxInfo = {
                icon: CommonRes.getItemIconUrlByID(config.Item[0]),
                displayIndex: rewardCfg.qua,
                tips: rewardNum.toString(),
                desc: rewardCfg.name,
            };
            TipsBoxView.showView([tipBoxInfo]);
            this.onClickCloseBtn();
        }
        onClickCloseBtn() {
            ViewManagerLY.close(ViewID.sign.name);
        }
        setDoubleRewardBtnVisible(b = false) {
            this.doubleRewardBtn.visible = b;
            this.rewardBtn.visible = b;
            this.takenTip.visible = !b;
        }
        onClickRewardBtn() {
            if (!this._canSignDayIdx) {
                return;
            }
            this.doSign(this._canSignDayIdx, false);
        }
        onClickDoubleRewardBtn() {
            if (!this._canSignDayIdx) {
                return;
            }
            Platform.inst.showVideoOrShare(VideoID.doubleSign, ShareKeys.doubleSign).then(() => {
                this.setDoubleRewardBtnVisible();
                this.doSign(this._canSignDayIdx, true);
            }).catch((err) => {
                console.warn("Double sign fail", err);
                ViewFlyword.showTip("需完整观看才能获取奖励哦");
            });
        }
    }

    const Part1ShopItemID = 101;
    const Chest1ShopItemID = 201;
    const Chest2ShopItemID = 202;
    const Chest3ShopItemID = 203;
    const BuyGoldShopItemType = 3;
    const OneDayInMS = 60 * 60 * 24 * 1000;
    const HourInMs = 60 * 60 * 1000;
    function getCurMs() {
        return Timer.curMs;
    }
    function setCostNumOnBuyBtn(btn, cost) {
        btn.getChildByName("costNum").text = `x${cost}`;
    }
    function setFreeTakeBtnEnable(btn, b) {
        btn.gray = !b;
        btn.mouseEnabled = b;
        btn.getChildByName("redDot").visible = b;
    }
    function setChestCDInfoEnable(chestNode, b) {
        chestNode.getChildByName("cdIcon").visible = b;
        chestNode.getChildByName("freeCD").visible = b;
    }
    function setFreeTakeChanceEnable(chestNode, b) {
        chestNode.getChildByName("freeTakeNode").visible = b;
    }
    function updateFreeTakeChance(chestNode, cnt) {
        chestNode.getChildByName("freeTakeNode").getChildByName("chance2Take").text = cnt.toString();
    }
    function cd2String(cd) {
        if (cd > OneDayInMS) {
            let day = Math.floor(cd / OneDayInMS);
            let hour = Math.floor((cd % OneDayInMS) / HourInMs);
            let hourStr = hour.toString();
            if (hour < 10) {
                hourStr = "0" + hourStr;
            }
            return `${day}天${hourStr}时后免费`;
        }
        else {
            return Utils.formatTime(cd) + "后免费";
        }
    }
    class ShopView {
        constructor(root) {
            this._buyGoldConfigs = [];
            this._timerList = {};
            this._root = root;
            this.initNodes();
            this.initScroll();
            this.initPart1();
            this.initChest1();
            this.initChest2();
            this.initChest3();
            this.initBuyGoldList();
        }
        initNodes() {
            let shopContent = this._root.getChildByName("shopContent");
            this._part1 = shopContent.getChildByName("part1");
            this._part2 = shopContent.getChildByName("part2");
            this._scrollView = this._part2.getChildByName("scrollView");
            this._part2Content = this._scrollView.getChildByName("part2Content");
            this._chest2 = this._part2Content.getChildByName("chest2");
            this._chest3 = this._part2Content.getChildByName("chest3");
            this._buyGoldList = this._part2Content.getChildByName("buyGoldList");
        }
        initScroll() {
            this._minPart2ContentY = this._scrollView.height - this._part2Content.height;
            if (this._minPart2ContentY >= 0) {
                return;
            }
            this._scrollView.on(Laya.Event.MOUSE_DOWN, this, this.part2TouchStart);
            this._scrollView.on(Laya.Event.MOUSE_MOVE, this, this.part2TouchMove);
            this._scrollView.on(Laya.Event.MOUSE_UP, this, this.part2TouchEnd);
            this._scrollView.on(Laya.Event.MOUSE_OUT, this, this.part2TouchCancel);
        }
        part2TouchStart(evt) {
            if (this._scrollID) {
                return;
            }
            this._scrollID = evt.touchId;
            this._scrollStartY = evt.stageY;
            this._scrollStartContentY = this._part2Content.y;
        }
        part2TouchMove(evt) {
            if (!this._scrollID && this._scrollID != evt.touchId) {
                return;
            }
            let posY = this._scrollStartContentY + evt.stageY - this._scrollStartY;
            if (posY > 0) {
                posY = 0;
            }
            else if (posY < this._minPart2ContentY) {
                posY = this._minPart2ContentY;
            }
            this._part2Content.y = posY;
        }
        part2TouchEnd(evt) {
            if (!this._scrollID && this._scrollID != evt.touchId) {
                return;
            }
            this._scrollID = null;
            this._scrollStartY = null;
            this._scrollStartContentY = null;
        }
        part2TouchCancel(evt) {
            if (!this._scrollID && this._scrollID != evt.touchId) {
                return;
            }
            this.part2TouchEnd(evt);
        }
        initPart1() {
            let bonusNum = this._part1.getChildByName("bonusNum");
            let config = cfg.shop[Part1ShopItemID];
            bonusNum.text = `x${config.earnDiamond}`;
            let takeBtn = this._part1.getChildByName("takeBtn");
            let cdHandler = () => {
                this.refreshPart1();
            };
            let takeHandler = () => {
                this.freeTake("dailyFreeBonus1Cnt", "freeBonus1TakeTimeStamp", config, this._part1, cdHandler);
            };
            takeBtn.on(Laya.Event.CLICK, this, takeHandler);
        }
        initChest1() {
            let config = cfg.shop[Chest1ShopItemID];
            let buyBtn = this._part2Content.getChildByName("chest1").getChildByName("buyBtn");
            setCostNumOnBuyBtn(buyBtn, config.diamond);
            buyBtn.on(Laya.Event.CLICK, this, this.buyWithDiamond, [config]);
        }
        initChest2() {
            let config = cfg.shop[Chest2ShopItemID];
            let takeBtn = this._chest2.getChildByName("takeBtn");
            let cdHandler = () => {
                this.refreshChest2();
            };
            let takeHandler = () => {
                this.freeTake("dailyFreeBonus2Cnt", "freeBonus2TakeTimeStamp", config, this._chest2, cdHandler);
            };
            takeBtn.on(Laya.Event.CLICK, this, takeHandler);
        }
        initChest3() {
            let config = cfg.shop[Chest3ShopItemID];
            let buyBtn = this._chest3.getChildByName("buyBtn");
            setCostNumOnBuyBtn(buyBtn, config.diamond);
            buyBtn.on(Laya.Event.CLICK, this, this.buyWithDiamond, [config]);
            let takeBtn = this._chest3.getChildByName("takeBtn");
            let cdHandler = () => {
                this.refreshChest3();
            };
            let takeHandler = () => {
                this.freeTake(undefined, "freeBonus3TakeTimeStamp", config, this._chest3, cdHandler);
            };
            takeBtn.on(Laya.Event.CLICK, this, takeHandler);
        }
        refreshBuyGoldConfigs() {
            let tankRank = UserData.tankRankData.tankRankLV || 1;
            let configList = [];
            let config;
            let keys = Object.keys(cfg.shop);
            for (let key of keys) {
                config = cfg.shop[key];
                if (BuyGoldShopItemType == config.type && config.military[0] <= tankRank && tankRank <= config.military[1]) {
                    configList.push(config);
                }
            }
            this._buyGoldConfigs = configList;
        }
        initBuyGoldList() {
            this.refreshBuyGoldConfigs();
            this._buyGoldList.renderHandler = Laya.Handler.create(this, this.renderBuyGoldBox, null, false);
            this._buyGoldList.array = this._buyGoldConfigs;
        }
        renderBuyGoldBox(cell, idx) {
            let config = this._buyGoldConfigs[idx];
            if (!config) {
                cell.visible = false;
                return;
            }
            cell.visible = true;
            cell.getChildByName("incomeLabel").text = `${config.earnGold}金币`;
            cell.getChildByName("timeDesc").text = config.name;
            let buyBtn = cell.getChildByName("buyBtn");
            buyBtn.offAll(Laya.Event.CLICK);
            setCostNumOnBuyBtn(buyBtn, config.diamond);
            buyBtn.on(Laya.Event.CLICK, this, this.buyWithDiamond, [config]);
        }
        refreshPart1() {
            let config = cfg.shop[Part1ShopItemID];
            let takeBtn = this._part1.getChildByName("takeBtn");
            let takeCnt = UserData.dailyFreeBonus1Cnt || 0;
            if (takeCnt >= config.timeLimit) {
                setFreeTakeBtnEnable(takeBtn, false);
                setChestCDInfoEnable(this._part1, false);
                setFreeTakeChanceEnable(this._part1, true);
                updateFreeTakeChance(this._part1, 0);
                return;
            }
            let tsLastTake = UserData.freeBonus1TakeTimeStamp;
            if (getCurMs() - tsLastTake > config.freeCd * 1000) {
                setFreeTakeBtnEnable(takeBtn, true);
                setChestCDInfoEnable(this._part1, false);
                setFreeTakeChanceEnable(this._part1, true);
                updateFreeTakeChance(this._part1, config.timeLimit - takeCnt);
            }
            else {
                setFreeTakeBtnEnable(takeBtn, false);
                setChestCDInfoEnable(this._part1, true);
                setFreeTakeChanceEnable(this._part1, false);
                let cdLabel = this._part1.getChildByName("freeCD");
                this.startCountDown(Part1ShopItemID, config.freeCd * 1000 - getCurMs() + tsLastTake, cdLabel);
            }
        }
        refreshChest2() {
            let config = cfg.shop[Chest2ShopItemID];
            let takeBtn = this._chest2.getChildByName("takeBtn");
            let takeCnt = UserData.dailyFreeBonus2Cnt || 0;
            if (takeCnt >= config.timeLimit) {
                setFreeTakeBtnEnable(takeBtn, false);
                setChestCDInfoEnable(this._chest2, false);
                setFreeTakeChanceEnable(this._chest2, true);
                updateFreeTakeChance(this._chest2, 0);
                return;
            }
            let tsLastTake = UserData.freeBonus2TakeTimeStamp;
            if (getCurMs() - tsLastTake > config.freeCd * 1000) {
                setFreeTakeBtnEnable(takeBtn, true);
                setChestCDInfoEnable(this._chest2, false);
                setFreeTakeChanceEnable(this._chest2, true);
                updateFreeTakeChance(this._chest2, config.timeLimit - takeCnt);
            }
            else {
                setFreeTakeBtnEnable(takeBtn, false);
                setChestCDInfoEnable(this._chest2, true);
                setFreeTakeChanceEnable(this._chest2, false);
                let cdLabel = this._chest2.getChildByName("freeCD");
                this.startCountDown(Chest2ShopItemID, config.freeCd * 1000 - getCurMs() + tsLastTake, cdLabel);
            }
        }
        refreshChest3() {
            let config = cfg.shop[Chest3ShopItemID];
            let takeBtn = this._chest3.getChildByName("takeBtn");
            let setBuyBtnEnable = (b) => {
                let buyBtn = this._chest3.getChildByName("buyBtn");
                buyBtn.visible = b;
            };
            let tsLastTake = UserData.freeBonus3TakeTimeStamp;
            if (getCurMs() - tsLastTake > config.freeCd * 1000) {
                setFreeTakeBtnEnable(takeBtn, true);
                setChestCDInfoEnable(this._chest3, false);
                setBuyBtnEnable(false);
            }
            else {
                setFreeTakeBtnEnable(takeBtn, false);
                setChestCDInfoEnable(this._chest3, true);
                let cdLabel = this._chest3.getChildByName("freeCD");
                this.startCountDown(Chest3ShopItemID, config.freeCd * 1000 - getCurMs() + tsLastTake, cdLabel);
                setBuyBtnEnable(true);
            }
        }
        freeTake(cntKey, tsKey, config, chestNode, cdHandler) {
            Platform.inst.showVideoOrShare(VideoID.shop, ShareKeys.other).then(() => {
                if (cntKey) {
                    UserData[cntKey] = UserData[cntKey] + 1;
                }
                UserData[tsKey] = getCurMs();
                UserData.saveData(1000);
                this.onBuySuccess(config);
                cdHandler();
            }).catch(err => {
                console.error("shop free take fail", err);
                ViewFlyword.showTip("需完整观看才能获取奖励哦");
            });
        }
        startCountDown(chestIdx, cd, cdLabel) {
            cdLabel.text = cd2String(cd);
            if (cd > OneDayInMS + 300000) {
                return;
            }
            this._timerList[chestIdx] = cdLabel;
            Laya.timer.loop(1000, cdLabel, () => {
                cdLabel.text = cd2String(cd);
                cd -= 1000;
                if (cd <= 0) {
                    this._timerList[chestIdx] = null;
                    Laya.timer.clearAll(cdLabel);
                    switch (chestIdx) {
                        case Part1ShopItemID:
                            this.refreshPart1();
                            break;
                        case Chest2ShopItemID:
                            this.refreshChest2();
                            break;
                        case Chest3ShopItemID:
                            this.refreshChest3();
                            break;
                    }
                }
            });
        }
        buyWithDiamond(config) {
            if (UserData.diamond >= config.diamond) {
                UserData.addDiamond(-config.diamond);
                this.onBuySuccess(config);
            }
            else {
                ViewFlyword.showTip("钻石不足！");
            }
        }
        onBuySuccess(config) {
            let obtainGold = config.earnGold || 0;
            let obtainDiamond = config.earnDiamond || 0;
            let obtainItem, itemNum;
            if (config.boxType) {
                let boxCfg = this.randomBox(config.boxType);
                if (eItemType.Number == boxCfg.itemId) {
                    obtainGold += boxCfg.num;
                }
                else {
                    obtainItem = boxCfg.itemId;
                    itemNum = boxCfg.num;
                }
            }
            if (obtainGold && obtainGold > 0) {
                UserData.addGold(obtainGold);
            }
            if (obtainDiamond && obtainDiamond > 0) {
                UserData.addDiamond(obtainDiamond);
            }
            if (obtainItem) {
                mm.bag.obtainItem(obtainItem, itemNum);
            }
            this.displayResult(obtainGold, obtainDiamond, obtainItem, itemNum);
        }
        randomBox(boxType) {
            let tankRank = UserData.tankRankData.tankRankLV || 1;
            let availableBoxList = [];
            let keys = Object.keys(cfg.boxList);
            let config;
            for (let key of keys) {
                config = cfg.boxList[key];
                if (config.type == boxType && config.military[0] <= tankRank && tankRank <= config.military[1]) {
                    availableBoxList.push(config);
                }
            }
            let weightList = [];
            let totalWeight = 0;
            for (let i = 0, len = availableBoxList.length; i < len; i++) {
                totalWeight += availableBoxList[i].weight;
                weightList.push(totalWeight);
            }
            let randomNum = MathUtils.randomN(1, totalWeight);
            let randomIdx;
            for (let i = 0, len = weightList.length; i < len; i++) {
                if (randomNum <= weightList[i]) {
                    randomIdx = i;
                    break;
                }
            }
            return availableBoxList[randomIdx];
        }
        displayResult(gold, diamond, itemID, itemNum) {
            let tipBoxInfoList = [];
            function ctorInfoData(itemID, num) {
                return {
                    icon: CommonRes.getItemIconUrlByID(itemID),
                    displayIndex: cfg.item[itemID].qua,
                    tips: num.toString(),
                    desc: cfg.item[itemID].name,
                };
            }
            if (gold) {
                tipBoxInfoList.push(ctorInfoData(GoldItemID, gold));
            }
            if (diamond) {
                tipBoxInfoList.push(ctorInfoData(DiamondItemID, diamond));
            }
            if (itemID) {
                tipBoxInfoList.push(ctorInfoData(itemID, itemNum));
            }
            TipsBoxView.showView(tipBoxInfoList);
        }
        onShow() {
            this.refreshPart1();
            this.refreshChest2();
            this.refreshChest3();
            this.refreshBuyGoldConfigs();
            this._buyGoldList.array = this._buyGoldConfigs;
            this._buyGoldList.refresh();
        }
        onHide() {
            let timerKeys = Object.keys(this._timerList);
            for (let key of timerKeys) {
                Laya.timer.clearAll(this._timerList[key]);
            }
            this._timerList = {};
        }
    }

    class MainView extends BaseViewLY {
        constructor() {
            super(...arguments);
            this.curMenuIndex = 2;
            this.tankModels = {};
            this.tankModelsAni = {};
            this.tankModelLoadRecord = [];
            this.tankModelYOffset = 0.85;
            this.tankModelScaleOffset = 1;
            this.pageIndex = 2;
            this.originArrowScaleY = 1;
            this.arrows = {};
            this.targetArrowScaleY = 1.3;
            this.arrowAniCircle_ms = 208;
            this.circleTime_ms = 1000;
            this.isClickEnterGame = false;
            this.isClickCollect = false;
            this.technologyIconBorderArr = [];
            this.scrollY = 0;
            this.isShowGlobalList = false;
        }
        get isFitBang() {
            return true;
        }
        onAwake() {
            this.mainMenuBoxs = [this.shopBox, this.upgradeBox, this.battleBox, this.scienceBox, this.rankBox];
            mm.playerRank.init();
            this.initBattle();
            this.initUpgrade();
            this.initState();
            this.initClickMapHandler();
            this.initTechnology();
            this.initPlayerRank();
            this.initShopView();
        }
        onEnable() {
            BuffManager.reset();
            this.updateShowModel();
            this.isNewChap();
            this.updateState();
            this.updateBattle();
            this.updateUpgrade();
            this.updateTankRankInfo();
            this.battleShowTaskRed();
            this.updateTechnologyInfo();
            AudioManager.playMusicRandom(cfg.global.mainMusic);
            Timer.loop(100, this, this.updateTimer);
            mm.playerRank.saveData(UserData.chap, UserData.stage);
            gEvent.on(MainEvent.selChapChanged, this, this.updateBattle);
            gEvent.on(MainEvent.showShopView, this, this.onEvtShowShopView);
            gEvent.on(MainEvent.hideShopView, this, this.onEvtHideShopView);
            this.showSignView();
        }
        onDisable() {
            Timer.clear(this, this.updateTimer);
            gEvent.off(MainEvent.selChapChanged, this, this.updateBattle);
            gEvent.off(MainEvent.showShopView, this, this.onEvtShowShopView);
            gEvent.off(MainEvent.hideShopView, this, this.onEvtHideShopView);
            this.stopArrowAni();
        }
        onDestroy() {
            Timer.clear(this, this.updateTimer);
            gEvent.off(MainEvent.selChapChanged, this, this.updateBattle);
            this.stopArrowAni();
        }
        initBattle() {
            this.startPowerText.text = "-" + cfg.global.enterGameNeedPower;
            this.startBtn.on(Laya.Event.CLICK, this, this.onClickStart);
            this.tankRankBtn.on(Laya.Event.CLICK, this, this.tankRankBtnClick);
            this.tankRankIconBtn.on(Laya.Event.CLICK, this, this.tankRankBtnClick);
            this.collectGift.on(Laya.Event.CLICK, this, this.collectGiftClick);
            this.offlineRewardBtn.on(Laya.Event.CLICK, this, this.offlineRewardBtnClick);
            this.adapter = Laya.stage.displayHeight / 1280;
            this.titleText.y *= this.adapter;
            this.mapBox.y *= this.adapter;
            this.tankRankBtn.y *= this.adapter;
            this.tankRankIconBtn.y *= this.adapter;
            this.startBtn.y *= this.adapter;
            if (Device.isBangsScreen()) {
                this.startBtn.y -= 55;
                this.tankRankBtn.y -= 50;
            }
        }
        offlineRewardBtnClick() {
            mm.technology.showOfflineReward();
        }
        collectGiftClick() {
            mm.main.showCollectRewardView();
        }
        getCollectGift() {
            let gift = cfg.global.collectGift;
            let icon;
            if (cfg.item[gift[0]].name == "金币") {
                UserData.gold += gift[1];
                icon = "game/view/common/common_icon_jinbi.png";
            }
            if (cfg.item[gift[0]].name == "钻石") {
                UserData.diamond += gift[1];
                icon = "game/view/common/common_icon_zuanshi";
            }
            if (icon) {
                TipsBoxView.showView([{
                        icon: icon,
                        displayIndex: kJinbiDisplayIndex,
                        desc: cfg.item[gift[0]].name,
                        tips: `x${gift[1]}`
                    }]);
            }
            this.collectGift.visible = false;
            UserData.isCollectGift = true;
            UserData.saveData(1000);
        }
        updateBattle() {
            this.offlineRewardBtn.visible = UserData.offlineRewardTimestamp_longTime != 0;
            this.showBattleHand();
            this.isClickEnterGame = false;
            let chapIdx = UserData.selChap || UserData.chap;
            let chapCfg = cfg.stageLevelCfg[chapIdx];
            this.titleText.text = `${chapIdx}.${chapCfg.name}`;
            let unlockStage = 0;
            let displayStage = 0;
            if (chapIdx < UserData.chap) {
                unlockStage = chapCfg.stage.length;
                displayStage = unlockStage - 1;
            }
            else {
                unlockStage = UserData.stage;
                displayStage = unlockStage - 2;
            }
            this.levelText.text = `最高层数:${displayStage < 0 ? 0 : displayStage}/${chapCfg.stage.length - 1}`;
            this.curMap.skin = CommonRes.texture(chapCfg.icon);
        }
        tankRankBtnClick() {
            mm.tankRank.showView();
            ViewManagerLY.close(ViewID.main.name);
            ViewManagerLY.close(ViewID.menu.name);
        }
        onClickStart() {
            if (this.isClickEnterGame)
                return;
            if (UserData.unfiniRec) {
                mm.fight.enterPVE();
                UserData.saveData(1500);
                this.isClickEnterGame = true;
                return;
            }
            if (UserData.checkAndUsePower(cfg.global.enterGameNeedPower)) {
                mm.fight.enterPVE();
                UserData.saveData(1500);
                StatManager.dailyPlayGame();
                this.isClickEnterGame = true;
            }
            else {
                mm.main.commonView.showRewardDialog(TipsScene.notEnergy, null, this.avGetRewardFunc.bind(this));
            }
        }
        updateTankRankInfo() {
            this.playerRankLabel.text = cfg.rankReward[mm.tankRank.getCurRankLV()].name;
            let isSetTaskShow = false;
            let hasEverydayTask = false;
            let hasMainTask = false;
            for (let id in mm.tankRank.tankRankModel.everyDayTask) {
                if (!mm.tankRank.tankRankModel.everyDayTask[id].isFinish && !hasEverydayTask) {
                    isSetTaskShow = true;
                    this.tankRankTaskLabel.text = cfg.rankTask[id].desc;
                    hasEverydayTask = true;
                    continue;
                }
                if (mm.tankRank.tankRankModel.everyDayTask[id].isFinish && !mm.tankRank.tankRankModel.everyDayTask[id].isGetReward) {
                    isSetTaskShow = true;
                    this.tankRankTaskLabel.text = cfg.rankTask[id].desc;
                    break;
                }
            }
            for (let id in mm.tankRank.tankRankModel.mainTask) {
                if (!mm.tankRank.tankRankModel.mainTask[id].isFinish && !hasMainTask) {
                    isSetTaskShow = true;
                    this.tankRankTaskLabel.text = cfg.rankTask[id].desc;
                    hasMainTask = true;
                    continue;
                }
                if (mm.tankRank.tankRankModel.mainTask[id].isFinish && !mm.tankRank.tankRankModel.mainTask[id].isGetReward) {
                    isSetTaskShow = true;
                    this.tankRankTaskLabel.text = cfg.rankTask[id].desc;
                    break;
                }
            }
            if (!isSetTaskShow) {
                this.tankRankTaskLabel.text = "今日已完成";
            }
        }
        initClickMapHandler() {
            this.curMap.on(Laya.Event.CLICK, this, this.onClickCurMapBtn);
        }
        battleShowTaskRed() {
            mm.tankRank.updateTaskCalc();
            this.battleTaskRedDot.visible = false;
            let hasFinishTask = false;
            for (let l in mm.tankRank.tankRankModel.mainTask) {
                if (mm.tankRank.tankRankModel.mainTask[l].isFinish && !mm.tankRank.tankRankModel.mainTask[l].isGetReward) {
                    this.battleTaskRedDot.visible = true;
                    hasFinishTask = true;
                    break;
                }
            }
            if (!hasFinishTask) {
                for (let l in mm.tankRank.tankRankModel.everyDayTask) {
                    if (mm.tankRank.tankRankModel.everyDayTask[l].isFinish && !mm.tankRank.tankRankModel.everyDayTask[l].isGetReward) {
                        this.battleTaskRedDot.visible = true;
                        hasFinishTask = true;
                        break;
                    }
                }
            }
            if (!hasFinishTask) {
                for (let l in mm.tankRank.tankRankModel.rankReward) {
                    if (Number(l) <= mm.tankRank.tankRankModel.tankRankLV && !mm.tankRank.tankRankModel.rankReward[l].isGetReward) {
                        this.battleTaskRedDot.visible = true;
                        break;
                    }
                }
            }
        }
        isNewChap() {
            if (UserData.bNewChapNotice && UserData.chap != 1 && UserData.chap != 0) {
                if (UserData.chap <= cfg.global.maxChapIdx) {
                    mm.main.showNewChapterView();
                }
            }
            UserData.onShowNewChapNotice();
        }
        showBattleHand(state) {
            let part = mm.bag.getRoleEquipPart(EquipPart.weapon);
            if (UserData.isPassedStage7()) {
                if (this.battleClickHand.visible) {
                    this.battleClickHand.visible = false;
                }
                return;
            }
            if (state != undefined) {
                this.battleClickHand.visible = state;
                state && this.battleClickHand.play();
            }
            if (UserData.power >= cfg.global.enterGameNeedPower && cfg.level[UserData.tankLV + 1] && (UserData.gold <= 1000 || part.lv != 0)) {
                this.battleClickHand.visible = true;
                this.battleClickHand.play();
            }
            else {
                this.battleClickHand.visible = false;
            }
        }
        onClickCurMapBtn() {
            ViewManagerLY.show(ViewID.selChap, ViewLayer.overlay);
        }
        initUpgrade() {
            this.curShowRoleName = mm.bag.getMainRoleModelRes();
            this.quaSortBtn.on(Laya.Event.CLICK, this, this.sortBtnClick);
            this.comBtn.on(Laya.Event.CLICK, this, this.comBtnClick);
            this.itemList.renderHandler = Laya.Handler.create(this, this.itemListRender, null, false);
            this.itemList.vScrollBarSkin = "";
            this.roleEquipList.renderHandler = Laya.Handler.create(this, this.roleEquipListRender, null, false);
            if (Device.isBangsScreen()) {
                this.bag1.bottom += 100;
                this.bag2.top += 115;
                this.roleEquipList.spaceY = 35;
            }
        }
        updateUpgrade() {
            this.equipSortType = "qua";
            this.quaSortLabel.skin = 'game/view/Main/zb_txt_3.png';
            this.refreshEquipView();
            this.refreshItemView();
            this.playArrowAni();
        }
        upgradeShowHand(state) {
            let part = mm.bag.getRoleEquipPart(EquipPart.weapon);
            if (state != undefined) {
                this.upgradeHand.visible = state;
                return;
            }
            if (part.lv == 0 && UserData.gold >= 1001) {
                this.upgradeHand.visible = true;
            }
            else {
                this.upgradeHand.visible = false;
            }
        }
        updateRoleAttr() {
            let roleEquipAttr = mm.bag.getMainRoleAttrBonusObj();
            let roleAttr = cfg.actor["10001"];
            this.roleAttrLabel.text = `攻击：${roleEquipAttr.atk + roleAttr.atk}  生命：${roleEquipAttr.hp + roleAttr.hp}`;
        }
        sortBtnClick() {
            if (this.equipSortType == "qua") {
                this.equipSortType = "part";
                this.quaSortLabel.skin = 'game/view/Main/zb_txt_10.png';
            }
            else {
                this.equipSortType = "qua";
                this.quaSortLabel.skin = 'game/view/Main/zb_txt_3.png';
            }
            this.refreshItemView();
            this.itemList.scrollTo(0);
        }
        comBtnClick() {
            ComEquipView.showView();
        }
        itemListRender(cell, index) {
            let data = cfg.item[cell.dataSource.id || cell.dataSource];
            let bgImg = cell.getChildByName("bg");
            let iconImg = cell.getChildByName("icon");
            let countLabel = cell.getChildByName("count");
            let arrow = cell.getChildByName("arrow");
            cell.offAll(Laya.Event.CLICK);
            switch (data.type) {
                case ItemType.equipment:
                    countLabel.text = "";
                    bgImg.skin = mm.bag.itemQuaRes(data.qua);
                    cell.on(Laya.Event.CLICK, this, (id, idx) => {
                        EquipDescView.showEquipDescView(GridType.roleStore, id, this.addEquip, () => {
                            ViewFlyword.showTip("穿戴中的装备才可升级!");
                            return false;
                        }, null, idx, ItemType.equipment);
                    }, [(cell.dataSource.id || cell.dataSource), index]);
                    let part = mm.bag.getAddEquipPart(data.part);
                    if (mm.bag.compareEquip(part.id, (cell.dataSource.id || cell.dataSource))) {
                        this.addArrowAni(arrow, GridType.roleStore);
                    }
                    else {
                        this.removeArrowAni(arrow, GridType.roleStore);
                    }
                    break;
                case ItemType.material:
                    cell.on(Laya.Event.CLICK, this, (id, idx) => {
                        EquipDescView.showEquipDescView(GridType.roleStore, id, null, null, null, idx, ItemType.material);
                    }, [(cell.dataSource.id || cell.dataSource), index]);
                    countLabel.text = "x" + cell.dataSource.count;
                    bgImg.skin = "game/view/common/common_frame_golden.png";
                    arrow.visible = false;
                    break;
            }
            Resource.load(mm.bag.itemIconRes(data.icon)).then(res => {
                if (res) {
                    iconImg.texture = res;
                }
            });
        }
        roleEquipListRender(cell, index) {
            let data = cell.dataSource;
            let lvLabel = cell.getChildByName("lv");
            let iconImg = cell.getChildByName("icon");
            let bgImg = cell.getChildByName("bg");
            let arrow = cell.getChildByName("arrow");
            let lvBG = cell.getChildByName("lvBG");
            let equipBG = cell.getChildByName("equipBG");
            equipBG.skin = `game/view/Main/zb_frame_a${Number(data.type)}.png`;
            cell.offAll(Laya.Event.CLICK);
            if (data.id != -1) {
                cell.on(Laya.Event.CLICK, this, (id, equipPart) => {
                    this.upgradeShowHand(false);
                    EquipDescView.showEquipDescView(GridType.roleEquip, id, this.removeEquip, this.upgradeEquip, equipPart, null, ItemType.equipment);
                }, [data.id, data.equipPart]);
                Resource.load(mm.bag.itemIconRes(cfg.item[data.id].icon)).then(res => {
                    if (res) {
                        iconImg.visible = true;
                        iconImg.texture = res;
                    }
                });
                bgImg.visible = true;
                bgImg.skin = mm.bag.itemQuaRes(cfg.item[data.id].qua);
                if (data.lv > 0) {
                    lvLabel.visible = true;
                    lvBG.visible = true;
                    lvLabel.text = "LV." + data.lv.toString();
                }
                else {
                    lvLabel.visible = false;
                    lvBG.visible = false;
                }
                if (mm.bag.canUpgradeEquip(data.equipPart)) {
                    this.addArrowAni(arrow, GridType.roleEquip);
                }
                else {
                    this.removeArrowAni(arrow, GridType.roleEquip);
                }
            }
            else {
                lvLabel.visible = false;
                iconImg.visible = false;
                lvBG.visible = false;
                bgImg.visible = false;
            }
        }
        addArrowAni(arrow, gridType) {
            if (!this.arrows[gridType]) {
                this.arrows[gridType] = [];
            }
            arrow.visible = true;
            let idx = this.arrows[gridType].indexOf(arrow);
            if (idx == -1) {
                this.arrows[gridType].push(arrow);
            }
        }
        removeArrowAni(arrow, gridType) {
            if (this.arrows[gridType]) {
                let idx = this.arrows[gridType].indexOf(arrow);
                if (idx != -1) {
                    this.arrows[gridType][idx].visible = false;
                    this.arrows[gridType][idx].scaleY = this.originArrowScaleY;
                    this.arrows[gridType].splice(idx, 1);
                }
            }
        }
        playArrowAni() {
            let scaleRate = (this.targetArrowScaleY - this.originArrowScaleY) / this.arrowAniCircle_ms;
            let arrowDir = 1;
            if (scaleRate >= 0) {
                arrowDir = 1;
            }
            else {
                arrowDir = -1;
            }
            let dirTimer = 0;
            let circleTimer = 0;
            let arrowCircleTime = this.arrowAniCircle_ms * 2;
            let syncArrowScaleY = this.originArrowScaleY;
            Timer.frameLoop(1, this.arrows, () => {
                if (this.upgradeBox.visible == false)
                    return;
                dirTimer += Timer.deltaMs;
                circleTimer += Timer.deltaMs;
                if (circleTimer >= this.circleTime_ms) {
                    circleTimer = 0;
                }
                if (circleTimer >= arrowCircleTime)
                    return;
                syncArrowScaleY += scaleRate * arrowDir * Timer.deltaMs;
                for (let arrowType = 0; arrowType < 2; arrowType++) {
                    var typeArrows = this.arrows[arrowType];
                    if (!typeArrows)
                        continue;
                    for (let arrow of typeArrows.values()) {
                        if (arrowDir > 0 && syncArrowScaleY > this.targetArrowScaleY) {
                            syncArrowScaleY = this.targetArrowScaleY;
                        }
                        if (arrowDir < 0 && syncArrowScaleY < this.originArrowScaleY) {
                            syncArrowScaleY = this.originArrowScaleY;
                        }
                        arrow.scaleY = syncArrowScaleY;
                    }
                }
                if (dirTimer >= this.arrowAniCircle_ms) {
                    arrowDir = -arrowDir;
                    dirTimer = 0;
                }
            });
        }
        stopArrowAni() {
            Timer.clearAll(this.arrows);
            this.arrows = {};
        }
        addEquip(idx, equipPart) {
            mm.bag.addEquip(idx);
        }
        removeEquip(idx, equipPart) {
            mm.bag.removeEquip(equipPart);
        }
        upgradeEquip(equipPart) {
            return mm.bag.upgradeEquip(equipPart);
        }
        refreshEquipView() {
            this.roleEquipList.array = mm.bag.getRoleEquipArr();
            this.updateRoleAttr();
            this.roleEquipList.refresh();
        }
        refreshItemView() {
            if (this.equipSortType == "qua") {
                mm.bag.sortEquipByQua();
            }
            else {
                mm.bag.sortEquipByPart();
            }
            this.comRedDot.visible = mm.bag.isShowComRedDot();
            this.itemList.array = mm.bag.getItemArr();
            this.itemList.refresh();
        }
        updateShowModel() {
            if (!this.tankScene || this.tankScene.destroyed) {
                this.tankScene = new Laya.Scene3D();
                this.camera = new Laya.Camera();
                this.camera.clearFlag = Laya.CameraClearFlags.Sky;
                this.camera.clearColor = new Laya.Vector4(0, 0, 0, 0);
                this.camera.transform.position = new Laya.Vector3(Laya.stage.width / 2, Laya.stage.height / 2, 7);
                this.tankScene.addChild(this.camera);
                this.tankScene.zOrder = -1;
                this.addChild(this.tankScene);
                this.tankCameraRT = new Laya.RenderTexture(720, 1280, Laya.RenderTextureFormat.R8G8B8A8);
                this.tankRT = new Laya.Texture(this.tankCameraRT);
                this.camera.renderTarget = this.tankCameraRT;
                this.modelRT.graphics.drawTexture(this.tankRT);
                this.tankModelLoadRecord = [];
            }
            this.showRoleModel(mm.bag.getMainRoleModelRes(), this.pageIndex);
        }
        fitRoleModelShow(pageIndex, model) {
            if (Device.isBangsScreen()) {
                if (pageIndex == 1) {
                    this.tankModelYOffset = 0.01;
                    this.tankModelScaleOffset = 0.75;
                }
                if (pageIndex == 2) {
                    this.tankModelYOffset = 0.1;
                    this.tankModelScaleOffset = 0.53;
                }
            }
            else {
                if (pageIndex == 1) {
                    this.tankModelYOffset = 0.2;
                    this.tankModelScaleOffset = 0.8;
                }
                if (pageIndex == 2) {
                    this.tankModelYOffset = 0.2;
                    this.tankModelScaleOffset = 0.6;
                }
            }
            gVec3.x = this.tankModelPos.x;
            gVec3.y = this.tankModelPos.y + this.tankModelYOffset;
            gVec3.z = this.tankModelPos.z;
            model.transform.position = gVec3;
            gVec3.x = this.tankModelScale.x * this.tankModelScaleOffset;
            gVec3.y = this.tankModelScale.y * this.tankModelScaleOffset;
            gVec3.z = this.tankModelScale.z * this.tankModelScaleOffset;
            model.transform.scale = gVec3;
        }
        refreshRoleModel() {
            this.showRoleModel(mm.bag.getMainRoleModelRes(), this.pageIndex);
        }
        showRoleModel(roleName, pageIndex = 1, isDelay = false) {
            this.pageIndex = pageIndex;
            if (pageIndex == 1) {
                let delayTime = isDelay ? this.menuTweenTime : 0;
                Timer.once(delayTime, this.tankModels, () => {
                    this.modelRT.visible = true;
                    if (this.tankModels[this.curShowRoleName]) {
                        this.tankModels[this.curShowRoleName].active = false;
                    }
                    if (this.tankModels[roleName] && !this.tankModels[roleName].destroyed) {
                        this.tankModels[roleName].active = true;
                        this.fitRoleModelShow(pageIndex, this.tankModels[roleName]);
                        this.tankModelsAni[roleName].play("show");
                    }
                    else {
                        if (this.tankModelLoadRecord.findIndex((v) => { return v == roleName; }) == -1) {
                            this.tankModelLoadRecord.push(roleName);
                            this.createRoleModel(roleName).then(res => {
                                this.fitRoleModelShow(pageIndex, res);
                                this.tankModelsAni[roleName].play("show");
                            });
                        }
                    }
                    this.curShowRoleName = roleName;
                });
            }
            else {
                if (this.tankModels[this.curShowRoleName]) {
                    this.tankModels[this.curShowRoleName].active = false;
                }
                this.modelRT.visible = false;
                Timer.clearAll(this.tankModels);
            }
        }
        createRoleModel(roleName) {
            return __awaiter(this, void 0, void 0, function* () {
                let model = yield Pool.spawn(CommonRes.obj3D(roleName));
                gVec3.x = Laya.stage.width / 2;
                gVec3.y = Laya.stage.height / 1.9985;
                gVec3.z = 1;
                model.transform.position = gVec3;
                gVec3.x = -30;
                gVec3.y = 180;
                gVec3.z = 0;
                model.transform.rotationEuler = gVec3;
                gVec3.x = 0.82;
                gVec3.y = 0.82;
                gVec3.z = 0.82;
                model.transform.scale = gVec3;
                let animator = model.getChildAt(0).getChildByName("base").getChildAt(0).getComponent(Laya.Animator);
                animator.play("show");
                this.tankModels[roleName] = model;
                this.tankModelsAni[roleName] = animator;
                if (this.curShowRoleName != roleName || (this.pageIndex != 1)) {
                    model.active = false;
                }
                this.tankScene.addChild(model);
                if (!this.tankModelPos) {
                    this.tankModelPos = model.transform.position.clone();
                }
                if (!this.tankModelScale) {
                    this.tankModelScale = model.transform.scale.clone();
                }
                return model;
            });
        }
        initTechnology() {
            this.technologyUpgradeBtn.on(Laya.Event.CLICK, this, this.technologyUpgradeBtnClick);
            this.technologyList.renderHandler = Laya.Handler.create(this, this.technologyListRender, null, false);
            this.technologyList.array = mm.technology.model.seqTechnologyArr;
            this.refreshTecList();
            if (Device.isBangsScreen()) {
                this.technologyList.top += 35;
                this.tecDecBar.top += 80;
                this.technologyList.spaceY = 35;
                this.tecTipLabel.centerY += 30;
                this.technologyUpgradeBtn.centerY += 50;
            }
        }
        technologyUpgradeBtnClick() {
            if (cfg.technologyCost[UserData.technologyCount + 1] == undefined) {
                return;
            }
            let costGold = cfg.technologyCost[UserData.technologyCount + 1].costGold;
            if (UserData.checkAndUseGold(costGold)) {
                let id = mm.technology.getTechnology();
                if (id == undefined) {
                    UserData.gold += costGold;
                    console.error("[technology] none have technology");
                    return;
                }
                this.technologyUpgradeBtn.mouseEnabled = false;
                mm.main.menuView.setTouchState(false);
                let arr = this.rndGetRollArr(15);
                arr.push(id);
                this.rollTechnology(arr, 100, 4, 300);
                UserData.saveData(1500);
            }
            else {
                mm.main.commonView.showRewardDialog(TipsScene.notGold, null, this.avGetRewardFunc.bind(this), costGold);
            }
        }
        rndGetRollArr(count) {
            let originArr = mm.technology.model.disorderTechnologyArr;
            let len = originArr.length;
            Utils.disturbArr(originArr);
            let arr = [];
            for (let l = 0; l < count; l++) {
                let idx = Math.floor(Math.random() * (len - 1));
                originArr[idx] = originArr[idx] + originArr[len - 1];
                originArr[len - 1] = originArr[idx] - originArr[len - 1];
                originArr[idx] = originArr[idx] - originArr[len - 1];
                arr.push(originArr[len - 1]);
            }
            return arr;
        }
        rollTechnology(arr, rollRate_ms, blinkCount, blinkRate_ms) {
            return __awaiter(this, void 0, void 0, function* () {
                let len = arr.length;
                let tecBorderIndex = arr.shift();
                this.technologyIconBorderArr[tecBorderIndex].visible = true;
                yield Timer.loop(rollRate_ms, this, () => {
                    this.technologyIconBorderArr[tecBorderIndex].visible = false;
                    tecBorderIndex = arr.shift();
                    this.technologyIconBorderArr[tecBorderIndex].visible = true;
                }, null, true, false, (len - 1) * rollRate_ms);
                yield Timer.loop(blinkRate_ms, this, () => {
                    this.technologyIconBorderArr[tecBorderIndex].visible = !this.technologyIconBorderArr[tecBorderIndex].visible;
                }, null, true, false, blinkRate_ms * blinkCount);
                this.technologyIconBorderArr[tecBorderIndex].visible = true;
                let tecData = cfg.technology[tecBorderIndex];
                let tecValue = tecData.value;
                let tecStr;
                if (tecValue == undefined) {
                    tecStr = "";
                }
                else {
                    if (tecData.name == "攻速") {
                        tecStr = mm.technology.getTechnologyValue(tecBorderIndex).toString() + "%";
                    }
                    else {
                        tecStr = mm.technology.getTechnologyValue(tecBorderIndex).toString();
                    }
                }
                yield TecTipsView.showView(tecData.name, `${remoteUrl}/${cfg.global.resVer}/game/icon/${tecData.icon}.jpg`, tecData.desc + tecStr);
                this.technologyIconBorderArr[tecBorderIndex].visible = false;
                this.technologyUpgradeBtn.mouseEnabled = true;
                mm.main.menuView.setTouchState(true);
                this.updateTechnologyInfo();
            });
        }
        updateTechnologyInfo() {
            this.technologyUpgradeLabel.text = `${UserData.technologyCount}`;
            if (cfg.technologyCost[UserData.technologyCount + 1] == undefined) {
                this.tecUpgradeBtnBox.visible = false;
                this.technologyUpgradeBtn.gray = true;
                this.tecFullLabel.visible = true;
                this.technologyUpgradeBtn.mouseEnabled = false;
            }
            else {
                this.tecUpgradeBtnBox.visible = true;
                this.technologyUpgradeBtn.gray = false;
                this.tecFullLabel.visible = false;
                let costGold = cfg.technologyCost[UserData.technologyCount + 1].costGold;
                this.technologyCostLabel.text = "";
                this.technologyCostLabel.text = costGold.toString();
                if (costGold > UserData.gold) {
                    this.technologyCostLabel.color = "#ff0014";
                }
                else {
                    this.technologyCostLabel.color = "#ffffff";
                }
            }
            this.refreshTecList();
        }
        refreshTecList() {
            this.showTecTip(false);
            this.tecTipCell = null;
            this.technologyList.refresh();
        }
        technologyListRender(cell, index) {
            let data = cfg.technology[cell.dataSource];
            this.technologyIconBorderArr[cell.dataSource] = cell.getChildByName("border");
            let name = cell.getChildByName("name");
            let number = cell.getChildByName("number");
            let icon = cell.getChildByName("icon");
            cell.offAll(Laya.Event.CLICK);
            if (UserData.technology[cell.dataSource]) {
                let count = UserData.technology[cell.dataSource].count;
                number.text = count.toString();
                icon.skin = `${remoteUrl}/${cfg.global.resVer}/game/icon/${data.icon}.jpg`;
                name.text = data.name;
                name.color = "#b26834";
                cell.on(Laya.Event.CLICK, this, () => {
                    if (this.tecTipCell != cell) {
                        if (data.name == "荣耀") {
                            this.showTecTip(true, cell, data.name, data.desc);
                        }
                        else {
                            this.showTecTip(true, cell, data.name, data.desc + mm.technology.getTechnologyValue(Number(cell.dataSource)));
                        }
                        this.tecTipCell = cell;
                    }
                    else {
                        this.showTecTip(false);
                        this.tecTipCell = null;
                    }
                });
            }
            else {
                number.text = "";
                name.text = "尚未解锁";
                name.color = "#d1a281";
            }
        }
        showTecTip(state, cell, nameStr = "", desStr = "") {
            this.tecTip.visible = state;
            if (state == false)
                return;
            this.tecTip.x = cell.x - 35;
            this.tecTip.y = cell.y + cell.height;
            let name = this.tecTip.getChildByName("name");
            let des = this.tecTip.getChildByName("des");
            name.text = nameStr;
            des.text = desStr;
        }
        initPlayerRank() {
            return __awaiter(this, void 0, void 0, function* () {
                this.friendRankBtn.on(Laya.Event.CLICK, this, this.friendRankBtnClick);
                this.globalRankBtn.on(Laya.Event.CLICK, this, this.globalRankBtnClick);
                this.rankScrollPanel.on(Laya.Event.MOUSE_DOWN, this, this.rankDragStart);
                this.rankScrollPanel.on(Laya.Event.MOUSE_MOVE, this, this.rankDragMove);
                this.globalRankList.renderHandler = Laya.Handler.create(this, this.globalRankListRender, null, false);
                this.globalRankList.vScrollBarSkin = "";
                if (Device.isBangsScreen()) {
                    this.rankScrollPanel.height = 1060;
                }
                try {
                    yield this.renderRank();
                }
                catch (err) {
                    throw "initPlayerRank err" + err;
                }
            });
        }
        friendRankBtnClick() {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    yield Platform.inst.showFriendRank();
                }
                catch (err) {
                    ViewFlyword.showTip("当前平台不支持");
                    console.error(err);
                }
            });
        }
        globalRankBtnClick() {
            return __awaiter(this, void 0, void 0, function* () {
                if (this.isShowGlobalList == true)
                    return;
                try {
                    yield this.showGlobalRank();
                }
                catch (err) {
                    throw "globalrankbtnclick " + err;
                }
            });
        }
        showGlobalRank() {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    yield this.renderRank();
                    this.friendRank.visible = false;
                    this.globalRank.visible = true;
                    this.isShowGlobalList = true;
                }
                catch (err) {
                    throw "showglobalrank error " + err;
                }
            });
        }
        rankDragStart(event) {
            if (this.isShowGlobalList)
                return;
            this.scrollY = event.stageY;
            mm.playerRank.showFirendRank(this.rankScrollPanel, "start");
        }
        rankDragMove(event) {
            if (this.isShowGlobalList)
                return;
            mm.playerRank.showFirendRank(this.rankScrollPanel, "scroll", this.scrollY - event.stageY);
        }
        rankDragEnd(event) {
            if (this.isShowGlobalList)
                return;
            mm.playerRank.showFirendRank(this.rankScrollPanel, "end");
        }
        renderSelfRank() {
            let selfData = mm.playerRank.model.selfRankData;
            this.selfRankLevel1.text = `关卡`;
            this.selfRankHead.skin = XHSdk.userInfo.avatar_url;
            if (!selfData) {
                this.selfRankLabel.text = "未上榜";
                this.selfRankName.text = XHSdk.userInfo.nick_name;
                this.selfRankLevel2.text = `${UserData.chap}-${UserData.stage}`;
                return;
            }
            let score = selfData.score;
            let chap = Math.floor(score / 1000);
            let stage = score - 1000 * chap;
            let scoreIndex = selfData.index;
            if (scoreIndex <= 2) {
                this.selfRankDec.visible = true;
                this.selfRankLabel.text = "";
                this.selfRankDec.skin = `game/view/Rank/rank_icon_${scoreIndex}.png`;
            }
            else {
                this.selfRankDec.visible = false;
                this.selfRankLabel.text = (scoreIndex + 1).toString();
            }
            let nickname = selfData.nickname;
            if (nickname) {
                nickname = nickname.length > 6 ? `${nickname.slice(0, 6)}...` : nickname;
            }
            this.selfRankName.text = nickname;
            this.selfRankLevel2.text = `${chap}-${stage}`;
        }
        renderRank() {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    yield mm.playerRank.model.getPlayerRankData();
                    if (!mm.playerRank.model.playerRankData)
                        return;
                    this.globalRankList.array = mm.playerRank.model.playerRankData;
                    this.globalRankList.refresh();
                    this.renderSelfRank();
                }
                catch (err) {
                    throw "render rank error" + err;
                }
            });
        }
        globalRankListRender(cell, index) {
            let rankHead = cell.getChildByName("rankHead");
            let dec = cell.getChildByName("dec");
            let decBG = cell.getChildByName("decBG");
            let decLabel = cell.getChildByName("decLabel");
            let rankName = cell.getChildByName("rankName");
            let rankLevel1 = cell.getChildByName("rankLevel1");
            let rankLevel2 = cell.getChildByName("rankLevel2");
            if (index <= 2) {
                dec.visible = true;
                decBG.visible = false;
                decLabel.text = "";
                dec.skin = `game/view/Rank/rank_icon_${index}.png`;
            }
            else {
                dec.visible = false;
                decBG.visible = true;
                decLabel.text = (index + 1).toString();
            }
            let data = cell.dataSource;
            let chap = Math.floor(data.score / 1000);
            let stage = data.score - 1000 * chap;
            rankHead.skin = data.headimgurl;
            let nickname = data.nickname;
            if (nickname) {
                nickname = nickname.length > 6 ? `${nickname.slice(0, 6)}...` : nickname;
            }
            rankName.text = nickname;
            rankLevel1.text = `关卡`;
            rankLevel2.text = `${chap}-${stage}`;
        }
        initState() {
            this.updateUserInfo(XHSdk.userInfo);
            this.playerHeadSetting.on(Laya.Event.CLICK, this, this.headIconClick);
        }
        updateState() {
            this.goldText.text = UserData.gold.toString();
            this.diamondText.text = UserData.diamond.toString();
            this.powerText.text = UserData.power + "/" + cfg.global.maxPower;
        }
        updateTimer() {
            this.updateState();
            if (UserData.power >= cfg.global.maxPower) {
                this.powerResumeText.text = "";
                return;
            }
            let sec = UserData.resumePowerTimer % 60;
            let min = Math.floor(UserData.resumePowerTimer / 60);
            let secStr;
            if (sec < 10)
                secStr = "0" + sec;
            else
                secStr = sec.toString();
            let minStr;
            if (min < 10)
                minStr = "0" + min;
            else
                minStr = min.toString();
            this.powerResumeText.text = minStr + ":" + secStr;
        }
        headIconClick() {
            mm.main.showSetting();
        }
        updateUserInfo(userInfo) {
            if (userInfo.avatar_url != "") {
                this.playerHeadIcon.skin = userInfo.avatar_url;
            }
            this.playerNameLabel.text = userInfo.nick_name;
        }
        avGetRewardFunc(sceneID, value) {
            let shareKey;
            let videoID;
            switch (sceneID) {
                case TipsScene.notEnergy:
                    shareKey = ShareKeys.power;
                    videoID = VideoID.getPower;
                    break;
                case TipsScene.notGold:
                    shareKey = ShareKeys.gold;
                    videoID = VideoID.getGold;
                    break;
            }
            Platform.inst.showVideoOrShare(videoID, shareKey).then(() => {
                this.getReward(true, sceneID, value);
                UserData.saveData(1500);
            }).catch(() => {
                this.getReward(false, sceneID, value);
                ViewFlyword.showTip("需完整观看才能获取奖励哦");
            });
        }
        getReward(state, sceneID, value) {
            if (state) {
                switch (sceneID) {
                    case TipsScene.notEnergy:
                        UserData.power += (value || cfg.tips[sceneID].number);
                        TipsBoxView.showView([
                            {
                                icon: "game/view/common/common_icon_tili.png",
                                displayIndex: kTiliDisplayIndex,
                                desc: kTiliRewardDesc,
                                tips: `x${value || cfg.tips[sceneID].number}`
                            }
                        ]);
                        break;
                    case TipsScene.notGold:
                        UserData.gold += (value || cfg.tips[sceneID].number);
                        TipsBoxView.showView([{
                                icon: "game/view/common/common_icon_jinbi.png",
                                displayIndex: kJinbiDisplayIndex,
                                desc: kJinbiRewardDesc,
                                tips: `x${value || cfg.tips[sceneID].number}`
                            }]);
                        this.updateTechnologyInfo();
                        break;
                    case TipsScene.notDiamond:
                        UserData.diamond += (value || cfg.tips[sceneID].number);
                        TipsBoxView.showView([{
                                icon: "game/view/common/common_icon_zuanshi",
                                displayIndex: 0,
                                desc: "钻石",
                                tips: `x${value || cfg.tips[sceneID].number}`
                            }]);
                        break;
                }
            }
            else {
            }
        }
        showMainMenuAni(index) {
            this.mainMenuBoxs[this.curMenuIndex].visible = false;
            this.mainMenuBoxs[index].visible = true;
            this.curMenuIndex = index;
            if (index == 2) {
                this.headBox.visible = true;
            }
            else {
                this.headBox.visible = false;
            }
        }
        showSignView() {
            if (mm.main.bAlreadyShowSign) {
                return;
            }
            mm.main.bAlreadyShowSign = true;
            if (!SignView.isTodaySign()) {
                mm.main.showSignView();
            }
        }
        initShopView() {
            this._shopView = new ShopView(this.shopBox);
        }
        onEvtShowShopView() {
            this._shopView.onShow();
        }
        onEvtHideShopView() {
            this._shopView.onHide();
        }
    }

    class MenuView extends BaseViewLY {
        constructor() {
            super(...arguments);
            this.curSelectIndex = 2;
            this.iconSelectScaleRate = 0.85;
            this.offsetY = 30;
            this.isPlayMenuAni = false;
            this.canTouch = true;
        }
        get isFitBang() {
            return true;
        }
        onAwake() {
            this.tankBtn.on(Laya.Event.CLICK, this, this.tankBtnClick);
            this.shopBtn.on(Laya.Event.CLICK, this, this.shopBtnClick);
            this.battleBtn.on(Laya.Event.CLICK, this, this.battleBtnClick);
            this.technologyBtn.on(Laya.Event.CLICK, this, this.technologyBtnClick);
            this.rankBtn.on(Laya.Event.CLICK, this, this.rankBtnClick);
            this.btnArr = [this.shopBtn, this.tankBtn, this.battleBtn, this.technologyBtn, this.rankBtn];
            this.textArr = [this.shopText, this.tankText, this.battleText, this.technologyText, this.rankText];
            this.divArr = [this.div1, this.div2, this.div3, this.div4, this.div5];
            this.init();
        }
        onEnable() {
            this.showUpgradeDot();
            this.showHand(1);
        }
        setTouchState(state) {
            this.canTouch = state;
        }
        init() {
            this.oneGridWidth = Laya.stage.width / (this.btnArr.length + 1);
            this.selectOffsetWidth = this.oneGridWidth / 2;
            this.curSelectBG.width = this.oneGridWidth * 2;
            this.curSelectBG.x = Laya.stage.width / 2;
            for (let i = 0; i < this.btnArr.length; i++) {
                this.divArr[i].x = this.oneGridWidth * (i + 1);
                this.textArr[i].x = this.oneGridWidth * (i + 1);
            }
            this.btnArr[0].x = this.oneGridWidth * 0.5;
            this.btnArr[1].x = this.oneGridWidth * 1.5;
            this.btnArr[2].x = this.oneGridWidth * 3;
            this.btnArr[3].x = this.oneGridWidth * 4.5;
            this.btnArr[4].x = this.oneGridWidth * 5.5;
            this.baseY = this.shopBtn.y;
            this.tweenTime = cfg.global.menuTweenTime;
        }
        shopBtnClick() {
            if (!mm.main.mainView || !this.canTouch)
                return;
            XHSdk.removeAuthorizeBtn();
            mm.main.mainView.showRoleModel(mm.bag.getMainRoleModelRes(), 0);
            this.playSelectAni(0);
        }
        tankBtnClick() {
            if (!mm.main.mainView || !this.canTouch)
                return;
            mm.main.mainView.showRoleModel(mm.bag.getMainRoleModelRes(), 1, true);
            this.showUpgradeDot(false);
            mm.main.mainView.upgradeShowHand();
            this.showHand(2);
            this.playSelectAni(1);
            XHSdk.removeAuthorizeBtn();
        }
        battleBtnClick() {
            if (!mm.main.mainView || !this.canTouch)
                return;
            mm.main.mainView.showRoleModel(mm.bag.getMainRoleModelRes(), 2, true);
            mm.main.mainView.battleShowTaskRed();
            this.showUpgradeDot();
            this.showHand(1);
            this.playSelectAni(2);
            XHSdk.removeAuthorizeBtn();
        }
        technologyBtnClick() {
            if (!mm.main.mainView || !this.canTouch)
                return;
            mm.main.mainView.showRoleModel(mm.bag.getMainRoleModelRes(), 3);
            mm.main.mainView.updateTechnologyInfo();
            this.playSelectAni(3);
            XHSdk.removeAuthorizeBtn();
        }
        rankBtnClick() {
            return __awaiter(this, void 0, void 0, function* () {
                if (!mm.main.mainView || !this.canTouch)
                    return;
                try {
                    yield mm.main.mainView.globalRankBtnClick();
                    mm.main.mainView.showRoleModel(mm.bag.getMainRoleModelRes(), 4);
                    this.playSelectAni(4);
                }
                catch (err) {
                    console.error("rankbtnclick err ", err);
                    ViewFlyword.showTip("获取排行榜数据异常，请检查网络后重试。");
                }
            });
        }
        playSelectAni(targetIndex) {
            if (targetIndex == this.curSelectIndex || this.isPlayMenuAni)
                return;
            if (targetIndex == 0) {
                gEvent.event(MainEvent.showShopView);
            }
            else {
                gEvent.event(MainEvent.hideShopView);
            }
            this.isPlayMenuAni = true;
            mm.main.mainView.showMainMenuAni(targetIndex);
            Laya.Tween.clearAll(this);
            Timer.clearAll(this);
            this.textArr[this.curSelectIndex].visible = false;
            let tempCurSelectX = this.btnArr[this.curSelectIndex].x;
            let tempTargetX = this.btnArr[targetIndex].x;
            if (targetIndex > this.curSelectIndex) {
                Laya.Tween.to(this.btnArr[this.curSelectIndex], { x: tempCurSelectX - this.selectOffsetWidth, y: this.baseY, scaleX: 0.6, scaleY: 0.6 }, this.tweenTime);
                Laya.Tween.to(this.btnArr[targetIndex], { x: tempTargetX - this.selectOffsetWidth, y: this.baseY - this.offsetY, scaleX: this.iconSelectScaleRate, scaleY: this.iconSelectScaleRate }, this.tweenTime);
                for (let i = this.curSelectIndex + 1; i < targetIndex; i++) {
                    Laya.Tween.to(this.btnArr[i], { x: this.btnArr[i].x - this.oneGridWidth }, this.tweenTime);
                }
            }
            else {
                Laya.Tween.to(this.btnArr[this.curSelectIndex], { x: tempCurSelectX + this.selectOffsetWidth, y: this.baseY, scaleX: 0.6, scaleY: 0.6 }, this.tweenTime);
                Laya.Tween.to(this.btnArr[targetIndex], { x: tempTargetX + this.selectOffsetWidth, y: this.baseY - this.offsetY, scaleX: this.iconSelectScaleRate, scaleY: this.iconSelectScaleRate }, this.tweenTime);
                for (let i = this.curSelectIndex - 1; i > targetIndex; i--) {
                    Laya.Tween.to(this.btnArr[i], { x: this.btnArr[i].x + this.oneGridWidth }, this.tweenTime);
                }
            }
            Laya.Tween.to(this.curSelectBG, { x: this.oneGridWidth * (targetIndex + 1) }, this.tweenTime);
            Timer.once(this.tweenTime + 50, this, () => {
                this.textArr[targetIndex].visible = true;
                this.isPlayMenuAni = false;
            });
            this.curSelectIndex = targetIndex;
        }
        showUpgradeDot(state) {
            if (state != undefined) {
                this.upgradeRed.visible = state;
                this.upgradeArrow.visible = state;
            }
            else {
                this.upgradeArrow.visible = mm.bag.isShowEquipArrow();
                let hasUpgrade = false;
                for (let l = 0; l <= 5; l++) {
                    hasUpgrade = mm.bag.canUpgradeEquip(l);
                    if (hasUpgrade) {
                        this.upgradeArrow.visible = true;
                        hasUpgrade = true;
                        break;
                    }
                }
                if (this.upgradeArrow.visible == false && hasUpgrade == false) {
                    this.upgradeRed.visible = mm.bag.isShowComRedDot();
                }
            }
        }
        showHand(index, state) {
            let part = mm.bag.getRoleEquipPart(EquipPart.weapon);
            if (UserData.isPassedStage7()) {
                if (this.handClick.visible) {
                    this.handClick.visible = false;
                }
                return;
            }
            Timer.clearAll(this.handClick);
            this.timer.once(this.tweenTime, this.handClick, () => {
                if (index != -1) {
                    this.handClick.x = this.btnArr[index].x;
                    this.handClick.y = this.btnArr[index].y;
                }
                if (state != undefined) {
                    this.handClick.visible = state;
                    state && this.handClick.play();
                }
                if (index == 2) {
                    if (part.lv != 0) {
                        this.handClick.visible = true;
                        this.handClick.play();
                    }
                    else {
                        this.handClick.visible = false;
                    }
                }
                if (index == 1) {
                    if (UserData.gold >= 1001 && part.lv == 0) {
                        this.handClick.visible = true;
                        this.handClick.play();
                        mm.main.mainView && mm.main.mainView.showBattleHand(false);
                    }
                    else {
                        this.handClick.visible = false;
                        mm.main.mainView && mm.main.mainView.showBattleHand();
                    }
                }
            });
        }
    }

    class CommonView extends BaseViewLY {
        constructor() {
            super(...arguments);
            this.lastHasItem = true;
            this.itemTopOffset = 85;
        }
        onAwake() {
            this.dontDestroyOnLoad = true;
            this.initTipDialogBox();
        }
        onDestroy() {
            this.onBlackBGDestroy();
        }
        initTipDialogBox() {
            this.yellowBtn.on(Laya.Event.CLICK, this, this.yellowBtnClick);
            this.blueBtn.on(Laya.Event.CLICK, this, this.blueBtnClick);
        }
        showBlackBG(o2bDuration_ms, bDuration_ms, b2oDuration_ms, isTween = true) {
            Timer.clearAll(this.blackBG);
            Tween.clearAll(this.blackBG);
            if (!isTween) {
                this.blackBG.alpha = 1;
                return;
            }
            let tempTime = o2bDuration_ms;
            if (o2bDuration_ms == 0) {
                this.blackBG.alpha = 1;
            }
            else {
                Tween.to(this.blackBG, { alpha: 1 }, tempTime);
            }
            tempTime = tempTime + bDuration_ms;
            Timer.once(tempTime, this.blackBG, () => {
                Tween.to(this.blackBG, { alpha: 0 }, b2oDuration_ms);
            });
        }
        showRewardDialog(sceneID, blueFunc, yellowFunc, value) {
            this.yellowBtnFunc = yellowFunc;
            this.blueBtnFunc = blueFunc;
            this.tipSceneID = sceneID;
            this.rewardDialogValue = value;
            this.tipDialogBox.visible = true;
            this.titleImg.skin = `game/view/common/${cfg.tips[sceneID].title}.png`;
            this.desLabel.text = cfg.tips[sceneID].desc;
            this.blueImg.skin = `game/view/common/${cfg.tips[sceneID].button1}.png`;
            this.yellowImg.skin = `game/view/common/${cfg.tips[sceneID].button2}.png`;
            let rewardIconStr = cfg.tips[sceneID].itemIcon;
            if (cfg.tips[sceneID].isVideo) {
                this.videoIcon.visible = true;
                this.yellowImg.centerX = 25;
            }
            else {
                this.videoIcon.visible = false;
                this.yellowImg.centerX = 5;
            }
            if (rewardIconStr) {
                this.reward.visible = true;
                this.rewardIcon.skin = `game/view/common/${rewardIconStr}.png`;
                if (!value)
                    this.rewardLabel.text = "+" + cfg.tips[sceneID].number.toString();
                else
                    this.rewardLabel.text = value.toString();
                if (!this.lastHasItem)
                    this.desLabel.top -= this.itemTopOffset;
                this.lastHasItem = true;
            }
            else {
                this.reward.visible = false;
                if (this.lastHasItem)
                    this.desLabel.top += this.itemTopOffset;
                this.lastHasItem = false;
            }
            Platform.inst.showBanner(BannerID.fight);
        }
        yellowBtnClick() {
            this.yellowBtnFunc && this.yellowBtnFunc(this.tipSceneID, this.rewardDialogValue);
            this.tipDialogBox.visible = false;
            Platform.inst.hideBanner();
        }
        blueBtnClick() {
            this.blueBtnFunc && this.blueBtnFunc(this.tipSceneID, this.rewardDialogValue);
            this.tipDialogBox.visible = false;
            Platform.inst.hideBanner();
        }
        onBlackBGDestroy() {
            Timer.clearAll(this.blackBG);
            Tween.clearAll(this.blackBG);
        }
    }

    class DebugView extends BaseViewLY {
        onAwake() {
            this.dontDestroyOnLoad = true;
            this.btnBuff.on(Laya.Event.CLICK, this, this.onClickBuff);
            this.btnTank.on(Laya.Event.CLICK, this, this.onClickTank);
            this.btnClose.on(Laya.Event.CLICK, this, this.onClickClose);
            this.btnStage.on(Laya.Event.CLICK, this, this.btnStageClick);
            this.listBtn.renderHandler = Laya.Handler.create(this, this.renderList, null, false);
            this.listBtn.array = [
                { txt: "重置数据", listener: this.onClickResetData },
                { txt: "负载BUFF", listener: this.onClickMaxBuff },
                { txt: "切换高低配", listener: this.onClickSwitchQuality },
                { txt: "清怪", listener: this.onClickKillAllMonsterBtn },
                { txt: "加体力20", listener: this.onClickAddPower },
                { txt: "加金币和钻石各10000", listener: this.onClickAddGold },
                { txt: "改注册日期", listener: this.onClickChangeRegDate },
                { txt: "获得装备", listener: this.onClickAddEquip },
                { txt: "删卷轴", listener: this.onClickDelScroll },
                { txt: "本地签到", listener: this.onClickLocalSign },
                { txt: "科技增加至99", listener: this.onClickTec },
                { txt: "解锁章节", listener: this.onUnlockChange }
            ];
            Timer.loop(1000, this, this.onUpdate);
        }
        onClickClose() {
            this.close();
        }
        onClickTec() {
            UserData.technologyCount = 99;
        }
        onUnlockChange() {
            UserData.chap = 999;
        }
        renderList(cell, index) {
            let txt = cell.dataSource.txt;
            let listener = cell.dataSource.listener;
            let btn = cell.getChildByName("btn");
            btn.label = txt;
            btn.on(Laya.Event.CLICK, this, listener);
        }
        onClickAddPower() {
            UserData.power += 20;
        }
        onClickAddGold() {
            UserData.gold += 10000;
            UserData.diamond += 10000;
        }
        onClickResetData() {
            UserData.resetData();
            ViewFlyword.showTip("重置成功，重启游戏生效");
        }
        onClickMaxBuff() {
            for (let i = 1; i < 27; i++) {
                if (i == 4 || i == 24) {
                    continue;
                }
                MainRole.inst.addBuff(i);
            }
        }
        onClickSwitchQuality() {
            Device.setQuality(!Device.isLowOptDeviceByAuto);
            ViewFlyword.showTip("切换至" + (Device.isLowOptDeviceByAuto ? "低配" : "高配"));
        }
        onUpdate() {
            let str = "";
            if (!isNaN(mm.debug.tStageLoading)) {
                str += "关卡加载时长：" + mm.debug.tStageLoading + "\n";
            }
            if (MainRole.inst) {
                for (let k in MainRole.inst.attr) {
                    str += `${k}:${MainRole.inst.attr[k]}\n`;
                }
                str += "\n";
                str += "buff:[";
                for (let i = 0, n = MainRole.inst.buffs.length; i < n; i++) {
                    let buffID = MainRole.inst.buffs[i];
                    str += buffID;
                    if (i != n - 1) {
                        str += ",";
                    }
                }
                str += "]";
                this.txtContent.text = str;
            }
        }
        onClickBuff() {
            let buffID = parseInt(this.inputBuff.text);
            console.info("add buff ", buffID);
            MainRole.inst.addBuff(buffID);
        }
        onClickTank() {
            let tankRankLV = parseInt(this.inputTank.text);
            gEvent.event(GMEvent.changeTankRankLV, tankRankLV);
        }
        btnStageClick() {
            let stage = parseInt(this.inputStage.text);
            gEvent.event(GMEvent.changeStage, stage);
        }
        onClickKillAllMonsterBtn() {
            mm.fight.debugKillAllMonster();
        }
        onClickChangeRegDate() {
            let curDate = new Date();
            UserData.regDate = `${curDate.getFullYear()}-${Utils.numPrefix(curDate.getMonth() + 1, 2)}-${curDate.getDate()}T${curDate.getHours()}:${curDate.getMinutes()}:${curDate.getSeconds()}.000Z`;
            console.log("regDate", UserData.regDate, Utils.isSameDay(curDate.getTime(), new Date(UserData.regDate).getTime()));
        }
        onClickAddEquip() {
            let equipList = [10011, 10012, 10013, 10014, 10021, 10022, 10023, 10031, 10032];
            for (let i = 0, len = equipList.length; i < len; i++) {
                mm.bag.obtainItem(equipList[i]);
            }
            let scrollList = [20001, 20002, 20003, 20003];
            for (let i = 0, len = scrollList.length; i < len; i++) {
                mm.bag.obtainItem(scrollList[i], 100);
            }
        }
        onClickShowEvilStone() {
            mm.fight.showFightEvilViewPVE();
        }
        onClickShowLvUp() {
            mm.fight.showFightLevelUpViewPVE();
        }
        onClickShowRelive() {
            mm.fight.showFightReliveViewPVE();
        }
        onClickShowRefit() {
            mm.fight.showFightRefitViewPVE();
        }
        onClickAddGreenEquip() {
            let equipList = [11011, 11012, 11013, 11014, 11021, 11022, 11023, 11031, 11032];
            for (let i = 0, len = equipList.length; i < len; i++) {
                mm.bag.obtainItem(equipList[i]);
            }
        }
        onClickAddBlueEquip() {
            let equipList = [12011, 12012, 12013, 12014, 12021, 12022, 12023, 12031, 12032];
            for (let i = 0, len = equipList.length; i < len; i++) {
                mm.bag.obtainItem(equipList[i]);
            }
        }
        onClickAddPurppleEquip() {
            let equipList = [13011, 13012, 13013, 13014, 13021, 13022, 13023, 13031, 13032];
            for (let i = 0, len = equipList.length; i < len; i++) {
                mm.bag.obtainItem(equipList[i]);
            }
        }
        onClickAddOrangeEquip() {
            let equipList = [14011, 14012, 14013, 14014, 14021, 14022, 14023, 14031, 14032];
            for (let i = 0, len = equipList.length; i < len; i++) {
                mm.bag.obtainItem(equipList[i]);
            }
        }
        onClickAddRedEquip() {
            let equipList = [15011, 15012, 15013, 15014, 15021, 15022, 15023, 15031, 15032];
            for (let i = 0, len = equipList.length; i < len; i++) {
                mm.bag.obtainItem(equipList[i]);
            }
        }
        onClickDelScroll() {
            mm.bag.debug_delMaterials();
        }
        onClickLocalSign() {
            mm.debug.bLocalSign = !mm.debug.bLocalSign;
            console.log("本地时间签到：", mm.debug.bLocalSign);
        }
    }

    class NewChapterView extends BaseViewLY {
        onAwake() {
            let chapCfg = cfg.stageLevelCfg[UserData.chap];
            this.TitleText.changeText(chapCfg.name);
            let texPath = CommonRes.texture(chapCfg.icon);
            this.CurMap.skin = texPath;
            this.Desc.text = "介绍：" + (chapCfg.desc || "");
        }
    }

    function rankTitleUrl(name) {
        if (Platform.onMiniGame) {
            return `${remoteUrl}/${cfg.global.resVer}/game/view/RankTitle/${name}.png`;
        }
        else {
            return `game/view/RankTitle/${name}.png`;
        }
    }
    class TankRankView extends BaseViewLY {
        constructor() {
            super(...arguments);
            this.expAniTime = 500;
            this.expAniCaches = [];
            this.isExpAni = false;
            this.flyStars = [];
            this.startPoint = new Laya.Point();
            this.endPoint = new Laya.Point();
        }
        onAwake() {
            this.returnBtn.on(Laya.Event.CLICK, this, this.returnBtnClick);
            this.tankRankTaskBtn.on(Laya.Event.CLICK, this, this.tankRankTaskBtnClick);
            this.tankRankRewardBtn.on(Laya.Event.CLICK, this, this.tankRankRewardBtnClick);
            this.tipBox.on(Laya.Event.CLICK, this, this.tipBoxClick);
            this.tankRankRewardList.renderHandler = Laya.Handler.create(this, this.tankRankRewardListRender, null, false);
            this.mainTaskList.renderHandler = Laya.Handler.create(this, this.mainTaskListListRender, null, false);
            this.everydayTaskList.renderHandler = Laya.Handler.create(this, this.everydayTaskListRender, null, false);
            this.abilityList.renderHandler = Laya.Handler.create(this, this.abilityListRender, null, false);
            this.tankRankRewardList.vScrollBarSkin = "";
            this.mainTaskList.vScrollBarSkin = "";
            this.everydayTaskList.vScrollBarSkin = "";
            this.tipBox.on(Laya.Event.MOUSE_DOWN, this, () => { this.tipBox.visible = false; });
            this.tankRankRewardList.selectHandler = new Laya.Handler(this, (index) => {
                console.log("select index", index);
            }, null, false);
            this.uiLayout();
        }
        loadExtRes() {
            return __awaiter(this, void 0, void 0, function* () {
                let res2 = Resource.load(CommonRes.prefab("item"));
                yield res2;
            });
        }
        uiLayout() {
            const bangHeight = 55;
            const botHeight = 30;
            let boardH;
            let lowerHalfBox = this.getChildByName("lowerHalf");
            let lowerHalfBg = lowerHalfBox.getChildByName("lowerHalfBg");
            if (Device.isBangsScreen()) {
                this.displayBox.top += bangHeight;
                lowerHalfBox.top += bangHeight;
                this.returnBtn.top += bangHeight;
            }
            lowerHalfBox.height = Laya.stage.displayHeight - lowerHalfBox.top;
            if (Device.isBangsScreen()) {
                lowerHalfBox.height -= botHeight;
            }
            lowerHalfBg.height = lowerHalfBox.height;
            boardH = lowerHalfBg.height - 80;
            this.boardBg.height = boardH;
            this.tankRankTaskBox.height = boardH;
            this.mainTaskList.height = boardH - 320;
        }
        onEnable() {
            return __awaiter(this, void 0, void 0, function* () {
                this.expAniCaches = [];
                this.isExpAni = false;
                this.initData();
                mm.tankRank.updateEveryDayTask();
                mm.tankRank.updateTaskCalc();
                this.updateTaskRed();
                yield this.loadExtRes();
                this.taskLayout(true);
                this.updateRankRewardInfo();
                this.updateMainTaskInfo();
                this.updateEverydayTaskInfo();
                this.updateRankDisplay();
            });
        }
        returnBtnClick() {
            ViewManagerLY.close(ViewID.tankRank.name);
            mm.main.showView();
            mm.main.showMenu();
        }
        initData() {
            this.rankProgressLabel.text = `${mm.tankRank.getCurRankLVExp()}/${mm.tankRank.getCurRankMaxExp()}`;
            this.drawRankExpCircle(mm.tankRank.getCurRankLVExp() / mm.tankRank.getCurRankMaxExp());
            this.tankRankLV.skin = `${remoteUrl}/${cfg.global.resVer}/game/icon/${cfg.rankReward[mm.tankRank.getCurRankLV()].res}.png`;
        }
        tankRankTaskBtnClick() {
            this.tankRankRewardSelectBG.visible = false;
            this.tankRankTaskSelectBG.visible = true;
            this.tankRankRewardBox.visible = false;
            this.tankRankTaskBox.visible = true;
            this.everydayTaskList.refresh();
            this.mainTaskList.refresh();
        }
        tankRankRewardBtnClick() {
            this.tankRankRewardSelectBG.visible = true;
            this.tankRankTaskSelectBG.visible = false;
            this.tankRankRewardBox.visible = true;
            this.tankRankTaskBox.visible = false;
            this.tankRankRewardList.refresh();
        }
        tipBoxClick() {
            this.tipBox.visible = false;
        }
        drawRankExpCircle(percent) {
            if (!this.pieMask) {
                this.pieMask = this.pieMaskBox.graphics.drawPie(94, 94, 100, -90 - 360 * percent, -90, "#ff0000");
            }
            else {
                if (percent != 0) {
                    this.pieMask.startAngle = -90 - 360 * percent;
                }
                else {
                    this.pieMask.startAngle = -90 - 360 * percent - 1;
                }
                this.pieMaskBox.repaint();
            }
        }
        mainTaskListListRender(cell, index) {
            this.taskListRender(cell, index, mm.tankRank.tankRankModel.mainTask);
        }
        taskListRender(cell, index, task) {
            let id = cell.dataSource;
            let taskData = task[id];
            let originData = cfg.rankTask[id];
            let taskTitleLabel = cell.getChildByName("taskTitleLabel");
            let reputationNum = cell.getChildByName("reputationNum");
            let getRewardBtn = cell.getChildByName("getRewardBtn");
            let reachRateProgress = cell.getChildByName("reachRateProgress");
            let reachRateText = cell.getChildByName("reachRateText");
            taskTitleLabel.text = originData.desc;
            reputationNum.text = `${originData.prestige}`;
            reachRateProgress.value = (taskData.maxCount - taskData.count) / taskData.maxCount;
            reachRateText.text = `${taskData.maxCount - taskData.count}/${taskData.maxCount}`;
            function setTakeBtnEnabled(b) {
                getRewardBtn.gray = !b;
                getRewardBtn.mouseEnabled = b;
                let redDot = getRewardBtn.getChildAt(1);
                if (b) {
                    redDot.visible = true;
                }
                else {
                    redDot.visible = false;
                }
            }
            if (taskData.isGetReward) {
                setTakeBtnEnabled(false);
            }
            else if (taskData.isFinish) {
                setTakeBtnEnabled(true);
                getRewardBtn.offAllCaller(getRewardBtn);
                getRewardBtn.on(Laya.Event.CLICK, getRewardBtn, (f_id, f_taskType, f_reputationLabel, f_cell) => {
                    mm.tankRank.getTaskReward(f_id, f_taskType);
                    gPoint.x = f_reputationLabel.x;
                    gPoint.y = f_reputationLabel.y;
                    this.startPoint = f_cell.localToGlobal(gPoint, true);
                    gPoint.x = 0;
                    gPoint.y = 0;
                    this.endPoint = this.star.localToGlobal(gPoint, true);
                    Utils.flyItem2D("game/prefab/flyStar.json", 5, this.flyStars, this.startPoint.x, this.startPoint.y, this.endPoint.x, this.endPoint.y, 0.6, 70, this);
                }, [id, originData.type, reputationNum, cell]);
            }
            else {
                setTakeBtnEnabled(false);
            }
        }
        everydayTaskListRender(cell, index) {
            this.taskListRender(cell, index, mm.tankRank.tankRankModel.everyDayTask);
        }
        setRewardIcon(parent, cfg, x, y) {
            return __awaiter(this, void 0, void 0, function* () {
                let prefab = yield Resource.loadPrefab(CommonRes.prefab("item"));
                yield prefab.getComponent(Laya.Script).init(cfg[0], cfg[1]);
                prefab.pos(x, y);
                parent.addChild(prefab);
            });
        }
        tankRankRewardListRender(cell, index) {
            let lv = cell.dataSource;
            let taskData = mm.tankRank.tankRankModel.rankReward[lv];
            let originData = cfg.rankReward[lv];
            let tankRankImg = cell.getChildByName("tankRankImg");
            tankRankImg.skin = CommonRes.icon(originData.flag1);
            let title = tankRankImg.getChildByName("title");
            title.skin = CommonRes.icon(originData.res);
            let getRewardIcon = cell.getChildByName("getRewardIcon");
            let reward1Node = cell.getChildByName("reward1");
            let reward2Node = cell.getChildByName("reward2");
            let redDot = cell.getChildByName("redDot");
            redDot.visible = false;
            cell.offAll(Laya.Event.CLICK);
            if (taskData.isGetReward) {
                getRewardIcon.visible = true;
                reward1Node.visible = false;
                reward2Node.visible = false;
            }
            else {
                getRewardIcon.visible = false;
                reward1Node.visible = true;
                reward2Node.visible = true;
                this.setRewardIcon(reward1Node, originData.reward[0], 0, 0);
                this.setRewardIcon(reward2Node, originData.reward[1], 0, 0);
                let grayMask = cell.getChildByName("grayMask");
                if (lv <= mm.tankRank.getCurRankLV()) {
                    this.setRewardRed(true);
                    grayMask.visible = false;
                    redDot.visible = true;
                    cell.on(Laya.Event.CLICK, cell, (f_lv, f_data) => {
                        mm.tankRank.getRankReward(f_lv);
                        let infos = [];
                        for (let i = 0; i < 2; i++) {
                            let reward = f_data.reward[i];
                            let itemID = reward[0];
                            let num = reward[1];
                            let itemCfg = cfg.item[itemID];
                            let iconUrl;
                            if (eItemType.Number == itemCfg.type) {
                                switch (itemID) {
                                    case GoldItemID:
                                        iconUrl = kJinbiRewardIcon;
                                        break;
                                    case PowerItemID:
                                        iconUrl = kTiliRewardIcon;
                                        break;
                                    default:
                                        iconUrl = kJinbiRewardIcon;
                                        break;
                                }
                            }
                            else {
                                iconUrl = mm.bag.itemIconRes(itemCfg.icon);
                            }
                            let desIdx;
                            if (itemCfg.type == ItemType.other || itemCfg.type == ItemType.material) {
                                desIdx = kJinbiDisplayIndex;
                            }
                            else {
                                desIdx = itemCfg.qua;
                            }
                            let info = {
                                icon: iconUrl,
                                displayIndex: desIdx,
                                desc: itemCfg.name,
                                tips: `x${num}`,
                            };
                            infos.push(info);
                        }
                        TipsBoxView.showView(infos);
                    }, [lv, originData]);
                }
                else {
                    grayMask.visible = true;
                }
            }
        }
        updateRankRewardInfo() {
            this.setRewardRed(false);
            if (!this.rankRewardIDs) {
                this.rankRewardIDs = Object.keys(mm.tankRank.tankRankModel.rankReward);
                this.tankRankRewardList.array = this.rankRewardIDs;
            }
            this.tankRankRewardList.refresh();
            let rewardScroll = 0;
            let tankRankLV = mm.tankRank.getCurRankLV();
            for (let l in mm.tankRank.tankRankModel.rankReward) {
                let n = Number(l);
                if (n > tankRankLV)
                    break;
                if (mm.tankRank.tankRankModel.rankReward[l].isGetReward == false && n <= tankRankLV) {
                    rewardScroll = n;
                    break;
                }
            }
            if (rewardScroll != 0) {
                this.tankRankRewardList.scrollTo(rewardScroll - 2);
            }
            else {
                this.tankRankRewardList.scrollTo(tankRankLV - 1);
            }
        }
        taskLayout(isInit) {
            let hasTask = false;
            for (let l in mm.tankRank.tankRankModel.everyDayTask) {
                if (!mm.tankRank.tankRankModel.everyDayTask[l].isGetReward) {
                    hasTask = true;
                    break;
                }
            }
            if (hasTask) {
                if (isInit) {
                    this.everydayTaskTitle.visible = true;
                    this.mainTaskList.top = 390;
                    this.mianTaskTitle.top = 345;
                }
                else {
                    this.everydayTaskTitle.visible = true;
                    Tween.to(this.mainTaskList, { top: 390 }, 300);
                    Tween.to(this.mianTaskTitle, { top: 345 }, 300);
                }
            }
            else {
                if (isInit) {
                    this.everydayTaskTitle.visible = false;
                    this.mianTaskTitle.top = 35;
                    this.mainTaskList.top = 80;
                }
                else {
                    this.everydayTaskTitle.visible = false;
                    Tween.to(this.mianTaskTitle, { top: 35 }, 300);
                    Tween.to(this.mainTaskList, { top: 80 }, 300);
                }
            }
        }
        updateMainTaskInfo() {
            this.mainTaskIDs = this.getTaskObjKeys(mm.tankRank.tankRankModel.mainTask);
            this.mainTaskList.array = this.mainTaskIDs;
            this.mainTaskList.refresh();
        }
        updateEverydayTaskInfo() {
            this.everydayTaskIDs = this.getTaskObjKeys(mm.tankRank.tankRankModel.everyDayTask);
            this.everydayTaskList.array = this.everydayTaskIDs;
            this.everydayTaskList.refresh();
        }
        updateRankDisplay() {
            let id = mm.tankRank.getRewardID();
            if (id) {
                this.tankNode.visible = true;
                let rewardID = cfg.rankReward[id].rewardShow;
                Resource.load(mm.bag.itemIconRes(cfg.actor[rewardID].icon)).then(res => {
                    this.displayTankImg.texture = res;
                });
                this.tankNameLabel.text = cfg.actor[rewardID].des;
                this.tankConditionLabel.text = cfg.rankReward[id].name;
            }
            else {
                this.tankNode.visible = false;
            }
        }
        addExpAniData(data) {
            if (!this.isExpAni) {
                this.addExpAni(data.exp, data.lv);
            }
            else {
                this.expAniCaches.push(data);
            }
        }
        addExpAni(addExp, curLV) {
            this.isExpAni = true;
            if (!cfg.rankReward[curLV + 1]) {
                this.isExpAni = false;
                return;
            }
            Utils.clearNumberTween_Int(this.expAniFunc);
            let arr = this.rankProgressLabel.text.split('/');
            let beforeExp = Number(arr[0]);
            let beforeMaxExp = Number(arr[1]);
            let levelUpExp = beforeMaxExp - beforeExp;
            if (addExp >= levelUpExp) {
                this.expAniFunc = Utils.numberTween_Int(beforeExp, beforeMaxExp, this.expAniTime, (data, isResult) => {
                    if (!this.rankProgressLabel || this.rankProgressLabel.destroyed) {
                        Utils.clearNumberTween_Int(this.expAniFunc);
                        this.expAniCaches = [];
                        this.isExpAni = false;
                        return;
                    }
                    if (isResult) {
                        if (cfg.rankReward[curLV + 1] && cfg.rankReward[curLV + 1].prestige) {
                            this.rankProgressLabel.text = `${0}/${cfg.rankReward[curLV + 1].prestige}`;
                            this.drawRankExpCircle(0 / cfg.rankReward[curLV + 1].prestige);
                            this.tankRankLV.skin = `${remoteUrl}/${cfg.global.resVer}/game/icon/${cfg.rankReward[curLV + 1].res}.png`;
                            this.addExpAni(addExp - levelUpExp, curLV + 1);
                        }
                        else {
                            this.rankProgressLabel.text = `${0}/${9999}`;
                            this.drawRankExpCircle(0 / 9999);
                            this.isExpAni = false;
                            this.expAniCaches = [];
                            this.tankRankLV.skin = `${remoteUrl}/${cfg.global.resVer}/game/icon/${cfg.rankReward[curLV + 1].res}.png`;
                            this.isExpAni = false;
                            return;
                        }
                    }
                    else {
                        this.rankProgressLabel.text = `${data}/${beforeMaxExp}`;
                        this.drawRankExpCircle(data / beforeMaxExp);
                    }
                });
            }
            else {
                this.expAniFunc = Utils.numberTween_Int(beforeExp, addExp + beforeExp, this.expAniTime, (data, isResult) => {
                    if (!this.rankProgressLabel || this.rankProgressLabel.destroyed) {
                        Utils.clearNumberTween_Int(this.expAniFunc);
                        this.expAniCaches = [];
                        this.isExpAni = false;
                        return;
                    }
                    if (isResult) {
                        let expAni = this.expAniCaches.shift();
                        if (expAni) {
                            this.addExpAni(expAni.exp, expAni.lv);
                        }
                        else {
                            this.isExpAni = false;
                            return;
                        }
                    }
                    else {
                        this.rankProgressLabel.text = `${data}/${beforeMaxExp}`;
                        this.drawRankExpCircle(data / beforeMaxExp);
                    }
                });
            }
        }
        updateTaskRed() {
            this.setTaskRed(false);
            let hasFinishTask = false;
            for (let l in mm.tankRank.tankRankModel.mainTask) {
                if (mm.tankRank.tankRankModel.mainTask[l].isFinish && !mm.tankRank.tankRankModel.mainTask[l].isGetReward) {
                    this.setTaskRed(true);
                    hasFinishTask = true;
                    break;
                }
            }
            if (!hasFinishTask) {
                for (let l in mm.tankRank.tankRankModel.everyDayTask) {
                    if (mm.tankRank.tankRankModel.everyDayTask[l].isFinish && !mm.tankRank.tankRankModel.everyDayTask[l].isGetReward) {
                        this.setTaskRed(true);
                        break;
                    }
                }
            }
        }
        setTaskRed(state) {
            if (this.tankRankTaskRedShow.visible != state) {
                this.tankRankTaskRedHide.visible = state;
                this.tankRankTaskRedShow.visible = state;
            }
        }
        setRewardRed(state) {
            if (this.tankRankRewardRedShow.visible != state) {
                this.tankRankRewardRedShow.visible = state;
                this.tankRankRewardRedHide.visible = state;
            }
        }
        getTaskObjKeys(obj) {
            let unfinishKeys = [];
            let finishKeys = [];
            for (let key in obj) {
                if (obj[key].isGetReward)
                    continue;
                if (obj[key].isFinish) {
                    finishKeys.push(key);
                }
                else {
                    unfinishKeys.push(key);
                }
            }
            return [...finishKeys, ...unfinishKeys];
        }
        showTipBox(abArr) {
            this.tipBox.visible = true;
            this.abilityList.array = abArr;
            this.abilityList.refresh();
        }
        abilityListRender(cell, index) {
            let id = cell.dataSource;
            let icon = cell.getChildByName("abilityIcon");
            icon.skin = `${remoteUrl}/${cfg.global.resVer}/game/icon/${cfg.buff[id].icon}.png`;
        }
    }

    class SelChapView extends BaseViewLY {
        onClickConfirmBtn() {
            UserData.changeSelChap(this._curSelChap);
            ViewManagerLY.close(ViewID.selChap.name);
        }
        onClickBackBtn() {
            ViewManagerLY.close(ViewID.selChap.name);
        }
        initBtnHandler() {
            this.btnConfirm.on(Laya.Event.CLICK, this, this.onClickConfirmBtn);
            this.btnBack.on(Laya.Event.CLICK, this, this.onClickBackBtn);
        }
        loadMapTextures() {
            return __awaiter(this, void 0, void 0, function* () {
                let loadFuncArr = [];
                let chapNum = cfg.global.maxChapIdx;
                for (let i = 1; i <= chapNum; i++) {
                    let texUrl = CommonRes.texture(cfg.stageLevelCfg[i].icon);
                    let func = Resource.load(texUrl);
                    loadFuncArr.push(func);
                }
                for (let func of loadFuncArr) {
                    yield func;
                }
            });
        }
        updateListItem(cell, index) {
            if (!cell.dataSource) {
                cell.visible = false;
                return;
            }
            let chapCfg = cfg.stageLevelCfg[index + 1];
            let iconUrl = CommonRes.texture(chapCfg.icon);
            cell.getChildByName("CurMap").skin = iconUrl;
            if (UserData.chap >= index + 1) {
                cell.getChildByName("grayMask").visible = false;
                cell.getChildByName("imgLock").visible = false;
            }
            else {
                let grayMask = cell.getChildByName("grayMask");
                grayMask.mask.skin = iconUrl;
            }
        }
        initMapList() {
            let chapNum = cfg.global.maxChapIdx;
            this._maxChapNum = chapNum;
            this.listMaps.repeatX = chapNum;
            this.listMaps.renderHandler = Laya.Handler.create(this, this.updateListItem, null, false);
            this.listMaps.hScrollBarSkin = "";
            this.listMaps.scrollBar.rollRatio = 0;
            this.listMaps.scrollBar.tick = 2;
            let listData = [];
            for (let i = 0; i < chapNum; i++) {
                listData.push(true);
            }
            listData.push(false);
            this.listMaps.array = listData;
        }
        autoScroll() {
            let cellW = this.listMaps.cells[0].width;
            let idx = Math.floor((this.listMaps.scrollBar.value + Laya.stage.width / 2 - cellW / 2) / cellW);
            this.listMaps.tweenTo(idx);
            if (idx + 1 < this._maxChapNum) {
                this.onSwithChap(idx + 1);
            }
        }
        onScrollEnd(evt) {
            if (this._bSpeedTween) {
                return;
            }
            this.autoScroll();
        }
        onScrollCancel(evt) {
            if (this._bSpeedTween) {
                return;
            }
            this.autoScroll();
        }
        initScrollHandler() {
            let startStageX, startScrollBarVal, startItemIdx, startTime, isMouseDown;
            this.scrollLayer.on(Laya.Event.MOUSE_DOWN, this, (evt) => {
                isMouseDown = true;
                startStageX = evt.stageX;
                startScrollBarVal = this.listMaps.scrollBar.value;
                startItemIdx = this.listMaps.startIndex;
                startTime = Timer.curMs;
            });
            this.scrollLayer.on(Laya.Event.MOUSE_MOVE, this, (evt) => {
                if (!isMouseDown) {
                    return;
                }
                this.listMaps.scrollBar.value = startScrollBarVal + (startStageX - evt.stageX);
            });
            let onMoveUp = (evt) => {
                isMouseDown = false;
                let spd = (startStageX - evt.stageX) / (Timer.curMs - startTime);
                if (Math.abs(spd) > cfg.global.selChapViewSlideSpd) {
                    this._bSpeedTween = true;
                    let targetIdx;
                    if ((startStageX - evt.stageX) > 0) {
                        targetIdx = startItemIdx + 1;
                        if (targetIdx >= this._maxChapNum) {
                            return;
                        }
                    }
                    else {
                        targetIdx = startItemIdx - 1;
                        if (targetIdx < 0) {
                            return;
                        }
                    }
                    let targetPos = Math.floor(targetIdx * this.listMaps.scrollBar.scrollSize);
                    Tween.numberTween_Int(this.listMaps.scrollBar.value, targetPos, 500, (data) => {
                        this.listMaps.scrollBar.value = data;
                    });
                    this.onSwithChap(targetIdx + 1);
                }
                else {
                    this._bSpeedTween = false;
                    if (this.listMaps.startIndex + 1 != this._curSelChap && this.listMaps.startIndex >= 0 && this.listMaps.startIndex < this._maxChapNum) {
                        this.onSwithChap(this.listMaps.startIndex + 1);
                    }
                }
            };
            this.scrollLayer.on(Laya.Event.MOUSE_UP, this, onMoveUp);
        }
        onAwake() {
            return __awaiter(this, void 0, void 0, function* () {
                this.initBtnHandler();
                yield this.loadMapTextures();
                this.initMapList();
                this.initScrollHandler();
                this.initFirstShowChap();
            });
        }
        onSwithChap(chapIdx) {
            this._curSelChap = chapIdx;
            let chapCfg = cfg.stageLevelCfg[chapIdx];
            this.TitleText.text = `${chapIdx}.${chapCfg.name}`;
            let maxStageNum = chapCfg.stage.length;
            let passStageNum = 0;
            let displayStage = 0;
            if (UserData.chap > chapIdx) {
                passStageNum = maxStageNum;
                displayStage = passStageNum - 1;
            }
            else if (UserData.chap == chapIdx) {
                passStageNum = UserData.stage;
                displayStage = passStageNum - 2;
            }
            this.LevelText.text = `最高层数：${displayStage < 0 ? 0 : displayStage}/${maxStageNum - 1}`;
            this.labelDesc.text = `简介：${chapCfg.desc}`;
            if (chapIdx > UserData.chap) {
                this.labelReq.visible = true;
                this.labelReq.changeText(`· 通关第${chapIdx - 1}章解锁 ·`);
                this.btnConfirm.visible = false;
            }
            else {
                this.labelReq.visible = false;
                this.btnConfirm.visible = true;
            }
        }
        initFirstShowChap() {
            this._curSelChap = UserData.selChap || UserData.chap;
            this.listMaps.scrollTo(this._curSelChap - 1);
            this.onSwithChap(this._curSelChap);
        }
    }

    class FightLoadingView extends BaseViewLY {
        onAwake() {
            this.dontDestroyOnLoad = true;
            this._timeNeed2Destroy = -1;
        }
        onEnable() {
            super.onEnable();
            this.progressValue = 0;
            this.progressTargetValue = -1;
            this.alpha = 1;
            Tween.to(this.imgLoading, { scaleX: 1, scaleY: 1 }, 300);
        }
        setText(text) {
        }
        updateProgress(progress, duration = 1000) {
            return __awaiter(this, void 0, void 0, function* () {
                let targetValue = progress * 100;
                if (targetValue <= this.progressTargetValue) {
                    return;
                }
                this.progressTargetValue = targetValue;
                if (duration > 0) {
                    Tween.to(this.imgLoading, { rotation: progress * 360 }, duration);
                }
                else {
                    this.imgLoading.rotation = progress * 360;
                }
                if (progress >= 1) {
                    Tween.clearAll(this.imgLoading);
                    Tween.to(this.imgLoading, { scaleX: 30, scaleY: 30 }, 300);
                    this.close(null, ViewEffect.Alpha);
                }
            });
        }
        update(delta) {
            this.lastProgressV = this.progressTargetValue;
        }
        onClickReload() {
            mm.fight.preloadRes();
        }
        onEvtShowReloadBtn() {
        }
    }

    class SettingView extends BaseViewLY {
        onAwake() {
            this.btnClose.on(Laya.Event.CLICK, this, this.onBtnClose);
            this.boxAudio.on(Laya.Event.CLICK, this, this.onClickAudio);
            this.boxVibrate.on(Laya.Event.CLICK, this, this.onClickVibrate);
            this.boxIQ.on(Laya.Event.CLICK, this, this.onClickIQ);
        }
        onEnable() {
            if (XHSdk.isAuthorize) {
                this.authIcon.skin = `game/view/common/sz_txt_yishouquan.png`;
            }
            else {
                this.btnAuth.on(Laya.Event.CLICK, this, this.onAuth);
            }
            this.setUI(!AudioManager.isMuted(), this.boxAudio);
            this.setUI(Device.isVibrated, this.boxVibrate);
            this.setUI(Device.isLowOptDeviceByAuto, this.boxIQ);
            this.showFeedBackButton();
            this.initUserInfo();
        }
        initUserInfo() {
            this.chapStageLabel.text = `${UserData.chap}-${UserData.stage}`;
            this.nameLabel.text = XHSdk.userInfo.nick_name;
            this.headIcon.skin = XHSdk.userInfo.avatar_url;
        }
        onClickAudio() {
            let newStatus = !AudioManager.isMuted();
            AudioManager.setMuted(newStatus);
            this.mouseEnabled = false;
            this.setUI(!newStatus, this.boxAudio);
        }
        onClickVibrate() {
            let newStatus = !Device.isVibrated;
            Device.setVibrated(newStatus);
            this.mouseEnabled = false;
            this.setUI(newStatus, this.boxVibrate);
        }
        onClickIQ() {
            let newStatus = !Device.isLowOptDeviceByAuto;
            Device.setQuality(newStatus);
            this.mouseEnabled = false;
            this.setUI(newStatus, this.boxIQ);
        }
        setUI(status, node) {
            status ? this.onUI(node) : this.offUI(node);
        }
        onUI(node) {
            let closeImg = node.getChildByName('closeImg');
            closeImg.visible = false;
            let openImg = node.getChildByName("openImg");
            openImg.visible = true;
            this.mouseEnabled = true;
        }
        offUI(node) {
            let closeImg = node.getChildByName('closeImg');
            closeImg.visible = true;
            let openImg = node.getChildByName("openImg");
            openImg.visible = false;
            this.mouseEnabled = true;
        }
        onAuth() {
            return;
            XHSdk.tryAuthorize(this.btnAuth).then(() => {
                mm.main.mainView.updateUserInfo(XHSdk.userInfo);
                this.initUserInfo();
                this.authIcon.skin = `game/view/common/sz_txt_yishouquan.png`;
                this.btnAuth.off(Laya.Event.CLICK, this, this.onAuth);
            });
        }
        showFeedBackButton() {
        }
        onBtnClose() {
            this.close();
        }
        onDisable() {
            super.onDisable();
        }
    }

    class TecRewardView extends BaseViewLY {
        onAwake() {
            this.closeBtn.on(Laya.Event.CLICK, this, this.closeBtnClick);
            this.getRewardBtn.on(Laya.Event.CLICK, this, this.getRewardBtnClick);
            this.rewardList.renderHandler = Laya.Handler.create(this, this.rewardListRender, null, false);
        }
        onEnable() {
            this.minRewardLabel.text = `+${mm.technology.getTechnologyValue(8)}`;
            this.refreshRewardList();
            this.showOfflineTime();
            Timer.loop(1000, this, this.showOfflineTime);
        }
        onDisable() {
            Timer.clearAll(this);
            super.onDisable();
        }
        refreshRewardList() {
            this.rewardList.array = this.getRewardArr();
            this.rewardList.refresh();
        }
        showOfflineTime() {
            let total_s = Math.floor((Timer.curMs - UserData.offlineRewardTimestamp_longTime) / 1000);
            let s = total_s % 60;
            let total_m = Math.floor((total_s - s) / 60);
            let m = total_m % 60;
            let h = Math.floor((total_m - m) / 60);
            mm.technology.calcOfflineReward();
            this.timeLabel.text = `${h}:${m}:${s}`;
        }
        rewardListRender(cell, index) {
            let data = cfg.item[cell.dataSource];
            let bg = cell.getChildByName("bg");
            let icon1 = cell.getChildByName("icon1");
            let icon2 = cell.getChildByName("icon2");
            let count = cell.getChildByName("count");
            icon1.visible = false;
            icon2.visible = false;
            if (data.name == "金币") {
                icon1.visible = true;
                icon1.skin = "game/view/common/common_icon_jinbi.png";
            }
            else {
                Resource.load(mm.bag.itemIconRes(data.icon)).then(res => {
                    if (res) {
                        icon2.visible = true;
                        icon2.texture = res;
                    }
                });
            }
            bg.skin = "game/view/common/common_frame_golden.png";
            count.text = UserData.offlineReward[cell.dataSource].toString();
        }
        closeBtnClick() {
            this.close();
        }
        getRewardBtnClick() {
            mm.technology.getOfflineReward();
        }
        getRewardArr() {
            let arr = [];
            for (let l in UserData.offlineReward) {
                if (UserData.offlineReward[l] != 0) {
                    arr.push(l);
                }
            }
            return arr;
        }
    }

    class CollectRewardView extends BaseViewLY {
        onAwake() {
            this.resetBox();
            let gift = cfg.global.collectGift;
            this.collectReward.text = `${gift[1]}${cfg.item[gift[0]].name}`;
            this.returnBox.on(Laya.Event.CLICK, this, this.returnBoxClick);
        }
        onEnable() {
            this.playAni();
        }
        onDisable() {
            super.onDisable();
            this.resetBox();
        }
        playAni() {
            return __awaiter(this, void 0, void 0, function* () {
                yield Tween.to(this.c1, { alpha: 1 }, 1000);
                yield Tween.to(this.c1, {}, 1500);
                yield Tween.to(this.c2, { alpha: 1 }, 1000);
                yield Tween.to(this.c2, {}, 1500);
                yield Tween.to(this.c3, { alpha: 1 }, 1000);
                this.isFinishAni = true;
            });
        }
        returnBoxClick() {
            if (this.isFinishAni == false)
                return;
            this.close();
        }
        resetBox() {
            this.isFinishAni = false;
            Tween.clearAll(this);
            this.c1.alpha = 0;
            this.c2.alpha = 0;
            this.c3.alpha = 0;
        }
    }

    const ViewID = {
        loading: {
            name: "view.loading",
            clas: LoadingView,
            layout: CommonRes.viewLayout("loading", "Loading"),
            effect: ViewEffect.Alpha
        },
        fightLoading: {
            name: "view.fightLoading",
            clas: FightLoadingView,
            layout: CommonRes.viewLayout("loading", "FightLoading"),
            effect: ViewEffect.Alpha
        },
        fight: {
            name: "view.Fight",
            clas: FightViewPVE,
            layout: CommonRes.viewLayout("Fight", "Fight"),
            effect: ViewEffect.Alpha
        },
        end: {
            name: "view.End",
            clas: FightEndViewPVE,
            layout: CommonRes.viewLayout("Fight", "End"),
            effect: ViewEffect.Alpha
        },
        evil: {
            name: "view.Evil",
            clas: FightEvilView,
            layout: CommonRes.viewLayout("Fight", "Evil"),
            effect: ViewEffect.Alpha
        },
        fightLevelUp: {
            name: "view.FightLevelUp",
            clas: FightLevelUpView,
            layout: CommonRes.viewLayout("Fight", "FightLevelUp"),
            effect: ViewEffect.Alpha
        },
        refit: {
            name: "view.Refit",
            clas: FightRefitView,
            layout: CommonRes.viewLayout("Fight", "Refit"),
            effect: ViewEffect.Alpha
        },
        tiger: {
            name: "view.LuckDraw",
            clas: FightTigerView,
            layout: CommonRes.viewLayout("Fight", "LuckDraw"),
            effect: ViewEffect.Alpha
        },
        fightPause: {
            name: "view.FightPause",
            clas: FightPauseViewPVE,
            layout: CommonRes.viewLayout("Fight", "FightPause"),
            effect: ViewEffect.Alpha
        },
        relive: {
            name: "view.Relive",
            clas: FightReliveViewPVE,
            layout: CommonRes.viewLayout("Fight", "Relive"),
            effect: ViewEffect.Alpha
        },
        main: {
            name: "view.Main",
            clas: MainView,
            layout: CommonRes.viewLayout("Main", "Main"),
            effect: ViewEffect.Alpha
        },
        menu: {
            name: "view.Menu",
            clas: MenuView,
            layout: CommonRes.viewLayout("Main", "Menu"),
            effect: ViewEffect.Alpha
        },
        common: {
            name: "view.Common",
            clas: CommonView,
            layout: CommonRes.viewLayout("Main", "Common"),
            effect: ViewEffect.Alpha
        },
        newChapter: {
            name: "view.NewChapter",
            clas: NewChapterView,
            layout: CommonRes.viewLayout("Main", "NewChapter"),
            effect: ViewEffect.Alpha
        },
        selChap: {
            name: "view.SelChap",
            clas: SelChapView,
            layout: CommonRes.viewLayout("Main", "SelectChapter"),
            effect: ViewEffect.Alpha
        },
        debug: {
            name: "view.debug",
            clas: DebugView,
            layout: CommonRes.viewLayout("debug", "Debug"),
            effect: ViewEffect.Alpha
        },
        tankRank: {
            name: "view.TankRank",
            clas: TankRankView,
            layout: CommonRes.viewLayout("Main", "TankRank"),
            effect: ViewEffect.Alpha
        },
        tipsBox: {
            name: "view.TipsBox",
            clas: TipsBoxView,
            layout: CommonRes.viewLayout("Main", "TipsBox"),
            effect: ViewEffect.Alpha
        },
        setting: {
            name: "view.Setting",
            clas: SettingView,
            layout: CommonRes.viewLayout("Main", "Setting"),
            effect: ViewEffect.Alpha
        },
        tecTips: {
            name: "view.TecTips",
            clas: TecTipsView,
            layout: CommonRes.viewLayout("Main", "TecTips"),
            effect: ViewEffect.Alpha
        },
        equipDesc: {
            name: "view.EquipDesc",
            clas: EquipDescView,
            layout: CommonRes.viewLayout("Main", "EquipDesc"),
            effect: ViewEffect.None
        },
        comEquip: {
            name: "view.ComEquip",
            clas: ComEquipView,
            layout: CommonRes.viewLayout("Main", "ComEquip"),
            effect: ViewEffect.None
        },
        specialReward: {
            name: "view.SpecialReward",
            clas: FightSpecialRewardPVE,
            layout: CommonRes.viewLayout("Fight", "SpecialReward"),
            effect: ViewEffect.None
        },
        offlineReward: {
            name: "view.OfflineRewardTip",
            clas: TecRewardView,
            layout: CommonRes.viewLayout("Main", "OfflineRewardTip"),
            effect: ViewEffect.Alpha
        },
        collectReward: {
            name: "view.CollectReward",
            clas: CollectRewardView,
            layout: CommonRes.viewLayout("Main", "CollectReward"),
            effect: ViewEffect.Alpha
        },
        sign: {
            name: "view.Sign",
            clas: SignView,
            layout: CommonRes.viewLayout("Main", "Sign"),
            effect: ViewEffect.Alpha
        },
    };

    class LoadingController extends BaseController {
        show() {
            return __awaiter(this, void 0, void 0, function* () {
                this._loadingView = yield ViewManagerLY.show(ViewID.loading, ViewLayer.overlay);
                return this._loadingView;
            });
        }
        hide(duration = 1000) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield this.updateProgress(1, duration);
            });
        }
        showFightLoading() {
            return __awaiter(this, void 0, void 0, function* () {
                this._fightLoadingView = yield ViewManagerLY.show(ViewID.fightLoading, ViewLayer.overlay);
                this.updateFightLoadingProgress(0.2, "坦克正在进军...10%", 300);
            });
        }
        hideFightLoading() {
            return __awaiter(this, void 0, void 0, function* () {
                if (this._fightLoadingView) {
                    return yield this._fightLoadingView.updateProgress(1, 300);
                    ;
                }
            });
        }
        updateFightLoadingProgress(progress, text, duration) {
            if (!this._fightLoadingView) {
                return;
            }
            this._fightLoadingView.setText(text);
            this._fightLoadingView.updateProgress(progress, duration);
        }
        get progressValue() {
            let view = ViewManagerLY.getView(ViewID.loading.name);
            if (view) {
                return view.progressValue;
            }
            return 0;
        }
        updateProgress(value, duration) {
            return __awaiter(this, void 0, void 0, function* () {
                let view = ViewManagerLY.getView(ViewID.loading.name);
                if (view) {
                    return yield view.updateProgress(value, duration);
                    ;
                }
            });
        }
        setLoadingText(value) {
            let view = ViewManagerLY.getView(ViewID.loading.name);
            if (view) {
                view.setContent(value);
            }
        }
    }

    class MainScene extends BaseScene {
        onAwake() {
            super.onAwake();
        }
        onEnable() {
            super.onEnable();
            mm.main.showView();
            mm.main.showMenu();
        }
        onDestroy() {
            super.onDestroy();
        }
    }

    class MainController extends BaseController {
        get mainView() {
            return this._mainView;
        }
        get commonView() {
            return this._commonView;
        }
        get tipsBoxView() {
            return this._tipsBoxView;
        }
        get menuView() {
            return this._menuView;
        }
        enterScene() {
            return __awaiter(this, void 0, void 0, function* () {
                yield SceneManager.open(null, MainScene, SceneType.threed);
            });
        }
        showView() {
            return __awaiter(this, void 0, void 0, function* () {
                this._mainView = (yield ViewManagerLY.show(ViewID.main, ViewLayer.background));
                return this._mainView;
            });
        }
        showComEquipView() {
            return __awaiter(this, void 0, void 0, function* () {
                this._comEquipView = (yield ViewManagerLY.show(ViewID.comEquip, ViewLayer.normal));
                return this._comEquipView;
            });
        }
        showEquipDescView() {
            return __awaiter(this, void 0, void 0, function* () {
                this._equipDescView = (yield ViewManagerLY.show(ViewID.equipDesc, ViewLayer.popup));
                return this._equipDescView;
            });
        }
        showTecTipView() {
            return __awaiter(this, void 0, void 0, function* () {
                this._tecTipView = (yield ViewManagerLY.show(ViewID.tecTips, ViewLayer.popup));
                return this._tecTipView;
            });
        }
        showMenu() {
            return __awaiter(this, void 0, void 0, function* () {
                this._menuView = (yield ViewManagerLY.show(ViewID.menu, ViewLayer.normal));
                return this._menuView;
            });
        }
        showSetting() {
            return __awaiter(this, void 0, void 0, function* () {
                this._settingView = (yield ViewManagerLY.show(ViewID.setting, ViewLayer.popup));
                return this._settingView;
            });
        }
        showCommon() {
            return __awaiter(this, void 0, void 0, function* () {
                this._commonView = (yield ViewManagerLY.show(ViewID.common, ViewLayer.popup));
                return this._commonView;
            });
        }
        showNewChapterView() {
            return __awaiter(this, void 0, void 0, function* () {
                this._newChapterView = (yield ViewManagerLY.show(ViewID.newChapter, ViewLayer.popup, true, null, true));
                return this._newChapterView;
            });
        }
        showTipsBoxView() {
            return __awaiter(this, void 0, void 0, function* () {
                this._tipsBoxView = (yield ViewManagerLY.show(ViewID.tipsBox, ViewLayer.overlay));
                return this._tipsBoxView;
            });
        }
        showTecRewardView() {
            return __awaiter(this, void 0, void 0, function* () {
                this._tecRewardView = (yield ViewManagerLY.show(ViewID.offlineReward, ViewLayer.overlay));
                return this._tecRewardView;
            });
        }
        showCollectRewardView() {
            return __awaiter(this, void 0, void 0, function* () {
                this._collectRewardView = (yield ViewManagerLY.show(ViewID.collectReward, ViewLayer.overlay));
                return this._collectRewardView;
            });
        }
        showSignView() {
            return __awaiter(this, void 0, void 0, function* () {
                this._signView = (yield ViewManagerLY.show(ViewID.sign, ViewLayer.popup));
                return this._signView;
            });
        }
    }

    class TipsController extends BaseController {
        constructor() {
            super(...arguments);
            this.isShowingSystemTips = false;
        }
        showSystemTips(title, text, okCB) {
            return __awaiter(this, void 0, void 0, function* () {
                if (this.isShowingSystemTips) {
                    return;
                }
                this.isShowingSystemTips = true;
            });
        }
    }

    class FightController extends BaseController {
        constructor() {
            super();
            gEvent.on(GMEvent.changeStage, this, this.gmChangeStageEvent);
        }
        get scene() {
            return this._scene;
        }
        get fightView() {
            return this._fightView;
        }
        get fightLevelUpView() {
            return this._fightLevelUpView;
        }
        get tigerView() {
            return this._fightTigerView;
        }
        get specialRewardView() {
            return this._fightSpecialRewardView;
        }
        get chapIdx() {
            return this._chapIdx;
        }
        get stageIdx() {
            return this._stageIdx;
        }
        onUpdatePVE() {
            if (this._scene.isPlaying) {
                let deltaMs = Timer.deltaMs;
                Timer.manualUpdate(deltaMs);
                this._scene.updateGameFrame(deltaMs);
            }
        }
        initMonsterAdditionByGameTimes() {
            let chapCfg = this.getCurChapCfg();
            if (null == chapCfg.numInterval || null == chapCfg.attrRange || 0 == chapCfg.numInterval.length || 0 == chapCfg.attrRange.length) {
                this.gameTimesAddition = 1;
                return;
            }
            let gameTimes = UserData.gameTimesByChap[this._chapIdx];
            let intervalIdx = null;
            for (let i = 0, len = chapCfg.numInterval.length; i < len; i++) {
                if (gameTimes <= chapCfg.numInterval[i]) {
                    intervalIdx = i;
                    break;
                }
            }
            if (intervalIdx != null) {
                this.gameTimesAddition = chapCfg.attrRange[intervalIdx] / 100;
            }
            if (null == intervalIdx || null == this.gameTimesAddition) {
                let len = chapCfg.attrRange.length;
                this.gameTimesAddition = chapCfg.attrRange[len - 1] / 100;
            }
        }
        enterPVE() {
            return __awaiter(this, void 0, void 0, function* () {
                yield mm.loading.showFightLoading();
                mm.tankRank.updateTaskCalc();
                console.info(`[fight] enter pve scene`);
                if (UserData.unfiniRec) {
                    this._chapIdx = UserData.unfiniRec.chap;
                    this._stageIdx = UserData.unfiniRec.stage;
                    this._bBackToGame = true;
                    this.stashMainRoleBuffs = UserData.unfiniRec.buffs;
                    this.stashMainRoleExp = UserData.unfiniRec.exp;
                    this.stashMainRoleGold = UserData.unfiniRec.gold;
                    this.stashMainRoleHp = UserData.unfiniRec.hp;
                    this.stashMainRoleItems = UserData.unfiniRec.items;
                    this.bNewTrip = false;
                }
                else {
                    this.bNewTrip = true;
                    StatManager.tGameLoadingStart = Timer.curMs;
                    let evtKey = "stageloading";
                    let info = {
                        ["isSuccess"]: "0",
                    };
                    StatManager.tmStat(evtKey, info);
                    this._chapIdx = UserData.selChap || UserData.chap;
                    this._stageIdx = 0;
                }
                this.initMonsterAdditionByGameTimes();
                let chapCfg = this.getCurChapCfg();
                let sceneResName = chapCfg.scene;
                console.info("[fight] load scene");
                try {
                    this._scene = yield SceneManager.open(CommonRes.scene3D(sceneResName), FightScenePVE, SceneType.threed);
                }
                catch (err) {
                    console.error("enter pve failed, err=", err);
                    mm.tips.showSystemTips("网络异常", "加载场景资源失败", () => {
                        this.enterPVE();
                    });
                    return;
                }
                this._scene.enterChapeter(this._chapIdx);
                Timer.manualReset();
                Timer.frameLoop(1, this, this.onUpdatePVE);
                Timer.once(1000, this, () => {
                    Platform.inst.stopRecord();
                    Platform.inst.startRecord();
                });
            });
        }
        showFightViewPVE() {
            return __awaiter(this, void 0, void 0, function* () {
                this._fightView = (yield ViewManagerLY.show(ViewID.fight, ViewLayer.normal));
                return this._fightView;
            });
        }
        getFightViewPVE() {
            return this._fightView;
        }
        showFightPauseViewPVE() {
            return __awaiter(this, void 0, void 0, function* () {
                this._fightPauseView = (yield ViewManagerLY.show(ViewID.fightPause, ViewLayer.overlay));
                return this._fightPauseView;
            });
        }
        showFightLevelUpViewPVE() {
            return __awaiter(this, void 0, void 0, function* () {
                this._fightLevelUpView = (yield ViewManagerLY.show(ViewID.fightLevelUp, ViewLayer.popup));
                return this._fightLevelUpView;
            });
        }
        showFightEvilViewPVE() {
            return __awaiter(this, void 0, void 0, function* () {
                this._fightEvilView = (yield ViewManagerLY.show(ViewID.evil, ViewLayer.popup));
                return this._fightEvilView;
            });
        }
        showFightRefitViewPVE() {
            return __awaiter(this, void 0, void 0, function* () {
                this._fightRefitView = (yield ViewManagerLY.show(ViewID.refit, ViewLayer.popup));
                return this._fightRefitView;
            });
        }
        showFightTigerViewPVE() {
            return __awaiter(this, void 0, void 0, function* () {
                this._fightTigerView = (yield ViewManagerLY.show(ViewID.tiger, ViewLayer.popup));
                return this._fightTigerView;
            });
        }
        showFightSpecialRewardViewPVE() {
            return __awaiter(this, void 0, void 0, function* () {
                this._fightSpecialRewardView = (yield ViewManagerLY.show(ViewID.specialReward, ViewLayer.popup));
                return this._fightSpecialRewardView;
            });
        }
        showFightEndViewPVE() {
            return __awaiter(this, void 0, void 0, function* () {
                this._fightEndView = (yield ViewManagerLY.show(ViewID.end, ViewLayer.popup));
                return this._fightEndView;
            });
        }
        showFightReliveViewPVE() {
            return __awaiter(this, void 0, void 0, function* () {
                this._fightReliveView = (yield ViewManagerLY.show(ViewID.relive, ViewLayer.popup));
                return this._fightReliveView;
            });
        }
        setJoyStickStatePVE(state) {
            if (this._fightView) {
                this._fightView.setJoyStickState(state);
            }
        }
        getCurChapCfg() {
            return cfg.stageLevelCfg[this._chapIdx];
        }
        getCurStageCfg() {
            let chapCfg = this.getCurChapCfg();
            let stageCfgKey = chapCfg.stage[this._stageIdx - 1];
            return cfg.stageCfg[stageCfgKey];
        }
        preloadRes() {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    yield this._scene.preload(new Laya.Handler(this, function (num, sum) {
                        mm.loading.updateFightLoadingProgress(0.4 + num / sum * 0.5, `装填弹药中...${Math.ceil(num / sum * 100)}%`, 100);
                    }));
                    this.onPreloadFini();
                }
                catch (err) {
                    yield this.preloadRes();
                }
            });
        }
        onPreloadFini() {
            mm.loading.updateFightLoadingProgress(1, "进入场景中", 300);
            let stageCfg = this.getCurStageCfg();
            if (!stageCfg.type) {
                Timer.once(cfg.global.gameStartWaitMs, this.scene, this.scene.gameResume);
            }
            mm.loading.hideFightLoading();
            this.setJoyStickStatePVE(true);
        }
        enterNextStage(isShowLoading = false) {
            return __awaiter(this, void 0, void 0, function* () {
                console.info("[fight] enter next stage");
                this._stageIdx++;
                this._fightView.showPauseBtn(this._stageIdx - 1);
                this.updateNoobStageStatus();
                let back2Map;
                if (!this._bBackToGame) {
                    UserData.saveContinueData(false);
                }
                else {
                    back2Map = UserData.unfiniRec.map;
                }
                this._bBackToGame = false;
                console.info("[fight] show loading");
                if (isShowLoading) {
                    yield mm.loading.showFightLoading();
                }
                console.info("[fight] call scene enter stage");
                yield this._scene.enterStage(this._stageIdx, back2Map);
                mm.loading.updateFightLoadingProgress(0.3, "坦克正在进军...90%", 300);
                console.info("[fight] start preload");
                yield this.preloadRes();
                console.info("[fight] preload done");
                if (this._stageIdx == 1 && MainRole.inst && !MainRole.inst.isContinue && mm.technology.getTechnologyValue(9)) {
                    mm.fight.showFightLevelUpViewPVE();
                }
                this.showTips();
            });
        }
        showTips() {
            let stageCfg = this.getCurStageCfg();
            if (!stageCfg.type && stageCfg.rate == 1) {
                this.fightView.playSupplyTipAni(true);
            }
            if (stageCfg.type) {
                Timer.once(cfg.global.gameStartWaitMs, this, () => {
                    if (!(UserData.unfiniRec && UserData.unfiniRec.bStageFini)) {
                        this.setJoyStickStatePVE(false);
                        this.scene.gamePause();
                        this.fightView.playBossTipAni(true);
                    }
                });
                Timer.once(cfg.global.gameStartWaitMs + 1300, this, () => {
                    this.scene.gameResume();
                    this.setJoyStickStatePVE(true);
                });
            }
            this.fightView.playPassStageTipAni(true, this.chapIdx, this.stageIdx - 1);
        }
        onChapPassed() {
            mm.fight.fightView.playPassChapTipAni(false, this.chapIdx);
            FightEndViewPVE.showView(this.chapIdx, this.stageIdx - 1);
            this._chapIdx++;
            this._stageIdx = 0;
        }
        clacRenderQueue(x, z) {
            return RenderQueue.obj - (z * 10 + x);
        }
        fixSceneObjRenderState(obj, x, z, outMats) {
            this.setObjRenderQueue(obj, this.clacRenderQueue(x, z), outMats);
        }
        setObjRenderQueue(obj, renderQueue, outMats) {
            let mss = Utils.getChilds(obj, Laya.MeshSprite3D);
            if (mss != null && mss.length > 0) {
                for (let ms of mss) {
                    if (ms.meshRenderer == null) {
                        continue;
                    }
                    let material = ms.meshRenderer.material;
                    material.depthWrite = false;
                    material.renderQueue = renderQueue;
                    if (outMats) {
                        outMats.push(material);
                    }
                }
            }
        }
        rebound(curPos, lastPos, refSpd) {
            let logicPos = GridMapUtil.inst.convertWorldPos2LogicPos(curPos);
            let worldPos = GridMapUtil.inst.convertLogicPos2WorldPos(logicPos);
            Laya.Vector3.subtract(worldPos, lastPos || curPos, gVec3);
            if (Math.abs(gVec3.x) > Math.abs(gVec3.z)) {
                refSpd.x = -refSpd.x;
            }
            else {
                refSpd.z = -refSpd.z;
            }
            Laya.Vector3.add(lastPos || curPos, refSpd, gVec3);
            let gridType = this.scene.getGridTypeByWorld(gVec3);
            if (gridType == eSceneGridType.Block || gridType == eSceneGridType.Edge) {
                refSpd.x = -refSpd.x;
                refSpd.z = -refSpd.z;
            }
            return lastPos || curPos;
        }
        cleanUp() {
            Projectile.clear();
            SceneShadow.clear();
            MainRole.inst.destorySelf();
            MainRole.inst = null;
            GridMapUtil.inst.cleanUp();
            this._scene.clear();
            this._fightView = null;
            this._fightPauseView = null;
            this._fightLevelUpView = null;
            this._fightRefitView = null;
            this._fightEvilView = null;
            this._fightEndView = null;
            this._fightReliveView = null;
            this._fightTigerView = null;
            this._scene = null;
        }
        exitFight() {
            Timer.clear(this, this.onUpdatePVE);
            Timer.manualClearAll();
            this.cleanUp();
            mm.main.enterScene();
        }
        debugKillAllMonster() {
            this._scene.debugKillAllMonster();
        }
        isFighting() {
            return this._scene && this._scene.isFighting();
        }
        updateNoobStageStatus() {
            if (UserData.isPassedStage10()) {
                this.bPassedNoobStage10 = true;
                this.bPassedNoobStage7 = true;
                return;
            }
            else {
                if (this.stageIdx <= 10) {
                    this.bPassedNoobStage10 = false;
                }
                else {
                    this.bPassedNoobStage10 = true;
                }
                if (UserData.isPassedStage7()) {
                    this.bPassedNoobStage7 = true;
                }
                else {
                    if (this.stageIdx <= 7) {
                        this.bPassedNoobStage7 = false;
                    }
                    else {
                        this.bPassedNoobStage7 = true;
                    }
                }
            }
        }
        gmChangeStageEvent(data) {
            this._stageIdx = data;
        }
    }

    class DebugController extends BaseController {
        constructor() {
            super(...arguments);
            this.bLocalSign = false;
        }
        init() {
            this._clickCount = 0;
            Laya.stage.on(Laya.Event.CLICK, this, this.onStageClick);
        }
        onStageClick(arg) {
            if (arg.stageX < 100 && arg.stageY < 100) {
                this._clickCount++;
                if (this._clickCount >= 8) {
                    this._clickCount = 0;
                    this.showView();
                }
            }
            else {
                this._clickCount = 0;
            }
        }
        showView() {
            ViewManagerLY.show(ViewID.debug, ViewLayer.debug);
        }
    }

    class LoginController extends BaseController {
        constructor() {
            super();
        }
        login() {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    let loginData = yield Platform.inst.login();
                    if (loginData.openid != null && loginData.openid != "")
                        XHSdk.userInfo.open_id = loginData.openid;
                    if (loginData.avatarUrl != null && loginData.avatarUrl != "")
                        XHSdk.userInfo.avatar_url = loginData.avatarUrl;
                    if (loginData.nickName != null && loginData.nickName != "")
                        XHSdk.userInfo.nick_name = loginData.nickName;
                    Net.setHeaders("Authorization", "Bearer " + loginData.jwt);
                }
                catch (err) {
                    console.warn("login failed, start without net. err=", err);
                    return err;
                }
            });
        }
    }

    class TankRankModel extends BaseModel {
        constructor() {
            super(...arguments);
            this.tankRankLV = 1;
            this.tankRankExpCount = 0;
            this.everyDayTask = {};
            this.mainTask = {};
            this.rankReward = {};
            this.mainTaskIDArr = [];
            this.everydayTaskIDArr = [];
        }
    }

    class TankRankController extends BaseController {
        constructor() {
            super();
            gEvent.on(GMEvent.changeTankRankLV, this, this.onGMChangeTankRankLV);
        }
        get tankRankView() {
            return this._tankRankView;
        }
        get tankRankModel() {
            return this._tankRankModel;
        }
        showView() {
            return __awaiter(this, void 0, void 0, function* () {
                this._tankRankView = (yield ViewManagerLY.show(ViewID.tankRank, ViewLayer.background));
                return this._tankRankView;
            });
        }
        init() {
            this._tankRankModel = new TankRankModel();
            for (let id in cfg.rankTask) {
                let idNum = Number(id);
                if (cfg.rankTask[id].type == TaskType.mainTask) {
                    this._tankRankModel.mainTaskIDArr.push(idNum);
                }
                else {
                    this._tankRankModel.everydayTaskIDArr.push(idNum);
                }
            }
            if (UserData.tankRankData) {
                this._tankRankModel.tankRankLV = UserData.tankRankData.tankRankLV || 1;
                this._tankRankModel.tankRankExpCount = UserData.tankRankData.tankRankExpCount || 0;
                this._tankRankModel.everyDayTask = UserData.tankRankData.everyDayTask || {};
                this._tankRankModel.mainTask = UserData.tankRankData.mainTask;
                if (!this._tankRankModel.mainTask) {
                    this._tankRankModel.mainTask = {};
                    this.updateMainTask();
                }
                this._tankRankModel.rankReward = UserData.tankRankData.rankReward;
                if (!this._tankRankModel.rankReward) {
                    this._tankRankModel.rankReward = {};
                    this.updateRankReward();
                }
            }
            else {
                this.updateMainTask();
                this.updateRankReward();
                this.updateUserData();
            }
            if (UserData.unlockBuffIDs.length == 0 || UserData.unlockTankIDs.length == 0) {
                for (let lv = this._tankRankModel.tankRankLV; lv > 0; lv--) {
                    this.getRankHideReward(lv, true);
                }
            }
            this.updateEveryDayTask();
        }
        updateMainTask() {
            for (let id of this._tankRankModel.mainTaskIDArr) {
                if (!this._tankRankModel.mainTask || cfg.rankTask[id].sort > this._tankRankModel.tankRankLV || this._tankRankModel.mainTask[id])
                    continue;
                this._tankRankModel.mainTask[id] = {
                    count: cfg.rankTask[id].count,
                    isFinish: false,
                    isGetReward: false,
                    maxCount: cfg.rankTask[id].count,
                };
            }
            this.updateUserData();
        }
        updateEveryDayTask() {
            if (this._tankRankModel.tankRankLV < cfg.global.unlockEveryDayTaskTankRankLV)
                return;
            let everydayTaskIDArr = [...this._tankRankModel.everydayTaskIDArr];
            let date = new Date(Timer.curMs);
            let getTask = () => {
                for (let l = 0; l < cfg.global.everydayTaskCount; l++) {
                    let index = Math.floor(Math.random() * everydayTaskIDArr.length);
                    let id = everydayTaskIDArr[index];
                    this._tankRankModel.everyDayTask[id] = {
                        count: cfg.rankTask[id].count,
                        getDay: date.getDate(),
                        getTime: date.getTime() / 3600000,
                        isFinish: false,
                        isGetReward: false,
                        maxCount: cfg.rankTask[id].count,
                    };
                    everydayTaskIDArr.splice(index, 1);
                }
            };
            if (Object.keys(this._tankRankModel.everyDayTask).length == 0) {
                getTask();
            }
            else {
                let arr = Object.keys(this._tankRankModel.everyDayTask);
                if ((Math.abs(this._tankRankModel.everyDayTask[arr[0]].getDay - date.getDate()) > 0 && date.getHours() >= cfg.global.everydayTaskRefreshHour) || Math.abs(date.getTime() / 3600000 - this._tankRankModel.everyDayTask[arr[0]].getTime) >= 24) {
                    getTask();
                }
            }
            this.updateUserData();
        }
        updateRankReward() {
            for (let id in cfg.rankReward) {
                if (id == "1")
                    continue;
                this._tankRankModel.rankReward[id] = {
                    isGetReward: false,
                };
            }
            this.updateUserData();
        }
        updateTaskCalc() {
            this.calcTaskIsFinish(TaskTargetType.tankUpgrade, UserData.tankLV);
            if (UserData.unfiniRec) {
                this.calcTaskIsFinish(TaskTargetType.passChap, UserData.unfiniRec.stage - 1);
            }
            else {
                this.calcTaskIsFinish(TaskTargetType.passChap, UserData.stage - 2);
            }
        }
        calcTaskIsFinish(taskTargetType, value) {
            for (let id in this._tankRankModel.mainTask) {
                if (cfg.rankTask[id].subType == taskTargetType) {
                    switch (taskTargetType) {
                        case TaskTargetType.passChap:
                            this.passChapTask(this._tankRankModel.mainTask[id], id, value);
                            break;
                        case TaskTargetType.tankUpgrade:
                            this.tankUpgradeTask(this._tankRankModel.mainTask[id], id, value);
                            break;
                        case TaskTargetType.wipeMonster:
                            this.wipeMonsterTask(this._tankRankModel.mainTask[id], id, value);
                            break;
                        case TaskTargetType.battleNum:
                            this.battleNumTask(this._tankRankModel.mainTask[id], id, value);
                            break;
                    }
                }
            }
            for (let id in this._tankRankModel.everyDayTask) {
                if (cfg.rankTask[id].subType == taskTargetType) {
                    switch (taskTargetType) {
                        case TaskTargetType.passChap:
                            this.passChapTask(this._tankRankModel.everyDayTask[id], id, value);
                            break;
                        case TaskTargetType.tankUpgrade:
                            this.tankUpgradeTask(this._tankRankModel.everyDayTask[id], id, value);
                            break;
                        case TaskTargetType.wipeMonster:
                            this.wipeMonsterTask(this._tankRankModel.everyDayTask[id], id, value);
                            break;
                        case TaskTargetType.battleNum:
                            this.battleNumTask(this._tankRankModel.everyDayTask[id], id, value);
                            break;
                    }
                }
            }
            this.updateUserData();
        }
        passChapTask(task, id, value) {
            if (task.isFinish || cfg.rankTask[id].stageLevel > UserData.chap)
                return;
            if (value < 0)
                value = 0;
            task.count = task.maxCount - value;
            if (task.count <= 0 || cfg.rankTask[id].stageLevel < UserData.chap) {
                task.isFinish = true;
                task.count = 0;
            }
        }
        tankUpgradeTask(task, id, value) {
            if (task.isFinish)
                return;
            task.count = task.maxCount - value;
            if (task.count <= 0) {
                task.isFinish = true;
                task.count = 0;
            }
        }
        wipeMonsterTask(task, id, value) {
            if (task.isFinish)
                return;
            task.count -= value;
            if (task.count <= 0) {
                task.isFinish = true;
                task.count = 0;
            }
        }
        battleNumTask(task, id, value) {
            if (task.isFinish)
                return;
            task.count -= value;
            if (task.count <= 0) {
                task.isFinish = true;
                task.count = 0;
            }
        }
        getRankReward(id) {
            for (let i = 0; i < 2; i++) {
                let reward = cfg.rankReward[id].reward[i];
                let itemID = reward[0];
                let num = reward[1];
                let itemCfg = cfg.item[itemID];
                if (eItemType.Number == itemCfg.type) {
                    switch (itemID) {
                        case GoldItemID:
                            UserData.gold += num;
                            break;
                        case PowerItemID:
                            UserData.power += num;
                            break;
                    }
                }
                else {
                    mm.bag.obtainItem(itemID, num);
                }
            }
            this._tankRankModel.rankReward[id].isGetReward = true;
            this._tankRankView.updateRankRewardInfo();
            this.updateUserData();
            UserData.saveData(1000);
        }
        getTaskReward(id, taskType) {
            switch (taskType) {
                case TaskType.mainTask:
                    this.addExp(cfg.rankTask[id].prestige);
                    this._tankRankModel.mainTask[id].isGetReward = true;
                    this._tankRankView.updateMainTaskInfo();
                    break;
                case TaskType.everyDayTask:
                    this.addExp(cfg.rankTask[id].prestige);
                    this._tankRankModel.everyDayTask[id].isGetReward = true;
                    this._tankRankView.updateEverydayTaskInfo();
                    break;
            }
            this._tankRankView.taskLayout(false);
            this._tankRankView.updateTaskRed();
            this.updateTaskCalc();
            this.updateUserData();
            UserData.saveData(1000);
        }
        getRankHideReward(lv, isInit = false) {
            if (!cfg.rankReward[lv])
                return;
            if (cfg.rankReward[lv].openBuff && UserData.unlockBuffIDs.findIndex((value) => { return value == cfg.rankReward[lv].openBuff[0]; }) == -1) {
                BuffManager.unlockBuffIDs(cfg.rankReward[lv].openBuff, isInit);
                if (lv != 1) {
                    this._tankRankView.showTipBox(cfg.rankReward[lv].openBuff);
                }
            }
        }
        addExp(exp) {
            let tempTankLV = this._tankRankModel.tankRankLV;
            this._tankRankModel.tankRankExpCount += exp;
            let tempExpCount = this._tankRankModel.tankRankExpCount;
            let tempLV = 1;
            while (true) {
                if (cfg.rankReward[tempLV].prestige) {
                    if (tempExpCount >= cfg.rankReward[tempLV].prestige) {
                        tempExpCount -= cfg.rankReward[tempLV].prestige;
                        ++tempLV;
                    }
                    else {
                        break;
                    }
                }
                else {
                    break;
                }
            }
            let upgradeLV = tempLV - this._tankRankModel.tankRankLV;
            this.levelUp(upgradeLV);
            this._tankRankView.addExpAniData({ exp: exp, lv: tempTankLV });
        }
        levelUp(upgradeLV) {
            this._tankRankModel.tankRankLV += upgradeLV;
            if (this._tankRankModel.tankRankLV == cfg.global.unlockEveryDayTaskTankRankLV) {
                this.updateEveryDayTask();
            }
            this.updateMainTask();
            this.getRankHideReward(this._tankRankModel.tankRankLV);
            this._tankRankView.updateRankDisplay();
            this._tankRankView.updateRankRewardInfo();
            this._tankRankView.updateMainTaskInfo();
            this._tankRankView.updateEverydayTaskInfo();
            this.updateUserData();
        }
        updateUserData() {
            if (!UserData.tankRankData) {
                UserData.tankRankData = {
                    tankRankLV: this._tankRankModel.tankRankLV,
                    tankRankExpCount: this._tankRankModel.tankRankExpCount,
                    everyDayTask: this._tankRankModel.everyDayTask,
                    mainTask: this._tankRankModel.mainTask,
                    rankReward: this._tankRankModel.rankReward
                };
            }
            else {
                UserData.tankRankData.tankRankLV = this._tankRankModel.tankRankLV;
                UserData.tankRankData.tankRankExpCount = this._tankRankModel.tankRankExpCount;
                UserData.tankRankData.everyDayTask = this._tankRankModel.everyDayTask;
                UserData.tankRankData.mainTask = this._tankRankModel.mainTask;
                UserData.tankRankData.rankReward = this._tankRankModel.rankReward;
            }
        }
        getRewardID() {
            for (let id in cfg.rankReward) {
                if (cfg.rankReward[id].rewardShow && this._tankRankModel.rankReward[id].isGetReward == false) {
                    return id;
                }
            }
            return null;
        }
        getCurRankLVExp() {
            let tempExpCount = this._tankRankModel.tankRankExpCount;
            for (let id in cfg.rankReward) {
                let idNum = Number(id);
                if (idNum < this._tankRankModel.tankRankLV) {
                    tempExpCount -= (cfg.rankReward[idNum].prestige || 0);
                }
            }
            return tempExpCount;
        }
        getCurRankMaxExp() {
            let l = cfg.rankReward[this._tankRankModel.tankRankLV].prestige;
            if (l != undefined) {
                return l;
            }
            return 9999;
        }
        getCurRankLV() {
            return this._tankRankModel.tankRankLV;
        }
        onGMChangeTankRankLV(data) {
            this._tankRankModel.tankRankLV = data;
            this.updateUserData();
        }
    }

    class TechnologyModel extends BaseModel {
        constructor() {
            super();
            this.technologyData = {
                hp: 0,
                atk: 0,
                recoverHP: 0,
                armoured: 0,
                atkSpd: 0,
                inspire: 0,
                protection: 0,
                timeEarnings: 0,
                honour: false
            };
            this.seqTechnologyArr = [];
            this.disorderTechnologyArr = [];
            for (let l of Object.keys(cfg.technology)) {
                this.seqTechnologyArr.push(Number(l));
                this.disorderTechnologyArr.push(Number(l));
            }
        }
    }

    class TechnologyController extends BaseController {
        constructor() {
            super(...arguments);
            this._isInitOfflineReward = false;
        }
        get model() {
            return this._model;
        }
        init() {
            this._model = new TechnologyModel();
            this.initOfflineReward();
        }
        getTechnology() {
            let id;
            if (UserData.technologyCount < cfg.global.technologyDefaultIDs.length) {
                id = cfg.global.technologyDefaultIDs[UserData.technologyCount];
            }
            else {
                let arr = this.getCanRndTechnologyArr();
                id = arr[Math.floor(Math.random() * arr.length)];
            }
            id = Number(id);
            console.log("[technology] get technology id:", id);
            this.recordTechnology(id);
            return id;
        }
        getTechnologyObj() {
            for (let l in UserData.technology) {
                let t = cfg.technology[l];
                if (cfg.technology[l].value) {
                    this._model.technologyData[t.var] = t.value * UserData.technology[l].count;
                }
                else {
                    this._model.technologyData[t.var] = true;
                }
            }
            return this._model.technologyData;
        }
        getTechnologyValue(id) {
            let value;
            if (UserData.technology[id]) {
                if (cfg.technology[id].value) {
                    value = UserData.technology[id].count * cfg.technology[id].value;
                }
                else {
                    value = true;
                }
            }
            else {
                if (cfg.technology[id].value) {
                    value = 0;
                }
                else {
                    value = false;
                }
            }
            return value;
        }
        recordTechnology(id) {
            if (UserData.technology[id]) {
                UserData.technology[id].count++;
            }
            else {
                UserData.technology[id] = { count: 1 };
            }
            this.initOfflineReward(id);
            UserData.technologyCount++;
            UserData.saveData(1000);
        }
        getCanRndTechnologyArr() {
            let arr = [];
            for (let l in cfg.technology) {
                if (UserData.technology[l] && UserData.technology[l].count >= cfg.technology[l].limit) {
                    continue;
                }
                arr.push(l);
            }
            return arr;
        }
        initOfflineReward(id) {
            if (this._isInitOfflineReward)
                return;
            if (UserData.offlineRewardTimestamp_longTime != 0) {
                this.calcOfflineReward();
                this._isInitOfflineReward = true;
                return;
            }
            if (id && cfg.technology[id].name == "时间收益") {
                UserData.offlineRewardTimestamp_gold = Timer.curMs;
                UserData.offlineRewardTimeStamp_item = Timer.curMs;
                UserData.offlineRewardTimestamp_longTime = Timer.curMs;
                this.calcOfflineReward();
                this._isInitOfflineReward = true;
                if (mm.main && mm.main.mainView && mm.main.mainView.destroyed == false) {
                    mm.main.mainView.offlineRewardBtn.visible = true;
                }
                return;
            }
        }
        calcOfflineReward() {
            if (!UserData.offlineReward["1"]) {
                UserData.offlineReward["1"] = 0;
            }
            let offlineTimeSub_s = (Timer.curMs - UserData.offlineRewardTimestamp_gold) / 1000;
            let goldCount = Math.floor(offlineTimeSub_s / cfg.global.offlineRewardTimeStep_gold);
            UserData.offlineReward["1"] += goldCount * this.getTechnologyValue(8);
            UserData.offlineRewardTimestamp_gold = Timer.curMs - (offlineTimeSub_s % cfg.global.offlineRewardTimeStep_gold) * 1000;
            offlineTimeSub_s = (Timer.curMs - UserData.offlineRewardTimeStamp_item) / 1000;
            let itemCount = Math.floor(offlineTimeSub_s / cfg.global.offlineRewardTimeStep_item);
            for (let l = 0; l < itemCount; l++) {
                let rndSpooler = cfg.global.offlineScrollType[Math.floor(cfg.global.offlineScrollType.length * Math.random())];
                if (!UserData.offlineReward[rndSpooler]) {
                    UserData.offlineReward[rndSpooler] = cfg.global.offlineReawrdCount_item;
                }
                else {
                    UserData.offlineReward[rndSpooler] += cfg.global.offlineReawrdCount_item;
                }
            }
            UserData.offlineRewardTimeStamp_item = Timer.curMs - (offlineTimeSub_s % cfg.global.offlineRewardTimeStep_item) * 1000;
            if (goldCount != 0 || itemCount != 0) {
                UserData.saveData(1000);
                if (this._view && this._view.destroyed == false && this._view.visible) {
                    this._view.refreshRewardList();
                }
            }
        }
        getOfflineReward() {
            if (this.isHasOfflineReward() == false)
                return;
            UserData.offlineRewardTimestamp_gold = Timer.curMs;
            UserData.offlineRewardTimeStamp_item = Timer.curMs;
            UserData.offlineRewardTimestamp_longTime = Timer.curMs;
            let rewardArr = [];
            for (let l in UserData.offlineReward) {
                let item = cfg.item[l];
                if (item.name == "金币") {
                    UserData.gold += UserData.offlineReward[l];
                    rewardArr.push({
                        icon: "game/view/common/common_icon_jinbi.png",
                        displayIndex: kJinbiDisplayIndex,
                        desc: item.name,
                        tips: `x${UserData.offlineReward[l]}`
                    });
                }
                else {
                    if (UserData.offlineReward[l] != 0) {
                        mm.bag.obtainItem(Number(l), UserData.offlineReward[l]);
                        rewardArr.push({
                            icon: mm.bag.itemIconRes(item.icon),
                            displayIndex: kJuanzhouDisplayIndex,
                            desc: item.name,
                            tips: `x${UserData.offlineReward[l]}`
                        });
                    }
                }
                UserData.offlineReward[l] = 0;
            }
            UserData.saveData();
            TipsBoxView.showView(rewardArr);
            if (this._view && this._view.destroyed == false && this._view.visible) {
                this._view.close();
            }
        }
        isHasOfflineReward() {
            let b = false;
            for (let l in UserData.offlineReward) {
                if (UserData.offlineReward[l] != 0) {
                    b = true;
                    break;
                }
            }
            return b;
        }
        showOfflineReward() {
            return __awaiter(this, void 0, void 0, function* () {
                this._view = yield mm.main.showTecRewardView();
            });
        }
    }

    class PlayerRankModel extends BaseModel {
        constructor() {
            super();
            this.playerRankData = [];
        }
        getPlayerRankData() {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    let data = yield Net.httpGet('ranklist', { period: "life" });
                    let originData = Utils.decodeBase64WithSaltV2(data);
                    this.playerRankData = originData.data.ranks.filter((val) => {
                        return val.nickname != "坦克突击队" && val.nickname != "X" && val.nickname != "X";
                    });
                    let selfIndex = this.playerRankData.findIndex((item) => {
                        return item.openid == XHSdk.userInfo.open_id;
                    });
                    if (selfIndex != -1) {
                        this.selfRankData = this.playerRankData[selfIndex];
                        this.selfRankData.index = selfIndex;
                    }
                }
                catch (err) {
                    throw "getPlayerRankData" + err;
                }
            });
        }
    }

    class PlayerRankController extends BaseController {
        constructor() {
            super(...arguments);
            this._isInit = false;
        }
        get model() {
            return this._model;
        }
        init() {
            if (this._isInit)
                return;
            this._model = new PlayerRankModel();
            this._isInit = true;
        }
        showFirendRank(spr, scrollType = "", scrollY) {
        }
        saveData(chap, stage) {
            let score = chap * 1000 + stage;
            let obj = {
                period: "life",
                nickname: XHSdk.userInfo.nick_name,
                headimgurl: XHSdk.userInfo.avatar_url,
                score: score
            };
            let data = Utils.encodeBase64WithSaltV2(obj);
            Net.httpPost("ranklist", data, NetResponseType.text, { "Content-Type": "text/plain" });
            Platform.inst.updateScore(score);
        }
    }

    class ModuleManager {
        constructor() {
            this.loading = new LoadingController();
            this.main = new MainController();
            this.tips = new TipsController();
            this.fight = new FightController();
            this.bag = new BagController();
            this.debug = new DebugController();
            this.login = new LoginController();
            this.tankRank = new TankRankController();
            this.technology = new TechnologyController();
            this.playerRank = new PlayerRankController();
        }
        ;
    }
    const mm = new ModuleManager();

    var REG = Laya.ClassUtils.regClass;
    var ui;
    (function (ui) {
        var game;
        (function (game) {
            var view;
            (function (view) {
                var animation;
                (function (animation) {
                    class UIMouseDownUI extends Laya.EffectAnimation {
                        constructor() { super(); this.effectData = UIMouseDownUI.uiView; }
                    }
                    UIMouseDownUI.uiView = { "type": "View", "props": {}, "compId": 2, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "game/view/Fight/battle_bar3$bar.png", "anchorY": 0.5, "anchorX": 0.5 }, "compId": 3 }], "animations": [{ "nodes": [{ "target": 3, "keyframes": { "scaleY": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "scaleY", "index": 0 }, { "value": 0.85, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "scaleY", "index": 4 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 3, "label": null, "key": "scaleY", "index": 8 }], "scaleX": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "scaleX", "index": 0 }, { "value": 0.85, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "scaleX", "index": 4 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 3, "label": null, "key": "scaleX", "index": 8 }], "anchorY": [{ "value": 0.5, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "anchorY", "index": 0 }, { "value": 0.5, "tweenMethod": "linearNone", "tween": true, "target": 3, "label": null, "key": "anchorY", "index": 8 }], "anchorX": [{ "value": 0.5, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "anchorX", "index": 0 }, { "value": 0.5, "tweenMethod": "linearNone", "tween": true, "target": 3, "label": null, "key": "anchorX", "index": 8 }] } }], "name": "down", "id": 1, "frameRate": 50, "action": 0 }], "loadList": ["game/view/Fight/battle_bar3$bar.png"], "loadList3D": [] };
                    animation.UIMouseDownUI = UIMouseDownUI;
                    REG("ui.game.view.animation.UIMouseDownUI", UIMouseDownUI);
                    class UIMouseUpUI extends Laya.EffectAnimation {
                        constructor() { super(); this.effectData = UIMouseUpUI.uiView; }
                    }
                    UIMouseUpUI.uiView = { "type": "View", "props": {}, "compId": 2, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "game/view/Fight/battle_bar3$bar.png", "anchorY": 0.5, "anchorX": 0.5 }, "compId": 3 }], "animations": [{ "nodes": [{ "target": 3, "keyframes": { "y": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "y", "index": 0 }], "x": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "x", "index": 0 }], "scaleY": [{ "value": 1.2, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "scaleY", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "scaleY", "index": 5 }], "scaleX": [{ "value": 1.2, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "scaleX", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "scaleX", "index": 5 }], "anchorY": [{ "value": 0.5, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "anchorY", "index": 0 }], "anchorX": [{ "value": 0.5, "tweenMethod": "linearNone", "tween": true, "target": 3, "key": "anchorX", "index": 0 }] } }], "name": "up", "id": 2, "frameRate": 24, "action": 0 }], "loadList": ["game/view/Fight/battle_bar3$bar.png"], "loadList3D": [] };
                    animation.UIMouseUpUI = UIMouseUpUI;
                    REG("ui.game.view.animation.UIMouseUpUI", UIMouseUpUI);
                })(animation = view.animation || (view.animation = {}));
            })(view = game.view || (game.view = {}));
        })(game = ui.game || (ui.game = {}));
    })(ui || (ui = {}));

    class GameUpdateManager {
        static check() {
            if (this._hasCheck) {
                return;
            }
            this._hasCheck = true;
        }
    }
    GameUpdateManager._hasCheck = false;

    class Launcher extends Laya.Script {
        constructor() { super(); }
        preload() {
            return __awaiter(this, void 0, void 0, function* () {
                yield Promise.all([]);
            });
        }
        sceneProgressHandler(progress) {
        }
        regUIAnimation() {
            Laya.ClassUtils.regClass("ui.game.view.animation.UIMouseDownUI", ui.game.view.animation.UIMouseDownUI);
            Laya.ClassUtils.regClass("ui.game.view.animation.UIMouseUpUI", ui.game.view.animation.UIMouseUpUI);
        }
        reConstruct() {
            console.info("re construct");
            mm.tips.showSystemTips("温馨提示", "初始化失败，请重试", res => {
                this.enterGame();
            });
        }
        onAwake() {
            return __awaiter(this, void 0, void 0, function* () {
                console.info("[launcher] onawake");
                XHSdk.sendLoadingLog("progressStart");
                GameUpdateManager.check();
                console.info("[launcher] setup");
                Pool.setup();
                Projectile.setup();
                SceneManager.setup();
                ViewManagerLY.setup();
                this.regUIAnimation();
                SceneManager.handleProgress(Laya.Handler.create(this, this.sceneProgressHandler, null, false));
                Net.setBaseUrl(ServerList.ServerUrl);
                yield Timer.wait(1);
                yield this.enterGame();
            });
        }
        enterGame() {
            return __awaiter(this, void 0, void 0, function* () {
                console.info("[launcher] load config");
                yield cfg.load();
                yield mm.loading.show();
                let useNet = true;
                if (useNet) {
                    console.info("[launcher] init platform");
                    try {
                        let loginRes = yield mm.login.login();
                        if (loginRes != null) {
                            console.info("login failed, usenet false");
                            useNet = false;
                        }
                    }
                    catch (err) {
                        console.info("login failed, usenet false, err=", err);
                        useNet = false;
                    }
                }
                console.info("[launcher] login finish.");
                yield this.initServerTime();
                if (useNet) {
                    DB.setup(DBType.Server);
                }
                else {
                    DB.setup(DBType.localStorage);
                }
                AudioManager.setup();
                Device.setup();
                console.info("[launcher] init user");
                yield UserData.init();
                try {
                    mm.tankRank.init();
                }
                catch (err) {
                    console.error(err);
                    this.reConstruct();
                    return;
                }
                try {
                    mm.technology.init();
                }
                catch (err) {
                    console.error(err);
                    this.reConstruct();
                    return;
                }
                BuffManager.init();
                try {
                    yield mm.bag.init();
                }
                catch (err) {
                    console.error(err);
                    this.reConstruct();
                    return;
                }
                console.info("[launcher] preload");
                yield this.preload();
                yield mm.main.showCommon();
                console.info("[launcher] enter main scene");
                try {
                    if (UserData.isNewPlayer()) {
                        yield mm.loading.updateProgress(1, 1500);
                        yield mm.loading.hide();
                        mm.fight.enterPVE();
                    }
                    else {
                        yield mm.main.enterScene();
                        yield mm.loading.updateProgress(1, 1000);
                        mm.loading.hide();
                    }
                }
                catch (err) {
                    console.error(err);
                    this.reConstruct();
                    return;
                }
                XHSdk.sendLoadingLog("progressEnd");
                console.info("[launcher] done");
                if (UserData.isNewPlayer() == false) {
                    if (UserData.unfiniRec) {
                        this.showUnfiniTripTip();
                    }
                    if (UserData.bNewChapNotice) {
                        UserData.onShowNewChapNotice();
                        mm.main.showNewChapterView();
                    }
                }
            });
        }
        showUnfiniTripTip() {
            let func_cancel = () => {
                UserData.cancelUnfiniTrip();
            };
            let func_confirm = () => {
                mm.fight.enterPVE();
            };
            mm.main.commonView.showRewardDialog(TipsScene.hint, func_cancel, func_confirm);
        }
        initServerTime() {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    let serverTimeRes = yield Net.httpGet("serverTime");
                    console.info("[launcher] server time ", serverTimeRes);
                    if (serverTimeRes.data != null) {
                        Timer.setServerTime(serverTimeRes.data);
                    }
                    else {
                        Timer.setServerTime(Laya.timer.currTimer);
                    }
                }
                catch (err) {
                    Timer.setServerTime(Laya.timer.currTimer);
                }
                Timer.loop(1, this, (deltaMs) => {
                    Timer.updateServerTime(deltaMs);
                });
            });
        }
    }

    class Item extends Laya.Script {
        initNodes() {
            this._bg = this.owner;
            this._icon = this._bg.getChildByName("icon");
            this._numLabel = this._bg.getChildByName("numLabel");
        }
        init(itemID, num) {
            return __awaiter(this, void 0, void 0, function* () {
                this.initNodes();
                let itemCfg = cfg.item[itemID];
                if (itemID <= 3) {
                    this._icon.skin = `game/view/common/${itemCfg.icon}.png`;
                    this._bg.skin = "game/view/common/common_frame_golden.png";
                }
                else {
                    this._icon.skin = mm.bag.itemIconRes(itemCfg.icon);
                    this._bg.skin = mm.bag.itemQuaRes(itemCfg.qua);
                }
                if (num) {
                    this._numLabel.text = num.toString();
                }
                else {
                    this._numLabel.visible = false;
                }
            });
        }
    }

    class GameConfig {
        constructor() { }
        static init() {
            var reg = Laya.ClassUtils.regClass;
            reg("game/init/Launcher.ts", Launcher);
            reg("game/prefab/SkillIcon.ts", SkillIcon);
            reg("game/prefab/Item.ts", Item);
        }
    }
    GameConfig.width = 720;
    GameConfig.height = 1280;
    GameConfig.scaleMode = "fixedauto";
    GameConfig.screenMode = "vertical";
    GameConfig.alignV = "middle";
    GameConfig.alignH = "center";
    GameConfig.startScene = "game/init/Launcher.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.init();

    class Main {
        constructor() {
            if (window["Laya3D"])
                Laya3D.init(GameConfig.width, GameConfig.height);
            else
                Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
            Laya["Physics"] && Laya["Physics"].enable();
            Laya["DebugPanel"] && Laya["DebugPanel"].enable();
            Laya.stage.scaleMode = GameConfig.scaleMode;
            Laya.stage.screenMode = GameConfig.screenMode;
            Laya.stage.alignV = GameConfig.alignV;
            Laya.stage.alignH = GameConfig.alignH;
            Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
            if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true")
                Laya.enableDebugPanel();
            if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"])
                Laya["PhysicsDebugDraw"].enable();
            if (GameConfig.stat)
                Laya.Stat.show();
            Laya.alertGlobalError(true);
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);
        }
    }
    new Main();

}());
