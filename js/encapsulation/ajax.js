function ajaxGet(url,cb,data){
    data = data || {};
    var str = "";
    for(var i in data){
        str += `${i}=${data[i]}&`;
    }
    url = url + "?" + str + "__qft=" + Date.now();
    
    var xhr = new XMLHttpRequest();
    xhr.open("get",url,true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            cb(xhr.responseText);
        }
    }
    xhr.send();
}



function ajaxPost(url,cb,data){
    data = data || {};
    let str = "";
    for(let i in data){
        str += `${i}=${data[i]}&`;
    }

    let ajax = new XMLHttpRequest();
    ajax.open("post",url);
    ajax.onreadystatechange = function(){
        if(ajax.readyState === 4 && ajax.status === 200){
            cb(ajax.responseText);
        }else if(ajax.readyState === 4 && ajax.status !== 200){
            cb("error:"+ajax.status);
        }
    }
    ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded")
    ajax.send(str.slice(0,-1));
}



function jsonp(url,cb,data){
    let str = "";
    for(var i in data){
        str += `${i}=${data[i]}&`;
    }
    let script = document.createElement("script");
    script.src = url + "?" + str + "__qft=" + Date.now();
    document.body.appendChild(script);
    window[data[data.columnName]] = function (res){
        cb(res);
        script.remove();
        window[data[data.columnName]] = null;
    }
}