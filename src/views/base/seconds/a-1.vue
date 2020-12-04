<template>
    <div>
        a-1111111
    </div>
</template>

<script>


export default {
    data(){
        return{
            seconds:["a1"],
            comName: "a1"
        }
    },
    mounted() {
        this.dothings()
        this.createEvent()
        this.mergeObj()
    },
    methods: {
        createEvent(){
            // var event = new Event('some_event');

            // // Listen for the event.
            // window.addEventListener('some_event', function (e) { 
            //     console.log('some_event triggered') 
            // }, false);

            // // Dispatch the event.
            // window.dispatchEvent(event);

            function triggerEvent(elem, name){
                var ev;
                if (document.createEvent) {
                    ev = document.createEvent("HTMLEvents");
                    ev.initEvent(name, true, true);
                    ev.eventName = name;
                    elem.dispatchEvent(ev);
                } else {
                    ev = document.createEventObject();
                    ev.eventType = name;
                    ev.eventName = name;
                    elem.fireEvent("on" + ev.eventType, event);
                }
            }
            window.addEventListener("click", function(e){
                console.log("Clicked");
            });
            window.addEventListener("custom_event", function(e){
                console.log("custom_event triggered");
            });
            triggerEvent(window, "click");
            triggerEvent(window, "custom_event");
        },
        mergeObj(){
            const merge = (...objs) =>
                [...objs].reduce(
                    (acc, obj) =>
                    Object.keys(obj).reduce((a, k) => {
                        acc[k] = acc.hasOwnProperty(k) ? [].concat(acc[k]).concat(obj[k]) : obj[k];
                        return acc;
                    }, {}),{}
            );
            const object = {
                a: [{ x: 2 }, { y: 4 }],
                b: 1
            };
            const other = {
                // a: { z: 3 },
                a: 23333,
                b: [2, 3],
                c: 'foo'
            };
            // 属性合并
            let mergeObj = merge(object, other);  // { a: [ { x: 2 }, { y: 4 }, { z: 3 } ], b: [ 1, 2, 3 ], c: "foo" }
            console.log("mergeObj ",mergeObj)

            const target = { a: [{ x: 2 }, { y: 4 }], b: 1 };
            const source = { a: { z: 3 }, b: [2, 3], c: 'foo' };
            // 属性覆盖
            const returnedTarget = Object.assign(target, source);
            console.log("returnedTarget ",returnedTarget) 

            // 基于提供的函数对两个对象进行比较，以确定第一个对象中是否包含有第二个对象中相同的属性值。
            const matchesWith = (obj, source, fn) =>
                Object.keys(source).every(key =>
                    obj.hasOwnProperty(key) && fn
                    ? fn(obj[key], source[key], key, obj, source)
                    : obj[key] == source[key]
            );
            const isGreeting = val => /^h(?:i|ello)$/.test(val);
            let IsmatchesWidth = matchesWith(
                { a: 'hello' },
                { greeting: 'hi' },
                (oV, sV) => isGreeting(oV) && isGreeting(sV)
            );  // true
            console.log("IsmatchesWidth ",IsmatchesWidth)

            // 对两个对象进行比较，以确定第一个对象中是否包含有第二个对象中相同的属性值。
            const matches = (obj, source) =>
                Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
            let matchObjes1 = matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true });  // true
            let matchObjes2 = matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true });  // false
            console.log("matchObjes1_matchObjes2 ",matchObjes1,matchObjes2)



        },
        dothings(){
            // 使用 Object.keys() 和 Array.prototype.map() 迭代对象中的每一个键
            // 将迭代到的对象转换为一个带键值对的数组
            const objectToEntries = obj => Object.keys(obj).map(k => [k, obj[k]]);
            let v1 = objectToEntries({ a: 1, b: 2 });  // [ ["a", 1], ["b", 2] ]
            console.log("将迭代到的对象转换为一个带键值对的数组 ",v1)

            // 一个对象中的属性如果经过给定的函数运行后返回假值，就将其键值对组合为一个新的对象。
            const omitBy = (obj, fn) =>
            Object.keys(obj)
                .filter(k => !fn(obj[k], k))
                .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});
            let v2 = omitBy({ a: 1, b: '2', c: 3 }, x => typeof x === 'number');
            console.log("v2 ",v2)

            // 根据给定对象的键值对生成查询字符串。
            const objectToQueryString = queryParameters => {
                return queryParameters
                    ? Object.entries(queryParameters).reduce((queryString, [key, val], index) => {
                    const symbol = queryString.length === 0 ? '?' : '&';
                    queryString += typeof val === 'string' ? `${symbol}${key}=${val}` : '';
                    return queryString;
                    }, '')
                    : '';
            };
            let v3 = objectToQueryString({ page: '1', size: '2kg', key: undefined });  // "?page=1&size=2kg"
            console.log("v3 ",v3)

            // 根据给定的键值，将一个对象中于此对应的键值对进行过滤。
            const omit = (obj, arr) =>
            Object.keys(obj)
                .filter(k => !arr.includes(k))
                .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});
            let v4 = omit({ a: 1, b: '2', c: 3 }, ['b']);  // { a: 1, c: 3 }
            console.log("v4 ",v4)

            // 将数组对象根据指定的属性和排序方式进行排序。
            const orderBy = (arr, props, orders) =>
                [...arr].sort((a, b) =>
                    props.reduce((acc, prop, i) => {
                    if (acc === 0) {
                        const [p1, p2] = orders && orders[i] === 'desc' ? [b[prop], a[prop]] : [a[prop], b[prop]];
                        acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0;
                    }
                    return acc;
                    }, 0)
            );
            const users = [{ name: 'fred', age: 48 }, { name: 'barney', age: 36 }, { name: 'fred', age: 40 }];
            let v5 = orderBy(users, ['name', 'age'], ['asc', 'desc']);  // [{name: "barney", age: 36}, {name: "fred", age: 48}, {name: "fred", age: 40}]
            let v6 = orderBy(users, ['name', 'age']);  // [{name: "barney", age: 36}, {name: "fred", age: 40}, {name: "fred", age: 48}]
            console.log("v5 ",v5)
            console.log("v6 ",v6)

            // 将波浪号路径转换为绝对路径。
            const untildify = str => str.replace(/^~($|\/|\\)/, `${require('os').homedir()}$1`);
            let v7 = untildify('~/Downloads'); // '/Users/Vanessa/Downloads'
            console.log("v7 ",v7)

            // 检查当前环境是否为 Travis CI
            const isTravisCI = () => 'TRAVIS' in process.env && 'CI' in process.env;
            let v8 = isTravisCI();
            console.log("v8 ",v8)


        }
    },
}
</script>


