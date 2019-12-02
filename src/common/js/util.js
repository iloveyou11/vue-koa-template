//在min和max之间随即返回一个数
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// 随机洗牌
export function shuffle(arr) {
    var arr1 = arr.slice();
    for (var i = 0; i < arr1.length; i++) {
        var j = getRandomInt(0, i);
        var t = arr1[i];
        arr1[i] = arr1[j];
        arr1[j] = t;
    }
    return arr1
}


//  在这里声明一个函数  用来延时执行 某个函数
export function debounce(func, delay) {
    let timer;
    return function(...args) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay);
    }
}