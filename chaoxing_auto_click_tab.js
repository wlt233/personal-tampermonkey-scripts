// ==UserScript==
// @name         chaoxing_auto_click_tab
// @namespace    https://tqlwsl.moe/
// @version      0.1
// @description  get into correct tab when opening xuexitong
// @author       wlt233
// @match        *://i.chaoxing.com/base*
// @match        *://mooc2-ans.chaoxing.com/mycourse/stu*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=chaoxing.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    //if (document.getElementsByTagName("li")[6].innerText == '课程')
    //    document.getElementsByTagName("li")[6].click();
    if (document.getElementsByTagName("a")['课程'])
        document.getElementsByTagName("a")['课程'].click()
    if (document.getElementsByTagName("a")[10].innerText == '作业')
        document.getElementsByTagName("a")[10].click();
})();
