/*
 * @Author: melon.wuEva 
 * @Date: 2018-02-25 13:48:40 
 * @Last Modified by: melon.wuEva
 * @Last Modified time: 2018-02-25 19:12:07
 */

"use strict";

//wuEva 常用功能集中插件
var moTool = {
    //将html字符串内容按照固定格式进行分割
    splitTagStr: function (str, tagStr, flag) {
        /**
         * @param str String 被检索的字符串
         * @param tagStr String 用来做分割tag标签名
         * @param flag Number 数据返回模式
         *        0 只返回第一次匹配的值，默认值  String   
         *        1 返回所有匹配的值 array   
         */
        let res = null;
        const tacitFlag = 0;
        if (!flag) {
            flag = tacitFlag;
        } else {
            if (typeof(flag) !== "number") {
                flag = tacitFlag;
            }
        } 

        let searchReg = new RegExp("<" + tagStr + "(.*?)>.*?<\/" + tagStr + ">", "g");
        switch (flag) {
        case 0:
            res = str.match(searchReg)[0];
            break;
        case 1:
            res = str.match(searchReg);
            break;
        default:
            res = str.match(searchReg)[0];
        }

        return res;
    },
    //截取html字符串中某段标签内容
    cutTagStr: function (str, tagStr, flag) {
        /**
         * @param str String 被检索的字符串
         * @param tagStr String 需要选中的tag标签名
         * @param flag Number 数据返回模式
         *        0 只返回被检索标签内容，默认值  String   
         *        1 只返回剔除了检索标签内容的字符串    String       
         *        2 返回，被检索标签内容，和剔除了检索标签内容的字符串    Json   
         *          {tag:只返回被检索标签内容,text:剔除了检索标签内容的字符串}
         */
        let res = null;
        const tacitFlag = 0;
        let searchReg = new RegExp("<" + tagStr + "(.*?)>(.+)<\/" + tagStr + ">", "g");
        if (!flag) {
            flag = tacitFlag;
        } else {
            if (typeof(flag) !== "number") {
                flag = tacitFlag;
            }
        }
        switch (flag) {
        case 0:
            res = str.match(searchReg)[0];
            break;
        case 1:
            res = str.replace(searchReg, "");
            break;
        case 2:
            res = {tag: str.match(searchReg)[0], text: str.replace(searchReg, "")};
            break;
        default:
            res = {tag: str.match(searchReg)[0], text: str.replace(searchReg, "")};
        }

        return res;
    }
};


