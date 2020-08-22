function setCookie(key,val,ops){
    ops = ops || {};
    let exp = "";
    if(ops.expires){
        let d = new Date();
        d.setDate(d.getDate()+ops.expires);
        exp = `;expires=`+d;
    }
    let p = ops.path ? ";path=" + ops.path : "";
    document.cookie = `${key}=${val}`+ p + exp;
}

function getCookie(key){
    let arr = document.cookie.split("; ");
    for(let i=0;i<arr.length;i++){
        if(arr[i].split("=")[0] === key){
            return arr[i].split("=")[1];
        }
    }
    return "";
}

function removeCookie(key,ops){
    ops = ops || {};
    ops.expires = -1;
    setCookie(key,"1",ops)
}



