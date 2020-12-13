"use strict";

var testData = [{ _id: '1', name: 'a' }, { _id: '2', name: 'b' }];
var arrToObj = function (arr) {
    return arr.reduce(function (prev, current) {
        console.log("prev",prev)
        console.log("current",current)
        if (current._id) {
            prev[current._id] = current;
        }
        return prev;
    }, {});
};
var result = arrToObj(testData);
console.log(result);
// {1: {…}, 2: {…}}
// 1: {_id: "1", name: "a"}
// 2: {_id: "2", name: "b"}

var objToArr = function (obj) {
    return Object.keys(obj).map(function (key) { return obj[key]; });
};
var testData2 = {
    1: { _id: '1', name: 'a' },
    2: { _id: '2', name: 'b' }
};
var result2 = objToArr(testData2);
console.log(result2);
// (2) [{…}, {…}]
// 0: {_id: "1", name: "a"}
// 1: {_id: "2", name: "b"}
