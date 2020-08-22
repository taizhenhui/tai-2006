function move(ele, data, cb){
    clearInterval(ele.t);
    ele.t = setInterval(() => {
        var onoff = true;
        for(var attr in data){
            var iNow = attr === "opacity" ? getStyle(ele, attr) * 100 : parseInt(getStyle(ele, attr));

            var speed = (data[attr] - iNow)/10;
            speed = speed<0 ? Math.floor(speed) : Math.ceil(speed);

            if(data[attr] !== iNow) onoff = false;

            ele.style[attr] = attr === "opacity" ? (iNow + speed)/100 : iNow + speed + "px";
        }
        if(onoff){
            clearInterval(ele.t);
            cb && cb();
        }
    }, 30);
}



function getStyle(ele,attr){
    if(getComputedStyle){
        return getComputedStyle(ele,false)[attr];
    }else{
        return ele.currentStyle[attr];
    }
}