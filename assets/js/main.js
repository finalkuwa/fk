document.addEventListener('visibilitychange', function(){
    if (document.visibilityState == "hidden") {
        document.title = "你别走吖! - FinalKuwa";
    } else if (document.visibilityState == "visible") {
        document.title = "FinalKuwa";
    }
})

setInterval(function(){
    document.querySelector("#time").innerHTML = ~~((new Date().getTime() - 1738935172895)/86400000);
}, 1000)