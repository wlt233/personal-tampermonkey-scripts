// ==UserScript==
// @name         koukao_fast_login
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  koukao_fast_login
// @author       wlt233
// @include      *://www.koukao.cn/Home/StudentLogin*
// @grant        none
// ==/UserScript==
window.onload = function(){
    'use strict';
    document.getElementById("schoolname").value = "$school_name";
    document.getElementById("show_schoolname").value = "$school_name";
    document.getElementById("studentId").value = "$student_id_prefix";
    document.getElementById("studentId").oninput = function () {
        document.getElementById("schoolid").value = "$school_id"; // example: 23000000010000xxxxx
        let nameList = {
            "$student_id": "$student_name",
            // ...
        };
        if (document.getElementById("studentId").value in nameList) {
            document.getElementById("studentName").value = nameList[document.getElementById("studentId").value];
        }
    }

    document.getElementById("loginBtnUserPwd").onclick = function(){
        setTimeout(function(){
            window.location = "http://www.koukao.cn/StudentReport/SchoolStuScoreList";
        }, 2000)
    };
}
