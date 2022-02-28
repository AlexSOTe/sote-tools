"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CopyText = exports.CreateViewKey = exports.entryUrlQuery = exports.GetCurrentDate = exports.QueryToJson = exports.JsonToQuery = void 0;
/**
 * json对象 转换成 ?a=1&b=2&c=3 的样子
 * @param {any} json json对象
 */
function JsonToQuery(json) {
    var query = '?';
    for (var key in json) {
        query += "".concat(key, "=").concat(json[key], "&");
    }
    return query.slice(0, -1);
}
exports.JsonToQuery = JsonToQuery;
/**
 * 把'?brandId=1&modelId=19427'的字符串转换为json对象
 * @param url 带转换字符串
 * @param seperator1 用来替换与号（&）的分隔符，默认是与号（&）
 * @param seperator2 用来替换等号（=）的分隔符，默认是等号（=）
 */
function QueryToJson(url, seperator1, seperator2) {
    if (seperator1 === void 0) { seperator1 = '&'; }
    if (seperator2 === void 0) { seperator2 = '='; }
    var obj = {};
    var q = url.split('?')[1] || '';
    q.split(seperator1).forEach(function (v) {
        var valArr = v.split(seperator2);
        var key = valArr[0];
        var val = valArr[1];
        obj[key] = val;
    });
    return obj;
}
exports.QueryToJson = QueryToJson;
/**
 * 获取当前时间的年月日：2021-01-01
 * @param {any} timeStamp 目标时间戳
 */
function GetCurrentDate(timeStamp) {
    var date = timeStamp ? new Date(timeStamp) : new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    month = month.toString().padStart(2, '0');
    var day = date.getDate().toString().padStart(2, '0');
    return "".concat(year, "-").concat(month, "-").concat(day);
}
exports.GetCurrentDate = GetCurrentDate;
/**
 * 获取项目入口url上面的参数
 */
exports.entryUrlQuery = (function () { return QueryToJson(location.href); })();
/**
 * 创建用于template遍历的key
 * 禁止在template中使用，会重新渲染template造成已改变template数据的丢失
 */
function CreateViewKey() {
    return "ViewKey_".concat(new Date().getTime());
}
exports.CreateViewKey = CreateViewKey;
/**
 * 复制传入的文字（暂不考虑）兼容性
 * @param text
 */
function CopyText(text) {
    var _a;
    return (_a = navigator === null || navigator === void 0 ? void 0 : navigator.clipboard) === null || _a === void 0 ? void 0 : _a.writeText(text);
}
exports.CopyText = CopyText;
