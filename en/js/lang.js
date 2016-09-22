function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; path=/; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}

function redirect2language(contextPath) {
    console.log("contextPath: " + contextPath);
    var referrer = document.referrer;
    console.log("referrer: " + referrer);
    var idx = contextPath.length - 3;
    var contextHost = contextPath.substr(0, idx);
    console.log("contextHost: " + contextHost);
    var userLang = getCookie('lang');
    console.log("userLang: " + userLang);
    var contextLang = contextPath.substr(idx, idx);
    console.log("contextLang: " + contextLang);
    var path = window.location.pathname.replace('/' + contextLang + '/', '/' + userLang + '/');
    console.log("path: " + path);
    if (referrer && !referrer.startsWith(contextHost)) {
        if (contextLang !== userLang) {
            window.location.pathname = path;
        }
    }
}

function redirect2blog() {
    var langCode = getCookie('lang') || navigator.language || navigator.systemLanguage;
    var lang = langCode.toLowerCase();
    lang = lang.substr(0,2);
    var dest = window.location.href;
    if (lang=="de") {
        window.location.pathname = window.location.pathname + "de/blog/"
    } else {
        window.location.pathname = window.location.pathname + "en/blog/"
    }
}