
// 补零
function createZero(n){
    return n<10 || n.length<2 ? "0"+n : n;
}

// 范围随机数
function random(max,min){
    return Math.round(Math.random()*(max-min)+min);
}

// 格式化日期

// 计算两个日期之间的差值

// 随机十六进制颜色
function randomColor(){
    var r = random(0,255).toString(16);
    var g = random(0,255).toString(16);
    var b = random(0,255).toString(16);
    return ("#" + createZero(r) + createZero(g) + createZero(b));
}

// 随机rgb颜色
function randomRGB(){
    return "rgb("+ random(0,255) +","+ random(0,255) +","+ random(0,255) +")"
}

// 数组去重

// 统计字符

// 字符去重

// 封装的计算平均数的功能
function avg(arr){
    var sum = 0;
    arr.forEach(function(val){
        sum += val;
    })
    return sum / arr.length;
}

// 获取非行内样式的兼容封装
function getStyle(ele, attr){
    if(ele.currentStyle){
        return ele.currentStyle[attr];
    }else{
        return getComputedStyle(ele,false)[attr];
    }
}

// 阻止事件冒泡：注意传参
function stopBubble(e){
    if(e.stopPropagation){
        e.stopPropagation();
    }else{
        e.cancelBubble = true;
    }
}

// 事件对象，阻止默认事件
function stopDefault(e){
    if(e.preventDefault){
        e.preventDefault();
    }else{
        e.returnValue = false;
    }
}

// 事件监听式绑定事件的兼容封装
function addEvent(ele, type, cb){
    if(ele.addEventListener){
        ele.addEventListener(type, cb);
    }else{
        ele.attachEvent("on"+type, cb);
    }
}

// 事件监听式删除事件的兼容封装
function removeEvent(ele, type, cb){
    if(ele.removeEventListener){
        ele.removeEventListener(type,cb);
    }else{
        ele.detachEvent("on"+type,cb);
    }
}

// 事件委托的封装：参数1：要委托的多个子元素；参数2：真正要做的事情
function eveEnt(child, cb){
    return function(eve){
        var e = eve || window.event;
        var tar = e.target || e.srcElement;
        for(var i=0;i<child.length;i++){
            if(tar === child[i]){
                cb.call(tar);
            }
        }
    }
}