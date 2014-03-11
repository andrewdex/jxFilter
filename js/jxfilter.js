/*
jxFilter
JS External Script Safe Filter 
Author: Dilusha Gonagala
Version : 1.0
License: MIT
*/

var ie8 = document.createElement("ie8");
var ie7 = document.createElement("ie7");
ie8.innerHTML = "<!--[if IE 8]><i></i><![endif]-->";
ie7.innerHTML = "<!--[if IE 7]><i></i><![endif]-->";
var isIe8 = (ie8.getElementsByTagName("i").length == 1);
var isIe7 = (ie7.getElementsByTagName("i").length == 1);
if (isIe8) {
    alert("WE DON'T LIKE YOUR BROWSER");
}
if (isIe7) {
    alert("WE DON'T LIKE YOUR BROWSER 1");
}

(function () {

    "use strict";

    window.jxFilter = {

        loadScript: function (url, callback) {

            jxFilter.script = document.createElement("script");
            jxFilter.script.type = "text/javascript";

            if (jxFilter.script.readyState) { //IE
                jxFilter.script.onreadystatechange = function () {
                    if (jxFilter.script.readyState == "loaded" ||
                        jxFilter.script.readyState == "complete") {
                        jxFilter.script.onreadystatechange = null;
                        //  callback();
                    }

                    if (jxFilter.script.readyState == "error") {

                    }
                };

                jxFilter.script.onerror = function () {

                };
            } else { //Others

                jxFilter.script.onload = function () {

                    callback();
                };
                jxFilter.script.onerror = function () {

                };
            }

            if (jxFilter.ie_ver == 8) {

                alert("Its IE");

            } else {

                jxFilter.script.src = url;

                document.getElementsByTagName("head")[0].appendChild(jxFilter.script);
            }

        }

    };

})();
