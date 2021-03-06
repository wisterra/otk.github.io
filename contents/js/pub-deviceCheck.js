﻿//---------------------------------------------------
// device check
// type : util
// usage :
// var device = getDeviceName();
// var mobileKind = getMobileKind();
//---------------------------------------------------

// w, m check
function getDeviceName() {
    var device = navigator.userAgent.match(/Android|Mobile|iP(hone|od|ad)|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/);    
    if (!device) {
        return 'w';
    } else {
        return 'm';        
    }
}

// ios, android check
function getMobileKind() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return 'ios';
    } else {
        return 'android';
    }
}
//---------------------------------------------------
// Modernizr
//---------------------------------------------------
// mobilesafari
Modernizr.addTest('mobilesafari', function () {
    return /iP(ad|hone|od).+Version\/[\d\.]+.*Safari/i.test(navigator.userAgent);
});

/*! User Agent to CSS - v0.1.1 - 2013-08-27
* https://github.com/oriSomething/uacss.js
* Copyright (c) 2013 ori Something; License: MIT */
!function (a, b, c, d) { "use strict"; function e(a, b) { var c, d, e, f; for (e in a) { f = "length" in a[e] ? a[e] : [a[e]], d = f.length; for (c = 0; d > c; c++) if (f[c].test(b)) return e } return r } function f(a, b) { var c, d = []; for (c in a) c !== b && d.push(c); return d } function g(a, b) { var c, d = a.length; for (c = 0; d > c; c++) if (a[c].test(b)) return !0; return !1 } function h(a) { if (!("language" in c)) return d; var b, e = c.language; e = e.toLocaleLowerCase(), b = e.split("-"), b.length > 0 && (a.language = b[0]), b.length > 1 && (a.region = b[1]) } function i(a, b) { var c, d, e, f, g, h = [], i = ""; for (c in b) if (f = b[c], null !== f) if ("string" == typeof f) h.push(o + c + "-" + f); else if (c === p) f && h.push(o + p); else if ("length" in f) for (e = f.length, d = 0; e > d; d++) g = c.replace("_", "-"), h.push(o + g + "-" + f[d]); i = h.join(" "), a.className += a.className.length > 0 ? " " + i : i } function j() { var d = {}, j = c.userAgent; for (var l in s) d[l] = e(s[l], j), d[q + l] = f(s[l], d[l]); d[p] = g(n, j), i(b.documentElement, d), h(d), "userAgentInfo" in a && (k = a.userAgentInfo), a.userAgentInfo = d } var k, l = { android: /\bAndroid\b/, ios: [/\bMobile\b.+\bSafari\b/, /\blike Mac OS X\b/], windows: /\bWindows\b/, osx: /\bMac OS X\b/, chromeos: /\bCrOS\b/, linux: [/\bUbuntu\b/, /\bFreeBSD\b/, /\bLinux\b/], blackberryos: /\bBlackBerry\b/, firefoxos: /\bMobile\b.+\bFirefox\b/ }, m = { opera: [/\bOpera\b/, /\bOPR\b/], chrome: [/\bChrome\b/, /\bCriOS\b/], firefox: /\bFirefox\b/, android: /\bAndroid\b/, blackberry: /\bBlackBerry\b/, nokia: /\bNokiaBrowser\b/, safari: /\bSafari\b/, ie: [/\bMSIE\b/, /\bTrident\b/, /\bIE\b/, /\bIEMobile\b/] }, n = [/Mobile\b/i, /\bWindows Phone\b/, /\bIEMobile\b/, /\bWindows\b.+\bARM\b/], o = "ua-", p = "mobile", q = "not_", r = "undefined", s = { os: l, browser: m }; j() }(window, window.document, window.navigator);