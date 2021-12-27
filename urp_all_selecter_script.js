// ==UserScript==
// @name         urp_all_selecter_script
// @namespace    https://tqlwsl.moe/
// @version      1.0
// @description  urp judge_teacher all_select_A
// @author       wlt233
// @include      https://urp.shou.edu.cn/student/teachingEvaluation/evaluation/index
// @include      https://urp.shou.edu.cn/student/teachingEvaluation/teachingEvaluation/evaluationPage
// @run-at       document-end
// @grant        none
// ==/UserScript==

// code by wlt233 | v1.0 2021.12.27

// 先生の事好きですかー？ (ハーイハイハイハーイハイ)
// 手を上げてない人は 居残りですよ
// ----イノコリ先生

(function() {
    'use strict';
    if (window.location.href == "https://urp.shou.edu.cn/student/teachingEvaluation/evaluation/index") {
        document.querySelectorAll("form")[2].target = "_blank";
        setTimeout(() =>{
            let buttons = document.querySelectorAll(".btn-purple");
            buttons.forEach( (i) => { i.click(); });
        }, 1000);
    }
    else if (window.location.href == "https://urp.shou.edu.cn/student/teachingEvaluation/teachingEvaluation/evaluationPage") {
        let inputs = document.querySelectorAll("input");
        inputs.forEach( (i) => { if (i.value.indexOf("_1") != -1) i.click(); });
        flag = true; // 特么没用，服务器端验证 30 秒
        setTimeout(() =>{ toEvaluation(); }, 31000);
    }
})();
