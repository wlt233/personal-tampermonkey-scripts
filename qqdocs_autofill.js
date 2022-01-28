// ==UserScript==
// @name         qqdocs_autofill
// @namespace    https://wlt233.com/
// @version      1.0
// @description  auto fill the qq docs form (for pandemic use)
// @author       wlt233
// @match        https://docs.qq.com/form/page/*
// @run-at       document-end
// @grant        none
// ==/UserScript==

// code by wlt233 | v1.0 2022.01.28

// ぐつぐつ明日が泡吹いて白目のままに茹で上がって
// 将来像 成功法 全部がpotatoになっていく
// ----potatoになっていく


(function() {
    'use strict';
    setTimeout(() =>{
        var event = new UIEvent('blur');
        var event2 = new Event('input', { bubbles: true});
        document.querySelectorAll(".question")[ 0].querySelector("textarea").value = "<学号>";
        document.querySelectorAll(".question")[ 0].querySelector("textarea").dispatchEvent(event);
        document.querySelectorAll(".question")[ 1].querySelector("textarea").value = "<姓名>";
        document.querySelectorAll(".question")[ 1].querySelector("textarea").dispatchEvent(event);
        document.querySelectorAll(".question")[ 2].querySelector("textarea").value = "<省市>";
        document.querySelectorAll(".question")[ 2].querySelector("textarea").dispatchEvent(event);
        document.querySelectorAll(".question")[ 3].querySelectorAll(".form-radio-option")[1].click(); // 0 for option 1 & 1 for option 2
        document.querySelectorAll(".question")[ 4].querySelector("textarea").value = "<住址>";
        document.querySelectorAll(".question")[ 4].querySelector("textarea").dispatchEvent(event);
        document.querySelectorAll(".question")[ 5].querySelector("textarea").value = "无";
        document.querySelectorAll(".question")[ 5].querySelector("textarea").dispatchEvent(event);
        document.querySelectorAll(".question")[ 6].querySelector("input").value = "36";
        document.querySelectorAll(".question")[ 6].querySelector("input").dispatchEvent(event2);
        document.querySelectorAll(".question")[ 7].querySelector("input").value = "36";
        document.querySelectorAll(".question")[ 7].querySelector("input").dispatchEvent(event2);
        document.querySelectorAll(".question")[ 8].querySelector("textarea").value = "<同住人数>";
        document.querySelectorAll(".question")[ 8].querySelector("textarea").dispatchEvent(event);
        document.querySelectorAll(".question")[ 9].querySelectorAll(".form-radio-option")[0].click();
        document.querySelectorAll(".question")[10].querySelectorAll(".form-radio-option")[0].click();
        document.querySelectorAll(".question")[11].querySelector("textarea").value = "";
        document.querySelectorAll(".question")[11].querySelector("textarea").dispatchEvent(event);
    }, 4000);
    setTimeout(() =>{
        document.querySelector(".question-commit").querySelector("button").click();
    }, 5000);
    setTimeout(() =>{
        document.querySelector(".dui-button.dui-modal-footer-ok.dui-button-type-primary.dui-button-size-default").click();
    }, 6000);
})();
