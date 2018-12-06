/**
 * 去掉字符串中的所有空格
 */
String.prototype.trimAll = function () {
    return this && this.replace(/\s/g, '');
};

/**
 * 正常控制台日志输出
 * @param {String} msg 需要输出的内容
 */
const log = msg => {
    console.log(msg);
};

/**
 * 正常控制台断言输出
 * @param {Boolean} condition 用作判断的等式
 * @param {String} msg 需要输出的内容
 */
const assert = (condition, msg) => {
    console.assert(condition, msg);
};

/**
 * 将当前拼接字段的sql字符串分割成对应可以使用的数组
 * @param {String} fieldData 当前字段名
 */
const getFormatField = fieldData => {
    let tempFieldIndexArrs = [];
    let tempFieldStrArrs = [];
    let sqlReg = /[A-Za-z_][A-Za-z_.0-9]*\(.*?\)+|\((([^()]|\(([^()])*\)|\(([^()]|\(([^()])*\))*\)))*\)+|"(?:[^"]|\"|"")*"+|'[^'](?:|\'|'')*'+|-|=|[0-9]+|[^ \n,]+|,/g;
    fieldData.replace(sqlReg, (full, key, value, a, b, c, index) => {
        let oldIndex = tempFieldIndexArrs.length;
        oldIndex = oldIndex > 0 ? tempFieldIndexArrs[oldIndex - 1] + 1 : 0;
        let checkIndex = index + full.length;
        let isEnd = checkIndex === fieldData.length;
        if (full === ',' || isEnd) {
            tempFieldIndexArrs.push(index);
            tempFieldStrArrs.push(fieldData.substring(oldIndex, isEnd ? checkIndex : index));
        }
    });

    return tempFieldStrArrs;
};

/**
 * 将数据集字段字符串转化成对象
 * @param {String} data 需要转化的数据集字段
 */
const splitSetField = data => {
    const errStr = '字段别名不允许重复,字段名与别名之间只能通过大写的AS进行分割';
    let paramsArr = getFormatField(data);
    let paramsObj = {};
    let resErr = false;
    let paramStringLength = 0;
    let _name = '';
    let _value = '';
    let nameValue = '';

    for (let i = 0; i < paramsArr.length; i++) {
        nameValue = paramsArr[i];
        if (nameValue.indexOf(' As') > -1 || nameValue.indexOf(' aS') > -1) {
            resErr = true;
            break;
        }
        let equalIndex = nameValue.indexOf(' AS');
        if (equalIndex > -1) {
            paramStringLength = nameValue.length;
            _name = nameValue.substring(0, equalIndex);
            _value = nameValue.substring(equalIndex + 4, paramStringLength);
        } else {
            equalIndex = nameValue.indexOf('  '); // 判读是否通过三个空格来进行区分
            if (equalIndex > -1) {
                paramStringLength = nameValue.length;
                _name = nameValue.substring(0, equalIndex);
                _value = nameValue.substring(equalIndex + 3, paramStringLength);
                _name = _name.trim();
                _value = _value.trim();
            } else { // 如果又没有找到as又没有找到三个空格，则代表没有写别名
                _name = nameValue.trimAll();
                _value = nameValue.trimAll();
            }

        }
        if (paramsObj[_value]) { // 如果这个属性值已经存在，说明别名存在重复
            resErr = true;
            break;
        } else {
            paramsObj[_value] = _name;
        }

    }
    if (resErr) {
        paramsObj = errStr;
    }
    return paramsObj;
};

/**
 * 添加字段字符串sql的测试案例
 * @param {String} testStrSql 用于检测的字段sql字符串
 * @param {Number} assertLength 用于断言将会出现多少个字段
 */
const assertSqlParser = (testStrSql, assertLength) => {
    let res = splitSetField(testStrSql);
    log(res);
    if (typeof res === 'object') {
        let checkLength = Object.keys(res).length;
        assert(checkLength === assertLength, '字段解析失败');
    }
};

/**
 * 实际开始检测sql解析
 */
(() => {
    let rightStr01 = 'F1,F2,B,FF';
    let rightStr02 = 'F1 AS A,F2 AS B,FF AS C';
    let rightStr03 = "MD5_CHK( SELECT F0 FROM T0 WHERE C1<1),F2,NVL(F3,F4 ),(SELECT F5,F51,F52 FROM (SELECT F6 FROM (SELECT F61 FROM T10 WHERE C10=1) WHERE F7>1)  T1 WHERE  F8 ='1') AS C,TO_NUMBER(REGEXP_REPLACE('124ADC123','[^0-9]'))";
    let rightStr04 = "F1,MD5_CHK( SELECT F0 FROM T0 WHERE C1<1),F2,NVL(F3,F4 ) AS B,(SELECT F5,F51,F52 FROM (SELECT F6 FROM (SELECT F61 FROM T10 WHERE C10=1) WHERE F7>1)  T1 WHERE  F8 ='1') AS C,TO_NUMBER(REGEXP_REPLACE('124ADC123','[^0-9]'))   FF";

    let errStr01 = 'F1,F1,B,FF';// 存在重复字段，抛出错误
    let errStr02 = 'F1 As A,F2 aS B,FF AS C';// 存在错误的AS写法，抛出错误

    assertSqlParser(rightStr01, 4);// 输出转译之后的字段对象，{F1: "F1", F2: "F2", B: "B", FF: "FF"}
    assertSqlParser(rightStr02, 3);// 输出转译之后的字段对象，{A: "F1", B: "F2", C: "FF"}
    assertSqlParser(rightStr03, 5);// 输出转译之后的字段对象，
    assertSqlParser(rightStr04, 5);// 正常应该解析到有六个字段，这边故意设置成5个方便错误断言输出。

    assertSqlParser(errStr01);// 字段别名不允许重复,字段名与别名之间只能通过大写的AS进行分割
    assertSqlParser(errStr02);// 字段别名不允许重复,字段名与别名之间只能通过大写的AS进行分割
})();
