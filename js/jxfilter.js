/*
jxFilter
JS External Script Safe Filter
-just filter loading of scripts you don't need to load in type of browsers 
Author: Dilusha Gonagala
github : https://github.com/andrewdex
Version : 1.0 Beta
License: MIT
*/

(function (window, document) {

    "use strict";

    var jxFilter = {

       loadEnable: {

            ie7: 'false',
            ie8: 'false',
            others: 'true'

        },

        jxFilter_IEStatus: "",

        loadScript: function (url, callback) {

            jxFilter.script = document.createElement("script");
            jxFilter.script.type = "text/javascript";

            if (jxFilter.script.readyState) {
                jxFilter.script.onreadystatechange = function () {
                    if (jxFilter.script.readyState == "loaded" ||
                        jxFilter.script.readyState == "complete") {
                        jxFilter.script.onreadystatechange = null;

                        if (callback != null || "") {

                            callback();
                        }

                    }

                    if (jxFilter.script.readyState == "error") {

                    }
                };

                jxFilter.script.onerror = function () {
                };
            } else { //Others

                jxFilter.script.onload = function () {

                    if (callback != null || "") {

                        callback();
                    }
                };
                jxFilter.script.onerror = function () {

                };
            }

            if (jxFilter.loadEnable.ie8 == 'true' && jxFilter.jxFilter_IEStatus == "IE8") {
             
                jxFilter.scriptLoader(url);

            } else if (jxFilter.loadEnable.ie7 == 'true' && jxFilter.jxFilter_IEStatus == "IE7") {
              
                jxFilter.scriptLoader(url);



            } else if (jxFilter.loadEnable.others == 'true') {

                if (jxFilter.jxFilter_IEStatus != "IE8" && jxFilter.jxFilter_IEStatus != "IE7") {
                    jxFilter.scriptLoader(url);
                }


            } else {

                //console.log("Nothing to load");

            }

        },

        scriptLoader: function (url) {

            jxFilter.script.src = url;

            document.getElementsByTagName("head")[0].appendChild(jxFilter.script);

        },

        //Global Option Setter
        Enable: function (newOptions) {

         if (typeof newOptions === "object") {

                this.loadEnable = newOptions;

            }
        }

    };

    var sBrowser, sUsrAg = navigator.userAgent;

    if (sUsrAg.indexOf("Chrome") > -1) {
        sBrowser = "Google Chrome";
    } else if (sUsrAg.indexOf("Safari") > -1) {
        sBrowser = "Apple Safari";
    } else if (sUsrAg.indexOf("Opera") > -1) {
        sBrowser = "Opera";
    } else if (sUsrAg.indexOf("Firefox") > -1) {
        sBrowser = "Mozilla Firefox";
    } else if (sUsrAg.indexOf("MSIE") > -1) {
        sBrowser = "Microsoft Internet Explorer";
    }

    var ie8 = document.createElement("ie8");
    var ie7 = document.createElement("ie7");
    ie8.innerHTML = "<!--[if IE 8]><i></i><![endif]-->";
    ie7.innerHTML = "<!--[if IE 7]><i></i><![endif]-->";
    var isIe8 = (ie8.getElementsByTagName("i").length == 1);
    var isIe7 = (ie7.getElementsByTagName("i").length == 1);

    if (isIe8) {
        //alert("WE DON'T LIKE YOUR BROWSER");
        jxFilter.jxFilter_IEStatus = "IE8";

    }
    if (isIe7) {
        jxFilter.jxFilter_IEStatus = "IE7";
    }

    window.jxFilter = jxFilter;

})(window, document);
