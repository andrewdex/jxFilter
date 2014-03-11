/*
jxLoader
JS External Script Safe Loader 
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

    window.jxLoader = {

        loadScript: function (url, callback) {

            jxLoader.script = document.createElement("script");
            jxLoader.script.type = "text/javascript";

            if (jxLoader.script.readyState) { //IE
                jxLoader.script.onreadystatechange = function () {
                    if (jxLoader.script.readyState == "loaded" ||
                        jxLoader.script.readyState == "complete") {
                        jxLoader.script.onreadystatechange = null;
                        //  callback();
                    }

                    if (jxLoader.script.readyState == "error") {

                    }
                };

                jxLoader.script.onerror = function () {

                };
            } else { //Others

                jxLoader.script.onload = function () {

                    callback();
                };
                jxLoader.script.onerror = function () {

                };
            }

            if (jxLoader.ie_ver == 8) {

                alert("Its IE");

            } else {

                jxLoader.script.src = url;

                document.getElementsByTagName("head")[0].appendChild(jxLoader.script);
            }

        }

    };

})();
